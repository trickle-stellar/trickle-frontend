export type StreamNftStatus = 'active' | 'transferred' | 'withdrawn';

export interface StreamNft {
  contractAddress: string;
  streamContractAddress: string;
  owner: string;
  streamAmount: string;
  claimedAmount: string;
  remainingAmount: string;
  status: StreamNftStatus;
}

export interface TransferNftRequest {
  from: string;
  to: string;
}
