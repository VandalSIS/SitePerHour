import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { MemoryManager } from '@/utils/performance';

interface OptimizedQueryOptions<T> extends Omit<UseQueryOptions<T>, 'queryKey' | 'queryFn'> {
  queryKey: string[];
  queryFn: () => Promise<T>;
  cacheTime?: number;
  staleTime?: number;
  useMemoryCache?: boolean;
}

export const useOptimizedQuery = <T>({
  queryKey,
  queryFn,
  cacheTime = 10 * 60 * 1000, // 10 minutes
  staleTime = 5 * 60 * 1000,   // 5 minutes
  useMemoryCache = true,
  ...options
}: OptimizedQueryOptions<T>) => {
  const cacheKey = queryKey.join('-');

  const optimizedQueryFn = async (): Promise<T> => {
    // Check memory cache first if enabled
    if (useMemoryCache) {
      const cachedData = MemoryManager.get(cacheKey);
      if (cachedData) {
        console.log('Data served from memory cache:', cacheKey);
        return cachedData;
      }
    }

    // Fetch from network
    const data = await queryFn();
    
    // Store in memory cache if enabled
    if (useMemoryCache) {
      MemoryManager.set(cacheKey, data, staleTime);
    }

    return data;
  };

  return useQuery({
    queryKey,
    queryFn: optimizedQueryFn,
    staleTime,
    gcTime: cacheTime,
    refetchOnWindowFocus: false,
    refetchOnReconnect: 'always',
    retry: (failureCount, error) => {
      // Don't retry on 4xx errors
      if (error && typeof error === 'object' && 'status' in error) {
        const status = (error as any).status;
        if (status >= 400 && status < 500) return false;
      }
      return failureCount < 3;
    },
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
    ...options,
  });
};

// Hook for optimized mutations with offline support
export const useOptimizedMutation = <T, V>(
  mutationFn: (variables: V) => Promise<T>,
  options?: {
    onSuccess?: (data: T, variables: V) => void;
    onError?: (error: Error, variables: V) => void;
    offlineSupport?: boolean;
  }
) => {
  const { onSuccess, onError, offlineSupport = false } = options || {};

  const optimizedMutationFn = async (variables: V): Promise<T> => {
    try {
      return await mutationFn(variables);
    } catch (error) {
      if (offlineSupport && !navigator.onLine) {
        // Store for later sync when online
        const pendingMutation = {
          id: Date.now().toString(),
          variables,
          timestamp: Date.now(),
        };
        
        const pending = JSON.parse(localStorage.getItem('pendingMutations') || '[]');
        pending.push(pendingMutation);
        localStorage.setItem('pendingMutations', JSON.stringify(pending));
        
        throw new Error('Request queued for when online');
      }
      throw error;
    }
  };

  return {
    mutateAsync: optimizedMutationFn,
    onSuccess,
    onError,
  };
};

// Hook for prefetching data
export const usePrefetch = () => {
  const prefetchQuery = <T>(
    queryKey: string[],
    queryFn: () => Promise<T>,
    options?: {
      staleTime?: number;
      cacheTime?: number;
    }
  ) => {
    const { staleTime = 5 * 60 * 1000, cacheTime = 10 * 60 * 1000 } = options || {};
    
    // Prefetch critical data
    setTimeout(() => {
      queryFn().then(data => {
        const cacheKey = queryKey.join('-');
        MemoryManager.set(cacheKey, data, staleTime);
      }).catch(console.error);
    }, 100);
  };

  return { prefetchQuery };
};
