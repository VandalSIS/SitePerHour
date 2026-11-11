"use client";

import type { ReactNode } from "react";

type TiltCardProps = {
  children: ReactNode;
  className?: string;
  maxTilt?: number;
};

/** Pass-through for now — mouse-tilt caused jank on lower-end devices. */
export default function TiltCard({
  children,
  className = "",
}: TiltCardProps) {
  return <div className={className}>{children}</div>;
}
