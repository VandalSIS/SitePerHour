"use client";

import DisplayHeading from "./DisplayHeading";

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
      <div
        className={`inline-flex items-center gap-2 px-3 py-1.5 mb-6 md:mb-8 rounded-full border border-white/10 bg-white/[0.04] ${
          isCenter ? "mx-auto" : ""
        }`}
      >
        <span className="label-mono">{badge}</span>
      </div>

      <DisplayHeading as="h2" size="section" gradient={titleGradient} align={align}>
        {title}
      </DisplayHeading>

      {subtitle && (
        <p
          className={`body-lead mt-5 md:mt-6 max-w-2xl ${isCenter ? "mx-auto" : ""}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
