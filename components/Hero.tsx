"use client";

import { motion, useMotionValue, useSpring } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { images } from "@/data/site";
import { whatsappUrl } from "@/lib/whatsapp";

export function Hero() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const ix = useSpring(mx, { stiffness: 80, damping: 20 });
  const iy = useSpring(my, { stiffness: 80, damping: 20 });

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    if (!fine) return;
    const onMove = (e: PointerEvent) => {
      mx.set((e.clientX / window.innerWidth - 0.5) * 14);
      my.set((e.clientY / window.innerHeight - 0.5) * 10);
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, [mx, my]);

  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-zinc-950 text-[var(--iaa-ivory)]">
      <motion.div className="absolute inset-0 lg:left-[38%]" style={{ x: ix, y: iy }}>
        <div className="absolute inset-[-2%]">
          <Image
            src={images.hero}
            alt={images.heroAlt}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 65vw"
            className="object-cover object-[72%_center]"
          />
        </div>
      </motion.div>

      <div
        className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/85 to-zinc-950/25 max-lg:via-zinc-950/70 max-lg:to-zinc-950/45"
        aria-hidden
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/55" aria-hidden />
      <div
        className="pointer-events-none absolute -left-24 top-1/4 h-72 w-72 rounded-full bg-[var(--iaa-turquoise)]/15 blur-[100px]"
        aria-hidden
      />

      <div className="frame relative z-10 grid min-h-[100svh] items-center gap-12 pt-32 pb-16 md:pt-36 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:pb-20">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-[0.62rem] tracking-[0.2em] text-[var(--iaa-turquoise)] uppercase backdrop-blur-md">
            <span aria-hidden>✦</span>
            IAA Kochi · Professional Aesthetics Education
          </span>

          <h1 className="editorial-h mt-7 text-[clamp(2.9rem,6.6vw,6.4rem)] leading-[0.95] text-white">
            Turn your clinical background into an aesthetics career
          </h1>

          <p className="mt-7 max-w-[44ch] text-[0.98rem] leading-relaxed text-white/70 md:text-base">
            Professional aesthetics education for nursing and allied-health graduates who want to
            build modern, clinic-ready careers through structured theory, practical training and
            mentorship.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3 sm:gap-4">
            <Link href="/courses" className="hero-cta hero-cta-solid">
              Explore courses
            </Link>
            <a
              href={whatsappUrl("counselling")}
              className="hero-cta hero-cta-ghost"
              target="_blank"
              rel="noreferrer"
            >
              Free counselling
            </a>
          </div>

          <div className="mt-10 inline-flex max-w-full flex-wrap items-center gap-x-4 gap-y-2 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-[0.68rem] tracking-[0.12em] text-white/75 uppercase backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
            <span className="text-[var(--iaa-turquoise)]">Structured theory</span>
            <span className="hidden h-3 w-px bg-white/20 sm:block" aria-hidden />
            <span>Offline practical</span>
            <span className="hidden h-3 w-px bg-white/20 sm:block" aria-hidden />
            <span>COCTRASI affiliated</span>
          </div>
        </div>

        <div className="relative hidden min-h-[58vh] lg:block">
          <div className="absolute inset-y-[8%] right-0 left-[12%] overflow-hidden rounded-[1.5rem] border border-white/10 shadow-[0_40px_100px_rgba(0,0,0,0.45)]">
            <Image
              src={images.heroDetail}
              alt=""
              fill
              sizes="40vw"
              className="object-cover object-[70%_center] opacity-90"
              aria-hidden
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent" />
            <div className="absolute right-5 bottom-5 left-5 rounded-xl border border-white/10 bg-zinc-950/55 px-4 py-3 backdrop-blur-md">
              <p className="text-[0.62rem] tracking-[0.2em] text-[var(--iaa-turquoise)] uppercase">
                Bound to Educate
              </p>
              <p className="mt-1 text-sm text-white/80">Clinic-ready skills. Professional confidence.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 items-center gap-3 md:flex">
        <span className="text-[0.62rem] tracking-[0.22em] text-white/45 uppercase">Scroll</span>
        <span className="relative block h-10 w-px overflow-hidden bg-white/15">
          <span className="scroll-grow absolute inset-x-0 top-0 h-full origin-top bg-[var(--iaa-turquoise)]" />
        </span>
      </div>
    </section>
  );
}
