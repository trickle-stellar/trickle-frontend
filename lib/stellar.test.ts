import { describe, it, expect, vi, beforeEach } from 'vitest';

vi.mock('@stellar/freighter-api', () => ({
  isConnected: vi.fn(),
  requestAccess: vi.fn(),
  getAddress: vi.fn(),
  signTransaction: vi.fn(),
}));

import {
  isFreighterConnected,
  requestFreighterAccess,
  getWalletAddress,
  signXdrWithFreighter,
} from './stellar';
import * as freighter from '@stellar/freighter-api';

describe('isFreighterConnected', () => {
  beforeEach(() => vi.clearAllMocks());

  it('returns true when Freighter is installed', async () => {
    vi.mocked(freighter.isConnected).mockResolvedValue({ isConnected: true });
    expect(await isFreighterConnected()).toBe(true);
  });

  it('returns false when Freighter is not installed', async () => {
    vi.mocked(freighter.isConnected).mockResolvedValue({ isConnected: false });
    expect(await isFreighterConnected()).toBe(false);
  });
});

describe('requestFreighterAccess', () => {
  beforeEach(() => vi.clearAllMocks());

  it('returns address on success', async () => {
    vi.mocked(freighter.isConnected).mockResolvedValue({ isConnected: true });
    vi.mocked(freighter.requestAccess).mockResolvedValue({ address: 'GABC...' });
    const result = await requestFreighterAccess();
    expect(result.ok).toBe(true);
    expect(result.data?.address).toBe('GABC...');
  });

  it('returns error when not installed', async () => {
    vi.mocked(freighter.isConnected).mockResolvedValue({ isConnected: false });
    const result = await requestFreighterAccess();
    expect(result.ok).toBe(false);
    expect(result.error).toBe('Freighter is not installed');
  });

  it('returns error when user rejects', async () => {
    vi.mocked(freighter.isConnected).mockResolvedValue({ isConnected: true });
    vi.mocked(freighter.requestAccess).mockResolvedValue({
      address: '',
      error: { message: 'The user rejected this request.' },
    });
    const result = await requestFreighterAccess();
    expect(result.ok).toBe(false);
    expect(result.error).toBe('The user rejected this request.');
  });
});

describe('getWalletAddress', () => {
  beforeEach(() => vi.clearAllMocks());

  it('returns address when app is already authorized', async () => {
    vi.mocked(freighter.isConnected).mockResolvedValue({ isConnected: true });
    vi.mocked(freighter.getAddress).mockResolvedValue({ address: 'GDEF...' });
    const result = await getWalletAddress();
    expect(result.ok).toBe(true);
    expect(result.data?.address).toBe('GDEF...');
  });

  it('returns error when not installed', async () => {
    vi.mocked(freighter.isConnected).mockResolvedValue({ isConnected: false });
    const result = await getWalletAddress();
    expect(result.ok).toBe(false);
  });

  it('returns error when app is not authorized (empty address)', async () => {
    vi.mocked(freighter.isConnected).mockResolvedValue({ isConnected: true });
    vi.mocked(freighter.getAddress).mockResolvedValue({ address: '' });
    const result = await getWalletAddress();
    expect(result.ok).toBe(false);
    expect(result.error).toBe('App not authorized');
  });
});

describe('signXdrWithFreighter', () => {
  beforeEach(() => vi.clearAllMocks());

  it('returns signed XDR on success', async () => {
    vi.mocked(freighter.signTransaction).mockResolvedValue({
      signedTxXdr: 'signed-xdr-abc',
      signerAddress: 'GABC...',
    });
    const result = await signXdrWithFreighter(
      'raw-xdr',
      'Test SDF Network ; September 2015',
      'GABC...',
    );
    expect(result.ok).toBe(true);
    expect(result.signedTxXdr).toBe('signed-xdr-abc');
    expect(freighter.signTransaction).toHaveBeenCalledWith('raw-xdr', {
      networkPassphrase: 'Test SDF Network ; September 2015',
      address: 'GABC...',
    });
  });

  it('omits address from opts when not provided', async () => {
    vi.mocked(freighter.signTransaction).mockResolvedValue({
      signedTxXdr: 'signed',
      signerAddress: 'G...',
    });
    await signXdrWithFreighter('xdr', 'Test SDF Network ; September 2015');
    expect(freighter.signTransaction).toHaveBeenCalledWith('xdr', {
      networkPassphrase: 'Test SDF Network ; September 2015',
    });
  });

  it('returns error when user rejects', async () => {
    vi.mocked(freighter.signTransaction).mockResolvedValue({
      signedTxXdr: '',
      signerAddress: '',
      error: { message: 'The user rejected this request.' },
    });
    const result = await signXdrWithFreighter('xdr', 'passphrase');
    expect(result.ok).toBe(false);
    expect(result.error).toBe('The user rejected this request.');
  });
});
