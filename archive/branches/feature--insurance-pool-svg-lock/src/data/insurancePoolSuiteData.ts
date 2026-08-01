export type InsurancePoolTone = 'blue' | 'green' | 'purple' | 'orange' | 'red' | 'cyan';

export type InsurancePoolScreen = {
  id: string;
  label: string;
  title: string;
  subtitle: string;
  icon: string;
  svg: string;
  kpis: Array<{ label: string; value: string; note: string; tone: InsurancePoolTone }>;
  highlights: string[];
  panels: Array<{ title: string; rows: string[] }>;
};

const basePath = '/assets/svg/insurance-pool-suite';

export const insurancePoolScreens: InsurancePoolScreen[] = [
  {
    id: 'insurance-pool',
    label: 'Insurance Pool',
    title: 'Insurance Pool',
    subtitle: 'Decentralized protection. Shared risk. Real coverage.',
    icon: 'insurance',
    svg: `${basePath}/insurance-pool-overview.svg`,
    kpis: [
      { label: 'Total Coverage', value: '$132.84M', note: '+12.4% vs last 7d', tone: 'green' },
      { label: 'Claims Reserve', value: '$38.67M', note: '+8.22%', tone: 'orange' },
      { label: 'Active Policies', value: '8,642', note: '+9.31%', tone: 'purple' },
      { label: 'Coverage Ratio', value: '182.6%', note: 'Very Strong', tone: 'green' },
      { label: 'Insurance APY', value: '24.38%', note: '+2.10%', tone: 'red' }
    ],
    highlights: ['Risk exposure by Tier 1 through Tier 4', 'Pool health shield reads Strong', 'Utilization split: active coverage, unallocated capital, claims reserve', 'Recent claims and reinsurance partners visible'],
    panels: [
      { title: 'Risk Exposure', rows: ['Tier 1 $54.21M · 40.8%', 'Tier 2 $42.68M · 32.1%', 'Tier 3 $28.57M · 21.5%', 'Tier 4 $7.38M · 5.6%'] },
      { title: 'Partner Layer', rows: ['Nexus Mutual $25.00M', 'ChainSure $18.50M', 'Risk Harbor $15.20M', 'Opal Cover $12.10M'] }
    ]
  },
  {
    id: 'policies',
    label: 'Policies',
    title: 'Policies',
    subtitle: 'Manage coverage terms. Underwrite protection. Track lifecycle.',
    icon: 'documents',
    svg: `${basePath}/policies.svg`,
    kpis: [
      { label: 'Total Policies', value: '8,642', note: '+9.31% vs last 30d', tone: 'purple' },
      { label: 'Active Policies', value: '7,984', note: '+6.42%', tone: 'green' },
      { label: 'Pending Approval', value: '318', note: 'Underwriting queue', tone: 'orange' },
      { label: 'Renewal Rate', value: '91.8%', note: 'Very Strong', tone: 'cyan' },
      { label: 'Premium Volume', value: '$24.86M', note: '+11.24%', tone: 'green' }
    ],
    highlights: ['Policy portfolio lifecycle', 'Policy health shield reads Healthy', 'Policy mix by protection type', 'Underwriting and expiring-soon queues'],
    panels: [
      { title: 'Policy Portfolio', rows: ['Active 7,984 · 92.4%', 'Pending 318 · 3.7%', 'Expiring Soon 184 · 2.1%', 'Lapsed 96 · 1.1%'] },
      { title: 'Policy Mix', rows: ['Auto Loan Protection 46.2%', 'GAP Coverage 22.8%', 'Extended Warranty 14.6%', 'Tire & Rim 9.1%', 'Scratch & Dent 7.3%'] }
    ]
  },
  {
    id: 'claims',
    label: 'Claims',
    title: 'Claims',
    subtitle: 'Review incidents. Track approvals. Resolve payouts.',
    icon: 'documents',
    svg: `${basePath}/claims.svg`,
    kpis: [
      { label: 'Total Claims', value: '4,218', note: '+7.84% vs last 30d', tone: 'green' },
      { label: 'Approved Claims', value: '3,126', note: '+6.41%', tone: 'green' },
      { label: 'In Review', value: '482', note: 'Adjustment queue', tone: 'orange' },
      { label: 'Avg Resolution Time', value: '4.8 days', note: 'Faster than last month', tone: 'cyan' },
      { label: 'Claims Paid', value: '$18.43M', note: '+10.26%', tone: 'green' }
    ],
    highlights: ['Claims pipeline status bars', 'Claims health shield reads Stable', 'Claim mix by default, theft, collision, mechanical, GAP', 'High priority and adjuster queues'],
    panels: [
      { title: 'Claims Pipeline', rows: ['Approved 3,126 · 74.1%', 'In Review 482 · 11.4%', 'Pending Docs 311 · 7.4%', 'Escalated 184 · 4.4%', 'Denied 115 · 2.7%'] },
      { title: 'Claim Mix', rows: ['Default Claims 38.4%', 'Theft 21.6%', 'Collision 18.7%', 'Mechanical 12.5%', 'GAP / Other 8.8%'] }
    ]
  },
  {
    id: 'risk-tiers',
    label: 'Risk Tiers',
    title: 'Risk Tiers',
    subtitle: 'Monitor borrower quality. Balance exposure. Track tier performance.',
    icon: 'risk',
    svg: `${basePath}/risk-tiers.svg`,
    kpis: [
      { label: 'Total Tier Exposure', value: '$132.84M', note: '+6.82% vs last 30d', tone: 'green' },
      { label: 'Tier 1 Allocation', value: '40.8%', note: '$54.21M low risk', tone: 'green' },
      { label: 'Avg Portfolio Risk', value: '2.18', note: 'Balanced profile', tone: 'orange' },
      { label: '30D Delinquency', value: '2.61%', note: 'Within target range', tone: 'cyan' },
      { label: 'Recovery Rate', value: '42.7%', note: '+3.15%', tone: 'green' }
    ],
    highlights: ['Tier exposure list replaces pyramid for operational precision', 'Tier health reads Balanced', 'Risk mix donut and recent tier changes', 'Tier 4 is last-chance dealer routing'],
    panels: [
      { title: 'Tier Exposure', rows: ['Tier 1 $54.21M · Strongest Support', 'Tier 2 $42.68M · Good Credit + Support', 'Tier 3 $28.57M · Good Credit, No Down', 'Tier 4 $7.38M · Last Chance Routing'] },
      { title: 'Tier Performance', rows: ['Tier 1 APR 9.8% · delinquency 0.28%', 'Tier 2 APR 11.2% · delinquency 1.02%', 'Tier 3 APR 14.3% · delinquency 2.61%', 'Tier 4 Off-platform · dealer routed'] }
    ]
  },
  {
    id: 'reserves',
    label: 'Reserves',
    title: 'Reserves',
    subtitle: 'Strong reserves. Secure coverage. Sustainable future.',
    icon: 'treasury',
    svg: `${basePath}/reserves.svg`,
    kpis: [
      { label: 'Total Reserves', value: '$38.67M', note: '+8.32% vs last 7d', tone: 'blue' },
      { label: 'Available Reserves', value: '$25.55M', note: '+6.48%', tone: 'green' },
      { label: 'Restricted Reserves', value: '$13.12M', note: '+5.21%', tone: 'purple' },
      { label: 'Reserve Ratio', value: '182.6%', note: 'Very Strong', tone: 'green' },
      { label: 'Reserve Runway', value: '14.7 Months', note: 'Strong', tone: 'orange' }
    ],
    highlights: ['Reserve overview donut with claims, premium, catastrophe, operational, reinsurance recoverable', 'Reserve health shield reads Very Strong', 'Balance trend over 12 months', 'Reserve activity ledger'],
    panels: [
      { title: 'Reserve Breakdown', rows: ['Claims Reserve $13.12M · 34.0%', 'Earned Premium Reserve $9.85M · 25.5%', 'Catastrophe Reserve $6.75M · 17.5%', 'Operational Reserve $4.28M · 11.1%'] },
      { title: 'Reserve Metrics', rows: ['Minimum Required Reserve $21.20M', 'Excess Reserves $17.47M', 'Claims Paid YTD $9.12M', 'Average Claim Severity $7,250'] }
    ]
  },
  {
    id: 'reinsurance',
    label: 'Reinsurance',
    title: 'Reinsurance',
    subtitle: 'Global reinsurance partnerships. Expanded capacity. Stronger protection.',
    icon: 'shield',
    svg: `${basePath}/reinsurance.svg`,
    kpis: [
      { label: 'Total Reinsurance Capacity', value: '$75.40M', note: '+9.12% vs last 7d', tone: 'purple' },
      { label: 'Total Cost', value: '$4.28M', note: '-3.41% vs last 7d', tone: 'blue' },
      { label: 'Net Reinsurance Coverage', value: '$71.12M', note: '+10.25%', tone: 'green' },
      { label: 'Capacity Utilization', value: '48.6%', note: 'Moderate', tone: 'blue' },
      { label: 'Recovery Ratio', value: '92.4%', note: 'Very Strong', tone: 'green' }
    ],
    highlights: ['Capacity overview and trend', 'Partner table with ratings and counterparty score', 'Layer structure: retention, deductible, primary, excess loss, catastrophe', 'Cost efficiency and event ledger'],
    panels: [
      { title: 'Capacity Sources', rows: ['Traditional Reinsurance $38.20M', 'Crypto Reinsurance Protocols $18.40M', 'Excess of Loss $10.60M', 'Catastrophe Bonds $6.20M'] },
      { title: 'Partners', rows: ['Nexus Mutual · A- · Smart Contract Cover', 'ChainSure · B+ · Excess of Loss', 'Risk Harbor · A · P&C', 'Opal Cover · A- · Hybrid Coverage'] }
    ]
  },
  {
    id: 'staking-ins',
    label: 'Staking (INS)',
    title: 'Staking (INS)',
    subtitle: 'Stake INS tokens. Earn rewards. Strengthen the insurance pool.',
    icon: 'staking',
    svg: `${basePath}/staking-ins.svg`,
    kpis: [
      { label: 'Total INS Staked', value: '24.68M INS', note: '$38.27M USD', tone: 'purple' },
      { label: 'Stakers', value: '5,842', note: '+4.18% vs last 7d', tone: 'cyan' },
      { label: 'Staking APY', value: '24.38%', note: '+1.12%', tone: 'green' },
      { label: 'Rewards Paid', value: '3.87M INS', note: '$6.02M USD', tone: 'orange' },
      { label: 'Lockup Ratio', value: '78.6%', note: 'Locked Staked', tone: 'blue' }
    ],
    highlights: ['INS staked by tier and flex pool', 'Staking APY by tier', 'Top stakers, lockup distribution, rewards distribution', 'Actions: Stake, Unstake, Claim, Restake'],
    panels: [
      { title: 'Staking Overview', rows: ['Tier 1 9.28M INS · 37.6%', 'Tier 2 6.72M INS · 27.2%', 'Tier 3 4.86M INS · 19.7%', 'Tier 4 2.91M INS · 11.8%', 'Flex Pool 0.91M INS · 3.7%'] },
      { title: 'APY by Tier', rows: ['Tier 1 18.42%', 'Tier 2 22.61%', 'Tier 3 28.73%', 'Tier 4 36.84%', 'Flex 16.25%'] }
    ]
  },
  {
    id: 'governance',
    label: 'Governance',
    title: 'Governance',
    subtitle: 'Community governed. Transparent decisions. Stronger protocol.',
    icon: 'governance',
    svg: `${basePath}/governance.svg`,
    kpis: [
      { label: 'Total Voting Power', value: '42.87M INS', note: '$64.31M USD', tone: 'purple' },
      { label: 'Proposals', value: '18', note: 'Active: 6 · Completed: 12', tone: 'blue' },
      { label: 'Voter Participation', value: '64.2%', note: '+5.71% vs last 7d', tone: 'green' },
      { label: 'Quorum Requirement', value: '30.0%', note: 'of voting power', tone: 'orange' },
      { label: 'Treasury Controlled', value: '$21.47M', note: 'INS / HBAR / USDC', tone: 'green' }
    ],
    highlights: ['Active proposals table', 'Voting power distribution', 'Proposal categories', 'Treasury and governance funds'],
    panels: [
      { title: 'Active Proposals', rows: ['GOV-18 Increase Claims Reserve Allocation', 'GOV-17 Add Nexus Mutual as Reinsurer', 'GOV-16 Adjust Tier 4 Coverage Limit', 'GOV-15 Staking Rewards APY Update'] },
      { title: 'Parameters', rows: ['Quorum Requirement 30.0%', 'Voting Period 7 Days', 'Timelock Delay 24 Hours', 'Execution Delay 48 Hours', 'Emergency Multisig 5 of 9'] }
    ]
  },
  {
    id: 'reports',
    label: 'Reports',
    title: 'Reports',
    subtitle: 'Comprehensive analytics. Transparent performance. Data-driven decisions.',
    icon: 'analytics',
    svg: `${basePath}/reports.svg`,
    kpis: [
      { label: 'Total Coverage', value: '$132.84M', note: '+9.21% vs last 30d', tone: 'blue' },
      { label: 'Claims Paid YTD', value: '$21.47M', note: '+4.28%', tone: 'green' },
      { label: 'Loss Ratio YTD', value: '38.4%', note: '-2.12%', tone: 'purple' },
      { label: 'Reserve Ratio', value: '182.6%', note: 'Very Strong', tone: 'green' },
      { label: 'Investment Yield YTD', value: '5.78%', note: '+0.63%', tone: 'blue' }
    ],
    highlights: ['Coverage trend, claims overview, KPIs, financial performance', 'Loss ratio analysis and top claim types', 'Recent reports table', 'Export report buttons'],
    panels: [
      { title: 'Export Reports', rows: ['Performance Report', 'Claims Report', 'Risk Report', 'Financial Report', 'Reserve Report', 'Custom Report'] },
      { title: 'Performance Indicators', rows: ['Average Claim Severity $8,450', 'Policy Retention Rate 91.4%', 'Net Promoter Score 72', 'Customer Satisfaction 4.6/5'] }
    ]
  },
  {
    id: 'analytics',
    label: 'Analytics',
    title: 'Analytics',
    subtitle: 'Advanced insights. Predictive intelligence. Smarter risk, stronger returns.',
    icon: 'analytics',
    svg: `${basePath}/analytics.svg`,
    kpis: [
      { label: 'Total Premiums YTD', value: '$48.67M', note: '+8.91% vs last 30d', tone: 'blue' },
      { label: 'Claims Paid YTD', value: '$21.47M', note: '+4.28%', tone: 'green' },
      { label: 'Loss Ratio YTD', value: '38.4%', note: '-2.12%', tone: 'purple' },
      { label: 'Combined Ratio YTD', value: '76.8%', note: '-3.41%', tone: 'green' },
      { label: 'Net Profit YTD', value: '$21.78M', note: '+9.42%', tone: 'purple' }
    ],
    highlights: ['Premiums and claims trend', 'Loss ratio over time', 'Key insights panel', 'Geographic distribution map and predictive risk outlook'],
    panels: [
      { title: 'Insights', rows: ['Premiums up 8.91% YTD', 'Loss ratio improved 2.12%', 'Reserve ratio remains very strong', 'Investment yield contributes 15.2%'] },
      { title: 'Predictive Risk Outlook', rows: ['Expected loss ratio next 90 days: 36%–40%', 'Claims frequency outlook: Stable', 'Catastrophe risk: Low', 'Market volatility impact: Low'] }
    ]
  },
  {
    id: 'settings',
    label: 'Settings',
    title: 'Settings',
    subtitle: 'Configure platform preferences, integrations, and security.',
    icon: 'settings',
    svg: `${basePath}/settings.svg`,
    kpis: [
      { label: 'Pool Name', value: 'AutoDeFi Insurance Pool', note: 'Short name ADIP', tone: 'blue' },
      { label: 'Theme', value: 'Dark', note: 'Locked front-end default', tone: 'purple' },
      { label: '2FA', value: 'Enabled', note: 'Security enforced', tone: 'green' },
      { label: 'Network', value: 'Hedera Mainnet', note: 'HBAR direction', tone: 'cyan' },
      { label: 'System Status', value: 'Operational', note: 'Auto-refresh ON', tone: 'green' }
    ],
    highlights: ['General, Security, Integrations, Notifications, Access & Roles, Compliance, Billing, Advanced tabs', 'Hedera, Chainlink, Zeus Network, The Graph, Blockpages411 integrations', 'Role groups for admins, underwriters, adjusters, auditors, view-only users', 'System information and logs'],
    panels: [
      { title: 'Security', rows: ['Two-Factor Authentication ON', 'Session Timeout 30 min', 'Password Policy Enabled', 'IP Allowlist Enabled', 'Login Alerts ON'] },
      { title: 'Integrations', rows: ['Hedera Hashgraph connected', 'Chainlink Oracles connected', 'Zeus Network connected', 'The Graph connected', 'Blockpages411 identity connected'] }
    ]
  }
];

export const insurancePoolLock = {
  routeId: 'insurance-pool-suite',
  assetDirectory: 'public/assets/svg/insurance-pool-suite',
  viewBox: '0 0 1600 1000',
  theme: 'dark neon AutoDeFi DAO insurance control center',
  navOrder: insurancePoolScreens.map((screen) => screen.label)
};
