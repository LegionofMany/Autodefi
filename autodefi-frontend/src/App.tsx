import { useMemo, useState } from 'react';

type Kpi = { label: string; value: string; delta: string; tone?: string };
type TableRow = Record<string, string>;
type View = {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  kpis: Kpi[];
  rows: TableRow[];
  actions: string[];
  points: string[];
};

const coreRules = [
  'Approved AutoDeFi deals pay the dealer in full after delivery confirmation.',
  'Borrowers repay with regional stable-value rails, not ADF by default.',
  'ADF powers staking, collateral, access, fee discounts, rewards, and governance.',
  'Interest yield is distributed to stakers in the matching risk-tier pools.',
  'ZONYCS recovery auctions can route recovered assets back into DAO-approved allocations.'
];

const views: View[] = [
  {
    id: 'token-utility',
    title: 'ADF Token Utility Command Center',
    subtitle: 'Live utility layer for staking, governance, lender boosts, insurance discounts, platform access, burn mechanics, and ecosystem participation.',
    badge: 'Token Utility',
    kpis: [
      { label: 'ADF Price', value: '$0.0842', delta: '+6.42% 24h', tone: 'green' },
      { label: 'Market Cap', value: '$42.1M', delta: '500M fixed supply', tone: 'blue' },
      { label: 'Utility Score', value: '94/100', delta: 'Real-world integrated', tone: 'purple' },
      { label: 'Active Stakers', value: '18,420', delta: '+12.8% month', tone: 'cyan' }
    ],
    rows: [
      { Utility: 'Staking & Rewards', Portal: 'DAO / Capital Yield', Demand: 'High', Status: 'Live-ready' },
      { Utility: 'Governance Voting', Portal: 'DAO', Demand: 'High', Status: 'Live-ready' },
      { Utility: 'Lending Power Boost', Portal: 'Capital Yield', Demand: 'High', Status: 'Live-ready' },
      { Utility: 'Insurance Discounts', Portal: 'Insurance Pool', Demand: 'Medium', Status: 'Live-ready' },
      { Utility: 'Dealer Network Access', Portal: 'Dealer / ZONYCS', Demand: 'Medium', Status: 'DAO gated' }
    ],
    actions: ['Stake ADF', 'Open Tokenomics', 'View Utility Report', 'Check Smart Contract'],
    points: ['ADF is utility-first, not the default loan repayment currency.', 'Borrowers repay stable rails while ADF aligns incentives.', 'Dealer, lender, DAO, and insurance modules all create non-speculative token demand.']
  },
  {
    id: 'borrower',
    title: 'Borrower Portal',
    subtitle: 'Pre-qualification, loan application, payments, collateral, documents, rewards, wallet, support, and refinance flows.',
    badge: 'Verified Borrower',
    kpis: [
      { label: 'Loan Balance', value: '$28,450.67', delta: '32% paid', tone: 'blue' },
      { label: 'Next Payment', value: '$624.35', delta: 'Bi-weekly', tone: 'green' },
      { label: 'Loan Status', value: 'Current', delta: 'On track', tone: 'cyan' },
      { label: 'ADF Rewards', value: '1,245 ADF', delta: '+82 month', tone: 'purple' }
    ],
    rows: [
      { Vehicle: '2023 Tesla Model Y LR', Balance: '$28,450.67', APR: '9.82%', Term: '60 mo', Status: 'Current' },
      { Vehicle: 'ZONYCS Saved Vehicle', Balance: '$0.00', APR: 'Pre-qualified', Term: 'Pending', Status: 'Ready' },
      { Vehicle: 'Refinance Offer', Balance: '$28,450.67', APR: '8.94%', Term: '54 mo', Status: 'Review' }
    ],
    actions: ['Make Payment', 'Enable AutoPay', 'Browse ZONYCS', 'Request Refinance'],
    points: ['Weekly, bi-weekly, semi-monthly, and monthly payment options.', 'Tier 1 can use staked ADF collateral or more than one-third down.', 'Tier 4 routes last-chance leads to local dealer partners.']
  },
  {
    id: 'dealer',
    title: 'Dealer Portal',
    subtitle: 'Inventory, leads, deals, finance, customers, F&I products, funding, ZONYCS listings, and reporting.',
    badge: 'Verified Dealer',
    kpis: [
      { label: 'Active Inventory', value: '128', delta: '+12 listed', tone: 'blue' },
      { label: 'Deals In Progress', value: '42', delta: '18 funding ready', tone: 'green' },
      { label: 'Dealer Payouts', value: '$2.84M', delta: '30 days', tone: 'purple' },
      { label: 'ZONYCS Listings', value: '64', delta: 'Live sync', tone: 'cyan' }
    ],
    rows: [
      { Deal: 'ADF-78291', Customer: 'Marcus Johnson', Vehicle: '2023 Tesla Model Y', Stage: 'AI Underwriter', Status: 'Conditional' },
      { Deal: 'ADF-78292', Customer: 'Sophia Martinez', Vehicle: '2022 BMW X5', Stage: 'Funding', Status: 'Approved' },
      { Deal: 'ADF-78293', Customer: 'James Wilson', Vehicle: '2021 Ford F-150', Stage: 'Docs', Status: 'Pending' }
    ],
    actions: ['Create Deal', 'Add Inventory', 'Submit to AI', 'View Funding'],
    points: ['VIN decode and build-sheet intake.', 'Dealer paid in full on approved funded deals.', 'Auctions, raffles, and sales can route through ZONYCS.']
  },
  {
    id: 'capital',
    title: 'Capital Yield Portal',
    subtitle: 'Investor capital allocation, loan marketplace, portfolios, earnings, transactions, reports, auto-invest, documents, and support.',
    badge: 'Verified Investor',
    kpis: [
      { label: 'Total Invested', value: '$5.24M', delta: '+18.6%', tone: 'purple' },
      { label: 'Earnings YTD', value: '$412K', delta: '+24.3%', tone: 'green' },
      { label: 'Weighted Yield', value: '12.74%', delta: '+0.82%', tone: 'blue' },
      { label: 'Available', value: '$182K', delta: 'Ready', tone: 'cyan' }
    ],
    rows: [
      { Pool: 'Tier 1 Conservative', Risk: 'Low', Invested: '$2.16M', Yield: '8.92%', Status: 'Active' },
      { Pool: 'Tier 2 Balanced', Risk: 'Medium', Invested: '$1.64M', Yield: '12.24%', Status: 'Active' },
      { Pool: 'Tier 3 Aggressive', Risk: 'High', Invested: '$892K', Yield: '18.71%', Status: 'Active' }
    ],
    actions: ['Browse Loans', 'Add Funds', 'Manage AutoInvest', 'Download Report'],
    points: ['Pools match borrower risk tiers.', 'Interest yield routes to matching risk-tier stakers.', 'ADF can boost access and lender power without replacing stable repayment rails.']
  },
  {
    id: 'dao',
    title: 'DAO Governance',
    subtitle: 'Proposals, voting, treasury, staking, lender pools, insurance fund, risk parameters, revenue sharing, token utility, audit, and analytics.',
    badge: 'DAO Member',
    kpis: [
      { label: 'Treasury Balance', value: '$4.25M', delta: 'DAO controlled', tone: 'green' },
      { label: 'Active Proposals', value: '6', delta: '2 urgent', tone: 'orange' },
      { label: 'Voting Power', value: '248K ADF', delta: '+ delegation', tone: 'purple' },
      { label: 'Quorum Health', value: '72.4%', delta: 'Healthy', tone: 'cyan' }
    ],
    rows: [
      { Proposal: 'Reduce staking rewards', Category: 'Tokenomics', For: '61.2%', Status: 'Voting' },
      { Proposal: 'New collateral types', Category: 'Collateral', For: '66.8%', Status: 'Voting' },
      { Proposal: 'Marketing Budget Q2', Category: 'Treasury', For: 'Draft', Status: 'Review' },
      { Proposal: 'ZONYCS recovery auction allocation', Category: 'Recovery', For: 'Pending', Status: 'Draft' }
    ],
    actions: ['Create Proposal', 'Vote Now', 'Delegate ADF', 'Open Forum'],
    points: ['Governance can control burn rules, treasury budgets, risk policy, and recovery allocation.', 'Future voting models can support delegation and staking-weighted voting.', 'Compliance-safe language avoids guaranteed-return phrasing.']
  },
  {
    id: 'risk',
    title: 'Risk & Security',
    subtitle: 'Risk overview, fraud detection, security events, exposure monitor, transaction monitoring, identity verification, compliance, reports, and alerts.',
    badge: 'Risk Admin',
    kpis: [
      { label: 'Risk Score', value: '42/100', delta: 'Moderate', tone: 'orange' },
      { label: 'High Risk Loans', value: '28', delta: '-15.2%', tone: 'green' },
      { label: 'Fraud Signals', value: '16', delta: '-23.1%', tone: 'red' },
      { label: 'KYC Success', value: '97.3%', delta: '+1.2%', tone: 'cyan' }
    ],
    rows: [
      { Case: 'FRD-9201', Type: 'Identity Fraud', Signal: 'Device fingerprint', Risk: 'High', Status: 'Review' },
      { Case: 'KYC-1842', Type: 'Address mismatch', Signal: 'Document failure', Risk: 'Medium', Status: 'Pending' },
      { Case: 'TX-5581', Type: 'Blocked transfer', Signal: 'Velocity check', Risk: 'High', Status: 'Complete' }
    ],
    actions: ['Review Case', 'Resolve Alert', 'Run KYC', 'Export Report'],
    points: ['Identity can integrate with Blockpages reputation and wallet verification.', 'Risk settings include webhooks, API keys, IP allow lists, data sources, retention, and audit logs.', 'Smart contract and treasury permissions remain visible to the DAO.']
  },
  {
    id: 'insurance',
    title: 'Insurance & Recovery',
    subtitle: 'Claims center, collections, delinquent loans, recovery pipeline, repossession queue, recovery assets, workouts, payment plans, reports, and analytics.',
    badge: 'Recovery Admin',
    kpis: [
      { label: 'Claims In Recovery', value: '2,845', delta: '+18.6%', tone: 'blue' },
      { label: 'Recovered YTD', value: '$18.7M', delta: '+23.4%', tone: 'green' },
      { label: 'Success Rate', value: '76.8%', delta: '+6.2%', tone: 'purple' },
      { label: 'AI Confidence', value: '92.6%', delta: '+3.8%', tone: 'cyan' }
    ],
    rows: [
      { Claim: 'CLM-7789', Type: 'Credit Default', Recovery: '$458K', AI: 'High chance', Status: 'Review' },
      { Claim: 'CLM-5512', Type: 'Workout Plan', Recovery: '$67K', AI: 'Settlement', Status: 'Pending' },
      { Claim: 'CLM-6893', Type: 'Repossession', Recovery: '$31K', AI: 'Auction ready', Status: 'ZONYCS' }
    ],
    actions: ['Open Claim', 'Run Recovery AI', 'Create Workout', 'Send to ZONYCS'],
    points: ['Recovery auction allocation can be governed by DAO proposal.', 'Payment plans and workouts reduce losses before repossession.', 'Insurance discounts can be tied to ADF utility tiers.']
  }
];

const deepPages: View[] = [
  {
    id: 'full-tokenomics', title: 'Full ADF Tokenomics', subtitle: 'Fixed supply, allocation, vesting, treasury rules, staking emissions, liquidity, team lockups, and burn mechanics.', badge: 'Deep Link 01',
    kpis: [{ label: 'Fixed Supply', value: '500M ADF', delta: 'No hidden mint', tone: 'purple' }, { label: 'DAO Treasury', value: '20%', delta: 'Multi-sig guarded', tone: 'blue' }, { label: 'Staking Rewards', value: '24%', delta: 'DAO adjustable', tone: 'green' }, { label: 'Liquidity', value: '10%', delta: 'Exchange ready', tone: 'cyan' }],
    rows: [{ Allocation: 'Ecosystem Development', Share: '26%', Vesting: 'Milestone based', Control: 'DAO' }, { Allocation: 'Staking Rewards', Share: '24%', Vesting: 'Emissions schedule', Control: 'DAO' }, { Allocation: 'DAO Treasury', Share: '20%', Vesting: 'Reserve policy', Control: 'Multi-sig' }, { Allocation: 'Community & Airdrops', Share: '10%', Vesting: 'Campaign based', Control: 'DAO' }, { Allocation: 'Team & Advisors', Share: '10%', Vesting: 'Cliff + lockup', Control: 'Vesting contract' }, { Allocation: 'Liquidity & Exchanges', Share: '10%', Vesting: 'Launch reserve', Control: 'Treasury' }],
    actions: ['Download Tokenomics', 'Open Vesting', 'Review Treasury', 'Audit Supply'],
    points: ['Burns should come from protocol revenue or DAO-approved rules.', 'Tokenomics should avoid implying guaranteed passive returns.', 'Allocation cards are ready for backend values.']
  },
  {
    id: 'stake-adf', title: 'Stake ADF Quick Action', subtitle: 'Stake amount, choose lock period, choose risk tier, estimate rewards, governance power, lender boost, and insurance discount.', badge: 'Deep Link 02',
    kpis: [{ label: 'Wallet ADF', value: '82,450', delta: 'Connected wallet', tone: 'purple' }, { label: 'Stake APR', value: '8.4%', delta: 'Variable reward', tone: 'green' }, { label: 'Voting Power', value: '1.42x', delta: 'Lock boost', tone: 'blue' }, { label: 'Fee Discount', value: '12%', delta: 'Gold tier', tone: 'cyan' }],
    rows: [{ Tier: '30 Day', Boost: '1.00x', Governance: 'Standard', Risk: 'Flexible' }, { Tier: '90 Day', Boost: '1.15x', Governance: 'Boosted', Risk: 'Low' }, { Tier: '180 Day', Boost: '1.35x', Governance: 'Priority', Risk: 'Medium' }, { Tier: '365 Day', Boost: '1.70x', Governance: 'Elite', Risk: 'Locked' }],
    actions: ['Connect Wallet', 'Approve ADF', 'Confirm Stake', 'View Rewards'],
    points: ['Staking is an action flow, separate from the main staking dashboard.', 'Risk-tier choice maps yield exposure to the matching lender pool.', 'Backend should validate balance, allowances, lock duration, and KYC eligibility.']
  },
  {
    id: 'utility-report', title: 'ADF Utility Report', subtitle: 'Score history, demand by use case, stakers, governance participation, dealer access, lender boost usage, insurance discounts, and burn correlation.', badge: 'Deep Link 03',
    kpis: [{ label: 'Utility Score', value: '94/100', delta: '+4 month', tone: 'green' }, { label: 'Active Uses', value: '8', delta: 'All modules', tone: 'blue' }, { label: 'Governance', value: '72.4%', delta: 'Participation', tone: 'purple' }, { label: 'Dealer Usage', value: '41%', delta: '+8.2%', tone: 'cyan' }],
    rows: [{ UseCase: 'Staking', Volume: '42M ADF', Growth: '+18%', Signal: 'Strong' }, { UseCase: 'Governance', Volume: '28M ADF', Growth: '+12%', Signal: 'Strong' }, { UseCase: 'Lender Boost', Volume: '15M ADF', Growth: '+21%', Signal: 'High' }, { UseCase: 'Insurance Discount', Volume: '7M ADF', Growth: '+9%', Signal: 'Medium' }],
    actions: ['Export PDF', 'Open Analytics', 'Refresh Backend', 'DAO Review'],
    points: ['This page can pull real adoption events from backend analytics.', 'The utility score should be formula-based and auditable.', 'Use-case volume should be separated from speculative trading volume.']
  },
  {
    id: 'bridges', title: 'Cross-Chain Utility & Bridges', subtitle: 'ADF bridge status, supported networks, wrapped ADF, bridge volume, fees, security status, connected wallets, and cross-chain governance access.', badge: 'Deep Link 04',
    kpis: [{ label: 'Primary Network', value: 'Hedera', delta: 'HBAR native', tone: 'blue' }, { label: 'Bridge Volume', value: '$1.8M', delta: '30 days', tone: 'green' }, { label: 'Wrapped ADF', value: '14.2M', delta: 'Cross-chain', tone: 'purple' }, { label: 'Security', value: 'Verified', delta: 'Monitored', tone: 'cyan' }],
    rows: [{ Network: 'Hedera', Status: 'Native', Token: 'ADF', Risk: 'Low' }, { Network: 'EVM', Status: 'Wrapped', Token: 'wADF', Risk: 'Medium' }, { Network: 'Arbitrum', Status: 'Planned', Token: 'wADF', Risk: 'Review' }, { Network: 'Base', Status: 'Planned', Token: 'wADF', Risk: 'Review' }],
    actions: ['Bridge ADF', 'View Security', 'Connect Wallet', 'Bridge History'],
    points: ['Bridge permissions must be audited before production.', 'Governance can decide chain expansions.', 'Bridge volume should be tracked separately from loan repayments.']
  },
  {
    id: 'nft-access', title: 'NFT Access & Memberships', subtitle: 'Dealer Pro passes, borrower benefit badges, lender tier NFTs, DAO badges, ZONYCS access, and discount-card integrations.', badge: 'Deep Link 05',
    kpis: [{ label: 'Membership NFTs', value: '12,400', delta: 'Minted', tone: 'purple' }, { label: 'Dealer Pro', value: '842', delta: 'Active', tone: 'blue' }, { label: 'Lender Tier NFTs', value: '3,210', delta: '+9%', tone: 'green' }, { label: 'Benefit Claims', value: '18K', delta: 'YTD', tone: 'cyan' }],
    rows: [{ Pass: 'Dealer Pro', Benefit: 'Listing tools', Access: 'Dealer portal', Status: 'Active' }, { Pass: 'Lender Elite', Benefit: 'Pool boost', Access: 'Capital portal', Status: 'Active' }, { Pass: 'Borrower Benefit', Benefit: 'Fee discount', Access: 'Borrower portal', Status: 'Beta' }, { Pass: 'DAO Badge', Benefit: 'Identity proof', Access: 'Governance', Status: 'Active' }],
    actions: ['Mint Pass', 'Verify NFT', 'Open Benefits', 'Manage Collection'],
    points: ['NFTs should represent access and benefits, not hidden securities.', 'This can later connect to Spruce It Up Auto discount-card strategy.', 'Membership assets can integrate with ZONYCS marketplace access.']
  },
  {
    id: 'partners', title: 'DeFi Partners & Integrations', subtitle: 'Partner protocols, wallets, KYC/KYB providers, oracles, liquidity partners, insurance partners, data providers, and stable-value rails.', badge: 'Deep Link 06',
    kpis: [{ label: 'Partners', value: '28', delta: '+4 pending', tone: 'blue' }, { label: 'Wallets', value: '6', delta: 'Supported', tone: 'purple' }, { label: 'Stable Rails', value: '4', delta: 'Regional', tone: 'green' }, { label: 'Oracle Feeds', value: '12', delta: 'Online', tone: 'cyan' }],
    rows: [{ Partner: 'Wallet Connectors', Category: 'Wallet', Status: 'Ready', Risk: 'Low' }, { Partner: 'KYC/KYB Provider', Category: 'Identity', Status: 'Ready', Risk: 'Low' }, { Partner: 'Vehicle Valuation', Category: 'Data', Status: 'Ready', Risk: 'Medium' }, { Partner: 'Stable Rail Provider', Category: 'Payments', Status: 'Integration', Risk: 'Medium' }],
    actions: ['Add Partner', 'Run Health Check', 'View Webhooks', 'Open API Keys'],
    points: ['Integrations should be surfaced in admin and risk settings.', 'Stable rails are repayment infrastructure; ADF remains ecosystem utility.', 'Partner health can feed system alerts.']
  },
  {
    id: 'merchant-access', title: 'Merchant Ecosystem Access', subtitle: 'Platform service fees, dealer subscriptions, marketplace listing fees, premium accounts, partner discounts, detailing, warranty, and protection services.', badge: 'Deep Link 07',
    kpis: [{ label: 'Merchants', value: '1,204', delta: '+18%', tone: 'blue' }, { label: 'Partner Discounts', value: '$420K', delta: 'Claimed', tone: 'green' }, { label: 'Dealer Subscriptions', value: '842', delta: 'Active', tone: 'purple' }, { label: 'Access Events', value: '88K', delta: '30 days', tone: 'cyan' }],
    rows: [{ Merchant: 'Dealer Network', Use: 'Access fees', ADF: 'Accepted', Status: 'Active' }, { Merchant: 'Protection Products', Use: 'Discounts', ADF: 'Tier gated', Status: 'Active' }, { Merchant: 'Detailing Partners', Use: 'Rewards', ADF: 'Planned', Status: 'Coming' }, { Merchant: 'Marketplace Listings', Use: 'Listing fees', ADF: 'Accepted', Status: 'Active' }],
    actions: ['Add Merchant', 'Verify Access', 'Issue Discount', 'View Map'],
    points: ['This page avoids saying ADF is the monthly auto-loan payment token.', 'Merchant access can support partner service discounts.', 'Dealer and marketplace fees can create measurable token utility demand.']
  },
  {
    id: 'token-audit', title: 'Token Audit', subtitle: 'Token contract audit, supply verification, mint and burn permissions, admin keys, treasury wallet, emissions, vesting wallets, and DAO controls.', badge: 'Deep Link 08',
    kpis: [{ label: 'Audit Score', value: '96/100', delta: 'Pass', tone: 'green' }, { label: 'Supply Verified', value: '500M', delta: 'Fixed', tone: 'blue' }, { label: 'Admin Keys', value: 'Multi-sig', delta: 'DAO guarded', tone: 'purple' }, { label: 'Critical Issues', value: '0', delta: 'None open', tone: 'cyan' }],
    rows: [{ Control: 'Mint Permission', Status: 'Disabled / DAO locked', Risk: 'Low', Evidence: 'Contract' }, { Control: 'Burn Permission', Status: 'DAO approved', Risk: 'Low', Evidence: 'Policy' }, { Control: 'Treasury Wallet', Status: 'Multi-sig', Risk: 'Low', Evidence: 'On-chain' }, { Control: 'Vesting Wallets', Status: 'Scheduled', Risk: 'Medium', Evidence: 'Audit' }],
    actions: ['Open Audit', 'Verify Supply', 'Check Keys', 'Export Report'],
    points: ['Token audit is token-specific and also links to Audit & Security.', 'Supply, treasury, and permissions should be easy for DAO members to verify.', 'Backend should surface explorer links and audit artifacts.']
  },
  {
    id: 'smart-contract', title: 'Smart Contract Details', subtitle: 'Hedera token ID, contract address, treasury account, supply state, burn status, governance controls, multi-sig permissions, explorer, and history.', badge: 'Deep Link 09',
    kpis: [{ label: 'Network', value: 'Hedera', delta: 'HBAR', tone: 'blue' }, { label: 'Token ID', value: '0.0.ADF', delta: 'Placeholder', tone: 'purple' }, { label: 'Treasury', value: 'Multi-sig', delta: 'DAO guarded', tone: 'green' }, { label: 'Explorer', value: 'Ready', delta: 'API link', tone: 'cyan' }],
    rows: [{ Field: 'Token ID', Value: '0.0.ADF_PLACEHOLDER', Status: 'Configure backend', Risk: 'Low' }, { Field: 'Treasury Account', Value: '0.0.TREASURY', Status: 'Multi-sig', Risk: 'Low' }, { Field: 'Supply', Value: '500,000,000', Status: 'Fixed', Risk: 'Low' }, { Field: 'Governance Contract', Value: 'DAO controlled', Status: 'Pending deploy', Risk: 'Medium' }],
    actions: ['Copy Token ID', 'Open Explorer', 'Check Contract', 'View History'],
    points: ['Placeholder IDs must be replaced by backend environment values.', 'Contract controls should be transparent to users.', 'This page is not a payment screen for borrower loan installments.']
  },
  {
    id: 'usage-analytics', title: 'Usage Analytics & Insights', subtitle: 'ADF behavior, utility volume, portal adoption, staking velocity, governance actions, merchant access, and risk-tier token behavior.', badge: 'Deep Link 10',
    kpis: [{ label: 'Utility Events', value: '482K', delta: '+19%', tone: 'green' }, { label: 'Portal Adoption', value: '68%', delta: '+8%', tone: 'blue' }, { label: 'Stake Velocity', value: '1.8x', delta: 'Healthy', tone: 'purple' }, { label: 'Burn Correlation', value: '0.72', delta: 'Revenue linked', tone: 'cyan' }],
    rows: [{ Metric: 'Staking Actions', Volume: '82K', Change: '+18%', Quality: 'High' }, { Metric: 'Governance Votes', Volume: '31K', Change: '+12%', Quality: 'High' }, { Metric: 'Dealer Access', Volume: '18K', Change: '+21%', Quality: 'Medium' }, { Metric: 'Insurance Discounts', Volume: '7K', Change: '+9%', Quality: 'Medium' }],
    actions: ['Open Analytics', 'Export CSV', 'Refresh API', 'Build Report'],
    points: ['This is the analytics-grade version of Token Utility.', 'Each usage event should map to a real backend event type.', 'Reports can be scheduled for DAO treasury and governance review.']
  }
];

const nav = [
  ['token-utility', 'Token Utility'], ['full-tokenomics', 'Full Tokenomics'], ['stake-adf', 'Stake ADF Flow'], ['utility-report', 'Utility Report'], ['bridges', 'Cross-Chain Bridges'], ['nft-access', 'NFT Access'], ['partners', 'Partners'], ['merchant-access', 'Merchant Access'], ['token-audit', 'Token Audit'], ['smart-contract', 'Smart Contract'], ['usage-analytics', 'Usage Analytics'], ['borrower', 'Borrower'], ['dealer', 'Dealer'], ['capital', 'Capital Yield'], ['dao', 'DAO Governance'], ['risk', 'Risk & Security'], ['insurance', 'Insurance & Recovery']
] as const;

function LogoSvg() {
  return <svg viewBox="0 0 88 88" aria-hidden="true" className="logoSvg"><defs><linearGradient id="lg" x1="0" x2="1"><stop stopColor="#22d3ee"/><stop offset=".55" stopColor="#2563eb"/><stop offset="1" stopColor="#a855f7"/></linearGradient><filter id="glow"><feGaussianBlur stdDeviation="3.4" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs><rect x="6" y="6" width="76" height="76" rx="24" fill="url(#lg)" opacity=".95"/><path d="M24 58 42 20l22 38h-13l-9-18-8 18z" fill="#fff" filter="url(#glow)"/><path d="M32 65h24" stroke="#67e8f9" strokeWidth="6" strokeLinecap="round"/></svg>;
}

function CoinSvg() {
  return <svg viewBox="0 0 240 240" className="coinSvg" aria-hidden="true"><defs><radialGradient id="coin" cx="35%" cy="25%"><stop stopColor="#e0f2fe"/><stop offset=".28" stopColor="#38bdf8"/><stop offset=".62" stopColor="#2563eb"/><stop offset="1" stopColor="#312e81"/></radialGradient><filter id="coinGlow"><feGaussianBlur stdDeviation="5" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs><circle cx="120" cy="120" r="92" fill="url(#coin)" filter="url(#coinGlow)"/><circle cx="120" cy="120" r="76" fill="none" stroke="rgba(255,255,255,.42)" strokeWidth="4"/><path d="M78 155 118 70l46 85h-25l-21-40-17 40z" fill="#fff"/><text x="120" y="184" textAnchor="middle" fill="#cffafe" fontSize="24" fontWeight="900">ADF</text></svg>;
}

function LineChart() {
  const points = '10,145 50,130 90,136 130,92 170,108 210,64 250,78 290,45 330,56 370,30';
  return <svg viewBox="0 0 390 180" className="svgChart" aria-label="ADF utility growth line chart"><defs><linearGradient id="area" x1="0" y1="0" x2="0" y2="1"><stop stopColor="#22d3ee" stopOpacity=".45"/><stop offset="1" stopColor="#22d3ee" stopOpacity="0"/></linearGradient></defs>{[40,80,120,160].map(y=><line key={y} x1="8" x2="382" y1={y} y2={y} stroke="rgba(148,163,184,.16)"/>)}<polygon points={`10,170 ${points} 370,170`} fill="url(#area)"/><polyline points={points} fill="none" stroke="#22d3ee" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/><polyline points="10,155 50,148 90,120 130,126 170,95 210,88 250,61 290,72 330,42 370,34" fill="none" stroke="#a855f7" strokeWidth="3" strokeDasharray="6 8" strokeLinecap="round"/>{points.split(' ').map(p=>{ const [x,y]=p.split(','); return <circle key={p} cx={x} cy={y} r="5" fill="#020617" stroke="#67e8f9" strokeWidth="3"/>; })}</svg>;
}

function DonutChart() {
  const items = [{n:'Ecosystem',v:'26%'},{n:'Staking',v:'24%'},{n:'Treasury',v:'20%'},{n:'Community',v:'10%'},{n:'Team',v:'10%'},{n:'Liquidity',v:'10%'}];
  return <div className="donutWrap"><svg viewBox="0 0 220 220" className="donutSvg" aria-label="ADF allocation donut"><circle cx="110" cy="110" r="82" fill="none" stroke="#2563eb" strokeWidth="28" strokeDasharray="134 381" transform="rotate(-90 110 110)"/><circle cx="110" cy="110" r="82" fill="none" stroke="#22c55e" strokeWidth="28" strokeDasharray="124 391" strokeDashoffset="-134" transform="rotate(-90 110 110)"/><circle cx="110" cy="110" r="82" fill="none" stroke="#a855f7" strokeWidth="28" strokeDasharray="103 412" strokeDashoffset="-258" transform="rotate(-90 110 110)"/><circle cx="110" cy="110" r="82" fill="none" stroke="#f59e0b" strokeWidth="28" strokeDasharray="52 463" strokeDashoffset="-361" transform="rotate(-90 110 110)"/><circle cx="110" cy="110" r="55" fill="#07111f"/><text x="110" y="104" textAnchor="middle" fill="#fff" fontSize="22" fontWeight="900">500M</text><text x="110" y="130" textAnchor="middle" fill="#94a3b8" fontSize="13">ADF Supply</text></svg><div className="legend">{items.map(i=><span key={i.n}><b>{i.v}</b>{i.n}</span>)}</div></div>;
}

function BarChart() {
  const bars = [74, 92, 61, 83, 46, 70, 58, 88];
  return <svg viewBox="0 0 420 180" className="svgChart" aria-label="utility volume bar chart">{bars.map((height, i)=><g key={i}><rect x={18+i*49} y={160-height} width="28" height={height} rx="8" fill={i%2 ? '#a855f7' : '#22d3ee'} opacity=".88"/><rect x={18+i*49} y={160-height} width="28" height="18" rx="8" fill="#fff" opacity=".18"/></g>)}<line x1="10" x2="410" y1="160" y2="160" stroke="rgba(148,163,184,.25)"/></svg>;
}

function Gauge({ value = 94 }: { value?: number }) {
  const dash = Math.max(0, Math.min(100, value)) * 2.51;
  return <svg viewBox="0 0 320 190" className="gaugeSvg" aria-label="utility score gauge"><path d="M55 160a105 105 0 0 1 210 0" fill="none" stroke="rgba(148,163,184,.2)" strokeWidth="24" strokeLinecap="round"/><path d="M55 160a105 105 0 0 1 210 0" fill="none" stroke="#22c55e" strokeWidth="24" strokeLinecap="round" strokeDasharray={`${dash} 280`}/><text x="160" y="130" textAnchor="middle" fill="#fff" fontSize="42" fontWeight="900">{value}</text><text x="160" y="156" textAnchor="middle" fill="#94a3b8" fontSize="14">Utility Score</text></svg>;
}

function NetworkMap() {
  const nodes = [[70,80,'Dealer'],[155,48,'DAO'],[250,90,'Lender'],[120,145,'Borrower'],[315,145,'ZONYCS']];
  return <svg viewBox="0 0 390 210" className="networkSvg" aria-label="ecosystem network map"><defs><filter id="nodeGlow"><feGaussianBlur stdDeviation="4" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs>{[[0,1],[1,2],[0,3],[2,4],[3,4],[1,4]].map(([a,b])=><line key={`${a}-${b}`} x1={nodes[a][0]} y1={nodes[a][1]} x2={nodes[b][0]} y2={nodes[b][1]} stroke="rgba(34,211,238,.36)" strokeWidth="2"/>)}{nodes.map(([x,y,label],i)=><g key={String(label)} filter="url(#nodeGlow)"><circle cx={x} cy={y} r="18" fill={i%2 ? '#a855f7' : '#22d3ee'}/><text x={x} y={Number(y)+34} textAnchor="middle" fill="#cbd5e1" fontSize="12" fontWeight="800">{label}</text></g>)}</svg>;
}

function Heatmap() {
  return <div className="heatmap" aria-label="risk and utility heatmap">{Array.from({ length: 60 }).map((_, i)=><span key={i} className={i%7===0?'hot':i%5===0?'warm':i%3===0?'cool':''}/>)}</div>;
}

function KpiCard({ kpi }: { kpi: Kpi }) {
  return <article className={`kpi ${kpi.tone ?? ''}`}><span>{kpi.label}</span><strong>{kpi.value}</strong><small>{kpi.delta}</small></article>;
}

function DataTable({ rows }: { rows: TableRow[] }) {
  const headers = Object.keys(rows[0] ?? {});
  return <div className="tableWrap"><table><thead><tr>{headers.map(h=><th key={h}>{h}</th>)}</tr></thead><tbody>{rows.map((row, idx)=><tr key={idx}>{headers.map(h=><td key={h}><span className={h.toLowerCase()==='status' || h.toLowerCase()==='risk' ? `pill ${String(row[h]).toLowerCase().includes('high') || String(row[h]).toLowerCase().includes('review') ? 'warn' : String(row[h]).toLowerCase().includes('active') || String(row[h]).toLowerCase().includes('low') ? 'ok' : ''}` : ''}>{row[h]}</span></td>)}</tr>)}</tbody></table></div>;
}

function TokenUtilityPage({ setActive }: { setActive: (id: string) => void }) {
  const token = views[0];
  return <><Hero view={token}/><section className="kpiGrid">{token.kpis.map(k=><KpiCard key={k.label} kpi={k}/>)}</section><section className="grid two"><article className="panel heroPanel"><div><p className="eyebrow">What is ADF?</p><h2>ADF powers AutoDeFi access, governance, staking, discounts, rewards, collateral, and ecosystem participation.</h2><p>Borrower loan repayments stay on stable-value rails. ADF remains the tokenized utility layer that connects the DAO, lender pools, dealers, insurance, and ZONYCS recovery flows.</p><div className="iconRow"><span>Power</span><span>Govern</span><span>Earn</span><span>Grow</span></div></div><CoinSvg/></article><article className="panel chartPanel"><div className="panelHead"><h3>ADF Utility in Action</h3><button onClick={()=>setActive('utility-report')}>Report</button></div><LineChart/><div className="flow"><span>Stake</span><span>Boost</span><span>Access</span><span>Vote</span><span>Earn</span></div></article></section><section className="grid three"><article className="panel"><h3>Token Utilities</h3><div className="utilityGrid">{['Staking & Rewards','Governance Voting','Platform Fees & Discounts','Lending Power Boost','Insurance Discounts','Premium Access','Revenue Participation','Cross-Chain Utility'].map(x=><button key={x}>{x}</button>)}</div></article><article className="panel"><h3>Tokenomics</h3><DonutChart/><button className="wideButton" onClick={()=>setActive('full-tokenomics')}>View Full Tokenomics</button></article><article className="panel"><h3>Utility Score</h3><Gauge/><ul>{['Real-world utility','Ecosystem integration','Demand and adoption','Sustainable tokenomics','DAO governance power'].map(x=><li key={x}>{x}</li>)}</ul></article></section><section className="grid two"><article className="panel"><div className="panelHead"><h3>Top ADF Use Cases</h3><button onClick={()=>setActive('stake-adf')}>Stake ADF Now</button></div><DataTable rows={token.rows}/></article><article className="panel"><h3>ADF Accepted Across the Ecosystem</h3><NetworkMap/><div className="quickLinks">{[['bridges','Cross-Chain'],['nft-access','NFT Access'],['partners','DeFi Partners'],['merchant-access','Merchant Access'],['token-audit','Token Audit'],['smart-contract','Smart Contract']].map(([id,label])=><button key={id} onClick={()=>setActive(id)}>{label}</button>)}</div></article></section></>;
}

function Hero({ view }: { view: View }) {
  return <section className="topbar"><div><p className="eyebrow">{view.badge}</p><h1>{view.title}</h1><p>{view.subtitle}</p></div><div className="heroActions"><button>Connect Wallet</button><button>Backend API</button><button>Export</button></div></section>;
}

function PortalPage({ view }: { view: View }) {
  return <><Hero view={view}/><section className="kpiGrid">{view.kpis.map(k=><KpiCard key={k.label} kpi={k}/>)}</section><section className="grid two"><article className="panel"><div className="panelHead"><h3>Live Operations</h3><button>Sync Backend</button></div><DataTable rows={view.rows}/></article><article className="panel chartPanel"><h3>Portal Activity</h3><BarChart/><div className="actionGrid">{view.actions.map(a=><button key={a}>{a}</button>)}</div></article></section><section className="grid three"><article className="panel"><h3>AutoDeFi Locked Rules</h3><ul>{coreRules.map(r=><li key={r}>{r}</li>)}</ul></article><article className="panel"><h3>Risk / Utility Heatmap</h3><Heatmap/></article><article className="panel"><h3>Module Notes</h3><ul>{view.points.map(p=><li key={p}>{p}</li>)}</ul></article></section></>;
}

function DeepPage({ view }: { view: View }) {
  return <><Hero view={view}/><section className="kpiGrid">{view.kpis.map(k=><KpiCard key={k.label} kpi={k}/>)}</section><section className="grid two"><article className="panel"><div className="panelHead"><h3>Detail Records</h3><button>Connect Backend</button></div><DataTable rows={view.rows}/></article><article className="panel chartPanel"><h3>Visual Status</h3>{view.id === 'full-tokenomics' ? <DonutChart/> : view.id === 'smart-contract' || view.id === 'partners' || view.id === 'merchant-access' ? <NetworkMap/> : view.id === 'token-audit' ? <Gauge value={96}/> : <LineChart/>}<div className="actionGrid">{view.actions.map(a=><button key={a}>{a}</button>)}</div></article></section><section className="grid two"><article className="panel"><h3>Implementation Notes</h3><ul>{view.points.map(p=><li key={p}>{p}</li>)}</ul></article><article className="panel"><h3>Backend Adapter Ready</h3><p>The UI is built as real React components with SVG graphics and placeholder data shaped for API replacement. Wire this page to the completed backend by replacing the local arrays with API responses.</p><div className="codeBox">VITE_AUTODEFI_API_BASE_URL=/api</div></article></section></>;
}

function Shell({ active, setActive, children }: { active: string; setActive: (id: string) => void; children: React.ReactNode }) {
  return <div className="shell"><aside className="sidebar"><div className="brand"><LogoSvg/><div><b>Auto<span>DeFi</span></b><small>DAO Frontend / SVG UI</small></div></div><div className="profile"><strong>ADF Utility Suite</strong><small>Safe folder: /autodefi-frontend</small></div><nav>{nav.map(([id,label])=><button key={id} className={active===id?'active':''} onClick={()=>setActive(id)}>{label}</button>)}</nav><div className="sidebarCard"><strong>Build Status</strong><small>Frontend code only. Backend remains untouched. All visuals are inline SVG/CSS, not static screenshots.</small></div></aside><main>{children}</main></div>;
}

export default function App() {
  const [active, setActive] = useState('token-utility');
  const current = useMemo(() => [...views, ...deepPages].find(v => v.id === active) ?? views[0], [active]);
  const isDeep = deepPages.some(v => v.id === active);
  return <Shell active={active} setActive={setActive}>{active === 'token-utility' ? <TokenUtilityPage setActive={setActive}/> : isDeep ? <DeepPage view={current}/> : <PortalPage view={current}/>}</Shell>;
}
