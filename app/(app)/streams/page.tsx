/**
 * Streams list page — Placeholder for contributors.
 *
 * TODO: Implement with:
 *   - List of user's streams (both sent and received)
 *   - Filter tabs: All | Sent | Received
 *   - StreamCard component for each stream
 *   - Empty state when no streams
 *   - Loading skeleton
 *
 * Data sources:
 *   - GET /api/v1/streams/sender/:address
 *   - GET /api/v1/streams/recipient/:address
 */
export default function StreamsPage() {
  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-white">Streams</h1>
        {/* TODO: Link to /streams/new */}
      </div>

      {/* TODO: Filter tabs — All | Sent | Received */}

      {/* TODO: Stream list */}
      <div className="rounded-xl border border-stellar-border bg-stellar-card p-12 text-center">
        <p className="text-gray-400">
          Connect your wallet to view your streams.
        </p>
      </div>
    </div>
  );
}
