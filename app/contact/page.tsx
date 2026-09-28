import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ContactExperience } from "@/components/ContactExperience";
import { FinalCTA } from "@/components/FinalCTA";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Begin a conversation with IAA Kochi about professional aesthetics education.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <section className="relative min-h-[72vh] overflow-hidden border-b border-white/10 bg-zinc-950 text-white">
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <Image
            src="/images/contact-hero.png"
            alt=""
            fill
            priority
            quality={80}
            sizes="100vw"
            className="object-cover object-[50%_38%]"
          />
          <div className="absolute inset-0 bg-zinc-950/58" />
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/72 via-zinc-950/40 to-zinc-950/25" />
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/35 via-transparent to-zinc-950/55" />
        </div>

        <div className="frame relative flex min-h-[72vh] flex-col justify-center pt-32 pb-16 md:pt-36 md:pb-20">
          <div className="flex items-center gap-3 text-[0.68rem] tracking-[0.2em] uppercase">
            <span className="text-[var(--iaa-turquoise)]">06</span>
            <span className="text-white/70">Contact</span>
          </div>
          <h1 className="editorial-h mt-5 max-w-[14ch] text-[clamp(2.8rem,6.2vw,5.4rem)]">
            Begin a conversation
          </h1>
          <p className="mt-6 max-w-[46ch] text-base leading-relaxed text-white/80">
            Share your background and the program you are considering. A member of the IAA team
            will respond with course guidance.
          </p>
          <div className="mt-10 flex flex-wrap gap-6">
            <Link
              href="/contact#enquiry"
              className="rounded-full bg-[var(--iaa-turquoise)] px-6 py-2.5 text-[0.68rem] font-semibold tracking-[0.16em] text-[var(--iaa-black)] uppercase transition hover:bg-[#4de0b8]"
            >
              Enquire now
            </Link>
            <Link
              href="/courses"
              className="rounded-full border border-white/35 px-6 py-2.5 text-[0.68rem] font-semibold tracking-[0.16em] uppercase transition hover:border-[var(--iaa-turquoise)]"
            >
              View programs
            </Link>
          </div>
        </div>
      </section>
      <ContactExperience />
      <FinalCTA />
    </>
  );
}
