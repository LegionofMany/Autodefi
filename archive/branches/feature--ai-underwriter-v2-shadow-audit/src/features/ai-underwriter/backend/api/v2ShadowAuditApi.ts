import { runV2ShadowAuditEngine } from '../v2ShadowAuditEngine';
import { getV2ApiRepository } from './apiRuntime';
import type { ApiResponse, RunV2ShadowAuditRequest, RunV2ShadowAuditResponse } from './apiTypes';
import { apiError, notFound, ok, reviewRequired } from './apiTypes';

export async function runV2ShadowAuditApi(
  request: RunV2ShadowAuditRequest
): Promise<ApiResponse<RunV2ShadowAuditResponse>> {
  const requestId = `api-v2-shadow-${Date.now()}`;

  try {
    const repository = getV2ApiRepository();
    const snapshot = await repository.getSnapshot(request.decisionId);

    if (!snapshot) {
      return notFound(requestId, `No persisted backend brain snapshot found for ${request.decisionId}.`);
    }

    const shadowAudit = runV2ShadowAuditEngine({
      v1Decision: snapshot.v1Decision,
      moduleTraceIds: snapshot.v1Decision.moduleTraceIds,
      outcomeEvidenceIds: request.outcomeEvidenceIds
    });

    await repository.saveV2ShadowAudit(shadowAudit);
    const updatedSnapshot = await repository.getSnapshot(request.decisionId);

    if (!updatedSnapshot) {
      return apiError(requestId, 'V2 shadow audit saved but snapshot reload failed.');
    }

    const response = {
      snapshot: updatedSnapshot,
      evidenceComplete: shadowAudit.evidenceComplete,
      recommendedBackendAction: shadowAudit.recommendedBackendAction
    };

    return shadowAudit.evidenceComplete
      ? ok(requestId, response)
      : reviewRequired(requestId, response, ['V2_OUTCOME_EVIDENCE_PENDING']);
  } catch (error) {
    return apiError(requestId, error instanceof Error ? error.message : 'Unable to run V2 shadow audit.');
  }
}
