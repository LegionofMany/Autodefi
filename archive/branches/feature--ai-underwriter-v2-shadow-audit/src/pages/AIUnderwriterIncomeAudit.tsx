import { incomeAuditModule } from '../features/ai-underwriter/incomeAuditModule';
import './aiUnderwriterV2.css';
import './aiUnderwriterIncome.css';

export function AIUnderwriterIncomeAudit() {
  return (
    <div className="ai-underwriter-page ai-module-page">
      <header className="ai-hero compact">
        <div className="ai-brand-lockup">
          <div className="ai-logo-mark">A</div>
          <div>
            <h2>AI Underwriter Command Center</h2>
            <p>Module 2 review page for income verification and affordability.</p>
          </div>
        </div>
      </header>

      <section className="ai-income-grid">
        <main className="ai-card ai-income-main">
          <div className="ai-card-title">
            <div>
              <h2>{incomeAuditModule.title}</h2>
              <p>{incomeAuditModule.subtitle}</p>
            </div>
            <span className="ai-tone ai-tone-green">Confidence {incomeAuditModule.confidence}%</span>
          </div>

          <div className="ai-income-hero-row">
            <div className="ai-income-total">
              <span>Verified Annual Income</span>
              <strong>${incomeAuditModule.verifiedAnnualIncome.toLocaleString()}</strong>
              <small>${incomeAuditModule.verifiedMonthlyIncome.toLocaleString()} monthly verified</small>
            </div>
            <div className="ai-income-total secondary">
              <span>Debt-to-Income</span>
              <strong>{incomeAuditModule.debtToIncome}%</strong>
              <small>Below risk threshold</small>
            </div>
            <div className="ai-income-total secondary">
              <span>Payment-to-Income</span>
              <strong>{incomeAuditModule.paymentToIncome}%</strong>
              <small>Affordable payment load</small>
            </div>
          </div>

          <div className="ai-income-source-grid">
            {incomeAuditModule.incomeSources.map((source) => (
              <div className="ai-income-source-card" key={source.source}>
                <span>{source.source}</span>
                <strong>${source.monthlyAmount.toLocaleString()} / mo</strong>
                <small>{source.verified ? 'Verified' : 'Review'} · {source.stability}</small>
              </div>
            ))}
          </div>
        </main>

        <aside className="ai-card ai-results-card">
          <div className="ai-card-title"><h3>Income Results</h3><span className="ai-tone ai-tone-green">Pass</span></div>
          <div className="ai-ring"><div><strong>{incomeAuditModule.incomeStabilityScore}%</strong><span>Stability</span></div></div>
          <div className="ai-summary-list">
            {incomeAuditModule.affordabilityMetrics.slice(0, 6).map((metric) => (
              <div className="ai-result-row" key={metric.label}>
                <span>{metric.label}</span>
                <b className={`ai-text-${metric.tone}`}>{metric.value}</b>
              </div>
            ))}
          </div>
        </aside>

        <section className="ai-card ai-span-3">
          <div className="ai-card-title"><h3>Cash Flow Verification</h3><span className="ai-tone ai-tone-cyan">Bank + Payroll Match</span></div>
          <div className="ai-factor-grid">
            {incomeAuditModule.cashFlowMetrics.map((metric) => (
              <div className="ai-factor-card" key={metric.label}>
                <span>{metric.label}</span>
                <strong>{metric.value}</strong>
                <small>{metric.detail}</small>
              </div>
            ))}
          </div>
        </section>

        <section className="ai-card ai-span-3">
          <div className="ai-card-title"><h3>V1 / V2 Income Audit Notes</h3><span className="ai-tone ai-tone-orange">Shadow Mode</span></div>
          <div className="ai-dual-note-grid">
            <p><b>V1:</b> {incomeAuditModule.v1DecisionUse}</p>
            <p><b>V2:</b> {incomeAuditModule.v2ShadowAuditUse}</p>
          </div>
          <div className="ai-factor-grid compact">
            {incomeAuditModule.factors.map((factor) => (
              <div className="ai-factor-card" key={factor.reasonCode}>
                <span>{factor.label}</span>
                <strong>{factor.value}</strong>
                <small>{factor.reasonCode}</small>
              </div>
            ))}
          </div>
        </section>
      </section>
    </div>
  );
}
