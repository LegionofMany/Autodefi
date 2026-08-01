import type { AuditMetric } from './types';

export type FundingSourceSignal = {
  label: string;
  value: string;
  status: 'Best' | 'Pass' | 'Review' | 'Unavailable';
  reasonCode: string;
};

export type BestFundingSourceModule = {
  id: 'best-funding-source';
  moduleNumber: 12;
  totalModules: 14;
  title: string;
  subtitle: string;
  confidence: number;
  selectedSource: string;
  poolTier: string;
  capitalMatchScore: number;
  expectedApr: number;
  expectedYield: number;
  poolUtilization: number;
  reserveCoverage: string;
  decisionImpact: string;
  riskAdjustment: string;
  fundingSignals: FundingSourceSignal[];
  sourceMetrics: AuditMetric[];
  poolMetrics: AuditMetric[];
  v1DecisionUse: string;
  v2ShadowAuditUse: string;
  reasonCodes: string[];
};

export const bestFundingSourceModule: BestFundingSourceModule = {
  id: 'best-funding-source',
  moduleNumber: 12,
  totalModules: 14,
  title: '12. BEST FUNDING SOURCE',
  subtitle: 'Capital pool routing, tier match, lender-yield fit, reserve coverage, liquidity, and funding readiness review.',
  confidence: 91,
  selectedSource: 'AutoDeFi Capital Pool',
  poolTier: 'Tier 2 Medium Risk Pool',
  capitalMatchScore: 92,
  expectedApr: 7.24,
  expectedYield: 15.42,
  poolUtilization: 64,
  reserveCoverage: 'Strong',
  decisionImpact: '+10%',
  riskAdjustment: '-4%',
  fundingSignals: [
    { label: 'Selected Source', value: 'AutoDeFi Capital Pool', status: 'Best', reasonCode: 'FUNDING_SOURCE_BEST_MATCH' },
    { label: 'Tier Match', value: 'Tier 2', status: 'Pass', reasonCode: 'FUNDING_TIER_MATCH_CONFIRMED' },
    { label: 'Capital Availability', value: 'Available', status: 'Pass', reasonCode: 'FUNDING_CAPITAL_AVAILABLE' },
    { label: 'Yield Fit', value: '15.42%', status: 'Pass', reasonCode: 'FUNDING_YIELD_FIT_STRONG' },
    { label: 'Reserve Coverage', value: 'Strong', status: 'Pass', reasonCode: 'FUNDING_RESERVE_COVERAGE_STRONG' },
    { label: 'Funding Readiness', value: 'Ready', status: 'Best', reasonCode: 'FUNDING_READY_FOR_DEAL_FLOW' }
  ],
  sourceMetrics: [
    { label: 'Capital Match', value: '92%', detail: 'Best pool fit', tone: 'green', score: 92 },
    { label: 'Pool Tier', value: 'Tier 2', detail: 'Risk tier aligned', tone: 'green', score: 90 },
    { label: 'APR Fit', value: '7.24%', detail: 'Borrower offer aligned', tone: 'cyan', score: 86 },
    { label: 'Expected Yield', value: '15.42%', detail: 'Lender target supported', tone: 'green', score: 88 },
    { label: 'Pool Utilization', value: '64%', detail: 'Healthy capacity', tone: 'green', score: 84 },
    { label: 'Funding Readiness', value: 'Ready', detail: 'Proceed to yield module', tone: 'green', score: 91 }
  ],
  poolMetrics: [
    { label: 'Available Capital', value: '$4.8M', detail: 'Open pool capacity', tone: 'green', score: 88 },
    { label: 'Reserve Coverage', value: 'Strong', detail: 'Reserve layer healthy', tone: 'green', score: 90 },
    { label: 'Investor Demand', value: 'High', detail: 'Tier 2 demand active', tone: 'green', score: 87 },
    { label: 'Liquidity Window', value: 'Open', detail: 'Deal can fund', tone: 'green', score: 89 },
    { label: 'Concentration Risk', value: 'Low', detail: 'Pool not overexposed', tone: 'green', score: 85 },
    { label: 'Funding Source Result', value: 'Best Match', detail: 'Use selected source', tone: 'cyan', score: 92 }
  ],
  v1DecisionUse:
    'V1 uses tier match, capital availability, APR fit, expected yield, pool utilization, reserve coverage, and concentration risk to route the deal to the best funding source.',
  v2ShadowAuditUse:
    'V2 audits whether V1 funding-source routing improves lender yield, repayment quality, reserve performance, liquidity use, concentration control, and dealer funding speed before promotion.',
  reasonCodes: [
    'FUNDING_SOURCE_BEST_MATCH',
    'FUNDING_TIER_MATCH_CONFIRMED',
    'FUNDING_CAPITAL_AVAILABLE',
    'FUNDING_YIELD_FIT_STRONG',
    'FUNDING_RESERVE_COVERAGE_STRONG',
    'FUNDING_READY_FOR_DEAL_FLOW'
  ]
};
