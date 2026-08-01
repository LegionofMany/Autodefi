import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const requiredFiles = [
  'public/assets/dealer/logos/autodefi-logo-primary.svg',
  'public/assets/dealer/logos/elite-motors-badge.svg',
  'public/assets/dealer/graphics/dealer-neon-vehicle.svg',
  'public/assets/dealer/vehicles/vehicle-bmw-x5.svg',
  'public/assets/dealer/vehicles/vehicle-tesla-model-3.svg',
  'public/assets/dealer/campaigns/campaign-truck-season-sales-event.svg',
  'public/assets/svg/ai-underwriter-v2/module-01-bureau-audit.svg',
  'public/assets/svg/ai-underwriter-v2/module-15-audit-program-settings.svg',
  'public/assets/svg/insurance-pool-suite/insurance-pool-dashboard.svg',
  'apps/dao-frontend/public/assets/brand/autodefi-dao-logo.svg',
  'apps/dao-frontend/public/assets/illustrations/zonycs-marketplace.svg',
  'autodefi-dao-frontend/src/assets/token-adf.svg',
  'dao-governance-frontend/assets/svg/governance.svg',
  'frontends/staking-rewards/src/assets/svg/adf-orb.svg',
  'audit-security-frontend/assets/security-shield.svg',
  'frontend/public/svg/neon-car.svg',
  'src/components/dealer/DealerPortal.tsx',
  'src/components/dealer/dealer.css',
  'src/data/dealerPortalData.ts'
];

const missing = requiredFiles.filter((file) => !existsSync(file));

if (missing.length > 0) {
  console.error('Missing consolidated graphics or portal files:');
  for (const file of missing) console.error(`- ${file}`);
  process.exit(1);
}

function findSvgFiles(directory: string): string[] {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) return findSvgFiles(path);
    return entry.isFile() && entry.name.endsWith('.svg') ? [path] : [];
  });
}

const publicSvgFiles = findSvgFiles('public');
const invalidSvgFiles = publicSvgFiles.filter((file) => {
  const source = readFileSync(file, 'utf8');
  const hasBareAmpersand = /&(?!#\d+;|#x[0-9a-fA-F]+;|[A-Za-z][A-Za-z0-9]+;)/.test(source);
  return hasBareAmpersand || !source.includes('<svg') || !source.includes('</svg>');
});

if (invalidSvgFiles.length > 0) {
  console.error('Invalid public SVG XML detected:');
  for (const file of invalidSvgFiles) console.error(`- ${file}`);
  process.exit(1);
}

console.log(`Consolidated graphics audit passed (${requiredFiles.length} required files, ${publicSvgFiles.length} valid public SVGs).`);
