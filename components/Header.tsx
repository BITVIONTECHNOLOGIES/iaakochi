"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "@/components/Logo";
import { MobileMenu } from "@/components/MobileMenu";
import { nav } from "@/data/site";
import { cn } from "@/lib/cn";

function isActivePath(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  if (href === "/courses") return pathname === "/courses" || pathname.startsWith("/courses/");
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 right-0 left-0 z-50 border-b border-white/10 transition-[background,box-shadow,backdrop-filter] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
          "bg-zinc-950/90 shadow-[0_12px_40px_rgba(0,0,0,0.35)] backdrop-blur-xl",
          scrolled && "bg-zinc-950/95 shadow-[0_16px_48px_rgba(0,0,0,0.45)]",
        )}
      >
        {/* Teal top accent line */}
        <div
          className="absolute inset-x-0 top-0 h-[2px]"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, #37d7ab 18%, #37d7ab 82%, transparent 100%)",
            boxShadow: "0 0 12px rgba(55,215,171,0.55)",
          }}
          aria-hidden
        />

        <div className="frame flex h-[4.25rem] items-center justify-between gap-4 md:h-[4.75rem]">
          <Logo onDark className="relative z-10 shrink-0" />

          <nav
            className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-0.5 lg:flex"
            aria-label="Primary"
          >
            {nav.map((item) => {
              const active = isActivePath(pathname, item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-full px-3.5 py-2 text-[0.65rem] font-medium tracking-[0.16em] uppercase transition-all duration-300",
                    active
                      ? "bg-[#1a1a1a] text-white shadow-[inset_0_0_0_1px_rgba(255,255,255,0.18)]"
                      : "text-white/80 hover:bg-white/[0.06] hover:text-white",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/contact#enquiry"
              className="hidden rounded-full px-6 py-2.5 text-[0.65rem] font-semibold tracking-[0.16em] uppercase transition-all duration-300 hover:brightness-110 sm:inline-flex"
              style={{
                background: "linear-gradient(180deg, #4de0b8 0%, #37d7ab 55%, #2bb890 100%)",
                color: "#041510",
                boxShadow:
                  "0 0 0 1px rgba(55,215,171,0.35), 0 8px 28px rgba(55,215,171,0.35)",
              }}
            >
              Enquire now
            </Link>

            <button
              type="button"
              className="grid h-10 w-10 place-items-center rounded-full border border-white/20 text-white transition-colors hover:border-[var(--iaa-turquoise)] lg:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              <span className="flex w-4 flex-col gap-1.5" aria-hidden>
                <span
                  className={cn(
                    "block h-px bg-current transition",
                    open && "translate-y-[7px] rotate-45",
                  )}
                />
                <span className={cn("block h-px bg-current transition", open && "opacity-0")} />
                <span
                  className={cn(
                    "block h-px bg-current transition",
                    open && "-translate-y-[7px] -rotate-45",
                  )}
                />
              </span>
            </button>
          </div>
        </div>
      </header>

      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </>
  );
}
