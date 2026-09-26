import Image from "next/image";
import Link from "next/link";
import { whatsappUrl } from "@/lib/whatsapp";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-[#f4f4f2]">
      {/* Soft studio depth */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 55% 70% at 78% 48%, rgba(255,255,255,0.9), transparent 60%), linear-gradient(180deg, #f7f7f5 0%, #efefed 100%)",
        }}
        aria-hidden
      />

      <div className="frame relative z-10 grid items-center gap-8 py-12 md:gap-10 md:py-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-6 lg:py-16 xl:gap-10">
        {/* Copy */}
        <div className="relative max-w-[32rem]">
          <h2 className="font-serif text-[clamp(2rem,4vw,3.35rem)] leading-[1.14] tracking-[-0.02em] text-[#1a1a1a]">
            Your clinical knowledge is only the beginning.
          </h2>
          <span
            className="mt-3 inline-block h-1.5 w-1.5 rounded-full bg-[#37d7ab] md:mt-4"
            aria-hidden
          />
          <p className="mt-4 max-w-[38ch] text-[0.95rem] leading-relaxed text-[#6b6b6b] md:mt-5 md:text-[1rem]">
            Build the skills, confidence and professional foundation to step into the
            world of aesthetics.
          </p>

          <div className="mt-8 flex flex-wrap gap-3 md:mt-9">
            <Link
              href="/courses"
              className="rounded-full px-6 py-2.5 text-[0.65rem] font-semibold tracking-[0.16em] uppercase transition hover:brightness-105"
              style={{
                background: "linear-gradient(90deg, #1a9e7a 0%, #37d7ab 50%, #6ee7c5 100%)",
                color: "#041510",
                boxShadow: "0 8px 24px rgba(55,215,171,0.28)",
              }}
            >
              Explore courses
            </Link>
            <a
              href={whatsappUrl("general")}
              className="rounded-full border border-[#c8c8c8] bg-white px-6 py-2.5 text-[0.65rem] font-semibold tracking-[0.16em] text-[#1a1a1a] uppercase transition hover:border-[#37d7ab] hover:bg-[#37d7ab]/06"
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp IAA
            </a>
          </div>
        </div>

        {/* Tablet mockup — fitted & aligned */}
        <div className="relative mx-auto w-full max-w-[480px] lg:mx-0 lg:ml-auto lg:max-w-none lg:translate-x-2 xl:translate-x-4">
          <div
            className="pointer-events-none absolute top-1/2 right-[8%] h-[78%] w-[70%] -translate-y-1/2 rounded-full bg-white/70 blur-2xl"
            aria-hidden
          />
          <div className="relative aspect-[532/331] w-full">
            <Image
              src="/images/final-cta-tablet.png"
              alt="IAA aesthetics on tablet"
              fill
              sizes="(max-width: 1024px) 90vw, 52vw"
              className="object-contain object-center drop-shadow-[0_28px_50px_rgba(0,0,0,0.12)]"
              priority={false}
            />
          </div>
          {/* Soft sparkle accent */}
          <span
            className="pointer-events-none absolute right-[6%] bottom-[10%] text-[0.7rem] text-white/90 drop-shadow"
            aria-hidden
          >
            ✦
          </span>
        </div>
      </div>
    </section>
  );
}
