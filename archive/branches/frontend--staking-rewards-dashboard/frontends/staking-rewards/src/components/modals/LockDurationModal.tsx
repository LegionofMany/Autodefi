import { useState } from 'react';
import type { StakePosition } from '../../types';
import { ModalFrame } from './ModalFrame';
import clock from '../../assets/svg/icon-clock.svg';

const lockOptions = [
  { days: 30, label: 'No Boost', description: 'Standard lock duration', boost: 0 },
  { days: 60, label: 'Small Boost', description: 'Increase your rewards', boost: 2.5 },
  { days: 90, label: 'Medium Boost', description: 'Balanced lock for better rewards', boost: 5 },
  { days: 180, label: 'High Boost', description: 'Higher rewards for longer commitment', boost: 10 },
  { days: 360, label: 'Max Boost', description: 'Maximum rewards for long-term holders', boost: 15 }
];

export function LockDurationModal({ position, onConfirm, onClose }: { position: StakePosition; onConfirm: (days: number, boost: number) => void; onClose: () => void }) {
  const [selected, setSelected] = useState(position.lockPeriodDays);
  const selectedBoost = lockOptions.find((option) => option.days === selected)?.boost ?? 0;

  return (
    <ModalFrame title="Lock Duration" subtitle="Choose your lock duration to maximize your reward boost." onClose={onClose}>
      <div className="lock-duration-list">
        {lockOptions.map((option) => (
          <button key={option.days} className={selected === option.days ? 'selected' : ''} onClick={() => setSelected(option.days)}>
            <img src={clock} alt="" />
            <span><strong>{option.days} Days</strong><b>{option.label}</b><small>{option.description}</small></span>
            <em>+{option.boost.toFixed(1)}%<small>Boost</small></em>
            {selected === option.days && <i>✓</i>}
          </button>
        ))}
      </div>
      <div className="info-callout">The longer you lock your tokens, the higher your reward boost. Locked tokens cannot be withdrawn until the lock period ends.</div>
      <button className="primary-button full" onClick={() => { onConfirm(selected, selectedBoost); onClose(); }}>Confirm Lock Duration</button>
    </ModalFrame>
  );
}
