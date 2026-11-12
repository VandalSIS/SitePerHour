type HeroLine = {
  text: string;
  gradient?: boolean;
};

type HeroHeadlineProps = {
  lines: HeroLine[];
};

/** CSS-only headline — no Framer on first paint (faster mobile LCP) */
export default function HeroHeadline({ lines }: HeroHeadlineProps) {
  return (
    <h1 className="display-hero text-white">
      {lines.map((line, i) => (
        <span
          key={`${line.text}-${i}`}
          className={`block overflow-visible ${
            line.gradient ? "text-gradient" : ""
          }`}
        >
          {line.text}
        </span>
      ))}
    </h1>
  );
}
