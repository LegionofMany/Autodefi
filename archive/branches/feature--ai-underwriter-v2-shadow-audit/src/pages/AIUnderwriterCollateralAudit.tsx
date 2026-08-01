import { collateralAuditModule } from '../features/ai-underwriter/collateralAuditModule';
import './aiUnderwriterV2.css';
import './aiUnderwriterCollateral.css';

export function AIUnderwriterCollateralAudit() {
  return (
    <div className="ai-underwriter-page ai-module-page">
      <header className="ai-hero compact">
        <div className="ai-brand-lockup">
          <div className="ai-logo-mark">A</div>
          <div>
            <h2>AI Underwriter Command Center</h2>
            <p>Module 8 review page for collateral coverage, protection, and recovery quality.</p>
          </div>
        </div>
      </header>

      <section className="ai-collateral-grid">
        <main className="ai-card ai-collateral-main">
          <div className="ai-card-title">
            <div>
              <h2>{collateralAuditModule.title}</h2>
              <p>{collateralAuditModule.subtitle}</p>
            </div>
            <span className="ai-tone ai-tone-green">Confidence {collateralAuditModule.confidence}%</span>
          </div>

          <div className="ai-collateral-profile">
            <div>
              <span>Collateral Type</span>
              <strong>{collateralAuditModule.collateralType}</strong>
              <small>{collateralAuditModule.protectionStatus}</small>
            </div>
            <div>
              <span>Collateral Value</span>
              <strong>${collateralAuditModule.collateralValue.toLocaleString()}</strong>
              <small>${collateralAuditModule.securedAmount.toLocaleString()} secured amount</small>
            </div>
            <div>
              <span>Coverage Ratio</span>
              <strong>{collateralAuditModule.collateralCoverage}%</strong>
              <small>Recovery score {collateralAuditModule.recoveryScore}%</small>
            </div>
          </div>

          <div className="ai-collateral-signal-grid">
            {collateralAuditModule.verificationSignals.map((signal) => (
              <div className="ai-collateral-signal-card" key={signal.reasonCode}>
                <span>{signal.label}</span>
                <strong>{signal.value}</strong>
                <small>{signal.status} · {signal.reasonCode}</small>
              </div>
            ))}
          </div>
        </main>

        <aside className="ai-card ai-results-card">
          <div className="ai-card-title"><h3>Collateral Results</h3><span className="ai-tone ai-tone-green">Pass</span></div>
          <div className="ai-ring"><div><strong>{collateralAuditModule.recoveryScore}%</strong><span>Recovery</span></div></div>
          <div className="ai-summary-list">
            <div className="ai-result-row"><span>Decision Impact</span><b className="ai-text-green">{collateralAuditModule.decisionImpact}</b></div>
            <div className="ai-result-row"><span>Risk Adjustment</span><b className="ai-text-green">{collateralAuditModule.riskAdjustment}</b></div>
            <div className="ai-result-row"><span>Coverage Ratio</span><b className="ai-text-green">{collateralAuditModule.collateralCoverage}%</b></div>
            <div className="ai-result-row"><span>Protection</span><b className="ai-text-cyan">{collateralAuditModule.protectionStatus}</b></div>
          </div>
        </aside>

        <section className="ai-card ai-span-3">
          <div className="ai-card-title"><h3>Coverage Metrics</h3><span className="ai-tone ai-tone-cyan">Protection Signals</span></div>
          <div className="ai-factor-grid">
            {collateralAuditModule.coverageMetrics.map((metric) => (
              <div className="ai-factor-card" key={metric.label}>
                <span>{metric.label}</span>
                <strong>{metric.value}</strong>
                <small>{metric.detail}</small>
              </div>
            ))}
          </div>
        </section>

        <section className="ai-card ai-span-3">
          <div className="ai-card-title"><h3>V1 / V2 Collateral Audit Notes</h3><span className="ai-tone ai-tone-orange">Shadow Mode</span></div>
          <div className="ai-dual-note-grid">
            <p><b>V1:</b> {collateralAuditModule.v1DecisionUse}</p>
            <p><b>V2:</b> {collateralAuditModule.v2ShadowAuditUse}</p>
          </div>
          <div className="ai-factor-grid compact">
            {collateralAuditModule.recoveryMetrics.map((metric) => (
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
