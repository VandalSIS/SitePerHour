"use client";

import type { ReactNode } from "react";
import { useRef } from "react";

type TiltCardProps = {
  children: ReactNode;
  className?: string;
  maxTilt?: number;
};

/** Light mouse tilt on fine pointers only — skips touch / coarse devices. */
export default function TiltCard({
  children,
  className = "",
  maxTilt = 5,
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  const reset = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "";
  };

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `perspective(900px) rotateY(${x * maxTilt * 2}deg) rotateX(${-y * maxTilt * 2}deg) translateY(-3px)`;
  };

  return (
    <div
      ref={ref}
      className={`transition-transform duration-300 ease-out will-change-transform ${className}`}
      style={{ transformStyle: "preserve-3d" }}
      onMouseMove={onMove}
      onMouseLeave={reset}
    >
      {children}
    </div>
  );
}
