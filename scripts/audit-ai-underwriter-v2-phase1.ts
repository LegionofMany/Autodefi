import { existsSync, readFileSync } from 'node:fs';

const requiredFiles = [
  'docs/AI_UNDERWRITER_V2_PHASE_1_ARCHITECTURE.md',
  'docs/AI_UNDERWRITER_V2_MODULE_06_ONCHAIN_AUDIT.md',
  'src/features/ai-underwriter/types.ts',
  'src/features/ai-underwriter/aiUnderwriterV2Data.ts',
  'src/features/ai-underwriter/recursiveShadowAudit.ts',
  'src/features/ai-underwriter/onChainAuditModule.ts',
  'src/pages/AIUnderwriterCommandCenter.tsx',
  'src/pages/aiUnderwriterV2.css'
];

const requiredTokens = [
  'shadow_mode',
  'canMutateV1Decision: false',
  'requiresHumanPromotionApproval: true',
  'on-chain-audit',
  'moduleNumber: 6',
  'audit-program-settings',
  'moduleNumber: 15',
  'runRecursiveShadowAudit',
  'Recursive Shadow Audit',
  'Human / Risk Governance Gate'
];

let failed = false;

for (const file of requiredFiles) {
  if (!existsSync(file)) {
    console.error(`Missing Phase 1 file: ${file}`);
    failed = true;
    continue;
  }
  console.log(`Found ${file}`);
}

const searchableContent = requiredFiles
  .filter((file) => existsSync(file))
  .map((file) => readFileSync(file, 'utf8'))
  .join('\n');

for (const token of requiredTokens) {
  if (!searchableContent.includes(token)) {
    console.error(`Missing Phase 1 safety token: ${token}`);
    failed = true;
  }
}

if (failed) process.exit(1);

console.log('AI Underwriter V2 Phase 1 audit passed.');
