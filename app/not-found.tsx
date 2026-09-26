import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[80vh] items-end bg-zinc-950 px-[clamp(1.5rem,5vw,4rem)] pt-40 pb-24 text-white">
      <div className="w-full max-w-[1240px]">
        <p className="micro text-[var(--iaa-turquoise)]">IAA Kochi</p>
        <h1 className="editorial-h mt-6 max-w-[12ch] text-[clamp(3.4rem,9vw,7.2rem)]">
          Page not found.
        </h1>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/"
            className="rounded-full bg-[var(--iaa-turquoise)] px-6 py-2.5 text-[0.68rem] font-semibold tracking-[0.16em] text-[var(--iaa-black)] uppercase"
          >
            Return home
          </Link>
          <Link
            href="/contact"
            className="rounded-full border border-white/25 px-6 py-2.5 text-[0.68rem] font-semibold tracking-[0.16em] uppercase"
          >
            Contact
          </Link>
        </div>
      </div>
    </section>
  );
}
