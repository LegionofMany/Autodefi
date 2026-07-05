import { useMemo, useState } from 'react';
import { insurancePoolScreens } from '../data/insurancePoolSuiteData';
import '../styles/insurance-pool-suite.css';

export function InsurancePoolSuite() {
  const [activeId, setActiveId] = useState('insurance-pool');
  const activeScreen = useMemo(
    () => insurancePoolScreens.find((screen) => screen.id === activeId) || insurancePoolScreens[0],
    [activeId]
  );

  return (
    <section className="insurance-suite" aria-label="AutoDeFi DAO Insurance Pool SVG lock suite">
      <div className="insurance-suite__head">
        <div>
          <span className="insurance-suite__eyebrow">AutoDeFi DAO · SVG locked dashboard family</span>
          <h2>{activeScreen.title}</h2>
          <p>{activeScreen.subtitle}</p>
        </div>
        <div className="insurance-suite__badge">INSURANCE POOL · ACTIVE</div>
      </div>

      <div className="insurance-suite__tabs" role="tablist" aria-label="Insurance Pool dashboard tabs">
        {insurancePoolScreens.map((screen) => (
          <button
            type="button"
            key={screen.id}
            className={screen.id === activeId ? 'active' : ''}
            onClick={() => setActiveId(screen.id)}
            role="tab"
            aria-selected={screen.id === activeId}
          >
            <span>{screen.label}</span>
          </button>
        ))}
      </div>

      <div className="insurance-suite__kpis">
        {activeScreen.kpis.map((metric) => (
          <article className={`insurance-suite__kpi tone-${metric.tone}`} key={metric.label}>
            <span>{metric.label}</span>
            <strong>{metric.value}</strong>
            <small>{metric.note}</small>
          </article>
        ))}
      </div>

      <div className="insurance-suite__body">
        <article className="insurance-suite__visual-card">
          <img src={activeScreen.svg} alt={`${activeScreen.title} locked SVG dashboard`} loading="eager" />
          <div>
            <span>Tracked SVG asset</span>
            <strong>{activeScreen.svg}</strong>
          </div>
        </article>

        <aside className="insurance-suite__rail">
          <article className="insurance-suite__panel">
            <h3>Locked highlights</h3>
            <ul>
              {activeScreen.highlights.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </article>

          {activeScreen.panels.map((panel) => (
            <article className="insurance-suite__panel" key={panel.title}>
              <h3>{panel.title}</h3>
              <ul>
                {panel.rows.map((row) => <li key={row}>{row}</li>)}
              </ul>
            </article>
          ))}
        </aside>
      </div>
    </section>
  );
}
