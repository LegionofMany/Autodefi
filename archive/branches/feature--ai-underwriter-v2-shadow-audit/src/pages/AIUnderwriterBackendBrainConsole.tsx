import { useEffect, useState } from 'react';
import { loadRuntimeDashboardModel, type RuntimeDashboardModel } from '../features/ai-underwriter/backend/runtime/runtimeDashboardModel';
import './aiUnderwriterV2.css';
import './aiUnderwriterBackendBrainConsole.css';

export function AIUnderwriterBackendBrainConsole() {
  const [model, setModel] = useState<RuntimeDashboardModel | null>(null);

  useEffect(() => {
    let mounted = true;
    loadRuntimeDashboardModel().then((nextModel) => {
      if (mounted) setModel(nextModel);
    });
    return () => { mounted = false; };
  }, []);

  if (!model) {
    return (
      <div className="ai-underwriter-page ai-module-page">
        <section className="ai-card ai-brain-loading">Loading V2 Backend Brain runtime...</section>
      </div>
    );
  }

  return (
    <div className="ai-underwriter-page ai-module-page">
      <header className="ai-hero compact">
        <div className="ai-brand-lockup">
          <div className="ai-logo-mark">A</div>
          <div>
            <h2>{model.title}</h2>
            <p>{model.subtitle}</p>
          </div>
        </div>
      </header>

      <section className="ai-brain-grid">
        <main className="ai-card ai-brain-main">
          <div className="ai-card-title">
            <div>
              <h2>Runtime Smoke Path</h2>
              <p>Live frontend/admin bridge into the runtime dispatcher.</p>
            </div>
            <span className="ai-tone ai-tone-green">Mounted</span>
          </div>

          <div className="ai-brain-status-grid">
            {model.statusCards.map((card) => (
              <div className="ai-brain-status-card" key={card.label}>
                <span>{card.label}</span>
                <strong>{card.value}</strong>
                <small>{card.detail}</small>
              </div>
            ))}
          </div>

          <div className="ai-brain-flow">
            <div><span>Create V1</span><strong>{model.smokeTest.createStatus}</strong></div>
            <div><span>Snapshot</span><strong>{model.smokeTest.snapshotStatus}</strong></div>
            <div><span>V2 Audit</span><strong>{model.smokeTest.auditStatus}</strong></div>
            <div><span>Governance</span><strong>{model.smokeTest.governanceStatus}</strong></div>
          </div>
        </main>

        <aside className="ai-card ai-results-card">
          <div className="ai-card-title"><h3>Runtime Lock</h3><span className="ai-tone ai-tone-purple">Shadow Only</span></div>
          <div className="ai-summary-list">
            <div className="ai-result-row"><span>Decision ID</span><b className="ai-text-cyan">{model.smokeTest.decisionId}</b></div>
            <div className="ai-result-row"><span>Shadow Only</span><b className="ai-text-green">{model.smokeTest.shadowOnly ? 'Yes' : 'Review'}</b></div>
            <div className="ai-result-row"><span>Can Mutate V1</span><b className="ai-text-purple">No</b></div>
            <div className="ai-result-row"><span>Runtime</span><b className="ai-text-green">Mounted</b></div>
          </div>
        </aside>

        <section className="ai-card ai-span-3">
          <div className="ai-card-title"><h3>Route Contracts</h3><span className="ai-tone ai-tone-cyan">Callable Surface</span></div>
          <div className="ai-brain-routes">
            {model.routeContracts.map((route) => (
              <div className="ai-brain-route" key={route.path}>
                <span>{route.method}</span>
                <strong>{route.path}</strong>
                <small>{route.purpose}</small>
              </div>
            ))}
          </div>
        </section>
      </section>
    </div>
  );
}
