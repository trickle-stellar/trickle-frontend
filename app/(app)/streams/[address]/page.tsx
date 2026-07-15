'use client';

/**
 * Stream detail page — Placeholder for contributors.
 *
 * TODO: Implement with:
 *   - Stream info (sender, recipient, asset, flow rate, duration)
 *   - Real-time claimable balance (Soroban RPC)
 *   - Progress bar (elapsed / total duration)
 *   - Action buttons: Withdraw, Pause, Resume, Cancel
 *   - Event history timeline
 *
 * Data sources:
 *   - GET /api/v1/streams/:address (cached info)
 *   - GET /api/v1/streams/:address/balance (real-time, Soroban RPC)
 *   - GET /api/v1/streams/history/:address (events)
 *
 * Components to use:
 *   - StreamCard, StreamActions
 */
export default function StreamDetailPage({
  params,
}: {
  params: { address: string };
}) {
  return (
    <div>
      <h1 className="mb-6 text-2xl font-bold text-white">
        Stream Details
      </h1>
      <p className="mb-4 text-sm text-gray-400">
        Contract: {params.address}
      </p>

      {/* TODO: Stream info card */}

      {/* TODO: Real-time balance (Soroban RPC) */}

      {/* TODO: Progress bar */}

      {/* TODO: Action buttons — Withdraw, Pause, Resume, Cancel */}

      {/* TODO: Event history timeline */}
      <div className="rounded-xl border border-stellar-border bg-stellar-card p-12 text-center">
        <p className="text-gray-400">
          Stream detail view coming soon.
        </p>
      </div>
    </div>
  );
}
