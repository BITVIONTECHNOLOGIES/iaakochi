"use client";

import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { nav } from "@/data/site";
import { cn } from "@/lib/cn";
import { whatsappUrl } from "@/lib/whatsapp";

function isActivePath(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  if (href === "/courses") return pathname === "/courses" || pathname.startsWith("/courses/");
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function MobileMenu({
  open,
  onClose,
  onEnquire,
}: {
  open: boolean;
  onClose: () => void;
  onEnquire: () => void;
}) {
  const pathname = usePathname();

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[45] flex flex-col justify-between bg-zinc-950 px-8 pt-28 pb-10 text-white lg:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div
            className="absolute inset-x-0 top-0 h-[2px]"
            style={{
              background:
                "linear-gradient(90deg, transparent 0%, #37d7ab 18%, #37d7ab 82%, transparent 100%)",
            }}
            aria-hidden
          />

          <nav className="grid gap-1.5" aria-label="Mobile">
            {nav.map((item, i) => {
              const active = isActivePath(pathname, item.href);
              return (
                <motion.div
                  key={item.href}
                  initial={{ y: 18, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.05 * i, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className={cn(
                      "block rounded-full px-4 py-3 text-[0.78rem] font-medium tracking-[0.18em] uppercase transition",
                      active
                        ? "bg-[#1a1a1a] text-white shadow-[inset_0_0_0_1px_rgba(255,255,255,0.18)]"
                        : "text-white/75 hover:bg-white/5 hover:text-white",
                    )}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              );
            })}
          </nav>

          <div className="flex flex-col gap-4">
            <button
              type="button"
              onClick={onEnquire}
              className="rounded-full px-6 py-3 text-center text-[0.72rem] font-semibold tracking-[0.16em] uppercase"
              style={{
                background: "linear-gradient(180deg, #4de0b8 0%, #37d7ab 55%, #2bb890 100%)",
                color: "#041510",
                boxShadow: "0 8px 28px rgba(55,215,171,0.35)",
              }}
            >
              Enquire now
            </button>
            <a
              href={whatsappUrl("general")}
              className="text-center text-[0.72rem] tracking-[0.18em] text-white/60 uppercase transition hover:text-[var(--iaa-turquoise)]"
              target="_blank"
              rel="noreferrer"
            >
              Talk with IAA
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
