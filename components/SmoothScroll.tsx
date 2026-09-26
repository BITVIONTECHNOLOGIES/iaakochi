"use client";

import { ReactLenis } from "lenis/react";
import { useEffect, useState } from "react";

/** Smooth scroll only on fine-pointer desktops — skip on phones/tablets for fluid native scroll. */
export function SmoothScroll({ children }: { children: React.ReactNode }) {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const fine = window.matchMedia("(pointer: fine)").matches;
    const wide = window.matchMedia("(min-width: 1024px)").matches;
    setEnabled(!reduce && fine && wide);
  }, []);

  if (!enabled) return <>{children}</>;

  return (
    <ReactLenis root options={{ lerp: 0.14, duration: 0.85, smoothWheel: true, syncTouch: false }}>
      {children}
    </ReactLenis>
  );
}
