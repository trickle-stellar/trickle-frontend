import {
  isConnected,
  requestAccess,
  getAddress,
  signTransaction,
} from '@stellar/freighter-api';

export interface FreighterResult<T = void> {
  ok: boolean;
  data?: T;
  error?: string;
}

export interface SignResult {
  ok: boolean;
  signedTxXdr?: string;
  signerAddress?: string;
  error?: string;
}

export async function isFreighterConnected(): Promise<boolean> {
  const result = await isConnected();
  return result.isConnected && !result.error;
}

export async function requestFreighterAccess(): Promise<FreighterResult<{ address: string }>> {
  const connected = await isFreighterConnected();
  if (!connected) {
    return { ok: false, error: 'Freighter is not installed' };
  }

  const result = await requestAccess();
  if (result.error) {
    return { ok: false, error: result.error.message };
  }
  return { ok: true, data: { address: result.address } };
}

export async function getWalletAddress(): Promise<FreighterResult<{ address: string }>> {
  const connected = await isFreighterConnected();
  if (!connected) {
    return { ok: false, error: 'Freighter is not installed' };
  }

  const result = await getAddress();
  if (result.error) {
    return { ok: false, error: result.error.message };
  }
  if (!result.address) {
    return { ok: false, error: 'App not authorized' };
  }
  return { ok: true, data: { address: result.address } };
}

export async function signXdrWithFreighter(
  xdr: string,
  networkPassphrase: string,
  address?: string,
): Promise<SignResult> {
  const result = await signTransaction(xdr, {
    networkPassphrase,
    ...(address ? { address } : {}),
  });
  if (result.error) {
    return { ok: false, error: result.error.message };
  }
  return {
    ok: true,
    signedTxXdr: result.signedTxXdr,
    signerAddress: result.signerAddress,
  };
}
