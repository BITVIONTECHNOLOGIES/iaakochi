"use client";

import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { useState } from "react";
import { faqs } from "@/data/faq";

export function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section className="relative overflow-hidden bg-[#f3eee8] py-[var(--space-open)]">
      {/* Cream silk / beauty atmosphere */}
      <div className="absolute inset-0" aria-hidden>
        <Image
          src="/images/mc-aesthetics-7.jpg"
          alt=""
          fill
          sizes="100vw"
          className="scale-105 object-cover object-[50%_40%] opacity-50 blur-[2px] saturate-[0.9]"
        />
        <div className="absolute inset-0 bg-[#f7f1ea]/78" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#fffaf4]/70 via-transparent to-[#ebe3d8]/50" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_15%_20%,rgba(55,215,171,0.08),transparent_45%)]" />
      </div>

      <div className="frame relative z-10">
        <div className="grid gap-5 lg:grid-cols-[0.92fr_1.18fr] lg:items-stretch lg:gap-6">
          {/* Left — marble title + tools */}
          <div className="flex flex-col gap-5">
            <div className="relative overflow-hidden rounded-[1.35rem] border border-black/[0.06] shadow-[0_18px_50px_rgba(40,30,10,0.08)]">
              <div className="absolute inset-0" aria-hidden>
                <Image
                  src="/images/marble-white.jpg"
                  alt=""
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover brightness-[1.08] contrast-[0.95] saturate-[0.3]"
                />
                <div className="absolute inset-0 bg-white/55" />
              </div>

              <div className="relative z-10 p-7 sm:p-8 lg:p-9">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[0.65rem] tracking-[0.2em] text-[var(--iaa-turquoise)] uppercase">
                      Guidance
                    </p>
                    <h2 className="editorial-h mt-4 max-w-[11ch] text-[clamp(2.2rem,4.2vw,3.6rem)] text-[#1a1a1a]">
                      Frequently asked questions
                    </h2>
                    <p className="mt-5 max-w-[34ch] text-[0.92rem] leading-relaxed text-[#6a6a6a]">
                      Clear answers on eligibility, structure, certification and how to
                      start a conversation with IAA.
                    </p>
                  </div>
                  <span
                    className="mt-1 shrink-0 font-serif text-lg tracking-tight text-[var(--iaa-turquoise)]/80"
                    aria-hidden
                  >
                    db
                  </span>
                </div>
                <span
                  className="pointer-events-none absolute top-1/2 right-5 h-2 w-2 -translate-y-1/2 rounded-full bg-[var(--iaa-turquoise)] shadow-[0_0_12px_rgba(55,215,171,0.55)]"
                  aria-hidden
                />
              </div>
            </div>

            <div className="relative min-h-[200px] flex-1 overflow-hidden rounded-[1.35rem] border border-black/[0.06] shadow-[0_18px_50px_rgba(40,30,10,0.1)] sm:min-h-[240px]">
              <Image
                src="/images/faq-tools-final.jpg"
                alt="Professional aesthetic tools arranged for clinical training"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-[50%_40%]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a1410]/35 via-transparent to-transparent" />
              <p className="absolute bottom-4 left-5 text-[0.62rem] tracking-[0.18em] text-white/90 uppercase">
                Clinic-ready clarity
              </p>
            </div>
          </div>

          {/* Right — accordion */}
          <div className="flex flex-col gap-3">
            {faqs.map((item, i) => {
              const isOpen = open === i;
              return (
                <div
                  key={item.q}
                  className="overflow-hidden rounded-[1.1rem] border transition"
                  style={
                    isOpen
                      ? {
                          background: "rgba(55,215,171,0.1)",
                          borderColor: "rgba(55,215,171,0.45)",
                          boxShadow: "0 10px 28px rgba(55,215,171,0.1)",
                        }
                      : {
                          background: "rgba(255,255,255,0.92)",
                          borderColor: "rgba(0,0,0,0.07)",
                          boxShadow: "0 8px 24px rgba(40,30,10,0.04)",
                        }
                  }
                >
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6 sm:py-5"
                    aria-expanded={isOpen}
                    onClick={() => setOpen(isOpen ? -1 : i)}
                  >
                    <span className="font-serif text-[1.15rem] text-[#1a1a1a] sm:text-[1.35rem]">
                      {item.q}
                    </span>
                    <span
                      className="grid h-8 w-8 shrink-0 place-items-center rounded-full text-sm transition"
                      style={{
                        color: isOpen ? "#0d7a5f" : "#888",
                        background: isOpen
                          ? "rgba(55,215,171,0.18)"
                          : "rgba(0,0,0,0.04)",
                      }}
                      aria-hidden
                    >
                      {isOpen ? "⌃" : "⌄"}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen ? (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="px-5 pb-5 text-[0.95rem] leading-relaxed text-[#5a5a5a] sm:px-6 sm:pb-6">
                          {item.a}
                        </p>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
