'use client';

/**
 * Multistream detail — Placeholder for contributors.
 *
 * TODO: Implement with:
 *   - Multistream info (sender, asset, flow rate, total amount)
 *   - Recipients list with weights
 *   - Per-recipient claimable balances
 *   - Add recipient action
 *   - Remove recipient action
 *   - Withdraw action
 *
 * Data sources:
 *   - GET /api/v1/multistreams/:address
 *   - GET /api/v1/multistreams/:address/claimable/:recipient
 */
export default function MultistreamDetailPage({
  params,
}: {
  params: { address: string };
}) {
  return (
    <div>
      <h1 className="mb-6 text-2xl font-bold text-white">
        Multistream Details
      </h1>
      <p className="mb-4 text-sm text-gray-400">
        Contract: {params.address}
      </p>

      {/* TODO: Multistream info */}

      {/* TODO: Recipients table with weights and claimable */}

      {/* TODO: Add/Remove recipient actions */}

      <div className="rounded-xl border border-stellar-border bg-stellar-card p-12 text-center">
        <p className="text-gray-400">
          Multistream detail view coming soon.
        </p>
      </div>
    </div>
  );
}
