import React from 'react';
import { dashboardKpis, sidebarItems } from '../data/mockData.js';

export function Sidebar({ active, onChange }) {
  return (
    <aside className="sidebar">
      <div className="brand">
        <div className="brand-mark">A</div>
        <div>
          <div className="brand-title">AUTO<span>DEFI</span></div>
          <div className="brand-subtitle">DeFi Auto Loan Pool</div>
        </div>
      </div>
      <nav className="nav-list">
        {sidebarItems.map((item) => (
          <button key={item.key} className={`nav-item ${active === item.key ? 'active' : ''}`} onClick={() => onChange(item.key)}>
            <span className="nav-icon">{item.icon}</span>
            <span>{item.label}</span>
          </button>
        ))}
      </nav>
      <div className="admin-card">
        <div className="avatar">AD</div>
        <div>
          <strong>AutoDeFi Admin</strong>
          <small>admin@autodefi.io</small>
        </div>
        <span className="chevron">⌄</span>
      </div>
    </aside>
  );
}

export function PageShell({ active, onChange, title, subtitle, children, actions }) {
  return (
    <div className="app-frame">
      <Sidebar active={active} onChange={onChange} />
      <main className="main">
        <header className="page-header">
          <div>
            <h1>{title}</h1>
            <p>{subtitle}</p>
          </div>
          <TopControls />
        </header>
        {children}
        {actions && <ActionBar actions={actions} />}
      </main>
    </div>
  );
}

export function TopControls() {
  return (
    <div className="top-controls">
      <button className="control-btn">All Pools <span>⌄</span></button>
      <button className="control-btn">▣ May 12, 2025 <span>⌄</span></button>
      <button className="control-btn">⇱ Export</button>
    </div>
  );
}

export function KpiGrid({ items = dashboardKpis, className = '' }) {
  return (
    <section className={`kpi-grid ${className}`}>
      {items.map((item) => <KpiCard key={item.label} {...item} />)}
    </section>
  );
}

export function KpiCard({ label, value, change, sub, tone = 'blue', icon = '●', trend = [20, 25, 18, 30, 24, 35, 28] }) {
  return (
    <article className="card kpi-card">
      <div className={`icon-bubble ${tone}`}>{icon}</div>
      <div className="kpi-copy">
        <div className="kpi-label">{label} <span className="info">ⓘ</span></div>
        <div className="kpi-value">{value}</div>
        <div className={`kpi-change ${change?.includes('↓') ? 'down' : 'up'}`}>{change} <span>{sub}</span></div>
      </div>
      <Sparkline points={trend} tone={tone} />
    </article>
  );
}

export function Sparkline({ points, tone = 'blue' }) {
  const max = Math.max(...points);
  const min = Math.min(...points);
  const coords = points.map((p, i) => {
    const x = (i / (points.length - 1)) * 96;
    const y = 34 - ((p - min) / Math.max(max - min, 1)) * 28;
    return `${x},${y}`;
  }).join(' ');
  return (
    <svg className={`sparkline ${tone}`} viewBox="0 0 100 42" preserveAspectRatio="none" aria-hidden="true">
      <polyline points={coords} fill="none" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Donut({ segments, center, subtitle }) {
  const total = segments.reduce((sum, segment) => sum + segment.percent, 0);
  let offset = 0;
  return (
    <div className="donut-wrap">
      <div className="donut" style={{ background: `conic-gradient(${segments.map((s) => {
        const start = offset;
        offset += (s.percent / total) * 100;
        return `var(--${s.color}) ${start}% ${offset}%`;
      }).join(', ')})` }}>
        <div className="donut-inner">
          <strong>{center}</strong>
          <span>{subtitle}</span>
        </div>
      </div>
    </div>
  );
}

export function LegendList({ items }) {
  return (
    <div className="legend-list">
      {items.map((item) => (
        <div className="legend-row" key={item.label}>
          <span className={`dot ${item.color}`} />
          <span>{item.label}</span>
          <strong>{typeof item.value === 'number' ? item.value.toLocaleString() : item.value} {item.percent ? `(${item.percent}%)` : ''}</strong>
        </div>
      ))}
    </div>
  );
}

export function Panel({ title, children, footer, className = '' }) {
  return (
    <section className={`card panel ${className}`}>
      <div className="panel-title"><h2>{title}</h2><span>ⓘ</span></div>
      {children}
      {footer && <div className="panel-footer">{footer}</div>}
    </section>
  );
}

export function FilterBar({ placeholders = ['Search by borrower, vehicle, or loan ID...', 'Status', 'Payment Status', 'Pool'] }) {
  return (
    <div className="filter-bar">
      <label className="search-box"><span>⌕</span><input placeholder={placeholders[0]} /></label>
      {placeholders.slice(1).map((item) => <button className="filter-select" key={item}>{item}<span>⌄</span></button>)}
      <button className="more-filter">▽ More Filters <b>2</b></button>
      <button className="clear-btn">Clear Filters</button>
    </div>
  );
}

export function StatusBadge({ status }) {
  const key = status.toLowerCase();
  let tone = 'green';
  if (key.includes('pending') || key.includes('late') || key.includes('at risk') || key.includes('soon') || key.includes('30+')) tone = 'orange';
  if (key.includes('failed') || key.includes('declined') || key.includes('expired') || key.includes('lapsed') || key.includes('60+') || key.includes('31+') || key.includes('documents')) tone = 'red';
  if (key.includes('under review')) tone = 'blue';
  if (key.includes('completed') || key.includes('portal')) tone = 'purple';
  return <span className={`status-badge ${tone}`}>{status}</span>;
}

export function PoolBadge({ pool }) {
  const tone = pool.includes('A') ? 'purple' : pool.includes('B') ? 'blue' : 'cyan';
  return <span className={`pool-badge ${tone}`}>{pool}</span>;
}

export function DataTable({ columns, rows, footer = 'Showing 1 to 10 of 11,293 results' }) {
  return (
    <div className="table-card card">
      <table>
        <thead>
          <tr>{columns.map((col) => <th key={col}>{col}</th>)}</tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index}>{row.map((cell, cellIndex) => <td key={cellIndex}>{cell}</td>)}</tr>
          ))}
        </tbody>
      </table>
      <div className="table-footer">
        <span>{footer}</span>
        <div className="pagination"><button>‹</button><button className="active-page">1</button><button>2</button><button>3</button><button>4</button><span>...</span><button>›</button></div>
        <span>Rows per page <b>10⌄</b></span>
      </div>
    </div>
  );
}

export function ActionBar({ actions }) {
  return (
    <div className="action-bar">
      {actions.map((action) => <button key={action.label}><span>{action.icon}</span>{action.label}</button>)}
    </div>
  );
}

export function LineChart({ series = [[15, 24, 32, 40, 49, 57, 64]], labels = ['Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May'], tone = 'blue' }) {
  const points = series[0];
  const max = Math.max(...points);
  const min = Math.min(...points);
  const path = points.map((p, i) => {
    const x = 20 + (i / (points.length - 1)) * 520;
    const y = 180 - ((p - min) / Math.max(max - min, 1)) * 140;
    return `${i === 0 ? 'M' : 'L'} ${x} ${y}`;
  }).join(' ');
  return (
    <div className="chart-wrap">
      <svg viewBox="0 0 580 220" className={`line-chart ${tone}`}>
        {[0, 1, 2, 3, 4].map((line) => <line key={line} x1="20" x2="540" y1={40 + line * 35} y2={40 + line * 35} />)}
        <path d={`${path} L 540 190 L 20 190 Z`} className="area" />
        <path d={path} className="line" />
        {points.map((p, i) => {
          const x = 20 + (i / (points.length - 1)) * 520;
          const y = 180 - ((p - min) / Math.max(max - min, 1)) * 140;
          return <circle key={i} cx={x} cy={y} r="5" />;
        })}
      </svg>
      <div className="chart-labels">{labels.map((label) => <span key={label}>{label}</span>)}</div>
    </div>
  );
}

export function MultiLineChart() {
  const lines = [
    { tone: 'green', points: [84, 77, 83, 79, 84, 91, 82, 86, 89, 85, 81] },
    { tone: 'orange', points: [22, 30, 40, 28, 27, 30, 25, 24, 29, 28, 27] },
    { tone: 'red', points: [8, 8, 10, 7, 8, 8, 8, 8, 9, 8, 8] }
  ];
  return (
    <div className="multi-chart">
      <svg viewBox="0 0 680 250">
        {[0, 1, 2, 3, 4].map((line) => <line key={line} x1="35" x2="650" y1={35 + line * 44} y2={35 + line * 44} />)}
        {lines.map((line) => {
          const path = line.points.map((p, i) => {
            const x = 45 + (i / (line.points.length - 1)) * 590;
            const y = 225 - (p / 100) * 200;
            return `${i === 0 ? 'M' : 'L'} ${x} ${y}`;
          }).join(' ');
          return <path key={line.tone} className={`chart-path ${line.tone}`} d={path} />;
        })}
      </svg>
      <div className="chart-legend-inline"><span><i className="dot green" />On Time</span><span><i className="dot orange" />Late (1–30)</span><span><i className="dot red" />Late (31+)</span></div>
    </div>
  );
}

export function BarBreakdown({ rows }) {
  return (
    <div className="bar-list">
      {rows.map((row) => (
        <div className="bar-row" key={row.label}>
          <div><span>{row.label}</span><strong>{row.value}</strong></div>
          <div className="bar-track"><span className={row.color} style={{ width: row.width }} /></div>
        </div>
      ))}
    </div>
  );
}
