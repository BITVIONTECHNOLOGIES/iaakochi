"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { specialistCourses } from "@/data/courses";
import { cn } from "@/lib/cn";

export function SpecialistGallery() {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-[var(--iaa-ivory)] py-[var(--space-open)]">
      <div className="frame mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="micro">Specialist courses</p>
          <h2 className="editorial-h mt-3 text-[clamp(2.4rem,5vw,4.4rem)]">Precision skills.</h2>
        </div>
        <Link
          href="/courses"
          className="shrink-0 text-[0.68rem] tracking-[0.16em] uppercase underline-offset-4 hover:underline"
        >
          All courses →
        </Link>
      </div>
      <div className="frame flex min-h-[68vh] flex-col gap-3 md:flex-row">
        {specialistCourses.map((course, i) => {
          const selected = active === i;
          return (
            <motion.article
              key={course.slug}
              layout
              onMouseEnter={() => setActive(i)}
              className={cn(
                "relative min-h-[58vh] overflow-hidden rounded-[1.25rem] md:min-h-[72vh]",
                selected ? "md:flex-[1.45]" : "md:flex-1",
              )}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link href={`/courses/${course.slug}`} data-cursor="Open" className="absolute inset-0">
                <Image
                  src={course.image}
                  alt={course.imageAlt}
                  fill
                  sizes="50vw"
                  className={cn(
                    "object-cover transition-transform duration-[800ms] ease-[var(--ease)]",
                    selected && "scale-[1.06]",
                  )}
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,5,5,.05),rgba(5,5,5,.62))]" />
                <div className="absolute inset-x-0 bottom-0 p-7 text-[var(--iaa-ivory)]">
                  <p className="micro text-[var(--iaa-turquoise)]">{course.category}</p>
                  <h3 className="editorial-h mt-3 text-[clamp(2rem,4vw,3.4rem)]">{course.title}</h3>
                  <p className="mt-3 max-w-[36ch] text-sm text-white/75">{course.description}</p>
                  <span className="mt-5 inline-block text-xs tracking-[0.2em] uppercase">View →</span>
                </div>
              </Link>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
