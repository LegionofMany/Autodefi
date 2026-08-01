import { getV2ApiRepository } from './apiRuntime';
import type { ApiResponse, GetPersistenceSnapshotRequest, GetPersistenceSnapshotResponse } from './apiTypes';
import { apiError, notFound, ok } from './apiTypes';

export async function getPersistenceSnapshotApi(
  request: GetPersistenceSnapshotRequest
): Promise<ApiResponse<GetPersistenceSnapshotResponse>> {
  const requestId = `api-v2-snapshot-${Date.now()}`;

  try {
    const snapshot = await getV2ApiRepository().getSnapshot(request.decisionId);

    if (!snapshot) {
      return notFound(requestId, `No persisted snapshot found for ${request.decisionId}.`);
    }

    return ok(requestId, { snapshot });
  } catch (error) {
    return apiError(requestId, error instanceof Error ? error.message : 'Unable to load persistence snapshot.');
  }
}
