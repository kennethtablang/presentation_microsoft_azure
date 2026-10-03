import type { Metadata } from "next";
import { Deck } from "@/components/Deck";
import { courses, isCourseId } from "@/courses";

export async function generateMetadata({ params }: { params: Promise<{ course: string }> }): Promise<Metadata> {
  const { course } = await params;
  if (!isCourseId(course)) return {};
  const c = courses[course];
  return { title: `${c.code} · ${c.name}`, description: c.tagline };
}

export default function CourseDeckPage() {
  return <Deck />;
}
