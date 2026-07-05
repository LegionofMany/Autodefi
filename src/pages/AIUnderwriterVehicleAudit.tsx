import { vehicleAuditModule } from '../features/ai-underwriter/vehicleAuditModule';
import './aiUnderwriterV2.css';
import './aiUnderwriterVehicle.css';

export function AIUnderwriterVehicleAudit() {
  return (
    <div className="ai-underwriter-page ai-module-page">
      <header className="ai-hero compact">
        <div className="ai-brand-lockup">
          <div className="ai-logo-mark">A</div>
          <div>
            <h2>AI Underwriter Command Center</h2>
            <p>Module 7 review page for vehicle value, condition, and collateral quality.</p>
          </div>
        </div>
      </header>

      <section className="ai-vehicle-grid">
        <main className="ai-card ai-vehicle-main">
          <div className="ai-card-title">
            <div>
              <h2>{vehicleAuditModule.title}</h2>
              <p>{vehicleAuditModule.subtitle}</p>
            </div>
            <span className="ai-tone ai-tone-green">Confidence {vehicleAuditModule.confidence}%</span>
          </div>

          <div className="ai-vehicle-profile">
            <div>
              <span>Vehicle</span>
              <strong>{vehicleAuditModule.yearMakeModel}</strong>
              <small>VIN {vehicleAuditModule.vin}</small>
            </div>
            <div>
              <span>Approved Value</span>
              <strong>${vehicleAuditModule.vehicleValue.toLocaleString()}</strong>
              <small>{vehicleAuditModule.odometer}</small>
            </div>
            <div>
              <span>Loan-to-Value</span>
              <strong>{vehicleAuditModule.loanToValue}%</strong>
              <small>${vehicleAuditModule.requestedLoan.toLocaleString()} requested loan</small>
            </div>
          </div>

          <div className="ai-vehicle-signal-grid">
            {vehicleAuditModule.verificationSignals.map((signal) => (
              <div className="ai-vehicle-signal-card" key={signal.reasonCode}>
                <span>{signal.label}</span>
                <strong>{signal.value}</strong>
                <small>{signal.status} · {signal.reasonCode}</small>
              </div>
            ))}
          </div>
        </main>

        <aside className="ai-card ai-results-card">
          <div className="ai-card-title"><h3>Vehicle Results</h3><span className="ai-tone ai-tone-green">Pass</span></div>
          <div className="ai-ring"><div><strong>{vehicleAuditModule.valueStability}%</strong><span>Value Stability</span></div></div>
          <div className="ai-summary-list">
            <div className="ai-result-row"><span>Decision Impact</span><b className="ai-text-green">{vehicleAuditModule.decisionImpact}</b></div>
            <div className="ai-result-row"><span>Risk Adjustment</span><b className="ai-text-green">{vehicleAuditModule.riskAdjustment}</b></div>
            <div className="ai-result-row"><span>Market Risk</span><b className="ai-text-green">{vehicleAuditModule.marketRisk}</b></div>
            <div className="ai-result-row"><span>Approved Value</span><b className="ai-text-cyan">${vehicleAuditModule.vehicleValue.toLocaleString()}</b></div>
          </div>
        </aside>

        <section className="ai-card ai-span-3">
          <div className="ai-card-title"><h3>Valuation Metrics</h3><span className="ai-tone ai-tone-cyan">Market Signals</span></div>
          <div className="ai-factor-grid">
            {vehicleAuditModule.valuationMetrics.map((metric) => (
              <div className="ai-factor-card" key={metric.label}>
                <span>{metric.label}</span>
                <strong>{metric.value}</strong>
                <small>{metric.detail}</small>
              </div>
            ))}
          </div>
        </section>

        <section className="ai-card ai-span-3">
          <div className="ai-card-title"><h3>V1 / V2 Vehicle Audit Notes</h3><span className="ai-tone ai-tone-orange">Shadow Mode</span></div>
          <div className="ai-dual-note-grid">
            <p><b>V1:</b> {vehicleAuditModule.v1DecisionUse}</p>
            <p><b>V2:</b> {vehicleAuditModule.v2ShadowAuditUse}</p>
          </div>
          <div className="ai-factor-grid compact">
            {vehicleAuditModule.conditionMetrics.map((metric) => (
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
