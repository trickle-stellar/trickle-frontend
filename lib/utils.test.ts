import { describe, it, expect } from 'vitest';
import {
  truncateAddress,
  formatAmount,
  flowRatePerSecond,
  formatDuration,
  isValidStellarAddress,
} from './utils';

describe('truncateAddress', () => {
  it('should truncate a long address', () => {
    const addr = 'GAKLBGRFXC5SY7Y4D5KPG4FN3YIFHJMHQ6KDG7K4YF7Y4XCD4JS2AA';
    expect(truncateAddress(addr)).toBe('GAKL...S2AA');
  });

  it('should not truncate short addresses', () => {
    const addr = 'GABC';
    expect(truncateAddress(addr)).toBe('GABC');
  });
});

describe('formatAmount', () => {
  it('should format stroops to display units', () => {
    expect(formatAmount('10000000')).toBe('1');
    expect(formatAmount('15000000')).toBe('1.5');
  });
});

describe('flowRatePerSecond', () => {
  it('should calculate flow rate', () => {
    const result = flowRatePerSecond('10000000');
    expect(result).toBe('1.0000000');
  });
});

describe('formatDuration', () => {
  it('should format days and hours', () => {
    expect(formatDuration(90000)).toBe('1d 1h');
  });

  it('should format hours only', () => {
    expect(formatDuration(7200)).toBe('2h');
  });

  it('should format seconds only', () => {
    expect(formatDuration(60)).toBe('60s');
  });
});

describe('isValidStellarAddress', () => {
  it('should validate correct address', () => {
    const valid = 'GAKLBGRFXC5SY7Y4D5KPG4FN3YIFHJMHQ6KDG7K4YF7Y4XCD4JS2AAAA';
    expect(isValidStellarAddress(valid)).toBe(true);
  });

  it('should reject invalid address', () => {
    expect(isValidStellarAddress('abc')).toBe(false);
    expect(isValidStellarAddress('XAKLBGRFXC5SY7Y4D5KPG4FN3YIFHJMHQ6KDG7K4YF7Y4XCD4JS2AAAA')).toBe(false);
  });
});
