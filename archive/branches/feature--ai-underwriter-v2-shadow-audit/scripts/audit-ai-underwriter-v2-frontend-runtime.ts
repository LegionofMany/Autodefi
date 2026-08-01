import { existsSync, readFileSync } from 'node:fs';

const requiredFiles = [
  'src/features/ai-underwriter/backend/runtime/runtimeDashboardModel.ts',
  'src/features/ai-underwriter/backend/runtime/runtimeSmokeTest.ts',
  'src/pages/AIUnderwriterBackendBrainConsole.tsx',
  'src/pages/aiUnderwriterBackendBrainConsole.css',
  'src/App.tsx',
  'docs/AI_UNDERWRITER_V2_FRONTEND_RUNTIME_CONSOLE.md'
];

const requiredTokens = [
  'loadRuntimeDashboardModel',
  'RuntimeDashboardModel',
  'runV2RuntimeSmokeTest',
  'AIUnderwriterBackendBrainConsole',
  'ai-underwriter-v2-backend-brain',
  'Runtime Smoke Path',
  'Route Contracts',
  'Shadow Only',
  'canMutateV1Decision: false',
  '/api/ai-underwriter/v2/v1-decisions',
  '/api/ai-underwriter/v2/audits',
  '/api/ai-underwriter/v2/snapshots/:decisionId',
  '/api/ai-underwriter/v2/governance-packets'
];

let failed = false;

for (const file of requiredFiles) {
  if (!existsSync(file)) {
    console.error(`Missing frontend runtime file: ${file}`);
    failed = true;
  }
}

const content = requiredFiles
  .filter((file) => existsSync(file))
  .map((file) => readFileSync(file, 'utf8'))
  .join('\n');

for (const token of requiredTokens) {
  if (!content.includes(token)) {
    console.error(`Missing frontend runtime token: ${token}`);
    failed = true;
  }
}

if (failed) process.exit(1);
console.log('AI Underwriter V2 frontend runtime console audit passed.');
