"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

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
  const reduceMotion = useReducedMotion();
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const [isMobile, setIsMobile] = useState(true); // default light path for first paint
  const words = children.split(" ");
  const Tag = as;
  const alignClass = align === "center" ? "text-center" : "text-left";

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)");
    const apply = () => setIsMobile(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  const simple = reduceMotion || isMobile || !revealOnScroll;

  if (simple) {
    return (
      <div ref={ref} className={`${alignClass} ${className}`}>
        <Tag
          className={`${sizeClasses[size]} ${
            uppercase && size !== "card" ? "uppercase" : ""
          } ${gradient ? "text-gradient-vivid" : ""}`}
        >
          {children}
        </Tag>
      </div>
    );
  }

  return (
    <div ref={ref} className={`${alignClass} ${className}`}>
      <Tag
        className={`${sizeClasses[size]} ${
          uppercase && size !== "card" ? "uppercase" : ""
        }`}
      >
        {words.map((word, i) => (
          <motion.span
            key={`${word}-${i}`}
            initial={{ opacity: 0, y: 28 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
            transition={{
              delay: i * 0.04,
              duration: 0.4,
              ease: [0.22, 1, 0.36, 1],
            }}
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
