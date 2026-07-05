import { walletAuditModule } from '../features/ai-underwriter/walletAuditModule';
import './aiUnderwriterV2.css';
import './aiUnderwriterWallet.css';

export function AIUnderwriterWalletAudit() {
  return (
    <div className="ai-underwriter-page ai-module-page">
      <header className="ai-hero compact">
        <div className="ai-brand-lockup">
          <div className="ai-logo-mark">A</div>
          <div>
            <h2>AI Underwriter Command Center</h2>
            <p>Module 5 review page for connected account trust and activity readiness.</p>
          </div>
        </div>
      </header>

      <section className="ai-wallet-grid">
        <main className="ai-card ai-wallet-main">
          <div className="ai-card-title">
            <div>
              <h2>{walletAuditModule.title}</h2>
              <p>{walletAuditModule.subtitle}</p>
            </div>
            <span className="ai-tone ai-tone-green">Confidence {walletAuditModule.confidence}%</span>
          </div>

          <div className="ai-wallet-profile">
            <div>
              <span>Connected Account</span>
              <strong>{walletAuditModule.walletAddress}</strong>
              <small>{walletAuditModule.kycWalletStatus}</small>
            </div>
            <div>
              <span>Trust Score</span>
              <strong>{walletAuditModule.walletScore}</strong>
              <small>{walletAuditModule.trustLevel}</small>
            </div>
            <div>
              <span>Network Readiness</span>
              <strong>{walletAuditModule.chainReadiness}</strong>
              <small>{walletAuditModule.walletAge} account age</small>
            </div>
          </div>

          <div className="ai-wallet-signal-grid">
            {walletAuditModule.verificationSignals.map((signal) => (
              <div className="ai-wallet-signal-card" key={signal.reasonCode}>
                <span>{signal.label}</span>
                <strong>{signal.value}</strong>
                <small>{signal.status} · {signal.reasonCode}</small>
              </div>
            ))}
          </div>
        </main>

        <aside className="ai-card ai-results-card">
          <div className="ai-card-title"><h3>Wallet Results</h3><span className="ai-tone ai-tone-green">Pass</span></div>
          <div className="ai-ring"><div><strong>{walletAuditModule.activityScore}%</strong><span>Activity</span></div></div>
          <div className="ai-summary-list">
            <div className="ai-result-row"><span>Decision Impact</span><b className="ai-text-green">{walletAuditModule.decisionImpact}</b></div>
            <div className="ai-result-row"><span>Risk Adjustment</span><b className="ai-text-green">{walletAuditModule.riskAdjustment}</b></div>
            <div className="ai-result-row"><span>Trust Level</span><b className="ai-text-green">{walletAuditModule.trustLevel}</b></div>
            <div className="ai-result-row"><span>Screening</span><b className="ai-text-green">{walletAuditModule.screeningStatus}</b></div>
          </div>
        </aside>

        <section className="ai-card ai-span-3">
          <div className="ai-card-title"><h3>Identity and Activity Metrics</h3><span className="ai-tone ai-tone-cyan">Verified Signals</span></div>
          <div className="ai-factor-grid">
            {walletAuditModule.balanceMetrics.map((metric) => (
              <div className="ai-factor-card" key={metric.label}>
                <span>{metric.label}</span>
                <strong>{metric.value}</strong>
                <small>{metric.detail}</small>
              </div>
            ))}
          </div>
        </section>

        <section className="ai-card ai-span-3">
          <div className="ai-card-title"><h3>V1 / V2 Wallet Audit Notes</h3><span className="ai-tone ai-tone-orange">Shadow Mode</span></div>
          <div className="ai-dual-note-grid">
            <p><b>V1:</b> {walletAuditModule.v1DecisionUse}</p>
            <p><b>V2:</b> {walletAuditModule.v2ShadowAuditUse}</p>
          </div>
          <div className="ai-factor-grid compact">
            {walletAuditModule.behaviorMetrics.map((metric) => (
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
