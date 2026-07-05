import type {
  AuditLogEntry,
  GovernancePromotionRequest,
  OutcomeLearningEvent,
  RecursiveLearningProposal,
  V1DecisionOutput,
  V2ShadowAuditOutput
} from '../brainTypes';
import type { AiModelVersionRecord, PersistenceTableName } from './schema';

export type PersistedBackendBrainSnapshot = {
  v1Decision: V1DecisionOutput;
  v2ShadowAudit: V2ShadowAuditOutput;
  auditLog: AuditLogEntry[];
  outcomeEvents: OutcomeLearningEvent[];
  learningProposal: RecursiveLearningProposal;
  governanceRequest: GovernancePromotionRequest;
  modelVersion: AiModelVersionRecord;
};

export type V2PersistenceRepository = {
  saveV1Decision(decision: V1DecisionOutput): Promise<V1DecisionOutput>;
  saveV2ShadowAudit(audit: V2ShadowAuditOutput): Promise<V2ShadowAuditOutput>;
  appendAuditLog(entries: AuditLogEntry[]): Promise<AuditLogEntry[]>;
  appendOutcomeEvents(events: OutcomeLearningEvent[]): Promise<OutcomeLearningEvent[]>;
  saveLearningProposal(proposal: RecursiveLearningProposal): Promise<RecursiveLearningProposal>;
  saveGovernanceRequest(request: GovernancePromotionRequest): Promise<GovernancePromotionRequest>;
  saveModelVersion(version: AiModelVersionRecord): Promise<AiModelVersionRecord>;
  getSnapshot(decisionId: string): Promise<PersistedBackendBrainSnapshot | undefined>;
  tableNames(): PersistenceTableName[];
};

export function assertPersistedSnapshot(snapshot: PersistedBackendBrainSnapshot) {
  return {
    hasV1Decision: Boolean(snapshot.v1Decision.decisionId),
    hasV2ShadowAudit: Boolean(snapshot.v2ShadowAudit.shadowAuditId),
    hasAuditLog: snapshot.auditLog.length >= 3,
    hasOutcomeEvents: snapshot.outcomeEvents.length >= 3,
    hasLearningProposal: Boolean(snapshot.learningProposal.proposalId),
    hasGovernanceRequest: Boolean(snapshot.governanceRequest.requestId),
    v2CannotChangeDecision: snapshot.v2ShadowAudit.canChangeDecision === false,
    governanceCannotMutateV1: snapshot.governanceRequest.canMutateV1Decision === false,
    modelVersionLocked: snapshot.modelVersion.promotionLocked === true
  };
}
