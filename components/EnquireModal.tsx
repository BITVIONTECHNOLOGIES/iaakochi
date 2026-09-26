"use client";

import { AnimatePresence, motion } from "motion/react";
import { EnquiryForm } from "@/components/EnquiryForm";
import { site } from "@/data/site";
import { whatsappUrl } from "@/lib/whatsapp";

export function EnquireModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-[70] flex justify-end">
          <motion.button
            type="button"
            aria-label="Close enquiry panel"
            className="absolute inset-0 bg-black/55 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.aside
            role="dialog"
            aria-modal="true"
            aria-labelledby="enquire-title"
            className="relative flex h-full w-full max-w-md flex-col border-l border-white/10 bg-zinc-950 text-[var(--iaa-ivory)] shadow-2xl"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-start justify-between border-b border-white/10 px-6 py-6">
              <div>
                <p className="text-[0.65rem] tracking-[0.22em] text-[var(--iaa-turquoise)] uppercase">
                  {site.shortName}
                </p>
                <h2 id="enquire-title" className="editorial-h mt-2 text-3xl">
                  Begin a conversation.
                </h2>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="grid h-9 w-9 place-items-center rounded-full border border-white/15 text-sm text-white/70 transition hover:border-[var(--iaa-turquoise)] hover:text-white"
                aria-label="Close"
              >
                ✕
              </button>
            </div>
            <div className="flex-1 overflow-y-auto px-6 py-6">
              <p className="mb-8 text-sm leading-relaxed text-white/60">
                Share your background and the program you are considering. The IAA team will respond
                with course guidance.
              </p>
              <EnquiryForm variant="dark" />
              <a
                href={whatsappUrl("general")}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex text-[0.68rem] tracking-[0.18em] text-[var(--iaa-turquoise)] uppercase"
              >
                Prefer WhatsApp →
              </a>
            </div>
          </motion.aside>
        </div>
      )}
    </AnimatePresence>
  );
}
