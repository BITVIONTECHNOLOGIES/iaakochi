"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { aboutCopy } from "@/data/site";

const highlightBadges = [
  { label: "COCTRASI Affiliated Curriculum", icon: "✦" },
  { label: "Hands-on Clinical Training", icon: "✦" },
  { label: "Experienced Faculty Mentorship", icon: "✦" },
  { label: "Professional Certification", icon: "✦" },
];

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-zinc-950 px-6 py-24 text-white lg:px-16"
    >
      {/* Ambient lighting */}
      <div
        className="pointer-events-none absolute top-1/4 -left-20 h-96 w-96 rounded-full bg-emerald-600/15 blur-[120px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute right-10 bottom-10 h-[500px] w-[500px] rounded-full bg-teal-500/10 blur-[150px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute top-1/3 right-1/4 h-72 w-72 rounded-full bg-[var(--iaa-turquoise)]/10 blur-[100px]"
        aria-hidden
      />

      {/* Mesh texture */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:24px_24px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035] mix-blend-soft-light"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
        aria-hidden
      />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        {/* Left column */}
        <div>
          <div className="relative mb-6 inline-flex">
            <span
              className="pointer-events-none absolute -inset-3 rounded-full bg-emerald-500/20 blur-xl"
              aria-hidden
            />
            <span className="relative inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3.5 py-1.5 font-mono text-xs tracking-widest text-emerald-400 uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--iaa-turquoise)] shadow-[0_0_10px_rgba(55,215,171,0.8)]" />
              01 About IAA
            </span>
          </div>

          <h2 className="mb-6 font-serif text-4xl leading-tight tracking-tight text-white md:text-6xl">
            Education beyond certification
          </h2>

          <p className="mb-8 max-w-xl text-lg leading-relaxed text-zinc-300">{aboutCopy}</p>

          <div className="mb-10 grid gap-3 sm:grid-cols-2">
            {highlightBadges.map((badge) => (
              <div
                key={badge.label}
                className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-md"
              >
                <p className="text-sm leading-snug text-zinc-200">
                  <span className="mr-2 text-[var(--iaa-turquoise)]">{badge.icon}</span>
                  {badge.label}
                </p>
              </div>
            ))}
          </div>

          <Link
            href="/about"
            className="inline-flex rounded-full border border-white/20 bg-white/5 px-6 py-2.5 text-[0.68rem] font-semibold tracking-[0.16em] text-white uppercase backdrop-blur-md transition hover:border-[var(--iaa-turquoise)] hover:bg-white/10"
          >
            More about IAA →
          </Link>
        </div>

        {/* Right column — high-clarity certificate */}
        <motion.div
          className="relative mx-auto w-full max-w-xl lg:max-w-none"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
        >
          <div
            className="pointer-events-none absolute -inset-10 rounded-full bg-[var(--iaa-turquoise)]/20 blur-[90px]"
            aria-hidden
          />

          <div className="relative rounded-3xl border border-white/15 bg-gradient-to-b from-white/15 to-white/5 p-3 shadow-[0_20px_50px_rgba(0,0,0,0.8)] backdrop-blur-xl transition-all duration-500 sm:p-4 lg:rotate-1 lg:hover:rotate-0">
            <div className="relative aspect-[1024/723] overflow-hidden rounded-2xl bg-[#f7f4ea]">
              <Image
                src="/images/iaa-certificate.jpg"
                alt="IAA Certificate of Course Completion — Clinical Cosmetology Assistant"
                fill
                quality={90}
                sizes="(max-width: 1024px) 92vw, 640px"
                className="object-contain object-center"
              />
              <div
                className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-black/5"
                aria-hidden
              />
              <div
                className="pointer-events-none absolute inset-3 rounded-xl border border-[#159c7b]/25 sm:inset-4"
                aria-hidden
              />
            </div>

            <div className="absolute -bottom-5 -left-2 z-20 max-w-[240px] rounded-2xl border border-emerald-500/30 bg-zinc-900/90 p-4 shadow-xl backdrop-blur-md sm:-left-4 sm:max-w-[260px]">
              <p className="text-[0.62rem] tracking-[0.18em] text-[var(--iaa-turquoise)] uppercase">
                Highlight
              </p>
              <p className="mt-1.5 font-serif text-xl text-white">Experienced Faculty</p>
              <p className="mt-1 text-xs leading-relaxed text-zinc-400">
                Learn from practitioners actively working in aesthetics — not only classroom
                instructors.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
