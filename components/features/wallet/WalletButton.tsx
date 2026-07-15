'use client';

import { useWallet } from '@/hooks/useWallet';
import { Button } from '@/components/ui/Button';

export function WalletButton() {
  const { address, isConnected, isLoading, connect, disconnect } = useWallet();

  if (isConnected && address) {
    return (
      <div className="flex items-center gap-3">
        <span className="rounded-lg bg-stellar-card px-3 py-1.5 text-xs text-gray-300">
          {address.slice(0, 6)}...{address.slice(-4)}
        </span>
        <Button variant="ghost" size="sm" onClick={disconnect}>
          Disconnect
        </Button>
      </div>
    );
  }

  return (
    <Button onClick={connect} loading={isLoading} size="sm">
      Connect Wallet
    </Button>
  );
}
