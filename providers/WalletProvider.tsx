'use client';

import React, { createContext, useCallback, useEffect, useState } from 'react';
import {
  requestFreighterAccess,
  getWalletAddress,
  signXdrWithFreighter,
} from '@/lib/stellar';
import { STELLAR_NETWORK_PASSPHRASE } from '@/lib/constants';

export interface WalletContextValue {
  address: string | null;
  isConnected: boolean;
  isLoading: boolean;
  connect: () => Promise<void>;
  disconnect: () => void;
  signTransaction: (xdr: string) => Promise<string>;
  error: string | null;
}

export const WalletContext = createContext<WalletContextValue>({
  address: null,
  isConnected: false,
  isLoading: false,
  connect: async () => {},
  disconnect: () => {},
  signTransaction: async () => {
    throw new Error('signTransaction called outside WalletProvider');
  },
  error: null,
});

export function WalletProvider({ children }: { children: React.ReactNode }) {
  const [address, setAddress] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const connect = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const result = await requestFreighterAccess();
      if (result.ok && result.data) {
        setAddress(result.data.address);
      } else {
        setError(result.error ?? 'Failed to connect');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to connect');
    } finally {
      setIsLoading(false);
    }
  }, []);

  const disconnect = useCallback(() => {
    setAddress(null);
    setError(null);
  }, []);

  const signTransaction = useCallback(
    async (xdr: string): Promise<string> => {
      if (!address) throw new Error('Not connected');
      const result = await signXdrWithFreighter(xdr, STELLAR_NETWORK_PASSPHRASE, address);
      if (result.ok && result.signedTxXdr) return result.signedTxXdr;
      throw new Error(result.error ?? 'Signing failed');
    },
    [address],
  );

  useEffect(() => {
    let cancelled = false;

    async function reconnect() {
      const result = await getWalletAddress();
      if (!cancelled && result.ok && result.data) {
        setAddress(result.data.address);
      }
    }

    reconnect();
    return () => { cancelled = true; };
  }, []);

  return (
    <WalletContext.Provider
      value={{
        address,
        isConnected: !!address,
        isLoading,
        connect,
        disconnect,
        signTransaction,
        error,
      }}
    >
      {children}
    </WalletContext.Provider>
  );
}
