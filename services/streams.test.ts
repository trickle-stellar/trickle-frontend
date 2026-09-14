import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import {
  getStreamByAddress,
  getStreamBalance,
  getStreamsBySender,
  getStreamsByRecipient,
  createStream,
  submitStream,
  withdrawStream,
  pauseStream,
  resumeStream,
  cancelStream,
} from './streams';
import { ApiError } from '@/lib/api';
import type { Stream } from '@/types/stream';

const API_URL = 'http://localhost:3001/api/v1';

const streamFixture: Stream = {
  id: 'uuid-1',
  createdAt: '2026-01-01T00:00:00.000Z',
  updatedAt: '2026-01-01T00:00:00.000Z',
  contractAddress: 'CABCDEFGHIJKLMNOPQRSTUVWXYZ123456',
  streamId: null,
  sender: 'GABC...SENDER',
  recipient: 'GABC...RECIPIENT',
  asset: 'CASLZ...XLM',
  flowRate: '31709791',
  totalAmount: '1000000000',
  withdrawnAmount: '0',
  startTime: '1700000000',
  lastUpdateTime: '1700000000',
  status: 'active',
};

function mockFetchOnce(body: unknown, ok = true, status = 200) {
  return {
    ok,
    status,
    json: async () => body,
  };
}

const fetchMock = vi.fn();

beforeEach(() => {
  vi.stubGlobal('fetch', fetchMock);
});

afterEach(() => {
  vi.unstubAllGlobals();
  fetchMock.mockReset();
});

describe('getStreamByAddress', () => {
  it('GETs /streams/:address and returns the stream', async () => {
    fetchMock.mockResolvedValueOnce(mockFetchOnce(streamFixture));
    const result = await getStreamByAddress(streamFixture.contractAddress);

    expect(result).toEqual(streamFixture);
    expect(fetchMock).toHaveBeenCalledWith(
      `${API_URL}/streams/${streamFixture.contractAddress}`,
      expect.objectContaining({ headers: expect.any(Object) }),
    );
  });

  it('throws ApiError on 404 from backend', async () => {
    fetchMock.mockResolvedValueOnce(
      mockFetchOnce(
        {
          statusCode: 404,
          message: 'Stream not found',
          path: '/api/v1/streams/CX',
          timestamp: '2026-01-01T00:00:00.000Z',
        },
        false,
        404,
      ),
    );

    const err = await getStreamByAddress('CX').catch((e) => e);
    expect(err).toBeInstanceOf(ApiError);
    expect((err as ApiError).statusCode).toBe(404);
    expect((err as ApiError).message).toBe('Stream not found');
  });

  it('propagates contract-level 400 with the message', async () => {
    fetchMock.mockResolvedValueOnce(
      mockFetchOnce(
        {
          statusCode: 400,
          message: 'StreamAlreadyInitialized',
          path: '/api/v1/streams/CX',
          timestamp: '2026-01-01T00:00:00.000Z',
        },
        false,
        400,
      ),
    );

    const err = await getStreamByAddress('CX').catch((e) => e);
    expect(err).toBeInstanceOf(ApiError);
    expect((err as ApiError).statusCode).toBe(400);
    expect((err as ApiError).message).toBe('StreamAlreadyInitialized');
  });
});

describe('getStreamBalance', () => {
  it('GETs /streams/:address/balance and returns claimable', async () => {
    fetchMock.mockResolvedValueOnce(mockFetchOnce({ claimable: '600000000' }));
    const result = await getStreamBalance('CABC');

    expect(result.claimable).toBe('600000000');
    expect(fetchMock).toHaveBeenCalledWith(
      `${API_URL}/streams/CABC/balance`,
      expect.any(Object),
    );
  });
});

describe('getStreamsBySender / getStreamsByRecipient', () => {
  it('GETs /streams/sender/:address', async () => {
    fetchMock.mockResolvedValueOnce(mockFetchOnce([streamFixture]));
    const result = await getStreamsBySender('GABC...SENDER');

    expect(result).toHaveLength(1);
    expect(fetchMock).toHaveBeenCalledWith(
      `${API_URL}/streams/sender/GABC...SENDER`,
      expect.any(Object),
    );
  });

  it('GETs /streams/recipient/:address', async () => {
    fetchMock.mockResolvedValueOnce(mockFetchOnce([]));
    const result = await getStreamsByRecipient('GABC...RECIPIENT');

    expect(result).toEqual([]);
    expect(fetchMock).toHaveBeenCalledWith(
      `${API_URL}/streams/recipient/GABC...RECIPIENT`,
      expect.any(Object),
    );
  });
});

describe('createStream', () => {
  it('POSTs the request and returns XDR + factory address', async () => {
    fetchMock.mockResolvedValueOnce(
      mockFetchOnce({
        txXdr: 'AAAAAgAA',
        factoryAddress: 'C...FACTORY',
      }),
    );
    const result = await createStream({
      sender: 'GABC...SENDER',
      recipient: 'GABC...RECIPIENT',
      asset: 'CASLZ...XLM',
      amount: '1000000000',
      duration: 2592000,
    });

    expect(result).toEqual({ txXdr: 'AAAAAgAA', factoryAddress: 'C...FACTORY' });
    expect(fetchMock).toHaveBeenCalledWith(
      `${API_URL}/streams`,
      expect.objectContaining({ method: 'POST' }),
    );
  });

  it('throws ApiError with 503 when factory is unconfigured', async () => {
    fetchMock.mockResolvedValueOnce(
      mockFetchOnce(
        {
          statusCode: 503,
          message: 'Factory not configured',
          path: '/api/v1/streams',
          timestamp: '2026-01-01T00:00:00.000Z',
        },
        false,
        503,
      ),
    );

    const err = await createStream({
      sender: 'GABC...SENDER',
      recipient: 'GABC...RECIPIENT',
      asset: 'CASLZ...XLM',
      amount: '1000000000',
      duration: 2592000,
    }).catch((e) => e);

    expect(err).toBeInstanceOf(ApiError);
    expect((err as ApiError).statusCode).toBe(503);
    expect((err as ApiError).message).toBe('Factory not configured');
  });
});

describe('submitStream', () => {
  it('POSTs signed XDR and returns confirm outcome', async () => {
    fetchMock.mockResolvedValueOnce(
      mockFetchOnce({
        status: 'confirmed',
        hash: 'deadbeef',
        streamAddress: 'C...NEWSTREAM',
      }),
    );
    const result = await submitStream('signed-xdr');

    expect(result).toEqual({
      status: 'confirmed',
      hash: 'deadbeef',
      streamAddress: 'C...NEWSTREAM',
    });
    expect(fetchMock).toHaveBeenCalledWith(`${API_URL}/streams/submit`, {
      method: 'POST',
      body: JSON.stringify({ signedXdr: 'signed-xdr' }),
      headers: { 'Content-Type': 'application/json' },
    });
  });
});

describe('state-change prepares', () => {
  it('posts to /withdraw with the recipient', async () => {
    fetchMock.mockResolvedValueOnce(mockFetchOnce({ txXdr: 'withdraw-xdr' }));
    const result = await withdrawStream('CABC', 'GABC...RECIPIENT');

    expect(result.txXdr).toBe('withdraw-xdr');
    expect(fetchMock).toHaveBeenCalledWith(
      `${API_URL}/streams/CABC/withdraw`,
      expect.objectContaining({
        method: 'POST',
        body: JSON.stringify({ recipient: 'GABC...RECIPIENT' }),
      }),
    );
  });

  it('posts to /pause with the sender', async () => {
    fetchMock.mockResolvedValueOnce(mockFetchOnce({ txXdr: 'pause-xdr' }));
    await pauseStream('CABC', 'GABC...SENDER');

    expect(fetchMock).toHaveBeenCalledWith(
      `${API_URL}/streams/CABC/pause`,
      expect.objectContaining({
        body: JSON.stringify({ sender: 'GABC...SENDER' }),
      }),
    );
  });

  it('posts to /resume with the sender', async () => {
    fetchMock.mockResolvedValueOnce(mockFetchOnce({ txXdr: 'resume-xdr' }));
    await resumeStream('CABC', 'GABC...SENDER');

    expect(fetchMock).toHaveBeenCalledWith(
      `${API_URL}/streams/CABC/resume`,
      expect.objectContaining({
        body: JSON.stringify({ sender: 'GABC...SENDER' }),
      }),
    );
  });

  it('posts to /cancel with the sender', async () => {
    fetchMock.mockResolvedValueOnce(mockFetchOnce({ txXdr: 'cancel-xdr' }));
    await cancelStream('CABC', 'GABC...SENDER');

    expect(fetchMock).toHaveBeenCalledWith(
      `${API_URL}/streams/CABC/cancel`,
      expect.objectContaining({
        body: JSON.stringify({ sender: 'GABC...SENDER' }),
      }),
    );
  });
});

describe('error handling', () => {
  it('flattens array messages from the ValidationPipe', async () => {
    fetchMock.mockResolvedValueOnce(
      mockFetchOnce(
        {
          statusCode: 400,
          message: ['sender must be a string', 'amount must be a string'],
          path: '/api/v1/streams',
          timestamp: '2026-01-01T00:00:00.000Z',
        },
        false,
        400,
      ),
    );

    const err = await createStream({
      sender: '' as string,
      recipient: 'GABC...RECIPIENT',
      asset: 'CASLZ...XLM',
      amount: '' as string,
      duration: 2592000,
    }).catch((e) => e);

    expect(err).toBeInstanceOf(ApiError);
    expect((err as ApiError).message).toBe(
      'sender must be a string, amount must be a string',
    );
  });

  it('surfaces network failures as ApiError', async () => {
    fetchMock.mockRejectedValueOnce(new TypeError('Failed to fetch'));

    const err = await getStreamByAddress('CABC').catch((e) => e);
    expect(err).toBeInstanceOf(ApiError);
    expect((err as ApiError).statusCode).toBe(0);
    expect((err as ApiError).message).toBe('Failed to fetch');
  });

  it('falls back to status when response body is not JSON', async () => {
    fetchMock.mockResolvedValueOnce({
      ok: false,
      status: 500,
      json: async () => {
        throw new SyntaxError('Unexpected token');
      },
    });

    const err = await getStreamByAddress('CABC').catch((e) => e);
    expect(err).toBeInstanceOf(ApiError);
    expect((err as ApiError).statusCode).toBe(500);
    expect((err as ApiError).message).toBe('Request failed with status 500');
  });
});