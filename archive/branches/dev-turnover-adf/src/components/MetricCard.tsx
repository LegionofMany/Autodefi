import { Icon } from './Icon';
import { Sparkline } from './SvgCharts';
import type { Metric } from '../data/autodefiData';

export function MetricCard({ metric, compact = false }: { metric: Metric; compact?: boolean }) {
  return (
    <div className={`metric-card tone-${metric.tone} ${compact ? 'compact' : ''}`}>
      <div className="metric-icon"><Icon name={metric.icon} size={compact ? 26 : 34} /></div>
      <div className="metric-copy">
        <span>{metric.label}</span>
        <strong>{metric.value}</strong>
        <small>{metric.delta && <em>{metric.delta}</em>} {metric.note}</small>
      </div>
      {metric.spark && <Sparkline values={metric.spark} tone={metric.tone} />}
    </div>
  );
}
