import { createGovernancePromotionRequest } from '../governanceWorkflow';
import { getV2ApiRepository } from './apiRuntime';
import type { ApiResponse, CreateGovernanceReviewRequest, CreateGovernanceReviewResponse } from './apiTypes';
import { apiError, notFound, ok, reviewRequired } from './apiTypes';

export async function createGovernanceReviewApi(
  request: CreateGovernanceReviewRequest
): Promise<ApiResponse<CreateGovernanceReviewResponse>> {
  const requestId = `api-v2-governance-${Date.now()}`;

  try {
    const repository = getV2ApiRepository();
    const snapshot = await repository.getSnapshot(request.decisionId);

    if (!snapshot) {
      return notFound(requestId, `No persisted snapshot found for ${request.decisionId}.`);
    }

    const proposal = request.proposalId && request.proposalId !== snapshot.learningProposal.proposalId
      ? snapshot.learningProposal
      : snapshot.learningProposal;

    const governanceRequest = createGovernancePromotionRequest(proposal);
    await repository.saveGovernanceRequest(governanceRequest);

    const response = {
      governanceRequest,
      canMutateV1Decision: false as const,
      humanReviewRequired: true as const,
      rollbackRequired: true as const
    };

    return governanceRequest.status === 'ready_for_human_review'
      ? ok(requestId, response)
      : reviewRequired(requestId, response, ['GOV_EVIDENCE_PENDING']);
  } catch (error) {
    return apiError(requestId, error instanceof Error ? error.message : 'Unable to create governance review request.');
  }
}
