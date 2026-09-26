"use client";

import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { useState } from "react";
import { testimonialDisclaimer, testimonials } from "@/data/testimonials";

const teal = "#37d7ab";
const ink = "#1a1a1a";
const muted = "#7a7a7a";

export function TestimonialSlider() {
  const [i, setI] = useState(0);
  const item = testimonials[i];

  return (
    <section className="relative overflow-hidden bg-[#f7f7f5] py-[var(--space-open)]">
      {/* White marble surface */}
      <div className="absolute inset-0" aria-hidden>
        <Image
          src="/images/marble-white.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center opacity-[0.55] brightness-[1.08] contrast-[0.95] saturate-[0.35]"
        />
        <div className="absolute inset-0 bg-white/55" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(55,215,171,0.06),transparent_50%)]" />
      </div>

      <div className="frame relative z-10">
        <div
          className="relative overflow-hidden rounded-[1.5rem] border border-black/[0.06] bg-white/90 shadow-[0_24px_60px_rgba(0,0,0,0.06)] backdrop-blur-[2px]"
        >
          {/* Inner marble wash */}
          <div className="absolute inset-0" aria-hidden>
            <Image
              src="/images/marble-white.jpg"
              alt=""
              fill
              sizes="1200px"
              className="object-cover opacity-[0.22] brightness-[1.15] saturate-[0.25]"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-white/70 to-white/55" />
          </div>

          <div className="relative z-10 px-6 py-9 sm:px-10 sm:py-12 lg:px-14 lg:py-14">
            {/* Header */}
            <div className="flex items-center gap-3">
              <CaduceusMark />
              <p className="text-[0.68rem] font-medium tracking-[0.22em] text-[#555] uppercase">
                Learner pathways
              </p>
            </div>

            {/* Quote */}
            <div className="relative mt-10 min-h-[200px] sm:min-h-[220px] lg:mt-12 lg:min-h-[240px]">
              <span
                className="pointer-events-none absolute top-[42%] right-[8%] hidden h-2 w-2 rounded-full bg-[var(--iaa-turquoise)] shadow-[0_0_12px_rgba(55,215,171,0.55)] lg:block"
                aria-hidden
              />
              <AnimatePresence mode="wait">
                <motion.blockquote
                  key={item.name}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  <p
                    className="max-w-[24ch] font-serif text-[clamp(1.7rem,4.1vw,3.2rem)] leading-[1.18] tracking-[-0.015em] sm:max-w-[30ch]"
                    style={{ color: ink }}
                  >
                    “{item.quote}”
                  </p>
                  <footer className="mt-8 flex flex-wrap items-baseline gap-x-2 gap-y-1 sm:mt-10">
                    <strong className="font-sans text-[0.7rem] font-semibold tracking-[0.16em] text-[#333] uppercase">
                      {item.name}
                    </strong>
                    <span className="hidden text-[#bbb] sm:inline" aria-hidden>
                      |
                    </span>
                    <span
                      className="text-[0.65rem] tracking-[0.12em] uppercase"
                      style={{ color: muted }}
                    >
                      {item.background}
                    </span>
                  </footer>
                </motion.blockquote>
              </AnimatePresence>
            </div>

            {/* Soft neumorphic pathway pills */}
            <div className="mt-10 flex flex-wrap items-center gap-3 sm:mt-12">
              {testimonials.map((t, idx) => {
                const active = idx === i;
                return (
                  <button
                    key={t.name}
                    type="button"
                    aria-label={t.name}
                    aria-pressed={active}
                    onClick={() => setI(idx)}
                    className="rounded-full px-5 py-2.5 text-[0.62rem] tracking-[0.14em] uppercase transition"
                    style={
                      active
                        ? {
                            color: ink,
                            background: "#efefef",
                            boxShadow:
                              "0 6px 16px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.9)",
                          }
                        : {
                            color: "#666",
                            background: "#ffffff",
                            boxShadow:
                              "0 4px 12px rgba(0,0,0,0.04), inset 0 0 0 1px rgba(0,0,0,0.08)",
                          }
                    }
                  >
                    {t.short}
                  </button>
                );
              })}
            </div>

            <p className="mt-8 max-w-[52ch] text-[0.65rem] leading-relaxed text-black/35">
              {testimonialDisclaimer}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function CaduceusMark() {
  return (
    <svg width="28" height="28" viewBox="0 0 40 40" fill="none" aria-hidden>
      <circle cx="20" cy="20" r="17.5" stroke="#c8c8c8" strokeWidth="1" />
      <path
        d="M20 10v20M14 14c-3 2-4 6-2 9s6 4 8 4 6-1 8-4 1-7-2-9M14 26c-2-1-3-4-1-6M26 26c2-1 3-4 1-6"
        stroke={teal}
        strokeWidth="1.35"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17 11.5l3-2.5 3 2.5M17 28.5l3 2.5 3-2.5"
        stroke={teal}
        strokeWidth="1.1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
