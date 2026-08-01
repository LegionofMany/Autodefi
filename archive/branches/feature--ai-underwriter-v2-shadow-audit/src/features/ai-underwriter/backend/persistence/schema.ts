import type {
  AuditLogEntry,
  GovernancePromotionRequest,
  OutcomeLearningEvent,
  RecursiveLearningProposal,
  V1DecisionOutput,
  V2ShadowAuditOutput
} from '../brainTypes';

export type PersistenceTableName =
  | 'ai_v1_decisions'
  | 'ai_v2_shadow_audits'
  | 'ai_audit_logs'
  | 'ai_outcome_events'
  | 'ai_learning_proposals'
  | 'ai_governance_requests'
  | 'ai_model_versions';

export type AiModelVersionRecord = {
  modelVersionId: string;
  modelName: string;
  modelVersion: string;
  mode: 'shadow_mode' | 'review_mode' | 'approved_for_promotion';
  createdAt: string;
  createdBy: 'system' | 'human_governance';
  rollbackVersionId?: string;
  promotionLocked: true;
  canMutateV1Decision: false;
  notes: string;
};

export type V2PersistenceSchema = {
  ai_v1_decisions: V1DecisionOutput;
  ai_v2_shadow_audits: V2ShadowAuditOutput;
  ai_audit_logs: AuditLogEntry;
  ai_outcome_events: OutcomeLearningEvent;
  ai_learning_proposals: RecursiveLearningProposal;
  ai_governance_requests: GovernancePromotionRequest;
  ai_model_versions: AiModelVersionRecord;
};

export type V2PersistenceRecord =
  | V1DecisionOutput
  | V2ShadowAuditOutput
  | AuditLogEntry
  | OutcomeLearningEvent
  | RecursiveLearningProposal
  | GovernancePromotionRequest
  | AiModelVersionRecord;

export const v2PersistenceTableNames: PersistenceTableName[] = [
  'ai_v1_decisions',
  'ai_v2_shadow_audits',
  'ai_audit_logs',
  'ai_outcome_events',
  'ai_learning_proposals',
  'ai_governance_requests',
  'ai_model_versions'
];

export const v2PersistenceRequiredIndexes = [
  'idx_ai_v1_decisions_decision_id',
  'idx_ai_v2_shadow_audits_shadow_audit_id',
  'idx_ai_v2_shadow_audits_audited_decision_id',
  'idx_ai_audit_logs_decision_id_created_at',
  'idx_ai_outcome_events_decision_id_event_type',
  'idx_ai_learning_proposals_decision_id',
  'idx_ai_governance_requests_proposal_id_status',
  'idx_ai_model_versions_model_version'
];

export const v2PersistenceSafetyColumns = [
  'canMutateV1Decision',
  'canChangeDecision',
  'promotionLocked',
  'requiresHumanGovernance',
  'rollbackPlanRequired',
  'immutable'
];
