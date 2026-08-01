import { bureauAuditModule } from '../features/ai-underwriter/bureauAuditModule';
import './aiUnderwriterV2.css';
import './aiUnderwriterBureau.css';

export function AIUnderwriterBureauAudit() {
  return (
    <div className="ai-underwriter-page ai-module-page">
      <header className="ai-hero compact">
        <div className="ai-brand-lockup">
          <div className="ai-logo-mark">A</div>
          <div>
            <h2>AI Underwriter Command Center</h2>
            <p>Module 1 review page for the V2 shadow-audit flow.</p>
          </div>
        </div>
      </header>

      <section className="ai-bureau-grid">
        <main className="ai-card ai-span-2">
          <div className="ai-card-title">
            <div>
              <h2>{bureauAuditModule.title}</h2>
              <p>{bureauAuditModule.subtitle}</p>
            </div>
            <span className="ai-tone ai-tone-green">Active</span>
          </div>
          <div className="ai-score-row four">
            {bureauAuditModule.scores.map((score) => (
              <div className={`ai-bureau-score-card ai-glow-${score.tone}`} key={score.bureau}>
                <span>{score.bureau}</span>
                <strong className={`ai-text-${score.tone}`}>{score.score}</strong>
                <small>{score.rating}</small>
              </div>
            ))}
          </div>
        </main>

        <aside className="ai-card ai-results-card">
          <div className="ai-card-title"><h3>Bureau Results</h3><span className="ai-tone ai-tone-green">Ready</span></div>
          <div className="ai-ring"><div><strong>{bureauAuditModule.confidence}%</strong><span>Confidence</span></div></div>
          <div className="ai-summary-list">
            {bureauAuditModule.results.map((result) => (
              <div className="ai-result-row" key={result.label}>
                <span>{result.label}</span>
                <b className={`ai-text-${result.tone}`}>{result.value}</b>
              </div>
            ))}
          </div>
        </aside>

        <section className="ai-card ai-span-3">
          <div className="ai-card-title"><h3>Bureau Breakdown</h3><span className="ai-tone ai-tone-purple">Reason Codes</span></div>
          <div className="ai-factor-grid">
            {bureauAuditModule.factors.map((factor) => (
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
