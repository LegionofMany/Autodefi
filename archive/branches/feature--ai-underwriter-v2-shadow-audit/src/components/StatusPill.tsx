import type { Tone } from '../data/autodefiData';

export function StatusPill({ children, tone = 'green' }: { children: string; tone?: Tone }) {
  return <span className={`pill tone-${tone}`}>{children}</span>;
}
