'use client';

/**
 * Stream NFT detail — Placeholder for contributors.
 *
 * TODO: Implement with:
 *   - NFT info (owner, stream address, amounts)
 *   - Transfer form (recipient address)
 *   - Withdraw button
 *   - Back link to /nfts
 *
 * Data sources:
 *   - GET /api/v1/stream-nft/:address
 */
export default function StreamNftDetailPage({
  params,
}: {
  params: { address: string };
}) {
  return (
    <div>
      <h1 className="mb-6 text-2xl font-bold text-white">
        Stream NFT Details
      </h1>
      <p className="mb-4 text-sm text-gray-400">
        Contract: {params.address}
      </p>

      {/* TODO: NFT info */}

      {/* TODO: Transfer form */}

      {/* TODO: Withdraw button */}

      <div className="rounded-xl border border-stellar-border bg-stellar-card p-12 text-center">
        <p className="text-gray-400">
          Stream NFT detail view coming soon.
        </p>
      </div>
    </div>
  );
}
