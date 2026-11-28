type HeroLine = {
  text: string;
  gradient?: boolean;
};

type HeroHeadlineProps = {
  lines: HeroLine[];
};

/** CSS entrance — keeps first paint light, still feels alive on mobile. */
export default function HeroHeadline({ lines }: HeroHeadlineProps) {
  return (
    <h1 className="display-hero text-white">
      {lines.map((line, i) => (
        <span
          key={`${line.text}-${i}`}
          className={`block overflow-visible hero-enter hero-enter-delay-${i + 1} ${
            line.gradient ? "text-gradient" : ""
          }`}
        >
          {line.text}
        </span>
      ))}
    </h1>
  );
}
