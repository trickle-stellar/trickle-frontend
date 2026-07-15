import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';

/**
 * MultiStreamCard — Displays a multistream summary.
 *
 * TODO: Implement with real data. Accept a Multistream type prop:
 *   - Sender address
 *   - Number of recipients
 *   - Total amount + flow rate
 *   - Status badge
 *   - Link to /multistreams/:address
 */
export function MultiStreamCard() {
  return (
    <Card>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-400">
            TODO: Multistream summary goes here
          </p>
        </div>
        <Badge variant="info">Active</Badge>
      </div>
    </Card>
  );
}
