"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useId } from "react";
import { whyIaa } from "@/data/site";

const highlightCards = [
  { label: "Experienced Faculty", icon: "faculty" as const },
  { label: "Practical Training", icon: "training" as const },
  { label: "Placement Assistance", icon: "placement" as const },
];

type WhyIAAProps = {
  mode?: "preview" | "full";
};

export function WhyIAA({ mode = "preview" }: WhyIAAProps) {
  const items = mode === "full" ? whyIaa : whyIaa.slice(0, 4);

  return (
    <section
      id="why-iaa"
      className={`relative overflow-hidden bg-[var(--iaa-ivory)] text-[var(--iaa-black)] ${
        mode === "full" ? "pt-32 pb-[var(--space-open)] md:pt-36" : "py-[var(--space-open)]"
      }`}
    >
      {/* Premium makeup face — right atmosphere */}
      <div className="pointer-events-none absolute inset-y-0 right-0 w-[78%] sm:w-[68%] md:w-[58%] lg:w-[52%]" aria-hidden>
        <Image
          src="/images/makeup-face.jpg"
          alt=""
          fill
          sizes="(max-width: 768px) 80vw, 55vw"
          className="object-cover object-[68%_16%] opacity-70 saturate-[1.08] contrast-[1.08] md:opacity-90"
          priority={mode === "full"}
        />
        {/* Soft blend into ivory — keep face visible */}
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--iaa-ivory)] via-[var(--iaa-ivory)]/45 to-transparent md:via-[var(--iaa-ivory)]/20" />
        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[var(--iaa-ivory)] to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[var(--iaa-ivory)] to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_75%_30%,rgba(55,215,171,0.1),transparent_50%)]" />
      </div>

      {/* Soft light atmosphere */}
      <div
        className="pointer-events-none absolute -top-24 left-0 h-[26rem] w-[26rem] rounded-full bg-[var(--iaa-turquoise)]/12 blur-[120px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute right-[18%] bottom-10 h-72 w-72 rounded-full bg-rose-200/20 blur-[100px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(#05050506_1px,transparent_1px)] [background-size:22px_22px]"
        aria-hidden
      />

      <Molecules className="pointer-events-none absolute top-16 right-[6%] hidden h-44 w-44 opacity-50 lg:block" />
      <SoftTrail className="pointer-events-none absolute top-[40%] left-0 h-24 w-full max-w-4xl opacity-75" />

      <div className="frame relative z-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <div className="flex items-center gap-3 text-[0.68rem] tracking-[0.2em] uppercase">
              <span className="text-[var(--iaa-turquoise)]">03</span>
              <span className="text-[var(--iaa-muted)]">Why IAA</span>
            </div>
            <h2 className="editorial-h mt-4 max-w-[14ch] text-[clamp(2.6rem,5.5vw,4.8rem)]">
              Why professionals choose IAA
            </h2>
          </div>
          {mode === "preview" ? (
            <Link
              href="/why-iaa"
              className="shrink-0 rounded-full border border-[var(--iaa-border)] bg-white/90 px-6 py-2.5 text-[0.68rem] font-semibold tracking-[0.16em] uppercase shadow-sm backdrop-blur-sm transition hover:border-[var(--iaa-turquoise)]"
            >
              Full reasons →
            </Link>
          ) : (
            <Link
              href="/contact"
              className="shrink-0 rounded-full bg-[var(--iaa-turquoise)] px-6 py-2.5 text-[0.68rem] font-semibold tracking-[0.16em] text-[var(--iaa-black)] uppercase shadow-[0_10px_30px_rgba(55,215,171,0.28)] transition hover:bg-[#4de0b8]"
            >
              Enquire now →
            </Link>
          )}
        </div>

        {/* Highlight cards */}
        <div className="mt-12 grid gap-3 sm:grid-cols-3">
          {highlightCards.map((card, i) => (
            <motion.div
              key={card.label}
              className="group flex items-center justify-between gap-4 rounded-2xl border border-white/80 bg-white/75 px-5 py-4 shadow-[0_12px_40px_rgba(5,5,5,0.06)] backdrop-blur-md transition hover:border-[var(--iaa-turquoise)]/45 hover:shadow-[0_16px_48px_rgba(55,215,171,0.12)]"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="text-[0.92rem] font-medium tracking-wide text-[var(--iaa-black)]">
                {card.label}
              </p>
              <HighlightIcon type={card.icon} />
            </motion.div>
          ))}
        </div>

        {/* Numbered reasons */}
        <ol className="mt-16 md:mt-20">
          {items.map((item, i) => {
            const featured = i === 0;
            return (
              <motion.li
                key={item.title}
                className="relative grid gap-4 border-t border-[var(--iaa-border)]/80 py-10 md:grid-cols-[5.5rem_minmax(0,1fr)_minmax(0,1.15fr)] md:items-start md:gap-8 md:py-12"
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              >
                {featured && (
                  <SoftTrail className="pointer-events-none absolute top-1/2 left-0 h-20 w-[65%] -translate-y-1/2 opacity-80" />
                )}
                <span
                  className={`relative font-serif text-[1.15rem] tracking-wide ${
                    featured ? "text-[#b8923a]" : "text-[var(--iaa-turquoise)]"
                  }`}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3
                  className={`relative font-serif text-[clamp(1.55rem,2.6vw,2.35rem)] leading-tight tracking-tight ${
                    featured ? "text-[#9a7a2f]" : "text-[var(--iaa-black)]"
                  }`}
                >
                  {item.title}
                </h3>
                <p className="relative max-w-[46ch] text-[0.98rem] leading-relaxed text-[var(--iaa-muted)]">
                  {item.copy}
                </p>
              </motion.li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

function HighlightIcon({ type }: { type: "faculty" | "training" | "placement" }) {
  const common =
    "relative shrink-0 text-[var(--iaa-turquoise)] drop-shadow-[0_0_8px_rgba(55,215,171,0.35)]";
  if (type === "faculty") {
    return (
      <svg className={common} width="34" height="34" viewBox="0 0 34 34" fill="none" aria-hidden>
        <path
          d="M17 7.5L29 13.2L17 18.9L5 13.2L17 7.5Z"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
        <path
          d="M9.5 15.2V22.4C12.2 24.6 14.6 25.5 17 25.5C19.4 25.5 21.8 24.6 24.5 22.4V15.2"
          stroke="currentColor"
          strokeWidth="1.4"
        />
        <path d="M29 13.2V20.8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    );
  }
  if (type === "training") {
    return (
      <svg className={common} width="34" height="34" viewBox="0 0 34 34" fill="none" aria-hidden>
        <path
          d="M10 24.5L14.2 11.5H19.8L24 24.5"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M12.2 19.2H21.8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        <circle cx="17" cy="8.5" r="1.6" fill="currentColor" />
        <path d="M8 26.5H26" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    );
  }
  return (
    <svg className={common} width="34" height="34" viewBox="0 0 34 34" fill="none" aria-hidden>
      <circle cx="17" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.4" />
      <path
        d="M9.5 26.2C10.4 21.8 13.2 19.5 17 19.5C20.8 19.5 23.6 21.8 24.5 26.2"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <path
        d="M22.5 9.5L26.5 8.2L25.2 12.2"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Molecules({ className = "" }: { className?: string }) {
  const uid = useId().replace(/:/g, "");
  const gradId = `molLight-${uid}`;
  return (
    <svg className={className} viewBox="0 0 200 200" fill="none" aria-hidden>
      <defs>
        <linearGradient id={gradId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#c9a24a" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#37d7ab" stopOpacity="0.55" />
        </linearGradient>
      </defs>
      <g stroke={`url(#${gradId})`} strokeWidth="1.2">
        <line x1="40" y1="60" x2="90" y2="40" />
        <line x1="90" y1="40" x2="140" y2="70" />
        <line x1="90" y1="40" x2="100" y2="100" />
        <line x1="100" y1="100" x2="55" y2="130" />
        <line x1="100" y1="100" x2="155" y2="125" />
        <line x1="140" y1="70" x2="170" y2="110" />
      </g>
      {[
        [40, 60, 6],
        [90, 40, 8],
        [140, 70, 5.5],
        [100, 100, 7],
        [55, 130, 5],
        [155, 125, 5.5],
        [170, 110, 4.5],
      ].map(([cx, cy, r], i) => (
        <circle
          key={i}
          cx={cx}
          cy={cy}
          r={r}
          fill={i % 2 === 0 ? "rgba(201,162,74,0.25)" : "rgba(55,215,171,0.2)"}
          stroke={i % 2 === 0 ? "#c9a24a" : "#37d7ab"}
          strokeWidth="1"
        />
      ))}
    </svg>
  );
}

function SoftTrail({ className = "" }: { className?: string }) {
  const uid = useId().replace(/:/g, "");
  const trailId = `softTrail-${uid}`;
  return (
    <svg className={className} viewBox="0 0 600 100" fill="none" aria-hidden preserveAspectRatio="none">
      <defs>
        <linearGradient id={trailId} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#c9a24a" stopOpacity="0" />
          <stop offset="40%" stopColor="#c9a24a" stopOpacity="0.55" />
          <stop offset="75%" stopColor="#37d7ab" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#37d7ab" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path
        d="M0 55C90 30 150 75 230 42C310 10 370 78 450 40C510 18 560 35 600 28"
        stroke={`url(#${trailId})`}
        strokeWidth="1.6"
      />
      {[60, 140, 220, 300, 380, 460, 540].map((x, i) => (
        <circle
          key={i}
          cx={x}
          cy={[42, 22, 48, 30, 18, 44, 26][i]}
          r={i % 2 === 0 ? 2 : 1.2}
          fill={i % 2 === 0 ? "#c9a24a" : "#37d7ab"}
          opacity={0.45}
        />
      ))}
    </svg>
  );
}
