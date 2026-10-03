"use client";

import Link from "next/link";
import { useSyncExternalStore } from "react";
import { BarChart3, Brain, Layers, ListChecks, Moon, Presentation, Sun } from "lucide-react";
import { courses, courseIds } from "@/courses";
import type { CourseId } from "@/courses/types";
import { LAST_COURSE_KEY } from "@/lib/course-context";
import { toggleTheme, useTheme } from "@/lib/stores";
import { useGlassSheen } from "@/lib/useKeys";
import { Backdrop, ToolButton } from "./Chrome";

const visuals: Record<CourseId, { icon: typeof Brain; tone: string; blurb: string[] }> = {
  azure: {
    icon: Brain,
    tone: "blue",
    blurb: ["AI concepts & workloads", "Generative AI and agents", "Hands-on in Microsoft Foundry"],
  },
  comptia: {
    icon: BarChart3,
    tone: "pink",
    blurb: ["Clean and combine data", "Formulas, pivots, and charts", "Integrity, ethics, and sharing"],
  },
};

function readLastCourse(): CourseId | null {
  try {
    const v = localStorage.getItem(LAST_COURSE_KEY);
    return v === "azure" || v === "comptia" ? v : null;
  } catch {
    return null;
  }
}

const noopSubscribe = () => () => {};

export function CoursePicker() {
  const theme = useTheme();
  const last = useSyncExternalStore(noopSubscribe, readLastCourse, () => null);
  useGlassSheen();

  return (
    <div className="review picker">
      <Backdrop />
      <header className="picker-top">
        <ToolButton label={theme === "dark" ? "Light mode" : "Dark mode"} onClick={toggleTheme}>
          {theme === "dark" ? <Sun size={19} /> : <Moon size={19} />}
        </ToolButton>
      </header>

      <main className="picker-main">
        <div className="review-hero picker-hero">
          <p className="kicker">Certification courses</p>
          <h1>Choose your course</h1>
          <p className="subtitle">
            Each course has its own presentation, practice test, and flashcards. Questions and slides never mix, so pick the certification you&rsquo;re preparing for.
          </p>
        </div>

        <div className="picker-grid">
          {courseIds.map((id) => {
            const c = courses[id];
            const v = visuals[id];
            const Icon = v.icon;
            return (
              <article key={id} className={`glass picker-card tone-${v.tone}`}>
                <div className="picker-card-head">
                  <span className="chip-icon picker-icon">
                    <Icon size={30} />
                  </span>
                  {last === id && <span className="tag">Last opened</span>}
                </div>
                <p className="kicker">{c.vendor}</p>
                <h2>{c.name}</h2>
                <p className="picker-code">{c.code}</p>
                <p className="picker-tagline">{c.tagline}</p>
                <ul className="picker-blurb">
                  {v.blurb.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
                <div className="picker-stats">
                  <span>
                    <b>{c.slides.length}</b> slides
                  </span>
                  <span>
                    <b>{c.bank.length}</b> practice questions
                  </span>
                  <span>
                    <b>{c.glossaries.reduce((n, g) => n + g.terms.length, 0)}</b> key terms
                  </span>
                </div>
                <div className="picker-actions">
                  <Link href={c.base} className="primary-btn">
                    <Presentation size={18} /> Open presentation
                  </Link>
                  <Link href={`${c.base}/review/test`} className="ghost-btn">
                    <ListChecks size={17} /> Practice test
                  </Link>
                  <Link href={`${c.base}/review/flashcards`} className="ghost-btn">
                    <Layers size={17} /> Flashcards
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </main>
    </div>
  );
}
