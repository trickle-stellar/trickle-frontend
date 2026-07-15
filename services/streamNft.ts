import type { StreamNft, TransferNftRequest } from '@/types/streamNft';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api/v1';

/**
 * Stream NFT service — wraps /stream-nft API endpoints.
 *
 * TODO: All functions return mock data. Replace with real fetch calls.
 */

export async function getStreamNftByAddress(address: string): Promise<StreamNft> {
  // TODO: GET ${API_URL}/stream-nft/${address}
  return {
    contractAddress: address,
    streamContractAddress: 'G...STREAM',
    owner: 'G...OWNER',
    streamAmount: '5000000000',
    claimedAmount: '1000000000',
    remainingAmount: '4000000000',
    status: 'active',
  };
}

export async function createStreamNft(
  sender: string,
  streamContractAddress: string,
): Promise<{ txXdr: string }> {
  // TODO: POST ${API_URL}/stream-nft
  return { txXdr: 'mock-create-nft-xdr' };
}

export async function transferStreamNft(
  address: string,
  request: TransferNftRequest,
): Promise<{ txXdr: string }> {
  // TODO: POST ${API_URL}/stream-nft/${address}/transfer
  return { txXdr: 'mock-transfer-nft-xdr' };
}

export async function withdrawStreamNft(
  address: string,
  owner: string,
): Promise<{ txXdr: string }> {
  // TODO: POST ${API_URL}/stream-nft/${address}/withdraw
  return { txXdr: 'mock-withdraw-nft-xdr' };
}
