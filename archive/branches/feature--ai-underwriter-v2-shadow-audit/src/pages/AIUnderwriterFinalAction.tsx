import { finalActionModule } from '../features/ai-underwriter/finalActionModule';
import './aiUnderwriterV2.css';
import './aiUnderwriterFinalAction.css';

export function AIUnderwriterFinalAction() {
  return (
    <div className="ai-underwriter-page ai-module-page">
      <header className="ai-hero compact">
        <div className="ai-brand-lockup">
          <div className="ai-logo-mark">A</div>
          <div>
            <h2>AI Underwriter Command Center</h2>
            <p>Module 14 review page for final offer action, conditions, and closeout readiness.</p>
          </div>
        </div>
      </header>

      <section className="ai-final-grid">
        <main className="ai-card ai-final-main">
          <div className="ai-card-title">
            <div>
              <h2>{finalActionModule.title}</h2>
              <p>{finalActionModule.subtitle}</p>
            </div>
            <span className="ai-tone ai-tone-green">Confidence {finalActionModule.confidence}%</span>
          </div>

          <div className="ai-final-profile">
            <div>
              <span>Final Action</span>
              <strong>{finalActionModule.finalAction}</strong>
              <small>Decision grade {finalActionModule.decisionGrade}</small>
            </div>
            <div>
              <span>Loan Structure</span>
              <strong>${finalActionModule.loanAmount.toLocaleString()} · {finalActionModule.apr}%</strong>
              <small>{finalActionModule.termMonths} months · {finalActionModule.paymentFrequency} ${finalActionModule.weeklyPayment}</small>
            </div>
            <div>
              <span>Funding Source</span>
              <strong>{finalActionModule.fundingSource}</strong>
              <small>Offer window {finalActionModule.offerExpiry}</small>
            </div>
          </div>

          <div className="ai-final-signal-grid">
            {finalActionModule.actionSignals.map((signal) => (
              <div className="ai-final-signal-card" key={signal.reasonCode}>
                <span>{signal.label}</span>
                <strong>{signal.value}</strong>
                <small>{signal.status} · {signal.reasonCode}</small>
              </div>
            ))}
          </div>
        </main>

        <aside className="ai-card ai-results-card">
          <div className="ai-card-title"><h3>Final Results</h3><span className="ai-tone ai-tone-green">Ready</span></div>
          <div className="ai-ring"><div><strong>{finalActionModule.confidence}%</strong><span>Confidence</span></div></div>
          <div className="ai-summary-list">
            <div className="ai-result-row"><span>Decision Grade</span><b className="ai-text-green">{finalActionModule.decisionGrade}</b></div>
            <div className="ai-result-row"><span>Loan Amount</span><b className="ai-text-green">${finalActionModule.loanAmount.toLocaleString()}</b></div>
            <div className="ai-result-row"><span>APR</span><b className="ai-text-cyan">{finalActionModule.apr}%</b></div>
            <div className="ai-result-row"><span>V2 Status</span><b className="ai-text-purple">Locked</b></div>
          </div>
        </aside>

        <section className="ai-card ai-span-3">
          <div className="ai-card-title"><h3>Final Offer Metrics</h3><span className="ai-tone ai-tone-cyan">Closeout Signals</span></div>
          <div className="ai-factor-grid">
            {finalActionModule.offerMetrics.map((metric) => (
              <div className="ai-factor-card" key={metric.label}>
                <span>{metric.label}</span>
                <strong>{metric.value}</strong>
                <small>{metric.detail}</small>
              </div>
            ))}
          </div>
        </section>

        <section className="ai-card ai-span-3">
          <div className="ai-card-title"><h3>V1 / V2 Final Action Notes</h3><span className="ai-tone ai-tone-orange">Shadow Mode</span></div>
          <div className="ai-dual-note-grid">
            <p><b>V1:</b> {finalActionModule.v1DecisionUse}</p>
            <p><b>V2:</b> {finalActionModule.v2ShadowAuditUse}</p>
          </div>
          <div className="ai-factor-grid compact">
            {finalActionModule.conditionMetrics.map((metric) => (
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
