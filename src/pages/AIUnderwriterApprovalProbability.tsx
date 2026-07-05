import { approvalProbabilityModule } from '../features/ai-underwriter/approvalProbabilityModule';
import './aiUnderwriterV2.css';
import './aiUnderwriterApprovalProbability.css';

export function AIUnderwriterApprovalProbability() {
  return (
    <div className="ai-underwriter-page ai-module-page">
      <header className="ai-hero compact">
        <div className="ai-brand-lockup">
          <div className="ai-logo-mark">A</div>
          <div>
            <h2>AI Underwriter Command Center</h2>
            <p>Module 10 review page for approval probability and decision-quality confidence.</p>
          </div>
        </div>
      </header>

      <section className="ai-approval-grid">
        <main className="ai-card ai-approval-main">
          <div className="ai-card-title">
            <div>
              <h2>{approvalProbabilityModule.title}</h2>
              <p>{approvalProbabilityModule.subtitle}</p>
            </div>
            <span className="ai-tone ai-tone-green">Confidence {approvalProbabilityModule.confidence}%</span>
          </div>

          <div className="ai-approval-profile">
            <div>
              <span>Approval Probability</span>
              <strong>{approvalProbabilityModule.approvalProbability}%</strong>
              <small>{approvalProbabilityModule.recommendedAction}</small>
            </div>
            <div>
              <span>Decision Grade</span>
              <strong>{approvalProbabilityModule.grade}</strong>
              <small>{approvalProbabilityModule.confidenceScore}% confidence score</small>
            </div>
            <div>
              <span>Expected Loss</span>
              <strong>{approvalProbabilityModule.expectedLoss}%</strong>
              <small>{approvalProbabilityModule.offerCompetitiveness}% offer competitiveness</small>
            </div>
          </div>

          <div className="ai-approval-signal-grid">
            {approvalProbabilityModule.probabilitySignals.map((signal) => (
              <div className="ai-approval-signal-card" key={signal.reasonCode}>
                <span>{signal.label}</span>
                <strong>{signal.value}</strong>
                <small>{signal.status} · {signal.reasonCode}</small>
              </div>
            ))}
          </div>
        </main>

        <aside className="ai-card ai-results-card">
          <div className="ai-card-title"><h3>Approval Results</h3><span className="ai-tone ai-tone-green">Strong</span></div>
          <div className="ai-ring"><div><strong>{approvalProbabilityModule.approvalProbability}%</strong><span>Probability</span></div></div>
          <div className="ai-summary-list">
            <div className="ai-result-row"><span>Decision Impact</span><b className="ai-text-green">{approvalProbabilityModule.decisionImpact}</b></div>
            <div className="ai-result-row"><span>Risk Adjustment</span><b className="ai-text-green">{approvalProbabilityModule.riskAdjustment}</b></div>
            <div className="ai-result-row"><span>Grade</span><b className="ai-text-cyan">{approvalProbabilityModule.grade}</b></div>
            <div className="ai-result-row"><span>Recommended Action</span><b className="ai-text-green">{approvalProbabilityModule.recommendedAction}</b></div>
          </div>
        </aside>

        <section className="ai-card ai-span-3">
          <div className="ai-card-title"><h3>Model Probability Metrics</h3><span className="ai-tone ai-tone-cyan">Decision Signals</span></div>
          <div className="ai-factor-grid">
            {approvalProbabilityModule.modelMetrics.map((metric) => (
              <div className="ai-factor-card" key={metric.label}>
                <span>{metric.label}</span>
                <strong>{metric.value}</strong>
                <small>{metric.detail}</small>
              </div>
            ))}
          </div>
        </section>

        <section className="ai-card ai-span-3">
          <div className="ai-card-title"><h3>V1 / V2 Approval Probability Notes</h3><span className="ai-tone ai-tone-orange">Shadow Mode</span></div>
          <div className="ai-dual-note-grid">
            <p><b>V1:</b> {approvalProbabilityModule.v1DecisionUse}</p>
            <p><b>V2:</b> {approvalProbabilityModule.v2ShadowAuditUse}</p>
          </div>
          <div className="ai-factor-grid compact">
            {approvalProbabilityModule.scenarioMetrics.map((metric) => (
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
