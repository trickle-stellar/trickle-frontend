import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';

/**
 * StreamCard — Displays a stream summary.
 *
 * TODO: Implement with real data. Accept a Stream type prop and show:
 *   - Sender → Recipient
 *   - Flow rate
 *   - Status badge (active/paused/cancelled/completed)
 *   - Claimable balance
 *   - Link to /streams/:address
 */
export function StreamCard() {
  return (
    <Card>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-400">
            TODO: Stream summary goes here
          </p>
        </div>
        <Badge variant="info">Active</Badge>
      </div>
    </Card>
  );
}
