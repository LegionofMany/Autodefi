import type { AuditMetric } from './types';

export type FinalActionSignal = {
  label: string;
  value: string;
  status: 'Ready' | 'Pass' | 'Review' | 'Blocked';
  reasonCode: string;
};

export type FinalActionModule = {
  id: 'final-action';
  moduleNumber: 14;
  totalModules: 14;
  title: string;
  subtitle: string;
  confidence: number;
  finalAction: string;
  decisionGrade: string;
  loanAmount: number;
  apr: number;
  termMonths: number;
  paymentFrequency: string;
  weeklyPayment: number;
  fundingSource: string;
  offerExpiry: string;
  v1ExecutionStatus: string;
  v2ShadowStatus: string;
  actionSignals: FinalActionSignal[];
  offerMetrics: AuditMetric[];
  conditionMetrics: AuditMetric[];
  v1DecisionUse: string;
  v2ShadowAuditUse: string;
  reasonCodes: string[];
};

export const finalActionModule: FinalActionModule = {
  id: 'final-action',
  moduleNumber: 14,
  totalModules: 14,
  title: '14. FINAL ACTION',
  subtitle: 'Final offer action, loan structure, funding source, borrower conditions, dealer payout readiness, and V2 shadow lock review.',
  confidence: 93,
  finalAction: 'Proceed with Approved Offer',
  decisionGrade: 'B+',
  loanAmount: 28450,
  apr: 7.24,
  termMonths: 60,
  paymentFrequency: 'Weekly',
  weeklyPayment: 131.42,
  fundingSource: 'AutoDeFi Capital Pool',
  offerExpiry: '7 Days',
  v1ExecutionStatus: 'Ready for human review and deal-jacket completion',
  v2ShadowStatus: 'Shadow-only audit locked; cannot mutate V1 final action',
  actionSignals: [
    { label: 'Final Action', value: 'Proceed', status: 'Ready', reasonCode: 'FINAL_ACTION_READY' },
    { label: 'Decision Grade', value: 'B+', status: 'Pass', reasonCode: 'FINAL_GRADE_ACCEPTABLE' },
    { label: 'Offer Terms', value: 'Ready', status: 'Ready', reasonCode: 'FINAL_TERMS_READY' },
    { label: 'Funding Source', value: 'Matched', status: 'Pass', reasonCode: 'FINAL_FUNDING_SOURCE_MATCHED' },
    { label: 'Conditions', value: 'Clearable', status: 'Review', reasonCode: 'FINAL_CONDITIONS_CLEARABLE' },
    { label: 'V2 Shadow Lock', value: 'Locked', status: 'Pass', reasonCode: 'FINAL_V2_SHADOW_LOCKED' }
  ],
  offerMetrics: [
    { label: 'Loan Amount', value: '$28,450', detail: 'Final structured amount', tone: 'green', score: 90 },
    { label: 'APR', value: '7.24%', detail: 'Risk tier aligned', tone: 'green', score: 86 },
    { label: 'Term', value: '60 Months', detail: 'Standard amortization', tone: 'cyan', score: 84 },
    { label: 'Weekly Payment', value: '$131.42', detail: 'Borrower serviceable', tone: 'green', score: 88 },
    { label: 'Funding Source', value: 'Capital Pool', detail: 'Best match selected', tone: 'green', score: 92 },
    { label: 'Offer Window', value: '7 Days', detail: 'Borrower action window', tone: 'yellow', score: 78 }
  ],
  conditionMetrics: [
    { label: 'Deal Jacket', value: 'Ready', detail: 'Documents can be finalized', tone: 'green', score: 88 },
    { label: 'Borrower Conditions', value: 'Clearable', detail: 'Standard verification closeout', tone: 'yellow', score: 78 },
    { label: 'Dealer Payout', value: 'Pending Close', detail: 'Payout after completion', tone: 'cyan', score: 84 },
    { label: 'Insurance Proof', value: 'Required', detail: 'Before final funding', tone: 'yellow', score: 76 },
    { label: 'V1 Final Action', value: 'Ready', detail: 'Human review gate remains', tone: 'green', score: 90 },
    { label: 'V2 Shadow Status', value: 'Locked', detail: 'Audit-only recommendation', tone: 'purple', score: 93 }
  ],
  v1DecisionUse:
    'V1 produces the final offer action, loan structure, funding-source match, borrower conditions, dealer payout readiness, and deal-jacket workflow for human review and closeout.',
  v2ShadowAuditUse:
    'V2 reviews the full V1 decision path, measures decision quality against future repayment and portfolio outcomes, and remains shadow-only until a human governance gate promotes a later model version.',
  reasonCodes: [
    'FINAL_ACTION_READY',
    'FINAL_GRADE_ACCEPTABLE',
    'FINAL_TERMS_READY',
    'FINAL_FUNDING_SOURCE_MATCHED',
    'FINAL_CONDITIONS_CLEARABLE',
    'FINAL_V2_SHADOW_LOCKED'
  ]
};
