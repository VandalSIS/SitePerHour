"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type DisplayHeadingProps = {
  children: string;
  as?: "h1" | "h2" | "h3";
  size?: "hero" | "section" | "card";
  className?: string;
  gradient?: boolean;
  uppercase?: boolean;
  align?: "left" | "center";
  revealOnScroll?: boolean;
};

const sizeClasses = {
  hero: "display-hero",
  section: "display-section",
  card: "font-heading font-bold text-2xl sm:text-3xl leading-[1.2] tracking-[-0.03em] py-1",
};

const wordVariants = {
  hidden: { opacity: 0, y: 36 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

export default function DisplayHeading({
  children,
  as = "h2",
  size = "section",
  className = "",
  gradient = false,
  uppercase = true,
  align = "left",
  revealOnScroll = true,
}: DisplayHeadingProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const words = children.split(" ");
  const Tag = as;

  const alignClass = align === "center" ? "text-center" : "text-left";

  return (
    <div ref={ref} className={`${alignClass} ${className}`}>
      <Tag
        className={`${sizeClasses[size]} ${uppercase && size !== "card" ? "uppercase" : ""}`}
      >
        {words.map((word, i) => (
          <motion.span
            key={`${word}-${i}`}
            custom={i}
            initial="hidden"
            animate={revealOnScroll ? (isInView ? "visible" : "hidden") : "visible"}
            variants={wordVariants}
            className={`inline-block mr-[0.26em] last:mr-0 overflow-visible ${
              gradient ? "text-gradient-vivid" : ""
            }`}
          >
            {word}
          </motion.span>
        ))}
      </Tag>
    </div>
  );
}
