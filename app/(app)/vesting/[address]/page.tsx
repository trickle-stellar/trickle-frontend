'use client';

/**
 * Vesting detail — Placeholder for contributors.
 *
 * TODO: Implement with:
 *   - Vesting info (beneficiary, total, cliff, duration, status)
 *   - Progress bar (vested / total)
 *   - Claimable amount (real-time via Soroban RPC)
 *   - Claim button
 *   - Revoke button (if sender and revocable)
 *
 * Data sources:
 *   - GET /api/v1/vesting/:address
 *   - GET /api/v1/vesting/:address/claimable/:beneficiary
 */
export default function VestingDetailPage({
  params,
}: {
  params: { address: string };
}) {
  return (
    <div>
      <h1 className="mb-6 text-2xl font-bold text-white">
        Vesting Details
      </h1>
      <p className="mb-4 text-sm text-gray-400">
        Contract: {params.address}
      </p>

      {/* TODO: Vesting info card */}

      {/* TODO: Progress bar */}

      {/* TODO: Claim / Revoke actions */}

      <div className="rounded-xl border border-stellar-border bg-stellar-card p-12 text-center">
        <p className="text-gray-400">
          Vesting detail view coming soon.
        </p>
      </div>
    </div>
  );
}
