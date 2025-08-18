import { useEffect, useRef, useState } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

const SplineSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  const [showSpline, setShowSpline] = useState(false);

  useEffect(() => {
    // Don't load Spline on mobile devices to improve performance
    if (isMobile) {
      return;
    }

    // Add a small delay to ensure the component is mounted
    const timer = setTimeout(() => {
      setShowSpline(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, [isMobile]);

  useEffect(() => {
    if (!showSpline || isMobile) return;

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
      if (viewer.parentNode) {
        viewer.remove();
      }
    };
  }, [showSpline, isMobile]);

  return (
    <section ref={sectionRef} className="relative h-[80vh] w-full overflow-hidden bg-secondary">
      {isMobile ? (
        // Mobile-optimized fallback content
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/20 via-secondary to-primary/10">
          <div className="text-center text-white/90 p-8">
            <div className="w-32 h-32 mx-auto mb-6 bg-primary/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/10">
              <svg 
                className="w-16 h-16 text-primary animate-pulse" 
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4">Interactive 3D Experience</h3>
            <p className="text-white/80 max-w-md mx-auto leading-relaxed">
              For the best interactive 3D experience, please visit this site on a desktop or tablet device.
            </p>
          </div>
        </div>
      ) : (
        <>
          <div className="absolute inset-0 spline-container" />
          
          {/* Loading indicator for desktop */}
          {!showSpline && (
            <div className="absolute inset-0 flex items-center justify-center bg-secondary">
              <div className="text-center text-white/70">
                <div className="w-16 h-16 mx-auto mb-4 border-4 border-primary/30 border-t-primary rounded-full animate-spin"></div>
                <p className="text-lg font-medium">Loading 3D Experience...</p>
              </div>
            </div>
          )}
          
          {/* Instructions overlay - only show on desktop when spline is loaded */}
          {showSpline && (
            <div className="absolute bottom-8 left-8 z-10 bg-black/30 backdrop-blur-sm rounded-lg p-4 max-w-xs text-white/90">
              <div className="flex flex-col gap-2">
                <p className="text-sm font-medium">How to interact:</p>
                <ul className="text-xs space-y-1 text-white/80">
                  <li>• Click and drag to rotate view</li>
                  <li>• Scroll to zoom in/out</li>
                  <li>• Double click to focus</li>
                  <li>• Right click to pan</li>
                </ul>
              </div>
            </div>
          )}
        </>
      )}
    </section>
  );
};

export default SplineSection; 