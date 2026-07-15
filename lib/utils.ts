/**
 * Truncate a Stellar address for display.
 * GABC...XYZ
 */
export function truncateAddress(address: string, chars = 4): string {
  if (address.length <= chars * 2 + 3) return address;
  return `${address.slice(0, chars)}...${address.slice(-chars)}`;
}

/**
 * Format a token amount from stroops (10^7) to display units.
 */
export function formatAmount(stroops: string, decimals = 7): string {
  const num = parseInt(stroops) / Math.pow(10, decimals);
  return num.toLocaleString(undefined, {
    minimumFractionDigits: 0,
    maximumFractionDigits: decimals,
  });
}

/**
 * Calculate flow rate in tokens per second from stroops.
 */
export function flowRatePerSecond(flowRateStroops: string, decimals = 7): string {
  const perSec = parseInt(flowRateStroops) / Math.pow(10, decimals);
  return perSec.toFixed(decimals);
}

/**
 * Format duration in seconds to human-readable string.
 */
export function formatDuration(seconds: number): string {
  const days = Math.floor(seconds / 86400);
  const hours = Math.floor((seconds % 86400) / 3600);

  if (days > 0) return `${days}d ${hours}h`;
  if (hours > 0) return `${hours}h`;
  return `${seconds}s`;
}

/**
 * Validate a Stellar address format.
 */
export function isValidStellarAddress(address: string): boolean {
  return /^G[A-Z0-9]{55}$/.test(address);
}
