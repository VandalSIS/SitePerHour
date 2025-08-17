// Performance optimization utilities for better caching and memory management

// Service Worker registration for caching
export const registerServiceWorker = () => {
  if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js')
        .then((registration) => {
          console.log('SW registered: ', registration);
        })
        .catch((registrationError) => {
          console.log('SW registration failed: ', registrationError);
        });
    });
  }
};

// Image lazy loading and optimization
export const optimizeImage = (src: string, options: {
  width?: number;
  height?: number;
  quality?: number;
  format?: 'webp' | 'avif' | 'jpg' | 'png';
} = {}) => {
  const { width, height, quality = 80, format = 'webp' } = options;
  
  // If using a service like Cloudinary or similar
  if (src.includes('cloudinary.com') || src.includes('imagekit.io')) {
    let optimizedUrl = src;
    
    if (width) optimizedUrl += `/w_${width}`;
    if (height) optimizedUrl += `/h_${height}`;
    optimizedUrl += `/q_${quality}`;
    optimizedUrl += `/f_${format}`;
    
    return optimizedUrl;
  }
  
  return src;
};

// Memory management for components
export class MemoryManager {
  private static cache = new Map<string, any>();
  private static maxCacheSize = 50; // Maximum number of cached items

  static set(key: string, value: any, ttl = 5 * 60 * 1000) { // 5 minutes default TTL
    // Clean up old entries if cache is full
    if (this.cache.size >= this.maxCacheSize) {
      const firstKey = this.cache.keys().next().value;
      this.cache.delete(firstKey);
    }

    this.cache.set(key, {
      value,
      timestamp: Date.now(),
      ttl
    });
  }

  static get(key: string) {
    const item = this.cache.get(key);
    
    if (!item) return null;
    
    // Check if item has expired
    if (Date.now() - item.timestamp > item.ttl) {
      this.cache.delete(key);
      return null;
    }
    
    return item.value;
  }

  static clear() {
    this.cache.clear();
  }

  static size() {
    return this.cache.size;
  }
}

// Local Storage with expiration
export class StorageManager {
  static set(key: string, value: any, ttl = 24 * 60 * 60 * 1000) { // 24 hours default
    const item = {
      value,
      timestamp: Date.now(),
      ttl
    };
    
    try {
      localStorage.setItem(key, JSON.stringify(item));
    } catch (error) {
      console.warn('LocalStorage is full, clearing old items');
      this.clearExpired();
      try {
        localStorage.setItem(key, JSON.stringify(item));
      } catch (e) {
        console.error('Could not store item in localStorage:', e);
      }
    }
  }

  static get(key: string) {
    try {
      const itemStr = localStorage.getItem(key);
      if (!itemStr) return null;

      const item = JSON.parse(itemStr);
      
      // Check if item has expired
      if (Date.now() - item.timestamp > item.ttl) {
        localStorage.removeItem(key);
        return null;
      }
      
      return item.value;
    } catch (error) {
      console.error('Error reading from localStorage:', error);
      return null;
    }
  }

  static remove(key: string) {
    localStorage.removeItem(key);
  }

  static clearExpired() {
    const keysToRemove: string[] = [];
    
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (!key) continue;
      
      try {
        const itemStr = localStorage.getItem(key);
        if (!itemStr) continue;
        
        const item = JSON.parse(itemStr);
        
        // If item has timestamp and is expired
        if (item.timestamp && Date.now() - item.timestamp > item.ttl) {
          keysToRemove.push(key);
        }
      } catch (error) {
        // If we can't parse, it might be old data, remove it
        keysToRemove.push(key);
      }
    }
    
    keysToRemove.forEach(key => localStorage.removeItem(key));
  }
}

// Resource preloading
export const preloadResources = (resources: string[]) => {
  resources.forEach(resource => {
    const link = document.createElement('link');
    
    if (resource.endsWith('.css')) {
      link.rel = 'preload';
      link.as = 'style';
      link.href = resource;
    } else if (resource.endsWith('.js')) {
      link.rel = 'preload';
      link.as = 'script';
      link.href = resource;
    } else if (resource.match(/\.(jpg|jpeg|png|webp|avif)$/)) {
      link.rel = 'preload';
      link.as = 'image';
      link.href = resource;
    } else if (resource.endsWith('.woff2') || resource.endsWith('.woff')) {
      link.rel = 'preload';
      link.as = 'font';
      link.type = 'font/woff2';
      link.href = resource;
      link.crossOrigin = 'anonymous';
    }
    
    document.head.appendChild(link);
  });
};

// Intersection Observer for lazy loading
export const createLazyLoader = (callback: (entry: IntersectionObserverEntry) => void) => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          callback(entry);
          observer.unobserve(entry.target);
        }
      });
    },
    {
      rootMargin: '50px 0px',
      threshold: 0.1
    }
  );
  
  return observer;
};

// Debounce utility for performance
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout;
  
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

// Throttle utility for performance
export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean;
  
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
};

// Memory usage monitoring
export const getMemoryUsage = () => {
  if ('memory' in performance) {
    const memory = (performance as any).memory;
    return {
      used: Math.round(memory.usedJSHeapSize / 1048576), // MB
      total: Math.round(memory.totalJSHeapSize / 1048576), // MB
      limit: Math.round(memory.jsHeapSizeLimit / 1048576) // MB
    };
  }
  return null;
};

// Initialize performance optimizations
export const initPerformanceOptimizations = () => {
  // Register service worker
  registerServiceWorker();
  
  // Clean up expired localStorage items on app start
  StorageManager.clearExpired();
  
  // Preload critical resources
  preloadResources([
    '/images/download.jpeg',
    '/hero-bg.svg',
    '/fonts/helvetiker_regular.typeface.json'
  ]);
  
  // Log memory usage in development
  if (process.env.NODE_ENV === 'development') {
    const memoryUsage = getMemoryUsage();
    if (memoryUsage) {
      console.log('Memory Usage:', memoryUsage);
    }
  }
};

// Critical resource hints for better loading
export const addResourceHints = () => {
  const hints = [
    { rel: 'dns-prefetch', href: '//fonts.googleapis.com' },
    { rel: 'dns-prefetch', href: '//cdn.jsdelivr.net' },
    { rel: 'dns-prefetch', href: '//unpkg.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true }
  ];
  
  hints.forEach(hint => {
    const link = document.createElement('link');
    link.rel = hint.rel;
    link.href = hint.href;
    if (hint.crossorigin) link.crossOrigin = 'anonymous';
    document.head.appendChild(link);
  });
};
