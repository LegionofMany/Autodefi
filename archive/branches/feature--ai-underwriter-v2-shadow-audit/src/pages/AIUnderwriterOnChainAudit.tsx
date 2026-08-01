import { evaluateOnChainPromotionGate, onChainAuditModule } from '../features/ai-underwriter/onChainAuditModule';
import './aiUnderwriterV2.css';
import './aiUnderwriterOnChain.css';

const promotionGate = evaluateOnChainPromotionGate();

export function AIUnderwriterOnChainAudit() {
  return (
    <div className="ai-underwriter-page ai-module-page">
      <header className="ai-hero compact">
        <div className="ai-brand-lockup">
          <div className="ai-logo-mark">A</div>
          <div>
            <h2>AI Underwriter Command Center</h2>
            <p>Module 6 review page for blockchain behavior, stable rails, and counterparty risk.</p>
          </div>
        </div>
      </header>

      <section className="ai-onchain-grid">
        <main className="ai-card ai-onchain-main">
          <div className="ai-card-title">
            <div>
              <h2>{onChainAuditModule.title}</h2>
              <p>{onChainAuditModule.subtitle}</p>
            </div>
            <span className="ai-tone ai-tone-green">Confidence {onChainAuditModule.resultRail[0].value}</span>
          </div>

          <div className="ai-onchain-kpi-grid">
            {onChainAuditModule.kpis.map((metric) => (
              <div className="ai-onchain-kpi-card" key={metric.label}>
                <span>{metric.label}</span>
                <strong className={`ai-text-${metric.tone}`}>{metric.value}</strong>
                <small>{metric.status}</small>
              </div>
            ))}
          </div>
        </main>

        <aside className="ai-card ai-results-card">
          <div className="ai-card-title"><h3>On-Chain Results</h3><span className="ai-tone ai-tone-green">Pass</span></div>
          <div className="ai-ring"><div><strong>{onChainAuditModule.resultRail[0].value}</strong><span>Confidence</span></div></div>
          <div className="ai-summary-list">
            {onChainAuditModule.resultRail.slice(1, 8).map((metric) => (
              <div className="ai-result-row" key={metric.label}>
                <span>{metric.label}</span>
                <b className={`ai-text-${metric.tone}`}>{metric.value}</b>
              </div>
            ))}
          </div>
        </aside>

        <section className="ai-card ai-span-3">
          <div className="ai-card-title"><h3>Blockchain Signal Panels</h3><span className="ai-tone ai-tone-cyan">Verified Signals</span></div>
          <div className="ai-onchain-panel-grid">
            {onChainAuditModule.panels.map((panel) => (
              <div className="ai-onchain-panel-card" key={panel.title}>
                <h4>{panel.title}</h4>
                <p>{panel.summary}</p>
                <div className="ai-onchain-panel-metrics">
                  {panel.metrics.map((metric) => (
                    <div key={metric.label}>
                      <span>{metric.label}</span>
                      <strong className={`ai-text-${metric.tone}`}>{metric.value}</strong>
                      <small>{metric.status}</small>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="ai-card ai-span-3">
          <div className="ai-card-title"><h3>V1 / V2 On-Chain Audit Notes</h3><span className="ai-tone ai-tone-orange">Shadow Mode</span></div>
          <div className="ai-dual-note-grid">
            <p><b>V1:</b> {onChainAuditModule.v1Role}</p>
            <p><b>V2:</b> {onChainAuditModule.v2Role}</p>
          </div>
          <div className="ai-control-grid">
            <div><span>Shadow Mode Only</span><strong>{promotionGate.shadowModeOnly ? 'Yes' : 'No'}</strong></div>
            <div><span>Can Update V1</span><strong>{promotionGate.canMutateV1Decision ? 'Yes' : 'No'}</strong></div>
            <div><span>Human Approval</span><strong>{promotionGate.requiresHumanPromotionApproval ? 'Required' : 'Not Required'}</strong></div>
            <div><span>Next Module</span><strong>{onChainAuditModule.nextModule}</strong></div>
          </div>
        </section>

        <section className="ai-card ai-span-3">
          <div className="ai-card-title"><h3>Reason Codes + Learning Signals</h3><span className="ai-tone ai-tone-purple">Governance Ready</span></div>
          <div className="ai-onchain-reason-grid">
            {[...onChainAuditModule.positiveReasonCodes, ...onChainAuditModule.cautionReasonCodes, ...onChainAuditModule.manualReviewReasonCodes].map((reason) => (
              <div className={`ai-onchain-reason-card severity-${reason.severity}`} key={reason.code}>
                <span>{reason.label}</span>
                <strong>{reason.code}</strong>
                <small>{reason.description}</small>
              </div>
            ))}
          </div>
          <div className="ai-learning-list onchain">
            {onChainAuditModule.learningSignals.map((signal) => (
              <div className="ai-learning-item" key={signal}>
                <b>{signal}</b>
                <span>Tracked by V2 shadow audit before any scoring-weight promotion.</span>
              </div>
            ))}
          </div>
        </section>
      </section>
    </div>
  );
}
