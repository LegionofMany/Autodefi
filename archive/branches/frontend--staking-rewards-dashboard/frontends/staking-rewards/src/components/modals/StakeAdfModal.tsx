import { useMemo, useState } from 'react';
import type { DashboardData, RiskTier, StakeRequest } from '../../types';
import { ModalFrame } from './ModalFrame';
import wallet from '../../assets/svg/icon-wallet.svg';
import calendar from '../../assets/svg/icon-calendar.svg';
import warning from '../../assets/svg/icon-warning.svg';
import adfBlue from '../../assets/svg/adf-blue.svg';
import adfOrange from '../../assets/svg/adf-orange.svg';
import adfRed from '../../assets/svg/adf-red.svg';

interface Props {
  data: DashboardData;
  totalBoost: number;
  onSubmit: (request: StakeRequest) => Promise<unknown>;
  onClose: () => void;
}

const tiers = [
  { tier: 1 as RiskTier, label: 'Tier 1', risk: 'Low Risk', apr: 7.25, options: [30, 60, 90], best: 'Best for: Conservative staking', exposure: 'Lower-risk borrower pools, stronger collateral, higher down payment borrowers', icon: adfBlue },
  { tier: 2 as RiskTier, label: 'Tier 2', risk: 'Medium Risk', apr: 15.8, options: [90, 180], best: 'Best for: Balanced yield', exposure: 'Standard borrower pools, good-credit borrowers, balanced collateral coverage', icon: adfOrange },
  { tier: 3 as RiskTier, label: 'Tier 3', risk: 'High Risk', apr: 28.75, options: [180, 360], best: 'Best for: Maximum yield', exposure: 'Higher-yield pools, deeper risk exposure, challenge-credit lending allocations', icon: adfRed }
];
const lockBoost: Record<number, number> = { 30: 0, 60: 2.5, 90: 5, 180: 10, 360: 15 };

export function StakeAdfModal({ data, totalBoost, onSubmit, onClose }: Props) {
  const [amount, setAmount] = useState('5000');
  const [tier, setTier] = useState<RiskTier>(2);
  const [lock, setLock] = useState(180);
  const [accepted, setAccepted] = useState(false);
  const [busy, setBusy] = useState(false);

  const selectedTier = tiers.find((item) => item.tier === tier)!;
  const numericAmount = Number(amount || 0);
  const lockBoostValue = lockBoost[lock] ?? 0;
  const estimatedApr = useMemo(() => selectedTier.apr * (1 + (lockBoostValue + 7.5) / 100), [selectedTier.apr, lockBoostValue]);
  const estimatedRewards = numericAmount * (estimatedApr / 100) * (lock / 365);
  const estimatedUsd = estimatedRewards * data.token.priceUsd;
  const unlockDate = new Date(Date.now() + lock * 86400000).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  const invalidAmount = numericAmount <= 0 || numericAmount > data.wallet.balanceADF || numericAmount < 100;

  async function submit() {
    if (invalidAmount || !accepted || busy) return;
    setBusy(true);
    try {
      await onSubmit({ amountADF: numericAmount, tier, lockPeriodDays: lock, autoCompoundEnabled: data.autoCompound.enabled });
      onClose();
    } finally {
      setBusy(false);
    }
  }

  return (
    <ModalFrame title="Stake ADF Tokens" subtitle="Stake ADF to earn rewards from the AutoDeFi ecosystem, including lender pool yield, governance incentives, and protocol rewards." width="lg" onClose={onClose}>
      <div className="stake-modal-grid">
        <div className="modal-column">
          <section className="modal-card numbered">
            <span className="step-badge">1</span><h3>Wallet Balance</h3>
            <div className="wallet-balance-row"><span><small>Available Balance</small><strong>{data.wallet.balanceADF.toLocaleString()} ADF</strong></span><button><img src={wallet} alt="" />{data.wallet.shortAddress}</button></div>
          </section>
          <section className="modal-card numbered">
            <span className="step-badge">2</span><h3>Amount to Stake</h3>
            <div className="amount-input"><input value={amount} onChange={(e) => setAmount(e.target.value)} inputMode="decimal" /><span>ADF</span><button onClick={() => setAmount(String(data.wallet.balanceADF))}>MAX</button></div>
            <div className="quick-amounts">{[25, 50, 75].map((p) => <button key={p} onClick={() => setAmount(String(Math.floor(data.wallet.balanceADF * p / 100)))}>{p}%</button>)}<button onClick={() => setAmount(String(data.wallet.balanceADF))}>MAX</button></div>
            <div className="row-between muted"><span>Minimum Stake: <b>100 ADF</b></span><span>You will stake: <b className="green">{numericAmount.toLocaleString()} ADF</b></span></div>
          </section>
          <section className="modal-card numbered tier-select-card">
            <span className="step-badge">3</span><h3>Select Risk Tier</h3>
            {tiers.map((item) => (
              <button key={item.tier} className={`tier-option tier-${item.tier} ${tier === item.tier ? 'selected' : ''}`} onClick={() => { setTier(item.tier); if (!item.options.includes(lock)) setLock(item.options[item.options.length - 1]); }}>
                <img src={item.icon} alt="" /><span><strong>{item.label}</strong><b>{item.risk}</b><small>APR<br />{item.apr.toFixed(2)}%</small></span><span><small>Lock Options<br />{item.options.join(' / ')} days</small></span><span><em>{item.best}</em><small>{item.exposure}</small></span><i />
              </button>
            ))}
          </section>
          <div className="adf-rules-callout">ADF staking gives exposure to AutoDeFi ecosystem rewards. Borrowers repay loans through stable-value rails. ADF is used for staking, governance, collateral, access, and reward boosts.</div>
        </div>
        <div className="modal-column">
          <section className="modal-card numbered">
            <span className="step-badge">4</span><h3>Lock Duration</h3>
            <div className="lock-grid">{[30, 60, 90, 180, 360].map((days) => <button key={days} disabled={!selectedTier.options.includes(days)} className={lock === days ? 'selected' : ''} onClick={() => setLock(days)}><strong>{days}</strong><small>Days</small><b>+{(lockBoost[days] ?? 0).toFixed(1)}%</b><small>Boost</small></button>)}</div>
            <p className="muted">Lock longer to earn higher reward boosts.</p>
          </section>
          <section className="modal-card numbered preview-card">
            <span className="step-badge">5</span><h3>Stake Preview</h3>
            <dl>
              <dt>Stake Amount</dt><dd>{numericAmount.toLocaleString()} ADF</dd>
              <dt>Selected Tier</dt><dd className={`risk risk-${tier}`}>Tier {tier} ({selectedTier.risk})</dd>
              <dt>Base APR</dt><dd>{selectedTier.apr.toFixed(2)}%</dd>
              <dt>Lock Boost ({lock} Days)</dt><dd>+{lockBoostValue.toFixed(2)}%</dd>
              <dt>Governance Boost</dt><dd>+7.50%</dd>
              <dt>Total Boost</dt><dd>+{totalBoost.toFixed(2)}%</dd>
              <dt className="divider">Estimated APR</dt><dd className="divider green">{estimatedApr.toFixed(2)}%</dd>
              <dt>Lock Period</dt><dd>{lock} Days</dd>
              <dt>Estimated Rewards</dt><dd className="green">{estimatedRewards.toFixed(2)} ADF</dd>
              <dt>Estimated USD Value</dt><dd className="green">${estimatedUsd.toFixed(2)}</dd>
              <dt>Unlock Date</dt><dd><img src={calendar} alt="" /> {unlockDate}</dd>
            </dl>
          </section>
          <section className="modal-card numbered">
            <span className="step-badge">6</span><h3>Risk Disclosure</h3>
            <label className="checkbox-row"><input type="checkbox" checked={accepted} onChange={(e) => setAccepted(e.target.checked)} />I understand that staking rewards may vary based on protocol performance, loan pool activity, treasury incentives, risk tier allocation, and DAO-approved reward policies.</label>
            <div className="warning-callout"><img src={warning} alt="" />Higher APR tiers may carry higher exposure to pool volatility and borrower repayment performance.</div>
          </section>
          <section className="modal-actions numbered"><span className="step-badge">7</span><h3>Confirm Stake</h3><div><button className="secondary-button" onClick={onClose}>Cancel</button><button className="primary-button" onClick={submit} disabled={invalidAmount || !accepted || busy}>{busy ? 'Staking ADF...' : invalidAmount ? 'Enter Valid Amount' : !accepted ? 'Accept Risk Disclosure' : 'Confirm Stake'}</button></div></section>
        </div>
      </div>
    </ModalFrame>
  );
}
