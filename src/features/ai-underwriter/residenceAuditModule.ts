import type { AuditMetric } from './types';

export type ResidenceVerification = {
  label: string;
  value: string;
  status: 'Verified' | 'Pass' | 'Review' | 'Fail';
  reasonCode: string;
};

export type ResidenceAuditModule = {
  id: 'residence-audit';
  moduleNumber: 4;
  totalModules: 14;
  title: string;
  subtitle: string;
  confidence: number;
  currentAddress: string;
  residenceType: string;
  timeAtResidence: string;
  monthlyHousingCost: number;
  housingToIncome: number;
  stabilityScore: number;
  riskAdjustment: string;
  decisionImpact: string;
  verificationSignals: ResidenceVerification[];
  stabilityMetrics: AuditMetric[];
  housingMetrics: AuditMetric[];
  v1DecisionUse: string;
  v2ShadowAuditUse: string;
  reasonCodes: string[];
};

export const residenceAuditModule: ResidenceAuditModule = {
  id: 'residence-audit',
  moduleNumber: 4,
  totalModules: 14,
  title: '4. RESIDENCE AUDIT',
  subtitle: 'Address verification, housing stability, move frequency, and payment capacity review.',
  confidence: 90,
  currentAddress: 'Verified Primary Residence',
  residenceType: 'Rented Residence',
  timeAtResidence: '3.4 Years',
  monthlyHousingCost: 1280,
  housingToIncome: 27.7,
  stabilityScore: 84,
  riskAdjustment: '-5%',
  decisionImpact: '+8%',
  verificationSignals: [
    { label: 'Address Match', value: 'Verified', status: 'Verified', reasonCode: 'RESIDENCE_ADDRESS_MATCH_VERIFIED' },
    { label: 'Time at Residence', value: '3.4 Years', status: 'Pass', reasonCode: 'RESIDENCE_TENURE_STABLE' },
    { label: 'Move Frequency', value: 'Low', status: 'Pass', reasonCode: 'RESIDENCE_MOVE_FREQUENCY_LOW' },
    { label: 'Housing Payment', value: '$1,280', status: 'Pass', reasonCode: 'RESIDENCE_HOUSING_COST_ACCEPTABLE' },
    { label: 'Housing-to-Income', value: '27.7%', status: 'Pass', reasonCode: 'RESIDENCE_HTI_ACCEPTABLE' },
    { label: 'Identity Link', value: 'Confirmed', status: 'Verified', reasonCode: 'RESIDENCE_IDENTITY_LINK_CONFIRMED' }
  ],
  stabilityMetrics: [
    { label: 'Residence Stability', value: '84%', detail: 'Good', tone: 'green', score: 84 },
    { label: 'Address Tenure', value: '3.4 Years', detail: 'Stable', tone: 'green', score: 86 },
    { label: 'Move Frequency', value: 'Low', detail: '2 addresses in 5 years', tone: 'green', score: 82 },
    { label: 'Identity Match', value: 'Verified', detail: 'KYC + bureau aligned', tone: 'green', score: 92 },
    { label: 'Housing Burden', value: '27.7%', detail: 'Acceptable', tone: 'green', score: 80 },
    { label: 'Verification Result', value: 'Pass', detail: 'Eligible', tone: 'cyan', score: 90 }
  ],
  housingMetrics: [
    { label: 'Monthly Housing Cost', value: '$1,280', detail: 'Rent verified', tone: 'green', score: 82 },
    { label: 'Housing-to-Income', value: '27.7%', detail: 'Acceptable load', tone: 'green', score: 80 },
    { label: 'Utility Stress', value: 'Low', detail: 'No severe payment stress', tone: 'green', score: 84 },
    { label: 'Residence Confidence', value: 'Verified', detail: 'Address and identity aligned', tone: 'green', score: 92 }
  ],
  v1DecisionUse:
    'V1 uses residence verification, address tenure, housing-to-income, move frequency, housing payment burden, and identity/address match to support stability scoring and approval confidence.',
  v2ShadowAuditUse:
    'V2 audits whether residence tenure, move frequency, housing burden, and address identity confidence improve prediction of early delinquency, fraud risk, and repayment stability.',
  reasonCodes: [
    'RESIDENCE_VERIFIED',
    'RESIDENCE_ADDRESS_MATCH_VERIFIED',
    'RESIDENCE_TENURE_STABLE',
    'RESIDENCE_MOVE_FREQUENCY_LOW',
    'RESIDENCE_HOUSING_COST_ACCEPTABLE',
    'RESIDENCE_HTI_ACCEPTABLE',
    'RESIDENCE_IDENTITY_LINK_CONFIRMED'
  ]
};
