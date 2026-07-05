import { auditModules, recursiveLearningSignals, v1DecisionSnapshot, v2ShadowAuditSnapshot } from './aiUnderwriterV2Data';
import type { AuditModuleSummary, RecursiveLearningSignal, V1DecisionSnapshot, V2ShadowAuditSnapshot } from './types';

export type RecursiveAuditResult = {
  v1Decision: V1DecisionSnapshot;
  v2ShadowAudit: V2ShadowAuditSnapshot;
  moduleQualityAverage: number;
  totalDecisionImpact: number;
  totalRiskAdjustment: number;
  strongestModules: AuditModuleSummary[];
  watchModules: AuditModuleSummary[];
  recursiveLearningSignals: RecursiveLearningSignal[];
  promotionLocked: true;
  canMutateV1Decision: false;
  nextAction: string;
};

export function runRecursiveShadowAudit(): RecursiveAuditResult {
  const scoredModules = auditModules.filter((module) => module.id !== 'audit-program-settings');
  const moduleQualityAverage = Math.round(
    scoredModules.reduce((sum, module) => sum + module.confidence, 0) / scoredModules.length
  );

  const totalDecisionImpact = Number(
    scoredModules.reduce((sum, module) => sum + module.decisionImpact, 0).toFixed(2)
  );

  const totalRiskAdjustment = Number(
    scoredModules.reduce((sum, module) => sum + module.riskAdjustment, 0).toFixed(2)
  );

  const strongestModules = [...scoredModules]
    .sort((a, b) => b.confidence - a.confidence)
    .slice(0, 5);

  const watchModules = scoredModules.filter((module) => module.confidence < 85 || module.status === 'review');

  return {
    v1Decision: v1DecisionSnapshot,
    v2ShadowAudit: v2ShadowAuditSnapshot,
    moduleQualityAverage,
    totalDecisionImpact,
    totalRiskAdjustment,
    strongestModules,
    watchModules,
    recursiveLearningSignals,
    promotionLocked: true,
    canMutateV1Decision: false,
    nextAction:
      'Keep V1 decision active, keep V2 in shadow mode, collect outcome evidence, then send recommendations through model-governance review.'
  };
}

export function assertV2PromotionGate(result = runRecursiveShadowAudit()) {
  return {
    shadowModeOnly: result.v2ShadowAudit.mode === 'shadow_mode',
    canMutateV1Decision: result.canMutateV1Decision,
    promotionLocked: result.promotionLocked,
    requiresHumanPromotionApproval: result.v2ShadowAudit.requiresHumanPromotionApproval,
    hasRecursiveLearningSignals: result.recursiveLearningSignals.length >= 5,
    hasOnChainModule: auditModules.some((module) => module.id === 'on-chain-audit' && module.moduleNumber === 6),
    hasSettingsModule: auditModules.some((module) => module.id === 'audit-program-settings' && module.moduleNumber === 15)
  };
}
