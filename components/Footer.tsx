import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { Logo } from "@/components/Logo";
import { allCourses } from "@/data/courses";
import { nav, site } from "@/data/site";
import { whatsappUrl } from "@/lib/whatsapp";

const gold = "#c4a06a";
const bronze = "#a8844f";
const teal = "#37d7ab";
const ink = "#1a1a1a";
const muted = "#5c5c5c";

const programIcons: Record<string, "brush" | "tool" | "eye" | "lips" | "lash"> = {
  "clinical-cosmetology": "brush",
  spmu: "tool",
  microblading: "eye",
  "lip-micropigmentation": "lips",
  "lash-lift": "lash",
};

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-black/[0.06] bg-white text-[var(--iaa-black)]">
      {/* White marble base */}
      <div className="absolute inset-0" aria-hidden>
        <Image
          src="/images/marble-white.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center opacity-[0.55] brightness-[1.08] contrast-[0.92]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/55 to-[#f7f5f0]/85" />
      </div>

      {/* Soft brand glows */}
      <div
        className="pointer-events-none absolute -top-24 left-[8%] h-72 w-72 rounded-full blur-[90px]"
        style={{ background: "rgba(55,215,171,0.14)" }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute top-[20%] right-[5%] h-80 w-80 rounded-full blur-[100px]"
        style={{ background: "rgba(196,160,106,0.16)" }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 h-48 w-[70%] -translate-x-1/2 blur-[80px]"
        style={{ background: "rgba(55,215,171,0.06)" }}
        aria-hidden
      />

      {/* Fine gold lattice */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.22]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(115deg, transparent 0 46px, rgba(196,160,106,0.22) 46px 47px), repeating-linear-gradient(25deg, transparent 0 62px, rgba(168,132,79,0.12) 62px 63px)",
        }}
        aria-hidden
      />

      {/* Floating sparkles */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        {[
          "top-[12%] left-[18%]",
          "top-[28%] right-[22%]",
          "top-[55%] left-[8%]",
          "bottom-[22%] right-[12%]",
          "top-[18%] right-[8%]",
          "bottom-[35%] left-[42%]",
        ].map((pos) => (
          <span
            key={pos}
            className={`absolute text-[0.55rem] ${pos}`}
            style={{ color: gold, opacity: 0.45 }}
          >
            ✦
          </span>
        ))}
      </div>

      {/* Gold arc accent */}
      <svg
        className="pointer-events-none absolute top-1/2 right-[-8%] hidden h-[120%] w-[55%] -translate-y-1/2 opacity-[0.12] lg:block"
        viewBox="0 0 400 600"
        fill="none"
        aria-hidden
      >
        <ellipse cx="280" cy="300" rx="160" ry="260" stroke={gold} strokeWidth="1.2" />
        <ellipse cx="280" cy="300" rx="120" ry="200" stroke={teal} strokeWidth="0.8" opacity="0.5" />
        <path
          d="M120 300c40-90 120-140 220-140"
          stroke={gold}
          strokeWidth="0.9"
          opacity="0.7"
        />
      </svg>

      <CompassWatermark className="pointer-events-none absolute top-2 right-2 h-56 w-56 opacity-[0.11] md:top-6 md:right-6 md:h-80 md:w-80" />
      <CompassWatermark className="pointer-events-none absolute -bottom-12 -left-14 h-64 w-64 rotate-12 opacity-[0.08] md:h-80 md:w-80" />

      {/* Soft facial contour watermark — clinical premium cue */}
      <FaceContour className="pointer-events-none absolute top-[18%] left-[38%] hidden h-56 w-44 opacity-[0.06] lg:block" />

      <div className="frame relative z-10 py-16 md:py-20 lg:py-24">
        {/* Top branding band */}
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_auto_1fr] lg:gap-8">
          <div>
            <Logo className="max-w-[160px] sm:max-w-[180px]" />
            <p
              className="mt-5 text-[0.68rem] font-semibold tracking-[0.28em] uppercase"
              style={{ color: ink }}
            >
              {site.shortName}
            </p>
            <p
              className="mt-2 font-serif text-[1.65rem] italic leading-none sm:text-[1.9rem]"
              style={{ color: bronze }}
            >
              {site.tagline}
            </p>
          </div>

          <PremierSeal className="mx-auto hidden md:block" />

          <p
            className="font-serif text-[clamp(2rem,3.8vw,3.4rem)] leading-[1.15] tracking-[-0.02em] lg:text-right"
            style={{ color: ink }}
          >
            Precision.
            <br />
            Confidence.
            <br />
            Career.
          </p>
        </div>

        <div
          className="mt-12 h-px w-full md:mt-14"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(196,160,106,0.45), rgba(26,26,26,0.08), transparent)",
          }}
        />

        {/* Three columns */}
        <div className="mt-11 grid gap-12 md:mt-12 md:grid-cols-3 md:gap-10 lg:gap-14">
          <div>
            <ColumnHeading>Site Navigation</ColumnHeading>
            <nav className="mt-5 grid gap-2.5">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group flex items-center gap-2.5 text-[0.88rem] transition hover:opacity-100"
                  style={{ color: muted }}
                >
                  <span
                    className="h-1 w-1 rounded-full transition group-hover:scale-125"
                    style={{ background: gold }}
                    aria-hidden
                  />
                  <span className="group-hover:text-[#1a1a1a]">{item.label}</span>
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <ColumnHeading>Advanced Programs</ColumnHeading>
            <nav className="mt-5 grid gap-3">
              {allCourses.map((course) => (
                <Link
                  key={course.slug}
                  href={`/courses/${course.slug}`}
                  className="flex items-start gap-3 text-[0.88rem] transition hover:text-[#1a1a1a]"
                  style={{ color: muted }}
                >
                  <ProgramIcon kind={programIcons[course.slug] ?? "brush"} />
                  <span>{course.title}</span>
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <ColumnHeading>Contact & Location</ColumnHeading>
            <ul className="mt-5 space-y-4 text-[0.88rem]" style={{ color: muted }}>
              <li className="flex items-start gap-3">
                <ContactIcon kind="pin" />
                <div className="leading-relaxed">
                  {site.addressLines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </div>
              </li>
              <li className="flex items-center gap-3">
                <ContactIcon kind="phone" />
                <a href={site.phoneHref} className="transition hover:text-[#1a1a1a]">
                  {site.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <ContactIcon kind="mail" />
                <a href={`mailto:${site.email}`} className="break-all transition hover:text-[#1a1a1a]">
                  {site.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <ContactIcon kind="instagram" />
                <a
                  href={site.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="transition hover:text-[#1a1a1a]"
                >
                  {site.instagramHandle}
                </a>
              </li>
            </ul>

            <a
              href={whatsappUrl("general")}
              target="_blank"
              rel="noreferrer"
              className="mt-7 inline-flex items-center gap-2.5 rounded-full px-5 py-2.5 text-[0.62rem] font-semibold tracking-[0.16em] uppercase transition hover:brightness-105"
              style={{
                background: ink,
                color: "#fff",
                boxShadow: `0 0 0 1px rgba(55,215,171,0.45), 0 10px 28px rgba(0,0,0,0.12)`,
              }}
            >
              <span
                className="grid h-6 w-6 place-items-center rounded-full"
                style={{
                  background: `radial-gradient(circle at 35% 30%, #6ee7b7, ${teal} 70%)`,
                  boxShadow: `0 0 10px rgba(55,215,171,0.45)`,
                }}
                aria-hidden
              >
                <WhatsAppGlyph />
              </span>
              Talk with IAA
            </a>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center gap-3 md:mt-16">
          <p
            className="text-center text-[0.65rem] tracking-[0.12em] uppercase"
            style={{ color: "rgba(26,26,26,0.35)" }}
          >
            © {new Date().getFullYear()} {site.shortName} | Premier Aesthetics Training Institute |
            All Rights Reserved.
          </p>
          <a
            href="https://bitvion.in"
            target="_blank"
            rel="noreferrer"
            className="group mt-1 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-[0.68rem] tracking-[0.14em] uppercase transition hover:brightness-105"
            style={{
              color: muted,
              borderColor: "rgba(196,160,106,0.45)",
              background:
                "linear-gradient(180deg, rgba(255,255,255,0.95), rgba(247,242,232,0.9))",
              boxShadow: "0 6px 18px rgba(168,132,79,0.12)",
            }}
          >
            <span>Developed by</span>
            <span
              className="font-semibold tracking-[0.1em] underline decoration-transparent underline-offset-4 transition group-hover:underline"
              style={{
                color: bronze,
                textShadow: "0 0 20px rgba(196,160,106,0.35)",
              }}
            >
              Bitvion Technologies
            </span>
            <span
              aria-hidden
              className="text-[0.8rem] transition group-hover:translate-x-0.5"
              style={{ color: bronze }}
            >
              →
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}

function ColumnHeading({ children }: { children: ReactNode }) {
  return (
    <h3
      className="text-[0.72rem] font-semibold tracking-[0.18em] uppercase"
      style={{ color: bronze }}
    >
      {children}
    </h3>
  );
}

function WhatsAppGlyph() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12.04 2C6.58 2 2.15 6.4 2.15 11.82c0 1.96.53 3.8 1.54 5.44L2 22l4.9-1.6a10.1 10.1 0 0 0 5.14 1.4h.01c5.46 0 9.89-4.4 9.89-9.82C21.94 6.4 17.5 2 12.04 2Z"
        fill="#042018"
      />
      <path
        d="M17.2 14.5c-.24-.12-1.42-.7-1.64-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1.02-.37-1.94-1.19-.72-.64-1.2-1.42-1.34-1.66-.14-.24-.02-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.48-.4-.4-.54-.4h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2 0 1.18.86 2.32.98 2.48.12.16 1.7 2.6 4.12 3.64.58.24 1.02.4 1.38.5.58.18 1.1.16 1.52.1.46-.07 1.42-.58 1.62-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28Z"
        fill="#6ee7b7"
      />
    </svg>
  );
}

function FaceContour({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 120 160" fill="none" aria-hidden>
      <ellipse cx="60" cy="78" rx="38" ry="52" stroke={gold} strokeWidth="0.9" />
      <path
        d="M35 62c8-18 42-18 50 0M40 98c10 14 30 14 40 0"
        stroke={teal}
        strokeWidth="0.7"
        opacity="0.7"
      />
      <path d="M60 32v92M42 58c6 4 12 4 18 0M60 58c6 4 12 4 18 0" stroke={gold} strokeWidth="0.7" />
      <circle cx="48" cy="72" r="2.2" stroke={teal} strokeWidth="0.7" />
      <circle cx="72" cy="72" r="2.2" stroke={teal} strokeWidth="0.7" />
      <path d="M52 102c5 4 11 4 16 0" stroke={gold} strokeWidth="0.7" />
    </svg>
  );
}

function CompassWatermark({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 200 200" fill="none" aria-hidden>
      <circle cx="100" cy="100" r="92" stroke={gold} strokeWidth="1" />
      <circle cx="100" cy="100" r="72" stroke={gold} strokeWidth="0.7" opacity="0.7" />
      <circle cx="100" cy="100" r="48" stroke={gold} strokeWidth="0.6" opacity="0.5" />
      {[0, 30, 60, 90, 120, 150].map((d) => (
        <line
          key={d}
          x1="100"
          y1="12"
          x2="100"
          y2={d % 90 === 0 ? 28 : 22}
          stroke={gold}
          strokeWidth={d % 90 === 0 ? 1.6 : 1}
          transform={`rotate(${d} 100 100)`}
        />
      ))}
      <path d="M100 40 L112 100 L100 160 L88 100 Z" fill={gold} opacity="0.35" />
      <path d="M55 100 L100 90 L145 100 L100 110 Z" fill={gold} opacity="0.2" />
      <circle cx="100" cy="100" r="5" fill="#fff" stroke={gold} strokeWidth="1.2" />
    </svg>
  );
}

function PremierSeal({ className = "" }: { className?: string }) {
  return (
    <svg className={className} width="120" height="120" viewBox="0 0 120 120" fill="none" aria-hidden>
      <circle cx="60" cy="60" r="56" stroke="rgba(168,132,79,0.35)" strokeWidth="1" />
      <circle cx="60" cy="60" r="48" stroke="rgba(168,132,79,0.28)" strokeWidth="0.8" />
      <path
        d="M28 78c8-18 16-28 32-36M92 78c-8-18-16-28-32-36"
        stroke="rgba(168,132,79,0.45)"
        strokeWidth="1.2"
      />
      <path
        d="M26 70c6-2 10-6 12-12M94 70c-6-2-10-6-12-12M30 86c5 0 9-3 12-8M90 86c-5 0-9-3-12-8"
        stroke="rgba(168,132,79,0.4)"
        strokeWidth="1"
      />
      <text
        x="60"
        y="52"
        textAnchor="middle"
        fill="rgba(26,26,26,0.7)"
        fontSize="11"
        fontFamily="Georgia, serif"
        letterSpacing="2"
      >
        IAA
      </text>
      <text
        x="60"
        y="66"
        textAnchor="middle"
        fill="rgba(168,132,79,0.85)"
        fontSize="5.5"
        fontFamily="system-ui, sans-serif"
        letterSpacing="1.2"
      >
        PREMIER EDUCATIONAL
      </text>
      <text
        x="60"
        y="76"
        textAnchor="middle"
        fill="rgba(168,132,79,0.85)"
        fontSize="5.5"
        fontFamily="system-ui, sans-serif"
        letterSpacing="1.2"
      >
        INSTITUTE
      </text>
    </svg>
  );
}

function ProgramIcon({ kind }: { kind: "brush" | "tool" | "eye" | "lips" | "lash" }) {
  const common = "mt-0.5 shrink-0";
  if (kind === "eye") {
    return (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className={common} aria-hidden>
        <path d="M2 12s4-6 10-6 10 6 10 6-4 6-10 6S2 12 2 12Z" stroke={gold} strokeWidth="1.4" />
        <circle cx="12" cy="12" r="2.5" stroke={gold} strokeWidth="1.4" />
      </svg>
    );
  }
  if (kind === "lips") {
    return (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className={common} aria-hidden>
        <path
          d="M4 12c2-3 5-4 8-4s6 1 8 4c-2 3-5 5-8 5s-6-2-8-5Z"
          stroke={gold}
          strokeWidth="1.4"
        />
        <path d="M4 12h16" stroke={gold} strokeWidth="1.2" />
      </svg>
    );
  }
  if (kind === "lash") {
    return (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className={common} aria-hidden>
        <path
          d="M3 14c3-4 6-5 9-5s6 1 9 5"
          stroke={gold}
          strokeWidth="1.4"
          strokeLinecap="round"
        />
        <path
          d="M6 12l-1.5-3M10 10.5 9 7M14 10.5l1-3.5M18 12l1.5-3"
          stroke={gold}
          strokeWidth="1.3"
          strokeLinecap="round"
        />
      </svg>
    );
  }
  if (kind === "tool") {
    return (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className={common} aria-hidden>
        <path
          d="M14 4l6 6-3 1-4-4-1-3ZM4 20l7-7 3 3-7 7H4v-3Z"
          stroke={gold}
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className={common} aria-hidden>
      <path
        d="M5 20l7-12 2 3 5-7"
        stroke={gold}
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M14 8l2 3" stroke={gold} strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

function ContactIcon({ kind }: { kind: "pin" | "phone" | "mail" | "instagram" }) {
  const common = "mt-0.5 shrink-0";
  if (kind === "phone") {
    return (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" className={common} aria-hidden>
        <path
          d="M7 3h3l1.5 4-2 1.5a12 12 0 0 0 5 5L16 12l4 1.5V17a2 2 0 0 1-2 2A14 14 0 0 1 5 5a2 2 0 0 1 2-2Z"
          stroke={gold}
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
  if (kind === "mail") {
    return (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" className={common} aria-hidden>
        <rect x="3" y="5" width="18" height="14" rx="2" stroke={gold} strokeWidth="1.4" />
        <path d="M4 7l8 6 8-6" stroke={gold} strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    );
  }
  if (kind === "instagram") {
    return (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" className={common} aria-hidden>
        <rect x="3" y="3" width="18" height="18" rx="5" stroke={gold} strokeWidth="1.4" />
        <circle cx="12" cy="12" r="4" stroke={gold} strokeWidth="1.4" />
        <circle cx="17.5" cy="6.5" r="1" fill={gold} />
      </svg>
    );
  }
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" className={common} aria-hidden>
      <path
        d="M12 21s7-5.2 7-11a7 7 0 1 0-14 0c0 5.8 7 11 7 11Z"
        stroke={gold}
        strokeWidth="1.4"
      />
      <circle cx="12" cy="10" r="2.3" stroke={gold} strokeWidth="1.4" />
    </svg>
  );
}
