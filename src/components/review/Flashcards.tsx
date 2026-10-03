"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Check, ListChecks, Play, RotateCcw, Shuffle, Undo2, X } from "lucide-react";
import Link from "next/link";
import { domains, glossaryCards, questionCards, shuffle, type Flashcard } from "@/lib/review";

type Grade = "known" | "learning" | null;
type Settings = { terms: boolean; questions: boolean; domains: string[]; count: number };
type Session = { cards: Flashcard[]; grades: Grade[]; index: number; flipped: boolean; settings: Settings; round: number };

const PRESETS = [10, 20, 50, 100];

function poolFor(s: Settings): Flashcard[] {
  return [...(s.terms ? glossaryCards : []), ...(s.questions ? questionCards.filter((c) => s.domains.includes(c.tag)) : [])];
}

function newSession(cards: Flashcard[], settings: Settings, round = 1): Session {
  return { cards: shuffle(cards), grades: cards.map(() => null), index: 0, flipped: false, settings, round };
}

export function Flashcards() {
  const [settings, setSettings] = useState<Settings>({ terms: true, questions: true, domains: domains.map((d) => d.name), count: 20 });
  const [session, setSession] = useState<Session | null>(null);

  const startFresh = (s: Settings) => {
    const pool = poolFor(s);
    setSession(newSession(shuffle(pool).slice(0, Math.min(s.count, pool.length)), s));
  };

  if (!session) return <Setup settings={settings} onChange={setSettings} onStart={() => startFresh(settings)} />;

  const done = session.index >= session.cards.length;
  if (done) {
    const learning = session.cards.filter((_, i) => session.grades[i] !== "known");
    return (
      <Summary
        session={session}
        learning={learning}
        onReviewLearning={() => setSession(newSession(learning, session.settings, session.round + 1))}
        onRestart={() => setSession(newSession(session.cards, session.settings))}
        onNewDeck={() => startFresh(session.settings)}
        onSettings={() => setSession(null)}
      />
    );
  }
  return <Study session={session} setSession={setSession} onRestart={() => setSession(newSession(session.cards, session.settings))} onQuit={() => setSession(null)} />;
}

/* ───────────────────────── Setup ───────────────────────── */

function Setup({ settings, onChange, onStart }: { settings: Settings; onChange: (s: Settings) => void; onStart: () => void }) {
  const pool = poolFor(settings).length;
  const [raw, setRaw] = useState(String(settings.count));
  const setCount = (n: number) => {
    const v = Math.max(1, Math.min(252, Math.round(n) || 1));
    onChange({ ...settings, count: v });
    setRaw(String(v));
  };

  return (
    <section className="review-setup">
      <div className="review-hero">
        <p className="kicker">Flip, recall, repeat</p>
        <h1>Flashcards</h1>
        <p className="subtitle">Study glossary terms and practice-exam questions. The deck is reshuffled every time you start or restart.</p>
      </div>

      <div className="glass setup-card">
        <div className="setup-row">
          <span className="setup-label">Card sources</span>
          <div className="mode-grid">
            <button type="button" className={`mode-card ${settings.terms ? "is-on" : ""}`} aria-pressed={settings.terms} onClick={() => onChange({ ...settings, terms: !settings.terms })}>
              <strong>Glossary terms · {glossaryCards.length}</strong>
              <span>Term on the front, definition on the back. From the Part 1 and Part 2 glossaries.</span>
            </button>
            <button
              type="button"
              className={`mode-card ${settings.questions ? "is-on" : ""}`}
              aria-pressed={settings.questions}
              onClick={() => onChange({ ...settings, questions: !settings.questions })}
            >
              <strong>Exam questions · {questionCards.length}</strong>
              <span>Question on the front, answer and rationale on the back. From the AI-901 practice exam.</span>
            </button>
          </div>
        </div>

        {settings.questions && (
          <div className="setup-row">
            <div className="setup-label-row">
              <span className="setup-label">Question domains</span>
              <span className="setup-actions">
                <button type="button" className="link-btn" onClick={() => onChange({ ...settings, domains: domains.map((d) => d.name) })}>
                  All
                </button>
                <button type="button" className="link-btn" onClick={() => onChange({ ...settings, domains: [] })}>
                  None
                </button>
              </span>
            </div>
            <div className="chip-row">
              {domains.map((d) => (
                <button
                  key={d.name}
                  type="button"
                  className={`chip ${settings.domains.includes(d.name) ? "is-on" : ""}`}
                  aria-pressed={settings.domains.includes(d.name)}
                  onClick={() =>
                    onChange({
                      ...settings,
                      domains: settings.domains.includes(d.name) ? settings.domains.filter((x) => x !== d.name) : [...settings.domains, d.name],
                    })
                  }
                >
                  {d.name} <span className="chip-count">{d.count}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        <div className="setup-row">
          <label htmlFor="card-count" className="setup-label">
            Number of cards
          </label>
          <div className="count-row">
            <input
              id="card-count"
              className="glass-input count-input"
              type="number"
              inputMode="numeric"
              min={1}
              max={252}
              value={raw}
              onChange={(e) => {
                setRaw(e.target.value);
                const n = Number.parseInt(e.target.value, 10);
                if (Number.isFinite(n) && n >= 1) onChange({ ...settings, count: Math.min(252, n) });
              }}
              onBlur={() => setCount(Number.parseInt(raw, 10))}
            />
            <div className="chip-row">
              {PRESETS.map((n) => (
                <button key={n} type="button" className={`chip ${settings.count === n ? "is-on" : ""}`} onClick={() => setCount(n)}>
                  {n}
                </button>
              ))}
              <button type="button" className={`chip ${settings.count >= pool && pool > 0 ? "is-on" : ""}`} onClick={() => setCount(pool || 1)}>
                All ({pool})
              </button>
            </div>
          </div>
          {settings.count > pool && pool > 0 && <p className="setup-hint">Only {pool} cards match, so the deck will have {pool}.</p>}
        </div>

        <button type="button" className="primary-btn" disabled={pool === 0} onClick={onStart}>
          <Play size={18} /> Start {Math.min(settings.count, pool)} cards
        </button>
      </div>
    </section>
  );
}

/* ───────────────────────── Study ───────────────────────── */

function Study({
  session,
  setSession,
  onRestart,
  onQuit,
}: {
  session: Session;
  setSession: (s: Session) => void;
  onRestart: () => void;
  onQuit: () => void;
}) {
  const card = session.cards[session.index];
  const total = session.cards.length;
  const known = session.grades.filter((g) => g === "known").length;

  const flip = () => setSession({ ...session, flipped: !session.flipped });
  const move = (i: number) => setSession({ ...session, index: Math.max(0, Math.min(total, i)), flipped: false });
  const grade = (g: Grade) => {
    const grades = session.grades.slice();
    grades[session.index] = g;
    setSession({ ...session, grades, index: session.index + 1, flipped: false });
  };

  const handler = useRef<(e: KeyboardEvent) => void>(() => {});
  useEffect(() => {
    handler.current = (e: KeyboardEvent) => {
      if (e.ctrlKey || e.metaKey || e.altKey) return;
      if (e.key === " " || e.key === "Enter") {
        e.preventDefault();
        (e.target as HTMLElement | null)?.blur?.();
        flip();
      } else if (e.key === "ArrowRight") move(session.index + 1);
      else if (e.key === "ArrowLeft") move(session.index - 1);
      else if (e.key === "1") grade("learning");
      else if (e.key === "2") grade("known");
    };
  });
  useEffect(() => {
    const on = (e: KeyboardEvent) => handler.current(e);
    window.addEventListener("keydown", on);
    return () => window.removeEventListener("keydown", on);
  }, []);

  return (
    <section className="study">
      <div className="test-top">
        <button type="button" className="ghost-btn" onClick={onQuit}>
          <X size={16} /> Quit
        </button>
        <div className="test-progress" aria-label={`Card ${session.index + 1} of ${total}`}>
          <div className="test-progress-fill" style={{ width: `${(session.index / total) * 100}%` }} />
        </div>
        <span className="test-meta">
          {session.index + 1} / {total}
        </span>
        <span className="test-meta ok">
          <Check size={15} /> {known}
        </span>
        <button type="button" className="ghost-btn" onClick={onRestart} title="Restart with a new shuffle">
          <Shuffle size={16} /> Restart
        </button>
      </div>

      {session.round > 1 && <p className="round-note">Round {session.round}: cards you were still learning</p>}

      <button
        type="button"
        className={`flashcard ${session.flipped ? "is-flipped" : ""}`}
        onClick={flip}
        aria-label={session.flipped ? "Show front" : "Show answer"}
        key={card.key + session.round}
      >
        <span className="flashcard-inner">
          <span className="glass flashcard-face front">
            <span className="tag">{card.kind === "term" ? card.tag : `Question · ${card.tag}`}</span>
            <span className={`flashcard-text ${card.kind === "term" ? "is-term" : ""}`}>{card.front}</span>
            <span className="flashcard-hint">Tap or press Space to flip</span>
          </span>
          <span className="glass flashcard-face back">
            <span className="tag">{card.kind === "term" ? "Definition" : "Answer"}</span>
            <span className={`flashcard-text ${card.kind === "question" ? "is-answer" : ""}`}>{card.back}</span>
            {card.detail && <span className="flashcard-detail">{card.detail}</span>}
          </span>
        </span>
      </button>

      <div className="study-actions">
        <button type="button" className="ghost-btn" onClick={() => move(session.index - 1)} disabled={session.index === 0} aria-label="Previous card">
          <ArrowLeft size={18} />
        </button>
        <button type="button" className="grade-btn learning" onClick={() => grade("learning")}>
          <Undo2 size={18} /> Still learning <kbd>1</kbd>
        </button>
        <button type="button" className="grade-btn known" onClick={() => grade("known")}>
          <Check size={18} /> Got it <kbd>2</kbd>
        </button>
        <button type="button" className="ghost-btn" onClick={() => move(session.index + 1)} aria-label="Skip card">
          <ArrowRight size={18} />
        </button>
      </div>
      <p className="kbd-hint">
        <kbd>Space</kbd> flip · <kbd>1</kbd> still learning · <kbd>2</kbd> got it · <kbd>←</kbd> <kbd>→</kbd> move
      </p>
    </section>
  );
}

/* ───────────────────────── Summary ───────────────────────── */

function Summary({
  session,
  learning,
  onReviewLearning,
  onRestart,
  onNewDeck,
  onSettings,
}: {
  session: Session;
  learning: Flashcard[];
  onReviewLearning: () => void;
  onRestart: () => void;
  onNewDeck: () => void;
  onSettings: () => void;
}) {
  const total = session.cards.length;
  const known = total - learning.length;
  const pct = total ? known / total : 0;
  return (
    <section className="results">
      <div className="glass results-hero">
        <div className={`score-ring ${pct >= 0.7 ? "is-pass" : "is-fail"}`} style={{ "--p": pct } as React.CSSProperties}>
          <span>{Math.round(pct * 100)}%</span>
        </div>
        <div className="results-summary">
          <p className="kicker">{learning.length === 0 ? "Deck mastered" : `Round ${session.round} complete`}</p>
          <h1>
            {known} / {total} cards known
          </h1>
          <p className="subtitle">
            {learning.length === 0 ? "You got every card. Try a new deck or take a practice test." : `${learning.length} still learning. Go another round with just those.`}
          </p>
          <div className="results-actions">
            {learning.length > 0 && (
              <button type="button" className="primary-btn" onClick={onReviewLearning}>
                <Shuffle size={17} /> Review {learning.length} still learning
              </button>
            )}
            <button type="button" className={learning.length ? "ghost-btn" : "primary-btn"} onClick={onRestart}>
              <RotateCcw size={17} /> Restart this deck (reshuffled)
            </button>
            <button type="button" className="ghost-btn" onClick={onNewDeck}>
              <Shuffle size={17} /> Draw a new deck
            </button>
            <button type="button" className="ghost-btn" onClick={onSettings}>
              Deck settings
            </button>
            <Link href="/review/test" className="ghost-btn">
              <ListChecks size={17} /> Practice test
            </Link>
          </div>
        </div>
      </div>
      {learning.length > 0 && (
        <div className="results-review">
          <div className="results-review-head">
            <h2>Still learning</h2>
          </div>
          {learning.map((c) => (
            <article key={c.key} className="glass review-item is-bad">
              <p className="review-q">{c.front}</p>
              <p className="review-answer">{c.back}</p>
              {c.detail && <p className="review-why">{c.detail}</p>}
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
