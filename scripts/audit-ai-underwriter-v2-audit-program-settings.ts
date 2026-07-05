import { existsSync, readFileSync } from 'node:fs';

const requiredFiles = [
  'src/features/ai-underwriter/auditProgramSettingsModule.ts',
  'src/pages/AIUnderwriterAuditProgramSettings.tsx',
  'src/pages/aiUnderwriterAuditProgramSettings.css',
  'public/assets/svg/ai-underwriter-v2/module-15-audit-program-settings.svg',
  'docs/AI_UNDERWRITER_V2_MODULE_15_AUDIT_PROGRAM_SETTINGS_LOCK.md'
];

const requiredTokens = [
  'audit-program-settings',
  'moduleNumber: 15',
  'SETTINGS_V1_PRODUCTION_ENABLED',
  'SETTINGS_V2_SHADOW_LOCKED',
  'SETTINGS_HUMAN_PROMOTION_REQUIRED',
  'SETTINGS_REASON_CODES_REQUIRED',
  'SETTINGS_ROLLBACK_READY',
  'SETTINGS_AUDIT_RETENTION_LOCKED',
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
    console.error(`Missing module 15 file: ${file}`);
    failed = true;
  }
}

const content = requiredFiles
  .filter((file) => existsSync(file))
  .map((file) => readFileSync(file, 'utf8'))
  .join('\n');

for (const token of requiredTokens) {
  if (!content.includes(token)) {
    console.error(`Missing module 15 token: ${token}`);
    failed = true;
  }
}

if (failed) process.exit(1);
console.log('AI Underwriter V2 module 15 validation passed.');
