import { auditModules } from '../aiUnderwriterV2Data';
import type { V1DecisionInput, V1DecisionOutput } from './brainTypes';

function buildDecisionId(input: V1DecisionInput) {
  const vinTail = input.vin.slice(-6).toUpperCase();
  return `ADF-V1-${vinTail}-${input.loanAmount}`;
}

function calculateApprovalProbability(input: V1DecisionInput) {
  const creditComponent = Math.min(30, Math.max(0, (input.creditScore - 550) / 6));
  const incomeComponent = input.debtToIncome <= 25 ? 24 : input.debtToIncome <= 35 ? 18 : 10;
  const collateralComponent = input.collateralCoverage >= 110 ? 18 : input.collateralCoverage >= 100 ? 14 : 8;
  const walletComponent = input.walletScore >= 750 ? 12 : input.walletScore >= 650 ? 8 : 4;
  const defaultRiskComponent = input.predictedDefaultRisk <= 3 ? 12 : input.predictedDefaultRisk <= 6 ? 7 : 2;
  return Math.round(creditComponent + incomeComponent + collateralComponent + walletComponent + defaultRiskComponent);
}

function calculateApr(input: V1DecisionInput) {
  const baseApr = 7.24;
  const dtiLoad = input.debtToIncome > 30 ? 1.25 : 0;
  const ltvLoad = input.collateralCoverage < 110 ? 0.75 : 0;
  const walletCredit = input.walletScore >= 750 ? -0.25 : 0;
  return Number((baseApr + dtiLoad + ltvLoad + walletCredit).toFixed(2));
}

export function runV1DecisionEngine(input: V1DecisionInput): V1DecisionOutput {
  const approvalProbability = calculateApprovalProbability(input);
  const estimatedApr = calculateApr(input);
  const expectedYieldToLenders = Number((estimatedApr + 8.18).toFixed(2));
  const action = approvalProbability >= 80 ? 'approve' : approvalProbability >= 65 ? 'conditional_approval' : 'manual_review';

  return {
    decisionId: buildDecisionId(input),
    applicantName: input.applicantName,
    vin: input.vin,
    loanAmount: input.loanAmount,
    requestedTermMonths: input.requestedTermMonths,
    downPayment: input.downPayment,
    creditScore: input.creditScore,
    verifiedIncome: input.verifiedIncome,
    debtToIncome: input.debtToIncome,
    recommendedTier: input.downPayment >= input.loanAmount / 3 ? 'Tier 1 (Collateral Strong)' : 'Tier 2 (Medium Risk)',
    approvalProbability,
    predictedDefaultRisk: input.predictedDefaultRisk,
    fundingSource: 'AutoDeFi Capital Pool',
    estimatedApr,
    expectedYieldToLenders,
    action,
    reasonCodes: [
      'V1_DECISION_ENGINE_CREATED',
      'BUREAU_SCORE_GOOD',
      'INCOME_VERIFIED_STABLE',
      'COLLATERAL_LTV_ACCEPTABLE',
      'DEFAULT_RISK_LOW',
      'FUNDING_SOURCE_BEST_MATCH'
    ],
    createdAt: new Date().toISOString(),
    decisionAuthority: 'v1_production_engine',
    requiresHumanReview: action !== 'approve',
    moduleTraceIds: auditModules.map((module) => module.id)
  };
}
