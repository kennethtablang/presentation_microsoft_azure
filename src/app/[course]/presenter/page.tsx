import type { Metadata } from "next";
import { Presenter } from "@/components/Presenter";
import { courses, isCourseId } from "@/courses";

export async function generateMetadata({ params }: { params: Promise<{ course: string }> }): Promise<Metadata> {
  const { course } = await params;
  return { title: `Presenter view · ${isCourseId(course) ? courses[course].code : ""}` };
}

export default function PresenterPage() {
  return <Presenter />;
}
