"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export function HashScroll() {
  const pathname = usePathname();

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const link = (event.target as Element | null)?.closest("a");
      if (!link) return;
      const href = link.getAttribute("href") ?? "";
      if (!href.endsWith("#enquiry")) return;
      if (window.location.pathname !== "/contact") return;
      event.preventDefault();
      document.getElementById("enquiry")?.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.replaceState(null, "", "/contact#enquiry");
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  useEffect(() => {
    let tries = 0;
    let timer = 0;

    const go = () => {
      const id = window.location.hash.replace("#", "");
      if (!id) return;
      const el = document.getElementById(id);
      if (!el) {
        if (tries < 12) {
          tries += 1;
          timer = window.setTimeout(go, 50);
        }
        return;
      }
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    timer = window.setTimeout(go, 40);
    window.addEventListener("hashchange", go);
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("hashchange", go);
    };
  }, [pathname]);

  return null;
}
