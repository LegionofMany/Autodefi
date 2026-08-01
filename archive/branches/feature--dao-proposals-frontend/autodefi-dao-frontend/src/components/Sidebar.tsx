import { brandAssets, icons } from '../assets';
import { Icon } from './Icon';
import type { DaoMetrics } from '../types/governance';
import { formatUsd } from '../utils/format';

const navItems = [
  ['Dashboard', icons.dashboard],
  ['Proposals', icons.proposals],
  ['Vote', icons.vote],
  ['Treasury', icons.treasury],
  ['Staking', icons.staking],
  ['Lender Pool', icons.lenderPool],
  ['Risk Management', icons.risk],
  ['Revenue Sharing', icons.revenue],
  ['Token Utility', icons.token],
  ['Governance', icons.governance, 'New'],
  ['Audit & Security', icons.audit],
  ['Analytics', icons.analytics],
] as const;

interface SidebarProps {
  metrics: DaoMetrics;
}

export function Sidebar({ metrics }: SidebarProps) {
  return (
    <aside className="sidebar" aria-label="AutoDeFi DAO navigation">
      <div className="sidebar-logo-wrap">
        <img src={brandAssets.logoAutodefi} alt="AutoDeFi DAO" className="sidebar-logo" />
      </div>

      <section className="dao-card glass-card">
        <div className="dao-head">
          <img src={brandAssets.daoAvatar} alt="AutoDeFi DAO" className="dao-avatar" />
          <div>
            <div className="dao-title">AutoDeFi DAO <span className="verified-dot">◆</span></div>
            <div className="dao-subtitle">Community Governed</div>
          </div>
          <Icon src={icons.chevronDown} className="small-icon muted-right" />
        </div>
        <div className="sidebar-divider" />
        <div className="treasury-snapshot">
          <div>
            <span className="muted">DAO Treasury</span>
            <strong>{formatUsd(metrics.treasuryUsd)}</strong>
          </div>
          <span className="positive">+{metrics.treasuryChange30d.toFixed(2)}% (30d)</span>
        </div>
        <svg className="sparkline" viewBox="0 0 160 42" aria-label="DAO treasury trend">
          <path d="M2 34 C15 31,20 33,31 27 S50 30,58 20 S75 24,84 12 S104 20,116 8 S133 11,158 2" fill="none" stroke="url(#lineGrad)" strokeWidth="3" strokeLinecap="round" />
          <defs>
            <linearGradient id="lineGrad" x1="0" x2="160" y1="0" y2="0">
              <stop stopColor="#15F095" />
              <stop offset="1" stopColor="#00C2FF" />
            </linearGradient>
          </defs>
        </svg>
      </section>

      <nav className="nav-list">
        {navItems.map(([label, icon, chip]) => (
          <button key={label} className={`nav-item ${label === 'Proposals' ? 'active' : ''}`} type="button">
            <Icon src={icon} />
            <span>{label}</span>
            {chip && <span className="nav-chip">{chip}</span>}
          </button>
        ))}
      </nav>

      <section className="power-card glass-card">
        <div className="mini-label">Your <span>Governance Power</span></div>
        <div className="power-row">
          <Icon src={icons.power} className="power-icon" />
          <div>
            <strong>{metrics.governancePowerAdf.toLocaleString()} ADF</strong>
            <span>Voting Power</span>
          </div>
        </div>
        <div className="sidebar-divider" />
        <div className="delegation">Delegate To <strong>You</strong></div>
        <div className="supply-label">{metrics.governanceSupplyPct.toFixed(2)}% of total supply</div>
        <div className="thin-progress"><span style={{ width: `${Math.min(metrics.governanceSupplyPct, 100)}%` }} /></div>
      </section>

      <section className="call-card glass-card">
        <div className="call-heading">Next Governance Call</div>
        <div className="call-date"><Icon src={icons.calendar} /> {metrics.nextGovernanceCall}</div>
        <div className="countdown-grid" aria-label="Next governance call countdown">
          {[
            ['02', 'Days'], ['14', 'Hours'], ['33', 'Mins'], ['21', 'Secs'],
          ].map(([value, label]) => (
            <div key={label} className="count-box"><strong>{value}</strong><span>{label}</span></div>
          ))}
        </div>
        <button className="full-purple-button" type="button">View Calendar</button>
      </section>

      <section className="wallet-card glass-card">
        <img src={brandAssets.daoAvatar} alt="Connected wallet avatar" className="wallet-avatar" />
        <div>
          <strong>{metrics.connectedWallet} <span className="verified-dot">◆</span></strong>
          <span>Connected Wallet</span>
        </div>
        <Icon src={icons.wallet} className="small-icon wallet-signal" />
      </section>
    </aside>
  );
}
