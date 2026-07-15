/**
 * Features page — Placeholder for contributors.
 *
 * TODO: Implement with detailed feature descriptions.
 * Each feature section should include:
 *   - Feature name and icon
 *   - Description of what it does
 *   - How it works on Stellar/Soroban
 *   - Screenshot or diagram (when available)
 *
 * Features to document:
 *   1. Payment Streams
 *   2. Multi-Streams
 *   3. Vesting Schedules
 *   4. Stream NFTs
 *   5. Low-fee micro-transactions
 *   6. Wallet integration (Freighter)
 */
export default function FeaturesPage() {
  return (
    <div className="dark bg-stellar-darker">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <h1 className="mb-6 text-4xl font-bold text-white">Features</h1>
        <p className="mb-12 max-w-2xl text-lg text-gray-400">
          Everything Trickle can do — and everything you can help build.
        </p>

        {/* TODO: Implement feature sections */}
        <div className="grid gap-6 md:grid-cols-2">
          {[
            'Payment Streams',
            'Multi-Streams',
            'Vesting Schedules',
            'Stream NFTs',
          ].map((feature) => (
            <div
              key={feature}
              className="rounded-xl border border-stellar-border bg-stellar-card p-8"
            >
              <h3 className="mb-3 text-xl font-semibold text-white">
                {feature}
              </h3>
              <p className="text-gray-400">
                {/* TODO: Add real description for {feature} */}
                Coming soon — this section needs real content describing the
                feature.
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
