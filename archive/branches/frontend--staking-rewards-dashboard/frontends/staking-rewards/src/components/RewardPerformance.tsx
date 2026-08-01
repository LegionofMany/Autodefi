import type { DashboardData } from '../types';

export function RewardPerformance({ series }: { series: DashboardData['performanceSeries'] }) {
  const max = Math.max(...series.map((s) => s.value));
  const points = series.map((item, index) => {
    const x = (index / (series.length - 1)) * 100;
    const y = 100 - (item.value / max) * 88 - 4;
    return `${x},${y}`;
  }).join(' ');
  const area = `0,100 ${points} 100,100`;

  return (
    <section className="panel performance-panel">
      <div className="performance-sidebar">
        <h2>Rewards Performance <span>ⓘ</span></h2>
        <p>Total Rewards (All Time)</p>
        <strong>$18,742.66</strong>
        <em>↑ 18.7% vs last 30d</em>
        <hr />
        <p>Claimed Rewards</p>
        <strong>$6,250.00</strong>
        <em>↑ 12.4% vs last 30d</em>
      </div>
      <div className="chart-card">
        <div className="range-tabs"><button className="active">30D</button><button>90D</button><button>1Y</button><button>All</button></div>
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="line-chart" aria-label="Rewards performance chart">
          <defs>
            <linearGradient id="chartArea" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0" stopColor="#7b2fff" stopOpacity=".55" />
              <stop offset="1" stopColor="#7b2fff" stopOpacity="0" />
            </linearGradient>
            <filter id="chartGlow"><feGaussianBlur stdDeviation="1.8" result="blur" /><feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
          </defs>
          {[20, 40, 60, 80].map((y) => <line key={y} x1="0" x2="100" y1={y} y2={y} className="grid-line" />)}
          <polygon points={area} fill="url(#chartArea)" />
          <polyline points={points} className="chart-line" filter="url(#chartGlow)" />
          <circle cx="100" cy={100 - (series[series.length - 1].value / max) * 88 - 4} r="1.4" className="chart-dot" />
        </svg>
        <div className="chart-y"><span>$20K</span><span>$15K</span><span>$10K</span><span>$5K</span><span>$0</span></div>
        <div className="chart-x">{series.filter((_, i) => [0, 2, 4, 6, 8, 10, 12].includes(i)).map((s) => <span key={s.date}>{s.date}</span>)}</div>
        <div className="tooltip-card"><small>May 12, 2025</small><p>Total Rewards <b>$18,742.66</b></p><em>↑ 18.7% vs Apr 12</em></div>
      </div>
    </section>
  );
}
