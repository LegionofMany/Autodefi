import type { EntryPointModel } from '../features/entry-points/entryPointData';
import './entryPointMain.css';

type EntryPointMainPageProps = {
  model: EntryPointModel;
  onNavigate?: (viewId: string) => void;
};

export function EntryPointMainPage({ model, onNavigate }: EntryPointMainPageProps) {
  return (
    <div className="entry-main-page">
      <header className="entry-hero-card">
        <div className="entry-hero-copy">
          <span>{model.eyebrow}</span>
          <h2>{model.title}</h2>
          <p>{model.subtitle}</p>
          <small>{model.audience}</small>
          <div className="entry-actions">
            <button className={`entry-action tone-${model.primaryAction.tone}`} type="button" onClick={() => onNavigate?.(model.primaryAction.targetView)}>
              {model.primaryAction.label}
            </button>
            {model.secondaryActions.map((action) => (
              <button className="entry-action secondary" type="button" key={action.label} onClick={() => onNavigate?.(action.targetView)}>
                {action.label}
              </button>
            ))}
          </div>
        </div>
        <div className="entry-orbital-lock">
          <div className="entry-ring one" />
          <div className="entry-ring two" />
          <strong>AUTO<br />DEFI</strong>
          <small>{model.eyebrow}</small>
        </div>
      </header>

      <section className="entry-card-grid">
        {model.cards.map((card) => (
          <div className={`entry-metric-card glow-${card.tone}`} key={card.label}>
            <span>{card.label}</span>
            <strong>{card.value}</strong>
            <small>{card.detail}</small>
          </div>
        ))}
      </section>

      <section className="entry-section-grid">
        {model.sections.map((section) => (
          <article className="entry-section-card" key={section.title}>
            <h3>{section.title}</h3>
            <p>{section.description}</p>
            <div className="entry-chip-list">
              {section.items.map((item) => <span key={item}>{item}</span>)}
            </div>
          </article>
        ))}
      </section>

      <section className="entry-safety-card">
        <div>
          <span>Entry Point Lock</span>
          <h3>Safety, role separation, and wiring boundaries</h3>
        </div>
        <div className="entry-lock-list">
          {model.safetyLocks.map((lock) => <b key={lock}>{lock}</b>)}
        </div>
      </section>
    </div>
  );
}
