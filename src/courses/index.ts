import { azure } from "./azure";
import { comptia } from "./comptia";
import type { Course, CourseId } from "./types";

export const courses: Record<CourseId, Course> = { azure, comptia };

export const courseIds = Object.keys(courses) as CourseId[];

export function isCourseId(value: string): value is CourseId {
  return value in courses;
}
