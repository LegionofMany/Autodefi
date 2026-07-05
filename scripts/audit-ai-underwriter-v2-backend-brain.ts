import { existsSync, readFileSync } from 'node:fs';

const requiredFiles = [
  'src/features/ai-underwriter/backend/brainTypes.ts',
  'src/features/ai-underwriter/backend/v1DecisionEngine.ts',
  'src/features/ai-underwriter/backend/v2ShadowAuditEngine.ts',
  'src/features/ai-underwriter/backend/auditLogService.ts',
  'src/features/ai-underwriter/backend/outcomeLearningService.ts',
  'src/features/ai-underwriter/backend/governanceWorkflow.ts',
  'src/features/ai-underwriter/backend/runBackendBrain.ts',
  'src/features/ai-underwriter/backend/index.ts',
  'docs/AI_UNDERWRITER_V2_BACKEND_BRAIN_SEED.md'
];

const requiredTokens = [
  'V1DecisionInput',
  'V1DecisionOutput',
  'V2ShadowAuditInput',
  'V2ShadowAuditOutput',
  'AuditLogEntry',
  'OutcomeLearningEvent',
  'RecursiveLearningProposal',
  'GovernancePromotionRequest',
  'runV1DecisionEngine',
  'runV2ShadowAuditEngine',
  'buildInitialAuditLog',
  'buildSeedOutcomeEvents',
  'createRecursiveLearningProposal',
  'createGovernancePromotionRequest',
  'runBackendBrain',
  'shadow_backend_seed',
  'v1_production_engine',
  'shadow_audit_only',
  'canChangeDecision: false',
  'canMutateV1Decision: false',
  'requiresHumanGovernance: true',
  'rollbackPlanRequired: true',
  'immutable: true'
];

let failed = false;

for (const file of requiredFiles) {
  if (!existsSync(file)) {
    console.error(`Missing V2 backend brain file: ${file}`);
    failed = true;
  }
}

const content = requiredFiles
  .filter((file) => existsSync(file))
  .map((file) => readFileSync(file, 'utf8'))
  .join('\n');

for (const token of requiredTokens) {
  if (!content.includes(token)) {
    console.error(`Missing V2 backend brain token: ${token}`);
    failed = true;
  }
}

if (failed) process.exit(1);
console.log('AI Underwriter V2 backend brain seed audit passed.');
