import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { WalletProvider } from './WalletProvider';
import { useWallet } from '@/hooks/useWallet';

const mockAccess = vi.fn();
const mockAddress = vi.fn();
const mockSign = vi.fn();

vi.mock('@/lib/stellar', () => ({
  requestFreighterAccess: (...args: unknown[]) => mockAccess(...args),
  getWalletAddress: (...args: unknown[]) => mockAddress(...args),
  signXdrWithFreighter: (...args: unknown[]) => mockSign(...args),
  isFreighterConnected: vi.fn().mockResolvedValue({ isConnected: true }),
}));

function TestConsumer() {
  const { address, isConnected, isLoading, connect, disconnect, error, signTransaction } = useWallet();
  return (
    <div>
      <span data-testid="address">{address ?? 'null'}</span>
      <span data-testid="isConnected">{String(isConnected)}</span>
      <span data-testid="isLoading">{String(isLoading)}</span>
      <span data-testid="error">{error ?? 'null'}</span>
      <button onClick={connect}>connect</button>
      <button onClick={disconnect}>disconnect</button>
      <button onClick={() => signTransaction('test-xdr').catch(vi.fn())}>sign</button>
    </div>
  );
}

describe('WalletProvider', () => {
  beforeEach(() => vi.clearAllMocks());

  it('auto-reconnects on mount when app is already authorized', async () => {
    mockAddress.mockResolvedValue({ ok: true, data: { address: 'GAUTO...' } });
    render(
      <WalletProvider>
        <TestConsumer />
      </WalletProvider>,
    );
    await waitFor(() => {
      expect(screen.getByTestId('address').textContent).toBe('GAUTO...');
    });
    expect(screen.getByTestId('isConnected').textContent).toBe('true');
  });

  it('does not set address when auto-reconnect returns no authorization', async () => {
    mockAddress.mockResolvedValue({ ok: false, error: 'App not authorized' });
    render(
      <WalletProvider>
        <TestConsumer />
      </WalletProvider>,
    );
    await waitFor(() => {
      expect(screen.getByTestId('address').textContent).toBe('null');
    });
  });

  it('connect sets address on success', async () => {
    mockAddress.mockResolvedValue({ ok: false });
    mockAccess.mockResolvedValue({ ok: true, data: { address: 'GCONN...' } });
    render(
      <WalletProvider>
        <TestConsumer />
      </WalletProvider>,
    );
    await waitFor(() => expect(mockAddress).toHaveBeenCalled());

    await userEvent.click(screen.getByText('connect'));
    await waitFor(() => {
      expect(screen.getByTestId('address').textContent).toBe('GCONN...');
    });
  });

  it('connect sets error when Freighter is not installed', async () => {
    mockAddress.mockResolvedValue({ ok: false });
    mockAccess.mockResolvedValue({ ok: false, error: 'Freighter is not installed' });
    render(
      <WalletProvider>
        <TestConsumer />
      </WalletProvider>,
    );
    await waitFor(() => expect(mockAddress).toHaveBeenCalled());

    await userEvent.click(screen.getByText('connect'));
    await waitFor(() => {
      expect(screen.getByTestId('error').textContent).toBe('Freighter is not installed');
    });
  });

  it('connect sets error when user rejects', async () => {
    mockAddress.mockResolvedValue({ ok: false });
    mockAccess.mockResolvedValue({ ok: false, error: 'The user rejected this request.' });
    render(
      <WalletProvider>
        <TestConsumer />
      </WalletProvider>,
    );
    await waitFor(() => expect(mockAddress).toHaveBeenCalled());

    await userEvent.click(screen.getByText('connect'));
    await waitFor(() => {
      expect(screen.getByTestId('error').textContent).toBe('The user rejected this request.');
    });
  });

  it('disconnect clears address and error', async () => {
    mockAddress.mockResolvedValue({ ok: true, data: { address: 'GABC...' } });
    render(
      <WalletProvider>
        <TestConsumer />
      </WalletProvider>,
    );
    await waitFor(() => {
      expect(screen.getByTestId('address').textContent).toBe('GABC...');
    });

    await userEvent.click(screen.getByText('disconnect'));
    expect(screen.getByTestId('address').textContent).toBe('null');
    expect(screen.getByTestId('isConnected').textContent).toBe('false');
  });

  it('signTransaction calls freighter with network passphrase and address', async () => {
    mockAddress.mockResolvedValue({ ok: true, data: { address: 'GABC...' } });
    mockSign.mockResolvedValue({ ok: true, signedTxXdr: 'signed-xdr-123' });
    render(
      <WalletProvider>
        <TestConsumer />
      </WalletProvider>,
    );
    await waitFor(() => {
      expect(screen.getByTestId('address').textContent).toBe('GABC...');
    });

    await userEvent.click(screen.getByText('sign'));
    expect(mockSign).toHaveBeenCalledWith(
      'test-xdr',
      expect.stringContaining('Test SDF Network'),
      'GABC...',
    );
  });

  it('signTransaction throws when not connected', async () => {
    mockAddress.mockResolvedValue({ ok: false });
    render(
      <WalletProvider>
        <TestConsumer />
      </WalletProvider>,
    );
    await waitFor(() => expect(mockAddress).toHaveBeenCalled());

    // sign button uses .catch(() => {}) so this won't throw
    await userEvent.click(screen.getByText('sign'));
    expect(mockSign).not.toHaveBeenCalled();
  });
});
