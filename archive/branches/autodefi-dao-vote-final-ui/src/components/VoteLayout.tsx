import type { ReactNode } from 'react';
import { navItems, sideStats } from '../data/autodefiData';
import { Icon } from './Icon';
import { MetricCard } from './MetricCard';
import { Button } from './Button';

type VoteLayoutProps = {
  activeView: string;
  onNavigate: (id: string) => void;
  children: ReactNode;
};

const impactRows = [
  ['▣', 'Lending Pool Capacity', '$8.20M', '+15.2%'],
  ['▤', 'Total Loans Enabled', '+1,240', '+18.7%'],
  ['♧', 'Annual Revenue (Est.)', '$432,150', '+12.4%'],
  ['◴', 'Utilization Rate', '78.3%', '+6.1%'],
  ['◇', 'Avg. APR to Stakers', '11.6%', '+0.8%'],
  ['◎', 'New Active Loans (Est.)', '+1,120', '+17.9%']
];

function VoteGovernanceRail() {
  return (
    <>
      <section className="rail-card vote-rail-power">
        <div className="rail-title"><h3>Your Voting Power ⓘ</h3></div>
        <div className="vote-arc" />
        <strong>12,450.25 <small>ADF</small></strong>
        <p>12.45% of total voting power</p>
        <div className="position-grid"><div><span>Total DAO Voting Power</span><strong>100,000,000 ADF</strong></div></div>
        <Button className="full">Increase Voting Power</Button>
      </section>

      <section className="rail-card">
        <div className="rail-title"><h3>Proposal Impact Simulation ⓘ</h3></div>
        <p className="muted">Simulate how this proposal will impact key metrics.</p>
        <div className="impact-list">
          {impactRows.map(([icon, label, value, delta]) => (
            <div key={label}><i>{icon}</i><span>{label}</span><b>{value}</b><strong className="good">{delta}</strong></div>
          ))}
        </div>
        <Button variant="ghost" className="full">View Full Analysis</Button>
      </section>

      <section className="rail-card">
        <div className="rail-title"><h3>Quorum & Threshold ⓘ</h3></div>
        <div className="threshold-row">
          <label><span>Quorum (15M ADF)</span><strong className="good">106.0%</strong></label>
          <div className="meter"><i style={{ width: '100%' }} /></div>
          <small className="muted">15,900,500 / 15,000,000 ADF</small>
        </div>
        <div className="threshold-row orange">
          <label><span>Approval Threshold (50% + 1)</span><strong className="purple">78.3%</strong></label>
          <div className="meter"><i style={{ width: '78.3%' }} /></div>
          <small className="muted">78.3% / 50%</small>
        </div>
        <div className="status-callout good">✓ This proposal will pass if current trends continue.</div>
      </section>
    </>
  );
}

export function VoteLayout({ activeView, onNavigate, children }: VoteLayoutProps) {
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
            <h1>Vote</h1>
            <p>Shape the future of AutoDeFi. Your vote. Our future.</p>
          </div>
          <div className="wallet-strip">
            <span className="adf-chip"><Icon name="token" size={24} /> ADF&nbsp; <b>$0.8724</b> <em>+ 4.32%</em></span>
            <button className="bell" type="button">◌<sup>12</sup></button>
            <button className="wallet-button" type="button"><span />0x7a8B...EF23<small>Connected</small></button>
          </div>
        </header>

        <div className="content-grid">
          <div className="content-main">{children}</div>
          <aside className="right-rail"><VoteGovernanceRail /></aside>
        </div>
      </main>
    </div>
  );
}
