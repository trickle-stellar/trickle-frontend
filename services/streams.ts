import type { Stream, StreamBalance, StreamEvent, CreateStreamRequest } from '@/types/stream';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api/v1';

/**
 * Streams service — wraps /streams API endpoints.
 *
 * TODO: All functions return mock data. Replace with real fetch calls.
 */

export async function getStreamByAddress(address: string): Promise<Stream> {
  // TODO: GET ${API_URL}/streams/${address}
  return {
    contractAddress: address,
    sender: 'G...SENDER',
    recipient: 'G...RECIPIENT',
    asset: 'CASLZ...XLM',
    streamAmount: '1000000000',
    claimedAmount: '500000000',
    flowRate: '31709791',
    startTime: '1700000000',
    duration: 2592000,
    status: 'active',
  };
}

export async function getStreamBalance(address: string): Promise<StreamBalance> {
  // TODO: GET ${API_URL}/streams/${address}/balance (real-time Soroban RPC)
  return { claimable: '600000000' };
}

export async function getStreamsBySender(sender: string): Promise<Stream[]> {
  // TODO: GET ${API_URL}/streams/sender/${sender}
  return [];
}

export async function getStreamsByRecipient(recipient: string): Promise<Stream[]> {
  // TODO: GET ${API_URL}/streams/recipient/${recipient}
  return [];
}

export async function getStreamHistory(address: string): Promise<StreamEvent[]> {
  // TODO: GET ${API_URL}/streams/history/${address}
  return [];
}

export async function createStream(request: CreateStreamRequest): Promise<{ txXdr: string }> {
  // TODO: POST ${API_URL}/streams
  // const res = await fetch(`${API_URL}/streams`, {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify(request),
  // });
  // return res.json();
  return { txXdr: 'mock-created-stream-xdr' };
}

export async function withdrawStream(address: string, recipient: string): Promise<{ txXdr: string }> {
  // TODO: POST ${API_URL}/streams/${address}/withdraw
  return { txXdr: 'mock-withdraw-xdr' };
}

export async function cancelStream(address: string, sender: string): Promise<{ txXdr: string }> {
  // TODO: POST ${API_URL}/streams/${address}/cancel
  return { txXdr: 'mock-cancel-xdr' };
}

export async function pauseStream(address: string, sender: string): Promise<{ txXdr: string }> {
  // TODO: POST ${API_URL}/streams/${address}/pause
  return { txXdr: 'mock-pause-xdr' };
}

export async function resumeStream(address: string, sender: string): Promise<{ txXdr: string }> {
  // TODO: POST ${API_URL}/streams/${address}/resume
  return { txXdr: 'mock-resume-xdr' };
}
