"use client";

import { useEffect, useRef } from "react";
import { deck, toggleFullscreen, toggleTheme } from "./stores";

export type KeyActions = Partial<Record<"sidebar" | "notes" | "overview" | "presenter" | "help" | "review" | "escape", () => void>>;

/** Global presentation shortcuts. Navigation keys are shared; panel keys are per view. */
export function useDeckKeys(actions: KeyActions) {
  const ref = useRef(actions);
  useEffect(() => {
    ref.current = actions;
  });

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.defaultPrevented || e.ctrlKey || e.metaKey || e.altKey) return;
      const t = e.target as HTMLElement | null;
      if (t && (t.isContentEditable || ["INPUT", "TEXTAREA", "SELECT"].includes(t.tagName))) return;

      const a = ref.current;
      const map: Record<string, (() => void) | undefined> = {
        ArrowRight: deck.next,
        ArrowDown: deck.next,
        PageDown: deck.next,
        " ": deck.next,
        Enter: deck.next,
        ArrowLeft: deck.prev,
        ArrowUp: deck.prev,
        PageUp: deck.prev,
        Backspace: deck.prev,
        Home: () => deck.goto(0),
        End: () => deck.goto(deck.total - 1),
        f: toggleFullscreen,
        t: toggleTheme,
        r: deck.toggleReveal,
        b: deck.toggleBlackout,
        ".": deck.toggleBlackout,
        s: a.sidebar,
        n: a.notes,
        g: a.overview,
        o: a.overview,
        p: a.presenter,
        e: a.review,
        "?": a.help,
        h: a.help,
        Escape: a.escape,
      };
      const fn = map[e.key.length === 1 ? e.key.toLowerCase() : e.key];
      if (fn) {
        e.preventDefault();
        fn();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);
}

/** Moves a specular highlight across whichever glass surface the pointer is over. */
export function useGlassSheen() {
  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      const el = (e.target as HTMLElement | null)?.closest?.<HTMLElement>(".glass");
      if (!el) return;
      const r = el.getBoundingClientRect();
      el.style.setProperty("--mx", `${((e.clientX - r.left) / r.width) * 100}%`);
      el.style.setProperty("--my", `${((e.clientY - r.top) / r.height) * 100}%`);
    };
    document.addEventListener("pointermove", onMove, { passive: true });
    return () => document.removeEventListener("pointermove", onMove);
  }, []);
}
