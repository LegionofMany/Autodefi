import { existsSync, readFileSync } from 'node:fs';

const files = [
  'src/features/ai-underwriter/backend/runtime/index.ts',
  'src/features/ai-underwriter/backend/index.ts',
  'src/features/ai-underwriter/featureExports.ts',
  'src/features/ai-underwriter/client/v2BackendBrainClient.ts',
  'src/features/ai-underwriter/backend/runtime/runtimeDashboardModel.ts',
  'src/pages/AIUnderwriterBackendBrainConsole.tsx',
  'src/pages/AIUnderwriterCommandCenter.tsx',
  'src/App.tsx',
  'docs/AI_UNDERWRITER_V2_BACKEND_BRAIN_COMPLETION.md',
  'docs/AI_UNDERWRITER_V2_FINAL_RUNBOOK.md'
];

const tokens = [
  'dispatchV2RuntimeRoute',
  'loadRuntimeDashboardModel',
  'runV2RuntimeSmokeTest',
  'runBackendBrainClientDemo',
  'AIUnderwriterBackendBrainConsole',
  'Backend Brain →',
  'ai-underwriter-v2-backend-brain',
  'shadowOnly'
];

let failed = false;
for (const file of files) {
  if (!existsSync(file)) {
    console.error(`Missing file: ${file}`);
    failed = true;
  }
}

const text = files.filter((file) => existsSync(file)).map((file) => readFileSync(file, 'utf8')).join('\n');
for (const token of tokens) {
  if (!text.includes(token)) {
    console.error(`Missing token: ${token}`);
    failed = true;
  }
}

if (failed) process.exit(1);
console.log('AI Underwriter V2 final alignment passed.');
