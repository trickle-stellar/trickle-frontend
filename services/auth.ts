import type { ChallengeResponse, VerifyResponse } from '@/types/auth';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api/v1';

/**
 * Auth service — wraps /auth API endpoints.
 *
 * All functions return mock data for now.
 * TODO: Replace mock returns with real fetch calls.
 */
export async function getChallenge(): Promise<ChallengeResponse> {
  // TODO: POST ${API_URL}/auth/challenge
  // const res = await fetch(`${API_URL}/auth/challenge`, { method: 'POST' });
  // return res.json();
  return { txXdr: 'mock-xdr', networkPassphrase: 'Test SDF Network ; September 2015' };
}

export async function verify(signedXdr: string): Promise<VerifyResponse> {
  // TODO: POST ${API_URL}/auth/verify
  // const res = await fetch(`${API_URL}/auth/verify`, {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify({ signedXdr }),
  // });
  // return res.json();
  return { jwt: 'mock-jwt', user: { address: 'G...MOCK', createdAt: new Date().toISOString() } };
}

export async function getMe(): Promise<{ address: string }> {
  // TODO: GET ${API_URL}/auth/me (with JWT header)
  // const res = await fetch(`${API_URL}/auth/me`, {
  //   headers: { Authorization: `Bearer ${jwt}` },
  // });
  // return res.json();
  return { address: 'G...MOCK' };
}
