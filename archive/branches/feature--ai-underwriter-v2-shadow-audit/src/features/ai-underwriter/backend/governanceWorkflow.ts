import { v2BackendBrainParameters } from '../v2BackendBrainParameters';
import type { GovernancePromotionRequest, RecursiveLearningProposal } from './brainTypes';

export function createGovernancePromotionRequest(proposal: RecursiveLearningProposal): GovernancePromotionRequest {
  const evidenceComplete = v2BackendBrainParameters.promotionEvidenceRequired.every((evidenceId) =>
    proposal.evidenceIds.includes(evidenceId)
  );

  return {
    requestId: `GOV-${proposal.proposalId}`,
    proposalId: proposal.proposalId,
    requestedAt: new Date().toISOString(),
    requestedBy: 'system',
    status: evidenceComplete ? 'ready_for_human_review' : 'draft',
    canMutateV1Decision: false,
    requiredEvidence: v2BackendBrainParameters.promotionEvidenceRequired,
    reasonCodes: [
      evidenceComplete ? 'GOV_EVIDENCE_COMPLETE' : 'GOV_EVIDENCE_PENDING',
      'GOV_HUMAN_REVIEW_REQUIRED',
      'GOV_ROLLBACK_PLAN_REQUIRED',
      'GOV_V2_SHADOW_LOCK_CONFIRMED'
    ]
  };
}

export function assertGovernanceLock(request: GovernancePromotionRequest) {
  return {
    requestReadyForHumanReview: request.status === 'ready_for_human_review',
    canMutateV1Decision: request.canMutateV1Decision,
    requiredEvidenceCount: request.requiredEvidence.length,
    humanReviewRequired: request.reasonCodes.includes('GOV_HUMAN_REVIEW_REQUIRED'),
    rollbackRequired: request.reasonCodes.includes('GOV_ROLLBACK_PLAN_REQUIRED')
  };
}
