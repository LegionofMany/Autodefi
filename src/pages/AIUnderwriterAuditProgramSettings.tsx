import { auditProgramSettingsModule } from '../features/ai-underwriter/auditProgramSettingsModule';
import './aiUnderwriterV2.css';
import './aiUnderwriterAuditProgramSettings.css';

export function AIUnderwriterAuditProgramSettings() {
  return (
    <div className="ai-underwriter-page ai-module-page">
      <header className="ai-hero compact">
        <div className="ai-brand-lockup">
          <div className="ai-logo-mark">A</div>
          <div>
            <h2>AI Underwriter Command Center</h2>
            <p>Module 15 settings page for governance, shadow mode, retention, and rollback controls.</p>
          </div>
        </div>
      </header>

      <section className="ai-settings-grid">
        <main className="ai-card ai-settings-main">
          <div className="ai-card-title">
            <div>
              <h2>{auditProgramSettingsModule.title}</h2>
              <p>{auditProgramSettingsModule.subtitle}</p>
            </div>
            <span className="ai-tone ai-tone-green">Confidence {auditProgramSettingsModule.confidence}%</span>
          </div>

          <div className="ai-settings-profile">
            <div>
              <span>Operating Mode</span>
              <strong>{auditProgramSettingsModule.operatingMode}</strong>
              <small>{auditProgramSettingsModule.governanceStatus}</small>
            </div>
            <div>
              <span>V1 / V2 Modes</span>
              <strong>{auditProgramSettingsModule.v1DecisionMode}</strong>
              <small>{auditProgramSettingsModule.v2AuditMode}</small>
            </div>
            <div>
              <span>Promotion Gate</span>
              <strong>{auditProgramSettingsModule.promotionGate}</strong>
              <small>{auditProgramSettingsModule.rollbackPolicy}</small>
            </div>
          </div>

          <div className="ai-settings-signal-grid">
            {auditProgramSettingsModule.settingsSignals.map((signal) => (
              <div className="ai-settings-signal-card" key={signal.reasonCode}>
                <span>{signal.label}</span>
                <strong>{signal.value}</strong>
                <small>{signal.status} · {signal.reasonCode}</small>
              </div>
            ))}
          </div>
        </main>

        <aside className="ai-card ai-results-card">
          <div className="ai-card-title"><h3>Settings Results</h3><span className="ai-tone ai-tone-green">Locked</span></div>
          <div className="ai-ring"><div><strong>{auditProgramSettingsModule.confidence}%</strong><span>Control</span></div></div>
          <div className="ai-summary-list">
            <div className="ai-result-row"><span>V1 Mode</span><b className="ai-text-green">Production</b></div>
            <div className="ai-result-row"><span>V2 Mode</span><b className="ai-text-purple">Shadow Only</b></div>
            <div className="ai-result-row"><span>Retention</span><b className="ai-text-cyan">{auditProgramSettingsModule.retentionPolicy}</b></div>
            <div className="ai-result-row"><span>Governance</span><b className="ai-text-green">Active</b></div>
          </div>
        </aside>

        <section className="ai-card ai-span-3">
          <div className="ai-card-title"><h3>Program Control Metrics</h3><span className="ai-tone ai-tone-cyan">Control Signals</span></div>
          <div className="ai-factor-grid">
            {auditProgramSettingsModule.controlMetrics.map((metric) => (
              <div className="ai-factor-card" key={metric.label}>
                <span>{metric.label}</span>
                <strong>{metric.value}</strong>
                <small>{metric.detail}</small>
              </div>
            ))}
          </div>
        </section>

        <section className="ai-card ai-span-3">
          <div className="ai-card-title"><h3>V1 / V2 Program Settings Notes</h3><span className="ai-tone ai-tone-orange">Governance Gate</span></div>
          <div className="ai-dual-note-grid">
            <p><b>V1:</b> {auditProgramSettingsModule.v1DecisionUse}</p>
            <p><b>V2:</b> {auditProgramSettingsModule.v2ShadowAuditUse}</p>
          </div>
          <div className="ai-factor-grid compact">
            {auditProgramSettingsModule.governanceMetrics.map((metric) => (
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
