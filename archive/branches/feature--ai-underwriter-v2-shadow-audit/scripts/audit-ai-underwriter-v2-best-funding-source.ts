import { existsSync, readFileSync } from 'node:fs';

const requiredFiles = [
  'src/features/ai-underwriter/bestFundingSourceModule.ts',
  'src/pages/AIUnderwriterBestFundingSource.tsx',
  'src/pages/aiUnderwriterBestFundingSource.css',
  'public/assets/svg/ai-underwriter-v2/module-12-best-funding-source.svg',
  'docs/AI_UNDERWRITER_V2_MODULE_12_BEST_FUNDING_SOURCE_LOCK.md'
];

const requiredTokens = [
  'best-funding-source',
  'moduleNumber: 12',
  'FUNDING_SOURCE_BEST_MATCH',
  'FUNDING_TIER_MATCH_CONFIRMED',
  'FUNDING_CAPITAL_AVAILABLE',
  'FUNDING_YIELD_FIT_STRONG',
  'FUNDING_RESERVE_COVERAGE_STRONG',
  'FUNDING_READY_FOR_DEAL_FLOW',
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
    console.error(`Missing module 12 file: ${file}`);
    failed = true;
  }
}

const content = requiredFiles
  .filter((file) => existsSync(file))
  .map((file) => readFileSync(file, 'utf8'))
  .join('\n');

for (const token of requiredTokens) {
  if (!content.includes(token)) {
    console.error(`Missing module 12 token: ${token}`);
    failed = true;
  }
}

if (failed) process.exit(1);
console.log('AI Underwriter V2 module 12 validation passed.');
