"use client";

import { motion, useMotionValue, useSpring } from "motion/react";
import { useEffect, useState } from "react";

export function CustomCursor() {
  const x = useMotionValue(-40);
  const y = useMotionValue(-40);
  const sx = useSpring(x, { stiffness: 380, damping: 32, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 380, damping: 32, mass: 0.4 });
  const [label, setLabel] = useState("");
  const [hover, setHover] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce) return;

    const move = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    const over = (e: PointerEvent) => {
      const el = (e.target as HTMLElement | null)?.closest("[data-cursor]");
      setHover(Boolean(el) || Boolean((e.target as HTMLElement | null)?.closest("a,button")));
      setLabel(el?.getAttribute("data-cursor") ?? "");
    };
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerover", over);
    return () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerover", over);
    };
  }, [x, y]);

  return (
    <>
      <motion.div
        aria-hidden
        className="cursor-dot pointer-events-none fixed z-[85] hidden h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--iaa-turquoise)] mix-blend-multiply md:block"
        style={{ left: sx, top: sy, scale: hover ? 2.6 : 1 }}
      />
      <motion.div
        aria-hidden
        className="cursor-label pointer-events-none fixed z-[85] hidden -translate-x-1/2 -translate-y-[220%] text-[0.62rem] tracking-[0.28em] text-[var(--iaa-turquoise)] uppercase md:block"
        style={{ left: sx, top: sy, opacity: label ? 1 : 0 }}
      >
        {label}
      </motion.div>
    </>
  );
}
