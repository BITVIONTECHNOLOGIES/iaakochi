"use client";

import { motion, useScroll } from "motion/react";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[70] h-[2px] origin-left bg-[var(--iaa-turquoise)]"
      style={{ scaleX: scrollYProgress, width: "100%" }}
      aria-hidden
    />
  );
}
