import { existsSync, readFileSync } from 'node:fs';

const requiredFiles = [
  'src/features/ai-underwriter/finalActionModule.ts',
  'src/pages/AIUnderwriterFinalAction.tsx',
  'src/pages/aiUnderwriterFinalAction.css',
  'public/assets/svg/ai-underwriter-v2/module-14-final-action.svg',
  'docs/AI_UNDERWRITER_V2_MODULE_14_FINAL_ACTION_LOCK.md'
];

const requiredTokens = [
  'final-action',
  'moduleNumber: 14',
  'FINAL_ACTION_READY',
  'FINAL_GRADE_ACCEPTABLE',
  'FINAL_TERMS_READY',
  'FINAL_FUNDING_SOURCE_MATCHED',
  'FINAL_CONDITIONS_CLEARABLE',
  'FINAL_V2_SHADOW_LOCKED',
  'v2ShadowAuditUse',
  'viewBox="0 0 1792 1024"',
  'AutoDeFi',
  'AI Underwriter Command Center',
  'SVG file | Locked',
  'Graphics styling | Locked',
  'Logo and brand | Locked',
  'Frontend UX/UI | Locked',
  'Audit script | Locked'
];

let failed = false;

for (const file of requiredFiles) {
  if (!existsSync(file)) {
    console.error(`Missing module 14 file: ${file}`);
    failed = true;
  }
}

const content = requiredFiles
  .filter((file) => existsSync(file))
  .map((file) => readFileSync(file, 'utf8'))
  .join('\n');

for (const token of requiredTokens) {
  if (!content.includes(token)) {
    console.error(`Missing module 14 token: ${token}`);
    failed = true;
  }
}

if (failed) process.exit(1);
console.log('AI Underwriter V2 module 14 validation passed.');
