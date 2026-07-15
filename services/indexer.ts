import type { IndexerEvent } from '@/types/indexer';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api/v1';

/**
 * Indexer service — wraps /indexer API endpoints.
 *
 * TODO: All functions return mock data. Replace with real fetch calls.
 */

export async function getEvents(
  contract?: string,
  type?: string,
  limit = 50,
  offset = 0,
): Promise<IndexerEvent[]> {
  // TODO: GET ${API_URL}/indexer/events?contract=${contract}&type=${type}&limit=${limit}&offset=${offset}
  return [];
}
