import type { ReactNode } from 'react';
import { navItems, sideStats, topMetrics, portfolioAllocation, recentActivity } from '../data/autodefiData';
import { Icon } from './Icon';
import { MetricCard } from './MetricCard';
import { DonutChart } from './SvgCharts';
import { Button } from './Button';

type ShellProps = {
  activeView: string;
  onNavigate: (id: string) => void;
  children: ReactNode;
};

const viewTitle = (activeView: string) => {
  if (activeView === 'lender-pool') return 'Lender Pool';
  if (activeView === 'ai-underwriter-v2') return 'AI Underwriter V2';
  return navItems.find((item) => item.id === activeView)?.label || 'AutoDeFi';
};

export function Shell({ activeView, onNavigate, children }: ShellProps) {
  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand-row">
          <img src="/assets/svg/logo.svg" alt="AutoDeFi" />
          <button className="menu-button" type="button" aria-label="Menu">☰</button>
        </div>

        <div className="supply-card">
          <div className="supply-head"><Icon name="wallet" size={36} /><span>My Supply Power</span></div>
          <strong>12,450.25 ADF</strong>
          <small>Est. Monthly Earnings</small>
          <b>$1,245.80 <em>+ 11.45%</em></b>
          <svg viewBox="0 0 260 48" role="img" aria-label="Supply power sparkline">
            <polyline points="0,42 22,40 44,41 66,36 88,38 110,30 132,32 154,23 176,28 198,15 220,20 244,8 260,13" fill="none" stroke="#9b5cff" strokeWidth="3" />
          </svg>
        </div>

        <nav className="side-nav" aria-label="AutoDeFi navigation">
          <p>DAO</p>
          <button type="button" className={activeView === 'ai-underwriter-v2' ? 'active' : ''} onClick={() => onNavigate('ai-underwriter-v2')}>
            <Icon name="risk" size={22} />
            <span>AI Underwriter V2</span>
            <em>New</em>
          </button>
          {navItems.filter((item) => item.group === 'dao').map((item) => (
            <button key={item.id} type="button" className={activeView === item.id ? 'active' : ''} onClick={() => onNavigate(item.id)}>
              <Icon name={item.icon} size={22} />
              <span>{item.label}</span>
              {item.badge && <em>{item.badge}</em>}
            </button>
          ))}
          <p>Portals</p>
          {navItems.filter((item) => item.group === 'portal').map((item) => (
            <button key={item.id} type="button" className={activeView === item.id ? 'active' : ''} onClick={() => onNavigate(item.id)}>
              <Icon name={item.icon} size={22} />
              <span>{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="left-stat-stack">
          {sideStats.map((metric) => <MetricCard key={metric.label} metric={metric} compact />)}
        </div>
      </aside>

      <main className="main-panel">
        <header className="topbar">
          <div>
            <h1>{viewTitle(activeView)}</h1>
            <p>Provide liquidity, earn yield, and power auto loan origination.</p>
          </div>
          <div className="wallet-strip">
            <span className="adf-chip"><Icon name="token" size={24} /> ADF&nbsp; <b>$0.8724</b> <em>+ 4.32%</em></span>
            <button className="bell" type="button">◌<sup>12</sup></button>
            <button className="wallet-button" type="button"><span />0x7a8B...EF23<small>Connected</small></button>
          </div>
        </header>

        <section className="top-metrics">
          {topMetrics.map((metric) => <MetricCard key={metric.label} metric={metric} />)}
        </section>

        <div className="content-grid">
          <div className="content-main">{children}</div>
          <aside className="right-rail">
            <section className="rail-card">
              <div className="rail-title"><h3>Your Position</h3><a>View Portfolio →</a></div>
              <div className="position-grid">
                <div><span>Total Supplied</span><strong>$6,200.00</strong></div>
                <div><span>Total Earned (30D)</span><strong>$105.94</strong></div>
                <div><span>Average APY</span><strong className="good">11.87%</strong></div>
                <div><span>Health Factor</span><strong className="good">2.41x</strong></div>
              </div>
              <div className="portfolio-row">
                <DonutChart data={portfolioAllocation} size={174} />
                <div className="legend-list">
                  {portfolioAllocation.map((item) => <span key={item.label}><i className={`dot tone-bg-${item.tone}`} />{item.label}<b>{item.value}%</b></span>)}
                </div>
              </div>
              <Button className="full">Manage Portfolio</Button>
            </section>

            <section className="rail-card">
              <div className="rail-title"><h3>Pool Health ⓘ</h3></div>
              <div className="health-head"><span>Overall Status</span><strong>Healthy</strong></div>
              <div className="health-bar"><i style={{ width: '92%' }} /></div>
              <dl className="detail-list">
                <div><dt>Health Factor</dt><dd>2.41x</dd></div>
                <div><dt>Liquidation Threshold</dt><dd>1.10x</dd></div>
                <div><dt>LTV (Avg.)</dt><dd>42.6%</dd></div>
                <div><dt>Insurance Coverage</dt><dd>92.1%</dd></div>
              </dl>
              <a className="card-link">View Risk Dashboard →</a>
            </section>

            <section className="rail-card">
              <div className="rail-title"><h3>Recent Pool Activity</h3><a>View All →</a></div>
              <div className="activity-list">
                {recentActivity.map((item) => (
                  <div className="activity-item" key={item.title + item.time}>
                    <Icon name={item.icon} size={28} />
                    <div><strong>{item.title}</strong><span>{item.detail}</span></div>
                    <small>{item.time}</small>
                  </div>
                ))}
              </div>
            </section>
          </aside>
        </div>
      </main>
    </div>
  );
}
