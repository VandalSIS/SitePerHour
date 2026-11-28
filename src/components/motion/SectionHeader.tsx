"use client";

import DisplayHeading from "./DisplayHeading";
import Reveal from "./Reveal";

type SectionHeaderProps = {
  badge: string;
  title: string;
  subtitle?: string;
  titleGradient?: boolean;
  align?: "left" | "center";
};

export default function SectionHeader({
  badge,
  title,
  subtitle,
  titleGradient = false,
  align = "left",
}: SectionHeaderProps) {
  const isCenter = align === "center";

  return (
    <div
      className={`mb-14 md:mb-20 ${isCenter ? "text-center" : "text-left max-w-4xl"}`}
    >
      <Reveal y={10}>
        <div
          className={`inline-flex items-center gap-2 px-3 py-1.5 mb-6 md:mb-8 rounded-full border border-white/10 bg-white/[0.04] ${
            isCenter ? "mx-auto" : ""
          }`}
        >
          <span className="label-mono">{badge}</span>
        </div>
      </Reveal>

      <DisplayHeading as="h2" size="section" gradient={titleGradient} align={align}>
        {title}
      </DisplayHeading>

      {subtitle && (
        <Reveal delay={0.08} y={12}>
          <p
            className={`body-lead mt-5 md:mt-6 max-w-2xl ${isCenter ? "mx-auto" : ""}`}
          >
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  );
}
