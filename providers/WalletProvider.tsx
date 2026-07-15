'use client';

import React, { createContext, useCallback, useEffect, useState } from 'react';

interface WalletContextValue {
  address: string | null;
  isConnected: boolean;
  isLoading: boolean;
  connect: () => Promise<void>;
  disconnect: () => void;
}

export const WalletContext = createContext<WalletContextValue>({
  address: null,
  isConnected: false,
  isLoading: false,
  connect: async () => {},
  disconnect: () => {},
});

export function WalletProvider({ children }: { children: React.ReactNode }) {
  const [address, setAddress] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const connect = useCallback(async () => {
    // TODO: Implement Freighter connection
    //   import * as StellarSdk from '@stellar/stellar-sdk';
    //   const freighter = await import('@stellar/freighter-api');
    //   const addr = await freighter.getAddress();
    //   setAddress(addr);
    setIsLoading(true);
    try {
      // TODO: Replace with actual Freighter integration
      // const freighter = await import('@stellar/freighter-api');
      // const { address: addr } = await freighter.requestAccess();
      // setAddress(addr);
    } catch (err) {
      console.error('Wallet connection failed:', err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const disconnect = useCallback(() => {
    setAddress(null);
  }, []);

  return (
    <WalletContext.Provider
      value={{ address, isConnected: !!address, isLoading, connect, disconnect }}
    >
      {children}
    </WalletContext.Provider>
  );
}
