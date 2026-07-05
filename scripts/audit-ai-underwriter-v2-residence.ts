import { existsSync, readFileSync } from 'node:fs';

const requiredFiles = [
  'src/features/ai-underwriter/residenceAuditModule.ts',
  'src/pages/AIUnderwriterResidenceAudit.tsx',
  'src/pages/aiUnderwriterResidence.css',
  'public/assets/svg/ai-underwriter-v2/module-04-residence-audit.svg',
  'docs/AI_UNDERWRITER_V2_MODULE_04_RESIDENCE_AUDIT_LOCK.md'
];

const requiredTokens = [
  'residence-audit',
  'moduleNumber: 4',
  'RESIDENCE_VERIFIED',
  'RESIDENCE_ADDRESS_MATCH_VERIFIED',
  'RESIDENCE_TENURE_STABLE',
  'RESIDENCE_MOVE_FREQUENCY_LOW',
  'RESIDENCE_HOUSING_COST_ACCEPTABLE',
  'RESIDENCE_HTI_ACCEPTABLE',
  'RESIDENCE_IDENTITY_LINK_CONFIRMED',
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
    console.error(`Missing Residence Audit V2 file: ${file}`);
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
    console.error(`Missing Residence Audit token: ${token}`);
    failed = true;
  }
}

if (failed) process.exit(1);
console.log('AI Underwriter V2 Residence Audit validation passed with SVG, graphics, branding, frontend UX/UI, and audit locks.');
