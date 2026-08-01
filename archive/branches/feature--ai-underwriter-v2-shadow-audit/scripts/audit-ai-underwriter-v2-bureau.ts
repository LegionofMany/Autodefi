import { existsSync, readFileSync } from 'node:fs';

const requiredFiles = [
  'src/features/ai-underwriter/bureauAuditModule.ts',
  'src/pages/AIUnderwriterBureauAudit.tsx',
  'src/pages/aiUnderwriterBureau.css'
];

const requiredTokens = [
  'bureau-audit',
  'moduleNumber: 1',
  'BUREAU_SCORE_GOOD',
  'BUREAU_PAYMENT_HISTORY_STRONG',
  'BUREAU_UTILIZATION_LOW',
  'BUREAU_DEROGATORY_CLEAR',
  'BUREAU_INQUIRIES_ACCEPTABLE',
  'v2ShadowAuditUse'
];

let failed = false;

for (const file of requiredFiles) {
  if (!existsSync(file)) {
    console.error(`Missing Bureau Audit V2 file: ${file}`);
    failed = true;
    continue;
  }
  console.log(`Found ${file}`);
}

const content = requiredFiles
  .filter((file) => existsSync(file))
  .map((file) => readFileSync(file, 'utf8'))
  .join('\n');

for (const token of requiredTokens) {
  if (!content.includes(token)) {
    console.error(`Missing Bureau Audit token: ${token}`);
    failed = true;
  }
}

if (failed) process.exit(1);
console.log('AI Underwriter V2 Bureau Audit validation passed.');
