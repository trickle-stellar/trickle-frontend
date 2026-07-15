export type VestingStatus = 'active' | 'completed' | 'revoked';

export interface VestingSchedule {
  contractAddress: string;
  beneficiary: string;
  asset: string;
  totalAmount: string;
  vestedAmount: string;
  startTime: string;
  cliffDuration: string;
  vestingDuration: string;
  status: VestingStatus;
  revocable: boolean;
  revocationTime: string | null;
}

export interface CreateVestingRequest {
  sender: string;
  beneficiary: string;
  asset: string;
  totalAmount: string;
  cliffDuration: number;
  vestingDuration: number;
  revocable: boolean;
}
