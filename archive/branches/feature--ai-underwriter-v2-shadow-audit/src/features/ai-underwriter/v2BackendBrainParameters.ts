export type V2BrainParameterLock = {
  engineName: string;
  engineVersion: string;
  phase: string;
  v1DecisionAuthority: 'production_engine';
  v2OperatingMode: 'shadow_audit_only';
  canMutateV1Decision: false;
  requiresHumanPromotionApproval: true;
  moduleCount: 15;
  primaryModuleCount: 14;
  settingsModuleNumber: 15;
  minimumReasonCodesPerModule: number;
  minimumRecursiveLearningSignals: number;
  promotionEvidenceRequired: string[];
  hardSafetyRules: string[];
  lockedModuleSequence: string[];
};

export const v2BackendBrainParameters: V2BrainParameterLock = {
  engineName: 'NeuralRisk V2 Backend Brain',
  engineVersion: 'v2.0.0-shadow-brain-lock.1',
  phase: 'Phase 7 Parameter Lock + Backward Forward Audit',
  v1DecisionAuthority: 'production_engine',
  v2OperatingMode: 'shadow_audit_only',
  canMutateV1Decision: false,
  requiresHumanPromotionApproval: true,
  moduleCount: 15,
  primaryModuleCount: 14,
  settingsModuleNumber: 15,
  minimumReasonCodesPerModule: 2,
  minimumRecursiveLearningSignals: 5,
  promotionEvidenceRequired: [
    'repayment_performance',
    'delinquency_outcomes',
    'recovery_outcomes',
    'pool_yield_outcomes',
    'dealer_funding_speed',
    'market_drift_review',
    'bias_review',
    'human_governance_approval',
    'model_version_record',
    'rollback_plan'
  ],
  hardSafetyRules: [
    'V2 cannot auto-change V1 decisions',
    'V2 cannot promote model changes without human governance approval',
    'Every module must keep reason-code-ready output',
    'Every page must keep SVG, graphics, branding, frontend UX/UI, and audit locks',
    'Every promotion proposal must include outcome evidence and rollback plan'
  ],
  lockedModuleSequence: [
    'bureau-audit',
    'income-audit',
    'employment-audit',
    'residence-audit',
    'wallet-audit',
    'on-chain-audit',
    'vehicle-audit',
    'collateral-audit',
    'market-risk-audit',
    'approval-probability',
    'default-risk',
    'best-funding-source',
    'yield-to-lenders',
    'final-action',
    'audit-program-settings'
  ]
};
