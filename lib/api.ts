import { API_URL } from '@/lib/constants';

export interface ApiErrorBody {
  statusCode: number;
  message: string | string[];
  path?: string;
  timestamp?: string;
  error?: string;
  details?: unknown;
}

/**
 * Error thrown by the API client on non-2xx responses.
 *
 * Mirrors the shape emitted by the backend's global HttpExceptionFilter:
 * `{ statusCode, message, path, timestamp }`. `message` may be an array
 * (Nest ValidationPipe) and is flattened to a single string here.
 */
export class ApiError extends Error {
  readonly statusCode: number;
  readonly path?: string;
  readonly timestamp?: string;
  readonly error?: string;
  readonly details?: unknown;

  constructor(body: ApiErrorBody) {
    super(
      Array.isArray(body.message) ? body.message.join(', ') : body.message,
    );
    this.name = 'ApiError';
    this.statusCode = body.statusCode;
    this.path = body.path;
    this.timestamp = body.timestamp;
    this.error = body.error;
    this.details = body.details;
  }
}

async function request<T>(path: string, init?: RequestInit): Promise<T> {
  let res: Response;
  try {
    res = await fetch(`${API_URL}${path}`, {
      ...init,
      headers: {
        'Content-Type': 'application/json',
        ...(init?.headers ?? {}),
      },
    });
  } catch (err) {
    throw new ApiError({
      statusCode: 0,
      message: err instanceof Error ? err.message : 'Network error',
    });
  }

  if (!res.ok) {
    let body: unknown;
    try {
      body = await res.json();
    } catch {
      body = null;
    }
    const parsed = (body ?? {}) as Partial<ApiErrorBody>;
    throw new ApiError({
      statusCode: parsed.statusCode ?? res.status,
      message: parsed.message ?? `Request failed with status ${res.status}`,
      path: parsed.path,
      timestamp: parsed.timestamp,
      error: parsed.error,
      details: parsed.details,
    });
  }

  if (res.status === 204) {
    return undefined as T;
  }

  return (await res.json()) as T;
}

export const api = {
  get: <T>(path: string): Promise<T> => request<T>(path),
  post: <T>(path: string, body: unknown): Promise<T> =>
    request<T>(path, { method: 'POST', body: JSON.stringify(body) }),
};