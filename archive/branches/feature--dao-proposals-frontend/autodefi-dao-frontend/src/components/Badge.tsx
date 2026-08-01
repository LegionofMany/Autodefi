import type { ProposalCategory, ProposalStatus } from '../types/governance';

interface BadgeProps {
  children: string;
  tone?: ProposalStatus | ProposalCategory | 'Executed' | 'ActiveTab';
  size?: 'sm' | 'md';
}

export function Badge({ children, tone = children as BadgeProps['tone'], size = 'sm' }: BadgeProps) {
  const key = String(tone).toLowerCase().replace(/\s+/g, '-');
  return <span className={`badge badge-${size} tone-${key}`}>{children}</span>;
}
