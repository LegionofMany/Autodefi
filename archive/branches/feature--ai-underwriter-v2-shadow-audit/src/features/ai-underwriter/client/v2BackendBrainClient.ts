import { defaultBackendBrainInput } from '../backend/runBackendBrain';
import { dispatchV2RuntimeRoute } from '../backend/runtime/runtimeRouter';
import { resetV2ApiRepository } from '../backend/api';
import type { V1DecisionInput } from '../backend/brainTypes';

export type V2BackendBrainClientResult = {
  decisionId: string;
  createStatus: number;
  snapshotStatus: number;
  auditStatus: number;
  governanceStatus: number;
  shadowOnly: boolean;
  canMutateV1Decision: false;
};

export async function createPersistedV1Decision(input: V1DecisionInput = defaultBackendBrainInput) {
  return dispatchV2RuntimeRoute({
    method: 'POST',
    path: '/api/ai-underwriter/v2/v1-decisions',
    params: {},
    body: { input, persist: true },
    requestId: 'client-create-v1'
  });
}

export async function readBackendBrainSnapshot(decisionId: string) {
  return dispatchV2RuntimeRoute({
    method: 'GET',
    path: `/api/ai-underwriter/v2/snapshots/${decisionId}`,
    params: {},
    requestId: 'client-read-snapshot'
  });
}

export async function runBackendBrainAudit(decisionId: string, outcomeEvidenceIds: string[]) {
  return dispatchV2RuntimeRoute({
    method: 'POST',
    path: '/api/ai-underwriter/v2/audits',
    params: {},
    body: { decisionId, outcomeEvidenceIds },
    requestId: 'client-run-audit'
  });
}

export async function createBackendBrainGovernancePacket(decisionId: string) {
  return dispatchV2RuntimeRoute({
    method: 'POST',
    path: '/api/ai-underwriter/v2/governance-packets',
    params: {},
    body: { decisionId },
    requestId: 'client-governance-packet'
  });
}

export async function runBackendBrainClientDemo(): Promise<V2BackendBrainClientResult> {
  resetV2ApiRepository();
  const createResponse = await createPersistedV1Decision();
  const createData = createResponse.body.data as { backendBrain?: { v1Decision?: { decisionId?: string } } } | undefined;
  const decisionId = createData?.backendBrain?.v1Decision?.decisionId ?? 'missing-decision-id';
  const snapshotResponse = await readBackendBrainSnapshot(decisionId);
  const auditResponse = await runBackendBrainAudit(decisionId, ['first_payment_made', 'market_value_updated', 'yield_realized']);
  const governanceResponse = await createBackendBrainGovernancePacket(decisionId);

  return {
    decisionId,
    createStatus: createResponse.statusCode,
    snapshotStatus: snapshotResponse.statusCode,
    auditStatus: auditResponse.statusCode,
    governanceStatus: governanceResponse.statusCode,
    shadowOnly: createResponse.runtime.shadowOnly && auditResponse.runtime.shadowOnly,
    canMutateV1Decision: false
  };
}
