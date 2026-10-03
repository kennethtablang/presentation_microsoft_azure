"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Check, CheckCircle2, Flag, Layers, ListRestart, Play, RotateCcw, Shuffle, Timer, X, XCircle } from "lucide-react";
import Link from "next/link";
import { buildTest, domains, isFullyCorrect, pointsFor, shuffle, shuffleOptions, stem, type ExamQuestion } from "@/lib/review";
import { useNow } from "@/lib/stores";

type Mode = "practice" | "exam";
/** Exam-mode time limit: none, about one minute per question, or a fixed number of minutes. */
type TimeLimit = "off" | "auto" | number;
type Settings = { count: number; domains: string[]; mode: Mode; timeLimit: TimeLimit };
type Run = {
  questions: ExamQuestion[];
  picked: number[][];
  checked: boolean[];
  flagged: boolean[];
  index: number;
  startedAt: number;
  finishedAt: number | null;
  /** When the time limit runs out (exam mode only); null means untimed. */
  deadline: number | null;
  timeUp: boolean;
  settings: Settings;
};

const PRESETS = [10, 25, 50, 100, 200];
const TIME_PRESETS = [15, 30, 45, 60, 90];
const WARN_MS = 5 * 60_000;
const DANGER_MS = 60_000;

/** Minutes allowed for a test of `count` questions, or null when untimed. */
function limitMinutes(limit: TimeLimit, mode: Mode, count: number): number | null {
  if (mode !== "exam" || limit === "off") return null;
  return limit === "auto" ? Math.max(1, count) : limit;
}
const PASS = 0.7;

function fmt(ms: number) {
  const s = Math.max(0, Math.floor(ms / 1000));
  const m = Math.floor(s / 60);
  return `${String(m).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`;
}

function newRun(questions: ExamQuestion[], settings: Settings): Run {
  const startedAt = Date.now();
  const minutes = limitMinutes(settings.timeLimit, settings.mode, questions.length);
  return {
    questions,
    picked: questions.map(() => []),
    checked: questions.map(() => false),
    flagged: questions.map(() => false),
    index: 0,
    startedAt,
    finishedAt: null,
    deadline: minutes === null ? null : startedAt + minutes * 60_000,
    timeUp: false,
    settings,
  };
}

export function PracticeTest() {
  const [settings, setSettings] = useState<Settings>({ count: 25, domains: domains.map((d) => d.name), mode: "practice", timeLimit: "auto" });
  const [run, setRun] = useState<Run | null>(null);

  const start = (s: Settings) => setRun(newRun(buildTest(s.count, s.domains), s));

  if (!run) return <Setup settings={settings} onChange={setSettings} onStart={() => start(settings)} />;
  if (run.finishedAt !== null)
    return (
      <Results
        run={run}
        onRetake={() => start(run.settings)}
        onRetakeMissed={(missed) => setRun(newRun(shuffle(missed).map(shuffleOptions), { ...run.settings, count: missed.length }))}
        onNew={() => setRun(null)}
      />
    );
  return <Taking run={run} setRun={setRun} onQuit={() => setRun(null)} />;
}

/* ───────────────────────── Setup ───────────────────────── */

function Setup({ settings, onChange, onStart }: { settings: Settings; onChange: (s: Settings) => void; onStart: () => void }) {
  const pool = domains.filter((d) => settings.domains.includes(d.name)).reduce((n, d) => n + d.count, 0);
  const count = Math.min(settings.count, pool);
  const [raw, setRaw] = useState(String(settings.count));

  const setCount = (n: number) => {
    const v = Math.max(1, Math.min(200, Math.round(n) || 1));
    onChange({ ...settings, count: v });
    setRaw(String(v));
  };
  const toggleDomain = (name: string) =>
    onChange({
      ...settings,
      domains: settings.domains.includes(name) ? settings.domains.filter((d) => d !== name) : [...settings.domains, name],
    });

  return (
    <section className="review-setup">
      <div className="review-hero">
        <p className="kicker">AI-901 practice exam · 200-item bank</p>
        <h1>Practice test</h1>
        <p className="subtitle">Pick how many questions you want. Every start draws a new random set, and the answer choices are reshuffled too.</p>
      </div>

      <div className="glass setup-card">
        <div className="setup-row">
          <label htmlFor="q-count" className="setup-label">
            Number of questions
          </label>
          <div className="count-row">
            <input
              id="q-count"
              className="glass-input count-input"
              type="number"
              inputMode="numeric"
              min={1}
              max={200}
              value={raw}
              onChange={(e) => {
                setRaw(e.target.value);
                const n = Number.parseInt(e.target.value, 10);
                if (Number.isFinite(n) && n >= 1) onChange({ ...settings, count: Math.min(200, n) });
              }}
              onBlur={() => setCount(Number.parseInt(raw, 10))}
            />
            <div className="chip-row">
              {PRESETS.map((n) => (
                <button key={n} type="button" className={`chip ${settings.count === n ? "is-on" : ""}`} onClick={() => setCount(n)}>
                  {n}
                </button>
              ))}
            </div>
          </div>
          {settings.count > pool && pool > 0 && (
            <p className="setup-hint">Only {pool} questions match the selected domains, so the test will have {pool}.</p>
          )}
        </div>

        <div className="setup-row">
          <div className="setup-label-row">
            <span className="setup-label">Domains</span>
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
                onClick={() => toggleDomain(d.name)}
              >
                {d.name} <span className="chip-count">{d.count}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="setup-row">
          <span className="setup-label">Mode</span>
          <div className="mode-grid">
            {(
              [
                ["practice", "Practice mode", "See if you're right and why after every question."],
                ["exam", "Exam mode", "Answer everything first, move freely, then see your score."],
              ] as const
            ).map(([value, title, text]) => (
              <button
                key={value}
                type="button"
                className={`mode-card ${settings.mode === value ? "is-on" : ""}`}
                aria-pressed={settings.mode === value}
                onClick={() => onChange({ ...settings, mode: value })}
              >
                <strong>{title}</strong>
                <span>{text}</span>
              </button>
            ))}
          </div>
        </div>

        {settings.mode === "exam" && <TimeLimitPicker settings={settings} count={count} onChange={onChange} />}

        <button type="button" className="primary-btn" disabled={pool === 0} onClick={onStart}>
          <Play size={18} /> Start {count || 0}-question test
          {limitMinutes(settings.timeLimit, settings.mode, count) !== null && ` · ${limitMinutes(settings.timeLimit, settings.mode, count)} min`}
        </button>
      </div>
    </section>
  );
}

function TimeLimitPicker({ settings, count, onChange }: { settings: Settings; count: number; onChange: (s: Settings) => void }) {
  const custom = typeof settings.timeLimit === "number" && !TIME_PRESETS.includes(settings.timeLimit);
  const [raw, setRaw] = useState(typeof settings.timeLimit === "number" ? String(settings.timeLimit) : "");
  const set = (timeLimit: TimeLimit) => onChange({ ...settings, timeLimit });

  return (
    <div className="setup-row">
      <span className="setup-label">Time limit</span>
      <div className="chip-row">
        <button type="button" className={`chip ${settings.timeLimit === "off" ? "is-on" : ""}`} onClick={() => set("off")}>
          No limit
        </button>
        <button type="button" className={`chip ${settings.timeLimit === "auto" ? "is-on" : ""}`} onClick={() => set("auto")}>
          Auto · {Math.max(1, count)} min
        </button>
        {TIME_PRESETS.map((m) => (
          <button key={m} type="button" className={`chip ${settings.timeLimit === m ? "is-on" : ""}`} onClick={() => set(m)}>
            {m} min
          </button>
        ))}
        <label className={`chip chip-input ${custom ? "is-on" : ""}`}>
          Custom
          <input
            type="number"
            inputMode="numeric"
            min={1}
            max={300}
            placeholder="min"
            value={raw}
            aria-label="Custom time limit in minutes"
            onChange={(e) => {
              setRaw(e.target.value);
              const n = Number.parseInt(e.target.value, 10);
              if (Number.isFinite(n) && n >= 1) set(Math.min(300, n));
            }}
          />
        </label>
      </div>
      <p className="setup-note">
        {settings.timeLimit === "off"
          ? "Untimed. The clock still shows how long you've taken."
          : "The clock counts down and the test submits automatically when time runs out. Auto gives about one minute per question, close to the real exam's pace."}
      </p>
    </div>
  );
}

/* ───────────────────────── Taking the test ───────────────────────── */

function Taking({ run, setRun, onQuit }: { run: Run; setRun: (r: Run) => void; onQuit: () => void }) {
  const now = useNow();
  const [confirmFinish, setConfirmFinish] = useState(false);
  const q = run.questions[run.index];
  const picked = run.picked[run.index];
  const checked = run.checked[run.index];
  const practice = run.settings.mode === "practice";
  const need = q.answer.length;
  const total = run.questions.length;
  const answeredCount = run.picked.filter((p) => p.length > 0).length;
  const locked = practice && checked;

  const update = (patch: Partial<Run>) => setRun({ ...run, ...patch });

  const toggle = (i: number) => {
    if (locked) return;
    let next: number[];
    if (picked.includes(i)) next = picked.filter((p) => p !== i);
    else if (need === 1) next = [i];
    else next = [...picked, i].slice(-need); // keep the most recent picks up to the required count
    const all = run.picked.slice();
    all[run.index] = next;
    update({ picked: all });
  };

  const go = (i: number) => {
    setConfirmFinish(false);
    update({ index: Math.max(0, Math.min(total - 1, i)) });
  };

  const check = () => {
    const c = run.checked.slice();
    c[run.index] = true;
    update({ checked: c });
  };

  const finish = (timeUp = false) => setRun({ ...run, checked: run.checked.map(() => true), finishedAt: Date.now(), timeUp });

  // Time limit: submit automatically when the countdown reaches zero.
  const remaining = run.deadline !== null && now ? run.deadline - now : null;
  const expired = remaining !== null && remaining <= 0;
  useEffect(() => {
    if (expired) finish(true);
  });

  const primary = () => {
    if (practice && !checked) {
      if (picked.length === need) check();
    } else if (run.index < total - 1) go(run.index + 1);
    else if (practice || answeredCount === total) finish();
    else setConfirmFinish(true);
  };

  // Keyboard: 1–4 or A–D pick an option, Enter checks / moves on, ←/→ navigate.
  const handler = useRef<(e: KeyboardEvent) => void>(() => {});
  useEffect(() => {
    handler.current = (e: KeyboardEvent) => {
      if (e.ctrlKey || e.metaKey || e.altKey) return;
      const t = e.target as HTMLElement | null;
      if (t && ["INPUT", "TEXTAREA"].includes(t.tagName)) return;
      const k = e.key.toLowerCase();
      const idx = "1234".indexOf(k) >= 0 ? "1234".indexOf(k) : "abcd".indexOf(k);
      if (idx >= 0 && idx < q.options.length) {
        e.preventDefault();
        toggle(idx);
      } else if (e.key === "Enter") {
        e.preventDefault();
        primary();
      } else if (e.key === "ArrowRight" && (!practice || checked)) go(run.index + 1);
      else if (e.key === "ArrowLeft") go(run.index - 1);
    };
  });
  useEffect(() => {
    const on = (e: KeyboardEvent) => handler.current(e);
    window.addEventListener("keydown", on);
    return () => window.removeEventListener("keydown", on);
  }, []);

  let primaryLabel: string;
  if (practice && !checked) primaryLabel = picked.length === need ? "Check answer" : need > 1 ? `Select ${need}` : "Select an answer";
  else if (run.index < total - 1) primaryLabel = "Next question";
  else primaryLabel = "See results";

  return (
    <section className="test">
      <div className="test-top">
        <button type="button" className="ghost-btn" onClick={onQuit}>
          <X size={16} /> Quit
        </button>
        <div className="test-progress" aria-label={`Question ${run.index + 1} of ${total}`}>
          <div className="test-progress-fill" style={{ width: `${((run.index + 1) / total) * 100}%` }} />
        </div>
        {remaining !== null ? (
          <span
            className={`test-meta countdown ${remaining <= DANGER_MS ? "is-danger" : remaining <= WARN_MS ? "is-warn" : ""}`}
            role="timer"
            aria-label={`${fmt(remaining)} remaining`}
          >
            <Timer size={15} /> {fmt(remaining)} left
          </span>
        ) : (
          <span className="test-meta">
            <Timer size={15} /> {now ? fmt(now - run.startedAt) : "00:00"}
          </span>
        )}
        <span className="test-meta">
          {run.index + 1} / {total}
        </span>
      </div>

      <div className="test-layout">
        <article className="glass test-card">
          <div className="test-card-head">
            <span className="tag">{q.domain}</span>
            <button
              type="button"
              className={`ghost-btn ${run.flagged[run.index] ? "is-flagged" : ""}`}
              onClick={() => {
                const f = run.flagged.slice();
                f[run.index] = !f[run.index];
                update({ flagged: f });
              }}
              aria-pressed={run.flagged[run.index]}
            >
              <Flag size={15} /> {run.flagged[run.index] ? "Flagged" : "Flag"}
            </button>
          </div>
          <h2 className="test-q">
            <span className="num">{run.index + 1}</span>
            {stem(q)}
          </h2>
          {need > 1 && <p className="test-hint">Select {need}. Each correct answer is worth one point.</p>}

          <ol className="test-options" role={need > 1 ? "group" : "radiogroup"}>
            {q.options.map((o, i) => {
              const isPicked = picked.includes(i);
              const isAnswer = q.answer.includes(i);
              let state = "";
              if (locked) state = isAnswer ? "is-correct" : isPicked ? "is-wrong" : "is-dim";
              return (
                <li key={i}>
                  <button
                    type="button"
                    role={need > 1 ? "checkbox" : "radio"}
                    aria-checked={isPicked}
                    className={`test-option ${isPicked ? "is-picked" : ""} ${state}`}
                    onClick={() => toggle(i)}
                    disabled={locked}
                  >
                    <span className={`opt-letter ${need > 1 ? "is-square" : ""}`}>{"ABCD"[i]}</span>
                    <span className="opt-text">{o}</span>
                    {locked && isAnswer && <CheckCircle2 size={20} className="opt-mark ok" />}
                    {locked && isPicked && !isAnswer && <XCircle size={20} className="opt-mark bad" />}
                  </button>
                </li>
              );
            })}
          </ol>

          {locked && (
            <div className={`feedback ${isFullyCorrect(q, picked) ? "is-ok" : "is-bad"}`} role="status">
              <strong>
                {isFullyCorrect(q, picked) ? (
                  <>
                    <Check size={18} /> Correct
                  </>
                ) : need > 1 && pointsFor(q, picked) > 0 ? (
                  `Partly correct: ${pointsFor(q, picked)} of ${need} points`
                ) : (
                  <>
                    <X size={18} /> Not quite. Answer: {q.answer.map((a) => "ABCD"[a]).join(", ")}
                  </>
                )}
              </strong>
              <p>{q.why}</p>
            </div>
          )}

          {confirmFinish && (
            <div className="feedback is-warn" role="alert">
              <strong>
                {total - answeredCount} question{total - answeredCount === 1 ? "" : "s"} unanswered.
              </strong>
              <p>Unanswered questions score zero. Finish anyway?</p>
              <div className="feedback-actions">
                <button type="button" className="ghost-btn" onClick={() => go(run.picked.findIndex((p) => p.length === 0))}>
                  Go to first unanswered
                </button>
                <button type="button" className="primary-btn small" onClick={() => finish()}>
                  Finish test
                </button>
              </div>
            </div>
          )}

          <div className="test-actions">
            <button type="button" className="ghost-btn" onClick={() => go(run.index - 1)} disabled={run.index === 0}>
              <ArrowLeft size={16} /> Back
            </button>
            {!practice && run.index < total - 1 && (
              <button type="button" className="ghost-btn" onClick={() => (answeredCount === total ? finish() : setConfirmFinish(true))}>
                Finish test
              </button>
            )}
            <button type="button" className="primary-btn" onClick={primary} disabled={practice && !checked && picked.length !== need}>
              {primaryLabel} <ArrowRight size={16} />
            </button>
          </div>
          <p className="kbd-hint">
            Keys: <kbd>1</kbd>–<kbd>4</kbd> choose · <kbd>Enter</kbd> {practice ? "check / next" : "next"} · <kbd>←</kbd> <kbd>→</kbd> move
          </p>
        </article>

        <aside className="glass test-nav" aria-label="Question navigator">
          <div className="test-nav-head">
            <strong>Questions</strong>
            <span>
              {answeredCount}/{total} answered
            </span>
          </div>
          <div className="test-nav-grid">
            {run.questions.map((qq, i) => {
              const p = run.picked[i];
              let cls = p.length ? "is-answered" : "";
              if (practice && run.checked[i]) cls = isFullyCorrect(qq, p) ? "is-ok" : "is-bad";
              return (
                <button
                  key={qq.id}
                  type="button"
                  className={`nav-dot ${cls} ${i === run.index ? "is-current" : ""} ${run.flagged[i] ? "is-flagged" : ""}`}
                  onClick={() => go(i)}
                  disabled={practice && !run.checked[i] && i > run.index}
                  aria-label={`Question ${i + 1}${run.flagged[i] ? ", flagged" : ""}`}
                >
                  {i + 1}
                </button>
              );
            })}
          </div>
        </aside>
      </div>
    </section>
  );
}

/* ───────────────────────── Results ───────────────────────── */

function Results({
  run,
  onRetake,
  onRetakeMissed,
  onNew,
}: {
  run: Run;
  onRetake: () => void;
  onRetakeMissed: (missed: ExamQuestion[]) => void;
  onNew: () => void;
}) {
  const [filter, setFilter] = useState<"missed" | "all">("missed");
  const stats = useMemo(() => {
    let points = 0;
    let max = 0;
    let full = 0;
    const byDomain = new Map<string, { points: number; max: number }>();
    run.questions.forEach((q, i) => {
      const p = pointsFor(q, run.picked[i]);
      points += p;
      max += q.answer.length;
      if (isFullyCorrect(q, run.picked[i])) full++;
      const d = byDomain.get(q.domain) ?? { points: 0, max: 0 };
      d.points += p;
      d.max += q.answer.length;
      byDomain.set(q.domain, d);
    });
    return { points, max, full, byDomain: Array.from(byDomain, ([name, v]) => ({ name, ...v })) };
  }, [run]);

  const pct = stats.max ? stats.points / stats.max : 0;
  const missed = run.questions.filter((q, i) => !isFullyCorrect(q, run.picked[i]));
  const shown = run.questions.map((q, i) => ({ q, i })).filter(({ q, i }) => filter === "all" || !isFullyCorrect(q, run.picked[i]));
  const elapsed = (run.finishedAt ?? run.startedAt) - run.startedAt;

  return (
    <section className="results">
      <div className="glass results-hero">
        <div className={`score-ring ${pct >= PASS ? "is-pass" : "is-fail"}`} style={{ "--p": pct } as React.CSSProperties}>
          <span>{Math.round(pct * 100)}%</span>
        </div>
        <div className="results-summary">
          <p className="kicker">
            {run.timeUp ? "Time's up · " : ""}
            {pct >= PASS ? "Passed the practice target" : "Keep practicing"}
          </p>
          <h1>
            {stats.points} / {stats.max} points
          </h1>
          <p className="subtitle">
            {stats.full} of {run.questions.length} questions fully correct · {fmt(elapsed)}
            {run.deadline !== null && ` of ${fmt(run.deadline - run.startedAt)}`} · target {Math.round(PASS * 100)}%
          </p>
          <div className="results-actions">
            <button type="button" className="primary-btn" onClick={onRetake}>
              <Shuffle size={17} /> Retake (new shuffle)
            </button>
            {missed.length > 0 && (
              <button type="button" className="ghost-btn" onClick={() => onRetakeMissed(missed)}>
                <ListRestart size={17} /> Retry {missed.length} missed
              </button>
            )}
            <button type="button" className="ghost-btn" onClick={onNew}>
              <RotateCcw size={17} /> New test settings
            </button>
            <Link href="/review/flashcards" className="ghost-btn">
              <Layers size={17} /> Flashcards
            </Link>
          </div>
        </div>
      </div>

      <div className="glass results-domains">
        <h2 className="block-title">By domain</h2>
        {stats.byDomain.map((d) => (
          <div key={d.name} className={`bar-row ${d.points / d.max < PASS ? "is-hl" : ""}`}>
            <div className="bar-label">
              <span>{d.name}</span>
              <span className="bar-val">
                {d.points}/{d.max}
              </span>
            </div>
            <div className="bar-track">
              <div className="bar-fill" style={{ width: `${(d.points / d.max) * 100}%` }} />
            </div>
          </div>
        ))}
      </div>

      <div className="results-review">
        <div className="results-review-head">
          <h2>Review answers</h2>
          <div className="chip-row">
            <button type="button" className={`chip ${filter === "missed" ? "is-on" : ""}`} onClick={() => setFilter("missed")}>
              Missed ({missed.length})
            </button>
            <button type="button" className={`chip ${filter === "all" ? "is-on" : ""}`} onClick={() => setFilter("all")}>
              All ({run.questions.length})
            </button>
          </div>
        </div>
        {shown.length === 0 && <p className="notes-empty">Nothing missed. Perfect score!</p>}
        {shown.map(({ q, i }) => {
          const p = run.picked[i];
          const ok = isFullyCorrect(q, p);
          return (
            <article key={q.id} className={`glass review-item ${ok ? "is-ok" : "is-bad"}`}>
              <p className="review-q">
                <span className="num">{i + 1}</span>
                {stem(q)}
              </p>
              <ul className="review-opts">
                {q.options.map((o, oi) => (
                  <li key={oi} className={q.answer.includes(oi) ? "is-correct" : p.includes(oi) ? "is-wrong" : ""}>
                    <span className="opt-letter">{"ABCD"[oi]}</span>
                    {o}
                    {p.includes(oi) && <em>your answer</em>}
                  </li>
                ))}
              </ul>
              {p.length === 0 && <p className="review-skip">Not answered</p>}
              <p className="review-why">{q.why}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
