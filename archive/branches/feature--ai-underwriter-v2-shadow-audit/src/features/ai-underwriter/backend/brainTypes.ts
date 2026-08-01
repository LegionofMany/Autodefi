import type { AuditTone, V1DecisionSnapshot, V2ShadowAuditSnapshot } from '../types';

export type BackendBrainPhase = 'parameter_lock' | 'shadow_backend_seed' | 'api_ready' | 'production_ready';

export type V1DecisionInput = {
  applicantName: string;
  vin: string;
  loanAmount: number;
  requestedTermMonths: number;
  downPayment: number;
  creditScore: number;
  verifiedIncome: number;
  debtToIncome: number;
  walletScore: number;
  vehicleValue: number;
  collateralCoverage: number;
  predictedDefaultRisk: number;
};

export type V1DecisionOutput = V1DecisionSnapshot & {
  decisionAuthority: 'v1_production_engine';
  requiresHumanReview: boolean;
  moduleTraceIds: string[];
};

export type V2ShadowAuditInput = {
  v1Decision: V1DecisionOutput | V1DecisionSnapshot;
  moduleTraceIds: string[];
  outcomeEvidenceIds: string[];
};

export type V2ShadowAuditOutput = V2ShadowAuditSnapshot & {
  shadowAuditId: string;
  auditedAt: string;
  shadowOnly: true;
  canChangeDecision: false;
  evidenceComplete: boolean;
  auditFindings: string[];
  recommendedBackendAction: string;
};

export type AuditLogEventType =
  | 'v1_decision_created'
  | 'v2_shadow_audit_created'
  | 'reason_codes_attached'
  | 'outcome_event_recorded'
  | 'governance_review_requested'
  | 'promotion_review_closed';

export type AuditLogEntry = {
  auditLogId: string;
  decisionId: string;
  eventType: AuditLogEventType;
  actor: 'system' | 'human_governance' | 'dealer_ops' | 'risk_admin';
  createdAt: string;
  immutable: true;
  reasonCodes: string[];
  payloadSummary: string;
};

export type OutcomeEventType =
  | 'first_payment_made'
  | 'payment_missed'
  | 'delinquency_opened'
  | 'delinquency_resolved'
  | 'recovery_started'
  | 'recovery_completed'
  | 'yield_realized'
  | 'market_value_updated';

export type OutcomeLearningEvent = {
  outcomeEventId: string;
  decisionId: string;
  eventType: OutcomeEventType;
  occurredAt: string;
  source: 'repayment' | 'dealer' | 'market' | 'recovery' | 'pool';
  value?: number;
  notes: string;
  humanGateRequired: true;
};

export type RecursiveLearningProposal = {
  proposalId: string;
  decisionId: string;
  generatedAt: string;
  title: string;
  evidenceIds: string[];
  riskImpact: AuditTone;
  canPromoteAutomatically: false;
  requiresHumanGovernance: true;
  rollbackPlanRequired: true;
  recommendation: string;
};

export type GovernancePromotionRequest = {
  requestId: string;
  proposalId: string;
  requestedAt: string;
  requestedBy: 'system';
  status: 'draft' | 'ready_for_human_review' | 'closed';
  canMutateV1Decision: false;
  requiredEvidence: string[];
  reasonCodes: string[];
};

export type BackendBrainResult = {
  phase: BackendBrainPhase;
  v1Decision: V1DecisionOutput;
  v2ShadowAudit: V2ShadowAuditOutput;
  auditLog: AuditLogEntry[];
  outcomeEvents: OutcomeLearningEvent[];
  learningProposal: RecursiveLearningProposal;
  governanceRequest: GovernancePromotionRequest;
  lockedSafetyChecks: {
    v1AuthorityPreserved: boolean;
    v2ShadowOnly: boolean;
    canMutateV1Decision: false;
    humanGateRequired: true;
    rollbackRequired: true;
  };
};
