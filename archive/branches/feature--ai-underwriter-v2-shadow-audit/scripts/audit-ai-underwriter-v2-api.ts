import { existsSync, readFileSync } from 'node:fs';

const requiredFiles = [
  'src/features/ai-underwriter/backend/api/apiTypes.ts',
  'src/features/ai-underwriter/backend/api/apiRuntime.ts',
  'src/features/ai-underwriter/backend/api/v1DecisionApi.ts',
  'src/features/ai-underwriter/backend/api/v2ShadowAuditApi.ts',
  'src/features/ai-underwriter/backend/api/snapshotApi.ts',
  'src/features/ai-underwriter/backend/api/governanceApi.ts',
  'src/features/ai-underwriter/backend/api/index.ts',
  'src/features/ai-underwriter/backend/index.ts',
  'docs/AI_UNDERWRITER_V2_API_LAYER.md'
];

const requiredTokens = [
  'ApiResponse',
  'ApiMeta',
  'CreateV1DecisionRequest',
  'RunV2ShadowAuditRequest',
  'GetPersistenceSnapshotRequest',
  'CreateGovernanceReviewRequest',
  'createV1DecisionApi',
  'runV2ShadowAuditApi',
  'getPersistenceSnapshotApi',
  'createGovernanceReviewApi',
  'getV2ApiRepository',
  'persistBackendBrain',
  'runV2ShadowAuditEngine',
  'createGovernancePromotionRequest',
  'v2-shadow-api.1',
  'shadowOnly: true',
  'review_required'
];

let failed = false;

for (const file of requiredFiles) {
  if (!existsSync(file)) {
    console.error(`Missing API file: ${file}`);
    failed = true;
  }
}

const content = requiredFiles
  .filter((file) => existsSync(file))
  .map((file) => readFileSync(file, 'utf8'))
  .join('\n');

for (const token of requiredTokens) {
  if (!content.includes(token)) {
    console.error(`Missing API token: ${token}`);
    failed = true;
  }
}

if (failed) process.exit(1);
console.log('AI Underwriter V2 API layer audit passed.');
