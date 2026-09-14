import type {
  Stream,
  StreamBalance,
  CreateStreamRequest,
  CreateStreamResponse,
  SubmitStreamResponse,
  TxXdrResponse,
} from '@/types/stream';
import { api } from '@/lib/api';

export async function getStreamByAddress(address: string): Promise<Stream> {
  return api.get<Stream>(`/streams/${encodeURIComponent(address)}`);
}

export async function getStreamBalance(address: string): Promise<StreamBalance> {
  return api.get<StreamBalance>(`/streams/${encodeURIComponent(address)}/balance`);
}

export async function getStreamsBySender(sender: string): Promise<Stream[]> {
  return api.get<Stream[]>(`/streams/sender/${encodeURIComponent(sender)}`);
}

export async function getStreamsByRecipient(recipient: string): Promise<Stream[]> {
  return api.get<Stream[]>(`/streams/recipient/${encodeURIComponent(recipient)}`);
}

export async function createStream(
  request: CreateStreamRequest,
): Promise<CreateStreamResponse> {
  return api.post<CreateStreamResponse>('/streams', request);
}

export async function submitStream(
  signedXdr: string,
): Promise<SubmitStreamResponse> {
  return api.post<SubmitStreamResponse>('/streams/submit', { signedXdr });
}

export async function withdrawStream(
  address: string,
  recipient: string,
): Promise<TxXdrResponse> {
  return api.post<TxXdrResponse>(
    `/streams/${encodeURIComponent(address)}/withdraw`,
    { recipient },
  );
}

export async function pauseStream(
  address: string,
  sender: string,
): Promise<TxXdrResponse> {
  return api.post<TxXdrResponse>(
    `/streams/${encodeURIComponent(address)}/pause`,
    { sender },
  );
}

export async function resumeStream(
  address: string,
  sender: string,
): Promise<TxXdrResponse> {
  return api.post<TxXdrResponse>(
    `/streams/${encodeURIComponent(address)}/resume`,
    { sender },
  );
}

export async function cancelStream(
  address: string,
  sender: string,
): Promise<TxXdrResponse> {
  return api.post<TxXdrResponse>(
    `/streams/${encodeURIComponent(address)}/cancel`,
    { sender },
  );
}