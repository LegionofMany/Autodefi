import { auditModules, recursiveLearningSignals, v2ShadowAuditSnapshot } from './aiUnderwriterV2Data';
import { v2BackendBrainParameters } from './v2BackendBrainParameters';

export type V2BackwardForwardAuditResult = {
  moduleSequenceLocked: boolean;
  allModulesComplete: boolean;
  allModulesHaveReasonCodes: boolean;
  backwardAuditPassed: boolean;
  forwardAuditPassed: boolean;
  promotionGatePassed: boolean;
  shadowModeLocked: boolean;
  recursiveLearningReady: boolean;
  completedModuleCount: number;
  missingModuleIds: string[];
  watchModuleIds: string[];
  nextBackendPhase: string;
};

export function runV2BackwardForwardAudit(): V2BackwardForwardAuditResult {
  const actualSequence = auditModules.map((module) => module.id);
  const moduleSequenceLocked = v2BackendBrainParameters.lockedModuleSequence.every(
    (moduleId, index) => actualSequence[index] === moduleId
  );

  const completedModuleCount = auditModules.filter((module) => module.status === 'complete').length;
  const allModulesComplete = completedModuleCount === v2BackendBrainParameters.moduleCount;
  const allModulesHaveReasonCodes = auditModules.every(
    (module) => module.reasonCodes.length >= v2BackendBrainParameters.minimumReasonCodesPerModule
  );

  const missingModuleIds = v2BackendBrainParameters.lockedModuleSequence.filter(
    (moduleId) => !actualSequence.includes(moduleId)
  );

  const watchModuleIds = auditModules
    .filter((module) => module.confidence < 80 || module.status !== 'complete')
    .map((module) => module.id);

  const backwardAuditPassed =
    moduleSequenceLocked &&
    allModulesComplete &&
    allModulesHaveReasonCodes &&
    auditModules[0]?.id === 'bureau-audit' &&
    auditModules[13]?.id === 'final-action' &&
    auditModules[14]?.id === 'audit-program-settings';

  const forwardAuditPassed =
    backwardAuditPassed &&
    missingModuleIds.length === 0 &&
    v2BackendBrainParameters.promotionEvidenceRequired.includes('repayment_performance') &&
    v2BackendBrainParameters.promotionEvidenceRequired.includes('rollback_plan');

  const promotionGatePassed =
    v2ShadowAuditSnapshot.mode === 'shadow_mode' &&
    v2ShadowAuditSnapshot.canMutateV1Decision === false &&
    v2ShadowAuditSnapshot.requiresHumanPromotionApproval === true &&
    v2BackendBrainParameters.requiresHumanPromotionApproval === true;

  const shadowModeLocked =
    v2BackendBrainParameters.v2OperatingMode === 'shadow_audit_only' &&
    v2BackendBrainParameters.canMutateV1Decision === false;

  const recursiveLearningReady =
    recursiveLearningSignals.length >= v2BackendBrainParameters.minimumRecursiveLearningSignals &&
    recursiveLearningSignals.every((signal) => signal.humanGateRequired);

  return {
    moduleSequenceLocked,
    allModulesComplete,
    allModulesHaveReasonCodes,
    backwardAuditPassed,
    forwardAuditPassed,
    promotionGatePassed,
    shadowModeLocked,
    recursiveLearningReady,
    completedModuleCount,
    missingModuleIds,
    watchModuleIds,
    nextBackendPhase: 'Build V1 decision API, V2 shadow audit API, database audit log, outcome-learning events, and governance promotion workflow.'
  };
}
