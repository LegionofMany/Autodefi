import { existsSync, readFileSync } from 'node:fs';

const requiredFiles = [
  'src/features/ai-underwriter/defaultRiskModule.ts',
  'src/pages/AIUnderwriterDefaultRisk.tsx',
  'src/pages/aiUnderwriterDefaultRisk.css',
  'public/assets/svg/ai-underwriter-v2/module-11-default-risk.svg',
  'docs/AI_UNDERWRITER_V2_MODULE_11_DEFAULT_RISK_LOCK.md'
];

const requiredTokens = [
  'default-risk',
  'moduleNumber: 11',
  'DEFAULT_RISK_LOW',
  'DEFAULT_PD_LOW',
  'DEFAULT_LGD_ACCEPTABLE',
  'DEFAULT_EXPECTED_LOSS_LOW',
  'DEFAULT_PAYMENT_BEHAVIOR_STRONG',
  'DEFAULT_RECOVERY_OUTLOOK_STRONG',
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
    console.error(`Missing Default Risk V2 file: ${file}`);
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
    console.error(`Missing Default Risk token: ${token}`);
    failed = true;
  }
}

if (failed) process.exit(1);
console.log('AI Underwriter V2 Default Risk validation passed with SVG, graphics, branding, frontend UX/UI, and audit locks.');
