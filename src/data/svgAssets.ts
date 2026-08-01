export type DashboardGraphicAsset = {
  src: string;
  label: string;
};

const graphic = (src: string, label: string): DashboardGraphicAsset => ({ src, label });

const aiUnderwritingSuite = [
  graphic('/assets/svg/ai-underwriting-suite/autodefi-dashboard.svg', 'Underwriting Dashboard'),
  graphic('/assets/svg/ai-underwriting-suite/autodefi-ai-underwriter.svg', 'AI Underwriter'),
  graphic('/assets/svg/ai-underwriting-suite/autodefi-risk-modules.svg', 'Risk Modules'),
  graphic('/assets/svg/ai-underwriting-suite/autodefi-identity-kyc.svg', 'Identity & KYC'),
  graphic('/assets/svg/ai-underwriting-suite/autodefi-income-verification.svg', 'Income Verification'),
  graphic('/assets/svg/ai-underwriting-suite/autodefi-bank-analysis.svg', 'Bank Analysis'),
  graphic('/assets/svg/ai-underwriting-suite/autodefi-vehicle-valuation.svg', 'Vehicle Valuation'),
  graphic('/assets/svg/ai-underwriting-suite/autodefi-fraud-signals.svg', 'Fraud Signals'),
  graphic('/assets/svg/ai-underwriting-suite/autodefi-conditional-approvals.svg', 'Conditional Approvals'),
  graphic('/assets/svg/ai-underwriting-suite/autodefi-funding-readiness.svg', 'Funding Readiness'),
  graphic('/assets/svg/ai-underwriting-suite/autodefi-analytics.svg', 'Underwriting Analytics'),
  graphic('/assets/svg/ai-underwriting-suite/autodefi-settings.svg', 'Underwriting Settings'),
] as const;

const aiUnderwriterV2Suite = [
  graphic('/assets/svg/ai-underwriter-v2/module-01-bureau-audit.svg', 'Bureau Audit'),
  graphic('/assets/svg/ai-underwriter-v2/module-02-income-audit.svg', 'Income Audit'),
  graphic('/assets/svg/ai-underwriter-v2/module-03-employment-audit.svg', 'Employment Audit'),
  graphic('/assets/svg/ai-underwriter-v2/module-04-residence-audit.svg', 'Residence Audit'),
  graphic('/assets/svg/ai-underwriter-v2/module-05-wallet-audit.svg', 'Wallet Audit'),
  graphic('/assets/svg/ai-underwriter-v2/module-06-on-chain-audit.svg', 'On-Chain Audit'),
  graphic('/assets/svg/ai-underwriter-v2/module-07-vehicle-audit.svg', 'Vehicle Audit'),
  graphic('/assets/svg/ai-underwriter-v2/module-08-collateral-audit.svg', 'Collateral Audit'),
  graphic('/assets/svg/ai-underwriter-v2/module-09-market-risk-audit.svg', 'Market Risk Audit'),
  graphic('/assets/svg/ai-underwriter-v2/module-10-approval-probability.svg', 'Approval Probability'),
  graphic('/assets/svg/ai-underwriter-v2/module-11-default-risk.svg', 'Default Risk'),
  graphic('/assets/svg/ai-underwriter-v2/module-12-best-funding-source.svg', 'Best Funding Source'),
  graphic('/assets/svg/ai-underwriter-v2/module-13-yield-to-lenders.svg', 'Yield to Lenders'),
  graphic('/assets/svg/ai-underwriter-v2/module-14-final-action.svg', 'Final Action'),
  graphic('/assets/svg/ai-underwriter-v2/module-15-audit-program-settings.svg', 'Audit Program Settings'),
] as const;

const insuranceSuite = [
  graphic('/assets/svg/insurance-pool-suite/insurance-pool-dashboard.svg', 'Insurance Pool Dashboard'),
  graphic('/assets/svg/insurance-pool-suite/claims.svg', 'Claims'),
  graphic('/assets/svg/insurance-pool-suite/policies.svg', 'Policies'),
  graphic('/assets/svg/insurance-pool-suite/reserves.svg', 'Reserves'),
  graphic('/assets/svg/insurance-pool-suite/risk-tiers.svg', 'Risk Tiers'),
  graphic('/assets/svg/insurance-pool-suite/reinsurance.svg', 'Reinsurance'),
  graphic('/assets/svg/insurance-pool-suite/staking-ins.svg', 'Insurance Staking'),
  graphic('/assets/svg/insurance-pool-suite/governance.svg', 'Insurance Governance'),
  graphic('/assets/svg/insurance-pool-suite/analytics.svg', 'Insurance Analytics'),
  graphic('/assets/svg/insurance-pool-suite/reports.svg', 'Insurance Reports'),
  graphic('/assets/svg/insurance-pool-suite/settings.svg', 'Insurance Settings'),
] as const;

export const dashboardGraphicSets: Record<string, readonly DashboardGraphicAsset[]> = {
  'dashboard-hub': [graphic('/assets/svg/dashboard-overview.svg', 'Ecosystem Overview')],
  dashboard: [graphic('/assets/svg/dashboard-overview.svg', 'Command Center')],
  'lender-pool': [graphic('/assets/svg/lender-pool.svg', 'Lender Pool')],
  'admin-command': [graphic('/assets/svg/admin-command.svg', 'Admin Command')],
  'borrower-portal': [graphic('/assets/svg/borrower-portal.svg', 'Borrower Portal')],
  'dealer-portal': [graphic('/assets/svg/dealer-portal.svg', 'Dealer Portal')],
  'investor-portal': [graphic('/assets/svg/capital-yield.svg', 'Investor Capital & Yield')],
  'capital-yield': [graphic('/assets/svg/capital-yield.svg', 'Capital & Yield')],
  'ai-underwriter': aiUnderwritingSuite,
  'ai-underwriter-v2': aiUnderwriterV2Suite,
  'dealer-marketplace': [graphic('/assets/svg/dealer-portal.svg', 'Dealer Marketplace')],
  marketplace: [graphic('/assets/svg/capital-yield.svg', 'AutoDeFi Marketplace')],
  'marketplace-center': [graphic('/assets/svg/dashboard-overview.svg', 'Marketplace Operations')],
  'liquidation-marketplace': [graphic('/assets/svg/insurance-recovery.svg', 'Liquidation Marketplace')],
  'loan-servicing': [graphic('/assets/svg/borrower-portal.svg', 'Loan Servicing')],
  'collections-recovery': [graphic('/assets/svg/insurance-recovery.svg', 'Collections & Recovery')],
  'insurance-claims': insuranceSuite,
  'insurance-recovery': insuranceSuite,
  'risk-management': [graphic('/assets/svg/risk-security.svg', 'Risk Management')],
  'risk-security': [graphic('/assets/svg/risk-security.svg', 'Risk & Security')],
  'audit-security': [graphic('/assets/svg/audit-security.svg', 'Audit & Security')],
  'dao-command': [graphic('/assets/svg/governance-dashboard.svg', 'DAO Command Center')],
  'dao-community': [graphic('/assets/svg/governance-dashboard.svg', 'DAO Community')],
  proposals: [graphic('/assets/svg/dao-proposals.svg', 'DAO Proposals')],
  vote: [graphic('/assets/svg/dao-vote.svg', 'DAO Vote')],
  treasury: [graphic('/assets/svg/treasury-center.svg', 'Treasury')],
  'treasury-management': [graphic('/assets/svg/treasury-center.svg', 'Treasury Management')],
  staking: [graphic('/assets/svg/adf-staking.svg', 'ADF Staking')],
  'staking-rewards': [graphic('/assets/svg/adf-staking.svg', 'Staking Rewards')],
  governance: [graphic('/assets/svg/governance-dashboard.svg', 'Governance')],
  'dao-governance': [graphic('/assets/svg/governance-dashboard.svg', 'DAO Governance')],
  'revenue-sharing': [graphic('/assets/svg/revenue-sharing.svg', 'Revenue Sharing')],
  'token-utility': [graphic('/assets/svg/adf-token-utility.svg', 'ADF Token Utility')],
  analytics: [graphic('/assets/svg/analytics-dashboard.svg', 'Analytics')],
};

export const fallbackDashboardSvg = '/assets/svg/dashboard-overview.svg';

export const dashboardSvgAssets: Record<string, string> = Object.fromEntries(
  Object.entries(dashboardGraphicSets).map(([id, assets]) => [id, assets[0]?.src || fallbackDashboardSvg]),
);
