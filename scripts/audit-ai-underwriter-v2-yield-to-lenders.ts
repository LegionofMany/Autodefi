import { existsSync, readFileSync } from 'node:fs';

const requiredFiles = [
  'src/features/ai-underwriter/yieldToLendersModule.ts',
  'src/pages/AIUnderwriterYieldToLenders.tsx',
  'src/pages/aiUnderwriterYieldToLenders.css',
  'public/assets/svg/ai-underwriter-v2/module-13-yield-to-lenders.svg',
  'docs/AI_UNDERWRITER_V2_MODULE_13_YIELD_TO_LENDERS_LOCK.md'
];

const requiredTokens = [
  'yield-to-lenders',
  'moduleNumber: 13',
  'YIELD_EXPECTED_STRONG',
  'YIELD_RISK_ADJUSTED_ACCEPTABLE',
  'YIELD_NET_POSITIVE',
  'YIELD_LENDER_DEMAND_HIGH',
  'YIELD_RESERVE_DRAG_ACCEPTABLE',
  'YIELD_QUALITY_STRONG',
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
    console.error(`Missing module 13 file: ${file}`);
    failed = true;
  }
}

const content = requiredFiles
  .filter((file) => existsSync(file))
  .map((file) => readFileSync(file, 'utf8'))
  .join('\n');

for (const token of requiredTokens) {
  if (!content.includes(token)) {
    console.error(`Missing module 13 token: ${token}`);
    failed = true;
  }
}

if (failed) process.exit(1);
console.log('AI Underwriter V2 module 13 validation passed.');
