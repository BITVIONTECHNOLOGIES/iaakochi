"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

export function PageLoader() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("iaa-entered")) return;
    setShow(true);
    const t = window.setTimeout(() => {
      sessionStorage.setItem("iaa-entered", "1");
      setShow(false);
    }, 980);
    return () => window.clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[90] flex flex-col items-center justify-center bg-[var(--iaa-ivory)]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <img
            src="/brand/iaa-logo.png"
            alt=""
            className="h-16 w-auto object-contain"
            width={180}
            height={56}
          />
          <motion.p
            className="micro mt-8"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.28, duration: 0.5 }}
          >
            Bound to Educate
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
