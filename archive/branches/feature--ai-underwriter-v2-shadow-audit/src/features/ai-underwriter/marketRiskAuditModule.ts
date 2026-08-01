import type { AuditMetric } from './types';

export type MarketRiskVerification = {
  label: string;
  value: string;
  status: 'Verified' | 'Pass' | 'Review' | 'Fail';
  reasonCode: string;
};

export type MarketRiskAuditModule = {
  id: 'market-risk-audit';
  moduleNumber: 9;
  totalModules: 14;
  title: string;
  subtitle: string;
  confidence: number;
  marketRiskScore: number;
  segmentRisk: string;
  rateEnvironment: string;
  demandSignal: string;
  depreciationTrend: string;
  liquiditySignal: string;
  decisionImpact: string;
  riskAdjustment: string;
  verificationSignals: MarketRiskVerification[];
  macroMetrics: AuditMetric[];
  segmentMetrics: AuditMetric[];
  v1DecisionUse: string;
  v2ShadowAuditUse: string;
  reasonCodes: string[];
};

export const marketRiskAuditModule: MarketRiskAuditModule = {
  id: 'market-risk-audit',
  moduleNumber: 9,
  totalModules: 14,
  title: '9. MARKET RISK AUDIT',
  subtitle: 'Macro conditions, vehicle-segment demand, rate environment, liquidity, depreciation, and recovery market review.',
  confidence: 87,
  marketRiskScore: 79,
  segmentRisk: 'Low-Medium',
  rateEnvironment: 'Elevated but Stable',
  demandSignal: 'Healthy',
  depreciationTrend: 'Stable',
  liquiditySignal: 'Good',
  decisionImpact: '+3%',
  riskAdjustment: '+1%',
  verificationSignals: [
    { label: 'Vehicle Segment Demand', value: 'Healthy', status: 'Pass', reasonCode: 'MARKET_SEGMENT_DEMAND_HEALTHY' },
    { label: 'Depreciation Trend', value: 'Stable', status: 'Pass', reasonCode: 'MARKET_DEPRECIATION_STABLE' },
    { label: 'Recovery Liquidity', value: 'Good', status: 'Pass', reasonCode: 'MARKET_RECOVERY_LIQUIDITY_GOOD' },
    { label: 'Rate Environment', value: 'Elevated', status: 'Review', reasonCode: 'MARKET_RATE_ENVIRONMENT_ELEVATED' },
    { label: 'Auction Spread', value: 'Acceptable', status: 'Pass', reasonCode: 'MARKET_AUCTION_SPREAD_ACCEPTABLE' },
    { label: 'Regional Demand', value: 'Stable', status: 'Pass', reasonCode: 'MARKET_REGIONAL_DEMAND_STABLE' }
  ],
  macroMetrics: [
    { label: 'Rate Environment', value: 'Elevated', detail: 'Stable trend', tone: 'yellow', score: 72 },
    { label: 'Consumer Demand', value: 'Healthy', detail: 'Segment support', tone: 'green', score: 84 },
    { label: 'Used Vehicle Index', value: 'Stable', detail: 'Low volatility', tone: 'green', score: 81 },
    { label: 'Credit Stress', value: 'Moderate', detail: 'Watch trend', tone: 'yellow', score: 74 },
    { label: 'Recovery Liquidity', value: 'Good', detail: 'Exit path supported', tone: 'green', score: 86 },
    { label: 'Market Risk Result', value: 'Pass', detail: 'No block signal', tone: 'cyan', score: 79 }
  ],
  segmentMetrics: [
    { label: 'RAV4 Segment Demand', value: 'Strong', detail: 'High resale demand', tone: 'green', score: 88 },
    { label: 'Depreciation Risk', value: 'Low', detail: 'Stable segment', tone: 'green', score: 84 },
    { label: 'Inventory Supply', value: 'Balanced', detail: 'No oversupply', tone: 'green', score: 80 },
    { label: 'Auction Spread', value: 'Acceptable', detail: 'Normal wholesale gap', tone: 'green', score: 78 },
    { label: 'Regional Liquidity', value: 'Good', detail: 'Dealer exit path', tone: 'green', score: 82 },
    { label: 'Portfolio Sensitivity', value: 'Watch', detail: 'Rate-sensitive pool', tone: 'yellow', score: 72 }
  ],
  v1DecisionUse:
    'V1 uses market risk, segment demand, depreciation trend, recovery liquidity, auction spread, and rate environment to adjust approval confidence, expected loss, and yield requirements.',
  v2ShadowAuditUse:
    'V2 audits whether V1 market-risk weights correctly predict repayment quality, recovery values, liquidation timing, lender yield, and reserve stress across changing market cycles.',
  reasonCodes: [
    'MARKET_RISK_LOW',
    'MARKET_SEGMENT_DEMAND_HEALTHY',
    'MARKET_DEPRECIATION_STABLE',
    'MARKET_RECOVERY_LIQUIDITY_GOOD',
    'MARKET_RATE_ENVIRONMENT_ELEVATED',
    'MARKET_AUCTION_SPREAD_ACCEPTABLE',
    'MARKET_REGIONAL_DEMAND_STABLE'
  ]
};
