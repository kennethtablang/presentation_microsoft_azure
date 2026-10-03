"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Eye, EyeOff, Maximize, Minimize, Moon, Pause, Play, RotateCcw, Square, Sun, Type } from "lucide-react";
import { hasReveal, slides } from "@/content/slides";
import { deck, toggleFullscreen, toggleTheme, useDeck, useFullscreen, useNow, useTheme } from "@/lib/stores";
import { useDeckKeys, useGlassSheen } from "@/lib/useKeys";
import { Backdrop, Help, ToolButton } from "./Chrome";
import { NotesView } from "./NotesView";
import { SlideFrame, SlideView } from "./SlideView";

type Timer = { startedAt: number | null; accumulated: number };

function fmt(ms: number) {
  const s = Math.max(0, Math.floor(ms / 1000));
  const h = Math.floor(s / 3600);
  const m = Math.floor((s % 3600) / 60);
  const sec = s % 60;
  const pad = (n: number) => String(n).padStart(2, "0");
  return h ? `${h}:${pad(m)}:${pad(sec)}` : `${pad(m)}:${pad(sec)}`;
}

export function Presenter() {
  const { index, revealed, blackout } = useDeck();
  const now = useNow();
  const theme = useTheme();
  const fullscreen = useFullscreen();
  const [timer, setTimer] = useState<Timer>({ startedAt: null, accumulated: 0 });
  const [fontScale, setFontScale] = useState(1);
  const [help, setHelp] = useState(false);

  useGlassSheen();
  useDeckKeys({ help: () => setHelp((v) => !v), escape: () => setHelp(false) });

  const slide = slides[index];
  const next = slides[index + 1];
  const running = timer.startedAt !== null;
  const elapsed = timer.accumulated + (running && now ? Math.max(0, now - (timer.startedAt ?? now)) : 0);
  const clock = now ? new Date(now).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) : "--:--";
  const revealable = hasReveal(slide);

  const toggleTimer = () =>
    setTimer((t) =>
      t.startedAt === null ? { ...t, startedAt: Date.now() } : { startedAt: null, accumulated: t.accumulated + (Date.now() - t.startedAt) },
    );

  return (
    <div className="presenter">
      <Backdrop />
      <header className="glass presenter-bar">
        <div className="presenter-title">
          <span className="kicker">Presenter view</span>
          <strong>{slide.section}</strong>
        </div>
        <div className="presenter-clock">
          <div className="timer" aria-label="Elapsed time">
            <span className={`timer-val ${running ? "is-running" : ""}`}>{fmt(elapsed)}</span>
            <ToolButton label={running ? "Pause timer" : "Start timer"} onClick={toggleTimer}>
              {running ? <Pause size={18} /> : <Play size={18} />}
            </ToolButton>
            <ToolButton label="Reset timer" onClick={() => setTimer({ startedAt: null, accumulated: 0 })}>
              <RotateCcw size={18} />
            </ToolButton>
          </div>
          <span className="clock" aria-label="Current time">
            {clock}
          </span>
        </div>
        <div className="presenter-tools">
          <ToolButton label="Smaller notes" onClick={() => setFontScale((s) => Math.max(0.8, +(s - 0.1).toFixed(1)))}>
            <Type size={15} />
          </ToolButton>
          <ToolButton label="Larger notes" onClick={() => setFontScale((s) => Math.min(1.6, +(s + 0.1).toFixed(1)))}>
            <Type size={21} />
          </ToolButton>
          <ToolButton label={theme === "dark" ? "Light mode" : "Dark mode"} shortcut="T" onClick={toggleTheme}>
            {theme === "dark" ? <Sun size={19} /> : <Moon size={19} />}
          </ToolButton>
          <ToolButton label={fullscreen ? "Exit full screen" : "Full screen"} shortcut="F" onClick={toggleFullscreen}>
            {fullscreen ? <Minimize size={19} /> : <Maximize size={19} />}
          </ToolButton>
        </div>
      </header>

      <section className="presenter-current">
        <div className="presenter-label">
          <span>
            Current · {index + 1} / {slides.length}
          </span>
          {blackout && <span className="badge-warn">Screen blanked (B)</span>}
          {revealable && <span className={`badge ${revealed ? "is-on" : ""}`}>{revealed ? "Answers shown" : "Answers hidden"}</span>}
        </div>
        <div className="glass presenter-slide">
          <SlideFrame>
            <SlideView slide={slide} index={index} total={slides.length} revealed={revealed} />
          </SlideFrame>
        </div>
        <div className="glass presenter-controls">
          <ToolButton label="Previous slide" shortcut="←" onClick={deck.prev}>
            <ChevronLeft size={22} />
          </ToolButton>
          <ToolButton label={revealed ? "Hide answers" : "Reveal answers"} shortcut="R" onClick={deck.toggleReveal} active={revealed}>
            {revealed ? <EyeOff size={20} /> : <Eye size={20} />}
          </ToolButton>
          <ToolButton label={blackout ? "Show slide" : "Blank screen"} shortcut="B" onClick={deck.toggleBlackout} active={blackout}>
            <Square size={20} />
          </ToolButton>
          <ToolButton label="Next slide" shortcut="→" onClick={deck.next}>
            <ChevronRight size={22} />
          </ToolButton>
        </div>
      </section>

      <aside className="presenter-side">
        <div className="presenter-label">
          <span>{next ? `Next · ${index + 2}` : "End of deck"}</span>
        </div>
        <div className="glass presenter-next">
          {next ? (
            <SlideFrame>
              <SlideView slide={next} index={index + 1} total={slides.length} revealed={false} />
            </SlideFrame>
          ) : (
            <p className="notes-empty">You&rsquo;ve reached the last slide.</p>
          )}
        </div>
        <div className="presenter-label">
          <span>Speaker notes & discussion</span>
        </div>
        <div className="glass presenter-notes" style={{ fontSize: `${fontScale}rem` }}>
          <h2>{slide.title}</h2>
          <NotesView notes={slide.notes} />
        </div>
      </aside>

      {help && <Help onClose={() => setHelp(false)} />}
    </div>
  );
}
