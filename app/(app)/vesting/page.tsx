/**
 * Vesting list — Placeholder for contributors.
 *
 * TODO: Implement with:
 *   - List of vesting schedules (created by user or for user)
 *   - Each card: beneficiary, total amount, cliff, progress
 *   - Empty state, loading skeleton
 *
 * Data sources:
 *   - GET /api/v1/vesting?beneficiary=:address
 */
export default function VestingPage() {
  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-white">Vesting</h1>
        {/* TODO: Link to /vesting/new */}
      </div>

      <div className="rounded-xl border border-stellar-border bg-stellar-card p-12 text-center">
        <p className="text-gray-400">
          Connect your wallet to view vesting schedules.
        </p>
      </div>
    </div>
  );
}
