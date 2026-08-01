import type { AuditMetric } from './types';

export type LenderYieldSignal = {
  label: string;
  value: string;
  status: 'Strong' | 'Pass' | 'Watch' | 'Weak';
  reasonCode: string;
};

export type YieldToLendersModule = {
  id: 'yield-to-lenders';
  moduleNumber: 13;
  totalModules: 14;
  title: string;
  subtitle: string;
  confidence: number;
  expectedYield: number;
  riskAdjustedYield: number;
  netYield: number;
  projectedRoi: number;
  monthlyYield: number;
  lenderDemand: string;
  reserveDrag: number;
  decisionImpact: string;
  riskAdjustment: string;
  yieldSignals: LenderYieldSignal[];
  yieldMetrics: AuditMetric[];
  poolMetrics: AuditMetric[];
  v1DecisionUse: string;
  v2ShadowAuditUse: string;
  reasonCodes: string[];
};

export const yieldToLendersModule: YieldToLendersModule = {
  id: 'yield-to-lenders',
  moduleNumber: 13,
  totalModules: 14,
  title: '13. YIELD TO LENDERS',
  subtitle: 'Projected lender yield, risk-adjusted return, reserve drag, pool demand, liquidity fit, and repayment-yield quality review.',
  confidence: 90,
  expectedYield: 15.42,
  riskAdjustedYield: 11.87,
  netYield: 13.26,
  projectedRoi: 72.35,
  monthlyYield: 1.18,
  lenderDemand: 'High',
  reserveDrag: 2.16,
  decisionImpact: '+8%',
  riskAdjustment: '-2%',
  yieldSignals: [
    { label: 'Expected Yield', value: '15.42%', status: 'Strong', reasonCode: 'YIELD_EXPECTED_STRONG' },
    { label: 'Risk-Adjusted Yield', value: '11.87%', status: 'Pass', reasonCode: 'YIELD_RISK_ADJUSTED_ACCEPTABLE' },
    { label: 'Net Yield', value: '13.26%', status: 'Pass', reasonCode: 'YIELD_NET_POSITIVE' },
    { label: 'Pool Demand', value: 'High', status: 'Strong', reasonCode: 'YIELD_LENDER_DEMAND_HIGH' },
    { label: 'Reserve Drag', value: '2.16%', status: 'Pass', reasonCode: 'YIELD_RESERVE_DRAG_ACCEPTABLE' },
    { label: 'Yield Quality', value: 'Strong', status: 'Strong', reasonCode: 'YIELD_QUALITY_STRONG' }
  ],
  yieldMetrics: [
    { label: 'Expected Yield', value: '15.42%', detail: 'Projected gross yield', tone: 'green', score: 90 },
    { label: 'Risk-Adjusted Yield', value: '11.87%', detail: 'After modeled risk', tone: 'green', score: 86 },
    { label: 'Net Yield', value: '13.26%', detail: 'After reserve drag', tone: 'green', score: 88 },
    { label: 'Monthly Yield', value: '1.18%', detail: 'Projected monthly return', tone: 'cyan', score: 84 },
    { label: 'Projected ROI', value: '72.35%', detail: 'Term-level projection', tone: 'green', score: 87 },
    { label: 'Yield Result', value: 'Pass', detail: 'Proceed to final action', tone: 'green', score: 90 }
  ],
  poolMetrics: [
    { label: 'Lender Demand', value: 'High', detail: 'Active Tier 2 demand', tone: 'green', score: 91 },
    { label: 'Pool Capacity', value: 'Healthy', detail: 'Capital available', tone: 'green', score: 86 },
    { label: 'Reserve Drag', value: '2.16%', detail: 'Acceptable buffer cost', tone: 'green', score: 82 },
    { label: 'Yield Volatility', value: 'Low', detail: 'Stable projected band', tone: 'green', score: 84 },
    { label: 'Loss Buffer', value: 'Covered', detail: 'Reserve layer aligned', tone: 'cyan', score: 85 },
    { label: 'Investor Fit', value: 'Strong', detail: 'Risk tier demand matched', tone: 'green', score: 90 }
  ],
  v1DecisionUse:
    'V1 uses projected yield, risk-adjusted yield, reserve drag, pool demand, capacity, loss buffer, and investor-fit metrics to confirm whether the deal supports lender economics.',
  v2ShadowAuditUse:
    'V2 audits whether V1 yield projections match actual repayment, realized loss, reserve performance, liquidity use, and lender return quality before any model-weight promotion.',
  reasonCodes: [
    'YIELD_EXPECTED_STRONG',
    'YIELD_RISK_ADJUSTED_ACCEPTABLE',
    'YIELD_NET_POSITIVE',
    'YIELD_LENDER_DEMAND_HIGH',
    'YIELD_RESERVE_DRAG_ACCEPTABLE',
    'YIELD_QUALITY_STRONG'
  ]
};
