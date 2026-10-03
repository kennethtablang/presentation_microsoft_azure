import type { Notes } from "@/lib/types";
import { Icon } from "./Icon";

export function NotesView({ notes }: { notes: Notes }) {
  const empty = !notes.say?.length && !notes.ask?.length && !notes.deeper?.length;
  return (
    <div className="notes">
      {notes.time && (
        <span className="notes-time">
          <Icon name="timer" size={16} /> {notes.time}
        </span>
      )}
      {empty && <p className="notes-empty">No speaker notes for this slide. Let the slide speak, then invite questions.</p>}
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
            <Icon name="question" size={16} /> Ask the class
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
