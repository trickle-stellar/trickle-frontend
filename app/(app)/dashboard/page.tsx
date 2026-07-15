/**
 * Dashboard page — Placeholder for contributors.
 *
 * TODO: Implement with:
 *   - Wallet balance overview (XLM + assets)
 *   - Active streams summary (count, total flowing)
 *   - Recent activity feed
 *   - Quick actions: Create Stream, View All
 *
 * Data sources:
 *   - GET /api/v1/streams/sender/:address (outgoing)
 *   - GET /api/v1/streams/recipient/:address (incoming)
 *   - Horizon: account balance
 */
export default function DashboardPage() {
  return (
    <div>
      <h1 className="mb-6 text-2xl font-bold text-white">Dashboard</h1>

      {/* TODO: Implement wallet balance overview */}

      {/* TODO: Implement active streams summary */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {['Active Streams', 'Total Flowing', 'Claimable'].map((label) => (
          <div
            key={label}
            className="rounded-xl border border-stellar-border bg-stellar-card p-6"
          >
            <p className="text-sm text-gray-400">{label}</p>
            <p className="mt-2 text-2xl font-bold text-white">--</p>
          </div>
        ))}
      </div>

      {/* TODO: Implement recent activity feed */}
      {/* TODO: Implement quick action buttons */}
    </div>
  );
}
