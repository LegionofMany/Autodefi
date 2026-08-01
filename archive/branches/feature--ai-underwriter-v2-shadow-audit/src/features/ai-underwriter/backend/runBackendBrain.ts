import { v1DecisionSnapshot } from '../aiUnderwriterV2Data';
import { v2BackendBrainParameters } from '../v2BackendBrainParameters';
import { buildInitialAuditLog } from './auditLogService';
import type { BackendBrainResult, V1DecisionInput } from './brainTypes';
import { createGovernancePromotionRequest } from './governanceWorkflow';
import { buildSeedOutcomeEvents, createRecursiveLearningProposal } from './outcomeLearningService';
import { runV1DecisionEngine } from './v1DecisionEngine';
import { runV2ShadowAuditEngine } from './v2ShadowAuditEngine';

export const defaultBackendBrainInput: V1DecisionInput = {
  applicantName: v1DecisionSnapshot.applicantName,
  vin: v1DecisionSnapshot.vin,
  loanAmount: v1DecisionSnapshot.loanAmount,
  requestedTermMonths: v1DecisionSnapshot.requestedTermMonths,
  downPayment: v1DecisionSnapshot.downPayment,
  creditScore: v1DecisionSnapshot.creditScore,
  verifiedIncome: v1DecisionSnapshot.verifiedIncome,
  debtToIncome: v1DecisionSnapshot.debtToIncome,
  walletScore: 782,
  vehicleValue: 32450,
  collateralCoverage: 114.1,
  predictedDefaultRisk: v1DecisionSnapshot.predictedDefaultRisk
};

export function runBackendBrain(input = defaultBackendBrainInput): BackendBrainResult {
  const v1Decision = runV1DecisionEngine(input);
  const outcomeEvents = buildSeedOutcomeEvents(v1Decision.decisionId);
  const evidenceIds = outcomeEvents.map((event) => event.eventType);
  const v2ShadowAudit = runV2ShadowAuditEngine({
    v1Decision,
    moduleTraceIds: v1Decision.moduleTraceIds,
    outcomeEvidenceIds: evidenceIds
  });

  const learningProposal = createRecursiveLearningProposal({
    decisionId: v1Decision.decisionId,
    evidenceIds,
    recommendation: v2ShadowAudit.recommendedBackendAction
  });

  const governanceRequest = createGovernancePromotionRequest(learningProposal);

  return {
    phase: 'shadow_backend_seed',
    v1Decision,
    v2ShadowAudit,
    auditLog: buildInitialAuditLog(v1Decision.decisionId, v1Decision.reasonCodes),
    outcomeEvents,
    learningProposal,
    governanceRequest,
    lockedSafetyChecks: {
      v1AuthorityPreserved: v1Decision.decisionAuthority === 'v1_production_engine',
      v2ShadowOnly: v2BackendBrainParameters.v2OperatingMode === 'shadow_audit_only' && v2ShadowAudit.shadowOnly,
      canMutateV1Decision: false,
      humanGateRequired: true,
      rollbackRequired: learningProposal.rollbackPlanRequired
    }
  };
}
