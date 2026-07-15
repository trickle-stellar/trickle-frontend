'use client';

/**
 * Create stream page — Placeholder for contributors.
 *
 * TODO: Implement with CreateStreamForm component:
 *   - Recipient address input (with validation)
 *   - Asset selector (XLM, custom asset)
 *   - Amount input
 *   - Duration input (hours/days/weeks)
 *   - Flow rate preview (amount per second)
 *   - Submit button → builds transaction XDR → Freighter signs → submit
 *
 * Components to use:
 *   - CreateStreamForm from @/components/features/streams/CreateStreamForm
 *
 * Services:
 *   - createStream() from @/services/streams
 */
export default function CreateStreamPage() {
  return (
    <div>
      <h1 className="mb-6 text-2xl font-bold text-white">Create Stream</h1>

      {/* TODO: Implement CreateStreamForm */}
      <div className="mx-auto max-w-lg rounded-xl border border-stellar-border bg-stellar-card p-8">
        <p className="text-center text-gray-400">
          Create stream form coming soon. This page should use the
          CreateStreamForm component.
        </p>
      </div>
    </div>
  );
}
