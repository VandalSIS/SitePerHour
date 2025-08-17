import { useState, useEffect, useRef } from 'react';
import { createLazyLoader, optimizeImage } from '@/utils/performance';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  quality?: number;
  format?: 'webp' | 'avif' | 'jpg' | 'png';
  placeholder?: string;
  loading?: 'lazy' | 'eager';
}

const LazyImage = ({
  src,
  alt,
  className = '',
  width,
  height,
  quality = 80,
  format = 'webp',
  placeholder = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjBmMGYwIi8+PC9zdmc+',
  loading = 'lazy'
}: LazyImageProps) => {
  const [imageSrc, setImageSrc] = useState(placeholder);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (loading === 'eager') {
      setIsInView(true);
      return;
    }

    const observer = createLazyLoader((entry) => {
      setIsInView(true);
    });

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, [loading]);

  useEffect(() => {
    if (isInView && !isLoaded) {
      const optimizedSrc = optimizeImage(src, { width, height, quality, format });
      
      const img = new Image();
      img.onload = () => {
        setImageSrc(optimizedSrc);
        setIsLoaded(true);
      };
      img.onerror = () => {
        setImageSrc(src); // Fallback to original if optimization fails
        setIsLoaded(true);
      };
      img.src = optimizedSrc;
    }
  }, [isInView, isLoaded, src, width, height, quality, format]);

  return (
    <img
      ref={imgRef}
      src={imageSrc}
      alt={alt}
      className={`transition-opacity duration-300 ${
        isLoaded ? 'opacity-100' : 'opacity-50'
      } ${className}`}
      loading={loading}
      decoding="async"
      width={width}
      height={height}
    />
  );
};

export default LazyImage;
