import type { AuditMetric } from './types';

export type VehicleVerification = {
  label: string;
  value: string;
  status: 'Verified' | 'Pass' | 'Review' | 'Fail';
  reasonCode: string;
};

export type VehicleAuditModule = {
  id: 'vehicle-audit';
  moduleNumber: 7;
  totalModules: 14;
  title: string;
  subtitle: string;
  confidence: number;
  yearMakeModel: string;
  vin: string;
  odometer: string;
  vehicleValue: number;
  requestedLoan: number;
  loanToValue: number;
  marketRisk: string;
  valueStability: number;
  decisionImpact: string;
  riskAdjustment: string;
  verificationSignals: VehicleVerification[];
  valuationMetrics: AuditMetric[];
  conditionMetrics: AuditMetric[];
  v1DecisionUse: string;
  v2ShadowAuditUse: string;
  reasonCodes: string[];
};

export const vehicleAuditModule: VehicleAuditModule = {
  id: 'vehicle-audit',
  moduleNumber: 7,
  totalModules: 14,
  title: '7. VEHICLE AUDIT',
  subtitle: 'VIN verification, market value, vehicle condition, history, and collateral quality review.',
  confidence: 91,
  yearMakeModel: '2020 Toyota RAV4 XLE',
  vin: '3FADP0HR5LR123456',
  odometer: '62,418 km',
  vehicleValue: 32450,
  requestedLoan: 28450,
  loanToValue: 87.7,
  marketRisk: 'Low',
  valueStability: 89,
  decisionImpact: '+7%',
  riskAdjustment: '-4%',
  verificationSignals: [
    { label: 'VIN Decode', value: 'Verified', status: 'Verified', reasonCode: 'VEHICLE_VIN_VERIFIED' },
    { label: 'Market Value', value: '$32,450', status: 'Pass', reasonCode: 'VEHICLE_MARKET_VALUE_CONFIRMED' },
    { label: 'Loan-to-Value', value: '87.7%', status: 'Pass', reasonCode: 'VEHICLE_LTV_ACCEPTABLE' },
    { label: 'History Report', value: 'Clean', status: 'Pass', reasonCode: 'VEHICLE_HISTORY_CLEAN' },
    { label: 'Mileage', value: '62,418 km', status: 'Pass', reasonCode: 'VEHICLE_MILEAGE_ACCEPTABLE' },
    { label: 'Value Stability', value: 'Strong', status: 'Pass', reasonCode: 'VEHICLE_VALUE_STABLE' }
  ],
  valuationMetrics: [
    { label: 'Wholesale Value', value: '$29,800', detail: 'Auction comparable', tone: 'green', score: 86 },
    { label: 'Retail Value', value: '$34,900', detail: 'Market comparable', tone: 'green', score: 90 },
    { label: 'Approved Value', value: '$32,450', detail: 'Weighted value', tone: 'green', score: 91 },
    { label: 'Requested Loan', value: '$28,450', detail: 'Within LTV policy', tone: 'green', score: 88 },
    { label: 'Loan-to-Value', value: '87.7%', detail: 'Acceptable', tone: 'green', score: 86 },
    { label: 'Depreciation Risk', value: 'Low', detail: 'Stable model segment', tone: 'green', score: 89 }
  ],
  conditionMetrics: [
    { label: 'Vehicle History', value: 'Clean', detail: 'No major issues', tone: 'green', score: 90 },
    { label: 'Accident History', value: 'None', detail: 'Clear report', tone: 'green', score: 95 },
    { label: 'Title Status', value: 'Clean', detail: 'No branding', tone: 'green', score: 96 },
    { label: 'Mileage Risk', value: 'Normal', detail: 'Within expected range', tone: 'green', score: 84 },
    { label: 'Recall Status', value: 'Clear', detail: 'No blocking recalls', tone: 'green', score: 88 },
    { label: 'Collateral Quality', value: 'Strong', detail: 'Good recovery profile', tone: 'cyan', score: 89 }
  ],
  v1DecisionUse:
    'V1 uses VIN verification, market value, LTV, vehicle history, title status, mileage, and depreciation risk to support collateral quality and approval structure.',
  v2ShadowAuditUse:
    'V2 audits whether V1 vehicle valuation, LTV limits, depreciation assumptions, recovery outcomes, and market segment trends accurately predict repayment quality and loss severity.',
  reasonCodes: [
    'VEHICLE_VALUE_STABLE',
    'VEHICLE_VIN_VERIFIED',
    'VEHICLE_MARKET_VALUE_CONFIRMED',
    'VEHICLE_LTV_ACCEPTABLE',
    'VEHICLE_HISTORY_CLEAN',
    'VEHICLE_MILEAGE_ACCEPTABLE',
    'VEHICLE_TITLE_CLEAN'
  ]
};
