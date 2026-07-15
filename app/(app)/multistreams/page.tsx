/**
 * Multistreams list — Placeholder for contributors.
 *
 * TODO: Implement with:
 *   - List of multistreams created by user
 *   - Each card shows: recipient count, total amount, flow rate
 *   - Empty state, loading skeleton
 *
 * Data sources:
 *   - GET /api/v1/multistreams?sender=:address
 */
export default function MultistreamsPage() {
  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-white">Multistreams</h1>
        {/* TODO: Link to /multistreams/new */}
      </div>

      <div className="rounded-xl border border-stellar-border bg-stellar-card p-12 text-center">
        <p className="text-gray-400">
          Connect your wallet to view your multistreams.
        </p>
      </div>
    </div>
  );
}
