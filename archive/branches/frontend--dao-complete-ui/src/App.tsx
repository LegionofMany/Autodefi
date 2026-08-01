import { useMemo, useState } from 'react';

type Metric = { label: string; value: string; delta?: string; tone?: string };
type Row = Record<string, string>;
type Portal = {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  nav: string[];
  metrics: Metric[];
  rows: Row[];
  sideTitle: string;
  sideItems: string[];
  actions: string[];
};

const commonRules = [
  'Dealer is paid in full after approved delivery.',
  'Borrower repayment uses regional stable-value rails.',
  'ADF powers staking, collateral, rewards, access, and governance.',
  'Interest yield is distributed to matching risk-tier stakers.'
];

const portals: Portal[] = [
  {
    id: 'borrower',
    title: 'Borrower Portal Dashboard',
    subtitle: 'Loan overview, payments, collateral, rewards, wallet, support, and Zonycs vehicle discovery.',
    badge: 'Verified Borrower',
    nav: ['Dashboard','Pre-Qualification','Loan Application','My Loans','Payments','Collateral','Rewards','Insurance','Refinance','Documents','Wallet','Support','Settings'],
    metrics: [
      { label: 'Total Loan Balance', value: '$28,450.67', delta: '32% paid', tone: 'blue' },
      { label: 'Next Payment Due', value: '$624.35', delta: 'May 20, 2025', tone: 'green' },
      { label: 'Loan Status', value: 'On Track', delta: 'Current', tone: 'cyan' },
      { label: 'ADF Rewards', value: '1,245 ADF', delta: '+82 this month', tone: 'purple' }
    ],
    rows: [
      { Vehicle: '2023 Tesla Model Y LR', Balance: '$28,450.67', APR: '9.82%', Term: '60 months', Status: 'Current' },
      { Vehicle: 'Zonycs Saved Vehicle', Balance: '$0.00', APR: 'Pre-qualified', Term: 'Pending', Status: 'Ready' },
      { Vehicle: 'Refinance Offer', Balance: '$28,450.67', APR: '8.94%', Term: '54 months', Status: 'Review' }
    ],
    sideTitle: 'Borrower Flow',
    sideItems: ['Pre-qualify with soft pull','Apply and upload documents','Choose vehicle on Zonycs.com','Dealer funding after delivery','Repay using regional stable-value rails'],
    actions: ['Make Payment','Enable AutoPay','Browse Zonycs','Request Refinance']
  },
  {
    id: 'dealer',
    title: 'Dealer Portal Dashboard',
    subtitle: 'Block Motors dealer operations, inventory, deals, F&I products, funding, and settlement visibility.',
    badge: 'Verified Dealer',
    nav: ['Dashboard','Inventory','Applications','Deals','Finance','Customers','Commissions','Documents','Reports','Marketing Tools','Settings'],
    metrics: [
      { label: 'Active Inventory', value: '128', delta: '+12 listed', tone: 'blue' },
      { label: 'Deals In Progress', value: '42', delta: '18 funding ready', tone: 'green' },
      { label: 'Dealer Payouts', value: '$2.84M', delta: '30 days', tone: 'purple' },
      { label: 'Zonycs Listings', value: '64', delta: 'Live sync', tone: 'cyan' }
    ],
    rows: [
      { Deal: 'ADF-78291', Customer: 'Marcus Johnson', Vehicle: '2023 Tesla Model Y', Stage: 'AI Underwriter', Status: 'Conditional Approval' },
      { Deal: 'ADF-78292', Customer: 'Sophia Martinez', Vehicle: '2022 BMW X5', Stage: 'Funding', Status: 'Approved' },
      { Deal: 'ADF-78293', Customer: 'James Wilson', Vehicle: '2021 Ford F-150', Stage: 'Docs', Status: 'Pending' },
      { Deal: 'ADF-78294', Customer: 'Olivia Smith', Vehicle: '2022 Audi Q7', Stage: 'Delivery', Status: 'Ready' }
    ],
    sideTitle: 'Dealer Funding Bridge',
    sideItems: ['Deal jacket','Bank submission / build sheet','AI underwriter view','F&I product selection','Delivery confirmation','Dealer payout receipt'],
    actions: ['Create Deal','Add Inventory','Submit to AI','View Funding']
  },
  {
    id: 'capital-yield',
    title: 'Capital Yield Portal Dashboard',
    subtitle: 'Investor capital allocation, earnings, loan pools, transactions, auto-invest, and portfolio performance.',
    badge: 'Verified Investor',
    nav: ['Dashboard','Investments','Loan Marketplace','Portfolios','Earnings','Transactions','Reports & Analytics','AutoInvest','Documents','Settings','Support'],
    metrics: [
      { label: 'Total Invested', value: '$5,248,750', delta: '+18.6%', tone: 'purple' },
      { label: 'Total Earnings YTD', value: '$412,850.67', delta: '+24.3%', tone: 'green' },
      { label: 'Weighted Yield', value: '12.74%', delta: '+0.82%', tone: 'blue' },
      { label: 'Available to Invest', value: '$182,340.25', delta: 'Ready', tone: 'cyan' }
    ],
    rows: [
      { Pool: 'Tier 1 Conservative', Risk: 'Low', Invested: '$2.16M', Yield: '8.92%', Status: 'Active' },
      { Pool: 'Tier 2 Balanced', Risk: 'Medium', Invested: '$1.64M', Yield: '12.24%', Status: 'Active' },
      { Pool: 'Tier 3 Aggressive', Risk: 'High', Invested: '$892K', Yield: '18.71%', Status: 'Active' },
      { Pool: 'Liquid Staking', Risk: 'Low', Invested: '$365K', Yield: '7.60%', Status: 'Active' }
    ],
    sideTitle: 'Investor Controls',
    sideItems: ['Deposit capital','Withdraw earnings','AutoInvest settings','Risk exposure','Statements and tax reports'],
    actions: ['Browse Loans','Add Funds','Manage AutoInvest','Download Report']
  },
  {
    id: 'dao',
    title: 'DAO & Community Governance Dashboard',
    subtitle: 'Govern proposals, voting, treasury allocation, community discussion, delegation, and token utility.',
    badge: 'DAO Member',
    nav: ['Dashboard','Proposals','Voting','Treasury','Tokenomics','Delegation','Members','Forum','Announcements','Reports & Analytics','Resources','Settings'],
    metrics: [
      { label: 'ADF Supply', value: '100,000,000', delta: 'Total supply', tone: 'purple' },
      { label: 'Treasury Balance', value: '$4.25M', delta: 'USD value', tone: 'green' },
      { label: 'DAO Members', value: '12,842', delta: '+12.4%', tone: 'blue' },
      { label: 'Active Proposals', value: '2', delta: 'Vote live', tone: 'orange' }
    ],
    rows: [
      { Proposal: 'Reduce Borrower Interest Rate by 0.5%', Category: 'Risk & Parameters', For: '72.4%', Status: 'Active' },
      { Proposal: 'Add USDC as Accepted Collateral', Category: 'Collateral', For: '65.8%', Status: 'Active' },
      { Proposal: 'Marketing Budget Q2', Category: 'Treasury', For: 'Pending', Status: 'Review' },
      { Proposal: 'Zonycs Recovery Auction Allocation', Category: 'Recovery', For: 'Draft', Status: 'Pending' }
    ],
    sideTitle: 'Governance Modules',
    sideItems: ['Create proposal','Vote confirmation','Treasury detail','Delegation page','Risk parameter editor','Audit report detail'],
    actions: ['Create Proposal','Vote Now','Delegate ADF','Open Forum']
  },
  {
    id: 'risk-security',
    title: 'Risk & Security Analytics Dashboard',
    subtitle: 'Real-time risk monitoring, fraud detection, identity verification, smart contract security, and compliance.',
    badge: 'Risk Admin',
    nav: ['Dashboard','Risk Overview','Fraud Detection','Security Events','Exposure Monitor','Transaction Monitoring','Smart Contract Security','Identity Verification','Compliance','Reports','Alerts','Settings'],
    metrics: [
      { label: 'Overall Risk Score', value: '42/100', delta: 'Moderate', tone: 'orange' },
      { label: 'High Risk Loans', value: '28', delta: '-15.2%', tone: 'green' },
      { label: 'Potential Fraud', value: '16', delta: '-23.1%', tone: 'red' },
      { label: 'KYC Success Rate', value: '97.3%', delta: '+1.2%', tone: 'cyan' }
    ],
    rows: [
      { Case: 'FRD-9201', Type: 'Identity Fraud', Signal: 'Device fingerprint', Risk: 'High', Status: 'Review' },
      { Case: 'KYC-1842', Type: 'Verification Failure', Signal: 'Address mismatch', Risk: 'Medium', Status: 'Pending' },
      { Case: 'TX-5581', Type: 'Blocked Transaction', Signal: 'Velocity check', Risk: 'High', Status: 'Completed' },
      { Case: 'SC-0419', Type: 'Contract Audit', Signal: 'No exploit', Risk: 'Low', Status: 'Verified' }
    ],
    sideTitle: 'Security Workflows',
    sideItems: ['Loan risk detail','Fraud case detail','Security event detail','Transaction review','KYC failure review','Compliance report'],
    actions: ['Review Case','Resolve Alert','Run KYC','Export Report']
  },
  {
    id: 'insurance-recovery',
    title: 'Insurance AI Recovery Modules Dashboard',
    subtitle: 'AI-powered insurance recovery, subrogation, liability analysis, damage assessment, and claim intelligence.',
    badge: 'Recovery Admin',
    nav: ['Dashboard','Claims Overview','Recovery Pipeline','Subrogation Cases','Litigation Tracking','Third Party Database','Fraud Detection','Liability Analysis','Damage Assessment','Document Intelligence','Predictive Recovery','Settings'],
    metrics: [
      { label: 'Claims In Recovery', value: '2,845', delta: '+18.6%', tone: 'blue' },
      { label: 'Recovered YTD', value: '$18.74M', delta: '+23.4%', tone: 'green' },
      { label: 'Success Rate', value: '76.8%', delta: '+6.2%', tone: 'purple' },
      { label: 'AI Confidence', value: '92.6%', delta: '+3.8%', tone: 'cyan' }
    ],
    rows: [
      { Claim: 'CLM-2025-7789', Type: 'Credit Default', Recovery: '$458,000', AI: 'High chance', Status: 'Review' },
      { Claim: 'CLM-2025-5512', Type: 'Stalled Negotiation', Recovery: '$67,500', AI: 'Settlement window', Status: 'Pending' },
      { Claim: 'CLM-2025-6893', Type: 'Documentation Gap', Recovery: '$0', AI: 'Missing docs', Status: 'Under Review' },
      { Claim: 'CLM-2025-6671', Type: 'Subrogation', Recovery: '$125,000', AI: 'Opportunity', Status: 'Active' }
    ],
    sideTitle: 'AI Modules',
    sideItems: ['Claim detail','Recovery case detail','Subrogation workflow','Damage assessment review','Liability analysis','Settlement recommendation'],
    actions: ['Ask AI Assistant','Open Claim','Run Liability','Recommend Settlement']
  },
  {
    id: 'loan-servicing',
    title: 'Loan Servicing Center',
    subtitle: 'Manage and monitor the active AutoDeFi loan portfolio.',
    badge: 'Servicing Admin',
    nav: ['Dashboard','Loan Servicing','Active Loans','Payment History','Escrow & Collateral','Insurance','Refinance Center','Loan Modifications','Statements','Reports'],
    metrics: [
      { label: 'Total Loans Serviced', value: '11,293', delta: '+12.81%', tone: 'blue' },
      { label: 'Portfolio Value', value: '$78.42M', delta: '+8.33%', tone: 'green' },
      { label: 'Outstanding', value: '$68.11M', delta: '+6.21%', tone: 'purple' },
      { label: 'Delinquency Rate', value: '1.87%', delta: '-0.34%', tone: 'orange' }
    ],
    rows: [
      { Borrower: 'Marcus Johnson', Vehicle: '2023 Tesla Model Y', Balance: '$24,820.35', Payment: 'May 15, 2025', Status: 'Current' },
      { Borrower: 'Sophia Martinez', Vehicle: '2022 BMW X5', Balance: '$31,450.20', Payment: 'May 16, 2025', Status: 'Current' },
      { Borrower: 'James Wilson', Vehicle: '2021 Ford F-150', Balance: '$18,730.65', Payment: 'May 17, 2025', Status: '30+ Day' },
      { Borrower: 'Olivia Smith', Vehicle: '2022 Audi Q7', Balance: '$36,125.40', Payment: 'May 18, 2025', Status: 'Current' }
    ],
    sideTitle: 'Collateral & Insurance Health',
    sideItems: ['Active insurance 98.3%','Collateral secured 96.4%','Total collateral locked $14.28M','At-risk collateral 3.6%'],
    actions: ['Collect Payment','Send Reminder','Modify Loan','Payoff Quote']
  },
  {
    id: 'claims',
    title: 'Insurance Claims Center',
    subtitle: 'Submit, review, and manage insurance claims secured by smart contracts and DAO controls.',
    badge: 'Claims Admin',
    nav: ['Dashboard','Claims','Submit Claim','Open Claims','Approved Claims','Denied Claims','Claims History','Payouts','Reserves','Reports'],
    metrics: [
      { label: 'Total Claims', value: '326', delta: '+12.4%', tone: 'blue' },
      { label: 'Open Claims', value: '87', delta: '+5.2%', tone: 'cyan' },
      { label: 'Approved Claims', value: '198', delta: '+14.3%', tone: 'green' },
      { label: 'Claim Reserve', value: '$38.67M', delta: '+18.6%', tone: 'purple' }
    ],
    rows: [
      { Claim: 'CLM-87421', Borrower: 'Marcus Johnson', Type: 'Credit Default', Amount: '$28,450', Status: 'Under Review' },
      { Claim: 'CLM-87420', Borrower: 'Ashley Taylor', Type: 'Theft', Amount: '$31,200', Status: 'Approved' },
      { Claim: 'CLM-87419', Borrower: 'Daniel Brown', Type: 'Total Loss', Amount: '$36,600', Status: 'Approved' },
      { Claim: 'CLM-87418', Borrower: 'Robert Miller', Type: 'Shortfall', Amount: '$12,650', Status: 'Denied' }
    ],
    sideTitle: 'Claim Workflow',
    sideItems: ['Claim submitted','Risk review','DAO verification','Approval','Smart contract payout'],
    actions: ['Submit Claim','Review Claim','Approve Payout','View Policy']
  },
  {
    id: 'treasury',
    title: 'Treasury Management Center',
    subtitle: 'Oversee AutoDeFi treasury operations, reserves, revenue streams, expenditures, and multi-sig actions.',
    badge: 'Treasury Admin',
    nav: ['Dashboard','Treasury Assets','Allocations','Revenue Streams','Reserves','Expenditures','Budgeting','Reports','Audit Logs','Transfer Funds','Swap / Convert','Stake Assets','Approve Spending','Treasury Proposals','Settings'],
    metrics: [
      { label: 'Treasury Balance', value: '$24.67M', delta: '+13.3%', tone: 'blue' },
      { label: 'Stablecoins', value: '$18.42M', delta: '+7.2%', tone: 'green' },
      { label: 'ADF Holdings', value: '$4.12M', delta: '+16.7%', tone: 'purple' },
      { label: 'Monthly Revenue', value: '$1.24M', delta: '+12.3%', tone: 'cyan' }
    ],
    rows: [
      { Type: 'Revenue', Description: 'Interest income - Loans', Amount: '+$682,190', Asset: 'USDC', Status: 'Completed' },
      { Type: 'Expense', Description: 'Development Payroll', Amount: '-$125,400', Asset: 'USDC', Status: 'Completed' },
      { Type: 'Revenue', Description: 'Insurance Premiums', Amount: '+$112,340', Asset: 'USDC', Status: 'Completed' },
      { Type: 'Transfer', Description: 'To Insurance Reserve', Amount: '-$500,000', Asset: 'USDC', Status: 'Approved' }
    ],
    sideTitle: 'Treasury Health',
    sideItems: ['Lending reserve ratio 18.6%','Insurance reserve ratio 182.6%','Liquidity ratio 24.3%','Operational runway 18.2 months','Multi-sig 5 of 9'],
    actions: ['Transfer Funds','Swap / Convert','Stake Assets','Approve Spending']
  },
  {
    id: 'collections',
    title: 'Collections & Recovery Center',
    subtitle: 'Delinquency management, workouts, repossession queue, and ZONYCS collateral liquidation workflow.',
    badge: 'Collections Admin',
    nav: ['Dashboard','Collections','Delinquent Loans','Recovery Pipeline','Repossession Queue','Recovery Assets','Workouts','Payment Plans','Reports','Analytics'],
    metrics: [
      { label: 'Total Delinquent', value: '1,451', delta: '+9.12%', tone: 'blue' },
      { label: '30 Days Delinquent', value: '892', delta: '+3.45%', tone: 'orange' },
      { label: '90+ Days Delinquent', value: '167', delta: '+9.34%', tone: 'red' },
      { label: 'Recovery Rate', value: '87.6%', delta: '+4.32%', tone: 'green' }
    ],
    rows: [
      { Case: 'RCV-25-00891', Borrower: 'Daniel Brown', Vehicle: '2020 Jeep Grand Cherokee', Days: '67', Status: 'Scheduled' },
      { Case: 'RCV-25-00847', Borrower: 'Ashley Taylor', Vehicle: '2019 Dodge Charger', Days: '78', Status: 'Pending' },
      { Case: 'RCV-25-00835', Borrower: 'Robert Miller', Vehicle: '2021 Nissan Altima', Days: '91', Status: 'In Process' },
      { Case: 'RCV-25-00843', Borrower: 'Jessica Davis', Vehicle: '2020 Chevy Silverado', Days: '102', Status: 'Legal Hold' }
    ],
    sideTitle: 'Top Recovery Actions',
    sideItems: ['Payment plan success 72.4%','Loan workout success 68.7%','Repossession success 91.3%','Settlement success 88.2%','ZONYCS liquidation success 93.6%'],
    actions: ['Send Demand','Create Payment Plan','Initiate Repossession','Settlement Offer']
  },
  {
    id: 'investor',
    title: 'Investor Portal',
    subtitle: 'Track investments, earnings, portfolio risk, pool allocations, payouts, statements, and KYC profile.',
    badge: 'Tier 2 Investor',
    nav: ['Dashboard','Investments','Pools','Performance','Statements','Reports','Transactions','Capital Requests','KYC & Profile','Documents','Alerts','Settings'],
    metrics: [
      { label: 'Total Invested', value: '$12.85M', delta: '+11.23%', tone: 'purple' },
      { label: 'Current Value', value: '$14.28M', delta: '+11.11%', tone: 'green' },
      { label: 'Total Return YTD', value: '$1.43M', delta: '+12.81%', tone: 'cyan' },
      { label: 'Average APY', value: '18.62%', delta: '+1.24%', tone: 'blue' }
    ],
    rows: [
      { Pool: 'Tier 1 Conservative', Type: 'Fixed Income', Invested: '$4.94M', APY: '12.24%', Status: 'Active' },
      { Pool: 'Tier 2 Balanced', Type: 'Fixed Income', Invested: '$5.01M', APY: '18.12%', Status: 'Active' },
      { Pool: 'Tier 3 Aggressive', Type: 'Variable', Invested: '$2.10M', APY: '24.35%', Status: 'Active' },
      { Pool: 'Liquid Staking', Type: 'Liquidity', Invested: '$670K', APY: '8.92%', Status: 'Active' }
    ],
    sideTitle: 'Investor Risk & Performance',
    sideItems: ['Risk score 87 low risk','Sharpe ratio 1.48','Sortino ratio 2.21','Diversification excellent','Next payout May 20, 2025'],
    actions: ['Deposit Capital','Request Capital','View Statements','Manage AutoInvest']
  },
  {
    id: 'marketplace',
    title: 'Dealer Marketplace Network',
    subtitle: 'Buy, sell, finance, auction, and transfer verified dealer inventory through the AutoDeFi + Zonycs network.',
    badge: 'Verified Dealer',
    nav: ['Dashboard','Marketplace','All Listings','Auctions','My Listings','Watchlist','Deals','Inventory Sold','Purchase Orders','Transfers','Floorplan Financing','Credit Lines','Funding History','Dealer Directory','Reports','Settings'],
    metrics: [
      { label: 'Active Listings', value: '1,284', delta: '+12.6%', tone: 'blue' },
      { label: 'Inventory Sold', value: '326', delta: '+15.7%', tone: 'green' },
      { label: 'Total Volume 30D', value: '$24.85M', delta: '+16.3%', tone: 'purple' },
      { label: 'Network Dealers', value: '2,145', delta: '+8.3%', tone: 'cyan' }
    ],
    rows: [
      { Vehicle: '2022 BMW X5 xDrive40i', Location: 'Dallas, TX', Price: '$43,750', Status: 'Featured' },
      { Vehicle: '2021 Ford F-150 Lariat', Location: 'Houston, TX', Price: '$34,760', Status: 'Hot Deal' },
      { Vehicle: '2021 Audi Q7 Premium', Location: 'Atlanta, GA', Price: '$36,250', Status: 'Price Drop' },
      { Vehicle: '2023 Tesla Model Y LR', Location: 'Miami, FL', Price: '$47,900', Status: 'New' }
    ],
    sideTitle: 'Marketplace Modules',
    sideItems: ['Floorplan financing','Escrow protection','Reputation system','Nationwide dealer network','Zonycs local market hub sync'],
    actions: ['Create Listing','Start Auction','Request Financing','Transfer Vehicle']
  },
  {
    id: 'underwriter',
    title: 'AI Underwriter Center',
    subtitle: 'Automated borrower risk assessment, identity review, bank analysis, vehicle valuation, and final decision workflow.',
    badge: 'Underwriter Pro',
    nav: ['Dashboard','AI Underwriter','Applications Queue','Risk Models','Identity & KYC','Income Verification','Bank Analysis','Vehicle Valuation','Fraud Signals','Conditional Approvals','Funding Readiness','Analytics','Settings'],
    metrics: [
      { label: 'Applications Reviewed', value: '1,842', delta: '+13.6%', tone: 'blue' },
      { label: 'Approval Rate', value: '68.7%', delta: '+8.7%', tone: 'green' },
      { label: 'Avg Risk Score', value: '612', delta: '-18 bps', tone: 'orange' },
      { label: 'Funding Ready', value: '$28.42M', delta: '+9.3%', tone: 'cyan' }
    ],
    rows: [
      { Applicant: 'Marcus Johnson', Vehicle: '2022 Tesla Model Y', Amount: '$42,500', Tier: 'Tier 2', Status: 'Conditional Approval' },
      { Applicant: 'Sophia Martinez', Vehicle: '2021 BMW X5', Amount: '$51,000', Tier: 'Tier 1', Status: 'Approve' },
      { Applicant: 'James Wilson', Vehicle: '2021 Ford F-150', Amount: '$38,700', Tier: 'Tier 3', Status: 'Manual Review' },
      { Applicant: 'Daniel Brown', Vehicle: '2020 Jeep Grand Cherokee', Amount: '$33,800', Tier: 'Tier 4', Status: 'Decline' }
    ],
    sideTitle: 'Manual Decision Panel',
    sideItems: ['Risk score 642/900','Default probability 7.8%','Confidence 87.6%','Approve','Conditional approval','Request more docs','Decline'],
    actions: ['Approve','Conditional Approval','Request Docs','Decline']
  }
];

const statusClass = (value = '') => {
  const v = value.toLowerCase();
  if (v.includes('decline') || v.includes('denied') || v.includes('high') || v.includes('late')) return 'status red';
  if (v.includes('pending') || v.includes('review') || v.includes('conditional') || v.includes('medium')) return 'status orange';
  if (v.includes('active') || v.includes('verified') || v.includes('approved') || v.includes('current') || v.includes('ready') || v.includes('completed')) return 'status green';
  return 'status blue';
};

function MetricCard({ metric }: { metric: Metric }) {
  return <div className={`metric ${metric.tone || 'blue'}`}><span>{metric.label}</span><strong>{metric.value}</strong><small>{metric.delta || 'Live'}</small></div>;
}

function DataTable({ rows }: { rows: Row[] }) {
  const headers = Object.keys(rows[0] || {});
  return <div className="tableWrap"><table><thead><tr>{headers.map(h => <th key={h}>{h}</th>)}</tr></thead><tbody>{rows.map((row, i) => <tr key={i}>{headers.map(h => <td key={h}>{['Status','Risk','Tier'].includes(h) ? <span className={statusClass(row[h])}>{row[h]}</span> : row[h]}</td>)}</tr>)}</tbody></table></div>;
}

export default function App() {
  const [activeId, setActiveId] = useState('loan-servicing');
  const active = useMemo(() => portals.find(p => p.id === activeId) || portals[0], [activeId]);
  const records = active.rows.length * 326;

  return <div className="shell">
    <aside className="sidebar">
      <div className="brand"><div className="mark">AD</div><div><b>AUTO<span>DEFI</span></b><small>DeFi Auto Loan Pool</small></div></div>
      <div className="profile"><strong>{active.badge}</strong><small>0x7a8B...EF23 connected</small></div>
      <nav className="portalNav">{portals.map(p => <button key={p.id} className={p.id === activeId ? 'active' : ''} onClick={() => setActiveId(p.id)}>{p.title.replace(' Dashboard','').replace(' Center','')}</button>)}</nav>
      <div className="sidebarCard"><strong>Project Status</strong><small>Frontend connected to backend-ready API placeholders. Static fallbacks keep the UI usable during integration.</small></div>
    </aside>

    <main className="main">
      <header className="topbar"><div><h1>{active.title}</h1><p>{active.subtitle}</p></div><div className="topActions"><button>All Pools</button><button>May 12, 2025</button><button>Export</button></div></header>
      <section className="metricsGrid">{active.metrics.map(metric => <MetricCard key={metric.label} metric={metric} />)}</section>
      <section className="contentGrid">
        <div className="panel large"><div className="panelHead"><h2>{active.title.replace(' Dashboard','')} Overview</h2><button>View All</button></div><DataTable rows={active.rows} /></div>
        <div className="panel chartPanel"><div className="donut"><div><strong>{records}</strong><small>records</small></div></div><h3>{active.sideTitle}</h3><ul>{active.sideItems.map(item => <li key={item}>{item}</li>)}</ul></div>
      </section>
      <section className="detailGrid">
        <div className="panel"><h3>Workflow Navigation</h3><div className="pills">{active.nav.map(n => <span key={n}>{n}</span>)}</div></div>
        <div className="panel"><h3>Quick Actions</h3><div className="actions">{active.actions.map(a => <button key={a}>{a}</button>)}</div></div>
        <div className="panel"><h3>AutoDeFi Rules</h3><ul>{commonRules.map(rule => <li key={rule}>{rule}</li>)}</ul></div>
      </section>
    </main>
  </div>;
}
