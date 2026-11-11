import { ReactNode } from "react";

interface SectionLayoutProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

/** Lightweight section wrapper — no per-section canvas (was freezing mobile/desktop). */
const SectionLayout = ({ children, className = "", id }: SectionLayoutProps) => {
  return (
    <section id={id} className={`relative ${className}`}>
      {children}
    </section>
  );
};

export default SectionLayout;
