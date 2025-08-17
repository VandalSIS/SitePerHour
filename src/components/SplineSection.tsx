import { useEffect, useRef } from 'react';

const SplineSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Create and append the spline-viewer element
    const viewer = document.createElement('spline-viewer');
    viewer.setAttribute('url', 'https://prod.spline.design/vx1RgeVjLhe8q1H4/scene.splinecode');
    viewer.style.width = '100%';
    viewer.style.height = '100%';
    
    if (sectionRef.current) {
      const container = sectionRef.current.querySelector('.spline-container');
      if (container) {
        container.appendChild(viewer);
      }
    }

    return () => {
      // Cleanup
      viewer.remove();
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative h-[80vh] w-full overflow-hidden bg-secondary">
      <div className="absolute inset-0 spline-container" />
      
      {/* Instructions overlay */}
      <div className="absolute bottom-8 left-8 z-10 bg-black/30 backdrop-blur-sm rounded-lg p-4 max-w-xs text-white/90">
        <div className="flex flex-col gap-2">
          <p className="text-sm font-medium">How to interact:</p>
          <ul className="text-xs space-y-1 text-white/80">
            <li>• Click and drag to rotate view</li>
            <li>• Scroll to zoom in/out</li>
            <li>• Double click to focus</li>
            <li>• Right click to pans</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SplineSection; 