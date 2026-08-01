import { useMemo, useState } from 'react';
import type { CSSProperties } from 'react';
import { useActionCenter } from '../ActionCenter';
import { dealerNav, dealerPages, dealerProfile, type DealerMetric, type DealerPage, type DealerRailCard, type DealerPipelineStage } from '../../data/dealerPortalData';
import './dealer.css';
import './dealer-assets.css';

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

const customerAvatarIds = ['customer-michael-johnson', 'customer-sarah-williams', 'customer-david-brown', 'customer-emily-davis', 'customer-james-wilson', 'customer-ashley-miller'];
const referralAvatarIds = ['referral-mike-thompson', 'referral-sarah-johnson', 'referral-david-miller', 'referral-lisa-anderson'];

const socialSymbolMap: Record<string, string> = {
  Facebook: 'facebook',
  Instagram: 'instagram',
  'Google Ads': 'google-ads',
  Google: 'google-ads',
  YouTube: 'youtube',
  Email: 'email',
  Twitter: 'twitter',
  LinkedIn: 'linkedin',
  WhatsApp: 'whatsapp',
  SMS: 'sms',
  'QR Code': 'qr-code'
};

const lenderAssets: Record<string, string> = {
  'AutoDeFi Pool': '/assets/dealer/lenders/autodefi-pool.svg',
  'OpenRoad Financial': '/assets/dealer/lenders/openroad-financial.svg',
  'Prime Capital': '/assets/dealer/lenders/prime-capital.svg',
  'NorthBridge Bank': '/assets/dealer/lenders/northbridge-bank.svg',
  'First Community': '/assets/dealer/lenders/first-community.svg'
};

function vehicleAssetFor(value: string) {
  const key = value.toLowerCase();
  if (key.includes('mercedes')) return '/assets/dealer/vehicles/vehicle-mercedes-glc-300.svg';
  if (key.includes('tesla')) return '/assets/dealer/vehicles/vehicle-tesla-model-3.svg';
  if (key.includes('range rover')) return '/assets/dealer/vehicles/vehicle-range-rover-sport.svg';
  if (key.includes('bmw')) return '/assets/dealer/vehicles/vehicle-bmw-x5.svg';
  if (key.includes('ford') || key.includes('f-150')) return '/assets/dealer/vehicles/vehicle-ford-f150.svg';
  if (key.includes('audi')) return '/assets/dealer/vehicles/vehicle-audi-q7.svg';
  if (key.includes('jeep')) return '/assets/dealer/vehicles/vehicle-jeep-wrangler.svg';
  if (key.includes('lexus')) return '/assets/dealer/vehicles/vehicle-lexus-rx350.svg';
  if (key.includes('ram')) return '/assets/dealer/vehicles/vehicle-ram-1500.svg';
  if (key.includes('corvette')) return '/assets/dealer/vehicles/vehicle-corvette-stingray.svg';
  return null;
}

function campaignAssetFor(value: string) {
  const key = value.toLowerCase();
  if (key.includes('truck season')) return '/assets/dealer/campaigns/campaign-truck-season-sales-event.svg';
  if (key.includes('luxury suv')) return '/assets/dealer/campaigns/campaign-luxury-suv-showcase.svg';
  if (key.includes('financing made easy')) return '/assets/dealer/campaigns/campaign-financing-made-easy.svg';
  if (key.includes('email newsletter')) return '/assets/dealer/campaigns/campaign-email-newsletter-may.svg';
  if (key.includes('referral rewards')) return '/assets/dealer/campaigns/campaign-referral-rewards-program.svg';
  return null;
}

function DealerIcon({ name, size = 22 }: { name: string; size?: number }) {
  return (
    <svg className="dealer-icon" width={size} height={size} aria-hidden="true">
      <use href={`/assets/dealer/icons/dealer-icon-sprite.svg#${name}`} />
    </svg>
  );
}

function SocialIcon({ label }: { label: string }) {
  const symbol = socialSymbolMap[label];
  if (!symbol) return <DealerIcon name="plus" size={18} />;
  return (
    <svg className="dealer-social-icon" width="20" height="20" aria-hidden="true">
      <use href={`/assets/dealer/icons/social-icon-sprite.svg#${symbol}`} />
    </svg>
  );
}

function AvatarSymbol({ id }: { id: string }) {
  return (
    <svg className="dealer-avatar-symbol" aria-hidden="true">
      <use href={`/assets/dealer/avatars/avatar-placeholders.svg#${id}`} />
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
  const [timeframe, setTimeframe] = useState('This Month');
  const [pipelineView, setPipelineView] = useState('Pipeline View');
  const { notify } = useActionCenter();
  return (
    <section className="dealer-card dealer-pipeline-card">
      <div className="dealer-card-head">
        <h2>Pipeline</h2>
        <div className="dealer-mini-actions">
          <button type="button" onClick={() => { const next = timeframe === 'This Month' ? 'Last 30 Days' : 'This Month'; setTimeframe(next); notify(`Pipeline timeframe: ${next}`); }}>{timeframe}</button>
          <button type="button" onClick={() => { const next = pipelineView === 'Pipeline View' ? 'Stage Detail' : 'Pipeline View'; setPipelineView(next); notify(`${next} selected`); }}>{pipelineView}</button>
        </div>
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

function TableCell({ pageId, value, rowIndex, cellIndex }: { pageId: string; value: string; rowIndex: number; cellIndex: number }) {
  const lenderAsset = lenderAssets[value];
  if (lenderAsset) {
    return <span className="dealer-lender-cell"><img src={lenderAsset} alt="" /><span>{value}</span></span>;
  }

  if (cellIndex === 0 && (pageId === 'inventory' || pageId === 'auctions')) {
    const asset = vehicleAssetFor(value);
    if (asset) return <span className="dealer-asset-cell"><img src={asset} alt="" /><span>{value}</span></span>;
  }

  if (cellIndex === 2 && (pageId === 'deals' || pageId === 'financing') && vehicleAssetFor(value)) {
    return <span className="dealer-vehicle-inline"><img src={vehicleAssetFor(value) || ''} alt="" /><span>{value}</span></span>;
  }

  if (cellIndex === 0 && pageId === 'marketing-tools') {
    const asset = campaignAssetFor(value);
    if (asset) return <span className="dealer-asset-cell"><img src={asset} alt="" /><span>{value}</span></span>;
  }

  if (cellIndex === 0 && pageId === 'customers') {
    return <span className="dealer-person-cell"><AvatarSymbol id={customerAvatarIds[rowIndex % customerAvatarIds.length]} /><span>{value}</span></span>;
  }

  if (cellIndex === 0 && pageId === 'referrals') {
    return <span className="dealer-person-cell"><AvatarSymbol id={referralAvatarIds[rowIndex % referralAvatarIds.length]} /><span>{value}</span></span>;
  }

  return looksLikeStatus(value) ? <StatusBadge value={value} /> : <span>{value}</span>;
}

function DataTable({ page }: { page: DealerPage }) {
  const [activeTab, setActiveTab] = useState(page.table.tabs[0]);
  const [filtersVisible, setFiltersVisible] = useState(true);
  const [view, setView] = useState<'grid' | 'list'>('list');
  const [query, setQuery] = useState('');
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const { notify, openAction } = useActionCenter();
  const visibleRows = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return page.table.rows;
    return page.table.rows.filter((row) => row.some((cell) => cell.toLowerCase().includes(normalized)));
  }, [page.table.rows, query]);

  const toggleFilter = (filter: string) => {
    setActiveFilters((current) => current.includes(filter) ? current.filter((item) => item !== filter) : [...current, filter]);
    notify(`${filter} filter ${activeFilters.includes(filter) ? 'removed' : 'selected'}`);
  };

  const openRowAction = (action: string, row: readonly string[]) => {
    openAction(`${action}: ${row[0]}`, `${action} controls are active for this ${page.label.toLowerCase()} record.`, row.map((value, index) => `${page.table.columns[index] || `Field ${index + 1}`}: ${value}`));
  };

  return (
    <section className="dealer-card dealer-table-card">
      <div className="dealer-tabs">
        {page.table.tabs.map((tab) => <button type="button" key={tab} className={activeTab === tab ? 'active' : ''} onClick={() => { setActiveTab(tab); notify(`${tab} tab selected`); }}>{tab}</button>)}
        <span className="dealer-tab-spacer" />
        <button type="button" className="dealer-filter-button" aria-expanded={filtersVisible} onClick={() => setFiltersVisible((visible) => !visible)}><DealerIcon name="filter" size={16} /> Filters</button>
        <button type="button" className={`dealer-filter-button${view === 'grid' ? ' active' : ''}`} aria-label="Grid view" aria-pressed={view === 'grid'} onClick={() => { setView('grid'); notify('Grid view selected'); }}><DealerIcon name="grid" size={16} /></button>
        <button type="button" className={`dealer-filter-button${view === 'list' ? ' active' : ''}`} aria-label="List view" aria-pressed={view === 'list'} onClick={() => { setView('list'); notify('List view selected'); }}><DealerIcon name="list" size={16} /></button>
      </div>
      {filtersVisible ? <div className="dealer-filters">
        <label><DealerIcon name="search" size={16} /><input value={query} onChange={(event) => { setQuery(event.target.value); setCurrentPage(1); }} placeholder={`Search ${page.label.toLowerCase()}...`} /></label>
        {page.table.filters.map((filter) => <button type="button" key={filter} className={activeFilters.includes(filter) ? 'active' : ''} aria-pressed={activeFilters.includes(filter)} onClick={() => toggleFilter(filter)}>{filter}</button>)}
        <button type="button" onClick={() => { setQuery(''); setActiveFilters([]); setCurrentPage(1); notify('Table filters cleared'); }}>Clear Filters</button>
      </div> : null}
      <div className={`dealer-table-wrap dealer-table-${view}`}>
        <table>
          <thead>
            <tr>{page.table.columns.map((column) => <th key={column}>{column}</th>)}<th>Actions</th></tr>
          </thead>
          <tbody>
            {visibleRows.map((row, rowIndex) => (
              <tr key={`${page.id}-${rowIndex}`}>
                {row.map((cell, index) => <td key={`${cell}-${index}`}><TableCell pageId={page.id} value={cell} rowIndex={rowIndex} cellIndex={index} /></td>)}
                <td className="dealer-row-actions">
                  <button type="button" aria-label={`View ${row[0]}`} onClick={() => openRowAction('View', row)}><DealerIcon name="eye" size={16} /></button>
                  <button type="button" aria-label={`Edit ${row[0]}`} onClick={() => openRowAction('Edit', row)}><DealerIcon name="edit" size={16} /></button>
                  <button type="button" aria-label={`More actions for ${row[0]}`} onClick={() => openRowAction('More actions', row)}><DealerIcon name="more" size={16} /></button>
                </td>
              </tr>
            ))}
            {!visibleRows.length ? <tr><td colSpan={page.table.columns.length + 1}>No matching records. Clear the search to restore the table.</td></tr> : null}
          </tbody>
        </table>
      </div>
      <footer className="dealer-pagination"><span>{visibleRows.length === page.table.rows.length ? page.table.pagination : `${visibleRows.length} matching records`} · Page {currentPage}</span><div>{[1, 2, 3].map((pageNumber) => <button type="button" key={pageNumber} className={currentPage === pageNumber ? 'active' : ''} onClick={() => { setCurrentPage(pageNumber); notify(`Page ${pageNumber} selected`); }}>{pageNumber}</button>)}<button type="button" aria-label="Next page" onClick={() => { const next = currentPage === 3 ? 1 : currentPage + 1; setCurrentPage(next); notify(`Page ${next} selected`); }}>›</button></div></footer>
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
  const isShareCard = card.title.toLowerCase().includes('share');
  const { notify, openAction } = useActionCenter();
  return (
    <section className="dealer-card dealer-rail-card">
      <div className="dealer-card-head"><h3>{card.title}</h3><button type="button" onClick={() => openAction(card.title, card.subtitle || `${card.title} details`, card.items)}>View All</button></div>
      {card.kind === 'donut' && <div className="dealer-donut"><div><strong>{card.value}</strong><span>{card.subtitle || card.title}</span></div></div>}
      {card.kind === 'chart' && <><strong className="dealer-rail-value">{card.value}</strong>{card.subtitle && <em>{card.subtitle}</em>}<MiniChart /></>}
      {card.kind === 'funnel' && <Funnel items={card.items} />}
      {card.kind === 'score' && <div className="dealer-score"><strong>{card.value}</strong>{card.subtitle && <span>{card.subtitle}</span>}</div>}
      {card.kind === 'copy' && <div className="dealer-copy-card"><code>{card.value}</code>{card.items.map((item) => <code key={item}>{item}</code>)}</div>}
      {card.kind === 'actions'
        ? <div className="dealer-action-grid">{card.items.map((item) => <button type="button" key={item} onClick={() => isShareCard ? notify(`${item} sharing selected`) : openAction(item, `${item} is ready in the Dealer Portal.`, [`Source: ${card.title}`, 'Submission requires final dealer confirmation.'])}>{isShareCard ? <SocialIcon label={item} /> : <DealerIcon name="plus" size={18} />}{item}</button>)}</div>
        : <ul className="dealer-list">{card.items.map((item) => <li key={item}><span>{item}</span></li>)}</ul>}
    </section>
  );
}

function DealerTopbar({ page }: { page: DealerPage }) {
  const [search, setSearch] = useState('');
  const { openAction } = useActionCenter();
  return (
    <header className="dealer-topbar">
      <div>
        <h1>{page.label}</h1>
        <p>Dealer Portal <span>/</span> {page.label}</p>
      </div>
      <label className="dealer-search"><DealerIcon name="search" size={18} /><input value={search} onChange={(event) => setSearch(event.target.value)} onKeyDown={(event) => { if (event.key === 'Enter' && search.trim()) openAction(`Search ${page.label}`, `Searching for “${search.trim()}” across ${page.label.toLowerCase()}.`, ['The search field is connected.', 'Live cross-record results require the Dealer API index.']); }} placeholder={page.searchPlaceholder} /><kbd>/</kbd></label>
      <div className="dealer-top-actions">
        <button type="button" className="dealer-icon-button" aria-label="Open dealer notifications" onClick={() => openAction('Dealer notifications', 'Eight Dealer Portal notifications are ready.', ['3 funding updates', '2 inventory alerts', '2 customer follow-ups', '1 compliance notice'])}><DealerIcon name="bell" /><sup>8</sup></button>
        <button type="button" className="dealer-icon-button" aria-label="Open dealer messages" onClick={() => openAction('Dealer messages', 'Three unread conversations are available.', ['Customer financing inquiry', 'Lender condition update', 'AutoDeFi support response'])}><DealerIcon name="message" /><sup>3</sup></button>
        <button type="button" className="dealer-account" onClick={() => openAction(dealerProfile.name, 'Dealer account controls are connected.', [`Role: ${dealerProfile.role}`, `User: ${dealerProfile.user}`, `Access: ${dealerProfile.userRole}`])}><img src="/assets/dealer/logos/elite-motors-badge.svg" alt="Elite Motors" /><span><b>{dealerProfile.name}</b><small>{dealerProfile.role}</small></span><DealerIcon name="chevron" size={16} /></button>
      </div>
    </header>
  );
}

function DealerSidebar({ active, setActive, collapsed, onToggle, onExit }: { active: string; setActive: (id: string) => void; collapsed: boolean; onToggle: () => void; onExit: () => void }) {
  const { openAction } = useActionCenter();
  return (
    <aside className="dealer-sidebar">
      <div className="dealer-brand"><button type="button" className="dealer-home-button" onClick={onExit} aria-label="Return to Dashboard Hub"><img src="/assets/dealer/logos/autodefi-logo-primary.svg" alt="AutoDeFi" /></button><button type="button" onClick={onToggle} aria-label={collapsed ? 'Expand dealer menu' : 'Collapse dealer menu'} aria-expanded={!collapsed}><DealerIcon name="menu" /></button></div>
      <div className="dealer-profile"><img src="/assets/dealer/logos/elite-motors-badge.svg" alt="Elite Motors" /><span><b>{dealerProfile.name}</b><small>{dealerProfile.role}</small></span><DealerIcon name="chevron" size={15} /></div>
      <nav>
        {dealerNav.map((item) => (
          <button type="button" key={item.id} className={active === item.id ? 'active' : ''} onClick={() => item.id === 'settings' ? openAction('Dealer Portal settings', 'Settings controls are connected.', ['Dealership profile', 'Team access and permissions', 'Notification preferences', 'Lender and marketplace integrations']) : setActive(item.id)}>
            <DealerIcon name={item.icon} />
            <span>{item.label}</span>
            {item.badge && <em>{item.badge}</em>}
          </button>
        ))}
      </nav>
      <section className="dealer-side-card"><DealerIcon name="academy" /><div><b>AutoDeFi Academy</b><span>Learn how to grow your dealership</span><button type="button" onClick={() => openAction('AutoDeFi Academy', 'Dealer training and onboarding controls are connected.', ['Funding workflow', 'Inventory and marketplace', 'F&I products', 'Compliance and documentation'])}>View Courses</button></div></section>
      <section className="dealer-side-card"><DealerIcon name="support" /><div><b>Need Help?</b><span>Dealer support is available</span><button type="button" onClick={() => openAction('Dealer support', 'Support intake is ready for the live help-desk endpoint.', ['Funding support', 'Technical support', 'Compliance questions'])}>Contact Support</button></div></section>
      <section className="dealer-user"><span>JD</span><div><b>{dealerProfile.user}</b><small>{dealerProfile.userRole}</small></div><button type="button" className="dealer-user-more" aria-label="Open user menu" onClick={() => openAction(dealerProfile.user, 'User account and session controls are connected.', [`Role: ${dealerProfile.userRole}`, 'Profile and team permissions', 'Sign-out and security settings'])}><DealerIcon name="more" size={18} /></button></section>
    </aside>
  );
}

export default function DealerPortal({ onExit }: { onExit: () => void }) {
  const [active, setActive] = useState('dashboard');
  const [collapsed, setCollapsed] = useState(false);
  const { openAction } = useActionCenter();
  const page = useMemo(() => dealerPages.find((item) => item.id === active) || dealerPages[0], [active]);

  return (
    <div className={`dealer-lock${collapsed ? ' dealer-sidebar-collapsed' : ''}`}>
      <DealerSidebar active={active} setActive={setActive} collapsed={collapsed} onToggle={() => setCollapsed((value) => !value)} onExit={onExit} />
      <main className="dealer-main">
        <DealerTopbar page={page} />
        <div className="dealer-page-actions">
          {page.secondaryAction && <button type="button" className="dealer-secondary-button" onClick={() => openAction(page.secondaryAction || 'Dealer action', `${page.secondaryAction} is ready for ${page.label}.`, ['Frontend flow connected', 'Live submission requires the Dealer API'])}>{page.secondaryAction}</button>}
          {page.primaryAction && <button type="button" className="dealer-primary-button" onClick={() => openAction(page.primaryAction || 'Dealer action', `${page.primaryAction} is ready for ${page.label}.`, ['Required fields and confirmation will be supplied by the Dealer API', 'No live record has been changed'])}><DealerIcon name="plus" size={17} />{page.primaryAction}</button>}
        </div>
        <section className="dealer-metrics-grid">{page.metrics.map((metric) => <MetricCard key={`${page.id}-${metric.label}`} metric={metric} />)}</section>
        <div className="dealer-layout-grid">
          <div className="dealer-content-stack">
            {page.pipeline && <Pipeline stages={page.pipeline} />}
            <DataTable key={page.id} page={page} />
            {page.id === 'dashboard' && <section className="dealer-protect"><DealerIcon name="shield" size={40} /><div><h2>Boost Your Sales with AutoDeFi Protect</h2><p>Add F&I products to your deals and increase your profit per vehicle.</p><button type="button" onClick={() => setActive('financing')}>Explore Products</button></div><img src="/assets/dealer/graphics/dealer-neon-vehicle.svg" alt="Neon vehicle graphic" /></section>}
          </div>
          <aside className="dealer-right-rail">{page.rail.map((card) => <RailCard key={`${page.id}-${card.title}`} card={card} />)}</aside>
        </div>
      </main>
    </div>
  );
}
