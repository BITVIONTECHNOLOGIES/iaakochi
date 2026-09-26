"use client";

import { motion, useScroll, useSpring } from "motion/react";
import Image from "next/image";
import { useRef } from "react";
import { pathway } from "@/data/site";

const rose = "#b8956c";
const roseSoft = "#d4b896";

export function CareerPathway() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.75", "end 0.35"],
  });
  const scaleY = useSpring(scrollYProgress, { stiffness: 80, damping: 22 });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-[#f6f3ee] py-[var(--space-open)] text-[var(--iaa-black)]"
    >
      {/* Soft paper texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.28]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(184,149,108,0.08),transparent_55%)]"
        aria-hidden
      />

      {/* Premium makeup face — left */}
      <div
        className="pointer-events-none absolute top-0 left-0 h-[22rem] w-[18rem] overflow-hidden sm:h-[26rem] sm:w-[22rem] md:h-[32rem] md:w-[26rem] lg:h-[36rem] lg:w-[30rem]"
        aria-hidden
      >
        <Image
          src="/images/career-face.jpg"
          alt=""
          fill
          sizes="(max-width: 768px) 60vw, 30vw"
          className="object-cover object-[45%_18%] opacity-90 saturate-[1.05] contrast-[1.04]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#f6f3ee]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#f6f3ee]/35 via-transparent to-[#f6f3ee]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#f6f3ee]/50 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_40%_35%,rgba(184,149,108,0.12),transparent_55%)]" />
      </div>

      {/* Soft secondary face accent — right */}
      <div
        className="pointer-events-none absolute right-0 bottom-0 hidden h-72 w-64 overflow-hidden opacity-55 lg:block xl:h-80 xl:w-72"
        aria-hidden
      >
        <Image
          src="/images/makeup-face.jpg"
          alt=""
          fill
          sizes="280px"
          className="object-cover object-[70%_20%] saturate-[1.02]"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#f6f3ee]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#f6f3ee] via-[#f6f3ee]/40 to-transparent" />
      </div>

      <MedicalSeal className="pointer-events-none absolute top-[32%] -left-6 hidden h-48 w-48 opacity-[0.08] md:block" />
      <MedicalSeal className="pointer-events-none absolute right-6 bottom-[22%] hidden h-40 w-40 opacity-[0.07] lg:block" />

      <div className="frame relative z-10 max-w-[1100px]">
        <p
          className="text-center text-[0.68rem] tracking-[0.28em] uppercase"
          style={{ color: rose }}
        >
          Career pathways
        </p>
        <h2 className="editorial-h mt-5 text-center text-[clamp(2.4rem,5.5vw,4.6rem)] leading-[1.08]">
          From clinical knowledge
          <br />
          <span className="font-sans text-[0.72em] font-normal tracking-normal italic text-[#8a7a68]">
            to aesthetics career
          </span>
        </h2>

        <div className="relative mt-16 md:mt-20">
          <div
            className="absolute top-4 bottom-4 left-1/2 hidden w-px -translate-x-1/2 md:block"
            style={{
              background: `linear-gradient(180deg, transparent, ${roseSoft}, ${rose}, ${roseSoft}, transparent)`,
            }}
            aria-hidden
          />
          <motion.div
            className="absolute top-4 bottom-4 left-1/2 hidden w-[2px] origin-top -translate-x-1/2 md:block"
            style={{
              scaleY,
              background: `linear-gradient(180deg, ${roseSoft}, ${rose})`,
              boxShadow: `0 0 12px ${rose}55`,
            }}
            aria-hidden
          />

          <ul className="grid gap-10 md:gap-12">
            {pathway.map((item, i) => (
              <motion.li
                key={item.from}
                className="grid items-center gap-5 md:grid-cols-[1fr_3.5rem_1fr] md:gap-6"
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.7, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="rounded-[1.35rem] border border-[#ebe6df] bg-white/92 p-6 shadow-[0_18px_50px_rgba(60,45,30,0.06)] backdrop-blur-sm md:text-right">
                  <p
                    className="text-[0.62rem] tracking-[0.24em] uppercase"
                    style={{ color: rose }}
                  >
                    Background
                  </p>
                  <p className="mt-2.5 font-serif text-[clamp(1.55rem,2.4vw,2.15rem)] leading-tight text-[#2c2620]">
                    {item.from}
                  </p>
                </div>

                <div className="relative mx-auto grid h-10 w-10 place-items-center">
                  <span
                    className="absolute h-7 w-7 rounded-full opacity-30 blur-[6px]"
                    style={{ background: rose }}
                    aria-hidden
                  />
                  <span
                    className="relative h-3.5 w-3.5 rounded-full shadow-[inset_0_1px_2px_rgba(255,255,255,0.65),0_2px_8px_rgba(184,149,108,0.45)]"
                    style={{
                      background: `radial-gradient(circle at 30% 28%, #f3e6d4, ${roseSoft} 45%, ${rose})`,
                    }}
                    aria-hidden
                  />
                  <span
                    className="absolute top-1/2 right-full hidden h-px w-5 -translate-y-1/2 md:block"
                    style={{ background: roseSoft }}
                    aria-hidden
                  />
                  <span
                    className="absolute top-1/2 left-full hidden h-px w-5 -translate-y-1/2 md:block"
                    style={{ background: roseSoft }}
                    aria-hidden
                  />
                </div>

                <div className="rounded-[1.35rem] border border-[#ebe6df] bg-white/92 p-6 shadow-[0_18px_50px_rgba(60,45,30,0.06)] backdrop-blur-sm">
                  <p
                    className="text-[0.62rem] tracking-[0.24em] uppercase"
                    style={{ color: rose }}
                  >
                    Direction
                  </p>
                  <p className="mt-2.5 font-serif text-[clamp(1.55rem,2.4vw,2.15rem)] leading-tight text-[#2c2620]">
                    {item.to}
                  </p>
                  <p className="mt-3 max-w-[42ch] text-[0.92rem] leading-relaxed text-[#7a7168]">
                    {item.copy}
                  </p>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function MedicalSeal({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 200 200" fill="none" aria-hidden>
      <circle cx="100" cy="100" r="88" stroke="#8a7a68" strokeWidth="1.1" strokeDasharray="3 4" />
      <circle cx="100" cy="100" r="72" stroke="#8a7a68" strokeWidth="0.9" />
      <path
        d="M100 55V145M92 68C78 72 72 86 78 98C84 110 98 112 100 112C102 112 116 110 122 98C128 86 122 72 108 68"
        stroke="#8a7a68"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
      <text
        x="100"
        y="170"
        textAnchor="middle"
        fill="#8a7a68"
        fontSize="7.5"
        letterSpacing="2.2"
        fontFamily="sans-serif"
      >
        MEDICAL CERTIFICATION
      </text>
    </svg>
  );
}
