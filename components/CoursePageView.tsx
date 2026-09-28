import Image from "next/image";
import Link from "next/link";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import type { Course } from "@/data/courses";
import { allCourses } from "@/data/courses";
import { whatsappUrl } from "@/lib/whatsapp";

export function CoursePageView({ course }: { course: Course }) {
  const related = allCourses.filter((c) => c.slug !== course.slug).slice(0, 3);

  return (
    <article>
      <section className="relative min-h-[88vh] overflow-hidden bg-zinc-950 text-white">
        <Image
          src={course.image}
          alt={course.imageAlt}
          fill
          priority
          sizes="100vw"
          className={`object-cover opacity-55 ${course.imagePosition ?? "object-center"}`}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/80 to-zinc-950/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/70 via-transparent to-black/40" />
        <div className="frame relative z-10 flex min-h-[88vh] flex-col justify-end pt-32 pb-20 md:pt-36">
          <p className="micro text-[var(--iaa-turquoise)]">{course.category}</p>
          <h1 className="editorial-h mt-5 max-w-[14ch] text-[clamp(2.8rem,7vw,6.4rem)]">
            {course.title}
          </h1>
          {course.subtitle && <p className="mt-3 italic text-white/75">{course.subtitle}</p>}
          <p className="mt-6 max-w-[48ch] text-white/65">{course.description}</p>
          <dl className="mt-10 flex flex-wrap gap-10 text-sm">
            <div>
              <dt className="micro text-white/45">Duration</dt>
              <dd className="mt-1">{course.duration}</dd>
            </div>
            {course.eligibility && (
              <div>
                <dt className="micro text-white/45">Eligibility</dt>
                <dd className="mt-1">{course.eligibility}</dd>
              </div>
            )}
            {course.theory && (
              <div>
                <dt className="micro text-white/45">Theory</dt>
                <dd className="mt-1">{course.theory}</dd>
              </div>
            )}
            {course.practical && (
              <div>
                <dt className="micro text-white/45">Practical</dt>
                <dd className="mt-1">{course.practical}</dd>
              </div>
            )}
          </dl>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/contact#enquiry"
              className="rounded-full bg-[var(--iaa-turquoise)] px-6 py-2.5 text-[0.68rem] font-semibold tracking-[0.16em] text-[var(--iaa-black)] uppercase"
            >
              Enquire now
            </Link>
            <a
              href={whatsappUrl(course.whatsapp)}
              className="rounded-full border border-white/25 px-6 py-2.5 text-[0.68rem] font-semibold tracking-[0.16em] uppercase transition hover:border-[var(--iaa-turquoise)]"
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp IAA
            </a>
          </div>
        </div>
      </section>

      <section className="bg-[var(--iaa-ivory)] py-[var(--space-open)]">
        <div className="frame grid gap-16 lg:grid-cols-2">
          <div>
            <p className="micro">Overview</p>
            <h2 className="editorial-h mt-4 text-[clamp(2.2rem,4vw,3.6rem)]">The program</h2>
            <p className="mt-6 max-w-[48ch] text-[var(--iaa-muted)]">{course.overview}</p>
          </div>
          <div className="rounded-[1.25rem] border border-[var(--iaa-border)] bg-white/60 p-8 backdrop-blur-sm">
            <p className="micro">Learning structure</p>
            <p className="mt-5 max-w-[42ch] font-serif text-2xl leading-snug">{course.structure}</p>
            <p className="mt-6 max-w-[42ch] text-[var(--iaa-muted)]">{course.practicalNote}</p>
          </div>
        </div>
      </section>

      <section className="bg-zinc-950 py-[var(--space-open)] text-white">
        <div className="frame">
          <p className="micro text-[var(--iaa-turquoise)]">Curriculum</p>
          <h2 className="editorial-h mt-4 text-[clamp(2.4rem,5vw,4.4rem)]">What you will study</h2>
          <ol className="mt-12 grid gap-0 sm:grid-cols-2">
            {course.curriculum.map((item, i) => (
              <li
                key={item}
                className="flex gap-4 border-t border-white/10 py-5 sm:odd:pr-8 sm:even:pl-8"
              >
                <span className="text-[var(--iaa-turquoise)]">{String(i + 1).padStart(2, "0")}</span>
                <span className="font-serif text-2xl">{item}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-[var(--iaa-ivory)] py-[var(--space-open)]">
        <div className="frame max-w-[900px]">
          <p className="micro">Career relevance</p>
          <p className="editorial-h mt-6 text-[clamp(2rem,4vw,3.4rem)]">{course.career}</p>
        </div>
      </section>

      {related.length > 0 && (
        <section className="border-t border-[var(--iaa-border)] bg-[var(--iaa-ivory)] pb-[var(--space-open)]">
          <div className="frame">
            <p className="micro">More programs</p>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {related.map((item) => (
                <Link
                  key={item.slug}
                  href={`/courses/${item.slug}`}
                  className="group overflow-hidden rounded-[1.25rem] border border-[var(--iaa-border)] bg-white/50 transition hover:border-[var(--iaa-turquoise)]/40"
                >
                  <div className="relative aspect-[16/10]">
                    <Image
                      src={item.image}
                      alt={item.imageAlt}
                      fill
                      sizes="33vw"
                      className={`object-cover transition duration-700 group-hover:scale-105 ${item.imagePosition ?? "object-center"}`}
                    />
                  </div>
                  <div className="p-5">
                    <p className="micro text-[var(--iaa-turquoise)]">{item.category}</p>
                    <h3 className="mt-2 font-serif text-xl">{item.title}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <FAQ />
      <FinalCTA />
    </article>
  );
}
