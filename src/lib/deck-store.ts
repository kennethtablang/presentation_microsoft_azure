"use client";

import { useSyncExternalStore } from "react";
import type { Block, Slide } from "./types";

/* ───────────────────────── Deck navigation ─────────────────────────
 * One store per course per window. Navigation is mirrored to the URL hash
 * (so refreshes and shared links land on the same slide) and broadcast
 * to other windows of the same course (deck ⇄ presenter view) over a
 * course-specific BroadcastChannel, so two courses never drive each other.
 */

export type DeckState = { index: number; revealed: boolean; blackout: boolean };

type Message = { type: "state"; state: DeckState } | { type: "hello" };

export type DeckStore = {
  useDeck: () => DeckState;
  deck: {
    total: number;
    goto: (index: number, revealed?: boolean) => void;
    next: () => void;
    prev: () => void;
    toggleReveal: () => void;
    toggleBlackout: () => void;
  };
};

/** Whether a slide contains content hidden until the presenter reveals it. */
export function hasReveal(slide: Slide): boolean {
  const check = (blocks: Block[] | undefined): boolean =>
    !!blocks?.some((b) => {
      if (b.type === "columns") return b.cols.some(check);
      if (b.type === "quiz") return true;
      if (b.type === "table") return b.revealCol !== undefined;
      if (b.type === "callout") return !!b.answer;
      return false;
    });
  return check(slide.blocks);
}

const SERVER_STATE: DeckState = { index: 0, revealed: false, blackout: false };
const stores = new Map<string, DeckStore>();

export function deckStoreFor(key: string, slides: Slide[]): DeckStore {
  const existing = stores.get(key);
  if (existing) return existing;

  const total = slides.length;
  let state: DeckState = SERVER_STATE;
  let initialized = false;
  let channel: BroadcastChannel | null = null;
  const listeners = new Set<() => void>();
  const clamp = (i: number) => Math.min(Math.max(i, 0), total - 1);

  const indexFromHash = (): number | null => {
    const n = Number.parseInt(window.location.hash.replace(/^#\/?/, ""), 10);
    return Number.isFinite(n) ? clamp(n - 1) : null;
  };

  const apply = (next: DeckState, { broadcast }: { broadcast: boolean }) => {
    if (next.index === state.index && next.revealed === state.revealed && next.blackout === state.blackout) return;
    state = next;
    const hash = `#${next.index + 1}`;
    if (window.location.hash !== hash) history.replaceState(null, "", hash);
    if (broadcast) channel?.postMessage({ type: "state", state: next } satisfies Message);
    listeners.forEach((l) => l());
  };

  const init = () => {
    if (initialized || typeof window === "undefined") return;
    initialized = true;
    const fromHash = indexFromHash();
    if (fromHash !== null) state = { ...state, index: fromHash };

    if ("BroadcastChannel" in window) {
      channel = new BroadcastChannel(`deck-${key}`);
      channel.onmessage = (e: MessageEvent<Message>) => {
        if (e.data.type === "state") apply({ ...e.data.state, index: clamp(e.data.state.index) }, { broadcast: false });
        else if (e.data.type === "hello") channel?.postMessage({ type: "state", state } satisfies Message);
      };
      channel.postMessage({ type: "hello" } satisfies Message);
    }

    window.addEventListener("hashchange", () => {
      const i = indexFromHash();
      if (i !== null && i !== state.index) apply({ index: i, revealed: false, blackout: false }, { broadcast: true });
    });
  };

  const subscribe = (listener: () => void) => {
    init();
    listeners.add(listener);
    return () => {
      listeners.delete(listener);
    };
  };

  const deck: DeckStore["deck"] = {
    total,
    goto(index, revealed = false) {
      apply({ index: clamp(index), revealed, blackout: false }, { broadcast: true });
    },
    next() {
      if (!state.revealed && hasReveal(slides[state.index])) {
        apply({ ...state, revealed: true, blackout: false }, { broadcast: true });
      } else if (state.index < total - 1) {
        deck.goto(state.index + 1);
      }
    },
    prev() {
      if (state.index === 0) return;
      // Going back lands on the previous slide fully built, like PowerPoint.
      deck.goto(state.index - 1, hasReveal(slides[state.index - 1]));
    },
    toggleReveal() {
      apply({ ...state, revealed: !state.revealed }, { broadcast: true });
    },
    toggleBlackout() {
      apply({ ...state, blackout: !state.blackout }, { broadcast: true });
    },
  };

  const store: DeckStore = {
    useDeck: () => useSyncExternalStore(subscribe, () => state, () => SERVER_STATE),
    deck,
  };
  stores.set(key, store);
  return store;
}
