import { existsSync, readFileSync } from 'node:fs';

const requiredFiles = [
  'src/features/ai-underwriter/client/v2BackendBrainClient.ts',
  'src/features/ai-underwriter/client/index.ts',
  'src/features/ai-underwriter/backend/runtime/runtimeDashboardModel.ts',
  'src/pages/AIUnderwriterCommandCenter.tsx',
  'docs/AI_UNDERWRITER_V2_FRONTEND_CLIENT_BRIDGE.md'
];

const requiredTokens = [
  'createPersistedV1Decision',
  'readBackendBrainSnapshot',
  'runBackendBrainAudit',
  'createBackendBrainGovernancePacket',
  'runBackendBrainClientDemo',
  'loadRuntimeDashboardModel',
  'Backend Brain →',
  'ai-underwriter-v2-backend-brain',
  'dispatchV2RuntimeRoute',
  'resetV2ApiRepository',
  'shadowOnly',
  'canMutateV1Decision: false',
  '/api/ai-underwriter/v2/v1-decisions',
  '/api/ai-underwriter/v2/audits',
  '/api/ai-underwriter/v2/snapshots/',
  '/api/ai-underwriter/v2/governance-packets'
];

let failed = false;

for (const file of requiredFiles) {
  if (!existsSync(file)) {
    console.error(`Missing frontend client bridge file: ${file}`);
    failed = true;
  }
}

const content = requiredFiles
  .filter((file) => existsSync(file))
  .map((file) => readFileSync(file, 'utf8'))
  .join('\n');

for (const token of requiredTokens) {
  if (!content.includes(token)) {
    console.error(`Missing frontend client bridge token: ${token}`);
    failed = true;
  }
}

if (failed) process.exit(1);
console.log('AI Underwriter V2 frontend client bridge audit passed.');
