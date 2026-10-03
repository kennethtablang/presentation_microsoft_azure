import { notFound } from "next/navigation";
import { courseIds, isCourseId } from "@/courses";
import { CourseProvider } from "@/lib/course-context";

export const dynamicParams = false;

export function generateStaticParams() {
  return courseIds.map((course) => ({ course }));
}

export default async function CourseLayout({ children, params }: { children: React.ReactNode; params: Promise<{ course: string }> }) {
  const { course } = await params;
  if (!isCourseId(course)) notFound();
  return <CourseProvider id={course}>{children}</CourseProvider>;
}
