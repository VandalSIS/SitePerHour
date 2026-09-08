"use client";

import { motion } from "framer-motion";
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
      <motion.div
        initial={{ opacity: 0, x: isCenter ? 0 : -12 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.45 }}
        className={`inline-flex items-center gap-2 px-3 py-1.5 mb-6 md:mb-8 rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-sm ${
          isCenter ? "mx-auto" : ""
        }`}
      >
        <span className="label-mono">{badge}</span>
      </motion.div>

      <DisplayHeading
        as="h2"
        size="section"
        gradient={titleGradient}
        align={align}
      >
        {title}
      </DisplayHeading>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.12 }}
          className={`body-lead mt-5 md:mt-6 max-w-2xl ${isCenter ? "mx-auto" : ""}`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
