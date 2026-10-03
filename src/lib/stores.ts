"use client";

import { useSyncExternalStore } from "react";
import { hasReveal, slides } from "@/content/slides";
import { THEME_KEY } from "./theme-boot";

/* ───────────────────────── Deck navigation ─────────────────────────
 * One shared store per window. Navigation is mirrored to the URL hash
 * (so refreshes and shared links land on the same slide) and broadcast
 * to other windows (main deck ⇄ presenter view) over BroadcastChannel.
 */

export type DeckState = { index: number; revealed: boolean; blackout: boolean };

type Message = { type: "state"; state: DeckState } | { type: "hello" };

const CHANNEL = "ai-901-deck";
const total = slides.length;
const SERVER_STATE: DeckState = { index: 0, revealed: false, blackout: false };

let state: DeckState = SERVER_STATE;
let initialized = false;
let channel: BroadcastChannel | null = null;
const listeners = new Set<() => void>();

const clamp = (i: number) => Math.min(Math.max(i, 0), total - 1);

function indexFromHash(): number | null {
  const n = Number.parseInt(window.location.hash.replace(/^#\/?/, ""), 10);
  return Number.isFinite(n) ? clamp(n - 1) : null;
}

function emit() {
  listeners.forEach((l) => l());
}

function apply(next: DeckState, { broadcast }: { broadcast: boolean }) {
  if (next.index === state.index && next.revealed === state.revealed && next.blackout === state.blackout) return;
  state = next;
  const hash = `#${next.index + 1}`;
  if (window.location.hash !== hash) history.replaceState(null, "", hash);
  if (broadcast) channel?.postMessage({ type: "state", state: next } satisfies Message);
  emit();
}

function init() {
  if (initialized || typeof window === "undefined") return;
  initialized = true;
  const fromHash = indexFromHash();
  if (fromHash !== null) state = { ...state, index: fromHash };

  if ("BroadcastChannel" in window) {
    channel = new BroadcastChannel(CHANNEL);
    channel.onmessage = (e: MessageEvent<Message>) => {
      if (e.data.type === "state") apply(e.data.state, { broadcast: false });
      else if (e.data.type === "hello") channel?.postMessage({ type: "state", state } satisfies Message);
    };
    channel.postMessage({ type: "hello" } satisfies Message);
  }

  window.addEventListener("hashchange", () => {
    const i = indexFromHash();
    if (i !== null && i !== state.index) apply({ index: i, revealed: false, blackout: false }, { broadcast: true });
  });
}

function subscribe(listener: () => void) {
  init();
  listeners.add(listener);
  return () => listeners.delete(listener);
}

export function useDeck(): DeckState {
  return useSyncExternalStore(subscribe, () => state, () => SERVER_STATE);
}

export const deck = {
  total,
  goto(index: number, revealed = false) {
    apply({ index: clamp(index), revealed, blackout: false }, { broadcast: true });
  },
  next() {
    const current = slides[state.index];
    if (!state.revealed && hasReveal(current)) {
      apply({ ...state, revealed: true, blackout: false }, { broadcast: true });
    } else if (state.index < total - 1) {
      deck.goto(state.index + 1);
    }
  },
  prev() {
    if (state.index === 0) return;
    const target = slides[state.index - 1];
    // Going back lands on the previous slide fully built, like PowerPoint.
    deck.goto(state.index - 1, hasReveal(target));
  },
  toggleReveal() {
    apply({ ...state, revealed: !state.revealed }, { broadcast: true });
  },
  toggleBlackout() {
    apply({ ...state, blackout: !state.blackout }, { broadcast: true });
  },
};

/* ───────────────────────── Theme ───────────────────────── */

export type Theme = "light" | "dark";
const themeListeners = new Set<() => void>();

function readTheme(): Theme {
  return document.documentElement.dataset.theme === "light" ? "light" : "dark";
}

function subscribeTheme(listener: () => void) {
  themeListeners.add(listener);
  const onStorage = (e: StorageEvent) => {
    if (e.key === THEME_KEY && (e.newValue === "light" || e.newValue === "dark")) {
      document.documentElement.dataset.theme = e.newValue;
      themeListeners.forEach((l) => l());
    }
  };
  window.addEventListener("storage", onStorage);
  return () => {
    themeListeners.delete(listener);
    window.removeEventListener("storage", onStorage);
  };
}

export function useTheme(): Theme {
  return useSyncExternalStore(subscribeTheme, readTheme, () => "dark");
}

export function toggleTheme() {
  const next: Theme = readTheme() === "dark" ? "light" : "dark";
  document.documentElement.dataset.theme = next;
  try {
    localStorage.setItem(THEME_KEY, next);
  } catch {
    /* storage unavailable (private mode); theme still applies for this session */
  }
  themeListeners.forEach((l) => l());
}


/* ───────────────────────── Fullscreen ───────────────────────── */

function subscribeFullscreen(listener: () => void) {
  document.addEventListener("fullscreenchange", listener);
  return () => document.removeEventListener("fullscreenchange", listener);
}

export function useFullscreen(): boolean {
  return useSyncExternalStore(subscribeFullscreen, () => !!document.fullscreenElement, () => false);
}

export function toggleFullscreen() {
  if (document.fullscreenElement) {
    void document.exitFullscreen();
  } else {
    document.documentElement.requestFullscreen?.().catch(() => {
      /* fullscreen can be refused (iframe, iOS Safari); ignore */
    });
  }
}

/* ───────────────────────── Clock (1s tick) ───────────────────────── */

let now = 0;
let clockTimer: ReturnType<typeof setInterval> | null = null;
const clockListeners = new Set<() => void>();

function subscribeClock(listener: () => void) {
  clockListeners.add(listener);
  if (!clockTimer) {
    now = Date.now();
    clockTimer = setInterval(() => {
      now = Date.now();
      clockListeners.forEach((l) => l());
    }, 1000);
  }
  return () => {
    clockListeners.delete(listener);
    if (clockListeners.size === 0 && clockTimer) {
      clearInterval(clockTimer);
      clockTimer = null;
    }
  };
}

/** Current time in ms, updated every second. 0 during server render. */
export function useNow(): number {
  return useSyncExternalStore(subscribeClock, () => now, () => 0);
}
