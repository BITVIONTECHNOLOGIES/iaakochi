import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CoursePageView } from "@/components/CoursePageView";
import { allCourses, getCourse } from "@/data/courses";
import { site } from "@/data/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return allCourses.map((course) => ({ slug: course.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourse(slug);
  if (!course) return {};
  return {
    title: course.title,
    description: course.description,
    alternates: { canonical: `/courses/${course.slug}` },
    openGraph: {
      title: `${course.title} | ${site.shortName}`,
      description: course.description,
    },
  };
}

export default async function CourseRoute({ params }: Props) {
  const { slug } = await params;
  const course = getCourse(slug);
  if (!course) notFound();
  return <CoursePageView course={course} />;
}
