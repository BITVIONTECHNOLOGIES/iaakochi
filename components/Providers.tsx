"use client";

import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { HashScroll } from "@/components/HashScroll";
import { SmoothScroll } from "@/components/SmoothScroll";

/** Lean runtime stack — keeps the site smooth for small concurrent traffic. */
export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SmoothScroll>
      <HashScroll />
      {children}
      <FloatingWhatsApp />
    </SmoothScroll>
  );
}
