import { dashboardSvgAssets, fallbackDashboardSvg } from '../data/svgAssets';

export function DashboardGraphic({ id, title }: { id: string; title: string }) {
  const src = dashboardSvgAssets[id] || fallbackDashboardSvg;
  return (
    <div className="dashboard-graphic-card" aria-label={`${title} SVG visual`}>
      <img src={src} alt={`${title} dashboard SVG`} loading="lazy" />
      <div>
        <span>Vector UI Layer</span>
        <strong>{title}</strong>
        <small>Native SVG asset · Webflow-ready · GitHub tracked</small>
      </div>
    </div>
  );
}
