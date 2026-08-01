import { existsSync, readFileSync } from 'node:fs';

const requiredFiles = [
  'src/features/ai-underwriter/collateralAuditModule.ts',
  'src/pages/AIUnderwriterCollateralAudit.tsx',
  'src/pages/aiUnderwriterCollateral.css',
  'public/assets/svg/ai-underwriter-v2/module-08-collateral-audit.svg',
  'docs/AI_UNDERWRITER_V2_MODULE_08_COLLATERAL_AUDIT_LOCK.md'
];

const requiredTokens = [
  'collateral-audit',
  'moduleNumber: 8',
  'COLLATERAL_LTV_ACCEPTABLE',
  'COLLATERAL_TYPE_VERIFIED',
  'COLLATERAL_COVERAGE_ACCEPTABLE',
  'COLLATERAL_LIEN_READY',
  'COLLATERAL_INSURANCE_VERIFIED',
  'COLLATERAL_RECOVERY_PROFILE_STRONG',
  'COLLATERAL_RESERVE_EXPOSURE_LOW',
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
    console.error(`Missing Collateral Audit V2 file: ${file}`);
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
    console.error(`Missing Collateral Audit token: ${token}`);
    failed = true;
  }
}

if (failed) process.exit(1);
console.log('AI Underwriter V2 Collateral Audit validation passed with SVG, graphics, branding, frontend UX/UI, and audit locks.');
