import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FinalCTA } from "@/components/FinalCTA";
import { PageHero } from "@/components/PageHero";
import { allCourses } from "@/data/courses";

export const metadata: Metadata = {
  title: "Courses",
  description:
    "Explore IAA Kochi’s clinical cosmetology, SPMU and specialist aesthetics programs.",
  alternates: { canonical: "/courses" },
};

export default function CoursesPage() {
  return (
    <>
      <PageHero
        index="02"
        label="Programs"
        title="Build your aesthetics career"
        description="Flagship career programs and focused specialist courses designed for clinic-ready practice."
      />
      <section className="bg-zinc-950 py-[var(--space-open)] text-white">
        <div className="frame grid gap-6 md:grid-cols-2">
          {allCourses.map((course, i) => (
            <article
              key={course.slug}
              className="group overflow-hidden rounded-[1.25rem] border border-white/10 bg-white/5 transition hover:border-[var(--iaa-turquoise)]/40"
            >
              <Link href={`/courses/${course.slug}`} className="block">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={course.image}
                    alt={course.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent" />
                  <span className="absolute top-4 left-4 font-serif text-3xl text-white/80">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="absolute bottom-4 left-4 text-[0.62rem] tracking-[0.18em] text-[var(--iaa-turquoise)] uppercase">
                    {course.category}
                  </p>
                </div>
                <div className="p-6 md:p-8">
                  <h2 className="editorial-h text-[clamp(1.7rem,3vw,2.4rem)]">{course.title}</h2>
                  <p className="mt-3 max-w-[42ch] text-sm leading-relaxed text-white/60">
                    {course.description}
                  </p>
                  <dl className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/80">
                    <div>
                      <dt className="micro text-white/40">Duration</dt>
                      <dd className="mt-1">{course.duration}</dd>
                    </div>
                    {course.eligibility && (
                      <div>
                        <dt className="micro text-white/40">Eligibility</dt>
                        <dd className="mt-1">{course.eligibility}</dd>
                      </div>
                    )}
                  </dl>
                  <span className="mt-6 inline-block text-[0.68rem] tracking-[0.16em] text-[var(--iaa-turquoise)] uppercase">
                    {course.cta} →
                  </span>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </section>
      <FinalCTA />
    </>
  );
}
