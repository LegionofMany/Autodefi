import type { Tone } from '../data/autodefiData';

const toneColor: Record<Tone, string> = {
  blue: '#2f80ff',
  green: '#00e88f',
  purple: '#8b5cf6',
  orange: '#f59e0b',
  red: '#ef4444',
  cyan: '#22d3ee'
};

function points(values: number[], width: number, height: number, padding = 6) {
  const max = Math.max(...values);
  const min = Math.min(...values);
  const range = Math.max(max - min, 1);
  return values
    .map((v, index) => {
      const x = padding + (index / Math.max(values.length - 1, 1)) * (width - padding * 2);
      const y = height - padding - ((v - min) / range) * (height - padding * 2);
      return `${x.toFixed(1)},${y.toFixed(1)}`;
    })
    .join(' ');
}

export function Sparkline({ values, tone = 'green' }: { values: number[]; tone?: Tone }) {
  const color = toneColor[tone];
  const poly = points(values, 130, 42, 4);
  const fill = `0,42 ${poly} 130,42`;
  return (
    <svg className="sparkline" viewBox="0 0 130 42" role="img" aria-label="Trend sparkline">
      <defs>
        <linearGradient id={`spark-${tone}`} x1="0" y1="0" x2="0" y2="1">
          <stop stopColor={color} stopOpacity="0.42" />
          <stop offset="1" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <polygon points={fill} fill={`url(#spark-${tone})`} />
      <polyline points={poly} fill="none" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function LineChart({ series, labels, height = 220 }: { series: { label: string; values: number[]; tone: Tone }[]; labels?: string[]; height?: number }) {
  const width = 720;
  return (
    <div className="chart-shell">
      <svg viewBox={`0 0 ${width} ${height}`} className="line-chart" role="img" aria-label="Line chart">
        <defs>
          {series.map((s) => (
            <linearGradient key={s.label} id={`line-grad-${s.label.replace(/\W/g, '')}`} x1="0" y1="0" x2="0" y2="1">
              <stop stopColor={toneColor[s.tone]} stopOpacity="0.32" />
              <stop offset="1" stopColor={toneColor[s.tone]} stopOpacity="0" />
            </linearGradient>
          ))}
        </defs>
        {[0, 1, 2, 3, 4].map((row) => {
          const y = 22 + row * ((height - 54) / 4);
          return <line key={row} x1="48" y1={y} x2={width - 18} y2={y} stroke="rgba(255,255,255,.07)" />;
        })}
        {series.map((s) => {
          const poly = points(s.values, width - 56, height - 34, 8)
            .split(' ')
            .map((pair) => {
              const [x, y] = pair.split(',').map(Number);
              return `${x + 40},${y + 14}`;
            })
            .join(' ');
          const fill = `48,${height - 20} ${poly} ${width - 18},${height - 20}`;
          return (
            <g key={s.label}>
              <polygon points={fill} fill={`url(#line-grad-${s.label.replace(/\W/g, '')})`} />
              <polyline points={poly} fill="none" stroke={toneColor[s.tone]} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              {poly.split(' ').filter((_, i) => i % 3 === 0).map((pair, idx) => {
                const [x, y] = pair.split(',').map(Number);
                return <circle key={idx} cx={x} cy={y} r="3.4" fill={toneColor[s.tone]} />;
              })}
            </g>
          );
        })}
        {labels?.map((label, idx) => {
          const x = 56 + (idx / Math.max(labels.length - 1, 1)) * (width - 92);
          return <text key={label} x={x} y={height - 2} fill="rgba(220,232,255,.64)" fontSize="12" textAnchor="middle">{label}</text>;
        })}
      </svg>
      <div className="legend-row">
        {series.map((s) => <span key={s.label}><i style={{ background: toneColor[s.tone] }} />{s.label}</span>)}
      </div>
    </div>
  );
}

export function DonutChart({ data, centerLabel, centerValue, size = 190 }: { data: { label: string; value: number; tone: Tone }[]; centerLabel?: string; centerValue?: string; size?: number }) {
  const radius = 76;
  const stroke = 22;
  const circumference = 2 * Math.PI * radius;
  let offset = 0;
  return (
    <div className="donut-wrap" style={{ width: size, height: size }}>
      <svg viewBox="0 0 200 200" className="donut" role="img" aria-label="Donut chart">
        <circle cx="100" cy="100" r={radius} fill="transparent" stroke="rgba(255,255,255,.08)" strokeWidth={stroke} />
        {data.map((item) => {
          const dash = (item.value / 100) * circumference;
          const circle = (
            <circle
              key={item.label}
              cx="100"
              cy="100"
              r={radius}
              fill="transparent"
              stroke={toneColor[item.tone]}
              strokeWidth={stroke}
              strokeDasharray={`${dash} ${circumference - dash}`}
              strokeDashoffset={-offset}
              strokeLinecap="butt"
              transform="rotate(-90 100 100)"
            />
          );
          offset += dash;
          return circle;
        })}
        <circle cx="100" cy="100" r="52" fill="#06101d" />
        {centerValue && <text x="100" y="94" fill="white" fontSize="22" fontWeight="700" textAnchor="middle">{centerValue}</text>}
        {centerLabel && <text x="100" y="116" fill="rgba(220,232,255,.66)" fontSize="12" textAnchor="middle">{centerLabel}</text>}
      </svg>
    </div>
  );
}

export function Gauge({ value, label, tone = 'green' }: { value: number; label: string; tone?: Tone }) {
  const radius = 72;
  const circumference = Math.PI * radius;
  const dash = (value / 100) * circumference;
  return (
    <div className="gauge-wrap">
      <svg viewBox="0 0 200 120" className="gauge" role="img" aria-label={`${label} gauge`}>
        <path d="M28 100a72 72 0 0 1 144 0" fill="none" stroke="rgba(255,255,255,.10)" strokeWidth="24" strokeLinecap="round" />
        <path d="M28 100a72 72 0 0 1 144 0" fill="none" stroke={toneColor[tone]} strokeWidth="24" strokeLinecap="round" strokeDasharray={`${dash} ${circumference - dash}`} />
        <text x="100" y="82" fill="white" fontSize="28" fontWeight="800" textAnchor="middle">{value}%</text>
        <text x="100" y="106" fill="rgba(220,232,255,.66)" fontSize="13" textAnchor="middle">{label}</text>
      </svg>
    </div>
  );
}

export function Heatmap({ rows, columns, values }: { rows: string[]; columns: string[]; values: number[][] }) {
  return (
    <div className="heatmap" role="table" aria-label="Capital allocation heatmap">
      <div className="heat-row heat-head"><span />{columns.map((c) => <b key={c}>{c}</b>)}</div>
      {rows.map((row, r) => (
        <div className="heat-row" key={row}>
          <span>{row}</span>
          {columns.map((col, c) => {
            const v = values[r][c];
            const tone: Tone = v >= 35 ? 'green' : v >= 20 ? 'orange' : 'red';
            return <i className={`heat-cell tone-${tone}`} key={col}>{v}%</i>;
          })}
        </div>
      ))}
      <div className="legend-row compact"><span><i style={{ background: toneColor.green }} />High Allocation</span><span><i style={{ background: toneColor.orange }} />Moderate</span><span><i style={{ background: toneColor.red }} />Low Allocation</span></div>
    </div>
  );
}

export function BarDistribution({ rows }: { rows: { label: string; value: number; tone: Tone; sub?: string }[] }) {
  return (
    <div className="bar-list">
      {rows.map((row) => (
        <div className="bar-row" key={row.label}>
          <span>{row.label}</span>
          <div className="bar-track"><i className={`tone-bg-${row.tone}`} style={{ width: `${row.value}%` }} /></div>
          <strong>{row.value}%</strong>
          {row.sub && <small>{row.sub}</small>}
        </div>
      ))}
    </div>
  );
}
