import { existsSync, readFileSync } from 'node:fs';

const requiredFiles = [
  'src/features/ai-underwriter/employmentAuditModule.ts',
  'src/pages/AIUnderwriterEmploymentAudit.tsx',
  'src/pages/aiUnderwriterEmployment.css',
  'public/assets/svg/ai-underwriter-v2/module-03-employment-audit.svg',
  'docs/AI_UNDERWRITER_V2_MODULE_03_EMPLOYMENT_AUDIT_LOCK.md'
];

const requiredTokens = [
  'employment-audit',
  'moduleNumber: 3',
  'EMPLOYMENT_VERIFIED_STABLE',
  'EMPLOYMENT_EMPLOYER_MATCH_VERIFIED',
  'EMPLOYMENT_TITLE_MATCH_VERIFIED',
  'EMPLOYMENT_TENURE_STABLE',
  'EMPLOYMENT_TYPE_STABLE',
  'EMPLOYMENT_NO_RECENT_GAP',
  'EMPLOYMENT_PAY_CONTINUITY_CONFIRMED',
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
    console.error(`Missing Employment Audit V2 file: ${file}`);
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
    console.error(`Missing Employment Audit token: ${token}`);
    failed = true;
  }
}

if (failed) process.exit(1);
console.log('AI Underwriter V2 Employment Audit validation passed with SVG, graphics, branding, frontend UX/UI, and audit locks.');
