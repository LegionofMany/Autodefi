import React, { useEffect, useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const API_BASE = (import.meta.env.VITE_API_BASE_URL || '').replace(/\/$/, '');
const MARKETPLACE_PATH = import.meta.env.VITE_MARKETPLACE_PATH || '/api/liquidation-marketplace';

const navigation = [
  { section: 'Marketplace', items: [
    ['dashboard', 'Dashboard'], ['live-auctions', 'Live Auctions'], ['upcoming-auctions', 'Upcoming Auctions'], ['buy-now', 'Buy Now'], ['my-bids', 'My Bids'], ['watchlist', 'Watchlist'], ['won-auctions', 'Won Auctions'], ['inventory-nfts', "Inventory NFTs"], ['settlements', 'Settlements']
  ]},
  { section: 'Analytics', items: [['auction-analytics', 'Auction Analytics'], ['recovery-stats', 'Recovery Stats'], ['market-trends', 'Market Trends']]},
  { section: 'Network', items: [['dealer-access', 'Dealer Access'], ['retail-access', 'Retail Access'], ['partners', 'Partners']]},
  { section: 'My Account', items: [['wallet', 'Wallet'], ['orders', 'Orders'], ['profile', 'Profile'], ['notifications', 'Notifications'], ['settings', 'Settings']]}
];

const fallbackCopy = {
  dashboard: ['Dashboard', 'Transparent auctions, real assets, smart-contract powered recovery.'],
  'live-auctions': ['Live Auctions', 'Bid on active recovery assets with real-time status, settlement, and escrow visibility.'],
  'upcoming-auctions': ['Upcoming Auctions', 'Preview scheduled auction assets, set reminders, and prepare bidding capital.'],
  'buy-now': ['Buy Now', 'Instant-purchase liquidation listings with clear title and settlement status.'],
  'my-bids': ['My Bids', 'Track active bids, outbid alerts, highest bids, and withdrawn bids.'],
  watchlist: ['Watchlist', 'Monitor saved assets, price drops, reserve status, and upcoming auction alerts.'],
  'won-auctions': ['Won Auctions', 'Complete payment, settlement, pickup, delivery, NFT certificate, and invoice workflows.'],
  'inventory-nfts': ['Inventory NFTs', 'View tokenized vehicle certificates, ownership proofs, and transfer status.'],
  settlements: ['Settlements', 'Track auction settlement status, fees, payouts, reports, and transaction hashes.'],
  'auction-analytics': ['Auction Analytics', 'Analyze auction performance, bidder activity, sell-through, and value recovery.'],
  'recovery-stats': ['Recovery Stats', 'Measure recovery rate, debt recovered, net proceeds, surplus, and days to recovery.'],
  'market-trends': ['Market Trends', 'Explore vehicle segment trends, discounts, locations, bidder demand, and sales velocity.'],
  'dealer-access': ['Dealer Access', 'Manage dealer verification, permissions, documents, API access, and tier benefits.'],
  'retail-access': ['Retail Access', 'Manage retail verification, bidding limits, orders, documents, and payment methods.'],
  partners: ['Partners', 'Connect auction, finance, compliance, transport, data, and technology partners.'],
  wallet: ['Wallet', 'Manage ADF, USDC, escrow balances, deposits, withdrawals, transfers, and wallet security.'],
  orders: ['Orders', 'Track purchase orders, active orders, pending payments, shipment, invoices, and cancelled orders.'],
  profile: ['Profile', 'Manage identity, preferences, security, connected accounts, and marketplace statistics.'],
  notifications: ['Notifications', 'Stay updated on auctions, orders, security, payments, watchlist alerts, and system messages.'],
  settings: ['Settings', 'Manage account settings, preferences, integrations, billing, API keys, and security.']
};

async function request(path, options = {}) {
  const response = await fetch(`${API_BASE}${path}`, {
    credentials: 'include',
    headers: { Accept: 'application/json', 'Content-Type': 'application/json', ...(options.headers || {}) },
    ...options
  });
  const type = response.headers.get('content-type') || '';
  const body = type.includes('application/json') ? await response.json() : await response.text();
  if (!response.ok) throw new Error(typeof body === 'object' && body?.message ? body.message : response.statusText);
  return body;
}

function useBackend(path, deps) {
  const [state, setState] = useState({ loading: true, error: '', data: null });
  useEffect(() => {
    let active = true;
    setState({ loading: true, error: '', data: null });
    request(path)
      .then((data) => active && setState({ loading: false, error: '', data }))
      .catch((error) => active && setState({ loading: false, error: error.message || String(error), data: null }));
    return () => { active = false; };
  }, deps);
  return state;
}

function App() {
  const [pageKey, setPageKey] = useState('dashboard');
  const [query, setQuery] = useState('');
  const bootstrap = useBackend(`${MARKETPLACE_PATH}/bootstrap`, []);
  const page = useBackend(`${MARKETPLACE_PATH}/${pageKey}${query ? `?q=${encodeURIComponent(query)}` : ''}`, [pageKey, query]);
  const copy = fallbackCopy[pageKey] || ['AutoDeFi Marketplace', 'Liquidation Auction Marketplace'];
  const bootstrapData = bootstrap.data || {};

  return (
    <div className="app-shell">
      <Sidebar pageKey={pageKey} setPageKey={setPageKey} bootstrap={bootstrapData} />
      <section className="main-area">
        <Topbar query={query} setQuery={setQuery} bootstrap={bootstrapData} />
        <PageHeader title={page.data?.title || copy[0]} subtitle={page.data?.subtitle || copy[1]} />
        {page.loading && <LoadingState />}
        {page.error && <ErrorState message={page.error} />}
        {!page.loading && !page.error && <MarketplacePage pageKey={pageKey} payload={page.data} />}
      </section>
    </div>
  );
}

function Sidebar({ pageKey, setPageKey, bootstrap }) {
  const member = bootstrap.member || {};
  return (
    <aside className="sidebar">
      <div className="brand"><div className="logo-mark">AD</div><div><strong>AUTO<span>DEFI</span> DAO</strong><small>Liquidation Marketplace</small></div></div>
      <div className="member-card">
        <div className="avatar">{(member.name || 'AD').slice(0, 2).toUpperCase()}</div>
        <div><strong>{member.wallet || 'Wallet not connected'}</strong><small>{member.role || 'DAO Member'}</small><small className="verified">{member.verified ? 'Verified Member' : 'Verification Required'}</small></div>
      </div>
      {navigation.map((group) => (
        <nav key={group.section} className="nav-section">
          <p>{group.section}</p>
          {group.items.map(([key, label]) => <button key={key} className={pageKey === key ? 'active' : ''} onClick={() => setPageKey(key)}>{label}</button>)}
        </nav>
      ))}
      <div className="ecosystem-card"><strong>Recovered value strengthens the ecosystem</strong><span>Lender Pools → Insurance Pool → Treasury</span></div>
    </aside>
  );
}

function Topbar({ query, setQuery, bootstrap }) {
  const token = bootstrap.token || {};
  return (
    <header className="topbar">
      <div className="title-block"><h1>Liquidation Auction Marketplace</h1><p>Transparent auctions. Real assets. Real value. Powered by smart contracts.</p></div>
      <div className="top-actions">
        <label className="search"><span>⌕</span><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search vehicles, VIN, make, model..." /></label>
        <button className="ghost">Filters</button>
        <div className="token-pill">{token.symbol || 'ADF'} <b>{token.price || '--'}</b> <em>{token.change || ''}</em></div>
        <button className="wallet-btn">{bootstrap.walletConnected ? 'Wallet Connected' : 'Connect Wallet'}</button>
      </div>
    </header>
  );
}

function PageHeader({ title, subtitle }) {
  return <div className="page-header"><div><h2>{title}</h2><p>{subtitle}</p></div><div className="header-actions"><button>Export</button><button>Refresh</button></div></div>;
}

function MarketplacePage({ payload }) {
  if (!payload) return <EmptyState title="No backend data returned" message="Connect VITE_API_BASE_URL to the completed backend endpoint for this page." />;
  const hasContent = [payload.metrics, payload.cards, payload.charts, payload.table?.rows, payload.panels].some((x) => Array.isArray(x) && x.length);
  if (!hasContent) return <EmptyState title={payload.emptyState?.title || 'No records returned'} message={payload.emptyState?.message || 'The backend responded successfully but returned no records for this page.'} />;
  return (
    <>
      <MetricStrip metrics={payload.metrics || []} />
      <Toolbar tabs={payload.tabs || []} filters={payload.filters || []} />
      <div className="market-layout">
        <main>
          <VehicleGrid cards={payload.cards || []} />
          <ChartGrid charts={payload.charts || []} />
          <DataTable table={payload.table} />
        </main>
        <PanelRail panels={payload.panels || []} />
      </div>
    </>
  );
}

function MetricStrip({ metrics }) {
  if (!metrics.length) return null;
  return <section className="metrics-grid">{metrics.map((m, i) => <article className={`metric ${m.tone || ''}`} key={`${m.label}-${i}`}><span>{m.label}</span><strong>{m.value}</strong>{m.delta && <small>{m.delta}</small>}</article>)}</section>;
}

function Toolbar({ tabs, filters }) {
  if (!tabs.length && !filters.length) return null;
  return <section className="toolbar"><div className="tabs">{tabs.map((tab, i) => <button className={tab.active ? 'active' : ''} key={`${tab.label}-${i}`}>{tab.label}{Number.isFinite(tab.count) ? <b>{tab.count}</b> : null}</button>)}</div><div className="filters">{filters.map((filter, i) => <select key={`${filter.label}-${i}`} defaultValue=""><option value="">{filter.label}</option>{(filter.options || []).map((option) => <option key={option}>{option}</option>)}</select>)}</div></section>;
}

function VehicleGrid({ cards }) {
  if (!cards.length) return null;
  return <section className="vehicle-grid">{cards.map((card) => <VehicleCard card={card} key={card.id || card.title} />)}</section>;
}

function VehicleCard({ card }) {
  async function run(action) {
    if (!action?.endpoint) return;
    await request(action.endpoint, { method: action.method || 'POST', body: JSON.stringify({ assetId: card.id }) });
    window.dispatchEvent(new Event('autodefi:reload'));
  }
  return (
    <article className="vehicle-card">
      <div className="image-wrap">{card.imageUrl ? <img src={card.imageUrl} alt={card.title} /> : <div className="image-placeholder">AutoDeFi Asset</div>}{card.status && <span className="live-tag">{card.status}</span>}</div>
      <div className="card-body"><h3>{card.title}</h3>{card.subtitle && <p>{card.subtitle}</p>}<small>{card.vin}</small><div className="badges">{(card.badges || []).map((b) => <span key={b}>{b}</span>)}</div><div className="card-stats">{(card.stats || []).map((s) => <div key={s.label}><small>{s.label}</small><strong>{s.value}</strong></div>)}</div><button className="primary" onClick={() => run(card.primaryAction)}>{card.primaryAction?.label || 'View Details'}</button></div>
    </article>
  );
}

function ChartGrid({ charts }) {
  if (!charts.length) return null;
  return <section className="chart-grid">{charts.map((chart, i) => <ChartPanel chart={chart} key={`${chart.title}-${i}`} />)}</section>;
}

function ChartPanel({ chart }) {
  const points = chart.series?.[0]?.points || [];
  const max = Math.max(1, ...points.map(Number));
  if (chart.type === 'donut') return <article className="panel chart-panel"><h3>{chart.title}</h3><div className="donut"><div><strong>{chart.value || ''}</strong><small>{chart.label || ''}</small></div></div><Legend items={chart.legend || []} /></article>;
  return <article className="panel chart-panel"><h3>{chart.title}</h3><div className="bars">{points.map((value, i) => <i key={i} style={{ height: `${Math.max(8, (Number(value) / max) * 100)}%` }} title={`${value}`} />)}</div><Legend items={chart.legend || chart.series || []} /></article>;
}

function Legend({ items }) {
  if (!items.length) return null;
  return <div className="legend">{items.map((item, i) => <span key={`${item.label}-${i}`}>{item.label || item.name} {item.value || ''}</span>)}</div>;
}

function DataTable({ table }) {
  if (!table?.columns?.length || !table?.rows?.length) return null;
  return <section className="panel table-panel"><div className="panel-head"><h3>{table.title || 'Records'}</h3><button>View All</button></div><div className="table-scroll"><table><thead><tr>{table.columns.map((col) => <th key={col}>{col}</th>)}</tr></thead><tbody>{table.rows.map((row, i) => <tr key={row.id || i}>{table.columns.map((col) => <td key={col}>{formatCell(row[col])}</td>)}</tr>)}</tbody></table></div></section>;
}

function formatCell(value) {
  if (value && typeof value === 'object' && value.label) return <span className={`status ${value.tone || ''}`}>{value.label}</span>;
  return value ?? '—';
}

function PanelRail({ panels }) {
  if (!panels.length) return null;
  return <aside className="panel-rail">{panels.map((panel, i) => <section className="panel" key={`${panel.title}-${i}`}><div className="panel-head"><h3>{panel.title}</h3>{panel.action && <button>{panel.action}</button>}</div>{panel.imageUrl && <img className="spotlight-img" src={panel.imageUrl} alt={panel.title} />}<div className="panel-items">{(panel.items || []).map((item) => <div key={item.label}><span>{item.label}</span><strong>{item.value}</strong></div>)}</div>{panel.body && <p>{panel.body}</p>}</section>)}</aside>;
}

function LoadingState() { return <div className="state-card"><div className="spinner" /><h3>Loading live marketplace data</h3><p>Reading from the AutoDeFi backend.</p></div>; }
function ErrorState({ message }) { return <div className="state-card error"><h3>Backend connection required</h3><p>{message}</p><small>Set VITE_API_BASE_URL and confirm the marketplace route contract.</small></div>; }
function EmptyState({ title, message }) { return <div className="state-card"><h3>{title}</h3><p>{message}</p></div>; }

createRoot(document.getElementById('root')).render(<App />);
