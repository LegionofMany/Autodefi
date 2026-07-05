import { runBackendBrain } from '../runBackendBrain';
import { persistBackendBrain } from '../persistence';
import { getV2ApiRepository } from './apiRuntime';
import type { ApiResponse, CreateV1DecisionRequest, CreateV1DecisionResponse } from './apiTypes';
import { apiError, ok } from './apiTypes';

export async function createV1DecisionApi(
  request: CreateV1DecisionRequest
): Promise<ApiResponse<CreateV1DecisionResponse>> {
  const requestId = `api-v1-decision-${Date.now()}`;

  try {
    if (request.persist) {
      const persisted = await persistBackendBrain(getV2ApiRepository(), request.input);
      return ok(requestId, {
        backendBrain: persisted.backendBrain,
        persisted
      });
    }

    return ok(requestId, {
      backendBrain: runBackendBrain(request.input)
    });
  } catch (error) {
    return apiError(requestId, error instanceof Error ? error.message : 'Unable to create V1 decision.');
  }
}
