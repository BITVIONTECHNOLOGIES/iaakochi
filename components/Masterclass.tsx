"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { masterclass } from "@/data/site";
import { whatsappUrl } from "@/lib/whatsapp";

const details = [
  ["Format", "Live Online · Zoom"],
  ["Duration", "3 Hours"],
  ["Cost", "100% Free"],
  ["Status", "Event Concluded"],
] as const;

export function Masterclass() {
  return (
    <section
      id="masterclass"
      className="relative overflow-hidden bg-[#14110e] py-[var(--space-open)] text-white"
    >
      {/* Attractive clinic atmosphere — kept readable */}
      <div className="absolute inset-0" aria-hidden>
        <Image
          src="/images/mc-aesthetics-7.jpg"
          alt=""
          fill
          sizes="100vw"
          className="scale-[1.04] object-cover object-[48%_28%] brightness-[0.95] contrast-[1.05] saturate-[1.08]"
        />
        <div className="absolute inset-0 bg-[#1a1410]/28" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a1410]/62 via-[#1a1410]/18 to-[#1a1410]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#120e0b]/82 via-transparent to-[#1a1410]/28" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_55%,rgba(251,191,36,0.2),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_85%_40%,rgba(55,215,171,0.14),transparent_48%)]" />
      </div>

      <div
        className="pointer-events-none absolute top-[18%] left-[8%] h-72 w-72 rounded-full bg-amber-300/20 blur-[110px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute right-[6%] bottom-[10%] h-80 w-80 rounded-full bg-teal-300/18 blur-[120px]"
        aria-hidden
      />

      <div className="frame relative z-10 grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
        {/* Copy plate */}
        <motion.div
          className="relative overflow-hidden rounded-[1.75rem] border border-white/25 bg-white/[0.1] p-7 shadow-[0_28px_70px_rgba(0,0,0,0.35),inset_0_1px_0_rgba(255,255,255,0.28)] backdrop-blur-xl sm:p-9"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="pointer-events-none absolute inset-0 rounded-[1.75rem] ring-1 ring-inset ring-amber-100/20" />
          <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-amber-200/55 to-transparent" />

          <div className="flex items-center gap-3 text-[0.68rem] tracking-[0.22em] uppercase">
            <span className="text-[var(--iaa-turquoise)]">04</span>
            <span className="text-white/55">Past event</span>
          </div>

          <h2 className="editorial-h mt-5 text-[clamp(2.6rem,5.2vw,4.6rem)] text-white">
            Free masterclass
          </h2>
          <p className="mt-3 font-serif text-[clamp(1.25rem,2.2vw,1.75rem)] italic text-amber-100/90">
            Discover your future in aesthetics
          </p>

          <p className="mt-7 max-w-[48ch] text-[0.98rem] leading-relaxed text-white/72">
            {masterclass.dateNote}
          </p>
          <p className="mt-4 max-w-[48ch] text-[0.98rem] leading-relaxed text-white/65">
            {masterclass.followUp}
          </p>

          <div className="mt-9 flex flex-wrap gap-3.5">
            <a
              href={whatsappUrl("masterclass")}
              className="rounded-full bg-gradient-to-r from-[var(--iaa-turquoise)] to-[#4de0b8] px-6 py-3 text-[0.68rem] font-semibold tracking-[0.16em] text-[var(--iaa-black)] uppercase shadow-[0_0_28px_rgba(55,215,171,0.35)] transition hover:shadow-[0_0_40px_rgba(55,215,171,0.5)]"
              target="_blank"
              rel="noreferrer"
            >
              Notify me on WhatsApp
            </a>
            <Link
              href="/masterclass"
              className="rounded-full border border-amber-200/45 bg-white/[0.06] px-6 py-3 text-[0.68rem] font-semibold tracking-[0.16em] text-amber-50 uppercase transition hover:border-amber-200/70 hover:bg-white/[0.1]"
            >
              Masterclass details →
            </Link>
          </div>
        </motion.div>

        {/* Premium clinic visual + details */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.85, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="relative overflow-hidden rounded-[1.75rem] border border-white/30 shadow-[0_32px_80px_rgba(0,0,0,0.45)]">
            <div className="relative aspect-[4/5] min-h-[420px] sm:aspect-[5/6] lg:min-h-[520px]">
              <Image
                src="/images/mc-clinic-3.jpg"
                alt="Premium aesthetic facial treatment in a professional clinic setting"
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover object-[50%_20%]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#120e0b]/92 via-[#120e0b]/25 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-br from-amber-200/10 via-transparent to-teal-300/10" />

              {/* Soft gold rim */}
              <div className="pointer-events-none absolute inset-0 rounded-[1.75rem] ring-1 ring-inset ring-amber-100/25" />

              <div className="absolute top-5 left-5 rounded-full border border-white/25 bg-black/25 px-3.5 py-1.5 text-[0.62rem] tracking-[0.18em] text-white/90 uppercase backdrop-blur-md">
                Clinical aesthetics
              </div>

              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                <dl className="grid grid-cols-2 gap-3">
                  {details.map(([k, v]) => (
                    <div
                      key={k}
                      className="rounded-2xl border border-white/20 bg-white/[0.12] px-3.5 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.2)] backdrop-blur-md"
                    >
                      <dt className="text-[0.58rem] tracking-[0.2em] text-amber-100/80 uppercase">
                        {k}
                      </dt>
                      <dd className="mt-1.5 font-serif text-[1.05rem] leading-tight text-white sm:text-[1.15rem]">
                        {v}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>

          {/* Soft accent glow behind card */}
          <div
            className="pointer-events-none absolute -inset-4 -z-10 rounded-[2.2rem] bg-gradient-to-br from-amber-300/15 via-transparent to-teal-300/15 blur-2xl"
            aria-hidden
          />
        </motion.div>
      </div>
    </section>
  );
}
