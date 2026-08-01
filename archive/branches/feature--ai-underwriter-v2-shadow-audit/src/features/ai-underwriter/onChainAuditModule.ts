export type AuditSignalTone = 'green' | 'cyan' | 'blue' | 'purple' | 'yellow' | 'orange' | 'red';

export type AuditReasonSeverity = 'positive' | 'caution' | 'manual_review' | 'block';

export type AuditReasonCode = {
  code: string;
  severity: AuditReasonSeverity;
  label: string;
  description: string;
};

export type AuditMetric = {
  label: string;
  value: string;
  status: string;
  tone: AuditSignalTone;
  weight?: number;
};

export type AuditPanel = {
  title: string;
  summary: string;
  metrics: AuditMetric[];
};

export type AiUnderwriterAuditModule = {
  id: string;
  moduleNumber: number;
  totalModules: number;
  title: string;
  subtitle: string;
  previousModule: string;
  nextModule: string;
  v1Role: string;
  v2Role: string;
  decisionImpact: {
    approvalImpact: string;
    riskAdjustment: string;
    confidenceBoost: string;
  };
  resultRail: AuditMetric[];
  kpis: AuditMetric[];
  panels: AuditPanel[];
  positiveReasonCodes: AuditReasonCode[];
  cautionReasonCodes: AuditReasonCode[];
  manualReviewReasonCodes: AuditReasonCode[];
  learningSignals: string[];
};

export const onChainAuditModule: AiUnderwriterAuditModule = {
  id: 'on-chain-audit',
  moduleNumber: 6,
  totalModules: 14,
  title: '6. ON-CHAIN AUDIT',
  subtitle: 'Blockchain verification, transaction behavior analysis, protocol exposure, AML risk, and digital trust assessment.',
  previousModule: 'wallet-audit',
  nextModule: 'vehicle-audit',
  v1Role:
    'V1 uses on-chain data as a live underwriting signal for identity link quality, wallet maturity, AML exposure, stable-value rail familiarity, protocol safety, and counterparty risk.',
  v2Role:
    'V2 runs in shadow mode to audit how V1 weighted on-chain behavior against actual repayment, delinquency, fraud, recovery, and market outcomes before recommending any model change.',
  decisionImpact: {
    approvalImpact: '+5%',
    riskAdjustment: '-3%',
    confidenceBoost: 'High'
  },
  kpis: [
    { label: 'On-Chain Score', value: '83', status: 'Good', tone: 'green', weight: 18 },
    { label: 'Wallet Age', value: '2.8 Years', status: 'Established', tone: 'green', weight: 10 },
    { label: 'Transaction History', value: '1,248', status: 'Active', tone: 'cyan', weight: 12 },
    { label: 'Stablecoin Flow', value: '$226,400', status: 'Strong', tone: 'green', weight: 14 },
    { label: 'Protocol Risk', value: 'Low', status: 'Healthy', tone: 'green', weight: 14 },
    { label: 'AML / Sanctions', value: 'Clear', status: 'Passed', tone: 'green', weight: 18 },
    { label: 'Counterparty Risk', value: 'Low', status: 'Clean', tone: 'green', weight: 14 }
  ],
  resultRail: [
    { label: 'On-Chain Confidence', value: '89%', status: 'Strong', tone: 'green' },
    { label: 'On-Chain Score', value: '83', status: 'Good', tone: 'green' },
    { label: 'Wallet Score', value: '782', status: 'Good', tone: 'green' },
    { label: 'Trust Level', value: 'High Trust', status: 'Low Risk Profile', tone: 'green' },
    { label: 'Identity Link', value: 'Verified', status: 'Applicant Matched', tone: 'green' },
    { label: 'AML / Sanctions', value: 'Clear', status: 'No Matches', tone: 'green' },
    { label: 'Stable Rail Readiness', value: 'Strong', status: 'Stable-Value Activity Found', tone: 'green' },
    { label: 'Overall Risk', value: 'Low', status: 'Acceptable', tone: 'green' }
  ],
  panels: [
    {
      title: 'On-Chain Activity Overview',
      summary: 'The applicant wallet shows established transaction history, consistent activity, meaningful volume, and low-risk behavior across active months.',
      metrics: [
        { label: 'Total Transactions', value: '1,248', status: 'Active', tone: 'cyan' },
        { label: 'Total Volume', value: '$1.24M', status: 'Strong', tone: 'green' },
        { label: 'Active Months', value: '31', status: 'Consistent', tone: 'green' },
        { label: 'Unique Counterparties', value: '86', status: 'Diverse', tone: 'blue' }
      ]
    },
    {
      title: 'Network and Protocol Exposure',
      summary: 'Primary behavior is concentrated in mainstream networks and established DeFi protocols, with no high-risk protocol cluster detected.',
      metrics: [
        { label: 'Primary Network', value: 'Ethereum', status: 'Established', tone: 'purple' },
        { label: 'Secondary Network', value: 'Base', status: 'Low Cost Rail', tone: 'blue' },
        { label: 'DeFi Protocols', value: '6', status: 'Moderate Diversity', tone: 'cyan' },
        { label: 'Protocol Exposure', value: 'Low', status: 'Healthy', tone: 'green' }
      ]
    },
    {
      title: 'Stable-Value Rail Readiness',
      summary: 'Stablecoin activity suggests the applicant is familiar with stable-value transactions that can support AutoDeFi repayment rails.',
      metrics: [
        { label: 'USDC Activity', value: '$148,200', status: 'Strong', tone: 'green' },
        { label: 'USDT Activity', value: '$62,850', status: 'Healthy', tone: 'green' },
        { label: 'DAI Activity', value: '$15,350', status: 'Light', tone: 'cyan' },
        { label: 'Payment-Like Flows', value: 'Detected', status: 'Positive', tone: 'green' }
      ]
    },
    {
      title: 'Smart Contract Safety',
      summary: 'No known exploited contract interaction was detected. Approval hygiene is acceptable with no critical unlimited approvals open.',
      metrics: [
        { label: 'Contract Safety Score', value: '88%', status: 'Strong', tone: 'green' },
        { label: 'Known Exploit Exposure', value: 'None', status: 'Clear', tone: 'green' },
        { label: 'Approval Hygiene', value: 'Good', status: 'Acceptable', tone: 'green' },
        { label: 'Signature Risk', value: 'Low', status: 'Clean', tone: 'green' }
      ]
    },
    {
      title: 'AML, Sanctions, and Counterparty Review',
      summary: 'Screening found no sanctions, mixer, darknet, scam-wallet, or suspicious peel-chain exposure requiring a block.',
      metrics: [
        { label: 'Sanctions Match', value: '0', status: 'Clear', tone: 'green' },
        { label: 'Mixer Exposure', value: 'None', status: 'Clear', tone: 'green' },
        { label: 'Scam Exposure', value: 'None', status: 'Clear', tone: 'green' },
        { label: 'High-Risk Counterparties', value: '0', status: 'Low Risk', tone: 'green' }
      ]
    },
    {
      title: 'On-Chain Behavior Analysis',
      summary: 'Behavior is consistent with a mature wallet: stable activity, low-risk protocols, reasonable token diversity, and strong identity linkage.',
      metrics: [
        { label: 'Activity Consistency', value: '85%', status: 'Strong', tone: 'green' },
        { label: 'Transaction Diversity', value: '80%', status: 'Healthy', tone: 'green' },
        { label: 'Fund Flow Stability', value: '82%', status: 'Good', tone: 'green' },
        { label: 'Identity Confidence', value: '91%', status: 'Verified', tone: 'green' }
      ]
    }
  ],
  positiveReasonCodes: [
    {
      code: 'ONCHAIN_IDENTITY_LINK_VERIFIED',
      severity: 'positive',
      label: 'Identity link verified',
      description: 'Connected wallet is linked to the applicant identity with sufficient confidence.'
    },
    {
      code: 'ONCHAIN_WALLET_AGE_ESTABLISHED',
      severity: 'positive',
      label: 'Established wallet age',
      description: 'Wallet history is long enough to support behavior analysis.'
    },
    {
      code: 'ONCHAIN_STABLECOIN_HISTORY_STRONG',
      severity: 'positive',
      label: 'Strong stablecoin history',
      description: 'Wallet shows meaningful stable-value activity relevant to repayment rail readiness.'
    },
    {
      code: 'ONCHAIN_COUNTERPARTY_RISK_LOW',
      severity: 'positive',
      label: 'Low counterparty risk',
      description: 'Counterparty graph does not show elevated high-risk wallet exposure.'
    },
    {
      code: 'ONCHAIN_SANCTIONS_CLEAR',
      severity: 'positive',
      label: 'Sanctions clear',
      description: 'Screening found no sanctions match.'
    },
    {
      code: 'ONCHAIN_PROTOCOL_ACTIVITY_HEALTHY',
      severity: 'positive',
      label: 'Healthy protocol activity',
      description: 'Protocol activity is concentrated in established, lower-risk DeFi protocols.'
    }
  ],
  cautionReasonCodes: [
    {
      code: 'ONCHAIN_WALLET_TOO_NEW',
      severity: 'caution',
      label: 'Wallet too new',
      description: 'Wallet age is too short to support strong behavioral confidence.'
    },
    {
      code: 'ONCHAIN_ACTIVITY_TOO_THIN',
      severity: 'caution',
      label: 'Thin on-chain activity',
      description: 'Insufficient transaction depth for confident on-chain scoring.'
    },
    {
      code: 'ONCHAIN_STABLECOIN_HISTORY_WEAK',
      severity: 'caution',
      label: 'Weak stablecoin history',
      description: 'Stable-value usage is too limited to support repayment rail confidence.'
    },
    {
      code: 'ONCHAIN_COUNTERPARTY_RISK_ELEVATED',
      severity: 'caution',
      label: 'Elevated counterparty risk',
      description: 'Counterparty graph contains exposure requiring review.'
    },
    {
      code: 'ONCHAIN_CONTRACT_APPROVAL_RISK',
      severity: 'caution',
      label: 'Contract approval risk',
      description: 'Open contract approvals may increase wallet risk.'
    }
  ],
  manualReviewReasonCodes: [
    {
      code: 'ONCHAIN_SANCTIONS_MATCH',
      severity: 'block',
      label: 'Sanctions match',
      description: 'Wallet screening returned a sanctions match and must block or escalate under policy.'
    },
    {
      code: 'ONCHAIN_MIXER_EXPOSURE',
      severity: 'manual_review',
      label: 'Mixer exposure',
      description: 'Wallet shows mixer exposure requiring manual review.'
    },
    {
      code: 'ONCHAIN_SCAM_EXPOSURE',
      severity: 'manual_review',
      label: 'Scam exposure',
      description: 'Wallet has exposure to known scam or malicious entities.'
    },
    {
      code: 'ONCHAIN_IDENTITY_LINK_FAILED',
      severity: 'manual_review',
      label: 'Identity link failed',
      description: 'Wallet could not be linked to applicant identity with sufficient confidence.'
    },
    {
      code: 'ONCHAIN_SUSPICIOUS_FLOW_PATTERN',
      severity: 'manual_review',
      label: 'Suspicious flow pattern',
      description: 'Transaction flow pattern appears inconsistent with normal borrower behavior.'
    }
  ],
  learningSignals: [
    'Wallet age vs early delinquency',
    'Stablecoin history vs repayment success',
    'Active months vs approval quality',
    'Protocol diversity vs fraud risk',
    'Counterparty risk vs default probability',
    'Smart contract approval hygiene vs account compromise risk',
    'Bridge activity vs AML review rate',
    'Network behavior vs stable-value repayment rail performance',
    'On-chain identity confidence vs synthetic identity risk'
  ]
};

export function evaluateOnChainPromotionGate(module = onChainAuditModule) {
  const hasBlockingReasonCodes = module.manualReviewReasonCodes.some((reason) => reason.severity === 'block');
  const hasPositiveSignals = module.positiveReasonCodes.length >= 5;
  const hasLearningSignals = module.learningSignals.length >= 5;

  return {
    shadowModeOnly: true,
    canMutateV1Decision: false,
    requiresHumanPromotionApproval: true,
    readyForV2Audit: hasBlockingReasonCodes && hasPositiveSignals && hasLearningSignals,
    moduleId: module.id,
    moduleNumber: module.moduleNumber
  };
}
