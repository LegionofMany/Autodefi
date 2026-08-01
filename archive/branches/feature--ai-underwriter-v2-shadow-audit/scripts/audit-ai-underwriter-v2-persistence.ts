import { existsSync, readFileSync } from 'node:fs';

const requiredFiles = [
  'src/features/ai-underwriter/backend/persistence/schema.ts',
  'src/features/ai-underwriter/backend/persistence/repository.ts',
  'src/features/ai-underwriter/backend/persistence/inMemoryRepository.ts',
  'src/features/ai-underwriter/backend/persistence/modelVersionService.ts',
  'src/features/ai-underwriter/backend/persistence/persistBackendBrain.ts',
  'src/features/ai-underwriter/backend/persistence/index.ts',
  'src/features/ai-underwriter/backend/index.ts',
  'docs/AI_UNDERWRITER_V2_PERSISTENCE_LAYER.md'
];

const requiredTokens = [
  'V2PersistenceSchema',
  'V2PersistenceRepository',
  'PersistedBackendBrainSnapshot',
  'AiModelVersionRecord',
  'createInMemoryV2PersistenceRepository',
  'createSeedModelVersionRecord',
  'persistBackendBrain',
  'assertPersistedSnapshot',
  'saveV1Decision',
  'saveV2ShadowAudit',
  'appendAuditLog',
  'appendOutcomeEvents',
  'saveLearningProposal',
  'saveGovernanceRequest',
  'saveModelVersion',
  'getSnapshot',
  'ai_v1_decisions',
  'ai_v2_shadow_audits',
  'ai_audit_logs',
  'ai_outcome_events',
  'ai_learning_proposals',
  'ai_governance_requests',
  'ai_model_versions',
  'idx_ai_v1_decisions_decision_id',
  'idx_ai_audit_logs_decision_id_created_at',
  'promotionLocked: true',
  'canMutateV1Decision: false',
  'immutable: true'
];

let failed = false;

for (const file of requiredFiles) {
  if (!existsSync(file)) {
    console.error(`Missing V2 persistence file: ${file}`);
    failed = true;
  }
}

const content = requiredFiles
  .filter((file) => existsSync(file))
  .map((file) => readFileSync(file, 'utf8'))
  .join('\n');

for (const token of requiredTokens) {
  if (!content.includes(token)) {
    console.error(`Missing V2 persistence token: ${token}`);
    failed = true;
  }
}

if (failed) process.exit(1);
console.log('AI Underwriter V2 persistence layer audit passed.');
