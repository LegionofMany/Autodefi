export type InsurancePoolTabId =
  | 'insurance-pool'
  | 'policies'
  | 'claims'
  | 'risk-tiers'
  | 'reserves'
  | 'reinsurance'
  | 'staking-ins'
  | 'governance'
  | 'reports'
  | 'analytics'
  | 'settings';

export type InsurancePoolKpi = {
  label: string;
  value: string;
  delta?: string;
  note?: string;
  tone: 'blue' | 'green' | 'purple' | 'orange' | 'red' | 'cyan';
};

export type InsurancePoolTabLock = {
  id: InsurancePoolTabId;
  label: string;
  title: string;
  subtitle: string;
  svg: string;
  icon: string;
  kpis: InsurancePoolKpi[];
  panels: string[];
};

export const insurancePoolSuiteTabs: InsurancePoolTabLock[] = [
  {
    id: 'insurance-pool',
    label: 'Insurance Pool',
    title: 'Insurance Pool',
    subtitle: 'Decentralized protection. Shared risk. Real coverage.',
    icon: 'shield',
    svg: '/assets/svg/insurance-pool-suite/insurance-pool-dashboard.svg',
    kpis: [
      { label: 'Total Coverage', value: '$132.84M', delta: '+12.4%', note: 'vs last 7d', tone: 'green' },
      { label: 'Claims Reserve', value: '$38.67M', delta: '+8.22%', tone: 'orange' },
      { label: 'Active Policies', value: '8,642', delta: '+9.31%', tone: 'purple' },
      { label: 'Coverage Ratio', value: '182.6%', note: 'Very Strong', tone: 'green' },
      { label: 'Insurance APY', value: '24.38%', delta: '+2.10%', tone: 'red' }
    ],
    panels: ['Risk Exposure by Tier', 'Pool Health', 'Pool Utilization', 'Recent Claims', 'Top Insurance Stakers', 'Coverage by Asset Type', 'Reinsurance Partners']
  },
  {
    id: 'policies',
    label: 'Policies',
    title: 'Policies',
    subtitle: 'Manage coverage terms. Underwrite protection. Track lifecycle.',
    icon: 'file',
    svg: '/assets/svg/insurance-pool-suite/policies.svg',
    kpis: [
      { label: 'Total Policies', value: '8,642', delta: '+9.31%', note: 'vs last 30d', tone: 'purple' },
      { label: 'Active Policies', value: '7,984', delta: '+6.42%', tone: 'green' },
      { label: 'Pending Approval', value: '318', note: 'Underwriting queue', tone: 'orange' },
      { label: 'Renewal Rate', value: '91.8%', note: 'Very Strong', tone: 'cyan' },
      { label: 'Premium Volume', value: '$24.86M', delta: '+11.24%', tone: 'green' }
    ],
    panels: ['Policy Portfolio', 'Policy Health', 'Policy Mix', 'Recent Policies', 'Expiring Soon', 'Coverage by Policy Type', 'Underwriting Queue']
  },
  {
    id: 'claims',
    label: 'Claims',
    title: 'Claims',
    subtitle: 'Review incidents. Track approvals. Resolve payouts.',
    icon: 'claim',
    svg: '/assets/svg/insurance-pool-suite/claims.svg',
    kpis: [
      { label: 'Total Claims', value: '4,218', delta: '+7.84%', note: 'vs last 30d', tone: 'green' },
      { label: 'Approved Claims', value: '3,126', delta: '+6.41%', tone: 'green' },
      { label: 'In Review', value: '482', note: 'Adjustment queue', tone: 'orange' },
      { label: 'Avg Resolution Time', value: '4.8 days', note: 'Faster than last month', tone: 'cyan' },
      { label: 'Claims Paid', value: '$18.43M', delta: '+10.26%', tone: 'green' }
    ],
    panels: ['Claims Pipeline', 'Claims Health', 'Claim Mix', 'Recent Claims', 'High Priority Claims', 'Payout by Claim Type', 'Adjuster Queue']
  },
  {
    id: 'risk-tiers',
    label: 'Risk Tiers',
    title: 'Risk Tiers',
    subtitle: 'Monitor borrower quality. Balance exposure. Track tier performance.',
    icon: 'layers',
    svg: '/assets/svg/insurance-pool-suite/risk-tiers.svg',
    kpis: [
      { label: 'Total Tier Exposure', value: '$132.84M', delta: '+6.82%', note: 'vs last 30d', tone: 'cyan' },
      { label: 'Tier 1 Allocation', value: '40.8%', note: '$54.21M low risk', tone: 'green' },
      { label: 'Avg Portfolio Risk', value: '2.18', note: 'Balanced profile', tone: 'orange' },
      { label: '30D Delinquency', value: '2.61%', note: 'Within target range', tone: 'cyan' },
      { label: 'Recovery Rate', value: '42.7%', delta: '+3.15%', tone: 'green' }
    ],
    panels: ['Tier Exposure', 'Tier Health', 'Risk Mix', 'Recent Tier Changes', 'Tier Performance', 'Exposure by Tier', 'Tier Review Queue']
  },
  {
    id: 'reserves',
    label: 'Reserves',
    title: 'Reserves',
    subtitle: 'Strong reserves. Secure coverage. Sustainable future.',
    icon: 'reserve',
    svg: '/assets/svg/insurance-pool-suite/reserves.svg',
    kpis: [
      { label: 'Total Reserves', value: '$38.67M', delta: '+8.32%', note: 'vs last 7d', tone: 'blue' },
      { label: 'Available Reserves', value: '$25.55M', delta: '+6.48%', tone: 'green' },
      { label: 'Restricted Reserves', value: '$13.12M', delta: '+5.21%', tone: 'purple' },
      { label: 'Reserve Ratio', value: '182.6%', note: 'Very Strong', tone: 'green' },
      { label: 'Reserve Runway', value: '14.7 Months', note: 'Strong', tone: 'orange' },
      { label: 'Reinsurance Capacity', value: '$75.40M', delta: '+9.12%', tone: 'red' }
    ],
    panels: ['Reserve Overview', 'Reserve Health', 'Reserve Metrics', 'Reserve Balance Trend', 'Reserve Allocation by Tier Exposure', 'Reserve Breakdown', 'Reserve Activity']
  },
  {
    id: 'reinsurance',
    label: 'Reinsurance',
    title: 'Reinsurance',
    subtitle: 'Global reinsurance partnerships. Expanded capacity. Stronger protection.',
    icon: 'umbrella',
    svg: '/assets/svg/insurance-pool-suite/reinsurance.svg',
    kpis: [
      { label: 'Total Reinsurance Capacity', value: '$75.40M', delta: '+9.12%', note: 'vs last 7d', tone: 'purple' },
      { label: 'Total Cost', value: '$4.28M', delta: '-3.41%', tone: 'blue' },
      { label: 'Net Reinsurance Coverage', value: '$71.12M', delta: '+10.25%', tone: 'green' },
      { label: 'Capacity Utilization', value: '48.6%', note: 'Moderate', tone: 'blue' },
      { label: 'Recovery Ratio', value: '92.4%', note: 'Very Strong', tone: 'green' },
      { label: 'Counterparty Score', value: 'A- (7.8/10)', note: 'Strong', tone: 'purple' }
    ],
    panels: ['Reinsurance Capacity Overview', 'Capacity Trend', 'Reinsurance Partners', 'Reinsurance Structure', 'Cost Efficiency', 'Reinsurance Events']
  },
  {
    id: 'staking-ins',
    label: 'Staking (INS)',
    title: 'Staking (INS)',
    subtitle: 'Stake INS tokens. Earn rewards. Strengthen the insurance pool.',
    icon: 'staking',
    svg: '/assets/svg/insurance-pool-suite/staking-ins.svg',
    kpis: [
      { label: 'Total INS Staked', value: '24.68M INS', note: '$38.27M USD', tone: 'purple' },
      { label: 'Stakers', value: '5,842', delta: '+4.18%', note: 'vs last 7d', tone: 'blue' },
      { label: 'Staking APY', value: '24.38%', delta: '+1.12%', note: 'vs last 7d', tone: 'green' },
      { label: 'Total Rewards Paid', value: '3.87M INS', note: '$6.02M USD', tone: 'orange' },
      { label: 'Lockup Ratio', value: '78.6%', note: 'Locked Staked', tone: 'blue' },
      { label: 'Circulating INS', value: '75.32M INS', note: '$116.78M USD', tone: 'purple' }
    ],
    panels: ['Staking Overview', 'INS Staked Over Time', 'Staking APY by Tier', 'Top INS Stakers', 'Rewards Distribution', 'Lockup Distribution', 'Staking Activity', 'Staking Actions']
  },
  {
    id: 'governance',
    label: 'Governance',
    title: 'Governance',
    subtitle: 'Community governed. Transparent decisions. Stronger protocol.',
    icon: 'governance',
    svg: '/assets/svg/insurance-pool-suite/governance.svg',
    kpis: [
      { label: 'Total Voting Power', value: '42.87M INS', note: '$64.31M USD', tone: 'purple' },
      { label: 'Proposals', value: '18', note: 'Active: 6  Completed: 12', tone: 'blue' },
      { label: 'Voter Participation', value: '64.2%', delta: '+5.71%', note: 'vs last 7d', tone: 'green' },
      { label: 'Quorum Requirement', value: '30.0%', note: 'of Total Voting Power', tone: 'orange' },
      { label: 'Treasury Controlled', value: '$21.47M', note: 'INS / HBAR / USDC', tone: 'green' },
      { label: 'Enacted This Year', value: '8', note: 'Governance proposals', tone: 'purple' }
    ],
    panels: ['Active Proposals', 'Voting Power Distribution', 'Proposal Categories', 'Recent Governance Activity', 'Quorum & Participation Trend', 'Treasury & Governance Funds', 'Top Voters', 'Governance Parameters']
  },
  {
    id: 'reports',
    label: 'Reports',
    title: 'Reports',
    subtitle: 'Comprehensive analytics. Transparent performance. Data-driven decisions.',
    icon: 'reports',
    svg: '/assets/svg/insurance-pool-suite/reports.svg',
    kpis: [
      { label: 'Total Coverage', value: '$132.84M', delta: '+9.21%', note: 'vs last 30d', tone: 'blue' },
      { label: 'Claims Paid (YTD)', value: '$21.47M', delta: '+4.28%', note: 'vs last 30d', tone: 'green' },
      { label: 'Loss Ratio (YTD)', value: '38.4%', delta: '-2.12%', note: 'vs last 30d', tone: 'purple' },
      { label: 'Reserve Ratio', value: '182.6%', note: 'Very Strong', tone: 'green' },
      { label: 'Investment Yield (YTD)', value: '5.78%', delta: '+0.63%', tone: 'blue' },
      { label: 'Operating Cost Ratio', value: '12.7%', delta: '-1.09%', tone: 'purple' },
      { label: 'Total Stakers', value: '5,842', delta: '+4.18%', tone: 'purple' }
    ],
    panels: ['Coverage Trend', 'Claims Overview', 'Key Performance Indicators', 'Coverage by Asset Type', 'Financial Performance', 'Loss Ratio Analysis', 'Top Claim Types', 'Recent Reports', 'Export Reports']
  },
  {
    id: 'analytics',
    label: 'Analytics',
    title: 'Analytics',
    subtitle: 'Advanced insights. Predictive intelligence. Smarter risk, stronger returns.',
    icon: 'analytics',
    svg: '/assets/svg/insurance-pool-suite/analytics.svg',
    kpis: [
      { label: 'Total Premiums (YTD)', value: '$48.67M', delta: '+8.91%', note: 'vs last 30d', tone: 'blue' },
      { label: 'Claims Paid (YTD)', value: '$21.47M', delta: '+4.28%', tone: 'green' },
      { label: 'Loss Ratio (YTD)', value: '38.4%', delta: '-2.12%', tone: 'purple' },
      { label: 'Combined Ratio (YTD)', value: '76.8%', delta: '-3.41%', tone: 'green' },
      { label: 'Investment Yield (YTD)', value: '5.78%', delta: '+0.63%', tone: 'blue' },
      { label: 'Net Profit (YTD)', value: '$21.78M', delta: '+9.42%', tone: 'purple' }
    ],
    panels: ['Premiums & Claims Trend', 'Loss Ratio Over Time', 'Key Insights', 'Policies by Risk Tier', 'Geographic Distribution', 'Policy Growth', 'Claims Frequency Analysis', 'Predictive Risk Outlook']
  },
  {
    id: 'settings',
    label: 'Settings',
    title: 'Settings',
    subtitle: 'Configure platform preferences, integrations, and security.',
    icon: 'settings',
    svg: '/assets/svg/insurance-pool-suite/settings.svg',
    kpis: [],
    panels: ['General Settings', 'Security Settings', 'Notification Preferences', 'Integrations', 'Access & Roles', 'System Information']
  }
];

export const insurancePoolSuiteAssetMap = Object.fromEntries(
  insurancePoolSuiteTabs.map((tab) => [tab.id, tab.svg])
) as Record<InsurancePoolTabId, string>;
