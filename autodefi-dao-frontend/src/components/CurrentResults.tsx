import type { GovernanceProposal } from '../types/governance';
import { compactAdf, formatAdf, pct } from '../utils/format';

interface CurrentResultsProps {
  proposal: GovernanceProposal;
}

export function CurrentResults({ proposal }: CurrentResultsProps) {
  const { forAdf, againstAdf, abstainAdf, quorumAdf } = proposal.votes;
  const total = forAdf + againstAdf + abstainAdf;
  const forPct = pct(forAdf, total);
  const againstPct = pct(againstAdf, total);
  const abstainPct = pct(abstainAdf, total);
  const quorumPct = quorumAdf ? Math.min((total / quorumAdf) * 100, 120) : 0;
  const circumference = 2 * Math.PI * 48;
  const forDash = (forPct / 100) * circumference;
  const againstDash = (againstPct / 100) * circumference;
  const abstainDash = (abstainPct / 100) * circumference;

  return (
    <section className="right-card results-card">
      <h2>Current Results</h2>
      <div className="results-body">
        <div className="donut-wrap" aria-label="Vote result donut chart">
          <svg className="donut-chart" viewBox="0 0 120 120" role="img">
            <circle cx="60" cy="60" r="48" className="donut-bg" />
            <circle cx="60" cy="60" r="48" className="donut-for" strokeDasharray={`${forDash} ${circumference - forDash}`} />
            <circle cx="60" cy="60" r="48" className="donut-against" strokeDasharray={`${againstDash} ${circumference - againstDash}`} strokeDashoffset={-forDash} />
            <circle cx="60" cy="60" r="48" className="donut-abstain" strokeDasharray={`${abstainDash} ${circumference - abstainDash}`} strokeDashoffset={-(forDash + againstDash)} />
          </svg>
          <div className="donut-center"><span>Total Votes</span><strong>{compactAdf(total)}</strong><small>ADF</small></div>
        </div>
        <div className="legend-list">
          <div><span className="dot for" /><strong>For</strong><em>{forPct.toFixed(1)}%</em><small>{formatAdf(forAdf)}</small></div>
          <div><span className="dot against" /><strong>Against</strong><em>{againstPct.toFixed(1)}%</em><small>{formatAdf(againstAdf)}</small></div>
          <div><span className="dot abstain" /><strong>Abstain</strong><em>{abstainPct.toFixed(1)}%</em><small>{formatAdf(abstainAdf)}</small></div>
        </div>
      </div>
      <div className="quorum-section">
        <div><strong>Quorum Progress</strong><span>{(total / quorumAdf * 100 || 0).toFixed(1)}%</span></div>
        <div className="quorum-track"><span style={{ width: `${Math.min(quorumPct, 100)}%` }} /></div>
        <small>{formatAdf(total)} / {formatAdf(quorumAdf)}</small>
      </div>
    </section>
  );
}
