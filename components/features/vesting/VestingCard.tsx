import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';

/**
 * VestingCard — Displays a vesting schedule summary.
 *
 * TODO: Implement with real data. Accept a VestingSchedule type prop:
 *   - Beneficiary address
 *   - Total amount
 *   - Cliff status
 *   - Vesting progress (%)
 *   - Status badge
 *   - Link to /vesting/:address
 */
export function VestingCard() {
  return (
    <Card>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-400">
            TODO: Vesting schedule summary goes here
          </p>
        </div>
        <Badge variant="info">Active</Badge>
      </div>
    </Card>
  );
}
