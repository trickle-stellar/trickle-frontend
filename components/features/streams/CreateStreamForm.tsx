'use client';

/**
 * CreateStreamForm — Form for creating a new stream.
 *
 * TODO: Implement with:
 *   - Recipient address input with Stellar address validation
 *   - Asset selector (XLM default, allow custom asset)
 *   - Amount input
 *   - Duration input with unit selector (hours/days/weeks)
 *   - Flow rate display (auto-calculated: amount / duration)
 *   - Submit handler:
 *     1. Call createStream() from services/streams
 *     2. Get transaction XDR back
 *     3. Sign with Freighter
 *     4. Submit signed XDR
 *     5. Redirect to /streams/:address
 *
 * Uses: Input, Button, Card from ui/
 * Uses: useWallet hook for sender address
 */
export function CreateStreamForm() {
  return (
    <div className="space-y-4">
      {/* TODO: Recipient input */}
      {/* TODO: Asset selector */}
      {/* TODO: Amount input */}
      {/* TODO: Duration input */}
      {/* TODO: Flow rate preview */}
      {/* TODO: Submit button */}
      <p className="text-center text-gray-400">
        CreateStreamForm component — to be implemented by contributor.
      </p>
    </div>
  );
}
