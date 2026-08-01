import { marketRiskAuditModule } from '../features/ai-underwriter/marketRiskAuditModule';
import './aiUnderwriterV2.css';
import './aiUnderwriterMarketRisk.css';

export function AIUnderwriterMarketRiskAudit() {
  return (
    <div className="ai-underwriter-page ai-module-page">
      <header className="ai-hero compact">
        <div className="ai-brand-lockup">
          <div className="ai-logo-mark">A</div>
          <div>
            <h2>AI Underwriter Command Center</h2>
            <p>Module 9 review page for macro, segment, liquidity, and recovery-market risk.</p>
          </div>
        </div>
      </header>

      <section className="ai-market-grid">
        <main className="ai-card ai-market-main">
          <div className="ai-card-title">
            <div>
              <h2>{marketRiskAuditModule.title}</h2>
              <p>{marketRiskAuditModule.subtitle}</p>
            </div>
            <span className="ai-tone ai-tone-green">Confidence {marketRiskAuditModule.confidence}%</span>
          </div>

          <div className="ai-market-profile">
            <div>
              <span>Market Risk Score</span>
              <strong>{marketRiskAuditModule.marketRiskScore}</strong>
              <small>{marketRiskAuditModule.segmentRisk} segment risk</small>
            </div>
            <div>
              <span>Rate Environment</span>
              <strong>{marketRiskAuditModule.rateEnvironment}</strong>
              <small>Portfolio sensitivity watch</small>
            </div>
            <div>
              <span>Demand + Liquidity</span>
              <strong>{marketRiskAuditModule.demandSignal}</strong>
              <small>{marketRiskAuditModule.liquiditySignal} recovery liquidity</small>
            </div>
          </div>

          <div className="ai-market-signal-grid">
            {marketRiskAuditModule.verificationSignals.map((signal) => (
              <div className="ai-market-signal-card" key={signal.reasonCode}>
                <span>{signal.label}</span>
                <strong>{signal.value}</strong>
                <small>{signal.status} · {signal.reasonCode}</small>
              </div>
            ))}
          </div>
        </main>

        <aside className="ai-card ai-results-card">
          <div className="ai-card-title"><h3>Market Results</h3><span className="ai-tone ai-tone-yellow">Watch</span></div>
          <div className="ai-ring"><div><strong>{marketRiskAuditModule.marketRiskScore}</strong><span>Risk Score</span></div></div>
          <div className="ai-summary-list">
            <div className="ai-result-row"><span>Decision Impact</span><b className="ai-text-green">{marketRiskAuditModule.decisionImpact}</b></div>
            <div className="ai-result-row"><span>Risk Adjustment</span><b className="ai-text-yellow">{marketRiskAuditModule.riskAdjustment}</b></div>
            <div className="ai-result-row"><span>Depreciation</span><b className="ai-text-green">{marketRiskAuditModule.depreciationTrend}</b></div>
            <div className="ai-result-row"><span>Liquidity</span><b className="ai-text-cyan">{marketRiskAuditModule.liquiditySignal}</b></div>
          </div>
        </aside>

        <section className="ai-card ai-span-3">
          <div className="ai-card-title"><h3>Macro Risk Metrics</h3><span className="ai-tone ai-tone-cyan">Market Signals</span></div>
          <div className="ai-factor-grid">
            {marketRiskAuditModule.macroMetrics.map((metric) => (
              <div className="ai-factor-card" key={metric.label}>
                <span>{metric.label}</span>
                <strong>{metric.value}</strong>
                <small>{metric.detail}</small>
              </div>
            ))}
          </div>
        </section>

        <section className="ai-card ai-span-3">
          <div className="ai-card-title"><h3>V1 / V2 Market Risk Audit Notes</h3><span className="ai-tone ai-tone-orange">Shadow Mode</span></div>
          <div className="ai-dual-note-grid">
            <p><b>V1:</b> {marketRiskAuditModule.v1DecisionUse}</p>
            <p><b>V2:</b> {marketRiskAuditModule.v2ShadowAuditUse}</p>
          </div>
          <div className="ai-factor-grid compact">
            {marketRiskAuditModule.segmentMetrics.map((metric) => (
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
