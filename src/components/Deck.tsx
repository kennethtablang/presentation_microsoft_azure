"use client";

import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";
import { slides } from "@/content/slides";
import { deck, useDeck, useFullscreen } from "@/lib/stores";
import { useDeckKeys, useGlassSheen } from "@/lib/useKeys";
import { Backdrop, Help, Overview, Sidebar, ToolButton, Toolbar, openReview } from "./Chrome";
import { NotesView } from "./NotesView";
import { SlideFrame, SlideView } from "./SlideView";

const IDLE_MS = 2600;

export function openPresenter(index: number) {
  const win = window.open(`/presenter#${index + 1}`, "ai901-presenter", "popup,width=1440,height=900");
  win?.focus();
}

export function Deck() {
  const { index, revealed, blackout } = useDeck();
  const fullscreen = useFullscreen();
  const [sidebar, setSidebar] = useState(false);
  const [notes, setNotes] = useState(false);
  const [overview, setOverview] = useState(false);
  const [help, setHelp] = useState(false);
  const [idle, setIdle] = useState(false);
  const idleTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const touch = useRef<{ x: number; y: number } | null>(null);

  const slide = slides[index];

  // Remember the slide we're leaving so it can animate out while the new one animates in.
  // Direction (+1 forward, -1 back) decides which side each slide moves toward.
  const [trans, setTrans] = useState({ index, revealed, prev: null as number | null, prevRevealed: false, dir: 1 });
  if (trans.index !== index) {
    setTrans({ index, revealed, prev: trans.index, prevRevealed: trans.revealed, dir: index > trans.index ? 1 : -1 });
  } else if (trans.revealed !== revealed) {
    setTrans({ ...trans, revealed });
  }
  const dirStyle = { "--dir": trans.dir } as React.CSSProperties;

  useGlassSheen();
  useDeckKeys({
    sidebar: () => setSidebar((v) => !v),
    notes: () => setNotes((v) => !v),
    overview: () => setOverview((v) => !v),
    presenter: () => openPresenter(index),
    review: openReview,
    help: () => setHelp((v) => !v),
    escape: () => {
      setHelp(false);
      setOverview(false);
      setSidebar(false);
      setNotes(false);
    },
  });

  // Hide the toolbar and cursor after a moment of inactivity while in full screen.
  useEffect(() => {
    const wake = () => {
      setIdle(false);
      if (idleTimer.current) clearTimeout(idleTimer.current);
      idleTimer.current = setTimeout(() => setIdle(true), IDLE_MS);
    };
    window.addEventListener("pointermove", wake);
    window.addEventListener("keydown", wake);
    return () => {
      window.removeEventListener("pointermove", wake);
      window.removeEventListener("keydown", wake);
      if (idleTimer.current) clearTimeout(idleTimer.current);
    };
  }, []);

  useEffect(() => {
    document.title = `${index + 1}. ${slide.title} · AI-901`;
  }, [index, slide.title]);

  const chromeHidden = fullscreen && idle && !sidebar && !notes;

  return (
    <div className={`app ${sidebar ? "has-sidebar" : ""} ${notes ? "has-notes" : ""} ${chromeHidden ? "is-idle" : ""}`}>
      <Backdrop />
      <div className="progress" aria-hidden>
        <div className="progress-fill" style={{ width: `${((index + 1) / slides.length) * 100}%` }} />
      </div>

      <Sidebar open={sidebar} index={index} onClose={() => setSidebar(false)} />

      <main
        className="stage"
        onTouchStart={(e) => {
          const t = e.touches[0];
          touch.current = { x: t.clientX, y: t.clientY };
        }}
        onTouchEnd={(e) => {
          const start = touch.current;
          touch.current = null;
          if (!start) return;
          const t = e.changedTouches[0];
          const dx = t.clientX - start.x;
          if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(t.clientY - start.y)) {
            if (dx < 0) deck.next();
            else deck.prev();
          }
        }}
      >
        <SlideFrame>
          {trans.prev !== null && trans.prev !== index && (
            <div
              key={`exit-${slides[trans.prev].id}`}
              className="slide-layer slide-exit"
              style={dirStyle}
              aria-hidden
              onAnimationEnd={(e) => {
                if (e.target === e.currentTarget) setTrans((t) => ({ ...t, prev: null }));
              }}
            >
              <SlideView slide={slides[trans.prev]} index={trans.prev} total={slides.length} revealed={trans.prevRevealed} still />
            </div>
          )}
          <div key={slide.id} className="slide-layer slide-anim" style={dirStyle}>
            <SlideView slide={slide} index={index} total={slides.length} revealed={revealed} />
          </div>
        </SlideFrame>
      </main>

      <section className={`glass notes-drawer ${notes ? "is-open" : ""}`} aria-label="Speaker notes" aria-hidden={!notes} inert={!notes}>
        <div className="notes-drawer-head">
          <div>
            <p className="kicker">Speaker notes · slide {index + 1}</p>
            <h2>{slide.title}</h2>
          </div>
          <ToolButton label="Close notes" onClick={() => setNotes(false)}>
            <X size={20} />
          </ToolButton>
        </div>
        <div className="notes-drawer-body">
          <NotesView notes={slide.notes} />
        </div>
      </section>

      <Toolbar
        index={index}
        hidden={chromeHidden}
        sidebar={sidebar}
        overview={overview}
        onSidebar={() => setSidebar((v) => !v)}
        onOverview={() => setOverview((v) => !v)}
      />

      {overview && <Overview index={index} onClose={() => setOverview(false)} />}
      {help && <Help onClose={() => setHelp(false)} />}
      <div className={`blackout ${blackout ? "is-on" : ""}`} onClick={deck.toggleBlackout} aria-hidden={!blackout} />
    </div>
  );
}
