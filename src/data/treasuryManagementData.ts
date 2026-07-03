import type { Tone } from './autodefiData';

export type TreasuryPageId = 'dashboard' | 'assets' | 'allocations' | 'revenue-streams' | 'reserves' | 'expenditures' | 'budgeting' | 'reports' | 'audit-logs';
export type TreasuryKpi = { label: string; value: string; delta?: string; note?: string; tone: Tone; icon: string; spark?: number[] };
export type TreasurySlice = { label: string; value: number; amount?: string; tone: Tone; meta?: string };
export type ProgressMetric = { label: string; amount?: string; value: number; note?: string; tone: Tone; status?: string };
export type TreasuryTransaction = { type: string; description: string; amount: string; asset: string; date: string; hash: string; tone: Tone; status?: string };

type PageMeta = { title: string; subtitle: string; exportLabel: string; showFilters?: boolean; dateLabel?: string };

export const treasuryPages: { id: TreasuryPageId; label: string; icon: string }[] = [
  { id: 'dashboard', label: 'Dashboard', icon: '⌂' },
  { id: 'assets', label: 'Treasury Assets', icon: '▣' },
  { id: 'allocations', label: 'Allocations', icon: '▥' },
  { id: 'revenue-streams', label: 'Revenue Streams', icon: '↗' },
  { id: 'reserves', label: 'Reserves', icon: '⬡' },
  { id: 'expenditures', label: 'Expenditures', icon: '▧' },
  { id: 'budgeting', label: 'Budgeting', icon: '◫' },
  { id: 'reports', label: 'Reports', icon: '▤' },
  { id: 'audit-logs', label: 'Audit Logs', icon: '⌘' }
];

export const treasuryPageMeta: Record<TreasuryPageId, PageMeta> = {
  dashboard: { title: 'Treasury Management Center', subtitle: 'Oversee and optimize AutoDeFi treasury operations', exportLabel: 'Export', dateLabel: 'May 12, 2025' },
  assets: { title: 'Treasury Assets', subtitle: 'Monitor, analyze and manage all AutoDeFi treasury assets in real-time', exportLabel: 'Export', showFilters: true, dateLabel: 'May 12, 2025' },
  allocations: { title: 'Allocations', subtitle: 'Strategic allocation and optimization of AutoDeFi treasury resources', exportLabel: 'Export', showFilters: true, dateLabel: 'May 12, 2025' },
  'revenue-streams': { title: 'Revenue Streams', subtitle: 'Monitor and optimize AutoDeFi treasury revenue generation', exportLabel: 'Export', showFilters: true, dateLabel: 'May 12, 2025' },
  reserves: { title: 'Reserves', subtitle: 'Monitor, protect and optimize all AutoDeFi reserve pools', exportLabel: 'Export', showFilters: true, dateLabel: 'May 12, 2025' },
  expenditures: { title: 'Expenditures', subtitle: 'Track, manage and optimize all AutoDeFi treasury expenditures in real-time.', exportLabel: 'Export', showFilters: true, dateLabel: 'May 12, 2025' },
  budgeting: { title: 'Budgeting', subtitle: 'Plan, track and optimize AutoDeFi treasury budgets across all departments and initiatives.', exportLabel: 'Export', showFilters: true, dateLabel: 'May 12, 2025' },
  reports: { title: 'Reports', subtitle: 'Comprehensive insights and analytics on AutoDeFi treasury performance.', exportLabel: 'Export', showFilters: true, dateLabel: 'May 12, 2025' },
  'audit-logs': { title: 'Audit Logs', subtitle: 'Comprehensive audit trail of all treasury activities and system actions.', exportLabel: 'Export Logs', showFilters: true, dateLabel: 'May 12, 2025 - May 12, 2025' }
};

export const treasuryStatus = { label: 'Treasury Status', value: 'Healthy', riskScore: '18 / 100', utilization: '24.3%', runway: '18.2 Months' };

export const treasuryCommonKpis: TreasuryKpi[] = [
  { label: 'Total Treasury Value', value: '$24.67M', delta: '↑ 13.35%', note: 'vs last 30d', icon: '🏛', tone: 'blue', spark: [16, 18, 17, 22, 19, 24, 27, 25, 21, 19, 23, 24] },
  { label: 'Stablecoins', value: '$18.42M', delta: '↑ 7.17%', note: 'vs last 30d', icon: '$', tone: 'purple', spark: [22, 20, 26, 23, 25, 21, 19, 18, 20, 21, 24, 22] },
  { label: 'Token Holdings', value: '$4.12M', delta: '↑ 16.7%', note: 'vs last 30d', icon: '◎', tone: 'blue', spark: [14, 16, 20, 18, 22, 27, 26, 22, 17, 16, 18, 21] },
  { label: 'Other Assets', value: '$2.13M', delta: '↑ 6.6%', note: 'vs last 30d', icon: '◇', tone: 'orange', spark: [19, 17, 22, 18, 21, 16, 15, 17, 20, 18, 22, 20] },
  { label: 'Monthly Revenue', value: '$1.24M', delta: '↑ 21.3%', note: 'vs last 30d', icon: '↗', tone: 'green', spark: [12, 14, 13, 18, 20, 16, 17, 15, 16, 19, 21, 23] },
  { label: 'Monthly Expenses', value: '$342.11K', delta: '↓ 4.31%', note: 'vs last 30d', icon: '↘', tone: 'red', spark: [23, 21, 22, 19, 20, 18, 17, 16, 18, 19, 21, 20] }
];

export const dashboardAllocation: TreasurySlice[] = [
  { label: 'Lending Reserves', amount: '$11.15M', value: 45.2, tone: 'green' },
  { label: 'Insurance Reserves', amount: '$5.48M', value: 22.2, tone: 'purple' },
  { label: 'Operations', amount: '$3.11M', value: 12.6, tone: 'blue' },
  { label: 'Growth & Development', amount: '$2.57M', value: 10.4, tone: 'orange' },
  { label: 'Marketing', amount: '$1.26M', value: 5.1, tone: 'cyan' },
  { label: 'Liquidity', amount: '$0.89M', value: 3.6, tone: 'orange' }
];

export const revenueStreams: ProgressMetric[] = [
  { label: 'Interest Income', amount: '$642.19K', value: 67, tone: 'blue', note: '67.0%' },
  { label: 'Insurance Fees', amount: '$182.35K', value: 19, tone: 'purple', note: '19.0%' },
  { label: 'Origination Fees', amount: '$112.35K', value: 8.1, tone: 'blue', note: '8.1%' },
  { label: 'Liquidation Fees', amount: '$54.58K', value: 4.5, tone: 'blue', note: '4.5%' },
  { label: 'DAO Fees', amount: '$48.11K', value: 3.9, tone: 'blue', note: '3.9%' }
];

export const reserveHealth: [string, string, string, Tone][] = [
  ['Lending Reserve Ratio', '18.6%', 'Healthy', 'green'],
  ['Insurance Reserve Ratio', '182.6%', 'Strong', 'green'],
  ['Liquidity Ratio', '24.3%', 'Strong', 'green'],
  ['Operational Runway', '18.2 Months', 'Strong', 'green']
];

export const recentTreasuryTransactions: TreasuryTransaction[] = [
  { type: 'Revenue', description: 'Interest Income - Loans', amount: '+ $842,160', asset: 'USDC', date: 'May 12, 2025', hash: '0xf0c2...2f18', tone: 'green' },
  { type: 'Expense', description: 'Development Payroll', amount: '- $135,400', asset: 'USDC', date: 'May 12, 2025', hash: '0xf3be...4e21', tone: 'red' },
  { type: 'Revenue', description: 'Insurance Premiums', amount: '+ $182,340', asset: 'USDC', date: 'May 11, 2025', hash: '0x9dbe...9d71', tone: 'green' },
  { type: 'Expense', description: 'Marketing Campaign', amount: '- $38,750', asset: 'USDC', date: 'May 10, 2025', hash: '0xef3b...7c92', tone: 'red' },
  { type: 'Revenue', description: 'Liquidation Fees', amount: '+ $54,580', asset: 'USDC', date: 'May 10, 2025', hash: '0x7a1c...8b44', tone: 'green' }
];

export const assetComposition: TreasurySlice[] = [
  { label: 'Stablecoins', amount: '$18.42M', value: 74.7, tone: 'purple' },
  { label: 'Token Holdings', amount: '$4.12M', value: 16.7, tone: 'blue' },
  { label: 'Other Crypto Assets', amount: '$1.32M', value: 5.4, tone: 'orange' },
  { label: 'Real World Assets', amount: '$0.63M', value: 2.6, tone: 'orange' },
  { label: 'Cash', amount: '$0.18M', value: 0.6, tone: 'cyan' }
];

export const assetsByNetwork: ProgressMetric[] = [
  { label: 'Ethereum', amount: '$9.42M', value: 38.2, tone: 'blue', note: '38.2%' },
  { label: 'Hedera', amount: '$4.37M', value: 17.7, tone: 'green', note: '17.7%' },
  { label: 'Polygon', amount: '$4.28M', value: 17.3, tone: 'purple', note: '17.3%' },
  { label: 'Binance Smart Chain', amount: '$3.91M', value: 15.9, tone: 'orange', note: '15.9%' },
  { label: 'Arbitrum', amount: '$2.67M', value: 10.8, tone: 'blue', note: '10.8%' },
  { label: 'Other Networks', amount: '$0.02M', value: 0.1, tone: 'cyan', note: '0.1%' }
];

export const topTreasuryAssets = [
  ['USDC', 'Stablecoin', 'Ethereum', '9,845,210 USDC', '$9.84M', '39.9%', '↑ 7.23%'],
  ['USDT', 'Stablecoin', 'Ethereum', '6,125,430 USDT', '$6.12M', '24.8%', '↑ 6.41%'],
  ['ADF', 'Governance Token', 'Hedera', '2,450,000 ADF', '$2.45M', '9.93%', '↑ 18.2%'],
  ['HBAR', 'Token', 'Hedera', '1,850,000 HBAR', '$0.92M', '3.73%', '↑ 9.12%'],
  ['DAI', 'Stablecoin', 'Ethereum', '1,245,320 DAI', '$1.24M', '5.03%', '↑ 3.84%'],
  ['ETH', 'Cryptocurrency', 'Ethereum', '350.25 ETH', '$0.89M', '3.61%', '↑ 5.33%']
];
export const assetActivity = [['Deposit', 'USDC', '+1,250,000', '2h ago', 'Completed'], ['Swap', 'USDT → USDC', '-250,000', '4h ago', 'Completed'], ['Purchase', 'ADF', '+120,000', '6h ago', 'Completed'], ['Withdraw', 'ETH', '-25.50', '12h ago', 'Completed'], ['Stake', 'ADF', '+80,000', '1d ago', 'Completed']];

export const allocationKpis: TreasuryKpi[] = [
  { label: 'Total Allocated', value: '$24.67M', delta: '94.2%', note: 'of total treasury', icon: '◔', tone: 'blue' },
  { label: 'Protected Reserves', value: '$1.48M', delta: '5.8%', note: 'subset of allocation', icon: '▣', tone: 'cyan' },
  { label: 'Active Allocations', value: '12', note: 'Across 6 categories', icon: '⌘', tone: 'purple' },
  { label: 'Avg. Allocation Yield', value: '12.84%', note: 'Weighted average APY', icon: '↗', tone: 'green' },
  { label: 'Rebalancing Status', value: 'On Track', note: 'Next review in 4 days', icon: '⟳', tone: 'green' },
  { label: 'Utilization Rate', value: '24.3%', note: 'Within optimal range', icon: '◜', tone: 'orange' }
];
export const allocationOverview: TreasurySlice[] = [
  { label: 'Lending Reserves', amount: '$8.76M', value: 35.6, tone: 'blue' },
  { label: 'Insurance Reserve', amount: '$5.47M', value: 22.2, tone: 'purple' },
  { label: 'Operations', amount: '$3.10M', value: 12.6, tone: 'blue' },
  { label: 'Growth & Development', amount: '$2.56M', value: 10.4, tone: 'orange' },
  { label: 'Marketing', amount: '$1.25M', value: 5.1, tone: 'cyan' },
  { label: 'Liquidity', amount: '$0.89M', value: 3.6, tone: 'orange' },
  { label: 'DAO Treasury', amount: '$0.64M', value: 2.6, tone: 'green' },
  { label: 'Contingency', amount: '$0.18M', value: 0.6, tone: 'red' }
];
export const allocationPerformance = [['Lending Reserves', '$8.76M', '$8.98M', '14.25%', '↑ 2.51%'], ['Insurance Reserve', '$5.47M', '$5.50M', '8.76%', '↑ 1.32%'], ['Operations', '$3.10M', '$3.14M', '5.21%', '↑ 0.78%'], ['Growth & Development', '$2.56M', '$2.63M', '15.42%', '↑ 3.21%'], ['Marketing', '$1.25M', '$1.28M', '11.18%', '↑ 1.84%'], ['Liquidity', '$0.89M', '$0.89M', '4.15%', '↑ 0.12%']];
export const protocolAllocations = [['Aave V3', 'Lending Reserves', '$3.25M', '$3.36M', '13.92%', 'Active'], ['Compound V3', 'Lending Reserves', '$2.48M', '$2.53M', '12.45%', 'Active'], ['Maple Finance', 'Lending Reserves', '$1.85M', '$1.91M', '15.32%', 'Active'], ['Euler Finance', 'Lending Reserves', '$1.18M', '$1.19M', '11.08%', 'Active'], ['Uniswap V3 (USDC)', 'Liquidity', '$0.52M', '$0.52M', '6.21%', 'Active'], ['USDC Treasury', 'Operations', '$1.25M', '$1.27M', '4.85%', 'Active']];

export const revenueKpis: TreasuryKpi[] = [
  { label: 'Total Revenue', value: '$1.24M', delta: '↑ 21.3%', note: 'vs last 30d', icon: '↗', tone: 'green', spark: [12, 14, 13, 16, 19, 17, 15, 16, 17, 20, 22, 24] },
  { label: 'Interest Income', value: '$642.19K', delta: '↑ 18.6%', note: 'vs last 30d', icon: '🏛', tone: 'blue', spark: [12, 16, 21, 19, 24, 23, 20, 22, 25, 24, 28, 26] },
  { label: 'Insurance Fees', value: '$182.35K', delta: '↑ 19.0%', note: 'vs last 30d', icon: '⬡', tone: 'purple', spark: [11, 13, 12, 15, 14, 13, 15, 16, 14, 17, 18, 19] },
  { label: 'Origination Fees', value: '$112.35K', delta: '↑ 16.7%', note: 'vs last 30d', icon: '▧', tone: 'orange', spark: [8, 11, 10, 14, 12, 13, 12, 11, 15, 16, 18, 17] },
  { label: 'Recurring Revenue', value: '78.4%', delta: '↑ 4.6%', note: 'vs last 30d', icon: '⟳', tone: 'green', spark: [68, 70, 72, 71, 73, 75, 72, 74, 76, 75, 77, 78] },
  { label: 'Revenue Growth', value: '+21.3%', delta: '↑', note: 'vs last 30d', icon: '↗', tone: 'green', spark: [8, 11, 10, 12, 11, 14, 15, 13, 17, 18, 20, 21] }
];
export const revenueBreakdown: TreasurySlice[] = [{ label: 'Interest Income', amount: '$642.19K', value: 51.7, tone: 'blue' }, { label: 'Insurance Fees', amount: '$182.35K', value: 14.7, tone: 'purple' }, { label: 'Origination Fees', amount: '$112.35K', value: 9.1, tone: 'orange' }, { label: 'Liquidation Fees', amount: '$54.58K', value: 4.4, tone: 'orange' }, { label: 'DAO Fees', amount: '$48.11K', value: 3.9, tone: 'cyan' }, { label: 'Staking Yield', amount: '$205.41K', value: 16.5, tone: 'red' }];
export const revenueTransactions: TreasuryTransaction[] = [{ type: 'Revenue', description: 'Interest Income - Lending', amount: '+ $28,450.32', asset: 'USDC', date: 'May 12, 2025', hash: '0x3f9a...7e21', tone: 'green' }, { type: 'Revenue', description: 'Insurance Fee - Protocol', amount: '+ $12,845.00', asset: 'USDC', date: 'May 12, 2025', hash: '0x8d2b...4a91', tone: 'green' }, { type: 'Revenue', description: 'Origination Fee - Loan', amount: '+ $8,720.15', asset: 'USDC', date: 'May 12, 2025', hash: '0xb1c7...d623', tone: 'green' }, { type: 'Revenue', description: 'Liquidation Fee - Collateral', amount: '+ $5,430.78', asset: 'USDC', date: 'May 12, 2025', hash: '0x5e21...9b84', tone: 'green' }, { type: 'Revenue', description: 'Staking Yield - ADF', amount: '+ $18,365.42', asset: 'ADF', date: 'May 12, 2025', hash: '0x9a6f...3c71', tone: 'green' }];

export const reserveKpis: TreasuryKpi[] = [{ label: 'Total Reserve Balance', value: '$1.48M', delta: '5.8%', note: 'of total treasury', icon: '▣', tone: 'blue' }, { label: 'Lending Reserve', value: '$672.45K', delta: '↑ 45.4%', note: 'of reserves', icon: '🏛', tone: 'blue' }, { label: 'Insurance Reserve', value: '$329.18K', delta: '↑ 22.2%', note: 'of reserves', icon: '⬡', tone: 'purple' }, { label: 'Liquidity Reserve', value: '$278.60K', delta: '↑ 18.8%', note: 'of reserves', icon: '◌', tone: 'green' }, { label: 'DAO Reserve', value: '$132.40K', delta: '↑ 8.9%', note: 'of reserves', icon: '◈', tone: 'orange' }, { label: 'Contingency Reserve', value: '$75.37K', delta: '↑ 5.1%', note: 'of reserves', icon: '◇', tone: 'red' }];
export const reserveComposition: TreasurySlice[] = [{ label: 'Lending Reserve', amount: '$672.45K', value: 45.4, tone: 'blue' }, { label: 'Insurance Reserve', amount: '$329.18K', value: 22.2, tone: 'purple' }, { label: 'Liquidity Reserve', amount: '$278.60K', value: 18.8, tone: 'green' }, { label: 'DAO Reserve', amount: '$132.40K', value: 8.9, tone: 'orange' }, { label: 'Contingency Reserve', amount: '$75.37K', value: 5.1, tone: 'red' }];
export const reserveHealthRows = [['Lending Reserve', '$672.45K', '92 / 100', 'Healthy', '40% - 60%'], ['Insurance Reserve', '$329.18K', '88 / 100', 'Healthy', '20% - 30%'], ['Liquidity Reserve', '$278.60K', '85 / 100', 'Strong', '15% - 25%'], ['DAO Reserve', '$132.40K', '80 / 100', 'Strong', '5% - 10%'], ['Contingency Reserve', '$75.37K', '75 / 100', 'Good', '3% - 8%']];
export const reserveAdequacy: ProgressMetric[] = [{ label: 'Loan Default Coverage', amount: '142%', value: 64, tone: 'blue', status: 'Healthy' }, { label: 'Insurance Claim Coverage', amount: '188%', value: 78, tone: 'blue', status: 'Strong' }, { label: 'Liquidity Coverage Ratio', amount: '1.84x', value: 72, tone: 'blue', status: 'Strong' }, { label: 'Operational Coverage', amount: '18.2 Months', value: 64, tone: 'blue', status: 'Strong' }, { label: 'Stress Test Resilience', amount: '82%', value: 76, tone: 'blue', status: 'Strong' }];
export const reserveTransactions: TreasuryTransaction[] = [{ type: 'Deposit', description: 'Capital Allocation', amount: '+ $125,000', asset: 'Lending Reserve', date: 'May 12, 2025', hash: '0x7a2b...9c1d', tone: 'green' }, { type: 'Deposit', description: 'Insurance Premiums', amount: '+ $58,420', asset: 'Insurance Reserve', date: 'May 12, 2025', hash: '0x5f3c...a2e1', tone: 'green' }, { type: 'Withdrawal', description: 'Market Maker Payout', amount: '- $32,150', asset: 'Liquidity Reserve', date: 'May 11, 2025', hash: '0x9d1e...b3f2', tone: 'red' }, { type: 'Transfer', description: 'DAO Budget Allocation', amount: '- $15,000', asset: 'DAO Reserve', date: 'May 11, 2025', hash: '0x3c4d...e5f6', tone: 'orange' }, { type: 'Deposit', description: 'Risk Adjustment', amount: '+ $10,000', asset: 'Contingency Reserve', date: 'May 10, 2025', hash: '0x8b7a...d1c2', tone: 'green' }];

export const expenditureKpis: TreasuryKpi[] = [{ label: 'Total Spent', value: '$1.03M', delta: '↓ 8.7%', note: 'vs last 30d', icon: '⌛', tone: 'purple' }, { label: 'This Month Spent', value: '$342.11K', delta: '↓ 5.2%', note: 'vs last month', icon: '▣', tone: 'blue' }, { label: 'Budget Utilization', value: '41.61%', note: 'On track', icon: '◜', tone: 'orange' }, { label: 'Approved Spending', value: '$967.24K', delta: '93.9%', note: 'of total spent', icon: '✓', tone: 'green' }, { label: 'Over Budget', value: '$36.88K', delta: '↓ 3.6%', note: 'of total spent', icon: '!', tone: 'red' }, { label: 'Avg. Approval Time', value: '12.4 hrs', delta: '↓ 18.3%', note: 'vs last 30d', icon: '▦', tone: 'cyan' }];
export const expendituresByCategory: TreasurySlice[] = [{ label: 'Operations', amount: '$312.45K', value: 30.3, tone: 'blue' }, { label: 'Development', amount: '$246.18K', value: 23.9, tone: 'purple' }, { label: 'Marketing', amount: '$158.62K', value: 15.4, tone: 'green' }, { label: 'Infrastructure', amount: '$121.37K', value: 11.8, tone: 'orange' }, { label: 'Team & Payroll', amount: '$96.34K', value: 9.4, tone: 'cyan' }, { label: 'Legal & Compliance', amount: '$58.21K', value: 5.7, tone: 'orange' }, { label: 'Community & Grants', amount: '$36.94K', value: 3.6, tone: 'red' }];
export const expenditureRows = [['EXP-2025-0512-001', 'Cloud Infrastructure (AWS)', 'Infrastructure', '-$18,450', 'Approved', 'Treasury DAO', 'May 12, 2025', '0x7a2b...9c1d'], ['EXP-2025-0512-002', 'Smart Contract Audit', 'Legal & Compliance', '-$12,500', 'Approved', 'Security Council', 'May 12, 2025', '0x5f3c...a2e1'], ['EXP-2025-0511-003', 'Marketing Campaign', 'Marketing', '-$24,800', 'Approved', 'Marketing Lead', 'May 11, 2025', '0x9d1e...b3f2'], ['EXP-2025-0511-004', 'Developer Bounties', 'Development', '-$15,600', 'Approved', 'DAO Council', 'May 11, 2025', '0x3c4d...e5f6'], ['EXP-2025-0510-005', 'Team Payroll (May)', 'Team & Payroll', '-$42,750', 'Approved', 'Treasury DAO', 'May 10, 2025', '0x8b7a...d1c2']];
export const approvalRows = [['REQ-2025-0512-009', 'New Website Design', '$12,450', 'Marketing Lead', 'Pending', 'May 12, 2025'], ['REQ-2025-0512-010', 'Bug Bounty Program', '$8,900', 'Security Council', 'Pending', 'May 12, 2025'], ['REQ-2025-0511-011', 'Community Event', '$6,000', 'Community Lead', 'Pending', 'May 11, 2025'], ['REQ-2025-0511-012', 'Legal Consultation', '$5,000', 'Legal Advisor', 'Approved', 'May 11, 2025'], ['REQ-2025-0510-013', 'Server Upgrade', '$9,750', 'DevOps Lead', 'Approved', 'May 10, 2025']];

export const budgetKpis: TreasuryKpi[] = [{ label: 'Total Budget (FY 2025)', value: '$2.45M', note: '100% of total budget', icon: '▣', tone: 'blue' }, { label: 'Total Allocated', value: '$2.38M', note: '97.1% of total budget', icon: '◔', tone: 'purple' }, { label: 'Total Spent', value: '$1.03M', note: '42.0% of total budget', icon: '◆', tone: 'red' }, { label: 'Remaining Budget', value: '$1.42M', delta: '58.0%', note: 'remaining', icon: '▰', tone: 'green' }, { label: 'Budget Utilization', value: '41.61%', note: 'On track', icon: '◜', tone: 'orange' }, { label: 'Forecasted Variance', value: '+$124.5K', delta: '5.1%', note: 'favorable', icon: '⌁', tone: 'cyan' }];
export const budgetOverview: TreasurySlice[] = [{ label: 'Operations', amount: '$612.45K', value: 25, tone: 'blue' }, { label: 'Development', amount: '$489.30K', value: 20, tone: 'purple' }, { label: 'Marketing', amount: '$367.50K', value: 15, tone: 'green' }, { label: 'Infrastructure', amount: '$303.80K', value: 12.4, tone: 'orange' }, { label: 'Team & Payroll', amount: '$269.50K', value: 11, tone: 'cyan' }, { label: 'Legal & Compliance', amount: '$171.50K', value: 7, tone: 'orange' }, { label: 'Community & Grants', amount: '$122.45K', value: 5, tone: 'red' }, { label: 'Contingency', amount: '$122.45K', value: 5, tone: 'purple' }];
export const budgetRows = [['Operations', '$612.45K', '$598.20K', '$248.12K', '41%', '+$14.25K'], ['Development', '$489.30K', '$476.80K', '$198.54K', '41%', '+$12.50K'], ['Marketing', '$367.50K', '$356.20K', '$142.33K', '40%', '+$11.30K'], ['Infrastructure', '$303.80K', '$295.60K', '$120.87K', '41%', '+$8.20K'], ['Team & Payroll', '$269.50K', '$262.10K', '$107.13K', '41%', '+$7.40K'], ['Legal & Compliance', '$171.50K', '$167.90K', '$67.25K', '40%', '+$3.60K'], ['Community & Grants', '$122.45K', '$120.10K', '$48.15K', '39%', '+$2.35K']];

export const reportsKpis: TreasuryKpi[] = [{ label: 'Total Treasury Value', value: '$24.67M', delta: '↑ 13.35%', note: 'vs last 30d', icon: '🏛', tone: 'blue', spark: [16, 18, 17, 22, 19, 24, 27, 25, 21, 19, 23, 24] }, { label: 'Total Revenue (MTD)', value: '$1.24M', delta: '↑ 21.3%', note: 'vs last month', icon: '↗', tone: 'green', spark: [12, 14, 13, 18, 20, 16, 17, 15, 16, 19, 21, 23] }, { label: 'Total Expenses (MTD)', value: '$342.11K', delta: '↓ 4.31%', note: 'vs last month', icon: '↘', tone: 'red', spark: [23, 21, 22, 19, 20, 18, 17, 16, 18, 19, 21, 20] }, { label: 'Net Cash Flow (MTD)', value: '$897.89K', delta: '↑ 42.8%', note: 'vs last month', icon: '$', tone: 'blue', spark: [6, 9, 8, 12, 16, 13, 12, 11, 15, 19, 20, 18] }, { label: 'ROI (30D)', value: '12.84%', delta: '↑ 2.15%', note: 'vs last 30d', icon: '◔', tone: 'purple', spark: [8, 9, 8, 10, 11, 10, 12, 14, 15, 17, 16, 18] }, { label: 'Active Proposals', value: '12', note: 'Across 6 categories', icon: '⚖', tone: 'orange' }];
export const reportCategories: TreasurySlice[] = [{ label: 'Financial Reports', amount: '12', value: 28.6, tone: 'blue' }, { label: 'Operational Reports', amount: '8', value: 19, tone: 'green' }, { label: 'Compliance Reports', amount: '6', value: 14.3, tone: 'purple' }, { label: 'Audit Reports', amount: '5', value: 11.9, tone: 'orange' }, { label: 'DAO Governance', amount: '5', value: 11.9, tone: 'red' }, { label: 'Risk Reports', amount: '4', value: 9.5, tone: 'blue' }, { label: 'Other Reports', amount: '2', value: 4.8, tone: 'green' }];
export const reportRows = [['Treasury Performance Report', 'Financial', 'Apr 12 - May 12, 2025', 'May 12, 2025 06:30 AM', 'Completed'], ['Reserve Health Report', 'Risk', 'Apr 12 - May 12, 2025', 'May 12, 2025 08:15 AM', 'Completed'], ['Monthly Budget vs Actual', 'Financial', 'Apr 2025', 'May 11, 2025 11:45 PM', 'Completed'], ['Revenue Streams Analysis', 'Financial', 'Apr 12 - May 12, 2025', 'May 11, 2025 10:20 PM', 'Completed'], ['Compliance Status Report', 'Compliance', 'Apr 12 - May 12, 2025', 'May 10, 2025 02:15 PM', 'Pending']];

export const auditKpis: TreasuryKpi[] = [{ label: 'Total Audit Events', value: '12,842', delta: '↑ 18.7%', note: 'vs last 30d', icon: '▤', tone: 'blue' }, { label: 'Critical Events', value: '28', delta: '↓ 15.2%', note: 'vs last 30d', icon: '!', tone: 'red' }, { label: 'Successful Events', value: '12,756', delta: '99.3%', note: 'success rate', icon: '✓', tone: 'green' }, { label: 'Failed Events', value: '58', delta: '0.7%', note: 'failure rate', icon: '×', tone: 'orange' }, { label: 'Unique Users', value: '47', delta: '↑ 9.3%', note: 'vs last 30d', icon: '●●', tone: 'purple' }, { label: 'Smart Contract Interactions', value: '2,341', delta: '↑ 21.6%', note: 'vs last 30d', icon: '⬡', tone: 'cyan' }];
export const auditEventTypes: TreasurySlice[] = [{ label: 'Treasury Actions', amount: '4,128', value: 32.1, tone: 'blue' }, { label: 'Smart Contract', amount: '2,341', value: 18.2, tone: 'purple' }, { label: 'User Management', amount: '1,876', value: 14.6, tone: 'green' }, { label: 'Financial Transactions', amount: '1,642', value: 12.8, tone: 'orange' }, { label: 'System Events', amount: '1,203', value: 9.4, tone: 'cyan' }, { label: 'Security Events', amount: '892', value: 6.9, tone: 'orange' }, { label: 'Other', amount: '760', value: 5.9, tone: 'red' }];
export const auditSeverity: TreasurySlice[] = [{ label: 'Critical', amount: '28', value: 0.2, tone: 'red' }, { label: 'High', amount: '156', value: 1.2, tone: 'orange' }, { label: 'Medium', amount: '892', value: 6.9, tone: 'orange' }, { label: 'Low', amount: '11,766', value: 91.7, tone: 'green' }];
export const auditRows = [['May 12, 2025 10:24:31 AM', 'Treasury DAO', 'Transfer Funds', 'Treasury Action', 'Transferred 125,000 USDC to Operations', 'Success', 'Medium', '0x7a2b...9c1d'], ['May 12, 2025 09:15:42 AM', 'Finance Lead', 'Create Allocation', 'Allocation', 'Created Q2 Marketing allocation', 'Success', 'Low', '0x3c4d...e5f6'], ['May 12, 2025 08:47:18 AM', 'System', 'Smart Contract Call', 'Smart Contract', 'executeBudget() on TreasuryController', 'Success', 'Medium', '0x9d1e...b3f2'], ['May 12, 2025 07:33:09 AM', 'Security Bot', 'Login Attempt', 'Security', 'Failed login attempt (invalid signature)', 'Failed', 'High', 'N/A'], ['May 11, 2025 11:22:55 PM', 'Treasury DAO', 'DAO Proposal Created', 'Governance', 'Created proposal: Treasury Rebalancing', 'Success', 'Low', '0x6b7a...d1c2'], ['May 11, 2025 09:05:12 PM', 'Oracle', 'Price Update', 'System', 'Updated HBAR price feed', 'Success', 'Low', '0x1a2b...3c4d']];

export const monthlyLabels = ['Apr 13', 'Apr 17', 'Apr 21', 'Apr 25', 'Apr 29', 'May 03', 'May 07', 'May 11'];
export const reserveSeries = [{ label: 'Lending Reserve', values: [60, 63, 66, 68, 62, 67, 71, 75], tone: 'blue' as Tone }, { label: 'Insurance Reserve', values: [38, 39, 41, 42, 40, 42, 48, 50], tone: 'purple' as Tone }, { label: 'Liquidity Reserve', values: [21, 22, 23, 24, 22, 24, 27, 28], tone: 'green' as Tone }, { label: 'DAO Reserve', values: [10, 11, 11, 12, 12, 13, 13, 14], tone: 'orange' as Tone }, { label: 'Contingency Reserve', values: [3, 3, 4, 4, 5, 5, 6, 6], tone: 'red' as Tone }];
export const treasuryPerformanceSeries = [{ label: 'Revenue', values: [105, 116, 112, 124, 132, 144, 163, 178], tone: 'green' as Tone }, { label: 'Expenses', values: [18, 22, 19, 25, 23, 31, 45, 38], tone: 'red' as Tone }, { label: 'Net Cash Flow', values: [48, 55, 62, 58, 79, 83, 110, 98], tone: 'blue' as Tone }];
export const auditEventSeries = [{ label: 'Total Events', values: [360, 430, 390, 650, 600, 920, 520, 780], tone: 'purple' as Tone }, { label: 'Successful', values: [350, 420, 380, 638, 590, 905, 510, 765], tone: 'green' as Tone }, { label: 'Failed', values: [8, 7, 9, 10, 8, 12, 9, 10], tone: 'red' as Tone }, { label: 'Critical', values: [1, 2, 1, 2, 3, 2, 1, 2], tone: 'orange' as Tone }];
export const expenditureSeries = [{ label: 'Spend', values: [32, 45, 33, 37, 28, 51, 46, 57, 43, 96, 48, 55], tone: 'blue' as Tone }];
export const budgetMonths = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
export const budgetSeries = [{ label: 'Budget', values: [270, 360, 455, 535, 602, 610, 700, 800, 890, 925, 960, 1000], tone: 'blue' as Tone }, { label: 'Actual', values: [260, 340, 420, 500, 570, 570, 570, 570, 570, 570, 570, 570], tone: 'green' as Tone }, { label: 'Forecast', values: [260, 340, 420, 500, 570, 615, 700, 790, 880, 920, 960, 995], tone: 'cyan' as Tone }];
