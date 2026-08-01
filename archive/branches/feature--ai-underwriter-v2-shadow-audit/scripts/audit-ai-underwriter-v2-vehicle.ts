import { existsSync, readFileSync } from 'node:fs';

const requiredFiles = [
  'src/features/ai-underwriter/vehicleAuditModule.ts',
  'src/pages/AIUnderwriterVehicleAudit.tsx',
  'src/pages/aiUnderwriterVehicle.css',
  'public/assets/svg/ai-underwriter-v2/module-07-vehicle-audit.svg',
  'docs/AI_UNDERWRITER_V2_MODULE_07_VEHICLE_AUDIT_LOCK.md'
];

const requiredTokens = [
  'vehicle-audit',
  'moduleNumber: 7',
  'VEHICLE_VALUE_STABLE',
  'VEHICLE_VIN_VERIFIED',
  'VEHICLE_MARKET_VALUE_CONFIRMED',
  'VEHICLE_LTV_ACCEPTABLE',
  'VEHICLE_HISTORY_CLEAN',
  'VEHICLE_MILEAGE_ACCEPTABLE',
  'VEHICLE_TITLE_CLEAN',
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
    console.error(`Missing Vehicle Audit V2 file: ${file}`);
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
    console.error(`Missing Vehicle Audit token: ${token}`);
    failed = true;
  }
}

if (failed) process.exit(1);
console.log('AI Underwriter V2 Vehicle Audit validation passed with SVG, graphics, branding, frontend UX/UI, and audit locks.');
