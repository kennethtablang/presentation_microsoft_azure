import type { Metadata } from "next";
import { Flashcards } from "@/components/review/Flashcards";
import { courses, isCourseId } from "@/courses";

export async function generateMetadata({ params }: { params: Promise<{ course: string }> }): Promise<Metadata> {
  const { course } = await params;
  return { title: `Flashcards · ${isCourseId(course) ? courses[course].code : ""}` };
}

export default function FlashcardsPage() {
  return <Flashcards />;
}
