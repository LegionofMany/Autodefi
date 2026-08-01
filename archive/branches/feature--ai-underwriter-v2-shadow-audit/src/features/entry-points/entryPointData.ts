export type EntryPointTone = 'cyan' | 'green' | 'purple' | 'blue' | 'orange';

export type EntryPointCard = {
  label: string;
  value: string;
  detail: string;
  tone: EntryPointTone;
};

export type EntryPointAction = {
  label: string;
  targetView: string;
  tone: EntryPointTone;
};

export type EntryPointSection = {
  title: string;
  description: string;
  items: string[];
};

export type EntryPointModel = {
  id: 'general-public-main' | 'dealer-dashboard-main' | 'admin-main';
  title: string;
  eyebrow: string;
  subtitle: string;
  audience: string;
  primaryAction: EntryPointAction;
  secondaryActions: EntryPointAction[];
  cards: EntryPointCard[];
  sections: EntryPointSection[];
  safetyLocks: string[];
};

export const generalPublicEntryPoint: EntryPointModel = {
  id: 'general-public-main',
  eyebrow: 'General Public Main',
  title: 'AutoDeFi Public Gateway',
  subtitle: 'Public landing hub for borrowers, dealers, lenders, token utility, marketplace education, and trust verification.',
  audience: 'Visitors, borrowers, investors, dealers, and marketplace users.',
  primaryAction: { label: 'Start Borrower Flow', targetView: 'borrower-portal', tone: 'cyan' },
  secondaryActions: [
    { label: 'Dealer Dashboard', targetView: 'dealer-dashboard-main', tone: 'green' },
    { label: 'Lender Pool', targetView: 'lender-pool', tone: 'purple' },
    { label: 'Admin Main', targetView: 'admin-main', tone: 'orange' }
  ],
  cards: [
    { label: 'Public Mode', value: 'Open', detail: 'No private borrower data exposed', tone: 'cyan' },
    { label: 'Borrower Entry', value: 'Ready', detail: 'Pre-qualification and checklist path', tone: 'green' },
    { label: 'Dealer Entry', value: 'Ready', detail: 'Dealer onboarding and dashboard path', tone: 'blue' },
    { label: 'Trust Layer', value: 'Reqrium', detail: 'Identity and wallet verification layer', tone: 'purple' }
  ],
  sections: [
    { title: 'Public Landing', description: 'Explain AutoDeFi without exposing private borrower or dealer data.', items: ['How AutoDeFi works', 'Borrower entry', 'Dealer signup', 'Investor/lender education'] },
    { title: 'Marketplace Bridge', description: 'Connect users into ZONYCS marketplace and liquidation education.', items: ['Vehicle marketplace', 'Recovery marketplace', 'Public listings', 'Dealer promotions'] },
    { title: 'ADF Utility', description: 'Explain ADF access, staking, governance, and rewards without guaranteed-yield language.', items: ['Borrower discounts', 'Dealer access', 'Investor pool access', 'DAO governance'] }
  ],
  safetyLocks: ['Public view only', 'No private borrower data', 'No guaranteed-yield wording', 'Clear disclosure path']
};

export const dealerDashboardEntryPoint: EntryPointModel = {
  id: 'dealer-dashboard-main',
  eyebrow: 'Dealer Dashboard Main',
  title: 'Dealer Operating Center',
  subtitle: 'Dealer F&I workflow for inventory, leads, deal jackets, approvals, conditions, funding, payout status, and ZONYCS listings.',
  audience: 'Approved dealers, finance managers, F&I teams, and dealer operations.',
  primaryAction: { label: 'Open Dealer Portal', targetView: 'dealer-portal', tone: 'green' },
  secondaryActions: [
    { label: 'AI Underwriter V2', targetView: 'ai-underwriter-v2', tone: 'purple' },
    { label: 'Funding Pool', targetView: 'lender-pool', tone: 'cyan' },
    { label: 'Admin Main', targetView: 'admin-main', tone: 'orange' }
  ],
  cards: [
    { label: 'Active Deals', value: '128', detail: 'Applications and deal jackets', tone: 'green' },
    { label: 'Funding Queue', value: '$1.16M', detail: 'Approved dealer payouts', tone: 'cyan' },
    { label: 'Dealer Risk', value: 'Low', detail: 'Score and funding behavior', tone: 'purple' },
    { label: 'Inventory Ready', value: '342', detail: 'Finance-ready listings', tone: 'blue' }
  ],
  sections: [
    { title: 'F&I Workflow', description: 'Mirror a real dealer finance desk from lead to funded delivery.', items: ['Leads', 'Applications', 'Deal jacket', 'Conditions', 'Funding center'] },
    { title: 'Inventory and Marketplace', description: 'Prepare inventory for AutoDeFi and ZONYCS marketplace channels.', items: ['VIN decode', 'Build sheet', 'Finance-ready listing', 'Auction/raffle/sale path'] },
    { title: 'Dealer Risk and Funding', description: 'Show payout readiness, risk score, funding speed, and exception queue.', items: ['Dealer risk score', 'Funding checklist', 'Payout status', 'Reports'] }
  ],
  safetyLocks: ['Dealer-only workflow', 'No DAO approval of individual loans', 'Human review for exceptions', 'Dealer payout after approved funding']
};

export const adminEntryPoint: EntryPointModel = {
  id: 'admin-main',
  eyebrow: 'Admin Main',
  title: 'AutoDeFi Admin Command Center',
  subtitle: 'Internal operations hub for AI Underwriter V2, dealer oversight, borrower workflows, pool risk, treasury, governance, and audit logs.',
  audience: 'AutoDeFi admins, risk operators, model governance, treasury, and compliance review teams.',
  primaryAction: { label: 'Open AI Underwriter V2', targetView: 'ai-underwriter-v2', tone: 'purple' },
  secondaryActions: [
    { label: 'Backend Brain Console', targetView: 'ai-underwriter-v2-backend-brain', tone: 'cyan' },
    { label: 'Dealer Dashboard', targetView: 'dealer-dashboard-main', tone: 'green' },
    { label: 'Risk Management', targetView: 'risk-management', tone: 'orange' }
  ],
  cards: [
    { label: 'V2 Brain', value: 'Shadow', detail: 'Cannot mutate V1 decisions', tone: 'purple' },
    { label: 'Audit Logs', value: 'Locked', detail: 'Immutable event records', tone: 'cyan' },
    { label: 'Dealer Ops', value: 'Active', detail: 'Dealer and payout oversight', tone: 'green' },
    { label: 'Governance', value: 'Human Gate', detail: 'Promotion requires review', tone: 'orange' }
  ],
  sections: [
    { title: 'Operational Control', description: 'Admin view across borrowers, dealers, loans, funding, and risk.', items: ['Borrower management', 'Dealer management', 'Loan management', 'Funding pools'] },
    { title: 'Model Governance', description: 'V2 recommendations stay behind a human review gate.', items: ['Backend Brain Console', 'Model versioning', 'Rollback plans', 'Outcome evidence'] },
    { title: 'Treasury and Audit', description: 'Track treasury, reserves, governance, security, and compliance review paths.', items: ['Treasury accounting', 'Audit logs', 'Risk/security', 'System settings'] }
  ],
  safetyLocks: ['Admin-only control', 'V2 shadow-only lock', 'Human governance required', 'Rollback required before promotion']
};

export const entryPointModels = [generalPublicEntryPoint, dealerDashboardEntryPoint, adminEntryPoint];
