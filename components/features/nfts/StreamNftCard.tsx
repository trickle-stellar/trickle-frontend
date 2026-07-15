import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';

/**
 * StreamNftCard — Displays a stream NFT summary.
 *
 * TODO: Implement with real data. Accept a StreamNft type prop:
 *   - Stream contract address
 *   - Owner address
 *   - Remaining amount
 *   - Status badge
 *   - Link to /nfts/:address
 */
export function StreamNftCard() {
  return (
    <Card>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-400">
            TODO: Stream NFT summary goes here
          </p>
        </div>
        <Badge variant="info">Active</Badge>
      </div>
    </Card>
  );
}
