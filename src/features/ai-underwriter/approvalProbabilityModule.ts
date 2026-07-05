import type { AuditMetric } from './types';

export type ApprovalProbabilitySignal = {
  label: string;
  value: string;
  status: 'Strong' | 'Pass' | 'Review' | 'Weak';
  reasonCode: string;
};

export type ApprovalProbabilityModule = {
  id: 'approval-probability';
  moduleNumber: 10;
  totalModules: 14;
  title: string;
  subtitle: string;
  confidence: number;
  approvalProbability: number;
  confidenceScore: number;
  grade: string;
  recommendedAction: string;
  expectedLoss: number;
  offerCompetitiveness: number;
  decisionImpact: string;
  riskAdjustment: string;
  probabilitySignals: ApprovalProbabilitySignal[];
  modelMetrics: AuditMetric[];
  scenarioMetrics: AuditMetric[];
  v1DecisionUse: string;
  v2ShadowAuditUse: string;
  reasonCodes: string[];
};

export const approvalProbabilityModule: ApprovalProbabilityModule = {
  id: 'approval-probability',
  moduleNumber: 10,
  totalModules: 14,
  title: '10. APPROVAL PROBABILITY',
  subtitle: 'Final approval probability, confidence band, scenario strength, expected loss, and decision-quality review.',
  confidence: 92,
  approvalProbability: 86,
  confidenceScore: 92,
  grade: 'B+',
  recommendedAction: 'Strong Approve',
  expectedLoss: 2.1,
  offerCompetitiveness: 87,
  decisionImpact: '+14%',
  riskAdjustment: '-6%',
  probabilitySignals: [
    { label: 'Approval Probability', value: '86%', status: 'Strong', reasonCode: 'APPROVAL_PROBABILITY_STRONG' },
    { label: 'Confidence Band', value: '92%', status: 'Strong', reasonCode: 'APPROVAL_CONFIDENCE_HIGH' },
    { label: 'Decision Grade', value: 'B+', status: 'Pass', reasonCode: 'APPROVAL_GRADE_ACCEPTABLE' },
    { label: 'Expected Loss', value: '2.1%', status: 'Pass', reasonCode: 'APPROVAL_EXPECTED_LOSS_LOW' },
    { label: 'Offer Competitiveness', value: '87%', status: 'Strong', reasonCode: 'APPROVAL_OFFER_COMPETITIVE' },
    { label: 'Recommended Action', value: 'Strong Approve', status: 'Strong', reasonCode: 'APPROVAL_RECOMMENDED_ACTION_STRONG_APPROVE' }
  ],
  modelMetrics: [
    { label: 'Approval Probability', value: '86%', detail: 'Strong approval band', tone: 'green', score: 86 },
    { label: 'Model Confidence', value: '92%', detail: 'High confidence', tone: 'green', score: 92 },
    { label: 'Decision Grade', value: 'B+', detail: 'Acceptable risk quality', tone: 'green', score: 84 },
    { label: 'Expected Loss', value: '2.1%', detail: 'Below threshold', tone: 'green', score: 88 },
    { label: 'Offer Competitiveness', value: '87%', detail: 'Marketable offer', tone: 'cyan', score: 87 },
    { label: 'Decision Quality', value: 'Pass', detail: 'Proceed to default risk', tone: 'green', score: 90 }
  ],
  scenarioMetrics: [
    { label: 'Base Scenario', value: 'Approve', detail: 'Primary model result', tone: 'green', score: 86 },
    { label: 'Rate Stress', value: 'Pass', detail: 'Payment still serviceable', tone: 'green', score: 82 },
    { label: 'Income Stress', value: 'Pass', detail: 'Buffer remains acceptable', tone: 'green', score: 80 },
    { label: 'Vehicle Value Stress', value: 'Watch', detail: 'Minor LTV sensitivity', tone: 'yellow', score: 74 },
    { label: 'Market Stress', value: 'Review', detail: 'Rate environment watch', tone: 'yellow', score: 72 },
    { label: 'Final Probability', value: '86%', detail: 'Strong approve path', tone: 'green', score: 86 }
  ],
  v1DecisionUse:
    'V1 uses the combined bureau, income, employment, residence, wallet, on-chain, vehicle, collateral, and market inputs to calculate approval probability and recommend an approval path.',
  v2ShadowAuditUse:
    'V2 audits whether V1 approval probability correctly predicts repayment quality, false approvals, missed approvals, tier routing quality, lender yield, and loss exposure before any model promotion.',
  reasonCodes: [
    'APPROVAL_PROBABILITY_STRONG',
    'APPROVAL_CONFIDENCE_HIGH',
    'APPROVAL_GRADE_ACCEPTABLE',
    'APPROVAL_EXPECTED_LOSS_LOW',
    'APPROVAL_OFFER_COMPETITIVE',
    'APPROVAL_RECOMMENDED_ACTION_STRONG_APPROVE'
  ]
};
