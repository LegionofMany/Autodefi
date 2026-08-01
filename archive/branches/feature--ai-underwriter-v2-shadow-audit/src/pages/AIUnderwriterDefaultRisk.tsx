import { defaultRiskModule } from '../features/ai-underwriter/defaultRiskModule';
import './aiUnderwriterV2.css';
import './aiUnderwriterDefaultRisk.css';

export function AIUnderwriterDefaultRisk() {
  return (
    <div className="ai-underwriter-page ai-module-page">
      <header className="ai-hero compact">
        <div className="ai-brand-lockup">
          <div className="ai-logo-mark">A</div>
          <div>
            <h2>AI Underwriter Command Center</h2>
            <p>Module 11 review page for default risk, expected loss, and recovery outlook.</p>
          </div>
        </div>
      </header>

      <section className="ai-default-grid">
        <main className="ai-card ai-default-main">
          <div className="ai-card-title">
            <div>
              <h2>{defaultRiskModule.title}</h2>
              <p>{defaultRiskModule.subtitle}</p>
            </div>
            <span className="ai-tone ai-tone-green">Confidence {defaultRiskModule.confidence}%</span>
          </div>

          <div className="ai-default-profile">
            <div>
              <span>Default Risk Score</span>
              <strong>{defaultRiskModule.defaultRiskScore}</strong>
              <small>Low-risk band</small>
            </div>
            <div>
              <span>PD / LGD</span>
              <strong>{defaultRiskModule.probabilityOfDefault}% / {defaultRiskModule.lossGivenDefault}%</strong>
              <small>{defaultRiskModule.expectedLoss}% expected loss</small>
            </div>
            <div>
              <span>Payment Behavior</span>
              <strong>{defaultRiskModule.paymentBehaviorScore}/100</strong>
              <small>{defaultRiskModule.recoveryOutlook}</small>
            </div>
          </div>

          <div className="ai-default-signal-grid">
            {defaultRiskModule.riskSignals.map((signal) => (
              <div className="ai-default-signal-card" key={signal.reasonCode}>
                <span>{signal.label}</span>
                <strong>{signal.value}</strong>
                <small>{signal.status} · {signal.reasonCode}</small>
              </div>
            ))}
          </div>
        </main>

        <aside className="ai-card ai-results-card">
          <div className="ai-card-title"><h3>Default Results</h3><span className="ai-tone ai-tone-green">Low</span></div>
          <div className="ai-ring"><div><strong>{defaultRiskModule.defaultRiskScore}</strong><span>Risk Score</span></div></div>
          <div className="ai-summary-list">
            <div className="ai-result-row"><span>Decision Impact</span><b className="ai-text-green">{defaultRiskModule.decisionImpact}</b></div>
            <div className="ai-result-row"><span>Risk Adjustment</span><b className="ai-text-green">{defaultRiskModule.riskAdjustment}</b></div>
            <div className="ai-result-row"><span>Expected Loss</span><b className="ai-text-green">{defaultRiskModule.expectedLoss}%</b></div>
            <div className="ai-result-row"><span>Recovery Outlook</span><b className="ai-text-cyan">{defaultRiskModule.recoveryOutlook}</b></div>
          </div>
        </aside>

        <section className="ai-card ai-span-3">
          <div className="ai-card-title"><h3>Default Risk Metrics</h3><span className="ai-tone ai-tone-cyan">Risk Signals</span></div>
          <div className="ai-factor-grid">
            {defaultRiskModule.riskMetrics.map((metric) => (
              <div className="ai-factor-card" key={metric.label}>
                <span>{metric.label}</span>
                <strong>{metric.value}</strong>
                <small>{metric.detail}</small>
              </div>
            ))}
          </div>
        </section>

        <section className="ai-card ai-span-3">
          <div className="ai-card-title"><h3>V1 / V2 Default Risk Notes</h3><span className="ai-tone ai-tone-orange">Shadow Mode</span></div>
          <div className="ai-dual-note-grid">
            <p><b>V1:</b> {defaultRiskModule.v1DecisionUse}</p>
            <p><b>V2:</b> {defaultRiskModule.v2ShadowAuditUse}</p>
          </div>
          <div className="ai-factor-grid compact">
            {defaultRiskModule.stressMetrics.map((metric) => (
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
