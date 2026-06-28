import { useState } from 'react';
import type { DashboardData } from '../../types';
import { ModalFrame } from './ModalFrame';
import rewardIcon from '../../assets/svg/icon-reward.svg';
import orb from '../../assets/svg/adf-orb.svg';
import gas from '../../assets/svg/icon-gas.svg';
import gift from '../../assets/svg/icon-gift.svg';

export function ClaimRewardsModal({ data, totalBoost, onClaim, onClose }: { data: DashboardData; totalBoost: number; onClaim: () => Promise<unknown>; onClose: () => void }) {
  const [busy, setBusy] = useState(false);

  async function claim() {
    setBusy(true);
    try {
      await onClaim();
      onClose();
    } finally {
      setBusy(false);
    }
  }

  return (
    <ModalFrame title="Claim All Rewards" subtitle="You are about to claim all your pending rewards." onClose={onClose}>
      <section className="modal-card claim-total-card">
        <img src={rewardIcon} alt="" />
        <div><small>Total Pending Rewards</small><strong>1,245.80 ADF</strong><b>≈ $1,245.80 USD</b></div>
        <dl><dt>Available to Claim</dt><dd>1,245.80 ADF</dd><dt>Locked Rewards</dt><dd>0.00 ADF</dd><dt>Total Boost Applied</dt><dd className="green">+{totalBoost.toFixed(2)}%</dd><dt>Reward Source</dt><dd>AutoDeFi Ecosystem</dd></dl>
      </section>
      <section className="modal-card split-card"><div><h3>Reward Destination</h3><p><img src={orb} alt="" />{data.wallet.shortAddress}<small>{data.wallet.network}</small></p></div><button>Change</button></section>
      <section className="modal-card split-card"><div><h3>Network Fee (Estimated) ⓘ</h3><p><img src={gas} alt="" />0.0032 ETH<small>≈ $5.12 USD</small></p></div></section>
      <section className="modal-card summary-checks"><h3>Summary</h3><p>✓ AutoCompound is enabled for future rewards.</p><p>✓ Claimed rewards will be added to your wallet.</p></section>
      <button className="primary-button full claim-button" onClick={claim} disabled={busy}><img src={gift} alt="" />{busy ? 'Claiming Rewards...' : 'Claim Rewards'}</button>
      <button className="secondary-button full" onClick={onClose}>Cancel</button>
    </ModalFrame>
  );
}
