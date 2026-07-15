import type { FeeInfo, FeeCalculation } from '@/types/fees';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api/v1';

/**
 * Fees service — wraps /fees API endpoints.
 *
 * TODO: All functions return mock data. Replace with real fetch calls.
 */

export async function getFeeInfo(): Promise<FeeInfo> {
  // TODO: GET ${API_URL}/fees
  return { percentage: 1, asset: 'CASLZ...XLM' };
}

export async function calculateFee(
  asset: string,
  amount: string,
): Promise<FeeCalculation> {
  // TODO: GET ${API_URL}/fees/calculate?asset=${asset}&amount=${amount}
  const fee = (parseInt(amount) * 1) / 100;
  return { fee: fee.toString() };
}
