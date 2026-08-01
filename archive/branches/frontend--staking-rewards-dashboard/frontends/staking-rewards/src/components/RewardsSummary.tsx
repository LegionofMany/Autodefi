import type { DashboardData } from '../types';

const tierColors = ['#126CFF', '#FFB21A', '#FF4057'];

export function RewardsSummary({ summary, onClaim }: { summary: DashboardData['rewardsSummary']; onClaim: () => void }) {
  const circumference = 2 * Math.PI * 46;
  let offset = 0;

  return (
    <section className="panel rewards-summary-panel">
      <h2>Rewards Summary <span>ⓘ</span></h2>
      <div className="donut-layout">
        <svg className="donut" viewBox="0 0 120 120" role="img" aria-label="Pending rewards by tier">
          <circle cx="60" cy="60" r="46" className="donut-track" />
          {summary.tiers.map((tier, index) => {
            const dash = (tier.percent / 100) * circumference;
            const circle = <circle key={tier.tier} cx="60" cy="60" r="46" className="donut-arc" stroke={tierColors[index]} strokeDasharray={`${dash} ${circumference - dash}`} strokeDashoffset={-offset} />;
            offset += dash;
            return circle;
          })}
          <text x="60" y="57" textAnchor="middle" className="donut-value">${summary.totalPendingUsd.toLocaleString()}</text>
          <text x="60" y="73" textAnchor="middle" className="donut-label">Pending Rewards</text>
        </svg>
        <div className="tier-legend">
          {summary.tiers.map((tier, index) => (
            <div key={tier.tier}>
              <span style={{ background: tierColors[index] }} />
              <p>{tier.label}<small>{tier.percent.toFixed(1)}%</small></p>
              <b>${tier.valueUsd.toLocaleString(undefined, { minimumFractionDigits: 2 })}<small>{tier.percent.toFixed(1)}%</small></b>
            </div>
          ))}
          <div className="legend-total"><p>Total</p><b>${summary.totalPendingUsd.toLocaleString(undefined, { minimumFractionDigits: 2 })}</b><b>100%</b></div>
        </div>
      </div>
      <button className="primary-button full" onClick={onClaim}>Claim All Rewards</button>
    </section>
  );
}
