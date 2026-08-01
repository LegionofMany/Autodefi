import type { AuditMetric } from './types';

export type BureauScore = {
  bureau: 'TransUnion' | 'Equifax' | 'Experian' | 'Tri-Merge';
  score: number;
  rating: 'Excellent' | 'Good' | 'Fair' | 'Poor';
  tone: AuditMetric['tone'];
};

export type BureauFactor = {
  label: string;
  value: string;
  impact: 'positive' | 'neutral' | 'caution' | 'negative';
  reasonCode: string;
};

export type BureauAuditModule = {
  id: 'bureau-audit';
  moduleNumber: 1;
  totalModules: 14;
  title: string;
  subtitle: string;
  confidence: number;
  overallCreditScore: number;
  recommendedTier: string;
  scores: BureauScore[];
  historyPoints: { month: string; score: number }[];
  results: AuditMetric[];
  breakdown: AuditMetric[];
  factors: BureauFactor[];
  v1DecisionUse: string;
  v2ShadowAuditUse: string;
  reasonCodes: string[];
};

export const bureauAuditModule: BureauAuditModule = {
  id: 'bureau-audit',
  moduleNumber: 1,
  totalModules: 14,
  title: '1. BUREAU AUDIT',
  subtitle: 'Credit bureau analysis and score verification.',
  confidence: 94,
  overallCreditScore: 724,
  recommendedTier: 'Tier 2 (Medium Risk)',
  scores: [
    { bureau: 'TransUnion', score: 724, rating: 'Good', tone: 'cyan' },
    { bureau: 'Equifax', score: 722, rating: 'Good', tone: 'red' },
    { bureau: 'Experian', score: 726, rating: 'Good', tone: 'purple' },
    { bureau: 'Tri-Merge', score: 724, rating: 'Good', tone: 'blue' }
  ],
  historyPoints: [
    { month: 'May 22', score: 590 },
    { month: 'Sep 22', score: 615 },
    { month: 'Jan 23', score: 650 },
    { month: 'May 23', score: 690 },
    { month: 'Sep 23', score: 720 },
    { month: 'Jan 24', score: 738 },
    { month: 'May 24', score: 724 }
  ],
  results: [
    { label: 'Overall Credit Score', value: '724', detail: 'Good', tone: 'green', score: 724 },
    { label: 'Recommended Tier', value: 'Tier 2', detail: 'Medium Risk', tone: 'cyan', score: 82 },
    { label: 'Credit Utilization', value: '28%', detail: 'Low', tone: 'green', score: 88 },
    { label: 'Payment History', value: '100%', detail: 'Excellent', tone: 'green', score: 100 },
    { label: 'Derogatory Marks', value: '0', detail: 'Clear', tone: 'green', score: 100 },
    { label: 'Inquiries (12m)', value: '2', detail: 'Low', tone: 'green', score: 82 },
    { label: 'Credit Age', value: '6.2 Years', detail: 'Good', tone: 'green', score: 78 }
  ],
  breakdown: [
    { label: 'Credit Score', value: '724', detail: 'Good', tone: 'green', score: 85 },
    { label: 'Payment History', value: '100%', detail: 'Excellent', tone: 'green', score: 100 },
    { label: 'Credit Utilization', value: '28%', detail: 'Low', tone: 'green', score: 88 },
    { label: 'Credit Age', value: '6.2 Years', detail: 'Good', tone: 'green', score: 78 },
    { label: 'Inquiries', value: '2', detail: 'Low', tone: 'green', score: 82 },
    { label: 'Derogatory Marks', value: '0', detail: 'Clear', tone: 'green', score: 100 }
  ],
  factors: [
    { label: 'Payment History', value: '100%', impact: 'positive', reasonCode: 'BUREAU_PAYMENT_HISTORY_STRONG' },
    { label: 'Credit Utilization', value: '28%', impact: 'positive', reasonCode: 'BUREAU_UTILIZATION_LOW' },
    { label: 'Credit Age', value: '6.2 Years', impact: 'positive', reasonCode: 'BUREAU_CREDIT_AGE_GOOD' },
    { label: 'Total Accounts', value: '14', impact: 'positive', reasonCode: 'BUREAU_ACCOUNT_MIX_HEALTHY' },
    { label: 'Derogatory Marks', value: '0', impact: 'positive', reasonCode: 'BUREAU_DEROGATORY_CLEAR' },
    { label: 'Inquiries (12m)', value: '2', impact: 'neutral', reasonCode: 'BUREAU_INQUIRIES_ACCEPTABLE' }
  ],
  v1DecisionUse:
    'V1 uses verified bureau score, utilization, payment history, credit age, inquiries, and derogatory marks to support Tier 2 routing and approval probability.',
  v2ShadowAuditUse:
    'V2 audits whether V1 bureau weighting is too strict or too loose by comparing score bands, utilization, inquiries, and payment history against actual repayment and delinquency outcomes.',
  reasonCodes: [
    'BUREAU_SCORE_GOOD',
    'BUREAU_PAYMENT_HISTORY_STRONG',
    'BUREAU_UTILIZATION_LOW',
    'BUREAU_DEROGATORY_CLEAR',
    'BUREAU_INQUIRIES_ACCEPTABLE'
  ]
};
