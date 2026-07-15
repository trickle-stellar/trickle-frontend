'use client';

/**
 * Settings page — Placeholder for contributors.
 *
 * TODO: Implement with:
 *   - API key management (list, generate, revoke)
 *   - Theme toggle (dark/light)
 *   - Network selector (testnet/mainnet)
 *   - Wallet info display
 *
 * Data sources:
 *   - GET /api/v1/auth/api-keys
 *   - POST /api/v1/auth/api-keys
 *   - DELETE /api/v1/auth/api-keys/:id
 */
export default function SettingsPage() {
  return (
    <div>
      <h1 className="mb-6 text-2xl font-bold text-white">Settings</h1>

      {/* TODO: API key management */}
      <section className="mb-8">
        <h2 className="mb-4 text-lg font-semibold text-white">API Keys</h2>
        <div className="rounded-xl border border-stellar-border bg-stellar-card p-6">
          <p className="text-gray-400">
            API key management coming soon.
          </p>
        </div>
      </section>

      {/* TODO: Theme toggle */}

      {/* TODO: Network selector */}

      {/* TODO: Wallet info */}
    </div>
  );
}
