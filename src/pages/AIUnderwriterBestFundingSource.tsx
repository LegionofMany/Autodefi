import { bestFundingSourceModule } from '../features/ai-underwriter/bestFundingSourceModule';
import './aiUnderwriterV2.css';
import './aiUnderwriterBestFundingSource.css';

export function AIUnderwriterBestFundingSource() {
  return (
    <div className="ai-underwriter-page ai-module-page">
      <header className="ai-hero compact">
        <div className="ai-brand-lockup">
          <div className="ai-logo-mark">A</div>
          <div>
            <h2>AI Underwriter Command Center</h2>
            <p>Module 12 review page for capital pool routing and funding readiness.</p>
          </div>
        </div>
      </header>

      <section className="ai-funding-grid">
        <main className="ai-card ai-funding-main">
          <div className="ai-card-title">
            <div>
              <h2>{bestFundingSourceModule.title}</h2>
              <p>{bestFundingSourceModule.subtitle}</p>
            </div>
            <span className="ai-tone ai-tone-green">Confidence {bestFundingSourceModule.confidence}%</span>
          </div>

          <div className="ai-funding-profile">
            <div>
              <span>Selected Source</span>
              <strong>{bestFundingSourceModule.selectedSource}</strong>
              <small>{bestFundingSourceModule.poolTier}</small>
            </div>
            <div>
              <span>Capital Match</span>
              <strong>{bestFundingSourceModule.capitalMatchScore}%</strong>
              <small>{bestFundingSourceModule.poolUtilization}% pool utilization</small>
            </div>
            <div>
              <span>APR / Expected Yield</span>
              <strong>{bestFundingSourceModule.expectedApr}% / {bestFundingSourceModule.expectedYield}%</strong>
              <small>{bestFundingSourceModule.reserveCoverage} reserve coverage</small>
            </div>
          </div>

          <div className="ai-funding-signal-grid">
            {bestFundingSourceModule.fundingSignals.map((signal) => (
              <div className="ai-funding-signal-card" key={signal.reasonCode}>
                <span>{signal.label}</span>
                <strong>{signal.value}</strong>
                <small>{signal.status} · {signal.reasonCode}</small>
              </div>
            ))}
          </div>
        </main>

        <aside className="ai-card ai-results-card">
          <div className="ai-card-title"><h3>Funding Results</h3><span className="ai-tone ai-tone-green">Best Match</span></div>
          <div className="ai-ring"><div><strong>{bestFundingSourceModule.capitalMatchScore}%</strong><span>Match</span></div></div>
          <div className="ai-summary-list">
            <div className="ai-result-row"><span>Decision Impact</span><b className="ai-text-green">{bestFundingSourceModule.decisionImpact}</b></div>
            <div className="ai-result-row"><span>Risk Adjustment</span><b className="ai-text-green">{bestFundingSourceModule.riskAdjustment}</b></div>
            <div className="ai-result-row"><span>Pool Tier</span><b className="ai-text-cyan">{bestFundingSourceModule.poolTier}</b></div>
            <div className="ai-result-row"><span>Reserve Coverage</span><b className="ai-text-green">{bestFundingSourceModule.reserveCoverage}</b></div>
          </div>
        </aside>

        <section className="ai-card ai-span-3">
          <div className="ai-card-title"><h3>Source Match Metrics</h3><span className="ai-tone ai-tone-cyan">Capital Signals</span></div>
          <div className="ai-factor-grid">
            {bestFundingSourceModule.sourceMetrics.map((metric) => (
              <div className="ai-factor-card" key={metric.label}>
                <span>{metric.label}</span>
                <strong>{metric.value}</strong>
                <small>{metric.detail}</small>
              </div>
            ))}
          </div>
        </section>

        <section className="ai-card ai-span-3">
          <div className="ai-card-title"><h3>V1 / V2 Funding Source Notes</h3><span className="ai-tone ai-tone-orange">Shadow Mode</span></div>
          <div className="ai-dual-note-grid">
            <p><b>V1:</b> {bestFundingSourceModule.v1DecisionUse}</p>
            <p><b>V2:</b> {bestFundingSourceModule.v2ShadowAuditUse}</p>
          </div>
          <div className="ai-factor-grid compact">
            {bestFundingSourceModule.poolMetrics.map((metric) => (
              <div className="ai-factor-card" key={metric.label}>
                <span>{metric.label}</span>
                <strong>{metric.value}</strong>
                <small>{metric.detail}</small>
              </div>
            ))}
          </div>
        </section>
      </section>
    </div>
  );
}
