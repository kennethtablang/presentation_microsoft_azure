"use client";

import { useSyncExternalStore } from "react";
import { THEME_KEY } from "./theme-boot";

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
