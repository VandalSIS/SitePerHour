import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, MousePointer2 } from "lucide-react";
import { useTranslation } from "react-i18next";

const SPLINE_SCRIPT_SRC = "https://unpkg.com/@splinetool/viewer@1.9.96/build/spline-viewer.js";

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () =>
      setIsMobile(window.matchMedia("(max-width: 768px)").matches);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  return isMobile;
};

// Loads the Spline viewer custom element on demand (returns existing promise if already requested)
let splineScriptPromise: Promise<void> | null = null;
const loadSplineScript = () => {
  if (splineScriptPromise) return splineScriptPromise;
  if (typeof window === "undefined") return Promise.resolve();
  if (customElements && customElements.get("spline-viewer")) return Promise.resolve();

  splineScriptPromise = new Promise<void>((resolve, reject) => {
    const existing = document.querySelector<HTMLScriptElement>(
      `script[src="${SPLINE_SCRIPT_SRC}"]`
    );
    if (existing) {
      existing.addEventListener("load", () => resolve());
      existing.addEventListener("error", () => reject(new Error("Spline load failed")));
      return;
    }
    const script = document.createElement("script");
    script.type = "module";
    script.src = SPLINE_SCRIPT_SRC;
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("Spline load failed"));
    document.head.appendChild(script);
  });
  return splineScriptPromise;
};

const SplineSection = () => {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const isMobile = useIsMobile();

  // Lazy mount only when section is near viewport — avoids scroll lag everywhere
  useEffect(() => {
    if (!sectionRef.current || isMobile) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );
    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [isMobile]);

  useEffect(() => {
    if (!isInView || isMobile) return;
    const container = sectionRef.current?.querySelector(".spline-container");
    if (!container) return;

    let cancelled = false;
    let viewer: HTMLElement | null = null;
    let fallbackTimer = 0;
    const handleLoad = () => setIsLoaded(true);

    loadSplineScript()
      .then(() => {
        if (cancelled) return;
        viewer = document.createElement("spline-viewer") as HTMLElement;
        viewer.setAttribute("url", "https://prod.spline.design/vx1RgeVjLhe8q1H4/scene.splinecode");
        viewer.style.width = "100%";
        viewer.style.height = "100%";
        viewer.addEventListener("load", handleLoad);
        viewer.addEventListener("load-complete", handleLoad);
        fallbackTimer = window.setTimeout(handleLoad, 4000);
        container.appendChild(viewer);
      })
      .catch(() => {
        // Network failure or blocked — just keep the loader
      });

    return () => {
      cancelled = true;
      if (fallbackTimer) window.clearTimeout(fallbackTimer);
      if (viewer) {
        viewer.removeEventListener("load", handleLoad);
        viewer.removeEventListener("load-complete", handleLoad);
        viewer.remove();
      }
    };
  }, [isInView, isMobile]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-secondary"
      style={{ contain: "layout paint" }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="container-custom pt-16 pb-8 text-center relative z-10"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 rounded-full border border-primary/30 bg-primary/10">
          <Sparkles size={14} className="text-primary" />
          <span className="text-sm text-primary font-medium">3D Experience</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-bold mb-3 tracking-tight">
          Interactive 3D Scene
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Built with Spline. Just one example of what we can ship for your brand.
        </p>
      </motion.div>

      {/* On mobile: lightweight static fallback (no spline, prevents jank) */}
      {isMobile ? (
        <div className="relative h-[40vh] min-h-[320px] mx-4 mb-12 rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 via-purple-500/20 to-background border border-white/10 flex items-center justify-center">
          <div className="absolute inset-0 bg-[url('/hero-bg.svg')] bg-cover bg-center opacity-30" />
          <div className="text-center px-6 z-10">
            <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-purple-500 blur-2xl opacity-60" />
            <p className="text-white/80 text-sm">Open on desktop for the full 3D interactive experience</p>
          </div>
        </div>
      ) : (
        <div className="relative h-[70vh] min-h-[500px]">
          {/* Loader sits BEHIND the spline-viewer so the scene is visible as soon as it renders */}
          <div
            className={`absolute inset-0 flex items-center justify-center bg-gradient-to-br from-background via-secondary to-background transition-opacity duration-700 pointer-events-none ${
              isLoaded ? "opacity-0" : "opacity-100"
            }`}
          >
            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 border-2 border-primary border-t-transparent rounded-full animate-spin" />
              <p className="text-muted-foreground text-sm">Loading 3D scene...</p>
            </div>
          </div>

          <div className="absolute inset-0 spline-container z-[1]" />

          <div className="absolute bottom-6 left-6 z-10 bg-black/40 backdrop-blur-md rounded-xl p-4 max-w-xs text-white/90 border border-white/10 hidden md:block pointer-events-none">
            <div className="flex items-center gap-2 mb-2">
              <MousePointer2 size={14} className="text-primary" />
              <p className="text-sm font-medium">How to interact</p>
            </div>
            <ul className="text-xs space-y-1 text-white/70">
              <li>• Drag to rotate</li>
              <li>• Scroll to zoom</li>
              <li>• Double click to focus</li>
            </ul>
          </div>
        </div>
      )}
    </section>
  );
};

export default SplineSection;
