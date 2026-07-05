import { defaultBackendBrainInput } from '../runBackendBrain';
import { resetV2ApiRepository } from '../api';
import { dispatchV2RuntimeRoute } from './runtimeRouter';

export async function runV2RuntimeSmokeTest() {
  resetV2ApiRepository();

  const createResponse = await dispatchV2RuntimeRoute({
    method: 'POST',
    path: '/api/ai-underwriter/v2/v1-decisions',
    params: {},
    body: { input: defaultBackendBrainInput, persist: true },
    requestId: 'smoke-create-v1'
  });

  const createData = createResponse.body.data as { backendBrain?: { v1Decision?: { decisionId?: string } } } | undefined;
  const decisionId = createData?.backendBrain?.v1Decision?.decisionId ?? 'missing-decision-id';

  const snapshotResponse = await dispatchV2RuntimeRoute({
    method: 'GET',
    path: `/api/ai-underwriter/v2/snapshots/${decisionId}`,
    params: {},
    requestId: 'smoke-snapshot'
  });

  const auditResponse = await dispatchV2RuntimeRoute({
    method: 'POST',
    path: '/api/ai-underwriter/v2/audits',
    params: {},
    body: {
      decisionId,
      outcomeEvidenceIds: ['first_payment_made', 'market_value_updated', 'yield_realized']
    },
    requestId: 'smoke-v2-audit'
  });

  const governanceResponse = await dispatchV2RuntimeRoute({
    method: 'POST',
    path: '/api/ai-underwriter/v2/governance-packets',
    params: {},
    body: { decisionId },
    requestId: 'smoke-governance'
  });

  return {
    createStatus: createResponse.statusCode,
    snapshotStatus: snapshotResponse.statusCode,
    auditStatus: auditResponse.statusCode,
    governanceStatus: governanceResponse.statusCode,
    decisionId,
    shadowOnly: createResponse.runtime.shadowOnly && auditResponse.runtime.shadowOnly,
    canMutateV1Decision: false as const
  };
}
