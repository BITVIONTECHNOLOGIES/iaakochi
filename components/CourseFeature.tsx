"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { flagshipCourses } from "@/data/courses";

export function CourseFeature() {
  return (
    <section id="courses" className="bg-[var(--iaa-ivory)]">
      <div className="frame flex flex-col gap-6 pt-[var(--space-open)] md:flex-row md:items-end md:justify-between">
        <div>
          <div className="flex items-center gap-3 text-[0.68rem] tracking-[0.2em] uppercase">
            <span className="text-[var(--iaa-turquoise)]">02</span>
            <span className="text-[var(--iaa-muted)]">Programs</span>
          </div>
          <h2 className="editorial-h mt-4 max-w-[12ch] text-[clamp(2.8rem,6.2vw,5.4rem)]">
            Build your aesthetics career
          </h2>
        </div>
        <Link
          href="/courses"
          className="shrink-0 rounded-full bg-[var(--iaa-turquoise)] px-6 py-2.5 text-[0.68rem] font-semibold tracking-[0.16em] text-[var(--iaa-black)] uppercase transition hover:bg-[#4de0b8]"
        >
          View all programs
        </Link>
      </div>

      {flagshipCourses.map((course, i) => (
        <article
          key={course.slug}
          className="frame mt-12 grid items-stretch overflow-hidden rounded-[1.25rem] border border-[var(--iaa-border)] bg-white/50 lg:grid-cols-[1.12fr_.88fr]"
        >
          <Link
            href={`/courses/${course.slug}`}
            data-cursor="Explore"
            className={`group relative min-h-[48vh] overflow-hidden ${i % 2 ? "lg:order-2" : ""}`}
          >
            <motion.div
              className="absolute inset-0"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <Image
                src={course.image}
                alt={course.imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 55vw"
                className={`object-cover ${course.imagePosition ?? "object-center"}`}
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/55 via-transparent to-transparent" />
            <span className="absolute top-6 left-6 font-serif text-5xl text-white/85">
              {String(i + 1).padStart(2, "0")}
            </span>
          </Link>
          <div className="flex flex-col justify-center px-6 py-12 md:px-10 lg:px-12 lg:py-16">
            <p className="micro text-[var(--iaa-turquoise)]">{course.category}</p>
            <h3 className="editorial-h mt-4 text-[clamp(2rem,3.8vw,3.6rem)]">{course.title}</h3>
            <p className="mt-5 max-w-[42ch] text-[var(--iaa-muted)]">{course.description}</p>
            <dl className="mt-8 grid grid-cols-2 gap-y-4 text-sm">
              <div>
                <dt className="micro">Duration</dt>
                <dd className="mt-1">{course.duration}</dd>
              </div>
              {course.theory && (
                <div>
                  <dt className="micro">Theory</dt>
                  <dd className="mt-1">{course.theory}</dd>
                </div>
              )}
              {course.practical && (
                <div>
                  <dt className="micro">Practical</dt>
                  <dd className="mt-1">{course.practical}</dd>
                </div>
              )}
              {course.eligibility && (
                <div>
                  <dt className="micro">Eligibility</dt>
                  <dd className="mt-1">{course.eligibility}</dd>
                </div>
              )}
            </dl>
            <ul className="mt-8 columns-1 gap-x-10 text-sm text-[var(--iaa-muted)] sm:columns-2">
              {course.curriculum.map((item) => (
                <li key={item} className="mb-2 flex gap-3">
                  <span className="mt-2 h-px w-4 shrink-0 bg-[var(--iaa-turquoise)]" />
                  {item}
                </li>
              ))}
            </ul>
            <Link href={`/courses/${course.slug}`} className="underline-link mt-10 w-fit">
              {course.cta} →
            </Link>
          </div>
        </article>
      ))}
      <div className="h-[var(--space-tight)]" />
    </section>
  );
}
