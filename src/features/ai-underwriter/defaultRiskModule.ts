import type { AuditMetric } from './types';

export type DefaultRiskSignal = {
  label: string;
  value: string;
  status: 'Low' | 'Pass' | 'Review' | 'High';
  reasonCode: string;
};

export type DefaultRiskModule = {
  id: 'default-risk';
  moduleNumber: 11;
  totalModules: 14;
  title: string;
  subtitle: string;
  confidence: number;
  defaultRiskScore: number;
  probabilityOfDefault: number;
  lossGivenDefault: number;
  expectedLoss: number;
  paymentBehaviorScore: number;
  recoveryOutlook: string;
  decisionImpact: string;
  riskAdjustment: string;
  riskSignals: DefaultRiskSignal[];
  riskMetrics: AuditMetric[];
  stressMetrics: AuditMetric[];
  v1DecisionUse: string;
  v2ShadowAuditUse: string;
  reasonCodes: string[];
};

export const defaultRiskModule: DefaultRiskModule = {
  id: 'default-risk',
  moduleNumber: 11,
  totalModules: 14,
  title: '11. DEFAULT RISK',
  subtitle: 'Probability of default, loss severity, payment behavior, stress sensitivity, and recovery outlook review.',
  confidence: 90,
  defaultRiskScore: 23,
  probabilityOfDefault: 2.35,
  lossGivenDefault: 28,
  expectedLoss: 0.66,
  paymentBehaviorScore: 88,
  recoveryOutlook: 'Low Loss Severity',
  decisionImpact: '+9%',
  riskAdjustment: '-7%',
  riskSignals: [
    { label: 'Default Risk Score', value: '23', status: 'Low', reasonCode: 'DEFAULT_RISK_LOW' },
    { label: 'Probability of Default', value: '2.35%', status: 'Low', reasonCode: 'DEFAULT_PD_LOW' },
    { label: 'Loss Given Default', value: '28%', status: 'Pass', reasonCode: 'DEFAULT_LGD_ACCEPTABLE' },
    { label: 'Expected Loss', value: '0.66%', status: 'Low', reasonCode: 'DEFAULT_EXPECTED_LOSS_LOW' },
    { label: 'Payment Behavior', value: '88/100', status: 'Pass', reasonCode: 'DEFAULT_PAYMENT_BEHAVIOR_STRONG' },
    { label: 'Recovery Outlook', value: 'Low Severity', status: 'Pass', reasonCode: 'DEFAULT_RECOVERY_OUTLOOK_STRONG' }
  ],
  riskMetrics: [
    { label: 'Default Risk Score', value: '23', detail: 'Low-risk band', tone: 'green', score: 88 },
    { label: 'PD', value: '2.35%', detail: 'Below threshold', tone: 'green', score: 90 },
    { label: 'LGD', value: '28%', detail: 'Acceptable loss severity', tone: 'green', score: 84 },
    { label: 'Expected Loss', value: '0.66%', detail: 'Low reserve pressure', tone: 'green', score: 89 },
    { label: 'Payment Behavior', value: '88/100', detail: 'Strong payment outlook', tone: 'green', score: 88 },
    { label: 'Recovery Outlook', value: 'Low Severity', detail: 'Collateral support strong', tone: 'cyan', score: 86 }
  ],
  stressMetrics: [
    { label: 'Income Stress', value: 'Pass', detail: 'Payment buffer remains', tone: 'green', score: 82 },
    { label: 'Rate Stress', value: 'Pass', detail: 'Offer remains serviceable', tone: 'green', score: 80 },
    { label: 'Collateral Stress', value: 'Watch', detail: 'Value drift monitored', tone: 'yellow', score: 74 },
    { label: 'Market Stress', value: 'Review', detail: 'Rate cycle watch', tone: 'yellow', score: 72 },
    { label: 'Reserve Stress', value: 'Low', detail: 'Low expected draw', tone: 'green', score: 86 },
    { label: 'Final Risk Result', value: 'Low', detail: 'Proceed to funding source', tone: 'green', score: 88 }
  ],
  v1DecisionUse:
    'V1 uses probability of default, loss given default, expected loss, payment behavior, collateral recovery, and stress scenarios to support pricing, reserve exposure, and funding-source selection.',
  v2ShadowAuditUse:
    'V2 audits whether V1 default-risk predictions match real payment performance, early delinquency, loss severity, recovery outcomes, and reserve pressure before any model-weight promotion.',
  reasonCodes: [
    'DEFAULT_RISK_LOW',
    'DEFAULT_PD_LOW',
    'DEFAULT_LGD_ACCEPTABLE',
    'DEFAULT_EXPECTED_LOSS_LOW',
    'DEFAULT_PAYMENT_BEHAVIOR_STRONG',
    'DEFAULT_RECOVERY_OUTLOOK_STRONG'
  ]
};
