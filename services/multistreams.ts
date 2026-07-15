import type { Multistream, MultistreamRecipient, CreateMultistreamRequest } from '@/types/multistream';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api/v1';

/**
 * Multistreams service — wraps /multistreams API endpoints.
 *
 * TODO: All functions return mock data. Replace with real fetch calls.
 */

export async function getMultistreamByAddress(address: string): Promise<Multistream> {
  // TODO: GET ${API_URL}/multistreams/${address}
  return {
    contractAddress: address,
    sender: 'G...SENDER',
    asset: 'CASLZ...XLM',
    totalAmount: '5000000000',
    duration: 2592000,
    flowRate: '158548959',
    startTime: '1700000000',
    lastUpdateTime: '1700000000',
    status: 'active',
  };
}

export async function getRecipients(address: string): Promise<MultistreamRecipient[]> {
  // TODO: GET ${API_URL}/multistreams/${address} and extract recipients
  return [];
}

export async function createMultistream(request: CreateMultistreamRequest): Promise<{ txXdr: string }> {
  // TODO: POST ${API_URL}/multistreams
  return { txXdr: 'mock-create-multistream-xdr' };
}

export async function addRecipient(
  address: string,
  sender: string,
  recipient: string,
  weight: number,
): Promise<{ txXdr: string }> {
  // TODO: POST ${API_URL}/multistreams/${address}/recipients
  return { txXdr: 'mock-add-recipient-xdr' };
}

export async function removeRecipient(
  address: string,
  sender: string,
  recipient: string,
): Promise<{ txXdr: string }> {
  // TODO: DELETE ${API_URL}/multistreams/${address}/recipients/${recipient}
  return { txXdr: 'mock-remove-recipient-xdr' };
}

export async function withdrawMultistream(
  address: string,
  recipient: string,
): Promise<{ txXdr: string }> {
  // TODO: POST ${API_URL}/multistreams/${address}/withdraw
  return { txXdr: 'mock-withdraw-multistream-xdr' };
}

export async function getClaimableBalance(
  address: string,
  recipient: string,
): Promise<{ claimable: string }> {
  // TODO: GET ${API_URL}/multistreams/${address}/claimable/${recipient}
  return { claimable: '0' };
}
