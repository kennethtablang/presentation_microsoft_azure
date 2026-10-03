"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowLeft, Layers, ListChecks, Moon, Repeat, Sun } from "lucide-react";
import { useCourse } from "@/lib/course-context";
import { toggleTheme, useTheme } from "@/lib/stores";
import { useGlassSheen } from "@/lib/useKeys";
import { Backdrop, ToolButton } from "../Chrome";

export function ReviewShell({ children }: { children: React.ReactNode }) {
  const course = useCourse();
  const tabs = [
    { href: `${course.base}/review/test`, label: "Practice test", icon: ListChecks },
    { href: `${course.base}/review/flashcards`, label: "Flashcards", icon: Layers },
  ];
  const pathname = usePathname();
  const theme = useTheme();
  useGlassSheen();

  return (
    <div className="review">
      <Backdrop />
      <header className="glass review-bar">
        <Link href={course.base} className="review-back" aria-label="Back to slides">
          <ArrowLeft size={18} />
          <span>Slides</span>
        </Link>
        <div className="review-brand">
          <span className="kicker">{course.code} review</span>
          <strong>Practice &amp; flashcards</strong>
        </div>
        <nav
          className="review-tabs"
          aria-label="Review mode"
          style={{ "--active": Math.max(0, tabs.findIndex((t) => t.href === pathname)) } as React.CSSProperties}
        >
          <span className="review-tabs-pill" aria-hidden />
          {tabs.map(({ href, label, icon: Icon }) => (
            <Link key={href} href={href} className={`review-tab ${pathname === href ? "is-active" : ""}`} aria-current={pathname === href ? "page" : undefined}>
              <Icon size={17} />
              <span>{label}</span>
            </Link>
          ))}
        </nav>
        <Link href="/" className="review-back" aria-label="Switch course" title="Switch course">
          <Repeat size={17} />
        </Link>
        <ToolButton label={theme === "dark" ? "Light mode" : "Dark mode"} onClick={toggleTheme}>
          {theme === "dark" ? <Sun size={19} /> : <Moon size={19} />}
        </ToolButton>
      </header>
      <main className="review-main">{children}</main>
    </div>
  );
}
