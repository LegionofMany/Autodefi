import { yieldToLendersModule } from '../features/ai-underwriter/yieldToLendersModule';
import './aiUnderwriterV2.css';
import './aiUnderwriterYieldToLenders.css';

export function AIUnderwriterYieldToLenders() {
  return (
    <div className="ai-underwriter-page ai-module-page">
      <header className="ai-hero compact">
        <div className="ai-brand-lockup">
          <div className="ai-logo-mark">A</div>
          <div>
            <h2>AI Underwriter Command Center</h2>
            <p>Module 13 review page for lender economics and pool quality.</p>
          </div>
        </div>
      </header>

      <section className="ai-yield-grid">
        <main className="ai-card ai-yield-main">
          <div className="ai-card-title">
            <div>
              <h2>{yieldToLendersModule.title}</h2>
              <p>{yieldToLendersModule.subtitle}</p>
            </div>
            <span className="ai-tone ai-tone-green">Confidence {yieldToLendersModule.confidence}%</span>
          </div>

          <div className="ai-yield-profile">
            <div><span>Expected Yield</span><strong>{yieldToLendersModule.expectedYield}%</strong><small>Monthly {yieldToLendersModule.monthlyYield}%</small></div>
            <div><span>Risk-Adjusted / Net</span><strong>{yieldToLendersModule.riskAdjustedYield}% / {yieldToLendersModule.netYield}%</strong><small>Reserve drag {yieldToLendersModule.reserveDrag}%</small></div>
            <div><span>Lender Demand</span><strong>{yieldToLendersModule.lenderDemand}</strong><small>Term projection {yieldToLendersModule.projectedRoi}%</small></div>
          </div>

          <div className="ai-yield-signal-grid">
            {yieldToLendersModule.yieldSignals.map((signal) => (
              <div className="ai-yield-signal-card" key={signal.reasonCode}>
                <span>{signal.label}</span><strong>{signal.value}</strong><small>{signal.status} · {signal.reasonCode}</small>
              </div>
            ))}
          </div>
        </main>

        <aside className="ai-card ai-results-card">
          <div className="ai-card-title"><h3>Yield Results</h3><span className="ai-tone ai-tone-green">Strong</span></div>
          <div className="ai-ring"><div><strong>{yieldToLendersModule.expectedYield}%</strong><span>Expected</span></div></div>
          <div className="ai-summary-list">
            <div className="ai-result-row"><span>Decision Impact</span><b className="ai-text-green">{yieldToLendersModule.decisionImpact}</b></div>
            <div className="ai-result-row"><span>Risk Adjustment</span><b className="ai-text-green">{yieldToLendersModule.riskAdjustment}</b></div>
            <div className="ai-result-row"><span>Net Yield</span><b className="ai-text-green">{yieldToLendersModule.netYield}%</b></div>
            <div className="ai-result-row"><span>Lender Demand</span><b className="ai-text-cyan">{yieldToLendersModule.lenderDemand}</b></div>
          </div>
        </aside>

        <section className="ai-card ai-span-3">
          <div className="ai-card-title"><h3>Yield Metrics</h3><span className="ai-tone ai-tone-cyan">Pool Signals</span></div>
          <div className="ai-factor-grid">
            {yieldToLendersModule.yieldMetrics.map((metric) => (
              <div className="ai-factor-card" key={metric.label}><span>{metric.label}</span><strong>{metric.value}</strong><small>{metric.detail}</small></div>
            ))}
          </div>
        </section>

        <section className="ai-card ai-span-3">
          <div className="ai-card-title"><h3>V1 / V2 Yield Notes</h3><span className="ai-tone ai-tone-orange">Shadow Mode</span></div>
          <div className="ai-dual-note-grid"><p><b>V1:</b> {yieldToLendersModule.v1DecisionUse}</p><p><b>V2:</b> {yieldToLendersModule.v2ShadowAuditUse}</p></div>
          <div className="ai-factor-grid compact">
            {yieldToLendersModule.poolMetrics.map((metric) => (
              <div className="ai-factor-card" key={metric.label}><span>{metric.label}</span><strong>{metric.value}</strong><small>{metric.detail}</small></div>
            ))}
          </div>
        </section>
      </section>
    </div>
  );
}
