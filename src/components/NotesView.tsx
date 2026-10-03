import type { Notes } from "@/lib/types";
import { Icon } from "./Icon";

/** One line of the talk track: spoken text, a stage cue, or an expected answer. */
function ScriptLine({ line }: { line: string }) {
  if (!line.startsWith("[")) return <p className="script-say">{line}</p>;
  const text = line.replace(/^\[/, "").replace(/\]$/, "");
  const expect = /^(Expect|Answer|Answers)\b/i.test(text);
  return (
    <p className={expect ? "script-expect" : "script-cue"}>
      {expect && <Icon name="check" size={15} />}
      <span>{text}</span>
    </p>
  );
}

export function NotesView({ notes }: { notes: Notes }) {
  const empty = !notes.script?.length && !notes.say?.length && !notes.ask?.length && !notes.deeper?.length;
  return (
    <div className="notes">
      {notes.time && (
        <span className="notes-time">
          <Icon name="timer" size={16} /> {notes.time}
        </span>
      )}
      {empty && <p className="notes-empty">No speaker notes for this slide. Let the slide speak, then invite questions.</p>}
      {!!notes.script?.length && (
        <section className="script">
          <h4>
            <Icon name="quote" size={16} /> Script
          </h4>
          {notes.script.map((line, i) => (
            <ScriptLine key={i} line={line} />
          ))}
        </section>
      )}
      {!!notes.say?.length && (
        <section>
          <h4>
            <Icon name="quote" size={16} /> Talk track
          </h4>
          {notes.say.map((s, i) => (
            <p key={i}>{s}</p>
          ))}
        </section>
      )}
      {!!notes.ask?.length && (
        <section>
          <h4>
            <Icon name="question" size={16} /> {notes.script?.length ? "More to ask" : "Ask the class"}
          </h4>
          {notes.ask.map((a, i) => (
            <div key={i} className="notes-ask">
              <p className="q">{a.q}</p>
              {a.a && (
                <p className="a">
                  <Icon name="check" size={15} /> {a.a}
                </p>
              )}
            </div>
          ))}
        </section>
      )}
      {!!notes.deeper?.length && (
        <section>
          <h4>
            <Icon name="bulb" size={16} /> Go deeper
          </h4>
          <ul>
            {notes.deeper.map((d, i) => (
              <li key={i}>{d}</li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}
