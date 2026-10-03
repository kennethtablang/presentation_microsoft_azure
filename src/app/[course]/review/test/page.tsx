import type { Metadata } from "next";
import { PracticeTest } from "@/components/review/PracticeTest";
import { courses, isCourseId } from "@/courses";

export async function generateMetadata({ params }: { params: Promise<{ course: string }> }): Promise<Metadata> {
  const { course } = await params;
  return { title: `Practice test · ${isCourseId(course) ? courses[course].code : ""}` };
}

export default function PracticeTestPage() {
  return <PracticeTest />;
}
