"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Keyboard, LayoutGrid, Maximize, Minimize, Moon, NotebookPen, PanelLeft, Presentation, Sun, X } from "lucide-react";
import { slides } from "@/content/slides";
import { deck, toggleFullscreen, toggleTheme, useFullscreen, useTheme } from "@/lib/stores";
import { SlideFrame, SlideView } from "./SlideView";

/** A toolbar button that drops focus after clicking so Space/Enter keep driving the deck. */
export function ToolButton({
  label,
  onClick,
  active,
  children,
  shortcut,
}: {
  label: string;
  onClick: () => void;
  active?: boolean;
  children: React.ReactNode;
  shortcut?: string;
}) {
  return (
    <button
      type="button"
      className={`tool-btn ${active ? "is-active" : ""}`}
      aria-label={label}
      aria-pressed={active}
      title={shortcut ? `${label} (${shortcut})` : label}
      onClick={(e) => {
        onClick();
        e.currentTarget.blur();
      }}
    >
      {children}
    </button>
  );
}

export function Toolbar({
  index,
  hidden,
  sidebar,
  notes,
  overview,
  onSidebar,
  onNotes,
  onOverview,
  onPresenter,
  onHelp,
}: {
  index: number;
  hidden: boolean;
  sidebar: boolean;
  notes: boolean;
  overview: boolean;
  onSidebar: () => void;
  onNotes: () => void;
  onOverview: () => void;
  onPresenter: () => void;
  onHelp: () => void;
}) {
  const theme = useTheme();
  const fullscreen = useFullscreen();
  return (
    <nav className={`glass toolbar ${hidden ? "is-hidden" : ""}`} aria-label="Presentation controls">
      <ToolButton label="Slide list" shortcut="S" onClick={onSidebar} active={sidebar}>
        <PanelLeft size={20} />
      </ToolButton>
      <span className="tool-sep" />
      <ToolButton label="Previous slide" shortcut="←" onClick={deck.prev}>
        <ChevronLeft size={22} />
      </ToolButton>
      <span className="tool-count" aria-live="polite">
        {index + 1}
        <span> / {deck.total}</span>
      </span>
      <ToolButton label="Next slide" shortcut="→" onClick={deck.next}>
        <ChevronRight size={22} />
      </ToolButton>
      <span className="tool-sep" />
      <ToolButton label="Speaker notes" shortcut="N" onClick={onNotes} active={notes}>
        <NotebookPen size={20} />
      </ToolButton>
      <ToolButton label="Slide overview" shortcut="G" onClick={onOverview} active={overview}>
        <LayoutGrid size={20} />
      </ToolButton>
      <ToolButton label="Presenter view" shortcut="P" onClick={onPresenter}>
        <Presentation size={20} />
      </ToolButton>
      <ToolButton label={theme === "dark" ? "Light mode" : "Dark mode"} shortcut="T" onClick={toggleTheme}>
        {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
      </ToolButton>
      <ToolButton label={fullscreen ? "Exit full screen" : "Full screen"} shortcut="F" onClick={toggleFullscreen}>
        {fullscreen ? <Minimize size={20} /> : <Maximize size={20} />}
      </ToolButton>
      <ToolButton label="Keyboard shortcuts" shortcut="?" onClick={onHelp}>
        <Keyboard size={20} />
      </ToolButton>
    </nav>
  );
}

export function Sidebar({ open, index, onClose }: { open: boolean; index: number; onClose: () => void }) {
  const [query, setQuery] = useState("");
  const listRef = useRef<HTMLDivElement>(null);

  const groups = useMemo(() => {
    const q = query.trim().toLowerCase();
    const out: { section: string; items: { i: number; title: string }[] }[] = [];
    slides.forEach((s, i) => {
      if (q && !`${s.title} ${s.kicker ?? ""} ${s.section}`.toLowerCase().includes(q)) return;
      const last = out[out.length - 1];
      if (last && last.section === s.section) last.items.push({ i, title: s.title });
      else out.push({ section: s.section, items: [{ i, title: s.title }] });
    });
    return out;
  }, [query]);

  useEffect(() => {
    if (!open) return;
    listRef.current?.querySelector<HTMLElement>(".is-current")?.scrollIntoView({ block: "center" });
  }, [open, index]);

  return (
    <aside className={`glass sidebar ${open ? "is-open" : ""}`} aria-label="Slides" aria-hidden={!open} inert={!open}>
      <div className="sidebar-head">
        <div>
          <p className="kicker">AI-901</p>
          <h2>Slides</h2>
        </div>
        <ToolButton label="Close slide list" onClick={onClose}>
          <X size={20} />
        </ToolButton>
      </div>
      <input
        className="glass-input"
        type="search"
        placeholder="Search slides…"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        aria-label="Search slides"
      />
      <div className="sidebar-list" ref={listRef}>
        {groups.length === 0 && <p className="notes-empty">No slides match “{query}”.</p>}
        {groups.map((g, gi) => (
          <div key={`${g.section}-${gi}`} className="sidebar-group">
            <h3>{g.section}</h3>
            {g.items.map(({ i, title }) => (
              <button
                key={i}
                type="button"
                className={`sidebar-item ${i === index ? "is-current" : ""}`}
                aria-current={i === index ? "true" : undefined}
                onClick={() => deck.goto(i)}
              >
                <span className="sidebar-num">{i + 1}</span>
                <span>{title}</span>
              </button>
            ))}
          </div>
        ))}
      </div>
    </aside>
  );
}

export function Overview({ index, onClose }: { index: number; onClose: () => void }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    ref.current?.querySelector<HTMLElement>(".is-current")?.scrollIntoView({ block: "center" });
  }, []);
  return (
    <div className="overlay overview" role="dialog" aria-modal="true" aria-label="Slide overview">
      <div className="overlay-head">
        <h2>All slides</h2>
        <ToolButton label="Close overview" onClick={onClose}>
          <X size={22} />
        </ToolButton>
      </div>
      <div className="overview-grid" ref={ref}>
        {slides.map((s, i) => (
          <button
            key={s.id}
            type="button"
            className={`thumb ${i === index ? "is-current" : ""}`}
            onClick={() => {
              deck.goto(i);
              onClose();
            }}
            aria-label={`Go to slide ${i + 1}: ${s.title}`}
          >
            <SlideFrame className="is-thumb">
              <SlideView slide={s} index={i} total={slides.length} revealed={false} />
            </SlideFrame>
            <span className="thumb-label">
              <b>{i + 1}</b> {s.title}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

const shortcuts: [string, string][] = [
  ["→  Space  PgDn", "Next (reveals answers first)"],
  ["←  PgUp", "Previous"],
  ["Home / End", "First / last slide"],
  ["F", "Full screen"],
  ["P", "Presenter view (new window)"],
  ["N", "Speaker notes"],
  ["S", "Slide list sidebar"],
  ["G", "Overview grid"],
  ["T", "Dark / light mode"],
  ["R", "Reveal / hide answers"],
  ["B", "Blank screen"],
  ["Esc", "Close panels"],
];

export function Help({ onClose }: { onClose: () => void }) {
  return (
    <div className="overlay help-overlay" role="dialog" aria-modal="true" aria-label="Keyboard shortcuts" onClick={onClose}>
      <div className="glass help-card" onClick={(e) => e.stopPropagation()}>
        <div className="overlay-head">
          <h2>Keyboard shortcuts</h2>
          <ToolButton label="Close" onClick={onClose}>
            <X size={20} />
          </ToolButton>
        </div>
        <dl className="shortcut-list">
          {shortcuts.map(([k, v]) => (
            <div key={k}>
              <dt>
                {k.split(/\s{2}/).map((part) => (
                  <kbd key={part}>{part}</kbd>
                ))}
              </dt>
              <dd>{v}</dd>
            </div>
          ))}
        </dl>
        <p className="help-foot">Swipe left or right on touch screens. The presenter view stays in sync with this window.</p>
      </div>
    </div>
  );
}

export function Backdrop() {
  return (
    <div className="backdrop" aria-hidden>
      <span className="blob b1" />
      <span className="blob b2" />
      <span className="blob b3" />
      <span className="blob b4" />
      <span className="grain" />
    </div>
  );
}
