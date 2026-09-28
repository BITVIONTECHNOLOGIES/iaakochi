import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CampusGallery } from "@/components/CampusGallery";
import { FinalCTA } from "@/components/FinalCTA";

export const metadata: Metadata = {
  title: "Campus",
  description:
    "Visit the IAA Kochi campus in Perumbavoor, Ernakulam — training rooms, guided practice and clinical environment.",
  alternates: { canonical: "/campus" },
};

export default function CampusPage() {
  return (
    <>
      <section className="relative min-h-[72vh] overflow-hidden border-b border-white/10 bg-zinc-950 text-white">
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <Image
            src="/images/campus-hero-cohort.jpg"
            alt=""
            fill
            priority
            quality={80}
            sizes="100vw"
            className="object-cover object-[50%_32%]"
          />
          <div className="absolute inset-0 bg-zinc-950/58" />
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/72 via-zinc-950/40 to-zinc-950/25" />
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/35 via-transparent to-zinc-950/55" />
        </div>

        <div className="frame relative flex min-h-[72vh] flex-col justify-center pt-32 pb-16 md:pt-36 md:pb-20">
          <div className="flex items-center gap-3 text-[0.68rem] tracking-[0.2em] uppercase">
            <span className="text-[var(--iaa-turquoise)]">05</span>
            <span className="text-white/70">Campus</span>
          </div>
          <h1 className="editorial-h mt-5 max-w-[12ch] text-[clamp(2.8rem,6.2vw,5.4rem)]">
            Learn. Practice. Build your future.
          </h1>
          <p className="mt-6 max-w-[46ch] text-base leading-relaxed text-white/80">
            Practical training is conducted offline at the IAA campus — a professional
            environment for supervised skill development.
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
      <CampusGallery showIntro={false} />
      <FinalCTA />
    </>
  );
}
