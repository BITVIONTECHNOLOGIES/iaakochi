"use client";

import { whatsappUrl } from "@/lib/whatsapp";

export function FloatingWhatsApp() {
  return (
    <a
      href={whatsappUrl("general")}
      target="_blank"
      rel="noreferrer"
      aria-label="Talk with IAA on WhatsApp"
      className="fixed right-5 bottom-5 z-40 flex items-center gap-2.5 rounded-full border border-white/10 bg-zinc-950/90 px-3 py-2 text-[0.62rem] tracking-[0.16em] text-white uppercase shadow-2xl shadow-black/40 backdrop-blur-md transition hover:scale-[1.03] sm:right-6 sm:bottom-6"
    >
      <span
        className="grid h-8 w-8 place-items-center rounded-full"
        style={{
          background: "radial-gradient(circle at 35% 30%, #6ee7b7, #37d7ab 70%)",
          boxShadow: "0 0 12px rgba(55,215,171,0.45)",
        }}
        aria-hidden
      >
        <WhatsAppIcon />
      </span>
      <span className="hidden pr-2 md:inline">Talk with IAA</span>
    </a>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12.04 2C6.58 2 2.15 6.4 2.15 11.82c0 1.96.53 3.8 1.54 5.44L2 22l4.9-1.6a10.1 10.1 0 0 0 5.14 1.4h.01c5.46 0 9.89-4.4 9.89-9.82C21.94 6.4 17.5 2 12.04 2Z"
        fill="#042018"
      />
      <path
        d="M17.2 14.5c-.24-.12-1.42-.7-1.64-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1.02-.37-1.94-1.19-.72-.64-1.2-1.42-1.34-1.66-.14-.24-.02-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.48-.4-.4-.54-.4h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2 0 1.18.86 2.32.98 2.48.12.16 1.7 2.6 4.12 3.64.58.24 1.02.4 1.38.5.58.18 1.1.16 1.52.1.46-.07 1.42-.58 1.62-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28Z"
        fill="#6ee7b7"
      />
    </svg>
  );
}
