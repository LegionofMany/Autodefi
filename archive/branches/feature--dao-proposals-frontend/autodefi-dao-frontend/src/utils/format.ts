export function formatAdf(value: number): string {
  if (value >= 1_000_000) return `${(value / 1_000_000).toFixed(2)}M ADF`;
  if (value >= 1_000) return `${value.toLocaleString(undefined, { maximumFractionDigits: 2 })} ADF`;
  return `${value.toLocaleString(undefined, { maximumFractionDigits: 2 })} ADF`;
}

export function compactAdf(value: number): string {
  if (value >= 1_000_000) return `${(value / 1_000_000).toFixed(2)}M`;
  if (value >= 1_000) return `${(value / 1_000).toFixed(2)}K`;
  return `${value}`;
}

export function formatUsd(value: number): string {
  return value.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });
}

export function pct(part: number, total: number): number {
  if (!total) return 0;
  return Number(((part / total) * 100).toFixed(1));
}

export function shortWallet(wallet: string): string {
  if (!wallet.includes('...') && wallet.length > 10) return `${wallet.slice(0, 4)}...${wallet.slice(-4)}`;
  return wallet;
}
