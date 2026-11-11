"use client";

import { useEffect } from "react";

/**
 * Clears stale Vite-era service workers that can freeze the Next.js site
 * with an old cached shell. Safe to keep permanently.
 */
export default function CacheCleanup() {
  useEffect(() => {
    if (typeof window === "undefined" || !("serviceWorker" in navigator)) return;

    navigator.serviceWorker.getRegistrations().then((regs) => {
      regs.forEach((reg) => {
        reg.unregister().catch(() => {});
      });
    });

    if ("caches" in window) {
      caches.keys().then((keys) => {
        keys
          .filter((k) => k.startsWith("siteperhour-"))
          .forEach((k) => caches.delete(k).catch(() => {}));
      });
    }
  }, []);

  return null;
}
