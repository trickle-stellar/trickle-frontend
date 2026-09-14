export type StreamStatus = 'active' | 'paused' | 'cancelled' | 'completed';

/**
 * Mirrors the backend Stream entity serialized by NestJS.
 * All amounts are bigint-as-string to avoid precision loss.
 */
export interface Stream {
  id: string;
  createdAt: string;
  updatedAt: string;
  contractAddress: string;
  streamId: number | null;
  sender: string;
  recipient: string;
  asset: string;
  flowRate: string;
  totalAmount: string;
  withdrawnAmount: string;
  startTime: string;
  lastUpdateTime: string;
  status: StreamStatus;
}

export interface StreamBalance {
  claimable: string;
}

export interface CreateStreamRequest {
  sender: string;
  recipient: string;
  asset: string;
  amount: string;
  duration: number;
}

/** Response from POST /streams — client signs the XDR, then submits. */
export interface CreateStreamResponse {
  txXdr: string;
  factoryAddress: string;
}

/** Response from POST /streams/submit. */
export interface SubmitStreamResponse {
  status: 'confirmed';
  hash: string;
  /** Present when the submitted tx deployed a new stream. */
  streamAddress?: string;
  /** Contract return value decoded to a native type. */
  value?: unknown;
}

/** Response from state-change prepares (withdraw/pause/resume/cancel). */
export interface TxXdrResponse {
  txXdr: string;
}