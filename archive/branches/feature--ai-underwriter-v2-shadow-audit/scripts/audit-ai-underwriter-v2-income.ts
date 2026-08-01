import { existsSync, readFileSync } from 'node:fs';

const requiredFiles = [
  'src/features/ai-underwriter/incomeAuditModule.ts',
  'src/pages/AIUnderwriterIncomeAudit.tsx',
  'src/pages/aiUnderwriterIncome.css',
  'public/assets/svg/ai-underwriter-v2/module-02-income-audit.svg',
  'docs/AI_UNDERWRITER_V2_MODULE_02_INCOME_AUDIT_LOCK.md'
];

const requiredTokens = [
  'income-audit',
  'moduleNumber: 2',
  'INCOME_VERIFIED_STABLE',
  'INCOME_PAYROLL_MATCH_VERIFIED',
  'INCOME_BANK_DEPOSITS_CONSISTENT',
  'INCOME_DTI_ACCEPTABLE',
  'INCOME_PTI_ACCEPTABLE',
  'INCOME_BANK_STRESS_CLEAR',
  'INCOME_DISPOSABLE_BUFFER_STRONG',
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
    console.error(`Missing Income Audit V2 file: ${file}`);
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
    console.error(`Missing Income Audit token: ${token}`);
    failed = true;
  }
}

if (failed) process.exit(1);
console.log('AI Underwriter V2 Income Audit validation passed with SVG, graphics, branding, frontend UX/UI, and audit locks.');
