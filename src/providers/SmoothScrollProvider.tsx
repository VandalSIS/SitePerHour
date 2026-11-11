"use client";

/**
 * Smooth scroll temporarily disabled — Lenis + GSAP ticker was contributing
 * to main-thread freeze with pinned Process + many client animations.
 * Re-enable later with a lighter config once the page is stable.
 */
export function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
