import type { MetadataRoute } from "next";
import { allCourses } from "@/data/courses";
import { site } from "@/data/site";

const pages = [
  { path: "", priority: 1, changeFrequency: "weekly" as const },
  { path: "/about", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/courses", priority: 0.9, changeFrequency: "weekly" as const },
  { path: "/why-iaa", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/masterclass", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/campus", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/contact", priority: 0.7, changeFrequency: "monthly" as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...pages.map((page) => ({
      url: `${site.url}${page.path}`,
      lastModified: new Date(),
      changeFrequency: page.changeFrequency,
      priority: page.priority,
    })),
    ...allCourses.map((course) => ({
      url: `${site.url}/courses/${course.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
