import { ChevronDown, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import ParticlesBackground from "./ParticlesBackground";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY * 0.1); // Reduced scroll effect
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section 
      id="home" 
      className="min-h-screen flex flex-col items-center justify-center bg-[url('/hero-bg.svg')] bg-cover bg-center relative pt-16 overflow-hidden"
    >
      {/* Particles overlay */}
      <ParticlesBackground />

      <div 
        className="container-custom text-center max-w-4xl mx-auto relative z-10"
        style={{
          transform: `translateY(${scrollY}px)`,
          transition: 'transform 0.3s ease-out'
        }}
      >
        <p className="text-primary font-medium mb-2 animate-fade-in transition-all duration-500">
          Professional Web Development & Digital Solutions
        </p>
        <h1 
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in"
          style={{ 
            animationDelay: '0.2s',
            textShadow: '2px 2px 0 rgba(0,0,0,0.1)',
            transition: 'all 0.5s ease-out'
          }}
        >
          <span className="inline-block transition-transform duration-500">
            Transform Your Business{" "}
          </span>
          <span className="inline-block text-primary transition-transform duration-500">
            With Professional{" "}
          </span>
          <span className="inline-block transition-transform duration-500">
            Web Solutions
          </span>
        </h1>
        <p 
          className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-8 animate-fade-in"
          style={{ 
            animationDelay: '0.4s',
            transition: 'all 0.5s ease-out'
          }}
        >
          We create high-performance websites, e-commerce stores, and web applications using cutting-edge technologies like React, Node.js, and AI. From Shopify stores to custom CMS solutions, we deliver results that drive growth and success.
        </p>
        <div 
          className="flex flex-col sm:flex-row items-center gap-4 justify-center animate-fade-in"
          style={{ 
            animationDelay: '0.6s',
            transition: 'all 0.5s ease-out'
          }}
        >
          
          <a href="/pricing/medium">
            <Button 
              size="lg" 
              className="w-full sm:w-auto bg-primary hover:bg-primary/80 transition-all duration-300"
            >
              Get Started Today
            </Button>
          </a>
          <a href="#contact">
            <Button 
              size="lg" 
              variant="outline" 
              className="w-full sm:w-auto border-white/20 hover:bg-white/10 transition-all duration-300"
            >
              Free Consultation
            </Button>
          </a>
          <a href="#projects">
            <Button 
              size="lg" 
              variant="outline"
              className="w-full sm:w-auto border-white/20 hover:bg-white/10 transition-all duration-300"
            >
              View Portfolio
            </Button>
          </a>
          <a href="https://github.com/JeremyHustlin" target="_blank" rel="noopener noreferrer">
            <Button 
              size="lg" 
              variant="outline"
              className="w-full sm:w-auto flex items-center gap-2 border-white/20 hover:bg-white/10 transition-all duration-300"
            >
              <Github size={20} />
              GitHub Profile
            </Button>
          </a>
        </div>
      </div>

      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10"
        style={{
          transition: 'transform 0.3s ease-out'
        }}
      >
        <a href="#about" className="text-white hover:text-primary transition-colors duration-300">
          <ChevronDown size={24} />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
