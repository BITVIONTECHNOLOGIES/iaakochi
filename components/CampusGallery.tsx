"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { campusGallery, campusWideShot, site } from "@/data/site";
import { MAPS_EMBED_URL, MAPS_URL } from "@/lib/whatsapp";

export function CampusGallery({ showIntro = true }: { showIntro?: boolean }) {
  return (
    <section
      id="campus"
      className="relative overflow-hidden bg-[var(--iaa-ivory)] py-[var(--space-open)]"
    >
      {/* Soft plaster texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.45]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(0,0,0,0.035) 0.6px, transparent 0.6px), radial-gradient(rgba(0,0,0,0.02) 0.8px, transparent 0.8px)",
          backgroundSize: "3px 3px, 7px 7px",
          backgroundPosition: "0 0, 1px 2px",
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_15%_0%,rgba(212,175,55,0.08),transparent_45%),radial-gradient(ellipse_at_90%_20%,rgba(55,215,171,0.07),transparent_40%)]"
        aria-hidden
      />

      <div className="frame relative z-10">
        {showIntro ? (
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="flex items-center gap-3 text-[0.68rem] tracking-[0.2em] uppercase">
                <span className="text-[var(--iaa-turquoise)]">05</span>
                <span className="text-[var(--iaa-muted)]">Campus</span>
              </div>
              <h2 className="editorial-h mt-4 max-w-[14ch] text-[clamp(2.6rem,5.5vw,4.8rem)] text-[var(--iaa-black)]">
                Learn. Practice. Build your future.
              </h2>
            </div>
            <Link
              href="/campus"
              className="shrink-0 rounded-full bg-[#1a1a1a] px-6 py-2.5 text-[0.68rem] font-semibold tracking-[0.16em] text-white/90 uppercase transition hover:bg-black"
            >
              Visit campus page →
            </Link>
          </div>
        ) : null}

        {/* Top row — 4 premium frames */}
        <div
          className={`grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5 ${showIntro ? "mt-14" : "mt-0"}`}
        >
          {campusGallery.map((item, i) => (
            <GoldFrame
              key={item.caption}
              src={item.src}
              alt={item.alt}
              caption={item.caption}
              index={i + 1}
              className="aspect-[4/5] min-h-[260px] sm:min-h-[280px]"
              objectPosition={
                "objectPosition" in item && item.objectPosition
                  ? item.objectPosition
                  : "object-cover object-center"
              }
              softOverlay={"softOverlay" in item ? Boolean(item.softOverlay) : false}
            />
          ))}
        </div>

        {/* Bottom row — wide clinic + location */}
        <div className="mt-4 grid grid-cols-1 gap-4 lg:mt-5 lg:grid-cols-[1.35fr_1fr] lg:gap-5">
          <GoldFrame
            src={campusWideShot.src}
            alt={campusWideShot.alt}
            caption={campusWideShot.caption}
            index={5}
            className="aspect-[16/9] min-h-[240px] lg:min-h-[300px]"
            objectPosition="object-cover object-[50%_35%]"
          />

          <LocationCard />
        </div>
      </div>
    </section>
  );
}

function GoldFrame({
  src,
  alt,
  caption,
  index,
  className = "",
  objectPosition = "object-cover object-center",
  softOverlay = false,
}: {
  src: string;
  alt: string;
  caption: string;
  index: number;
  className?: string;
  objectPosition?: string;
  softOverlay?: boolean;
}) {
  const n = String(index).padStart(2, "0");
  return (
    <motion.figure
      className={`group relative overflow-hidden rounded-[1.15rem] p-[3px] shadow-[0_18px_50px_rgba(40,30,10,0.12)] ${className}`}
      style={{
        background:
          "linear-gradient(145deg, #f3e2a8 0%, #d4af37 28%, #a67c1a 55%, #e8c878 78%, #c9a227 100%)",
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.7, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Cyan corner markers */}
      <span className="pointer-events-none absolute top-2.5 left-2.5 z-20 h-2 w-2 rounded-full bg-[var(--iaa-turquoise)] shadow-[0_0_10px_rgba(55,215,171,0.95),0_0_18px_rgba(55,215,171,0.55)]" />
      <span className="pointer-events-none absolute right-2.5 bottom-2.5 z-20 h-2 w-2 rounded-full bg-[var(--iaa-turquoise)] shadow-[0_0_10px_rgba(55,215,171,0.95),0_0_18px_rgba(55,215,171,0.55)]" />

      <div className="relative h-full w-full overflow-hidden rounded-[1rem] bg-[#1a1520]">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 1024px) 50vw, 25vw"
          className={`${objectPosition} transition-transform duration-700 group-hover:scale-[1.03] ${
            softOverlay ? "brightness-[1.03] contrast-[1.05] saturate-[1.04]" : ""
          }`}
          priority={index === 2}
          quality={92}
        />
        <div
          className={
            softOverlay
              ? "absolute inset-0 bg-gradient-to-t from-[#1a1410]/35 via-transparent to-transparent"
              : "absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/10"
          }
        />
        {softOverlay ? (
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_35%,transparent_45%,rgba(26,20,16,0.18)_100%)] ring-1 ring-inset ring-amber-100/25"
            aria-hidden
          />
        ) : null}

        <span
          className="absolute top-3.5 right-3.5 font-serif text-[0.85rem] tracking-wider"
          style={{ color: "rgba(232,200,120,0.85)" }}
        >
          {n}
        </span>
        <figcaption className="absolute bottom-3.5 left-3.5 text-[0.62rem] tracking-[0.18em] text-white/95 uppercase">
          {caption}
        </figcaption>
        <span
          className="absolute right-3.5 bottom-3.5 font-serif text-[0.75rem]"
          style={{ color: "rgba(232,200,120,0.55)" }}
        >
          {n}
        </span>
      </div>
    </motion.figure>
  );
}

function LocationCard() {
  return (
    <motion.div
      className="relative overflow-hidden rounded-[1.15rem] border border-white/10 bg-[#141414] p-5 text-white shadow-[0_22px_60px_rgba(0,0,0,0.28)] sm:p-6 lg:min-h-[300px]"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.75, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(ellipse at 20% 30%, rgba(55,215,171,0.18), transparent 50%), radial-gradient(ellipse at 80% 80%, rgba(212,175,55,0.12), transparent 45%)",
        }}
        aria-hidden
      />

      <div className="relative grid h-full gap-5 sm:grid-cols-[0.95fr_1.05fr] sm:items-center">
        <div className="relative min-h-[180px] overflow-hidden rounded-2xl border border-white/10 bg-[#e8ebe6] sm:min-h-[220px] lg:min-h-full">
          <iframe
            title="IAA Kochi location on Google Maps"
            src={MAPS_EMBED_URL}
            className="absolute inset-0 h-full w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
          <div
            className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/10"
            aria-hidden
          />
        </div>

        <div className="relative z-10 flex h-full flex-col justify-between gap-5">
          <address className="text-[0.92rem] leading-relaxed text-white/75 not-italic">
            {site.addressLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </address>

          <a
            href={MAPS_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-fit items-center rounded-full px-5 py-2.5 text-[0.68rem] font-semibold tracking-[0.16em] uppercase shadow-[0_8px_24px_rgba(212,175,55,0.28)] transition hover:brightness-110"
            style={{
              background:
                "linear-gradient(180deg, #f0d78c 0%, #d4af37 45%, #a67c1a 100%)",
              color: "#1a1408",
            }}
          >
            View location →
          </a>
        </div>
      </div>

      <span
        className="pointer-events-none absolute right-4 bottom-4 z-20 text-[var(--iaa-turquoise)]/70"
        aria-hidden
      >
        ✦
      </span>
    </motion.div>
  );
}
