import { useMemo, useState } from 'react';
import type { CSSProperties } from 'react';
import { dealerNav, dealerPages, dealerProfile, type DealerMetric, type DealerPage, type DealerRailCard, type DealerPipelineStage } from '../../data/dealerPortalData';
import './dealer.css';

type ToneVars = CSSProperties & { '--tone-color'?: string };

const toneColors: Record<string, string> = {
  blue: '#1677ff',
  green: '#00e88f',
  purple: '#8b5cf6',
  orange: '#f59e0b',
  red: '#ef4444',
  cyan: '#13c6c6',
  slate: '#94a3b8'
};

function DealerIcon({ name, size = 22 }: { name: string; size?: number }) {
  return (
    <svg className="dealer-icon" width={size} height={size} aria-hidden="true">
      <use href={`/assets/dealer/icons/dealer-icon-sprite.svg#${name}`} />
    </svg>
  );
}

function MetricCard({ metric }: { metric: DealerMetric }) {
  const style: ToneVars = { '--tone-color': toneColors[metric.tone] };
  return (
    <article className="dealer-metric" style={style}>
      <span className="dealer-metric-icon"><DealerIcon name={metric.icon} /></span>
      <div>
        <small>{metric.label}</small>
        <strong>{metric.value}</strong>
        {metric.note && <span>{metric.note}</span>}
        {metric.delta && <em>{metric.delta.startsWith('-') ? '↓' : '↑'} {metric.delta.replace(/^[-+]/, '')}</em>}
      </div>
    </article>
  );
}

function Pipeline({ stages }: { stages: DealerPipelineStage[] }) {
  return (
    <section className="dealer-card dealer-pipeline-card">
      <div className="dealer-card-head">
        <h2>Pipeline</h2>
        <div className="dealer-mini-actions"><button>This Month</button><button>Pipeline View</button></div>
      </div>
      <div className="dealer-pipeline">
        {stages.map((stage) => {
          const style: ToneVars = { '--tone-color': toneColors[stage.tone] };
          return (
            <div className="dealer-stage" style={style} key={stage.label}>
              <span>{stage.label}</span>
              <strong>{stage.value}</strong>
              {stage.pct && <small>{stage.pct}</small>}
            </div>
          );
        })}
      </div>
    </section>
  );
}

function StatusBadge({ value }: { value: string }) {
  const key = value.toLowerCase();
  let tone = 'blue';
  if (key.includes('funded') || key.includes('approved') || key.includes('active') || key.includes('available') || key.includes('converted') || key.includes('paid')) tone = 'green';
  if (key.includes('review') || key.includes('qualified') || key.includes('reserved') || key.includes('pending') || key.includes('scheduled')) tone = 'orange';
  if (key.includes('declined') || key.includes('lost')) tone = 'red';
  if (key.includes('tier 1')) tone = 'green';
  if (key.includes('tier 2')) tone = 'orange';
  if (key.includes('tier 3')) tone = 'red';
  if (key.includes('tier 4')) tone = 'purple';
  return <span className={`dealer-status dealer-status-${tone}`}>{value}</span>;
}

function looksLikeStatus(value: string) {
  const key = value.toLowerCase();
  return ['active', 'available', 'reserved', 'sold pending', 'inactive', 'new', 'contacted', 'qualified', 'follow-up', 'proposal sent', 'lost / closed', 'funded', 'under review', 'approved', 'funding', 'pre-qualified', 'submitted', 'closed', 'declined', 'tier 1', 'tier 2', 'tier 3', 'tier 4', 'converted', 'paid', 'pending', 'scheduled'].some((term) => key.includes(term));
}

function DataTable({ page }: { page: DealerPage }) {
  return (
    <section className="dealer-card dealer-table-card">
      <div className="dealer-tabs">
        {page.table.tabs.map((tab, index) => <button key={tab} className={index === 0 ? 'active' : ''}>{tab}</button>)}
        <span className="dealer-tab-spacer" />
        <button className="dealer-filter-button"><DealerIcon name="filter" size={16} /> Filters</button>
        <button className="dealer-filter-button"><DealerIcon name="grid" size={16} /></button>
        <button className="dealer-filter-button"><DealerIcon name="list" size={16} /></button>
      </div>
      <div className="dealer-filters">
        <label><DealerIcon name="search" size={16} /><input placeholder={`Search ${page.label.toLowerCase()}...`} /></label>
        {page.table.filters.map((filter) => <button key={filter}>{filter}</button>)}
        <button>Clear Filters</button>
      </div>
      <div className="dealer-table-wrap">
        <table>
          <thead>
            <tr>{page.table.columns.map((column) => <th key={column}>{column}</th>)}<th>Actions</th></tr>
          </thead>
          <tbody>
            {page.table.rows.map((row, rowIndex) => (
              <tr key={`${page.id}-${rowIndex}`}>
                {row.map((cell, index) => <td key={`${cell}-${index}`}>{looksLikeStatus(cell) ? <StatusBadge value={cell} /> : <span>{cell}</span>}</td>)}
                <td className="dealer-row-actions"><button><DealerIcon name="eye" size={16} /></button><button><DealerIcon name="edit" size={16} /></button><button><DealerIcon name="more" size={16} /></button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <footer className="dealer-pagination"><span>{page.table.pagination}</span><div><button className="active">1</button><button>2</button><button>3</button><button>›</button></div></footer>
    </section>
  );
}

function MiniChart() {
  return (
    <svg className="dealer-mini-chart" viewBox="0 0 280 110" role="img" aria-label="Mini trend chart">
      <defs>
        <linearGradient id="dealer-chart-fill" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="#1677ff" stopOpacity="0.45" />
          <stop offset="1" stopColor="#1677ff" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d="M0 86 L20 72 L40 78 L60 55 L80 62 L100 44 L120 51 L140 35 L160 42 L180 24 L200 31 L220 18 L240 25 L260 10 L280 18 L280 110 L0 110 Z" fill="url(#dealer-chart-fill)" />
      <polyline points="0,86 20,72 40,78 60,55 80,62 100,44 120,51 140,35 160,42 180,24 200,31 220,18 240,25 260,10 280,18" fill="none" stroke="#1677ff" strokeWidth="4" strokeLinecap="round" />
      <polyline points="0,92 20,84 40,88 60,75 80,79 100,68 120,72 140,62 160,66 180,55 200,61 220,48 240,54 260,42 280,46" fill="none" stroke="#00e88f" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

function Funnel({ items }: { items: string[] }) {
  return <div className="dealer-funnel">{items.map((item, index) => <div key={item} style={{ width: `${100 - index * 12}%` }}>{item}</div>)}</div>;
}

function RailCard({ card }: { card: DealerRailCard }) {
  return (
    <section className="dealer-card dealer-rail-card">
      <div className="dealer-card-head"><h3>{card.title}</h3><button>View All</button></div>
      {card.kind === 'donut' && <div className="dealer-donut"><div><strong>{card.value}</strong><span>{card.subtitle || card.title}</span></div></div>}
      {card.kind === 'chart' && <><strong className="dealer-rail-value">{card.value}</strong>{card.subtitle && <em>{card.subtitle}</em>}<MiniChart /></>}
      {card.kind === 'funnel' && <Funnel items={card.items} />}
      {card.kind === 'score' && <div className="dealer-score"><strong>{card.value}</strong>{card.subtitle && <span>{card.subtitle}</span>}</div>}
      {card.kind === 'copy' && <div className="dealer-copy-card"><code>{card.value}</code>{card.items.map((item) => <code key={item}>{item}</code>)}</div>}
      {card.kind === 'actions'
        ? <div className="dealer-action-grid">{card.items.map((item) => <button key={item}><DealerIcon name="plus" size={18} />{item}</button>)}</div>
        : <ul className="dealer-list">{card.items.map((item) => <li key={item}><span>{item}</span></li>)}</ul>}
    </section>
  );
}

function DealerTopbar({ page }: { page: DealerPage }) {
  return (
    <header className="dealer-topbar">
      <div>
        <h1>{page.label}</h1>
        <p>Dealer Portal <span>/</span> {page.label}</p>
      </div>
      <label className="dealer-search"><DealerIcon name="search" size={18} /><input placeholder={page.searchPlaceholder} /><kbd>/</kbd></label>
      <div className="dealer-top-actions">
        <button className="dealer-icon-button"><DealerIcon name="bell" /><sup>8</sup></button>
        <button className="dealer-icon-button"><DealerIcon name="message" /><sup>3</sup></button>
        <button className="dealer-account"><img src="/assets/dealer/logos/elite-motors-badge.svg" alt="Elite Motors" /><span><b>{dealerProfile.name}</b><small>{dealerProfile.role}</small></span><DealerIcon name="chevron" size={16} /></button>
      </div>
    </header>
  );
}

function DealerSidebar({ active, setActive }: { active: string; setActive: (id: string) => void }) {
  return (
    <aside className="dealer-sidebar">
      <div className="dealer-brand"><img src="/assets/dealer/logos/autodefi-logo-primary.svg" alt="AutoDeFi" /><button><DealerIcon name="menu" /></button></div>
      <div className="dealer-profile"><img src="/assets/dealer/logos/elite-motors-badge.svg" alt="Elite Motors" /><span><b>{dealerProfile.name}</b><small>{dealerProfile.role}</small></span><DealerIcon name="chevron" size={15} /></div>
      <nav>
        {dealerNav.map((item) => (
          <button key={item.id} className={active === item.id ? 'active' : ''} onClick={() => item.id !== 'settings' && setActive(item.id)}>
            <DealerIcon name={item.icon} />
            <span>{item.label}</span>
            {item.badge && <em>{item.badge}</em>}
          </button>
        ))}
      </nav>
      <section className="dealer-side-card"><DealerIcon name="academy" /><div><b>AutoDeFi Academy</b><span>Learn how to grow your dealership</span><button>View Courses</button></div></section>
      <section className="dealer-side-card"><DealerIcon name="support" /><div><b>Need Help?</b><span>Contact Support</span></div></section>
      <section className="dealer-user"><span>JD</span><div><b>{dealerProfile.user}</b><small>{dealerProfile.userRole}</small></div><DealerIcon name="more" size={18} /></section>
    </aside>
  );
}

export default function DealerPortal() {
  const [active, setActive] = useState('dashboard');
  const page = useMemo(() => dealerPages.find((item) => item.id === active) || dealerPages[0], [active]);

  return (
    <div className="dealer-lock">
      <DealerSidebar active={active} setActive={setActive} />
      <main className="dealer-main">
        <DealerTopbar page={page} />
        <div className="dealer-page-actions">
          {page.secondaryAction && <button className="dealer-secondary-button">{page.secondaryAction}</button>}
          {page.primaryAction && <button className="dealer-primary-button"><DealerIcon name="plus" size={17} />{page.primaryAction}</button>}
        </div>
        <section className="dealer-metrics-grid">{page.metrics.map((metric) => <MetricCard key={`${page.id}-${metric.label}`} metric={metric} />)}</section>
        <div className="dealer-layout-grid">
          <div className="dealer-content-stack">
            {page.pipeline && <Pipeline stages={page.pipeline} />}
            <DataTable page={page} />
            {page.id === 'dashboard' && <section className="dealer-protect"><DealerIcon name="shield" size={40} /><div><h2>Boost Your Sales with AutoDeFi Protect</h2><p>Add F&I products to your deals and increase your profit per vehicle.</p><button>Explore Products</button></div><img src="/assets/dealer/graphics/dealer-neon-vehicle.svg" alt="Neon vehicle graphic" /></section>}
          </div>
          <aside className="dealer-right-rail">{page.rail.map((card) => <RailCard key={`${page.id}-${card.title}`} card={card} />)}</aside>
        </div>
      </main>
    </div>
  );
}
