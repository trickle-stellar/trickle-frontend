export type StreamStatus = 'active' | 'paused' | 'cancelled' | 'completed';

export interface Stream {
  contractAddress: string;
  sender: string;
  recipient: string;
  asset: string;
  streamAmount: string;
  claimedAmount: string;
  flowRate: string;
  startTime: string;
  duration: number;
  status: StreamStatus;
}

export interface StreamBalance {
  claimable: string;
}

export interface StreamEvent {
  txHash: string;
  eventType: string;
  caller: string;
  amount: string | null;
  ledger: number;
  timestamp: string;
}

export interface CreateStreamRequest {
  sender: string;
  recipient: string;
  asset: string;
  amount: string;
  duration: number;
}
