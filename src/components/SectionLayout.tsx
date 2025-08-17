import { ReactNode } from 'react';
import ParticlesBackground from './ParticlesBackground';

interface SectionLayoutProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

const SectionLayout = ({ children, className = "", id }: SectionLayoutProps) => {
  return (
    <section id={id} className={`relative overflow-hidden ${className}`}>
      <ParticlesBackground />
      <div className="relative z-10">
        {children}
      </div>
    </section>
  );
};

export default SectionLayout; 