import type { StatCardData } from '../types';

export function StatCard({ stat }: { stat: StatCardData }) {
  return (
    <article className={`stat-card ${stat.tone}`}>
      <span className={`icon-tile ${stat.tone}`}><img src={stat.icon} alt="" /></span>
      <div>
        <p>{stat.label}</p>
        <strong>{stat.value}</strong>
        {stat.subValue && <small>{stat.subValue}</small>}
        {stat.trend && <em>{stat.trend}</em>}
      </div>
    </article>
  );
}
