import type {
  AuditLogEntry,
  GovernancePromotionRequest,
  OutcomeLearningEvent,
  RecursiveLearningProposal,
  V1DecisionOutput,
  V2ShadowAuditOutput
} from '../brainTypes';
import type { AiModelVersionRecord, PersistenceTableName } from './schema';
import { v2PersistenceTableNames } from './schema';
import type { PersistedBackendBrainSnapshot, V2PersistenceRepository } from './repository';

export function createInMemoryV2PersistenceRepository(): V2PersistenceRepository {
  const v1Decisions = new Map<string, V1DecisionOutput>();
  const v2Audits = new Map<string, V2ShadowAuditOutput>();
  const auditLogs = new Map<string, AuditLogEntry[]>();
  const outcomeEvents = new Map<string, OutcomeLearningEvent[]>();
  const proposals = new Map<string, RecursiveLearningProposal>();
  const governanceRequests = new Map<string, GovernancePromotionRequest>();
  const modelVersions = new Map<string, AiModelVersionRecord>();

  return {
    async saveV1Decision(decision) {
      v1Decisions.set(decision.decisionId, decision);
      return decision;
    },

    async saveV2ShadowAudit(audit) {
      v2Audits.set(audit.auditedDecisionId, audit);
      return audit;
    },

    async appendAuditLog(entries) {
      for (const entry of entries) {
        const existing = auditLogs.get(entry.decisionId) ?? [];
        auditLogs.set(entry.decisionId, [...existing, entry]);
      }
      return entries;
    },

    async appendOutcomeEvents(events) {
      for (const event of events) {
        const existing = outcomeEvents.get(event.decisionId) ?? [];
        outcomeEvents.set(event.decisionId, [...existing, event]);
      }
      return events;
    },

    async saveLearningProposal(proposal) {
      proposals.set(proposal.decisionId, proposal);
      return proposal;
    },

    async saveGovernanceRequest(request) {
      governanceRequests.set(request.proposalId, request);
      return request;
    },

    async saveModelVersion(version) {
      modelVersions.set(version.modelVersionId, version);
      return version;
    },

    async getSnapshot(decisionId) {
      const v1Decision = v1Decisions.get(decisionId);
      const v2ShadowAudit = v2Audits.get(decisionId);
      const auditLog = auditLogs.get(decisionId) ?? [];
      const outcomeEventList = outcomeEvents.get(decisionId) ?? [];
      const learningProposal = proposals.get(decisionId);
      const governanceRequest = learningProposal ? governanceRequests.get(learningProposal.proposalId) : undefined;
      const modelVersion = [...modelVersions.values()][0];

      if (!v1Decision || !v2ShadowAudit || !learningProposal || !governanceRequest || !modelVersion) {
        return undefined;
      }

      return {
        v1Decision,
        v2ShadowAudit,
        auditLog,
        outcomeEvents: outcomeEventList,
        learningProposal,
        governanceRequest,
        modelVersion
      } satisfies PersistedBackendBrainSnapshot;
    },

    tableNames(): PersistenceTableName[] {
      return v2PersistenceTableNames;
    }
  };
}
