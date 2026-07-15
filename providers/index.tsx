'use client';

import { ThemeProvider } from '@/providers/ThemeProvider';
import { WalletProvider } from '@/providers/WalletProvider';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <WalletProvider>{children}</WalletProvider>
    </ThemeProvider>
  );
}
