type DashboardTone = 'blue' | 'green' | 'purple' | 'orange' | 'red' | 'cyan';

type DashboardStat = {
  label: string;
  value: string;
  note: string;
  tone: DashboardTone;
};

type DashboardProfile = {
  title: string;
  kicker: string;
  subtitle: string;
  icon: string;
  status: string;
  action: string;
  profileTitle: string;
  profileSubtitle: string;
  scoreLabel: string;
  score: string;
  heroTitle: string;
  heroSubtitle: string;
  heroValue: string;
  heroNote: string;
  visualLabel: string;
  stats: DashboardStat[];
  modules: DashboardStat[];
  side: DashboardStat[];
  breakdown: DashboardStat[];
  rows: string[][];
  bottom: string[];
};

const sharedBottom = [
  'On-chain settlement',
  'Vehicle NFT ownership',
  'Smart contract escrow',
  'DAO recovery engine'
];

const dashboardProfiles: Record<string, DashboardProfile> = {
  'borrower-portal': {
    title: 'Borrower Portal',
    kicker: 'Your loans. Your wallet. Your future.',
    subtitle: 'Matched borrower command center for loans, payments, refinance, rewards, wallet, and protection.',
    icon: '◈',
    status: 'On Track',
    action: 'Make Payment',
    profileTitle: 'Marcus Johnson',
    profileSubtitle: 'Verified Borrower',
    scoreLabel: 'Credit Improvement Score',
    score: '742',
    heroTitle: '2023 Tesla Model Y LR',
    heroSubtitle: 'Loan ID: LN-894723 · 32 / 60 months remaining',
    heroValue: '$28,450.67',
    heroNote: 'Outstanding balance · 9.82% APR',
    visualLabel: 'Vehicle Loan Health',
    stats: [
      { label: 'Staked ADF', value: '2,450 ADF', note: '$2,140.32 collateral', tone: 'purple' },
      { label: 'Rewards Earned', value: '1,284.75 ADF', note: '$1,112.46 this month', tone: 'green' },
      { label: 'Token Collateral', value: '$4,000.00', note: 'Locked for protection', tone: 'orange' },
      { label: 'Insurance Coverage', value: '$36,250', note: 'Full coverage active', tone: 'green' }
    ],
    modules: [
      { label: 'Next Payment', value: '$624.35', note: 'Due May 20, 2025', tone: 'blue' },
      { label: 'Refinance Rate', value: '7.24%', note: 'Eligible now', tone: 'purple' },
      { label: 'Autopay', value: 'On', note: 'Stable-value rail active', tone: 'green' },
      { label: 'Documents', value: '12', note: 'All current', tone: 'cyan' }
    ],
    side: [
      { label: 'Total Wallet', value: '$6,214.78', note: 'ADF / USDC / USDT / ETH', tone: 'blue' },
      { label: 'Loan Health', value: '96%', note: 'Excellent payment status', tone: 'green' },
      { label: 'Savings Estimate', value: '$3,418 / yr', note: 'Refinance projection', tone: 'purple' }
    ],
    breakdown: [
      { label: 'On Time', value: '92%', note: 'Payment history', tone: 'green' },
      { label: 'Paid', value: '84%', note: 'Completed milestones', tone: 'blue' },
      { label: 'Pending', value: '8%', note: 'Upcoming payment', tone: 'orange' }
    ],
    rows: [
      ['Dec', 'Payment', '$624.35', 'On Time'],
      ['Jan', 'Payment', '$624.35', 'On Time'],
      ['Feb', 'ADF Reward', '184.22 ADF', 'Paid'],
      ['Mar', 'Payment', '$624.35', 'On Time'],
      ['Apr', 'Payment', '$624.35', 'On Time'],
      ['May', 'Payment', '$624.35', 'Pending']
    ],
    bottom: sharedBottom
  },
  'insurance-pool': {
    title: 'Insurance Pool',
    kicker: 'Decentralized protection. Shared risk. Real coverage.',
    subtitle: 'Matched insurance command center for coverage, claims, reserves, utilization, and recovery partners.',
    icon: '⬢',
    status: 'Strong',
    action: 'Review Claims',
    profileTitle: 'Coverage Command',
    profileSubtitle: 'Insurance Pool Active',
    scoreLabel: 'Pool Health Score',
    score: 'A',
    heroTitle: 'Risk Exposure by Tier',
    heroSubtitle: 'Tiered protection across auto loans, fleet loans, dealer floorplan, and recovery assets.',
    heroValue: '$132.84M',
    heroNote: 'Total coverage · 76.4% utilization',
    visualLabel: 'Pool Health',
    stats: [
      { label: 'Total Coverage', value: '$132.84M', note: '+12.47% vs last 7d', tone: 'blue' },
      { label: 'Claims Reserve', value: '$38.67M', note: '+8.22%', tone: 'orange' },
      { label: 'Active Policies', value: '8,642', note: '+9.31%', tone: 'purple' },
      { label: 'Insurance APY', value: '24.38%', note: '+2.10%', tone: 'red' }
    ],
    modules: [
      { label: 'Tier 1', value: '$56.21M', note: 'Low risk', tone: 'green' },
      { label: 'Tier 2', value: '$42.68M', note: 'Medium risk', tone: 'blue' },
      { label: 'Tier 3', value: '$28.57M', note: 'High risk', tone: 'purple' },
      { label: 'Tier 4', value: '$7.38M', note: 'Very high risk', tone: 'red' }
    ],
    side: [
      { label: 'Pool Utilization', value: '76.4%', note: 'Active coverage ratio', tone: 'green' },
      { label: 'Claims Reserve', value: '$13.12M', note: 'Current reserve segment', tone: 'orange' },
      { label: 'Partners', value: '4', note: 'Reinsurance partners', tone: 'cyan' }
    ],
    breakdown: [
      { label: 'Auto Loans', value: '72.4%', note: 'Coverage share', tone: 'blue' },
      { label: 'Fleet Loans', value: '14.8%', note: 'Coverage share', tone: 'green' },
      { label: 'Dealer Floorplan', value: '7.6%', note: 'Coverage share', tone: 'purple' }
    ],
    rows: [
      ['CLM-48721', 'Default', '$18,430', 'Approved'],
      ['CLM-48370', 'Theft', '$7,215', 'Approved'],
      ['CLM-49179', 'Collision', '$5,900', 'In Review'],
      ['CLM-48218', 'Mechanical', '$2,250', 'Approved'],
      ['RNS-2041', 'Reinsurance', '$25.00M', 'Active'],
      ['RSV-1044', 'Reserve', '$13.12M', 'Strong']
    ],
    bottom: sharedBottom
  },
  'liquidation-auction': {
    title: 'Liquidation Auction Marketplace',
    kicker: 'Transparent auctions. Real assets. Real value.',
    subtitle: 'Matched marketplace command center for recovery assets, live auctions, bids, title vaults, and DAO recovery.',
    icon: '⚒',
    status: 'Live',
    action: 'Place Bid',
    profileTitle: 'ZONYCS Marketplace',
    profileSubtitle: 'Recovery Auction Network',
    scoreLabel: 'Recovery Rate',
    score: '87.6%',
    heroTitle: '2022 BMW X5 M50i',
    heroSubtitle: 'VIN: 5UXCR6C03NL71564 · 18,742 miles · Live auction',
    heroValue: '$48,750',
    heroNote: 'Current bid · reserve $45,000',
    visualLabel: 'Live Auction Asset',
    stats: [
      { label: 'Live Auctions', value: '48', note: 'Active right now', tone: 'purple' },
      { label: 'Total Assets', value: '$24.85M', note: 'Recovery value', tone: 'blue' },
      { label: 'Highest Bid Today', value: '$86,450', note: 'Across active lots', tone: 'orange' },
      { label: 'Units Sold', value: '126', note: '30 day volume', tone: 'green' }
    ],
    modules: [
      { label: 'Recovery Rate', value: '87.6%', note: 'Portfolio recovery', tone: 'green' },
      { label: 'DAO Recovery', value: '$4.21M', note: 'Value flowed back to pools', tone: 'cyan' },
      { label: 'Active Bids', value: '15', note: 'On selected asset', tone: 'purple' },
      { label: 'Title Vault', value: 'Verified', note: 'NFT ownership ready', tone: 'green' }
    ],
    side: [
      { label: 'Recent Sales', value: '$940,584', note: 'Last 5 vehicles', tone: 'green' },
      { label: 'Watchlist', value: '18', note: 'Dealer and investor watchers', tone: 'purple' },
      { label: 'Settlement', value: 'On-chain', note: 'Escrow release ready', tone: 'blue' }
    ],
    breakdown: [
      { label: 'Auctions', value: '48%', note: 'Marketplace mix', tone: 'purple' },
      { label: 'Buy Now', value: '32%', note: 'Marketplace mix', tone: 'blue' },
      { label: 'Raffles', value: '20%', note: 'Marketplace mix', tone: 'orange' }
    ],
    rows: [
      ['2021 Ford F-150 Lariat', '$31,250', 'Current Bid', 'Live'],
      ['2023 Tesla Model 3 LR', '$29,000', 'Current Bid', 'Live'],
      ['2021 Audi Q7 Premium', '$103,212', 'Starts Soon', 'Upcoming'],
      ['2020 Chevy Silverado', '$44,891', 'Starts Soon', 'Upcoming'],
      ['2022 Honda Civic', '$14,200', 'Sold', 'Closed'],
      ['2020 Mercedes GLC', '$20,120', 'Sold', 'Closed']
    ],
    bottom: sharedBottom
  },
  'ai-underwriter': {
    title: 'AI Underwriter Command Center',
    kicker: 'AI-powered decisions. Faster approvals. Smarter risk.',
    subtitle: 'Matched underwriting command center for bureau, income, employment, vehicle, wallet, and on-chain analysis.',
    icon: 'A',
    status: 'Active',
    action: 'Approve Loan',
    profileTitle: 'Sarah Mitchell',
    profileSubtitle: 'Application: VIN-3F46P9Y-L8123456',
    scoreLabel: 'Approval Probability',
    score: '92%',
    heroTitle: 'AI Decision Engine',
    heroSubtitle: 'Six-signal decision loop: bureau, income, employment, vehicle, wallet, and on-chain risk.',
    heroValue: '1.42s',
    heroNote: 'Decision time · Tier 2 medium risk',
    visualLabel: 'NeuralRisk AI',
    stats: [
      { label: 'Models Online', value: '12', note: 'NeuralRisk active', tone: 'blue' },
      { label: 'Accuracy', value: '98.7%', note: 'Validated model set', tone: 'green' },
      { label: 'Decisions Today', value: '1,842', note: 'Underwriting volume', tone: 'purple' },
      { label: 'AI Status', value: 'Active', note: 'All engines online', tone: 'green' }
    ],
    modules: [
      { label: 'Credit Score', value: '724', note: 'Good', tone: 'green' },
      { label: 'Income Verified', value: '$65,420 / yr', note: 'Stable', tone: 'green' },
      { label: 'Down Payment', value: '$4,000', note: 'ADF token down', tone: 'purple' },
      { label: 'Debt-to-Income', value: '28%', note: 'Verified', tone: 'green' }
    ],
    side: [
      { label: 'Recommended Tier', value: 'Tier 2', note: 'Medium risk', tone: 'blue' },
      { label: 'Predicted Default Risk', value: '2.4%', note: 'Low', tone: 'green' },
      { label: 'Expected Yield', value: '18.2%', note: 'Best funding source', tone: 'purple' }
    ],
    breakdown: [
      { label: 'Credit Risk', value: '22%', note: 'Low', tone: 'green' },
      { label: 'Income Stability', value: '18%', note: 'Low', tone: 'green' },
      { label: 'Vehicle Risk', value: '16%', note: 'Low', tone: 'cyan' }
    ],
    rows: [
      ['Bureau Analysis', 'Complete', 'Risk Engine', 'Verified'],
      ['Income Analysis', 'Complete', 'Bank Feed', 'Verified'],
      ['Employment Analysis', 'Complete', 'Employer Data', 'Verified'],
      ['Vehicle Analysis', 'Complete', 'VIN / Market', 'Verified'],
      ['Wallet Analysis', 'Complete', 'On-chain Wallet', 'Healthy'],
      ['Final Decision', 'Queued', 'AI Model', 'Approve']
    ],
    bottom: sharedBottom
  }
};

dashboardProfiles['insurance-recovery'] = dashboardProfiles['insurance-pool'];

const rowStatusTone = (value: string): DashboardTone => {
  const text = value.toLowerCase();
  if (text.includes('approved') || text.includes('verified') || text.includes('active') || text.includes('healthy') || text.includes('live') || text.includes('strong')) return 'green';
  if (text.includes('review') || text.includes('pending') || text.includes('queued') || text.includes('upcoming')) return 'orange';
  if (text.includes('closed')) return 'purple';
  return 'blue';
};

export function FourDashboard({ id }: { id: string }) {
  const profile = dashboardProfiles[id] || dashboardProfiles['borrower-portal'];

  return (
    <div className="unified-dashboard-shell">
      <style>{unifiedDashboardStyles}</style>

      <section className="u-head">
        <div className="u-title-lockup">
          <span className="u-logo-mark">{profile.icon}</span>
          <div>
            <p>{profile.kicker}</p>
            <h2>{profile.title}</h2>
            <small>{profile.subtitle}</small>
          </div>
        </div>
        <div className="u-actions">
          <button type="button">Export</button>
          <button type="button">Compare</button>
          <button type="button" className="u-primary">{profile.action}</button>
        </div>
      </section>

      <section className="u-stat-grid">
        {profile.stats.map((stat) => <DashboardStatCard key={stat.label} stat={stat} />)}
      </section>

      <section className="u-dashboard-grid">
        <aside className="u-left-stack">
          <section className="u-panel u-profile-card">
            <div className="u-avatar">{profile.icon}</div>
            <h3>{profile.profileTitle}</h3>
            <p>{profile.profileSubtitle}</p>
            <span className="u-pill tone-green">{profile.status}</span>
          </section>

          <section className="u-panel u-score-card">
            <p>{profile.scoreLabel}</p>
            <div className="u-score-ring"><strong>{profile.score}</strong></div>
            <small>Unified AutoDeFi dashboard score</small>
          </section>

          <section className="u-panel u-mini-nav">
            {['Overview', 'Activity', 'Collateral', 'Rewards', 'Documents', 'Support'].map((item, index) => (
              <button type="button" className={index === 0 ? 'active' : ''} key={item}>{item}</button>
            ))}
          </section>
        </aside>

        <main className="u-center-stack">
          <section className="u-panel u-hero-card">
            <div className="u-hero-copy">
              <span className="u-pill tone-blue">{profile.visualLabel}</span>
              <h3>{profile.heroTitle}</h3>
              <p>{profile.heroSubtitle}</p>
              <strong>{profile.heroValue}</strong>
              <small>{profile.heroNote}</small>
            </div>
            <div className="u-neon-stage" aria-hidden="true">
              <div className="u-orbit" />
              <div className="u-core">{profile.icon}</div>
              <div className="u-floor" />
            </div>
          </section>

          <section className="u-module-grid">
            {profile.modules.map((module) => <DashboardStatCard key={module.label} stat={module} compact />)}
          </section>

          <section className="u-split-row">
            <div className="u-panel">
              <div className="u-panel-title"><h3>Performance History</h3><span>Live</span></div>
              <div className="u-bars" aria-hidden="true">{[56, 70, 84, 62, 68, 92].map((height, index) => <i key={index} style={{ height: `${height}%` }} />)}</div>
              <div className="u-legend-row">{profile.breakdown.map((item) => <span key={item.label}><b className={`u-dot tone-${item.tone}`} />{item.label}</span>)}</div>
            </div>

            <div className="u-panel">
              <div className="u-panel-title"><h3>Risk Breakdown</h3><span>AI synced</span></div>
              <div className="u-breakdown-list">
                {profile.breakdown.map((item) => (
                  <div key={item.label}>
                    <span>{item.label}<small>{item.note}</small></span>
                    <strong>{item.value}</strong>
                    <i><em className={`tone-${item.tone}`} style={{ width: item.value.includes('%') ? item.value : '72%' }} /></i>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>

        <aside className="u-right-stack">
          {profile.side.map((stat) => <DashboardStatCard key={stat.label} stat={stat} />)}
          <section className="u-panel u-market-card">
            <div className="u-panel-title"><h3>Market Signal</h3><span>30D</span></div>
            <svg viewBox="0 0 360 160" role="img" aria-label="Market signal chart">
              <path d="M8 130 C48 118 56 94 94 98 S144 140 184 91 S254 84 290 44 S328 22 352 28" fill="none" stroke="#00e88f" strokeWidth="5" strokeLinecap="round" />
              <path d="M8 142 C58 122 76 132 116 112 S178 94 212 104 S288 62 352 72" fill="none" stroke="#8b5cf6" strokeWidth="4" strokeLinecap="round" opacity=".85" />
            </svg>
          </section>
        </aside>
      </section>

      <section className="u-panel u-table-card">
        <div className="u-panel-title"><h3>{profile.title} Work Queue</h3><span>Synced</span></div>
        <div className="u-table-wrap">
          <table>
            <thead><tr><th>Item</th><th>Detail</th><th>Value</th><th>Status</th><th>Action</th></tr></thead>
            <tbody>
              {profile.rows.map((row) => (
                <tr key={row.join('-')}>
                  {row.map((cell, index) => index === 3 ? <td key={cell}><span className={`u-pill tone-${rowStatusTone(cell)}`}>{cell}</span></td> : <td key={cell}>{cell}</td>)}
                  <td><button type="button">Open</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="u-bottom-grid">
        {profile.bottom.map((item, index) => <div className="u-panel" key={item}><strong>{item}</strong><small>{['Instant and transparent', 'Verified ownership', 'Secure payments', 'Value flows back to pools'][index]}</small></div>)}
      </section>
    </div>
  );
}

function DashboardStatCard({ stat, compact = false }: { stat: DashboardStat; compact?: boolean }) {
  return (
    <article className={`u-stat-card tone-${stat.tone} ${compact ? 'compact' : ''}`}>
      <span>{stat.label}</span>
      <strong>{stat.value}</strong>
      <small>{stat.note}</small>
    </article>
  );
}

const unifiedDashboardStyles = `
.unified-dashboard-shell{display:grid;gap:14px}.u-head{display:flex;align-items:center;justify-content:space-between;gap:16px}.u-title-lockup{display:flex;align-items:center;gap:14px}.u-logo-mark{width:64px;height:64px;border-radius:22px;display:grid;place-items:center;background:radial-gradient(circle at 30% 20%,rgba(34,211,238,.95),rgba(139,92,246,.62) 48%,rgba(2,6,23,.9));border:1px solid rgba(34,211,238,.4);box-shadow:0 0 34px rgba(47,128,255,.32);font-weight:900;font-size:30px;color:white}.u-title-lockup p{margin:0;color:#b7c4d9;font-weight:700}.u-title-lockup h2{font-size:34px;margin:3px 0;color:white}.u-title-lockup small,.u-panel small,.u-stat-card small{color:#8ea3bd}.u-actions{display:flex;gap:10px;flex-wrap:wrap}.u-actions button,.u-table-card button{border:1px solid rgba(139,92,246,.35);background:rgba(7,17,31,.72);color:white;border-radius:12px;padding:10px 14px;cursor:pointer}.u-actions .u-primary{background:linear-gradient(90deg,#571bff,#a21caf,#fb7185);border-color:transparent;box-shadow:0 0 26px rgba(139,92,246,.35)}.u-stat-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:12px}.u-stat-card{background:linear-gradient(180deg,rgba(9,21,38,.94),rgba(4,10,20,.9));border:1px solid color-mix(in srgb,var(--dash-tone),transparent 62%);border-radius:18px;padding:16px;box-shadow:0 20px 60px rgba(0,0,0,.25);position:relative;overflow:hidden}.u-stat-card:after{content:"";position:absolute;right:-35px;bottom:-35px;width:110px;height:110px;border-radius:50%;background:radial-gradient(circle,var(--dash-tone),transparent 68%);opacity:.2}.u-stat-card span{display:block;color:#9fb1c9;font-size:13px}.u-stat-card strong{display:block;color:white;font-size:25px;margin:8px 0 4px}.u-stat-card.compact strong{font-size:22px}.tone-blue{--dash-tone:#2f80ff}.tone-green{--dash-tone:#00e88f}.tone-purple{--dash-tone:#8b5cf6}.tone-orange{--dash-tone:#f59e0b}.tone-red{--dash-tone:#ef4444}.tone-cyan{--dash-tone:#22d3ee}.u-dashboard-grid{display:grid;grid-template-columns:240px minmax(0,1fr) 280px;gap:14px}.u-left-stack,.u-center-stack,.u-right-stack{display:grid;gap:14px;align-content:start}.u-panel{background:linear-gradient(180deg,rgba(9,21,38,.94),rgba(4,10,20,.9));border:1px solid rgba(148,163,184,.16);border-radius:20px;padding:16px;box-shadow:0 22px 70px rgba(0,0,0,.28)}.u-profile-card{text-align:center}.u-avatar{width:92px;height:92px;margin:0 auto 12px;border-radius:28px;display:grid;place-items:center;background:radial-gradient(circle at 30% 20%,rgba(34,211,238,.92),rgba(139,92,246,.58) 54%,rgba(2,6,23,.9));border:1px solid rgba(34,211,238,.36);font-size:38px;font-weight:900}.u-profile-card h3{margin:0;color:white}.u-profile-card p{margin:4px 0 10px;color:#8ea3bd}.u-pill{display:inline-flex;align-items:center;border-radius:999px;padding:4px 10px;border:1px solid color-mix(in srgb,var(--dash-tone),transparent 48%);background:color-mix(in srgb,var(--dash-tone),transparent 88%);color:var(--dash-tone);font-size:12px;font-weight:800}.u-score-card{text-align:center}.u-score-card p{margin:0 0 10px;color:#b7c4d9}.u-score-ring{width:130px;height:130px;margin:0 auto 10px;border-radius:50%;display:grid;place-items:center;background:conic-gradient(#00e88f 0 72%,#8b5cf6 72% 92%,#172238 92%);position:relative}.u-score-ring:before{content:"";position:absolute;inset:16px;border-radius:50%;background:#06101f}.u-score-ring strong{position:relative;font-size:30px;color:white}.u-mini-nav{display:grid;gap:7px}.u-mini-nav button{border:1px solid transparent;background:transparent;color:#cbd5e1;text-align:left;border-radius:12px;padding:10px;cursor:pointer}.u-mini-nav button.active,.u-mini-nav button:hover{background:linear-gradient(90deg,rgba(73,33,151,.95),rgba(110,45,210,.68));color:white;border-color:rgba(167,139,250,.26)}.u-hero-card{display:grid;grid-template-columns:1fr 360px;gap:16px;min-height:280px;overflow:hidden;position:relative}.u-hero-copy{position:relative;z-index:2}.u-hero-copy h3{font-size:30px;margin:18px 0 8px;color:white}.u-hero-copy p{color:#a9b7cb;max-width:680px}.u-hero-copy strong{display:block;font-size:42px;color:#fff;margin-top:22px}.u-hero-copy small{display:block}.u-neon-stage{position:relative;display:grid;place-items:center;min-height:250px}.u-orbit{position:absolute;width:260px;height:150px;border-radius:50%;border:3px solid rgba(34,211,238,.45);box-shadow:0 0 40px rgba(34,211,238,.25);transform:rotate(-15deg)}.u-core{width:150px;height:150px;border-radius:44px;display:grid;place-items:center;background:radial-gradient(circle at 30% 20%,rgba(0,232,143,.95),rgba(47,128,255,.76) 45%,rgba(139,92,246,.74));font-size:64px;font-weight:900;color:white;box-shadow:0 0 70px rgba(139,92,246,.45)}.u-floor{position:absolute;bottom:28px;width:310px;height:50px;background:radial-gradient(ellipse,rgba(139,92,246,.46),transparent 70%)}.u-module-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}.u-split-row{display:grid;grid-template-columns:1fr 1fr;gap:14px}.u-panel-title{display:flex;align-items:center;justify-content:space-between;gap:12px;margin-bottom:12px}.u-panel-title h3{margin:0;color:white}.u-panel-title span{color:#00e88f;font-size:12px}.u-bars{height:190px;display:flex;align-items:end;gap:14px;padding:18px 6px 0}.u-bars i{flex:1;border-radius:12px 12px 4px 4px;background:linear-gradient(180deg,#00e88f,#2f80ff 55%,#8b5cf6);box-shadow:0 0 20px rgba(47,128,255,.25)}.u-legend-row{display:flex;gap:14px;flex-wrap:wrap;color:#cbd5e1;font-size:13px}.u-dot{display:inline-block;width:10px;height:10px;border-radius:50%;background:var(--dash-tone);margin-right:6px}.u-breakdown-list{display:grid;gap:13px}.u-breakdown-list div{display:grid;grid-template-columns:1fr 58px;gap:10px;align-items:center}.u-breakdown-list span{color:#dbeafe}.u-breakdown-list small{display:block}.u-breakdown-list strong{text-align:right;color:white}.u-breakdown-list i{grid-column:1/-1;height:8px;background:#162238;border-radius:999px;overflow:hidden}.u-breakdown-list em{display:block;height:100%;background:var(--dash-tone);border-radius:999px}.u-market-card svg{width:100%;height:auto;display:block}.u-table-wrap{overflow:auto}.u-table-card table{width:100%;border-collapse:collapse}.u-table-card th,.u-table-card td{padding:12px;border-bottom:1px solid rgba(148,163,184,.12);text-align:left;white-space:nowrap}.u-table-card th{color:#8ea3bd;font-size:12px;text-transform:uppercase;letter-spacing:.04em}.u-table-card td{color:#eaf2ff}.u-bottom-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}.u-bottom-grid strong{display:block;color:white;margin-bottom:4px}@media(max-width:1450px){.u-dashboard-grid{grid-template-columns:1fr}.u-left-stack,.u-right-stack{grid-template-columns:repeat(3,1fr)}.u-module-grid{grid-template-columns:repeat(2,1fr)}}@media(max-width:920px){.u-head,.u-title-lockup{align-items:flex-start}.u-head{display:grid}.u-stat-grid,.u-left-stack,.u-right-stack,.u-module-grid,.u-split-row,.u-bottom-grid{grid-template-columns:1fr}.u-hero-card{grid-template-columns:1fr}.u-table-card th,.u-table-card td{padding:9px}.u-title-lockup h2{font-size:27px}}
`;
