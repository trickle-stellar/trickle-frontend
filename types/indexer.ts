export interface IndexerEvent {
  contractAddress: string;
  txHash: string;
  eventType: string;
  caller: string;
  amount: string | null;
  ledger: number;
  timestamp: string;
}
