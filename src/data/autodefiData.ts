export type Tone = 'blue' | 'green' | 'purple' | 'orange' | 'red' | 'cyan';

export type Metric = {
  label: string;
  value: string;
  delta?: string;
  note?: string;
  icon: string;
  tone: Tone;
  spark?: number[];
};

export type NavItem = {
  id: string;
  label: string;
  icon: string;
  badge?: string;
  group: 'core' | 'operations' | 'dao' | 'portal';
};

export type DashboardEntry = NavItem & {
  description: string;
  tone: Tone;
};

export type TierPool = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  value: string;
  share: number;
  apy: string;
  utilization: number;
  activeLoans: string;
  delinquency: string;
  tone: Tone;
  asset: string;
  status: string;
  vehicle: string;
};

export type LendingMarket = {
  asset: string;
  subtitle: string;
  supplied: string;
  supplyUnits: string;
  apy: string;
  apyDelta: string;
  utilization: number;
  trend: number[];
  yourSupplied: string;
  yourEarned: string;
  action: 'Supply' | 'Stake';
  icon: string;
};

export const navItems: NavItem[] = [
  { id: 'dashboard-hub', label: 'Dashboard Hub', icon: 'dashboard', group: 'core' },
  { id: 'dashboard', label: 'Command Center', icon: 'dashboard', group: 'core' },
  { id: 'lender-pool', label: 'Lender Pool', icon: 'lender', group: 'core' },
  { id: 'admin-command', label: 'Admin Command', icon: 'admin', group: 'core' },
  { id: 'ai-underwriter', label: 'AI Underwriter', icon: 'analytics', group: 'operations' },
  { id: 'ai-underwriter-v2', label: 'AI Underwriter V2', icon: 'analytics', badge: 'Audit', group: 'operations' },
  { id: 'dealer-marketplace', label: 'Dealer Marketplace', icon: 'dealer', group: 'operations' },
  { id: 'marketplace', label: 'Marketplace', icon: 'capital', group: 'operations' },
  { id: 'marketplace-center', label: 'Marketplace Center', icon: 'capital', group: 'operations' },
  { id: 'liquidation-marketplace', label: 'Liquidation Marketplace', icon: 'car', group: 'operations' },
  { id: 'loan-servicing', label: 'Loan Servicing', icon: 'borrower', group: 'operations' },
  { id: 'collections-recovery', label: 'Collections & Recovery', icon: 'insurance', group: 'operations' },
  { id: 'insurance-claims', label: 'Insurance Claims', icon: 'insurance', group: 'operations' },
  { id: 'insurance-recovery', label: 'Insurance & Recovery', icon: 'insurance', group: 'operations' },
  { id: 'risk-management', label: 'Risk Management', icon: 'risk', group: 'operations' },
  { id: 'risk-security', label: 'Risk & Security', icon: 'shield', group: 'operations' },
  { id: 'audit-security', label: 'Audit & Security', icon: 'audit', group: 'operations' },
  { id: 'borrower-portal', label: 'Borrower Portal', icon: 'borrower', group: 'portal' },
  { id: 'dealer-portal', label: 'Dealer Portal', icon: 'dealer', group: 'portal' },
  { id: 'investor-portal', label: 'Investor Portal', icon: 'lender', group: 'portal' },
  { id: 'capital-yield', label: 'Capital Yield', icon: 'capital', group: 'portal' },
  { id: 'dao-command', label: 'DAO Command Center', icon: 'governance', group: 'dao' },
  { id: 'dao-community', label: 'DAO Community', icon: 'governance', group: 'dao' },
  { id: 'proposals', label: 'Proposals', icon: 'proposals', group: 'dao' },
  { id: 'vote', label: 'Vote', icon: 'vote', group: 'dao' },
  { id: 'treasury', label: 'Treasury', icon: 'treasury', group: 'dao' },
  { id: 'treasury-management', label: 'Treasury Management', icon: 'treasury', group: 'dao' },
  { id: 'staking', label: 'Staking', icon: 'staking', group: 'dao' },
  { id: 'staking-rewards', label: 'Staking Rewards', icon: 'staking', group: 'dao' },
  { id: 'governance', label: 'Governance', icon: 'governance', badge: 'New', group: 'dao' },
  { id: 'dao-governance', label: 'DAO Governance', icon: 'governance', group: 'dao' },
  { id: 'revenue-sharing', label: 'Revenue Sharing', icon: 'revenue', group: 'dao' },
  { id: 'token-utility', label: 'Token Utility', icon: 'token', group: 'dao' },
  { id: 'analytics', label: 'Analytics', icon: 'analytics', group: 'dao' },
];

export const dashboardRegistry: DashboardEntry[] = [
  { id: 'dashboard', label: 'Command Center', icon: 'dashboard', group: 'core', tone: 'blue', description: 'Unified protocol, portfolio, operational, and executive overview.' },
  { id: 'lender-pool', label: 'Lender Pool', icon: 'lender', group: 'core', tone: 'green', description: 'Liquidity, risk-tier allocation, yield, utilization, and lender rewards.' },
  { id: 'admin-command', label: 'Admin Command', icon: 'admin', group: 'core', tone: 'purple', description: 'Identity, access, system controls, integrations, and platform operations.' },
  { id: 'borrower-portal', label: 'Borrower Portal', icon: 'borrower', group: 'portal', tone: 'blue', description: 'Applications, payments, collateral, protection, rewards, and documents.' },
  { id: 'dealer-portal', label: 'Dealer Portal', icon: 'dealer', group: 'portal', tone: 'orange', description: 'Inventory, leads, deals, finance, dealer funding, and F&I products.' },
  { id: 'investor-portal', label: 'Investor Portal', icon: 'lender', group: 'portal', tone: 'green', description: 'Investor portfolio, earnings, allocation, reporting, and opportunities.' },
  { id: 'capital-yield', label: 'Capital & Yield', icon: 'capital', group: 'portal', tone: 'purple', description: 'Loan marketplace, risk pools, portfolio, earnings, and auto-invest.' },
  { id: 'ai-underwriter', label: 'AI Underwriter', icon: 'analytics', group: 'operations', tone: 'cyan', description: 'Application scoring, decision support, bureau analysis, and underwriting.' },
  { id: 'ai-underwriter-v2', label: 'AI Underwriter V2', icon: 'audit', group: 'operations', tone: 'purple', description: 'Shadow-audited AI underwriting modules and decision controls.' },
  { id: 'dealer-marketplace', label: 'Dealer Marketplace', icon: 'dealer', group: 'operations', tone: 'orange', description: 'Dealer inventory, financing opportunities, listings, and transactions.' },
  { id: 'marketplace', label: 'Marketplace', icon: 'capital', group: 'operations', tone: 'blue', description: 'AutoDeFi marketplace listings, filters, financing, and allocation.' },
  { id: 'marketplace-center', label: 'Marketplace Center', icon: 'capital', group: 'operations', tone: 'cyan', description: 'Marketplace operations, offers, settlement, and activity management.' },
  { id: 'liquidation-marketplace', label: 'Liquidation Marketplace', icon: 'car', group: 'operations', tone: 'red', description: 'Recovered collateral listings, liquidation workflows, and settlement.' },
  { id: 'loan-servicing', label: 'Loan Servicing', icon: 'borrower', group: 'operations', tone: 'green', description: 'Active loan schedules, payments, servicing queues, and account health.' },
  { id: 'collections-recovery', label: 'Collections & Recovery', icon: 'insurance', group: 'operations', tone: 'red', description: 'Delinquency, workouts, repossession, collections, and asset recovery.' },
  { id: 'insurance-claims', label: 'Insurance Claims', icon: 'insurance', group: 'operations', tone: 'orange', description: 'Claim intake, assessment, coverage, reserves, and settlement status.' },
  { id: 'insurance-recovery', label: 'Insurance & Recovery', icon: 'insurance', group: 'operations', tone: 'green', description: 'Insurance pool, claims, recoveries, reserves, and protection layers.' },
  { id: 'risk-management', label: 'Risk Management', icon: 'risk', group: 'operations', tone: 'orange', description: 'Exposure, fraud, compliance, policy, alerts, and portfolio risk.' },
  { id: 'risk-security', label: 'Risk & Security', icon: 'shield', group: 'operations', tone: 'red', description: 'Security posture, controls, incidents, audit evidence, and monitoring.' },
  { id: 'audit-security', label: 'Audit & Security', icon: 'audit', group: 'operations', tone: 'cyan', description: 'Contract audits, compliance, access, transaction, and incident monitoring.' },
  { id: 'dao-command', label: 'DAO Command Center', icon: 'governance', group: 'dao', tone: 'purple', description: 'DAO operations, governance status, execution, and community controls.' },
  { id: 'dao-community', label: 'DAO Community', icon: 'governance', group: 'dao', tone: 'cyan', description: 'Community participation, members, resources, announcements, and forum.' },
  { id: 'proposals', label: 'DAO Proposals', icon: 'proposals', group: 'dao', tone: 'blue', description: 'Proposal creation, review, funding, voting, and execution.' },
  { id: 'vote', label: 'DAO Vote', icon: 'vote', group: 'dao', tone: 'purple', description: 'Governance voting, delegation, quorum, snapshots, and history.' },
  { id: 'treasury-management', label: 'Treasury Management', icon: 'treasury', group: 'dao', tone: 'green', description: 'Assets, reserves, budgets, approvals, scenarios, and multi-sig controls.' },
  { id: 'staking-rewards', label: 'Staking Rewards', icon: 'staking', group: 'dao', tone: 'purple', description: 'ADF positions, reward accrual, boosts, distribution, and staking activity.' },
  { id: 'dao-governance', label: 'DAO Governance', icon: 'governance', group: 'dao', tone: 'orange', description: 'Delegates, proposals, parameters, timelocks, and execution controls.' },
];

export const topMetrics: Metric[] = [
  { label: 'Total Liquidity', value: '$38,452,921', delta: '+ 11.32%', note: 'vs last 30d', icon: 'dollar', tone: 'blue', spark: [24,26,28,29,31,30,34,36,35,39,41,45] },
  { label: 'Total Earned (All Time)', value: '$2,145,873', delta: '+ 16.45%', note: 'vs last 30d', icon: 'revenue', tone: 'green', spark: [14,18,21,24,25,28,33,31,38,42,46,51] },
  { label: 'Current Average APY', value: '12.87%', delta: '+ 0.65%', note: 'vs last 7d', icon: 'staking', tone: 'purple', spark: [10,12,11,13,14,12,13,15,14,16,15,17] },
  { label: 'Utilization Rate', value: '32.4%', delta: '+ 3.21%', note: 'vs last 7d', icon: 'analytics', tone: 'orange', spark: [22,24,23,26,28,27,30,29,31,32,31,34] },
  { label: 'Active Lenders', value: '2,846', delta: '+ 12.3%', note: 'vs last 30d', icon: 'lender', tone: 'blue', spark: [20,21,23,24,23,25,27,30,28,31,34,36] },
  { label: 'Insurance Coverage', value: '$12,850,000', note: '92.1% of pool', icon: 'shield', tone: 'green', spark: [80,81,82,84,83,85,87,88,89,90,91,92] }
];

export const sideStats: Metric[] = [
  { label: 'Total Deployed', value: '$57,842,392', delta: '+ 8.32%', note: 'vs last 30d', icon: 'analytics', tone: 'green', spark: [12,13,14,14,16,18,17,21,24,23,29,31] },
  { label: 'Active Borrower Loans', value: '11,293', delta: '+ 15.8%', note: 'vs last 30d', icon: 'borrower', tone: 'green', spark: [8,9,10,11,13,15,15,17,21,24,25,29] },
  { label: 'Health Factor (Pool)', value: '2.41x', note: 'Healthy', icon: 'shield', tone: 'green' },
  { label: 'Next Payout', value: '2d 14h 32m', note: 'Est. May 15, 2025 2:00 PM EST', icon: 'analytics', tone: 'purple' }
];

export const tierPools: TierPool[] = [
  { id: 'tier-1', title: 'Tier 1', subtitle: 'Lowest Risk', description: 'ADF staked collateral or > 1/3 down payment', value: '$16,842,300', share: 40.1, apy: '9.81%', utilization: 31.2, activeLoans: '2,846', delinquency: '0.28%', tone: 'green', asset: '$15.42M', status: 'Healthy', vehicle: '/assets/svg/tier-1-car.svg' },
  { id: 'tier-2', title: 'Tier 2', subtitle: 'Moderate Risk', description: 'Good credit + token down', value: '$9,412,720', share: 24.2, apy: '11.24%', utilization: 34.6, activeLoans: '1,892', delinquency: '1.02%', tone: 'blue', asset: '$9.31M', status: 'Healthy', vehicle: '/assets/svg/tier-2-car.svg' },
  { id: 'tier-3', title: 'Tier 3', subtitle: 'Higher Risk', description: 'Good credit, no money down', value: '$6,781,450', share: 21.0, apy: '14.32%', utilization: 36.8, activeLoans: '1,243', delinquency: '2.61%', tone: 'purple', asset: '$8.08M', status: 'Watch', vehicle: '/assets/svg/tier-3-car.svg' },
  { id: 'tier-4', title: 'Tier 4', subtitle: 'Last Chance', description: 'Off-platform lead to local dealer', value: '$1,985,200', share: 8.4, apy: '18.75%', utilization: 28.1, activeLoans: '412', delinquency: '4.84%', tone: 'red', asset: '$3.21M', status: 'High Risk', vehicle: '/assets/svg/tier-4-car.svg' },
  { id: 'insurance', title: 'Insurance Pool', subtitle: 'Protection Layer', description: 'Backstop for defaults, repos, and recoveries', value: '$3,431,251', share: 6.3, apy: '6.15%', utilization: 12.4, activeLoans: 'Protected', delinquency: '0.00%', tone: 'cyan', asset: '$2.43M', status: 'Protected', vehicle: '/assets/svg/insurance-shield-large.svg' },
  { id: 'dealer', title: 'Dealer Funding', subtitle: 'Reserve', description: 'Funds dealers upon approval', value: '$1,999,250', share: 3.0, apy: 'Reserved', utilization: 100, activeLoans: '67 dealers', delinquency: '4.2h avg', tone: 'orange', asset: '$1.99M', status: 'Available', vehicle: '/assets/svg/dealer-funding-stack.svg' }
];

export const lendingMarkets: LendingMarket[] = [
  { asset: 'USDC', subtitle: 'USD Coin', supplied: '$14,250,341', supplyUnits: '16.4M USDC', apy: '11.25%', apyDelta: '+ 0.85%', utilization: 28.3, trend: [24,28,25,34,31,42,36,47,44,52,48,58], yourSupplied: '2,500.00 USDC', yourEarned: '$28.45 +11.24 USDC', action: 'Supply', icon: 'dollar' },
  { asset: 'USDT', subtitle: 'Tether USD', supplied: '$8,742,651', supplyUnits: '8.74M USDT', apy: '10.65%', apyDelta: '+ 0.62%', utilization: 31.7, trend: [22,26,30,28,36,31,42,39,46,44,52,57], yourSupplied: '1,200.00 USDT', yourEarned: '$12.87 +12.87 USDT', action: 'Supply', icon: 'token' },
  { asset: 'DAI', subtitle: 'Dai Stablecoin', supplied: '$2,030,145', supplyUnits: '2.03M DAI', apy: '9.78%', apyDelta: '+ 0.33%', utilization: 40.1, trend: [12,18,16,27,24,35,31,42,36,50,44,58], yourSupplied: '500.00 DAI', yourEarned: '$3.98 +3.98 DAI', action: 'Supply', icon: 'dollar' },
  { asset: 'USDe', subtitle: 'Ethena USD', supplied: '$1,245,887', supplyUnits: '1.24M USDe', apy: '12.12%', apyDelta: '+ 1.05%', utilization: 27.6, trend: [20,24,22,29,26,33,31,39,35,44,41,48], yourSupplied: '350.00 USDe', yourEarned: '$4.21 +4.21 USDe', action: 'Supply', icon: 'token' },
  { asset: 'ADF Staking', subtitle: 'Collateral Pool', supplied: '$3,812,800', supplyUnits: '4.36M ADF', apy: '15.32%', apyDelta: '+ 1.42%', utilization: 22.4, trend: [21,23,28,26,34,32,41,38,46,44,52,57], yourSupplied: '1,000.00 ADF', yourEarned: '$15.32 +15.32 ADF', action: 'Stake', icon: 'staking' }
];

export const portfolioAllocation = [
  { label: 'USDC', value: 40.3, tone: 'blue' as Tone },
  { label: 'ADF', value: 32.2, tone: 'purple' as Tone },
  { label: 'USDT', value: 19.4, tone: 'green' as Tone },
  { label: 'ETH', value: 6.1, tone: 'red' as Tone },
  { label: 'DAI', value: 2.0, tone: 'orange' as Tone }
];

export const riskDistribution = [
  { label: 'Tier 1 (Low Risk)', value: 42.8, amount: '$16.45M', tone: 'blue' as Tone },
  { label: 'Tier 2 (Medium-Low)', value: 24.0, amount: '$9.21M', tone: 'green' as Tone },
  { label: 'Tier 3 (Medium-High)', value: 22.8, amount: '$8.78M', tone: 'purple' as Tone },
  { label: 'Tier 4 (High Risk)', value: 5.2, amount: '$2.01M', tone: 'red' as Tone },
  { label: 'Insurance-Backed', value: 5.2, amount: '$2.00M', tone: 'orange' as Tone }
];

export const revenueDistribution = [
  { label: 'Lenders Yield', amount: '$105,943.72', pct: 41.72, change: '+ 16.4%', purpose: 'Lender interest payments', tone: 'blue' as Tone },
  { label: 'ADF Staking Rewards', amount: '$50,762.87', pct: 19.97, change: '+ 18.7%', purpose: 'Stakers & ecosystem incentives', tone: 'purple' as Tone },
  { label: 'Insurance Fund', amount: '$38,072.15', pct: 14.99, change: '+ 12.1%', purpose: 'Risk protection & claims', tone: 'green' as Tone },
  { label: 'Treasury & DAO Reserve', amount: '$25,381.44', pct: 10.00, change: '+ 10.2%', purpose: 'DAO ops & development', tone: 'orange' as Tone },
  { label: 'Protocol Fee', amount: '$19,053.58', pct: 7.51, change: '+ 8.3%', purpose: 'Platform operations', tone: 'red' as Tone },
  { label: 'Partner & Referrals', amount: '$14,600.60', pct: 5.75, change: '+ 9.6%', purpose: 'Ecosystem partners', tone: 'orange' as Tone }
];

export const fundingPipeline = [
  { stage: 'Application Submitted', count: '256', amount: '$9,842,150', avg: '$38,446', time: '1.2 days', tone: 'blue' as Tone, progress: 100 },
  { stage: 'Under Review', count: '183', amount: '$7,128,420', avg: '$38,958', time: '2.1 days', tone: 'green' as Tone, progress: 72 },
  { stage: 'Approved', count: '128', amount: '$4,821,300', avg: '$37,666', time: '1.8 days', tone: 'green' as Tone, progress: 50 },
  { stage: 'In Funding Queue', count: '67', amount: '$1,166,444', avg: '$17,408', time: '1.3 days', tone: 'orange' as Tone, progress: 26 },
  { stage: 'Funded', count: '412', amount: '$15,842,230', avg: '$38,452', time: '2.4 days', tone: 'purple' as Tone, progress: 82 }
];

export const recentActivity = [
  { title: 'New Lender', detail: '0x5a2B...dEF3 supplied 25,000 USDC', time: '2h ago', icon: 'lender' },
  { title: 'Large Supply', detail: '0x7f89...Dd31 supplied 100,000 USDT', time: '4h ago', icon: 'dollar' },
  { title: 'Earnings Distributed', detail: '$56,321.45 distributed to 2,846 lenders', time: '8h ago', icon: 'revenue' },
  { title: 'Insurance Top-up', detail: '$500,000 added to Insurance Fund', time: '1d ago', icon: 'insurance' },
  { title: 'Pool Rebalanced', detail: 'Rebalanced across Tier 1 & Tier 2', time: '2d ago', icon: 'analytics' }
];

export const proposals = [
  { title: 'ZONYCS recovery auction allocation', status: 'Active', votes: '72.8% For', detail: 'Allocate recovered assets to ZONYCS auction and lender recovery reserve.', tone: 'green' as Tone },
  { title: 'Marketing budget Q2', status: 'Active', votes: '64.1% For', detail: 'Fund dealer onboarding, borrower acquisition, and regional launch campaigns.', tone: 'purple' as Tone },
  { title: 'New collateral types', status: 'Review', votes: '58.3% For', detail: 'Allow verified ADF collateral boosts and qualified vehicle protection products.', tone: 'blue' as Tone },
  { title: 'Reduce staking rewards', status: 'Discussion', votes: '41.7% For', detail: 'Rebalance ADF emissions toward insurance reserves and long-term liquidity.', tone: 'orange' as Tone },
  { title: 'Insurance recovery auction reserve', status: 'Queued', votes: '69.4% For', detail: 'Create dedicated reserve for repossession, claims, and workout recovery.', tone: 'green' as Tone }
];

export const modulePages = {
  dashboard: {
    title: 'AutoDeFi Command Dashboard',
    subtitle: 'Unified front end for borrower, dealer, lender, DAO, treasury, risk, and recovery operations.',
    cards: [
      ['Borrower Portal', 'Applications, payments, autopay, refinance, insurance, collateral, wallet, documents.'],
      ['Dealer Portal', 'Inventory, leads, deals, finance, funding center, F&I products, referrals, ZONYCS listings.'],
      ['Capital Yield', 'Loan marketplace, risk tier pools, earnings, auto-invest, statements, reports.'],
      ['DAO & Community', 'Proposals, voting, treasury, tokenomics, delegation, members, resources.'],
      ['Risk & Security', 'Fraud detection, exposure monitor, compliance, identity verification, audit logs.'],
      ['Insurance & Recovery', 'Claims, collections, delinquent loans, repossession queue, workouts, payment plans.']
    ]
  },
  'borrower-portal': {
    title: 'Borrower Portal',
    subtitle: 'Pre-qualification, loan applications, repayment rails, collateral, and protection products.',
    cards: [
      ['Pre-Qualification', 'Identity, KYC/AML, credit profile, income, debt-to-service, loan calculator.'],
      ['My Loans', 'Payment frequency, early payout, payoff quote, autopay and stable-value rail status.'],
      ['Collateral', 'Vehicle details, optional ADF collateral, LTV, insurance protection, documents.'],
      ['Rewards & Wallet', 'ADF rewards, wallet connection, statements, notifications, support.']
    ]
  },
  'dealer-portal': {
    title: 'Dealer Portal',
    subtitle: 'Dealer onboarding, inventory, leads, finance, funding, and marketplace recovery flow.',
    cards: [
      ['Inventory', 'Single/bulk vehicle add, VIN decode, build sheet, vehicle history, ZONYCS listing.'],
      ['Deals Pipeline', 'New, in progress, pending, approved, declined, funded, monthly review.'],
      ['Finance Center', 'Submission window, address, residence, employment, tier options, lender selection.'],
      ['Funding Center', 'Approved deals paid in full to dealer, disbursement tracking and reserve status.']
    ]
  },
  'capital-yield': {
    title: 'Capital Yield Portal',
    subtitle: 'Investor-facing liquidity, portfolio, earnings, transactions, reports, and auto-invest controls.',
    cards: [
      ['Loan Marketplace', 'Search by tier, APR, LTV, term, dealer, geography, and insurance coverage.'],
      ['Portfolio', 'Risk tier allocation, APY, health factor, earnings, statements and documents.'],
      ['Auto-Invest', 'Rules by tier, reserve thresholds, utilization caps, and reinvestment settings.'],
      ['Reports', 'Monthly statements, tax exports, realized yield, and risk reports.']
    ]
  },
  'insurance-recovery': {
    title: 'Insurance & Recovery',
    subtitle: 'Claims, collections, delinquency, repossession, workouts, and recovery asset controls.',
    cards: [
      ['Claims Center', 'Insurance claims, coverage ratio, protection products and claim status.'],
      ['Collections', 'Delinquent loans, payment plans, workouts, borrower outreach.'],
      ['Repossession Queue', 'Recovery assets, agent status, title workflow, legal notices.'],
      ['ZONYCS Recovery', 'Auction/sale/raffle allocation for recovered collateral and lender backstop.']
    ]
  },
  'admin-command': {
    title: 'Admin Command Center',
    subtitle: 'Operational control center for profile, wallet, KYC, insurance pool, DAO, staking, and dealer access.',
    cards: [
      ['Identity & Access', 'Profile, wallet, KYC verified, notifications, roles and access controls.'],
      ['Borrow / Invest', 'Apply now, invest, insurance pool, staking rewards, marketplace.'],
      ['Dealer Access', 'Dealer invite, verification, portal permissions, location and funding controls.'],
      ['System Controls', 'Integrations, API keys, webhooks, data retention, audit logs, maintenance.']
    ]
  }
} as const;
