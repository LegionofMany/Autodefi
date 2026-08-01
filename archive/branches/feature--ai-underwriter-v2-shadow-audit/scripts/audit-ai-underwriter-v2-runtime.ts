import { existsSync, readFileSync } from 'node:fs';

const requiredFiles = [
  'src/features/ai-underwriter/backend/runtime/runtimeTypes.ts',
  'src/features/ai-underwriter/backend/runtime/runtimeRouter.ts',
  'src/features/ai-underwriter/backend/runtime/runtimeSmokeTest.ts',
  'src/features/ai-underwriter/backend/runtime/runtimeExports.ts',
  'docs/AI_UNDERWRITER_V2_RUNTIME_MOUNT.md'
];

const requiredTokens = [
  'V2RuntimeRouteId',
  'V2RuntimeRequest',
  'V2RuntimeResponse',
  'withRuntimeMeta',
  'dispatchV2RuntimeRoute',
  'runV2RuntimeSmokeTest',
  'create-v1-decision',
  'run-v2-audit',
  'get-v2-snapshot',
  'create-governance-packet',
  '/api/ai-underwriter/v2/v1-decisions',
  '/api/ai-underwriter/v2/audits',
  '/api/ai-underwriter/v2/snapshots/',
  '/api/ai-underwriter/v2/governance-packets',
  'mounted: true',
  'shadowOnly: true',
  'canMutateV1Decision: false',
  'resetV2ApiRepository'
];

let failed = false;

for (const file of requiredFiles) {
  if (!existsSync(file)) {
    console.error(`Missing runtime file: ${file}`);
    failed = true;
  }
}

const content = requiredFiles
  .filter((file) => existsSync(file))
  .map((file) => readFileSync(file, 'utf8'))
  .join('\n');

for (const token of requiredTokens) {
  if (!content.includes(token)) {
    console.error(`Missing runtime token: ${token}`);
    failed = true;
  }
}

if (failed) process.exit(1);
console.log('AI Underwriter V2 runtime mount audit passed.');
