"use client";

import { createContext, useContext, useEffect, useMemo } from "react";
import { courses } from "@/courses";
import type { Course, CourseId } from "@/courses/types";
import { deckStoreFor, type DeckStore } from "./deck-store";

export const LAST_COURSE_KEY = "lms-last-course";

const CourseContext = createContext<{ course: Course; store: DeckStore } | null>(null);

/** Scopes everything below it (deck, presenter, review) to one course. */
export function CourseProvider({ id, children }: { id: CourseId; children: React.ReactNode }) {
  const value = useMemo(() => {
    const course = courses[id];
    return { course, store: deckStoreFor(course.id, course.slides) };
  }, [id]);

  useEffect(() => {
    try {
      localStorage.setItem(LAST_COURSE_KEY, id);
    } catch {
      /* storage unavailable; the picker just won't highlight a last course */
    }
  }, [id]);

  return <CourseContext.Provider value={value}>{children}</CourseContext.Provider>;
}

function useCtx() {
  const ctx = useContext(CourseContext);
  if (!ctx) throw new Error("This component must be rendered inside <CourseProvider>.");
  return ctx;
}

export const useCourse = () => useCtx().course;
export const useDeckStore = () => useCtx().store;
