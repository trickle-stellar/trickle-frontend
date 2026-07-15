import type { VestingSchedule, CreateVestingRequest } from '@/types/vesting';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api/v1';

/**
 * Vesting service — wraps /vesting API endpoints.
 *
 * TODO: All functions return mock data. Replace with real fetch calls.
 */

export async function getVestingByAddress(address: string): Promise<VestingSchedule> {
  // TODO: GET ${API_URL}/vesting/${address}
  return {
    contractAddress: address,
    beneficiary: 'G...BENEFICIARY',
    asset: 'CASLZ...XLM',
    totalAmount: '10000000000',
    vestedAmount: '3000000000',
    startTime: '1700000000',
    cliffDuration: '2592000',
    vestingDuration: '31536000',
    status: 'active',
    revocable: true,
    revocationTime: null,
  };
}

export async function createVesting(request: CreateVestingRequest): Promise<{ txXdr: string }> {
  // TODO: POST ${API_URL}/vesting
  return { txXdr: 'mock-create-vesting-xdr' };
}

export async function claimVesting(
  address: string,
  beneficiary: string,
): Promise<{ txXdr: string }> {
  // TODO: POST ${API_URL}/vesting/${address}/claim
  return { txXdr: 'mock-claim-vesting-xdr' };
}

export async function revokeVesting(
  address: string,
  sender: string,
): Promise<{ txXdr: string }> {
  // TODO: POST ${API_URL}/vesting/${address}/revoke
  return { txXdr: 'mock-revoke-vesting-xdr' };
}

export async function getClaimableBalance(
  address: string,
  beneficiary: string,
): Promise<{ claimable: string }> {
  // TODO: GET ${API_URL}/vesting/${address}/claimable/${beneficiary}
  return { claimable: '0' };
}
