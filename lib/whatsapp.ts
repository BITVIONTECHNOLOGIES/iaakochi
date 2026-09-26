import { site, whatsappMessages, type WhatsAppKey } from "@/data/site";

export function whatsappUrl(key: WhatsAppKey = "general") {
  const text = encodeURIComponent(whatsappMessages[key]);
  return `https://wa.me/${site.whatsappNumber}?text=${text}`;
}

export const ADDRESS_SINGLE = site.addressLines.join(" ");

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS_SINGLE)}`;

/** Embeddable Google Maps view (no API key required) */
export const MAPS_EMBED_URL = `https://maps.google.com/maps?q=${encodeURIComponent(ADDRESS_SINGLE)}&z=16&hl=en&output=embed`;
