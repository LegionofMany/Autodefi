import type { AuditMetric } from './types';

export type CollateralVerification = {
  label: string;
  value: string;
  status: 'Verified' | 'Pass' | 'Review' | 'Fail';
  reasonCode: string;
};

export type CollateralAuditModule = {
  id: 'collateral-audit';
  moduleNumber: 8;
  totalModules: 14;
  title: string;
  subtitle: string;
  confidence: number;
  collateralType: string;
  collateralValue: number;
  securedAmount: number;
  collateralCoverage: number;
  protectionStatus: string;
  recoveryScore: number;
  decisionImpact: string;
  riskAdjustment: string;
  verificationSignals: CollateralVerification[];
  coverageMetrics: AuditMetric[];
  recoveryMetrics: AuditMetric[];
  v1DecisionUse: string;
  v2ShadowAuditUse: string;
  reasonCodes: string[];
};

export const collateralAuditModule: CollateralAuditModule = {
  id: 'collateral-audit',
  moduleNumber: 8,
  totalModules: 14,
  title: '8. COLLATERAL AUDIT',
  subtitle: 'Collateral coverage, lien readiness, insurance protection, reserve exposure, and recovery quality review.',
  confidence: 88,
  collateralType: 'Vehicle Secured Collateral',
  collateralValue: 32450,
  securedAmount: 28450,
  collateralCoverage: 114.1,
  protectionStatus: 'Insurance Verified',
  recoveryScore: 87,
  decisionImpact: '+6%',
  riskAdjustment: '-5%',
  verificationSignals: [
    { label: 'Collateral Type', value: 'Vehicle', status: 'Verified', reasonCode: 'COLLATERAL_TYPE_VERIFIED' },
    { label: 'Coverage Ratio', value: '114.1%', status: 'Pass', reasonCode: 'COLLATERAL_COVERAGE_ACCEPTABLE' },
    { label: 'Lien Readiness', value: 'Ready', status: 'Pass', reasonCode: 'COLLATERAL_LIEN_READY' },
    { label: 'Insurance Status', value: 'Verified', status: 'Verified', reasonCode: 'COLLATERAL_INSURANCE_VERIFIED' },
    { label: 'Recovery Profile', value: 'Strong', status: 'Pass', reasonCode: 'COLLATERAL_RECOVERY_PROFILE_STRONG' },
    { label: 'Reserve Exposure', value: 'Low', status: 'Pass', reasonCode: 'COLLATERAL_RESERVE_EXPOSURE_LOW' }
  ],
  coverageMetrics: [
    { label: 'Collateral Value', value: '$32,450', detail: 'Approved vehicle value', tone: 'green', score: 90 },
    { label: 'Secured Amount', value: '$28,450', detail: 'Loan amount secured', tone: 'green', score: 88 },
    { label: 'Coverage Ratio', value: '114.1%', detail: 'Above policy minimum', tone: 'green', score: 87 },
    { label: 'Lien Status', value: 'Ready', detail: 'Registration workflow ready', tone: 'cyan', score: 86 },
    { label: 'Insurance', value: 'Verified', detail: 'Coverage confirmed', tone: 'green', score: 92 },
    { label: 'Reserve Exposure', value: 'Low', detail: 'Covered by collateral spread', tone: 'green', score: 84 }
  ],
  recoveryMetrics: [
    { label: 'Recovery Score', value: '87%', detail: 'Strong collateral exit profile', tone: 'green', score: 87 },
    { label: 'Liquidation Path', value: 'ZONYCS Ready', detail: 'Recovery marketplace path', tone: 'cyan', score: 86 },
    { label: 'Title Quality', value: 'Clean', detail: 'No title issue', tone: 'green', score: 94 },
    { label: 'Collateral Drift', value: 'Low', detail: 'Stable model segment', tone: 'green', score: 85 },
    { label: 'Insurance Backstop', value: 'Active', detail: 'Protection layer aligned', tone: 'green', score: 88 },
    { label: 'Workout Optionality', value: 'Available', detail: 'Recovery alternatives exist', tone: 'purple', score: 80 }
  ],
  v1DecisionUse:
    'V1 uses collateral type, coverage ratio, lien readiness, insurance status, title quality, recovery path, and reserve exposure to support approval structure and pool protection.',
  v2ShadowAuditUse:
    'V2 audits whether collateral coverage, lien timing, insurance verification, recovery route, and liquidation outcomes correctly predict loss severity, reserve draw, and lender yield protection.',
  reasonCodes: [
    'COLLATERAL_LTV_ACCEPTABLE',
    'COLLATERAL_TYPE_VERIFIED',
    'COLLATERAL_COVERAGE_ACCEPTABLE',
    'COLLATERAL_LIEN_READY',
    'COLLATERAL_INSURANCE_VERIFIED',
    'COLLATERAL_RECOVERY_PROFILE_STRONG',
    'COLLATERAL_RESERVE_EXPOSURE_LOW'
  ]
};
