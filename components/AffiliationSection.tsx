"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

export function AffiliationSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#14110e] py-14 md:py-20">
      {/* Warm clinic — readable through soft luxury wash */}
      <div className="absolute inset-0" aria-hidden>
        <Image
          src="/images/campus-clinical-environment.jpg"
          alt=""
          fill
          sizes="100vw"
          className="scale-[1.06] object-cover object-[58%_42%] blur-[1.5px] brightness-[0.92] contrast-[1.05] saturate-[1.08] sepia-[0.28]"
          priority={false}
        />
        {/* Soft brand wash — clinic stays visible */}
        <div className="absolute inset-0 bg-[#1a1612]/28" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a1612]/48 via-[#1a1612]/12 to-[#1a1612]/32" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-transparent to-black/30" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_22%_50%,rgba(251,191,36,0.2),transparent_52%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_88%_48%,rgba(55,215,171,0.18),transparent_48%)]" />
      </div>

      {/* Ambient edge glows */}
      <div
        className="pointer-events-none absolute top-1/2 left-[6%] h-64 w-64 -translate-y-1/2 rounded-full bg-amber-400/25 blur-[110px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute top-1/3 right-[8%] h-80 w-80 rounded-full bg-teal-400/20 blur-[120px]"
        aria-hidden
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-8">
        <motion.div
          className="relative overflow-hidden rounded-[2.5rem] border border-white/35 bg-white/[0.12] shadow-[0_28px_80px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.35)] backdrop-blur-xl"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Gold→silver rim light */}
          <div className="pointer-events-none absolute inset-0 rounded-[2.5rem] ring-1 ring-inset ring-amber-100/25" />
          <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-amber-200/60 to-transparent" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-amber-100/12 via-transparent to-cyan-300/10" />

          {/* Sparkles */}
          <Sparkle className="absolute top-5 left-7 opacity-90" />
          <Sparkle className="absolute top-[42%] left-[46%] opacity-55" />
          <Sparkle className="absolute right-9 bottom-5 opacity-80" />

          <div className="relative grid items-center gap-7 p-6 sm:p-8 lg:grid-cols-[0.95fr_1.4fr_auto] lg:gap-9 lg:p-9">
            {/* Affiliation brand plate */}
            <div className="rounded-3xl border border-white/20 bg-white/[0.08] px-5 py-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.2)] backdrop-blur-md sm:px-6">
              <p className="text-[0.62rem] tracking-[0.26em] text-white/80 uppercase">
                Recognised affiliation
              </p>
              <h2
                className="mt-2 font-serif text-[clamp(2.35rem,4.8vw,3.55rem)] leading-none tracking-tight"
                style={{
                  backgroundImage:
                    "linear-gradient(105deg, #e8c36a 0%, #f8e7b8 28%, #ffffff 55%, #cfd8e3 82%, #9aa8b8 100%)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                  filter: "drop-shadow(0 0 28px rgba(251,191,36,0.22))",
                }}
              >
                COCTRASI
              </h2>
            </div>

            {/* Narrative */}
            <div className="max-w-2xl">
              <div className="mb-4 flex items-center gap-2.5">
                <Diamond />
                <span className="h-px flex-1 bg-gradient-to-r from-white/75 via-white/40 to-transparent" />
              </div>
              <p className="text-[0.98rem] leading-relaxed text-white/95 md:text-[1.06rem]">
                Professional education with structured training and recognised affiliation — adding
                credibility to your certification with clinics and employers.
              </p>
              <div className="mt-4 flex items-center gap-2.5">
                <span className="h-px flex-1 bg-gradient-to-r from-transparent via-white/40 to-white/75" />
                <Diamond />
              </div>
            </div>

            {/* CTA */}
            <div className="flex justify-start lg:justify-end">
              <Link
                href="/why-iaa"
                className="group relative inline-flex items-center gap-3 rounded-full border border-cyan-300/70 bg-zinc-950/50 px-5 py-3.5 shadow-[0_0_32px_rgba(55,215,171,0.35)] backdrop-blur-md transition hover:border-cyan-200 hover:shadow-[0_0_48px_rgba(55,215,171,0.5)]"
              >
                <span className="absolute -inset-1 -z-10 rounded-full bg-cyan-400/20 blur-md" />
                <IrisIcon />
                <span className="relative text-[0.72rem] font-semibold tracking-[0.16em] text-white uppercase">
                  Why IAA →
                </span>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Diamond({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-block h-1.5 w-1.5 rotate-45 bg-cyan-200 shadow-[0_0_10px_rgba(165,243,252,0.95)] ${className}`}
      aria-hidden
    />
  );
}

function Sparkle({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden
    >
      <path
        d="M7 0L8.2 5.8L14 7L8.2 8.2L7 14L5.8 8.2L0 7L5.8 5.8L7 0Z"
        fill="#fde68a"
        fillOpacity="0.9"
      />
    </svg>
  );
}

function IrisIcon() {
  return (
    <span className="relative grid h-9 w-9 place-items-center">
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
        <circle cx="14" cy="14" r="11" stroke="#67e8f9" strokeOpacity="0.7" />
        <circle cx="14" cy="14" r="7.5" stroke="#37d7ab" strokeOpacity="0.95" />
        <circle cx="14" cy="14" r="3.6" fill="#67e8f9" />
        <circle cx="12.6" cy="12.6" r="1.1" fill="white" />
        <path d="M20 8l4-2M22 10l3 1" stroke="#fde68a" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
      <span className="absolute inset-0 animate-ping rounded-full bg-cyan-300/15" />
    </span>
  );
}
