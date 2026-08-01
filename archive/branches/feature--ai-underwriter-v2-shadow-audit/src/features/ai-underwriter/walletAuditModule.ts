import type { AuditMetric } from './types';

export type WalletVerification = {
  label: string;
  value: string;
  status: 'Verified' | 'Pass' | 'Review' | 'Fail';
  reasonCode: string;
};

export type WalletAuditModule = {
  id: 'wallet-audit';
  moduleNumber: 5;
  totalModules: 14;
  title: string;
  subtitle: string;
  confidence: number;
  walletAddress: string;
  walletScore: number;
  trustLevel: string;
  chainReadiness: string;
  kycWalletStatus: string;
  screeningStatus: string;
  walletAge: string;
  activityScore: number;
  decisionImpact: string;
  riskAdjustment: string;
  verificationSignals: WalletVerification[];
  balanceMetrics: AuditMetric[];
  behaviorMetrics: AuditMetric[];
  v1DecisionUse: string;
  v2ShadowAuditUse: string;
  reasonCodes: string[];
};

export const walletAuditModule: WalletAuditModule = {
  id: 'wallet-audit',
  moduleNumber: 5,
  totalModules: 14,
  title: '5. WALLET AUDIT',
  subtitle: 'Wallet identity, activity, trust score, token mix, and blockchain readiness review.',
  confidence: 84,
  walletAddress: '0x7a8B...EF23',
  walletScore: 782,
  trustLevel: 'High Trust',
  chainReadiness: 'Ethereum / Base / Hedera Ready',
  kycWalletStatus: 'Verified KYC Wallet',
  screeningStatus: 'Clear',
  walletAge: '2.8 Years',
  activityScore: 88,
  decisionImpact: '+6%',
  riskAdjustment: '-3%',
  verificationSignals: [
    { label: 'Wallet Ownership', value: 'Verified', status: 'Verified', reasonCode: 'WALLET_OWNERSHIP_VERIFIED' },
    { label: 'KYC Link', value: 'Matched', status: 'Verified', reasonCode: 'WALLET_KYC_LINK_MATCHED' },
    { label: 'Wallet Age', value: '2.8 Years', status: 'Pass', reasonCode: 'WALLET_AGE_ESTABLISHED' },
    { label: 'Screening Check', value: 'Clear', status: 'Pass', reasonCode: 'WALLET_SCREENING_CLEAR' },
    { label: 'Activity Level', value: 'Active', status: 'Pass', reasonCode: 'WALLET_ACTIVITY_HEALTHY' },
    { label: 'Stable Rail Readiness', value: 'Ready', status: 'Pass', reasonCode: 'WALLET_STABLE_RAIL_READY' }
  ],
  balanceMetrics: [
    { label: 'Wallet Score', value: '782', detail: 'High trust profile', tone: 'green', score: 88 },
    { label: 'Trust Level', value: 'High Trust', detail: 'Verified behavior', tone: 'green', score: 90 },
    { label: 'Wallet Age', value: '2.8 Years', detail: 'Established', tone: 'green', score: 82 },
    { label: 'Token Diversity', value: 'Healthy', detail: 'Stable + blue-chip mix', tone: 'cyan', score: 80 },
    { label: 'KYC Wallet', value: 'Verified', detail: 'Identity linked', tone: 'green', score: 92 },
    { label: 'Screening', value: 'Clear', detail: 'No match', tone: 'green', score: 100 }
  ],
  behaviorMetrics: [
    { label: 'Transaction Activity', value: 'Active', detail: 'Consistent wallet use', tone: 'green', score: 88 },
    { label: 'Stablecoin History', value: 'Strong', detail: 'Repayment rail familiarity', tone: 'green', score: 86 },
    { label: 'Exchange Flow', value: 'Normal', detail: 'No high-risk pattern', tone: 'green', score: 84 },
    { label: 'DeFi Exposure', value: 'Moderate', detail: 'No risky protocol cluster', tone: 'cyan', score: 78 },
    { label: 'Counterparty Risk', value: 'Low', detail: 'Clean wallet graph', tone: 'green', score: 90 },
    { label: 'Wallet Behavior', value: 'Pass', detail: 'Eligible for On-Chain Audit', tone: 'green', score: 88 }
  ],
  v1DecisionUse:
    'V1 uses wallet ownership, KYC wallet link, wallet age, activity quality, stable-value rail readiness, screening status, and trust score to support digital identity confidence and underwriting risk adjustment.',
  v2ShadowAuditUse:
    'V2 audits whether wallet trust score, token mix, activity depth, stablecoin readiness, and wallet identity linkage improve repayment prediction without over-rewarding asset balances or penalizing normal crypto behavior.',
  reasonCodes: [
    'WALLET_HIGH_TRUST',
    'WALLET_OWNERSHIP_VERIFIED',
    'WALLET_KYC_LINK_MATCHED',
    'WALLET_AGE_ESTABLISHED',
    'WALLET_SCREENING_CLEAR',
    'WALLET_ACTIVITY_HEALTHY',
    'WALLET_STABLE_RAIL_READY'
  ]
};
