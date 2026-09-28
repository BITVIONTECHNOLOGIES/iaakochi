"use client";

import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import Image from "next/image";
import { useId, useRef, useState } from "react";
import { learningStages } from "@/data/site";

const stageVisuals = [
  {
    // Learn — structured online theory
    tone: "light" as const,
    image: "/images/stage-learn-final.jpg",
    objectPos: "object-[68%_30%]",
    imageOpacity: "opacity-95",
    // Light wash only on text side; photo stays vivid on the right
    overlay:
      "bg-gradient-to-r from-[#eef6f3]/92 via-[#eef6f3]/55 to-transparent md:from-[#eef6f3]/88 md:via-[#eef6f3]/35 md:to-transparent",
    overlayY: "bg-gradient-to-b from-[#eef6f3]/40 via-transparent to-[#eef6f3]/55",
    glow: "bg-[radial-gradient(ellipse_at_78%_35%,rgba(55,215,171,0.18),transparent_48%)]",
    accent: "#159c7b",
    numberGlow: "0 0 42px rgba(55,215,171,0.45)",
    decor: "learn" as const,
  },
  {
    // Practice — hands-on clinical training
    tone: "dark" as const,
    image: "/images/campus-clinical-environment.jpg",
    objectPos: "object-[50%_42%]",
    imageOpacity: "opacity-90",
    overlay:
      "bg-gradient-to-r from-[#06161a]/88 via-[#0c2830]/45 to-transparent md:from-[#06161a]/82 md:via-[#0c2830]/28 md:to-transparent",
    overlayY: "bg-gradient-to-b from-[#06161a]/35 via-transparent to-[#041116]/70",
    glow: "bg-[radial-gradient(ellipse_at_72%_40%,rgba(55,215,171,0.22),transparent_48%)]",
    accent: "#5eead4",
    numberGlow: "0 0 50px rgba(94,234,212,0.55)",
    decor: "practice" as const,
  },
  {
    // Master — professional confidence / glam face
    tone: "dark" as const,
    image: "/images/career-face.jpg",
    objectPos: "object-[55%_15%]",
    imageOpacity: "opacity-95",
    overlay:
      "bg-gradient-to-r from-[#1a120c]/85 via-[#1a120c]/40 to-transparent md:from-[#1a120c]/78 md:via-[#1a120c]/22 md:to-transparent",
    overlayY: "bg-gradient-to-b from-[#1a120c]/30 via-transparent to-[#120c08]/65",
    glow: "bg-[radial-gradient(ellipse_at_70%_28%,rgba(201,162,74,0.28),transparent_48%)]",
    accent: "#e8c36a",
    numberGlow: "0 0 46px rgba(232,195,106,0.5)",
    decor: "master" as const,
  },
  {
    // Launch — career guidance
    tone: "light" as const,
    image: "/images/makeup-face.jpg",
    objectPos: "object-[72%_18%]",
    imageOpacity: "opacity-92",
    overlay:
      "bg-gradient-to-r from-[#f7f6f1]/90 via-[#f7f6f1]/50 to-transparent md:from-[#f7f6f1]/85 md:via-[#f7f6f1]/30 md:to-transparent",
    overlayY: "bg-gradient-to-b from-[#f7f6f1]/35 via-transparent to-[#f7f6f1]/60",
    glow: "bg-[radial-gradient(ellipse_at_75%_35%,rgba(55,215,171,0.16),transparent_50%)]",
    accent: "#159c7b",
    numberGlow: "0 0 36px rgba(55,215,171,0.4)",
    decor: "launch" as const,
  },
];

export function LearningStory() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const [index, setIndex] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const next = Math.min(3, Math.max(0, Math.floor(v * 4)));
    setIndex(next);
  });

  const stage = learningStages[index];
  const visual = stageVisuals[index];
  const isDark = visual.tone === "dark";

  return (
    <section ref={ref} className="relative h-[320vh]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <AnimatePresence mode="sync">
          {stageVisuals.map((v, i) =>
            i === index ? (
              <motion.div
                key={`${v.image}-${i}`}
                className="absolute inset-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              >
                <Image
                  src={v.image}
                  alt=""
                  fill
                  sizes="100vw"
                  className={`scale-[1.03] object-cover ${v.objectPos} ${v.imageOpacity} contrast-[1.08] saturate-[1.08]`}
                  priority={i === 0}
                />
                <div className={`absolute inset-0 ${v.overlay}`} />
                <div className={`absolute inset-0 ${v.overlayY}`} />
                <div className={`absolute inset-0 ${v.glow}`} />

                {v.decor === "learn" && <LearnDecor />}
                {v.decor === "practice" && <PracticeDecor />}
                {v.decor === "master" && <MasterDecor />}
                {v.decor === "launch" && <LaunchDecor />}
              </motion.div>
            ) : null,
          )}
        </AnimatePresence>

        <div className="frame relative z-10 grid w-full gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-end lg:gap-16">
          <div>
            <p className="text-[0.68rem] tracking-[0.24em] text-[var(--iaa-turquoise)] uppercase">
              Learning experience
            </p>
            <AnimatePresence mode="wait">
              <motion.p
                key={stage.num}
                className="mt-6 font-serif text-[clamp(5rem,14vw,10.5rem)] leading-none"
                style={{ color: visual.accent, textShadow: visual.numberGlow }}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              >
                {stage.num}
              </motion.p>
            </AnimatePresence>
          </div>

          <div className="relative pb-4">
            {/* Soft glass plate so copy stays readable over vivid photo */}
            <div
              className={`pointer-events-none absolute -inset-x-4 -inset-y-6 rounded-[1.5rem] md:-inset-x-6 md:-inset-y-8 ${
                isDark
                  ? "bg-zinc-950/35 shadow-[0_20px_60px_rgba(0,0,0,0.25)] backdrop-blur-[2px]"
                  : "bg-white/45 shadow-[0_20px_60px_rgba(5,5,5,0.06)] backdrop-blur-[2px]"
              }`}
              aria-hidden
            />
            <AnimatePresence mode="wait">
              <motion.div
                key={stage.title}
                className="relative"
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              >
                <p
                  className={`text-[0.68rem] tracking-[0.22em] uppercase ${
                    isDark ? "text-white/55" : "text-[var(--iaa-muted)]"
                  }`}
                >
                  {stage.kicker}
                </p>
                <h2
                  className={`editorial-h mt-4 max-w-[14ch] text-[clamp(2.4rem,5.5vw,4.8rem)] ${
                    isDark ? "text-white" : "text-[var(--iaa-black)]"
                  }`}
                >
                  {stage.title}
                </h2>
                <p
                  className={`mt-7 max-w-[46ch] text-[1.02rem] leading-relaxed ${
                    isDark ? "text-white/72" : "text-[var(--iaa-muted)]"
                  }`}
                >
                  {stage.copy}
                </p>
              </motion.div>
            </AnimatePresence>

            <ol className="mt-14 flex flex-wrap gap-x-7 gap-y-3">
              {learningStages.map((item, i) => {
                const active = i === index;
                return (
                  <li key={item.num} className="relative">
                    <span
                      className={`text-[0.68rem] tracking-[0.2em] uppercase transition ${
                        active
                          ? "text-[var(--iaa-turquoise)]"
                          : isDark
                            ? "text-white/35"
                            : "text-[var(--iaa-muted)]/55"
                      }`}
                    >
                      {item.kicker}
                    </span>
                    {active && (
                      <motion.span
                        layoutId="learn-dot"
                        className="absolute -bottom-2 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-[var(--iaa-turquoise)] shadow-[0_0_10px_rgba(55,215,171,0.8)]"
                      />
                    )}
                  </li>
                );
              })}
            </ol>
          </div>
        </div>

        <motion.div
          className="pointer-events-none absolute bottom-0 left-0 h-[2px] origin-left bg-[var(--iaa-turquoise)] shadow-[0_0_12px_rgba(55,215,171,0.55)]"
          style={{ scaleX: scrollYProgress, width: "100%" }}
        />
      </div>
    </section>
  );
}

/** Learn — knowledge / theory: soft grid + signal nodes */
function LearnDecor() {
  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(21,156,123,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(21,156,123,0.035)_1px,transparent_1px)] bg-size-[56px_56px]" />
      <svg className="absolute top-[18%] right-[10%] h-48 w-64 opacity-50" viewBox="0 0 260 180" fill="none">
        <path
          d="M20 140C50 90 80 150 120 80C155 25 190 100 240 55"
          stroke="#159c7b"
          strokeWidth="1.3"
          strokeOpacity="0.55"
        />
        {[
          [20, 140],
          [70, 110],
          [120, 80],
          [180, 70],
          [240, 55],
        ].map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r={4 + (i % 2)} fill="#37d7ab" fillOpacity="0.45" />
        ))}
      </svg>
      <div className="absolute right-[12%] bottom-[22%] rounded-xl border border-[#159c7b]/25 bg-white/35 px-4 py-3 backdrop-blur-md">
        <p className="text-[0.58rem] tracking-[0.2em] text-[#159c7b] uppercase">Online theory</p>
        <p className="mt-1 font-serif text-sm text-[#1a2e28]">7 weeks structured</p>
      </div>
    </div>
  );
}

/** Practice — clinical hands-on */
function PracticeDecor() {
  const uid = useId().replace(/:/g, "");
  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden>
      <svg
        className="absolute right-[6%] bottom-[14%] h-64 w-80 opacity-55"
        viewBox="0 0 300 220"
        fill="none"
      >
        <defs>
          <linearGradient id={`prac-${uid}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#5eead4" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#37d7ab" stopOpacity="0.3" />
          </linearGradient>
        </defs>
        <path
          d="M30 160C70 100 110 180 160 90C200 30 240 110 280 70"
          stroke={`url(#prac-${uid})`}
          strokeWidth="1.5"
        />
        {[
          [30, 160, 6],
          [90, 130, 8],
          [160, 90, 7],
          [220, 95, 5],
          [280, 70, 6],
        ].map(([cx, cy, r], i) => (
          <circle
            key={i}
            cx={cx}
            cy={cy}
            r={r}
            fill="#5eead4"
            fillOpacity="0.35"
            stroke="#99f6e4"
            strokeWidth="1"
          />
        ))}
      </svg>
      <div className="absolute top-[22%] right-[14%] rounded-xl border border-teal-300/30 bg-zinc-950/45 px-4 py-3 backdrop-blur-md">
        <p className="text-[0.58rem] tracking-[0.2em] text-teal-300 uppercase">Clinical practice</p>
        <p className="mt-1 font-serif text-sm text-white/90">1 week supervised</p>
      </div>
    </div>
  );
}

/** Master — polished confidence / premium craft */
function MasterDecor() {
  const uid = useId().replace(/:/g, "");
  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden>
      <svg
        className="absolute top-[28%] right-0 h-44 w-[58%] opacity-80"
        viewBox="0 0 600 120"
        fill="none"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id={`mast-${uid}`} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#c9a24a" stopOpacity="0" />
            <stop offset="40%" stopColor="#e8c36a" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#37d7ab" stopOpacity="0.25" />
          </linearGradient>
        </defs>
        <path
          d="M0 70C110 25 190 95 300 40C400 0 500 75 600 35"
          stroke={`url(#mast-${uid})`}
          strokeWidth="2"
        />
        {[80, 180, 280, 380, 480, 560].map((x, i) => (
          <circle
            key={i}
            cx={x}
            cy={[55, 35, 60, 28, 50, 32][i]}
            r={i % 2 ? 1.6 : 2.4}
            fill={i % 2 ? "#37d7ab" : "#e8c36a"}
            opacity="0.7"
          />
        ))}
      </svg>
      <div className="absolute right-[10%] bottom-[20%] rounded-xl border border-amber-200/25 bg-zinc-950/50 px-4 py-3 backdrop-blur-md">
        <p className="text-[0.58rem] tracking-[0.2em] text-amber-200/80 uppercase">Mentorship</p>
        <p className="mt-1 font-serif text-sm text-white/90">Refine with faculty</p>
      </div>
    </div>
  );
}

/** Launch — career / premium beauty clarity */
function LaunchDecor() {
  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden>
      <div className="absolute top-[18%] right-[12%] h-44 w-44 rounded-full bg-[var(--iaa-turquoise)]/18 blur-[70px]" />
      <div className="absolute right-[10%] bottom-[18%] rounded-xl border border-white/55 bg-white/60 px-4 py-3 shadow-[0_12px_40px_rgba(5,5,5,0.08)] backdrop-blur-md">
        <p className="text-[0.58rem] tracking-[0.2em] text-[#159c7b] uppercase">Career path</p>
        <p className="mt-1 font-serif text-sm text-[#1a2e28]">Guidance & placement</p>
      </div>
    </div>
  );
}
