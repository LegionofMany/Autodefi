import type { AuditMetric, AuditModuleSummary, RecursiveLearningSignal, V1DecisionSnapshot, V2ShadowAuditSnapshot } from './types';

export const v1DecisionSnapshot: V1DecisionSnapshot = {
  decisionId: 'NRU-2024-0520-105602',
  applicantName: 'Sarah Mitchell',
  vin: '3FADP0HR5LR123456',
  loanAmount: 28450,
  requestedTermMonths: 60,
  downPayment: 4000,
  creditScore: 724,
  verifiedIncome: 55420,
  debtToIncome: 22,
  recommendedTier: 'Tier 2 (Medium Risk)',
  approvalProbability: 86,
  predictedDefaultRisk: 2.35,
  fundingSource: 'AutoDeFi Capital Pool',
  estimatedApr: 7.24,
  expectedYieldToLenders: 15.42,
  action: 'approve',
  reasonCodes: [
    'BUREAU_SCORE_GOOD',
    'INCOME_VERIFIED_STABLE',
    'EMPLOYMENT_STABLE',
    'RESIDENCE_VERIFIED',
    'WALLET_HIGH_TRUST',
    'ONCHAIN_SANCTIONS_CLEAR',
    'VEHICLE_VALUE_STABLE',
    'COLLATERAL_LTV_ACCEPTABLE',
    'MARKET_RISK_LOW',
    'DEFAULT_RISK_LOW'
  ],
  createdAt: '2024-05-20T10:56:02-05:00'
};

export const v2ShadowAuditSnapshot: V2ShadowAuditSnapshot = {
  mode: 'shadow_mode',
  modelName: 'NeuralRisk V2 Shadow Auditor',
  modelVersion: 'v2.0.0-shadow.1',
  canMutateV1Decision: false,
  requiresHumanPromotionApproval: true,
  auditedDecisionId: v1DecisionSnapshot.decisionId,
  v1DecisionQualityScore: 88,
  v2ConfidenceScore: 91,
  approvalQualityScore: 89,
  declineQualityScore: 84,
  tierRoutingQualityScore: 87,
  marketLearningReadiness: 78,
  driftRisk: 'low',
  recommendation: 'Keep V1 approval. Shadow V2 recommends monitoring stable-value repayment behavior and Toyota RAV4 segment value drift before promotion.',
  promotionGateStatus: 'locked_shadow_only'
};

export const aiUnderwriterStatusMetrics: AuditMetric[] = [
  { label: 'NeuralRisk AI', value: 'Active', detail: 'V1 live + V2 shadow', tone: 'green', score: 100 },
  { label: 'Models Online', value: '15', detail: 'Full V2 flow locked', tone: 'cyan', score: 100 },
  { label: 'Accuracy', value: '98.7%', detail: 'Sandbox benchmark', tone: 'blue', score: 98.7 },
  { label: 'Decisions Today', value: '1,842', detail: 'V1 decisions audited', tone: 'purple', score: 92 },
  { label: 'AI Status', value: 'Active', detail: 'Shadow gate locked', tone: 'green', score: 100 }
];

export const commandCenterMetrics: AuditMetric[] = [
  { label: 'Approval Probability', value: '86%', detail: 'V1 live signal', tone: 'green', score: 86 },
  { label: 'V2 Shadow Confidence', value: '91%', detail: 'Independent audit', tone: 'cyan', score: 91 },
  { label: 'Predicted Default Risk', value: '2.35%', detail: 'Low risk', tone: 'green', score: 88 },
  { label: 'Expected Yield', value: '15.42%', detail: 'AutoDeFi pool', tone: 'purple', score: 86 },
  { label: 'Decision Time', value: '1.42s', detail: 'V1 operating speed', tone: 'blue', score: 95 },
  { label: 'Promotion Gate', value: 'Locked', detail: 'Human approval required', tone: 'orange', score: 75 }
];

export const auditModules: AuditModuleSummary[] = [
  { id: 'bureau-audit', moduleNumber: 1, label: 'Bureau Audit', shortLabel: 'Credit Bureau Analysis', subtitle: 'Credit score, utilization, history, inquiries, and derogatory marks.', status: 'complete', confidence: 94, score: 724, decisionImpact: 8, riskAdjustment: -5, v1Signal: 'Good bureau profile', v2LearningSignal: 'Compare bureau score bands to repayment quality and missed approvals.', reasonCodes: ['BUREAU_SCORE_GOOD', 'BUREAU_PAYMENT_HISTORY_STRONG'] },
  { id: 'income-audit', moduleNumber: 2, label: 'Income Audit', shortLabel: 'Income Verification', subtitle: 'Income source, stability, cash flow, and debt-to-income capacity.', status: 'complete', confidence: 93, score: 96, decisionImpact: 10, riskAdjustment: -7, v1Signal: 'Verified stable income', v2LearningSignal: 'Learn cash-flow thresholds that predict low delinquency.', reasonCodes: ['INCOME_VERIFIED_STABLE', 'DTI_ACCEPTABLE'] },
  { id: 'employment-audit', moduleNumber: 3, label: 'Employment Audit', shortLabel: 'Employment Stability', subtitle: 'Employer verification, tenure, industry stability, and continuity.', status: 'complete', confidence: 92, score: 86, decisionImpact: 12, riskAdjustment: -8, v1Signal: 'Stable employment', v2LearningSignal: 'Audit tenure impact by sector and regional layoff risk.', reasonCodes: ['EMPLOYMENT_STABLE', 'INDUSTRY_RISK_LOW'] },
  { id: 'residence-audit', moduleNumber: 4, label: 'Residence Audit', shortLabel: 'Address History', subtitle: 'Address verification, time at residence, move frequency, and stability.', status: 'complete', confidence: 90, score: 82, decisionImpact: 8, riskAdjustment: -5, v1Signal: 'Verified residence', v2LearningSignal: 'Learn relationship between move frequency and default risk.', reasonCodes: ['RESIDENCE_VERIFIED', 'LOW_MOVE_FREQUENCY'] },
  { id: 'wallet-audit', moduleNumber: 5, label: 'Wallet Audit', shortLabel: 'Wallet Behavior', subtitle: 'Wallet score, trust level, token mix, activity, and identity link.', status: 'complete', confidence: 84, score: 782, decisionImpact: 6, riskAdjustment: -3, v1Signal: 'High-trust wallet', v2LearningSignal: 'Detect whether wallet trust improves repayment prediction.', reasonCodes: ['WALLET_HIGH_TRUST', 'WALLET_KYC_VERIFIED'] },
  { id: 'on-chain-audit', moduleNumber: 6, label: 'On-Chain Audit', shortLabel: 'Blockchain Analysis', subtitle: 'Blockchain behavior, stable-value rail readiness, AML, protocol exposure, and counterparty risk.', status: 'complete', confidence: 89, score: 83, decisionImpact: 5, riskAdjustment: -3, v1Signal: 'Clean on-chain behavior', v2LearningSignal: 'Audit stablecoin history and protocol exposure against repayment outcomes.', reasonCodes: ['ONCHAIN_SANCTIONS_CLEAR', 'ONCHAIN_STABLECOIN_HISTORY_STRONG'] },
  { id: 'vehicle-audit', moduleNumber: 7, label: 'Vehicle Audit', shortLabel: 'Vehicle Evaluation', subtitle: 'Vehicle value, mileage, condition, history, reliability, and demand.', status: 'complete', confidence: 87, score: 87, decisionImpact: 7, riskAdjustment: -4, v1Signal: 'Strong vehicle profile', v2LearningSignal: 'Learn value drift and recovery performance by make/model/segment.', reasonCodes: ['VEHICLE_VALUE_STABLE', 'TITLE_CLEAN'] },
  { id: 'collateral-audit', moduleNumber: 8, label: 'Collateral Audit', shortLabel: 'Collateral & LTV', subtitle: 'LTV, equity, lien position, coverage ratio, and liquidation readiness.', status: 'complete', confidence: 85, score: 85, decisionImpact: 7, riskAdjustment: -4, v1Signal: 'Healthy collateral', v2LearningSignal: 'Compare LTV bands to loss-given-default outcomes.', reasonCodes: ['COLLATERAL_LTV_ACCEPTABLE', 'FIRST_LIEN_POSITION'] },
  { id: 'market-risk-audit', moduleNumber: 9, label: 'Market Risk Audit', shortLabel: 'Market & Depreciation', subtitle: 'Market conditions, depreciation, demand, supply, and economic risk.', status: 'complete', confidence: 78, score: 78, decisionImpact: 6, riskAdjustment: -3, v1Signal: 'Low market risk', v2LearningSignal: 'Learn vehicle segment drift from auction and ZONYCS resale data.', reasonCodes: ['MARKET_RISK_LOW', 'DEPRECIATION_STABLE'] },
  { id: 'approval-probability', moduleNumber: 10, label: 'Approval Probability', shortLabel: 'AI Approval Score', subtitle: 'Approval likelihood, decision strength, confidence, and scenario analysis.', status: 'complete', confidence: 92, score: 86, decisionImpact: 8, riskAdjustment: -4, v1Signal: 'Approve with standard terms', v2LearningSignal: 'Back-test approval probability against live deal performance.', reasonCodes: ['APPROVAL_PROBABILITY_STRONG', 'APPROVAL_CONFIDENCE_HIGH'] },
  { id: 'default-risk', moduleNumber: 11, label: 'Default Risk', shortLabel: 'Default & Payment Risk', subtitle: 'Probability of default, loss given default, expected loss, and recovery outlook.', status: 'complete', confidence: 88, score: 23, decisionImpact: 6, riskAdjustment: -2.1, v1Signal: 'Low default risk', v2LearningSignal: 'Tune PD/LGD using actual delinquency, recovery, and pool loss data.', reasonCodes: ['DEFAULT_RISK_LOW', 'DEFAULT_PD_LOW'] },
  { id: 'best-funding-source', moduleNumber: 12, label: 'Best Funding Source', shortLabel: 'Optimal Funding Match', subtitle: 'Funding terms, lender match, payment options, and cost analysis.', status: 'complete', confidence: 91, score: 91, decisionImpact: 7, riskAdjustment: -3, v1Signal: 'AutoDeFi Capital Pool best match', v2LearningSignal: 'Learn which funding sources produce best risk-adjusted outcomes.', reasonCodes: ['FUNDING_SOURCE_BEST_MATCH', 'FUNDING_TIER_MATCH_CONFIRMED'] },
  { id: 'yield-to-lenders', moduleNumber: 13, label: 'Yield to Lenders', shortLabel: 'Expected Lender Yield', subtitle: 'Risk-adjusted yield, lender profitability, demand, and allocation.', status: 'complete', confidence: 88, score: 88, decisionImpact: 8, riskAdjustment: -3, v1Signal: 'High yield confidence', v2LearningSignal: 'Compare expected yield against realized pool yield after reserves and losses.', reasonCodes: ['YIELD_EXPECTED_STRONG', 'YIELD_LENDER_DEMAND_HIGH'] },
  { id: 'final-action', moduleNumber: 14, label: 'Final Action', shortLabel: 'Decision & Offer', subtitle: 'Final decision, offer terms, conditions, next steps, and report export.', status: 'complete', confidence: 86, score: 86, decisionImpact: 0, riskAdjustment: 0, v1Signal: 'Proceed with approved offer', v2LearningSignal: 'Audit final offer accuracy against repayment and funding outcomes.', reasonCodes: ['FINAL_ACTION_READY', 'FINAL_V2_SHADOW_LOCKED'] },
  { id: 'audit-program-settings', moduleNumber: 15, label: 'Audit Program Settings', shortLabel: 'System Configuration', subtitle: 'Scoring weights, thresholds, data sources, permissions, and model governance.', status: 'complete', confidence: 100, score: 100, decisionImpact: 0, riskAdjustment: 0, v1Signal: 'Configuration active', v2LearningSignal: 'Govern recursive learning, retraining, promotion gates, and rollback policies.', reasonCodes: ['SETTINGS_V2_SHADOW_LOCKED', 'SETTINGS_HUMAN_PROMOTION_REQUIRED'] }
];

export const recursiveLearningSignals: RecursiveLearningSignal[] = [
  { id: 'market-value-drift', label: 'Vehicle market value drift', source: 'market', currentFinding: 'Compact SUV market remains stable with positive resale demand.', v2Action: 'Keep Vehicle and Market Risk weights unchanged until drift exceeds threshold.', humanGateRequired: true, tone: 'green' },
  { id: 'stable-rail-readiness', label: 'Stable-value repayment readiness', source: 'on_chain', currentFinding: 'Applicant has meaningful stablecoin transaction history and clean screening.', v2Action: 'Recommend tracking stable-value rail history as a confidence booster, not a standalone approval factor.', humanGateRequired: true, tone: 'cyan' },
  { id: 'tier-routing-quality', label: 'Tier 2 routing quality', source: 'portfolio', currentFinding: 'Current indicators align with Tier 2 risk and yield expectations.', v2Action: 'Shadow-audit Tier 2 realized performance before promoting scoring changes.', humanGateRequired: true, tone: 'purple' },
  { id: 'dealer-funding-speed', label: 'Funding source performance', source: 'dealer', currentFinding: 'AutoDeFi Capital Pool gives strongest terms and fastest time-to-funding.', v2Action: 'Monitor dealer payout timing and borrower first-payment performance.', humanGateRequired: true, tone: 'blue' },
  { id: 'default-risk-backtest', label: 'Default risk back-test', source: 'repayment', currentFinding: 'Predicted default risk is low, but V2 needs repayment outcomes before learning promotion.', v2Action: 'Hold in shadow mode until enough payment-cycle evidence exists.', humanGateRequired: true, tone: 'orange' }
];
