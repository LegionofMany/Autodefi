import { v2ShadowAuditSnapshot } from '../aiUnderwriterV2Data';
import { v2BackendBrainParameters } from '../v2BackendBrainParameters';
import type { V2ShadowAuditInput, V2ShadowAuditOutput } from './brainTypes';

function buildShadowAuditId(decisionId: string) {
  return `ADF-V2-SHADOW-${decisionId}`;
}

export function runV2ShadowAuditEngine(input: V2ShadowAuditInput): V2ShadowAuditOutput {
  const expectedEvidence = v2BackendBrainParameters.promotionEvidenceRequired;
  const evidenceComplete = expectedEvidence.every((evidenceId) => input.outcomeEvidenceIds.includes(evidenceId));
  const allModulesTraced = v2BackendBrainParameters.lockedModuleSequence.every((moduleId) =>
    input.moduleTraceIds.includes(moduleId)
  );

  return {
    ...v2ShadowAuditSnapshot,
    shadowAuditId: buildShadowAuditId(input.v1Decision.decisionId),
    auditedAt: new Date().toISOString(),
    auditedDecisionId: input.v1Decision.decisionId,
    shadowOnly: true,
    canChangeDecision: false,
    evidenceComplete,
    auditFindings: [
      allModulesTraced ? 'V2_MODULE_TRACE_COMPLETE' : 'V2_MODULE_TRACE_REVIEW',
      evidenceComplete ? 'V2_OUTCOME_EVIDENCE_COMPLETE' : 'V2_OUTCOME_EVIDENCE_PENDING',
      'V2_SHADOW_ONLY_LOCK_CONFIRMED',
      'V2_HUMAN_GOVERNANCE_REQUIRED'
    ],
    recommendedBackendAction: evidenceComplete
      ? 'Create human governance review packet without changing V1 decision.'
      : 'Keep V2 in shadow mode and continue collecting repayment, recovery, market, and yield outcomes.'
  };
}
