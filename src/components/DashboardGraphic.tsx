import { useEffect, useState } from 'react';
import { dashboardGraphicSets, fallbackDashboardSvg } from '../data/svgAssets';

export function DashboardGraphic({ id, title }: { id: string; title: string }) {
  const assets = dashboardGraphicSets[id] || [{ src: fallbackDashboardSvg, label: title }];
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => setActiveIndex(0), [id]);

  const active = assets[activeIndex] || assets[0];
  const select = (index: number) => setActiveIndex(Math.max(0, Math.min(index, assets.length - 1)));

  return (
    <section className="dashboard-graphic-card" aria-label={`${title} approved SVG visual`}>
      <div className="dashboard-graphic-stage">
        <img src={active.src} alt={`${active.label} approved dashboard design`} loading="eager" />
        {assets.length > 1 ? <span className="dashboard-graphic-count">{activeIndex + 1} / {assets.length}</span> : null}
      </div>
      <div className="dashboard-graphic-copy">
        <span>Approved SVG design</span>
        <strong>{active.label}</strong>
        <small>{title} · Native SVG · GitHub tracked · responsive</small>
        {assets.length > 1 ? (
          <>
            <div className="dashboard-graphic-controls">
              <button type="button" onClick={() => select(activeIndex - 1)} disabled={activeIndex === 0}>← Previous</button>
              <button type="button" onClick={() => select(activeIndex + 1)} disabled={activeIndex === assets.length - 1}>Next →</button>
            </div>
            <div className="dashboard-graphic-tabs" aria-label={`${title} approved graphic screens`}>
              {assets.map((asset, index) => <button type="button" key={asset.src} className={index === activeIndex ? 'active' : ''} aria-pressed={index === activeIndex} onClick={() => select(index)}>{asset.label}</button>)}
            </div>
          </>
        ) : null}
      </div>
    </section>
  );
}
