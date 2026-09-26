import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FinalCTA } from "@/components/FinalCTA";
import { aboutFeatures } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about IAA Kochi — professional aesthetics education built to produce clinic-ready professionals.",
  alternates: { canonical: "/about" },
};

const gold = "#c4a06a";

export default function AboutPage() {
  return (
    <>
      {/* Premium About hero */}
      <section className="relative overflow-hidden bg-zinc-950 text-white">
        <div className="absolute inset-0" aria-hidden>
          <Image
            src="/images/leather-desk.jpg"
            alt=""
            fill
            quality={60}
            sizes="100vw"
            className="object-cover opacity-40 brightness-[0.35] contrast-[1.1] saturate-[0.7]"
          />
          <div className="absolute inset-0 bg-[#070707]/78" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,rgba(55,215,171,0.14),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_15%_80%,rgba(196,160,106,0.1),transparent_45%)]" />
        </div>

        {/* Fine gold lattice */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(118deg, transparent 0 42px, rgba(196,160,106,0.35) 42px 43px)",
          }}
          aria-hidden
        />

        <div className="frame relative z-10 grid items-center gap-12 pt-32 pb-16 md:pt-36 md:pb-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 lg:pb-24">
          <div>
            <div className="inline-flex items-center gap-2.5 rounded-full border border-[var(--iaa-turquoise)]/25 bg-[var(--iaa-turquoise)]/10 px-3.5 py-1.5">
              <span className="text-[0.68rem] font-semibold tracking-[0.2em] text-[var(--iaa-turquoise)] uppercase">
                01
              </span>
              <span className="text-[0.68rem] tracking-[0.2em] text-white/55 uppercase">
                About IAA
              </span>
            </div>

            <h1 className="mt-6 font-serif text-[clamp(2.6rem,5.8vw,4.8rem)] leading-[1.08] tracking-[-0.02em]">
              Education beyond certification
            </h1>

            <p className="mt-6 max-w-[44ch] text-base leading-relaxed text-white/65 md:text-[1.05rem]">
              IAA combines structured theory, practical exposure, faculty mentorship and career
              guidance so nursing and allied-health graduates can step into aesthetics with
              clarity.
            </p>

            <div className="mt-8 flex flex-wrap gap-3 sm:gap-4">
              <Link
                href="/contact"
                className="rounded-full bg-[var(--iaa-turquoise)] px-6 py-2.5 text-[0.68rem] font-semibold tracking-[0.16em] text-[var(--iaa-black)] uppercase shadow-[0_8px_28px_rgba(55,215,171,0.28)] transition hover:bg-[#4de0b8]"
              >
                Enquire now
              </Link>
              <Link
                href="/courses"
                className="rounded-full border border-white/25 px-6 py-2.5 text-[0.68rem] font-semibold tracking-[0.16em] uppercase transition hover:border-[var(--iaa-turquoise)]"
              >
                View programs
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              {["COCTRASI Affiliated", "Clinic-ready training", "Career mentorship"].map(
                (item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-[0.62rem] tracking-[0.14em] text-white/70 uppercase backdrop-blur-sm"
                  >
                    <span className="mr-1.5 text-[var(--iaa-turquoise)]">✦</span>
                    {item}
                  </span>
                ),
              )}
            </div>
          </div>

          {/* Certificate showcase */}
          <div className="relative mx-auto w-full max-w-md lg:mx-0 lg:ml-auto lg:max-w-none">
            <div
              className="pointer-events-none absolute -inset-8 rounded-full opacity-70 blur-3xl"
              style={{
                background:
                  "radial-gradient(circle at 50% 40%, rgba(55,215,171,0.22), rgba(196,160,106,0.1) 45%, transparent 70%)",
              }}
              aria-hidden
            />

            <div
              className="relative overflow-hidden rounded-[1.35rem] border border-white/15 bg-white/[0.06] p-3 shadow-[0_28px_70px_rgba(0,0,0,0.45)] backdrop-blur-md sm:p-4"
              style={{ boxShadow: `0 0 0 1px rgba(196,160,106,0.22), 0 28px 70px rgba(0,0,0,0.45)` }}
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1rem] bg-[#f7f6f1]">
                <Image
                  src="/images/certificate.jpg"
                  alt="IAA Certificate of Professional Competence"
                  fill
                  quality={80}
                  sizes="(max-width: 1024px) 90vw, 480px"
                  className="object-cover object-center"
                  priority
                />
                <div
                  className="pointer-events-none absolute inset-3 rounded-[0.75rem] border"
                  style={{ borderColor: "rgba(196,160,106,0.35)" }}
                  aria-hidden
                />
              </div>

              <div className="mt-3 flex items-center justify-between gap-3 px-1">
                <p className="text-[0.62rem] tracking-[0.16em] text-white/55 uppercase">
                  Professional competence
                </p>
                <p
                  className="text-[0.62rem] font-semibold tracking-[0.14em] uppercase"
                  style={{ color: gold }}
                >
                  COCTRASI · Kochi
                </p>
              </div>
            </div>

            <div className="absolute -bottom-4 -left-2 max-w-[220px] rounded-2xl border border-[var(--iaa-turquoise)]/30 bg-zinc-950/90 px-4 py-3 shadow-xl backdrop-blur-md sm:-left-4">
              <p className="text-[0.58rem] tracking-[0.16em] text-[var(--iaa-turquoise)] uppercase">
                Bound to Educate
              </p>
              <p className="mt-1 font-serif text-lg text-white">Clinic-ready careers</p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-zinc-950 py-[var(--space-open)] text-white">
        <div
          className="pointer-events-none absolute top-0 right-0 h-72 w-72 rounded-full bg-[var(--iaa-turquoise)]/10 blur-[90px]"
          aria-hidden
        />
        <div className="frame relative grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="micro text-[var(--iaa-turquoise)]">Campus vision</p>
            <h2 className="editorial-h mt-4 max-w-[14ch] text-[clamp(2.2rem,4vw,3.6rem)]">
              Built for clinic-ready careers
            </h2>
            <p className="mt-6 max-w-[42ch] leading-relaxed text-white/65">
              From online theory to offline practical training, every stage is designed to help
              learners transition from clinical education into the aesthetics industry with
              confidence.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/courses"
                className="rounded-full bg-[var(--iaa-turquoise)] px-6 py-2.5 text-[0.68rem] font-semibold tracking-[0.16em] text-[var(--iaa-black)] uppercase"
              >
                Explore courses
              </Link>
              <Link
                href="/why-iaa"
                className="rounded-full border border-white/20 px-6 py-2.5 text-[0.68rem] font-semibold tracking-[0.16em] uppercase transition hover:border-[var(--iaa-turquoise)]"
              >
                Why IAA →
              </Link>
            </div>
          </div>

          <ul className="rounded-[1.25rem] border border-white/10 bg-white/5 p-2 backdrop-blur-md">
            {aboutFeatures.map((item, i) => (
              <li
                key={item}
                className="flex items-baseline justify-between gap-6 border-b border-white/10 px-5 py-4 last:border-b-0"
              >
                <span className="font-serif text-[1.25rem] md:text-[1.5rem]">{item}</span>
                <span className="micro text-[var(--iaa-turquoise)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <FinalCTA />
    </>
  );
}
