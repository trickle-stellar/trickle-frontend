'use client';

import { useCallback, useState } from 'react';

interface UseApiOptions<T> {
  fetcher: () => Promise<T>;
}

interface UseApiReturn<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
  execute: () => Promise<void>;
}

/**
 * Generic hook for API calls with loading/error state.
 *
 * Usage:
 *   const { data, loading, error, execute } = useApi({
 *     fetcher: () => streamsService.getStreamByAddress(address),
 *   });
 */
export function useApi<T>({ fetcher }: UseApiOptions<T>): UseApiReturn<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const execute = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const result = await fetcher();
      setData(result);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  }, [fetcher]);

  return { data, loading, error, execute };
}
