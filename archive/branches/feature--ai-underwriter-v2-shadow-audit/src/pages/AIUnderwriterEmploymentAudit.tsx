import { employmentAuditModule } from '../features/ai-underwriter/employmentAuditModule';
import './aiUnderwriterV2.css';
import './aiUnderwriterEmployment.css';

export function AIUnderwriterEmploymentAudit() {
  return (
    <div className="ai-underwriter-page ai-module-page">
      <header className="ai-hero compact">
        <div className="ai-brand-lockup">
          <div className="ai-logo-mark">A</div>
          <div>
            <h2>AI Underwriter Command Center</h2>
            <p>Module 3 review page for employment stability and verification.</p>
          </div>
        </div>
      </header>

      <section className="ai-employment-grid">
        <main className="ai-card ai-employment-main">
          <div className="ai-card-title">
            <div>
              <h2>{employmentAuditModule.title}</h2>
              <p>{employmentAuditModule.subtitle}</p>
            </div>
            <span className="ai-tone ai-tone-green">Confidence {employmentAuditModule.confidence}%</span>
          </div>

          <div className="ai-employment-profile">
            <div>
              <span>Employer</span>
              <strong>{employmentAuditModule.employerName}</strong>
              <small>{employmentAuditModule.verificationStatus}</small>
            </div>
            <div>
              <span>Job Title</span>
              <strong>{employmentAuditModule.jobTitle}</strong>
              <small>{employmentAuditModule.employmentType}</small>
            </div>
            <div>
              <span>Tenure</span>
              <strong>{employmentAuditModule.tenure}</strong>
              <small>{employmentAuditModule.industry}</small>
            </div>
          </div>

          <div className="ai-employment-signal-grid">
            {employmentAuditModule.verificationSignals.map((signal) => (
              <div className="ai-employment-signal-card" key={signal.reasonCode}>
                <span>{signal.label}</span>
                <strong>{signal.value}</strong>
                <small>{signal.status} · {signal.reasonCode}</small>
              </div>
            ))}
          </div>
        </main>

        <aside className="ai-card ai-results-card">
          <div className="ai-card-title"><h3>Employment Results</h3><span className="ai-tone ai-tone-green">Pass</span></div>
          <div className="ai-ring"><div><strong>{employmentAuditModule.stabilityScore}%</strong><span>Stability</span></div></div>
          <div className="ai-summary-list">
            <div className="ai-result-row"><span>Decision Impact</span><b className="ai-text-green">{employmentAuditModule.decisionImpact}</b></div>
            <div className="ai-result-row"><span>Risk Adjustment</span><b className="ai-text-green">{employmentAuditModule.riskAdjustment}</b></div>
            <div className="ai-result-row"><span>Verification</span><b className="ai-text-green">{employmentAuditModule.verificationStatus}</b></div>
            <div className="ai-result-row"><span>Employment Type</span><b className="ai-text-cyan">{employmentAuditModule.employmentType}</b></div>
          </div>
        </aside>

        <section className="ai-card ai-span-3">
          <div className="ai-card-title"><h3>Stability Metrics</h3><span className="ai-tone ai-tone-cyan">Verified Signals</span></div>
          <div className="ai-factor-grid">
            {employmentAuditModule.stabilityMetrics.map((metric) => (
              <div className="ai-factor-card" key={metric.label}>
                <span>{metric.label}</span>
                <strong>{metric.value}</strong>
                <small>{metric.detail}</small>
              </div>
            ))}
          </div>
        </section>

        <section className="ai-card ai-span-3">
          <div className="ai-card-title"><h3>V1 / V2 Employment Audit Notes</h3><span className="ai-tone ai-tone-orange">Shadow Mode</span></div>
          <div className="ai-dual-note-grid">
            <p><b>V1:</b> {employmentAuditModule.v1DecisionUse}</p>
            <p><b>V2:</b> {employmentAuditModule.v2ShadowAuditUse}</p>
          </div>
          <div className="ai-factor-grid compact">
            {employmentAuditModule.riskMetrics.map((metric) => (
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
