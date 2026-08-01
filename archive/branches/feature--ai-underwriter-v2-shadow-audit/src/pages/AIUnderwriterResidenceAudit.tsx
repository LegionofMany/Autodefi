import { residenceAuditModule } from '../features/ai-underwriter/residenceAuditModule';
import './aiUnderwriterV2.css';
import './aiUnderwriterResidence.css';

export function AIUnderwriterResidenceAudit() {
  return (
    <div className="ai-underwriter-page ai-module-page">
      <header className="ai-hero compact">
        <div className="ai-brand-lockup">
          <div className="ai-logo-mark">A</div>
          <div>
            <h2>AI Underwriter Command Center</h2>
            <p>Module 4 review page for residence stability and address verification.</p>
          </div>
        </div>
      </header>

      <section className="ai-residence-grid">
        <main className="ai-card ai-residence-main">
          <div className="ai-card-title">
            <div>
              <h2>{residenceAuditModule.title}</h2>
              <p>{residenceAuditModule.subtitle}</p>
            </div>
            <span className="ai-tone ai-tone-green">Confidence {residenceAuditModule.confidence}%</span>
          </div>

          <div className="ai-residence-profile">
            <div>
              <span>Current Address</span>
              <strong>{residenceAuditModule.currentAddress}</strong>
              <small>{residenceAuditModule.residenceType}</small>
            </div>
            <div>
              <span>Time at Residence</span>
              <strong>{residenceAuditModule.timeAtResidence}</strong>
              <small>Stable residence history</small>
            </div>
            <div>
              <span>Housing-to-Income</span>
              <strong>{residenceAuditModule.housingToIncome}%</strong>
              <small>${residenceAuditModule.monthlyHousingCost.toLocaleString()} monthly housing cost</small>
            </div>
          </div>

          <div className="ai-residence-signal-grid">
            {residenceAuditModule.verificationSignals.map((signal) => (
              <div className="ai-residence-signal-card" key={signal.reasonCode}>
                <span>{signal.label}</span>
                <strong>{signal.value}</strong>
                <small>{signal.status} · {signal.reasonCode}</small>
              </div>
            ))}
          </div>
        </main>

        <aside className="ai-card ai-results-card">
          <div className="ai-card-title"><h3>Residence Results</h3><span className="ai-tone ai-tone-green">Pass</span></div>
          <div className="ai-ring"><div><strong>{residenceAuditModule.stabilityScore}%</strong><span>Stability</span></div></div>
          <div className="ai-summary-list">
            <div className="ai-result-row"><span>Decision Impact</span><b className="ai-text-green">{residenceAuditModule.decisionImpact}</b></div>
            <div className="ai-result-row"><span>Risk Adjustment</span><b className="ai-text-green">{residenceAuditModule.riskAdjustment}</b></div>
            <div className="ai-result-row"><span>Residence Type</span><b className="ai-text-cyan">{residenceAuditModule.residenceType}</b></div>
            <div className="ai-result-row"><span>Housing Cost</span><b className="ai-text-green">${residenceAuditModule.monthlyHousingCost.toLocaleString()}</b></div>
          </div>
        </aside>

        <section className="ai-card ai-span-3">
          <div className="ai-card-title"><h3>Residence Stability Metrics</h3><span className="ai-tone ai-tone-cyan">Verified Signals</span></div>
          <div className="ai-factor-grid">
            {residenceAuditModule.stabilityMetrics.map((metric) => (
              <div className="ai-factor-card" key={metric.label}>
                <span>{metric.label}</span>
                <strong>{metric.value}</strong>
                <small>{metric.detail}</small>
              </div>
            ))}
          </div>
        </section>

        <section className="ai-card ai-span-3">
          <div className="ai-card-title"><h3>V1 / V2 Residence Audit Notes</h3><span className="ai-tone ai-tone-orange">Shadow Mode</span></div>
          <div className="ai-dual-note-grid">
            <p><b>V1:</b> {residenceAuditModule.v1DecisionUse}</p>
            <p><b>V2:</b> {residenceAuditModule.v2ShadowAuditUse}</p>
          </div>
          <div className="ai-factor-grid compact">
            {residenceAuditModule.housingMetrics.map((metric) => (
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
