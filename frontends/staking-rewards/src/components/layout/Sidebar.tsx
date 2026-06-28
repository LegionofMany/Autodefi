import logo from '../../assets/svg/autodefi-logo.svg';
import lightning from '../../assets/svg/icon-lightning.svg';
import gift from '../../assets/svg/icon-gift.svg';
import growth from '../../assets/svg/growth-card.svg';
import dashboardIcon from '../../assets/svg/icon-dashboard.svg';
import proposalIcon from '../../assets/svg/icon-proposals.svg';
import voteIcon from '../../assets/svg/icon-vote.svg';
import treasuryIcon from '../../assets/svg/icon-treasury.svg';
import stakingIcon from '../../assets/svg/icon-staking.svg';
import lenderIcon from '../../assets/svg/icon-lender.svg';
import riskIcon from '../../assets/svg/icon-risk.svg';
import revenueIcon from '../../assets/svg/icon-revenue.svg';
import tokenIcon from '../../assets/svg/icon-token.svg';
import governanceIcon from '../../assets/svg/icon-governance.svg';
import auditIcon from '../../assets/svg/icon-audit.svg';
import analyticsIcon from '../../assets/svg/icon-analytics.svg';
import menuIcon from '../../assets/svg/icon-menu.svg';

const nav = [
  ['Dashboard', dashboardIcon],
  ['Proposals', proposalIcon],
  ['Vote', voteIcon],
  ['Treasury', treasuryIcon],
  ['Staking', stakingIcon],
  ['Lender Pool', lenderIcon],
  ['Risk Management', riskIcon],
  ['Revenue Sharing', revenueIcon],
  ['Token Utility', tokenIcon],
  ['Governance', governanceIcon],
  ['Audit & Security', auditIcon],
  ['Analytics', analyticsIcon]
] as const;

export function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="brand-row">
        <img src={logo} alt="AutoDeFi" className="brand-logo" />
        <button className="icon-button ghost" aria-label="Collapse menu">
          <img src={menuIcon} alt="" />
        </button>
      </div>

      <div className="staking-power-card glow-card">
        <div className="power-head">
          <span className="icon-tile purple"><img src={lightning} alt="" /></span>
          <span>My Staking Power</span>
        </div>
        <strong>12,450.25 ADF</strong>
        <small>Total Staking Power ⓘ</small>
        <span className="positive">↑ 12.45% vs last 30d</span>
        <svg className="sparkline" viewBox="0 0 180 36" aria-hidden="true">
          <polyline points="0,30 14,31 25,29 38,30 48,27 59,28 70,26 82,25 94,21 106,23 114,13 123,22 132,17 141,11 149,16 158,8 166,12 178,5" />
        </svg>
      </div>

      <nav className="side-nav" aria-label="AutoDeFi sections">
        {nav.map(([label, icon]) => (
          <a key={label} className={label === 'Staking' ? 'active' : ''} href={`#${label.toLowerCase().replace(/\s+/g, '-')}`}>
            <img src={icon} alt="" />
            <span>{label}</span>
            {label === 'Governance' && <b className="new-pill">New</b>}
          </a>
        ))}
      </nav>

      <section className="mini-panel next-reward">
        <div className="next-head"><span className="icon-tile purple"><img src={gift} alt="" /></span><span>Next Reward</span></div>
        <strong>14h 32m 18s</strong>
        <small>Until next reward distribution</small>
        <div className="meter"><span /></div>
        <p>Reward Epoch<br /><b>Epoch #128</b><br />May 12, 2025 - May 19, 2025</p>
      </section>

      <section className="mini-panel autocompound-card">
        <div className="row-between"><span className="autocompound-title">AutoCompound<br /><b>Enabled</b></span><span className="switch on" /></div>
        <p>AutoCompound your rewards weekly for max growth.</p>
        <a href="#settings">Manage Settings →</a>
      </section>

      <section className="growth-panel">
        <img src={growth} alt="Lock higher, earn higher, grow together" />
        <div>
          <h3>Lock Higher.<br />Earn Higher.<br />Grow Together.</h3>
          <p>The longer you lock, the greater your rewards.</p>
          <a href="#learn">Learn More →</a>
        </div>
      </section>
    </aside>
  );
}
