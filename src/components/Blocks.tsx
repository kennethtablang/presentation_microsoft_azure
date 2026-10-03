import { Fragment, type CSSProperties } from "react";
import Image from "next/image";
import type { Block } from "@/lib/types";
import { Icon } from "./Icon";

/** `still` renders links as plain boxes (thumbnails sit inside buttons, and links can't nest there). */
type Ctx = { revealed: boolean; still?: boolean; base?: string };

const calloutMeta = {
  say: { label: "Say", icon: "quote" },
  ask: { label: "Ask", icon: "question" },
  tip: { label: "Key idea", icon: "bulb" },
  warn: { label: "Heads up", icon: "alert" },
  board: { label: "Board", icon: "pen" },
} as const;

export function BlockList({ blocks, ctx }: { blocks: Block[]; ctx: Ctx }) {
  return (
    <>
      {blocks.map((b, i) => (
        <BlockView key={i} block={b} ctx={ctx} />
      ))}
    </>
  );
}

function Reveal({ show, children }: { show: boolean; children: React.ReactNode }) {
  return (
    <span className={`reveal ${show ? "is-shown" : ""}`} aria-hidden={!show}>
      {children}
    </span>
  );
}

function BlockView({ block, ctx }: { block: Block; ctx: Ctx }) {
  switch (block.type) {
    case "bullets":
      return (
        <div className="glass block-bullets">
          {block.title && <h3 className="block-title">{block.title}</h3>}
          <ul className={block.numbered ? "is-numbered" : undefined}>
            {block.items.map((item, i) => {
              const it = typeof item === "string" ? { text: item } : item;
              return (
                <li key={i}>
                  {block.numbered && <span className="num">{i + 1}</span>}
                  <span>
                    {it.text}
                    {it.sub && <span className="sub">{it.sub.join(" · ")}</span>}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      );

    case "cards":
      return (
        <div className={`cards cols-${block.cols ?? 3}`}>
          {block.items.map((c, i) => (
            <div key={i} className={`glass card tone-${c.tone ?? "blue"}`}>
              <div className="card-head">
                {c.icon && (
                  <span className="chip-icon">
                    <Icon name={c.icon} size={26} />
                  </span>
                )}
                {c.tag && <span className="tag">{c.tag}</span>}
              </div>
              <h3>{c.title}</h3>
              {c.text && <p>{c.text}</p>}
            </div>
          ))}
        </div>
      );

    case "table":
      return (
        <div className={`glass block-table ${block.compact ? "is-compact" : ""}`}>
          {block.caption && <h3 className="block-title">{block.caption}</h3>}
          <table>
            <thead>
              <tr>
                {block.head.map((h, i) => (
                  <th key={i}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((r, ri) => (
                <tr key={ri}>
                  {r.map((cell, ci) => (
                    <td key={ci} className={ci === block.emphasisCol ? "em" : undefined}>
                      {ci === block.revealCol ? <Reveal show={ctx.revealed}>{cell}</Reveal> : cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );

    case "flow":
      if (block.variant === "steps") {
        return (
          <div className="flow-steps-wrap">
            {block.caption && <h3 className="block-title">{block.caption}</h3>}
            <ol className="flow-steps" style={{ "--n": block.steps.length } as CSSProperties}>
              {block.steps.map((s, i) => (
                <li key={i} className="glass">
                  <span className="step-num">{s.icon ? <Icon name={s.icon} size={22} /> : i + 1}</span>
                  <div>
                    <strong>{s.label}</strong>
                    {s.sub && <p>{s.sub}</p>}
                  </div>
                </li>
              ))}
            </ol>
          </div>
        );
      }
      return (
        <div className="flow-wrap">
          {block.caption && <h3 className="block-title">{block.caption}</h3>}
          <div className="flow">
            {block.steps.map((s, i) => (
              <Fragment key={i}>
                {i > 0 && (
                  <span className="flow-arrow" aria-hidden>
                    <Icon name="arrow" size={26} />
                  </span>
                )}
                <div className="glass flow-node">
                  {s.icon && <Icon name={s.icon} size={26} className="flow-icon" />}
                  <strong>{s.label}</strong>
                  {s.sub && <span>{s.sub}</span>}
                </div>
              </Fragment>
            ))}
          </div>
        </div>
      );

    case "code":
      return (
        <div className="glass block-code">
          {block.label && <span className="code-label">{block.label}</span>}
          <pre>
            <code>{block.code}</code>
          </pre>
        </div>
      );

    case "bars": {
      const max = block.max ?? Math.max(...block.items.map((i) => i.value));
      return (
        <div className="glass block-bars">
          {block.title && <h3 className="block-title">{block.title}</h3>}
          {block.items.map((it, i) => (
            <div key={i} className={`bar-row ${it.highlight ? "is-hl" : ""}`}>
              <div className="bar-label">
                <span>{it.label}</span>
                <span className="bar-val">
                  {it.value.toFixed(2)}
                  {it.note && <em>{it.note}</em>}
                </span>
              </div>
              <div className="bar-track">
                <div className="bar-fill" style={{ width: `${(it.value / max) * 100}%` }} />
              </div>
            </div>
          ))}
        </div>
      );
    }

    case "probability":
      return (
        <div className="glass block-prob">
          <div className="prob-prompt">
            <span className="code-label">Prompt</span>
            <span className="prob-text">{block.prompt}</span>
          </div>
          {block.items.map((it, i) => (
            <div key={i} className={`prob-row ${i === 0 ? "is-top" : ""}`}>
              <span className="prob-token">{it.token}</span>
              <div className="bar-track">
                <div className="bar-fill" style={{ width: `${it.p * 100}%` }} />
              </div>
              <span className="prob-p">{Math.round(it.p * 100)}%</span>
            </div>
          ))}
        </div>
      );

    case "equation":
      return (
        <div className="equation">
          <div className="glass eq-result">
            <Icon name="bot" size={30} />
            <strong>{block.result}</strong>
          </div>
          <span className="eq-op">=</span>
          {block.parts.map((p, i) => (
            <Fragment key={i}>
              {i > 0 && <span className="eq-op">+</span>}
              <div className="glass eq-part">
                {p.icon && <Icon name={p.icon} size={24} />}
                <strong>{p.label}</strong>
                {p.sub && <span>{p.sub}</span>}
              </div>
            </Fragment>
          ))}
        </div>
      );

    case "callout": {
      const meta = calloutMeta[block.tone];
      return (
        <div className={`glass callout callout-${block.tone}`}>
          <span className="callout-badge">
            <Icon name={meta.icon} size={18} />
            {meta.label}
          </span>
          <div className="callout-body">
            <p>{block.text}</p>
            {block.answer && (
              <p className="callout-answer">
                <Reveal show={ctx.revealed}>
                  <Icon name="check" size={20} /> {block.answer}
                </Reveal>
              </p>
            )}
          </div>
        </div>
      );
    }

    case "quiz": {
      // Wordy (situational) items switch to a tighter layout so three still fit on one slide.
      const chars = block.questions.reduce((n, q) => n + q.q.length + q.options.join("").length + q.why.length, 0);
      return (
        <div className={`quiz ${chars > 820 ? "is-dense" : ""}`}>
          {block.questions.map((q, qi) => (
            <div key={qi} className="glass quiz-q">
              <p className="quiz-stem">
                <span className="num">{block.start + qi}</span>
                {q.q}
              </p>
              <ol className="quiz-options">
                {q.options.map((o, oi) => (
                  <li key={oi} className={ctx.revealed ? (oi === q.answer ? "is-correct" : "is-dim") : undefined}>
                    <span className="opt-letter">{"ABCD"[oi]}</span>
                    {o}
                  </li>
                ))}
              </ol>
              <p className="quiz-why">
                <Reveal show={ctx.revealed}>{q.why}</Reveal>
              </p>
            </div>
          ))}
        </div>
      );
    }

    case "compare":
      return (
        <div className="compare">
          {[block.left, block.right].map((side, i) => (
            <div key={i} className={`glass compare-side tone-${i === 0 ? "blue" : "violet"}`}>
              <div className="card-head">
                {side.icon && (
                  <span className="chip-icon">
                    <Icon name={side.icon} size={26} />
                  </span>
                )}
                <h3>{side.title}</h3>
              </div>
              <ul>
                {side.items.map((it, k) => (
                  <li key={k}>{it}</li>
                ))}
              </ul>
            </div>
          ))}
          <span className="compare-vs" aria-hidden>
            vs
          </span>
        </div>
      );

    case "pixels":
      return (
        <div className="glass block-pixels">
          {block.title && <h3 className="block-title">{block.title}</h3>}
          <div className="pixel-grid" style={{ gridTemplateColumns: `repeat(${block.matrix[0].length}, 1fr)` }}>
            {block.matrix.flat().map((v, i) =>
              block.kernel ? (
                <span key={i} className={`px kernel ${v > 0 ? "pos" : "neg"}`}>
                  {v}
                </span>
              ) : (
                <span key={i} className="px" style={{ background: `rgb(${v} ${v} ${v})`, color: v > 128 ? "#111" : "#eee" }}>
                  {v}
                </span>
              ),
            )}
          </div>
        </div>
      );

    case "scatter":
      return (
        <div className="glass block-scatter">
          {block.caption && <h3 className="block-title">{block.caption}</h3>}
          <div className="scatter-plot">
            {block.points.map((p, i) => (
              <span key={i} className={`dot g${p.group}`} style={{ left: `${p.x}%`, top: `${p.y}%` }}>
                <i />
                {p.label}
              </span>
            ))}
          </div>
        </div>
      );

    case "glossary":
      return (
        <dl className="glossary">
          {block.terms.map((t) => (
            <div key={t.term} className="glass gloss-item">
              <dt>{t.term}</dt>
              <dd>{t.def}</dd>
            </div>
          ))}
        </dl>
      );

    case "launch":
      return (
        <div className="launch">
          {block.items.map((it) => {
            const body = (
              <>
                <span className="chip-icon">
                  <Icon name={it.icon} size={28} />
                </span>
                <h3>{it.title}</h3>
                <p>{it.text}</p>
                <span className="launch-cta">
                  {it.cta} <Icon name="arrow" size={20} />
                </span>
              </>
            );
            return ctx.still ? (
              <div key={it.href} className={`glass launch-card tone-${it.tone ?? "blue"}`}>
                {body}
              </div>
            ) : (
              <a key={it.href} href={it.href.startsWith("/") ? it.href : `${ctx.base ?? ""}/${it.href}`} target="_blank" rel="noopener" className={`glass launch-card tone-${it.tone ?? "blue"}`}>
                {body}
              </a>
            );
          })}
        </div>
      );

    case "sheet": {
      const letters = block.head.map((_, i) => String.fromCharCode(65 + i));
      return (
        <div className="glass block-sheet">
          {block.title && <h3 className="block-title">{block.title}</h3>}
          {block.formula && (
            <div className="sheet-formula">
              <span className="fx">fx</span>
              <code>{block.formula}</code>
            </div>
          )}
          <div className="sheet-grid" style={{ gridTemplateColumns: `44px repeat(${block.head.length}, minmax(0, auto))` }}>
            <span className="sheet-corner" />
            {letters.map((l) => (
              <span key={l} className="sheet-col">
                {l}
              </span>
            ))}
            <span className="sheet-row">1</span>
            {block.head.map((h, ci) => (
              <span key={`h${ci}`} className="sheet-cell is-head">
                {h}
              </span>
            ))}
            {block.rows.map((r, ri) => (
              <Fragment key={ri}>
                <span className="sheet-row">{ri + 2}</span>
                {r.map((cell, ci) => {
                  const mark = block.mark?.[`${ri}:${ci}`];
                  const numeric = /^-?₱?[\d,]+(\.\d+)?%?$/.test(cell.trim());
                  return (
                    <span key={ci} className={`sheet-cell ${numeric ? "is-num" : ""} ${mark ? `mark-${mark}` : ""}`}>
                      {cell === "" ? " " : cell}
                    </span>
                  );
                })}
              </Fragment>
            ))}
          </div>
          {block.caption && <p className="sheet-caption">{block.caption}</p>}
        </div>
      );
    }

    case "minicharts":
      return (
        <div className="minicharts">
          {block.items.map((c) => (
            <div key={c.title} className={`glass minichart ${c.ok === false ? "is-bad" : ""}`}>
              <MiniChart kind={c.kind} />
              <div>
                <strong>
                  {c.ok === false ? "✕ " : ""}
                  {c.title}
                </strong>
                <span>{c.text}</span>
              </div>
            </div>
          ))}
        </div>
      );

    case "image":
      return (
        <figure className="glass block-image">
          <Image src={block.src} alt={block.alt} width={block.width} height={block.height} />
          {block.caption && <figcaption>{block.caption}</figcaption>}
        </figure>
      );

    case "columns":
      return (
        <div className="columns" style={{ gridTemplateColumns: block.ratio ?? `repeat(${block.cols.length}, 1fr)` }}>
          {block.cols.map((col, i) => (
            <div key={i} className="column">
              <BlockList blocks={col} ctx={ctx} />
            </div>
          ))}
        </div>
      );
  }
}

/** Tiny schematic charts that show the *shape* of each chart type. */
function MiniChart({ kind }: { kind: "bar" | "line" | "pie" | "scatter" | "histogram" | "column3d" }) {
  const common = { viewBox: "0 0 120 80", className: "minichart-svg", "aria-hidden": true } as const;
  switch (kind) {
    case "bar":
      return (
        <svg {...common}>
          {[52, 38, 64, 26].map((h, i) => (
            <rect key={i} x={12 + i * 26} y={74 - h} width="18" height={h} rx="3" className={i === 2 ? "fill-accent" : "fill-soft"} />
          ))}
          <line x1="6" y1="74" x2="114" y2="74" className="axis" />
        </svg>
      );
    case "line":
      return (
        <svg {...common}>
          <polyline points="8,60 28,52 48,56 68,36 88,30 112,14" className="stroke-accent" fill="none" />
          <polyline points="8,66 28,64 48,58 68,60 88,52 112,48" className="stroke-soft" fill="none" />
          <line x1="6" y1="74" x2="114" y2="74" className="axis" />
        </svg>
      );
    case "pie":
      return (
        <svg {...common}>
          <circle cx="60" cy="40" r="30" className="fill-soft" />
          <path d="M60 40 L60 10 A30 30 0 0 1 88.5 49.3 Z" className="fill-accent" />
          <path d="M60 40 L88.5 49.3 A30 30 0 0 1 42 64 Z" className="fill-mid" />
        </svg>
      );
    case "scatter":
      return (
        <svg {...common}>
          {[
            [14, 64], [24, 58], [32, 60], [42, 50], [50, 46], [60, 44], [66, 36], [76, 34], [86, 26], [96, 22], [106, 16], [56, 54], [80, 40],
          ].map(([x, y], i) => (
            <circle key={i} cx={x} cy={y} r="3.6" className="fill-accent" />
          ))}
          <line x1="6" y1="74" x2="114" y2="74" className="axis" />
          <line x1="6" y1="6" x2="6" y2="74" className="axis" />
        </svg>
      );
    case "histogram":
      return (
        <svg {...common}>
          {[10, 24, 44, 58, 46, 28, 14, 6].map((h, i) => (
            <rect key={i} x={8 + i * 13.5} y={74 - h} width="13.5" height={h} className="fill-accent hist" />
          ))}
          <line x1="6" y1="74" x2="114" y2="74" className="axis" />
        </svg>
      );
    case "column3d":
      return (
        <svg {...common}>
          <ellipse cx="60" cy="46" rx="44" ry="18" className="fill-mid" />
          <path d="M16 46 v10 a44 18 0 0 0 88 0 v-10" className="fill-soft" />
          <path d="M60 46 L60 28 A44 18 0 0 1 104 46 Z" className="fill-accent" />
          <line x1="20" y1="10" x2="100" y2="72" className="strike" />
        </svg>
      );
  }
}
