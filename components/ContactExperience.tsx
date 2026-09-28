import Image from "next/image";
import { EnquiryForm } from "@/components/EnquiryForm";
import { site } from "@/data/site";
import { MAPS_URL } from "@/lib/whatsapp";

const gold = "#c9a44a";
const ink = "#4a4a4a";

export function ContactExperience() {
  return (
    <section id="contact" className="relative overflow-hidden bg-white pb-14 md:pb-20 lg:pb-24">
      <div className="relative">
        {/* Soft clinic interior — fades to white below */}
        <div className="absolute inset-0" aria-hidden>
          <Image
            src="/images/clinic-warm.jpg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover object-center scale-105 blur-[2px] brightness-[0.92] saturate-[0.9]"
          />
          <div className="absolute inset-0 bg-[#f5f0e8]/55" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_30%,rgba(255,255,255,0.35),transparent_65%)]" />
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-white" />
        </div>

        <div className="frame relative z-10 py-12 md:py-16 lg:py-20">
          <div className="grid items-stretch gap-7 lg:grid-cols-[minmax(280px,0.9fr)_minmax(0,1.65fr)] lg:gap-9 xl:gap-11">
            {/* LEFT — parchment contact card */}
            <aside
              className="relative flex flex-col rounded-[0.4rem] bg-[#f8f5ef] px-8 py-10 shadow-[0_22px_60px_rgba(40,30,15,0.12)] sm:px-9 sm:py-11 lg:min-h-[580px] lg:px-10 lg:py-12"
              style={{
                backgroundImage:
                  "linear-gradient(165deg, #fbf9f5 0%, #f5f0e6 55%, #efe9df 100%)",
              }}
            >
              <div
                className="pointer-events-none absolute inset-0 opacity-40"
                style={{
                  backgroundImage:
                    "radial-gradient(rgba(120,95,50,0.045) 0.7px, transparent 0.7px)",
                  backgroundSize: "4px 4px",
                }}
                aria-hidden
              />

              <div className="relative z-10 flex h-full flex-col">
                <div className="flex items-start justify-between gap-3">
                  <p
                    className="pt-2 text-[0.7rem] font-semibold tracking-[0.28em] uppercase"
                    style={{ color: gold }}
                  >
                    Reach IAA
                  </p>
                  <CompassSeal />
                </div>

                <div
                  className="relative mt-11 p-5 sm:mt-12 sm:p-6"
                  style={{ border: `1.25px solid ${gold}` }}
                >
                  <OrnateCorner className="absolute -top-px -left-px" />
                  <OrnateCorner className="absolute -top-px -right-px rotate-90" />
                  <OrnateCorner className="absolute -bottom-px -left-px -rotate-90" />
                  <OrnateCorner className="absolute -right-px -bottom-px rotate-180" />
                  <h2
                    className="font-serif text-[clamp(1.55rem,2.4vw,2.2rem)] leading-[1.28] tracking-[-0.01em]"
                    style={{ color: gold }}
                  >
                    Course guidance, straight from the campus team.
                  </h2>
                </div>

                <ul
                  className="mt-auto space-y-6 pt-16 text-[0.9rem]"
                  style={{ color: ink }}
                >
                  <li className="flex items-center gap-3.5">
                    <IconPhone />
                    <a href={site.phoneHref} className="tracking-wide transition hover:opacity-70">
                      {site.phoneDisplay}
                    </a>
                  </li>
                  <li className="flex items-center gap-3.5">
                    <IconMail />
                    <a
                      href={`mailto:${site.email}`}
                      className="break-all tracking-wide uppercase transition hover:opacity-70"
                    >
                      {site.email}
                    </a>
                  </li>
                  <li className="flex items-start gap-3.5">
                    <IconPin />
                    <div className="leading-relaxed">
                      {site.addressLines.map((line) => (
                        <span key={line} className="block">
                          {line}
                        </span>
                      ))}
                      <a
                        href={MAPS_URL}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-3 inline-block text-[0.65rem] font-medium tracking-[0.16em] uppercase"
                        style={{ color: gold }}
                      >
                        Open in Google Maps →
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </aside>

            {/* RIGHT — form board + equipment inset */}
            <div className="relative flex flex-col">
              <div
                className="relative flex-1 overflow-hidden rounded-[0.4rem]"
                style={{
                  background:
                    "linear-gradient(160deg, #faf7f1 0%, #f0ebe3 50%, #eae4da 100%)",
                  boxShadow: `
                    0 0 0 1.5px #d4af37,
                    0 0 0 3px #c49a2e,
                    0 24px 60px rgba(40,30,15,0.14)
                  `,
                }}
              >
                <div
                  className="pointer-events-none absolute inset-0 opacity-[0.35]"
                  style={{
                    backgroundImage:
                      "radial-gradient(rgba(90,70,40,0.05) 0.7px, transparent 0.7px)",
                    backgroundSize: "5px 5px",
                  }}
                  aria-hidden
                />

                {/* Ruby corner pins */}
                {(
                  [
                    "top-3.5 left-3.5",
                    "top-3.5 right-3.5",
                    "bottom-3.5 left-3.5",
                    "bottom-3.5 right-3.5",
                  ] as const
                ).map((pos) => (
                  <span
                    key={pos}
                    className={`pointer-events-none absolute z-20 h-2.5 w-2.5 rounded-full sm:h-3 sm:w-3 ${pos}`}
                    style={{
                      background:
                        "radial-gradient(circle at 35% 28%, #c45a5a, #7a1a1a 70%, #3d0c0c)",
                      boxShadow:
                        "0 1px 3px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.25)",
                    }}
                    aria-hidden
                  />
                ))}

                {/* Equipment product plate — top right */}
                <div
                  className="pointer-events-none absolute top-5 right-5 z-10 hidden overflow-hidden rounded-md sm:block lg:top-6 lg:right-7"
                  style={{
                    width: "clamp(140px, 22%, 200px)",
                    boxShadow: `
                      0 0 0 1.5px ${gold},
                      0 0 0 3px rgba(201,164,74,0.35),
                      0 12px 28px rgba(0,0,0,0.16)
                    `,
                  }}
                  aria-hidden
                >
                  <div className="relative aspect-[16/10] bg-[#f3eee6]">
                    <Image
                      src="/images/contact-device.png"
                      alt=""
                      fill
                      sizes="200px"
                      className="object-contain object-center p-2"
                    />
                  </div>
                </div>

                <div
                  id="enquiry"
                  className="relative z-10 scroll-mt-28 px-7 pt-9 pb-8 sm:px-9 sm:pt-10 sm:pb-9 sm:pr-[calc(clamp(140px,22%,200px)+2.25rem)] lg:px-11 lg:pt-11 lg:pb-10 lg:pr-[calc(clamp(140px,22%,200px)+2.75rem)]"
                >
                  <EnquiryForm variant="premium" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CompassSeal() {
  return (
    <svg width="44" height="44" viewBox="0 0 56 56" fill="none" aria-hidden>
      <circle cx="28" cy="28" r="26" stroke={gold} strokeWidth="1.2" />
      <circle cx="28" cy="28" r="20" stroke={gold} strokeWidth="0.8" opacity="0.55" />
      <circle cx="28" cy="28" r="12" stroke={gold} strokeWidth="0.7" opacity="0.4" />
      {[0, 30, 60, 90, 120, 150].map((d) => (
        <line
          key={d}
          x1="28"
          y1="5"
          x2="28"
          y2={d % 90 === 0 ? 12 : 9}
          stroke={gold}
          strokeWidth={d % 90 === 0 ? 1.4 : 0.9}
          transform={`rotate(${d} 28 28)`}
        />
      ))}
      <path d="M28 14 L32.5 28 L28 42 L23.5 28 Z" fill={gold} opacity="0.9" />
      <path d="M16 28 L28 24 L40 28 L28 32 Z" fill="#e8d5a0" opacity="0.55" />
      <circle cx="28" cy="28" r="2.5" fill="#f8f5ef" stroke={gold} strokeWidth="1.1" />
    </svg>
  );
}

function OrnateCorner({ className = "" }: { className?: string }) {
  return (
    <svg className={className} width="26" height="26" viewBox="0 0 28 28" fill="none" aria-hidden>
      <path d="M3 25C3 12 12 3 25 3" stroke={gold} strokeWidth="1.3" strokeLinecap="round" />
      <path
        d="M8 25C8 15 15 8 25 8"
        stroke={gold}
        strokeWidth="0.85"
        opacity="0.6"
        strokeLinecap="round"
      />
      <path
        d="M3 18c4-1 7-4 8-8M18 3c1 4 4 7 8 8"
        stroke={gold}
        strokeWidth="0.75"
        opacity="0.45"
        strokeLinecap="round"
      />
      <circle cx="3" cy="25" r="1.3" fill={gold} />
      <circle cx="25" cy="3" r="1.3" fill={gold} />
    </svg>
  );
}

function IconPhone() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden className="shrink-0">
      <path
        d="M7 3h3l1.5 4-2 1.5a12 12 0 0 0 5 5L16 12l4 1.5V17a2 2 0 0 1-2 2A14 14 0 0 1 5 5a2 2 0 0 1 2-2Z"
        stroke={gold}
        strokeWidth="1.45"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconMail() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden className="shrink-0">
      <rect x="3" y="5" width="18" height="14" rx="2" stroke={gold} strokeWidth="1.45" />
      <path d="M4 7l8 6 8-6" stroke={gold} strokeWidth="1.45" strokeLinecap="round" />
    </svg>
  );
}

function IconPin() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
      className="mt-0.5 shrink-0"
    >
      <path
        d="M12 21s7-5.2 7-11a7 7 0 1 0-14 0c0 5.8 7 11 7 11Z"
        stroke={gold}
        strokeWidth="1.45"
      />
      <circle cx="12" cy="10" r="2.4" stroke={gold} strokeWidth="1.45" />
    </svg>
  );
}
