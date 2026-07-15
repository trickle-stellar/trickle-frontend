export type MultistreamStatus = 'active' | 'completed' | 'cancelled';

export interface Multistream {
  contractAddress: string;
  sender: string;
  asset: string;
  totalAmount: string;
  duration: number;
  flowRate: string;
  startTime: string;
  lastUpdateTime: string;
  status: MultistreamStatus;
}

export interface MultistreamRecipient {
  address: string;
  weight: number;
  claimable?: string;
}

export interface CreateMultistreamRequest {
  sender: string;
  asset: string;
  totalAmount: string;
  duration: number;
}
