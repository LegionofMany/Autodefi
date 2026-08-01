import { runBackendBrain } from '../runBackendBrain';
import type { BackendBrainResult, V1DecisionInput } from '../brainTypes';
import { createSeedModelVersionRecord } from './modelVersionService';
import { assertPersistedSnapshot, type PersistedBackendBrainSnapshot, type V2PersistenceRepository } from './repository';

export type PersistBackendBrainResult = {
  backendBrain: BackendBrainResult;
  snapshot: PersistedBackendBrainSnapshot;
  snapshotChecks: ReturnType<typeof assertPersistedSnapshot>;
};

export async function persistBackendBrain(
  repository: V2PersistenceRepository,
  input?: V1DecisionInput
): Promise<PersistBackendBrainResult> {
  const backendBrain = runBackendBrain(input);
  const modelVersion = createSeedModelVersionRecord();

  await repository.saveV1Decision(backendBrain.v1Decision);
  await repository.saveV2ShadowAudit(backendBrain.v2ShadowAudit);
  await repository.appendAuditLog(backendBrain.auditLog);
  await repository.appendOutcomeEvents(backendBrain.outcomeEvents);
  await repository.saveLearningProposal(backendBrain.learningProposal);
  await repository.saveGovernanceRequest(backendBrain.governanceRequest);
  await repository.saveModelVersion(modelVersion);

  const snapshot = await repository.getSnapshot(backendBrain.v1Decision.decisionId);
  if (!snapshot) {
    throw new Error('Unable to load persisted V2 backend brain snapshot.');
  }

  return {
    backendBrain,
    snapshot,
    snapshotChecks: assertPersistedSnapshot(snapshot)
  };
}
