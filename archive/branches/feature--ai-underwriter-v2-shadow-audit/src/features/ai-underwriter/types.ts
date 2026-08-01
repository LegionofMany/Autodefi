export type AuditTone = 'green' | 'cyan' | 'blue' | 'purple' | 'yellow' | 'orange' | 'red';

export type DecisionAction = 'approve' | 'conditional_approval' | 'manual_review' | 'decline' | 'tier4_off_platform';

export type V2Mode = 'shadow_mode' | 'review_mode' | 'approved_for_promotion';

export type AuditModuleStatus = 'complete' | 'active' | 'pending' | 'review' | 'blocked';

export type AuditMetric = {
  label: string;
  value: string;
  detail: string;
  tone: AuditTone;
  score?: number;
};

export type AuditModuleSummary = {
  id: string;
  moduleNumber: number;
  label: string;
  shortLabel: string;
  subtitle: string;
  status: AuditModuleStatus;
  confidence: number;
  score: number;
  decisionImpact: number;
  riskAdjustment: number;
  v1Signal: string;
  v2LearningSignal: string;
  reasonCodes: string[];
};

export type V1DecisionSnapshot = {
  decisionId: string;
  applicantName: string;
  vin: string;
  loanAmount: number;
  requestedTermMonths: number;
  downPayment: number;
  creditScore: number;
  verifiedIncome: number;
  debtToIncome: number;
  recommendedTier: string;
  approvalProbability: number;
  predictedDefaultRisk: number;
  fundingSource: string;
  estimatedApr: number;
  expectedYieldToLenders: number;
  action: DecisionAction;
  reasonCodes: string[];
  createdAt: string;
};

export type V2ShadowAuditSnapshot = {
  mode: V2Mode;
  modelName: string;
  modelVersion: string;
  canMutateV1Decision: false;
  requiresHumanPromotionApproval: true;
  auditedDecisionId: string;
  v1DecisionQualityScore: number;
  v2ConfidenceScore: number;
  approvalQualityScore: number;
  declineQualityScore: number;
  tierRoutingQualityScore: number;
  marketLearningReadiness: number;
  driftRisk: 'low' | 'medium' | 'high';
  recommendation: string;
  promotionGateStatus: 'locked_shadow_only' | 'ready_for_review' | 'approved' | 'rejected';
};

export type RecursiveLearningSignal = {
  id: string;
  label: string;
  source: 'portfolio' | 'market' | 'dealer' | 'vehicle' | 'wallet' | 'on_chain' | 'repayment' | 'recovery';
  currentFinding: string;
  v2Action: string;
  humanGateRequired: boolean;
  tone: AuditTone;
};
