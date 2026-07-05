import { existsSync, readFileSync } from 'node:fs';

const requiredFiles = [
  'src/features/ai-underwriter/approvalProbabilityModule.ts',
  'src/pages/AIUnderwriterApprovalProbability.tsx',
  'src/pages/aiUnderwriterApprovalProbability.css',
  'public/assets/svg/ai-underwriter-v2/module-10-approval-probability.svg',
  'docs/AI_UNDERWRITER_V2_MODULE_10_APPROVAL_PROBABILITY_LOCK.md'
];

const requiredTokens = [
  'approval-probability',
  'moduleNumber: 10',
  'APPROVAL_PROBABILITY_STRONG',
  'APPROVAL_CONFIDENCE_HIGH',
  'APPROVAL_GRADE_ACCEPTABLE',
  'APPROVAL_EXPECTED_LOSS_LOW',
  'APPROVAL_OFFER_COMPETITIVE',
  'APPROVAL_RECOMMENDED_ACTION_STRONG_APPROVE',
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
    console.error(`Missing Approval Probability V2 file: ${file}`);
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
    console.error(`Missing Approval Probability token: ${token}`);
    failed = true;
  }
}

if (failed) process.exit(1);
console.log('AI Underwriter V2 Approval Probability validation passed with SVG, graphics, branding, frontend UX/UI, and audit locks.');
