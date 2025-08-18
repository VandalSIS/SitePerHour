import { useEffect, useRef } from 'react';

const ParticlesBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    // Particle class
    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
      angle: number;
      angleSpeed: number;
      amplitude: number;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1; // Larger particles
        this.speedX = Math.random() * 0.3 - 0.15; // Slightly faster base speed
        this.speedY = Math.random() * 0.3 - 0.15;
        this.opacity = Math.random() * 0.5 + 0.3; // More visible
        this.angle = Math.random() * Math.PI * 2;
        this.angleSpeed = Math.random() * 0.02 - 0.01; // Rotation speed
        this.amplitude = Math.random() * 1.5 + 0.5; // Wave motion amplitude
      }

      update() {
        // Wave motion
        this.angle += this.angleSpeed;
        const waveX = Math.sin(this.angle) * this.amplitude;
        const waveY = Math.cos(this.angle) * this.amplitude;

        this.x += this.speedX + waveX * 0.1;
        this.y += this.speedY + waveY * 0.1;

        // Screen wrapping with smooth transition
        if (this.x < -50) this.x = canvas.width + 50;
        if (this.x > canvas.width + 50) this.x = -50;
        if (this.y < -50) this.y = canvas.height + 50;
        if (this.y > canvas.height + 50) this.y = -50;

        // Pulse size
        this.size = (Math.sin(this.angle) * 0.5 + 1) * (Math.random() * 3 + 1);
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
        ctx.fill();

        // Optional: Add glow effect
        ctx.shadowBlur = 15;
        ctx.shadowColor = 'rgba(255, 255, 255, 0.3)';
      }
    }

    // Create particles - more particles for larger screens
    const particles: Particle[] = [];
    const baseCount = 30;
    const screenSizeFactor = Math.min(window.innerWidth, window.innerHeight) / 1000;
    const particleCount = Math.floor(baseCount * screenSizeFactor) + baseCount;
    
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    // Animation loop
    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', setCanvasSize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none opacity-70"
      style={{ background: 'transparent' }}
    />
  );
};

export default ParticlesBackground; 