import { useState, useRef, ReactNode, useEffect } from 'react';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface ProjectCard3DProps {
  title: string;
  category: string;
  image: string;
  description: string;
  url: string;
  buttonText?: string;
}

const ProjectCard3D = ({ title, category, image, description, url, buttonText }: ProjectCard3DProps) => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [barActive, setBarActive] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const rotateY = ((e.clientX - centerX) / (rect.width / 2)) * 15;
    const rotateX = -((e.clientY - centerY) / (rect.height / 2)) * 15;
    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
    setBarActive(false);
  };

  const handleMouseEnter = () => {
    setBarActive(true);
  };

  const handleTouchStart = () => {
    setBarActive(true);
  };
  const handleTouchEnd = () => {
    setBarActive(false);
  };

  return (
    <div 
      ref={cardRef}
      className="group perspective-1000"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <Card 
        className="bg-card overflow-hidden border-none group transform-gpu preserve-3d"
        style={{
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
          transition: 'transform 0.1s ease-out'
        }}
      >
        <div className="h-60 overflow-hidden bg-muted relative">
          <div 
            className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
            style={{ backgroundImage: `url(${image})` }}
          >
            <div className="w-full h-full bg-black/50 flex flex-col justify-end p-6 transform-gpu preserve-3d" style={{ transform: 'translateZ(20px)' }}>
              <p className="text-primary text-sm font-medium mb-1">{category}</p>
              <h3 className="text-xl font-bold mb-2">{title}</h3>
              <p className="text-white/70 text-sm">{description}</p>
            </div>
          </div>
        </div>
        <CardFooter ref={footerRef} className="p-4 bg-card transform-gpu preserve-3d relative overflow-hidden" style={{ transform: 'translateZ(30px)' }}>
          {/* Animated gradient bar */}
          <div 
            className="absolute left-0 top-0 h-full z-0 transition-all duration-500"
            style={{
              width: barActive ? '100%' : '0%',
              background: 'linear-gradient(90deg,rgba(51, 63, 233, 0.47) 0%,rgb(116, 72, 236) 100%)',
              opacity: 0.4
            }}
            data-gradient-bar
          />
          <a 
            href={url} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="ml-auto relative z-10"
          >
            <Button variant="ghost" className="flex items-center gap-2 hover:bg-white/10 hover:border hover:border-primary hover:text-primary transition-colors">
              {buttonText || "View Details"} <ArrowRight size={16} />
            </Button>
          </a>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ProjectCard3D; 