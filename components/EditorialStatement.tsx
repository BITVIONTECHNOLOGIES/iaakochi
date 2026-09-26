"use client";

import { motion } from "motion/react";

export function EditorialStatement() {
  return (
    <section className="relative overflow-hidden py-[var(--space-dramatic)]">
      <div className="thread hidden md:block" />
      <div className="frame">
        <motion.h2
          className="editorial-h mx-auto max-w-[16ch] text-center text-[clamp(3rem,7.5vw,6.8rem)]"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          Education
          <br />
          beyond
          <br />
          certification.
        </motion.h2>
        <motion.p
          className="mx-auto mt-10 max-w-[42ch] text-center leading-relaxed text-[var(--iaa-muted)]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          IAA is built to produce confident, clinic-ready aesthetics professionals — not simply certificate holders.
        </motion.p>
      </div>
    </section>
  );
}
