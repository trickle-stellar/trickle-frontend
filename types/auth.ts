export interface User {
  address: string;
  createdAt: string;
}

export interface ApiKey {
  id: string;
  name: string;
  isActive: boolean;
  createdAt: string;
  lastUsedAt: string | null;
}

export interface ChallengeResponse {
  txXdr: string;
  networkPassphrase: string;
}

export interface VerifyRequest {
  signedXdr: string;
}

export interface VerifyResponse {
  jwt: string;
  user: User;
}
