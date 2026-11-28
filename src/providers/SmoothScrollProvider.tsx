"use client";

import { useEffect } from "react";
import Lenis from "lenis";

/**
 * Soft Lenis on desktop only. Mobile keeps native scroll (smoother + less jank).
 */
export function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 1024px)");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");

    let lenis: Lenis | null = null;
    let rafId = 0;

    const teardown = () => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = 0;
      lenis?.destroy();
      lenis = null;
      document.documentElement.classList.remove("lenis", "lenis-smooth");
    };

    const setup = () => {
      if (!desktop.matches || reduced.matches) {
        teardown();
        return;
      }
      if (lenis) return;

      document.documentElement.classList.add("lenis", "lenis-smooth");
      lenis = new Lenis({
        duration: 1.05,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        touchMultiplier: 1.2,
        wheelMultiplier: 0.95,
      });

      const tick = (time: number) => {
        lenis?.raf(time);
        rafId = requestAnimationFrame(tick);
      };
      rafId = requestAnimationFrame(tick);
    };

    setup();
    desktop.addEventListener("change", setup);
    reduced.addEventListener("change", setup);

    return () => {
      desktop.removeEventListener("change", setup);
      reduced.removeEventListener("change", setup);
      teardown();
    };
  }, []);

  return <>{children}</>;
}
