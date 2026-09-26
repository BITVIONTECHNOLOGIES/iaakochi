import Link from "next/link";
import { cn } from "@/lib/cn";

export function PageHero({
  index,
  label,
  title,
  description,
  dark = true,
}: {
  index?: string;
  label: string;
  title: string;
  description?: string;
  dark?: boolean;
}) {
  return (
    <section
      className={cn(
        "relative overflow-hidden border-b",
        dark
          ? "border-white/10 bg-zinc-950 text-white"
          : "border-[var(--iaa-border)] bg-[var(--iaa-ivory)] text-[var(--iaa-black)]",
      )}
    >
      <div
        className="pointer-events-none absolute -top-24 right-0 h-72 w-72 rounded-full bg-[var(--iaa-turquoise)]/10 blur-[90px]"
        aria-hidden
      />
      <div className="frame relative pt-32 pb-16 md:pt-36 md:pb-20">
        <div className="flex items-center gap-3 text-[0.68rem] tracking-[0.2em] uppercase">
          {index && <span className="text-[var(--iaa-turquoise)]">{index}</span>}
          <span className={dark ? "text-white/45" : "text-[var(--iaa-muted)]"}>{label}</span>
        </div>
        <h1 className="editorial-h mt-5 max-w-[14ch] text-[clamp(2.8rem,6.5vw,5.8rem)]">{title}</h1>
        {description && (
          <p
            className={cn(
              "mt-6 max-w-[48ch] text-base leading-relaxed",
              dark ? "text-white/65" : "text-[var(--iaa-muted)]",
            )}
          >
            {description}
          </p>
        )}
        <div className="mt-10 flex flex-wrap gap-6">
          <Link
            href="/contact"
            className="rounded-full bg-[var(--iaa-turquoise)] px-6 py-2.5 text-[0.68rem] font-semibold tracking-[0.16em] text-[var(--iaa-black)] uppercase transition hover:bg-[#4de0b8]"
          >
            Enquire now
          </Link>
          <Link
            href="/courses"
            className={cn(
              "rounded-full border px-6 py-2.5 text-[0.68rem] font-semibold tracking-[0.16em] uppercase transition",
              dark
                ? "border-white/25 text-white hover:border-[var(--iaa-turquoise)]"
                : "border-[var(--iaa-black)] text-[var(--iaa-black)] hover:border-[var(--iaa-turquoise)]",
            )}
          >
            View programs
          </Link>
        </div>
      </div>
    </section>
  );
}
