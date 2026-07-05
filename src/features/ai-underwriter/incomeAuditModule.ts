import type { AuditMetric } from './types';

export type IncomeSource = {
  source: string;
  monthlyAmount: number;
  annualAmount: number;
  verified: boolean;
  stability: 'Excellent' | 'Good' | 'Review' | 'Weak';
};

export type IncomeAuditModule = {
  id: 'income-audit';
  moduleNumber: 2;
  totalModules: 14;
  title: string;
  subtitle: string;
  confidence: number;
  verifiedAnnualIncome: number;
  verifiedMonthlyIncome: number;
  debtToIncome: number;
  paymentToIncome: number;
  disposableIncome: number;
  incomeStabilityScore: number;
  incomeSources: IncomeSource[];
  cashFlowMetrics: AuditMetric[];
  affordabilityMetrics: AuditMetric[];
  factors: { label: string; value: string; impact: 'positive' | 'neutral' | 'caution' | 'negative'; reasonCode: string }[];
  v1DecisionUse: string;
  v2ShadowAuditUse: string;
  reasonCodes: string[];
};

export const incomeAuditModule: IncomeAuditModule = {
  id: 'income-audit',
  moduleNumber: 2,
  totalModules: 14,
  title: '2. INCOME AUDIT',
  subtitle: 'Income verification, affordability, cash-flow strength, and debt-service capacity.',
  confidence: 93,
  verifiedAnnualIncome: 55420,
  verifiedMonthlyIncome: 4618,
  debtToIncome: 22,
  paymentToIncome: 11.8,
  disposableIncome: 1840,
  incomeStabilityScore: 96,
  incomeSources: [
    { source: 'Primary Employment', monthlyAmount: 4218, annualAmount: 50616, verified: true, stability: 'Excellent' },
    { source: 'Recurring Side Income', monthlyAmount: 400, annualAmount: 4800, verified: true, stability: 'Good' }
  ],
  cashFlowMetrics: [
    { label: 'Verified Monthly Income', value: '$4,618', detail: 'Bank + payroll match', tone: 'green', score: 93 },
    { label: 'Average Deposits', value: '$4,740', detail: 'Trailing 90 days', tone: 'green', score: 91 },
    { label: 'Income Variance', value: '6.2%', detail: 'Stable', tone: 'green', score: 94 },
    { label: 'NSF Events', value: '0', detail: 'Clean 90 days', tone: 'green', score: 100 },
    { label: 'Overdraft Events', value: '0', detail: 'Clean 90 days', tone: 'green', score: 100 },
    { label: 'Deposit Consistency', value: '97%', detail: 'Strong', tone: 'green', score: 97 }
  ],
  affordabilityMetrics: [
    { label: 'Debt-to-Income', value: '22%', detail: 'Below risk threshold', tone: 'green', score: 88 },
    { label: 'Payment-to-Income', value: '11.8%', detail: 'Affordable', tone: 'green', score: 91 },
    { label: 'Disposable Income', value: '$1,840', detail: 'After obligations', tone: 'green', score: 86 },
    { label: 'Payment Buffer', value: '3.2x', detail: 'Strong coverage', tone: 'green', score: 90 },
    { label: 'Income Stability', value: '96%', detail: 'Excellent', tone: 'green', score: 96 },
    { label: 'Affordability Result', value: 'Pass', detail: 'Tier 2 eligible', tone: 'cyan', score: 92 }
  ],
  factors: [
    { label: 'Payroll Match', value: 'Verified', impact: 'positive', reasonCode: 'INCOME_PAYROLL_MATCH_VERIFIED' },
    { label: 'Bank Deposits', value: 'Consistent', impact: 'positive', reasonCode: 'INCOME_BANK_DEPOSITS_CONSISTENT' },
    { label: 'DTI', value: '22%', impact: 'positive', reasonCode: 'INCOME_DTI_ACCEPTABLE' },
    { label: 'PTI', value: '11.8%', impact: 'positive', reasonCode: 'INCOME_PTI_ACCEPTABLE' },
    { label: 'NSF/Overdrafts', value: '0', impact: 'positive', reasonCode: 'INCOME_BANK_STRESS_CLEAR' },
    { label: 'Disposable Income', value: '$1,840', impact: 'positive', reasonCode: 'INCOME_DISPOSABLE_BUFFER_STRONG' }
  ],
  v1DecisionUse:
    'V1 uses verified annual income, bank deposit consistency, DTI, PTI, disposable income, and cash-flow stress events to support approval probability and payment affordability.',
  v2ShadowAuditUse:
    'V2 audits whether V1 income weighting predicts repayment quality by comparing verified income bands, cash-flow volatility, DTI/PTI thresholds, and stress events against delinquency and default outcomes.',
  reasonCodes: [
    'INCOME_VERIFIED_STABLE',
    'INCOME_PAYROLL_MATCH_VERIFIED',
    'INCOME_BANK_DEPOSITS_CONSISTENT',
    'INCOME_DTI_ACCEPTABLE',
    'INCOME_PTI_ACCEPTABLE',
    'INCOME_BANK_STRESS_CLEAR',
    'INCOME_DISPOSABLE_BUFFER_STRONG'
  ]
};
