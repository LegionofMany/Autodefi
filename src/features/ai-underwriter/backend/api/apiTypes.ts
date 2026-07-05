import type { BackendBrainResult, GovernancePromotionRequest, V1DecisionInput } from '../brainTypes';
import type { PersistBackendBrainResult, PersistedBackendBrainSnapshot } from '../persistence';

export type ApiStatus = 'ok' | 'review_required' | 'not_found' | 'error';

export type ApiMeta = {
  requestId: string;
  generatedAt: string;
  apiVersion: 'v2-shadow-api.1';
  shadowOnly: true;
  canMutateV1Decision: false;
};

export type ApiResponse<T> = {
  status: ApiStatus;
  meta: ApiMeta;
  data?: T;
  errors: string[];
};

export type CreateV1DecisionRequest = {
  input: V1DecisionInput;
  persist?: boolean;
};

export type CreateV1DecisionResponse = {
  backendBrain: BackendBrainResult;
  persisted?: PersistBackendBrainResult;
};

export type RunV2ShadowAuditRequest = {
  decisionId: string;
  outcomeEvidenceIds: string[];
};

export type RunV2ShadowAuditResponse = {
  snapshot: PersistedBackendBrainSnapshot;
  evidenceComplete: boolean;
  recommendedBackendAction: string;
};

export type GetPersistenceSnapshotRequest = {
  decisionId: string;
};

export type GetPersistenceSnapshotResponse = {
  snapshot: PersistedBackendBrainSnapshot;
};

export type CreateGovernanceReviewRequest = {
  decisionId: string;
  proposalId?: string;
};

export type CreateGovernanceReviewResponse = {
  governanceRequest: GovernancePromotionRequest;
  canMutateV1Decision: false;
  humanReviewRequired: true;
  rollbackRequired: true;
};

export function createApiMeta(requestId: string): ApiMeta {
  return {
    requestId,
    generatedAt: new Date().toISOString(),
    apiVersion: 'v2-shadow-api.1',
    shadowOnly: true,
    canMutateV1Decision: false
  };
}

export function ok<T>(requestId: string, data: T): ApiResponse<T> {
  return { status: 'ok', meta: createApiMeta(requestId), data, errors: [] };
}

export function reviewRequired<T>(requestId: string, data: T, errors: string[] = []): ApiResponse<T> {
  return { status: 'review_required', meta: createApiMeta(requestId), data, errors };
}

export function notFound<T>(requestId: string, message: string): ApiResponse<T> {
  return { status: 'not_found', meta: createApiMeta(requestId), errors: [message] };
}

export function apiError<T>(requestId: string, message: string): ApiResponse<T> {
  return { status: 'error', meta: createApiMeta(requestId), errors: [message] };
}
