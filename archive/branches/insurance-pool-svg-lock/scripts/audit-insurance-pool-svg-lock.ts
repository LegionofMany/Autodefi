import { readFileSync, existsSync } from 'node:fs';

const requiredSvgFiles = [
  'public/assets/svg/insurance-pool-suite/insurance-pool-dashboard.svg',
  'public/assets/svg/insurance-pool-suite/policies.svg',
  'public/assets/svg/insurance-pool-suite/claims.svg',
  'public/assets/svg/insurance-pool-suite/risk-tiers.svg',
  'public/assets/svg/insurance-pool-suite/reserves.svg',
  'public/assets/svg/insurance-pool-suite/reinsurance.svg',
  'public/assets/svg/insurance-pool-suite/staking-ins.svg',
  'public/assets/svg/insurance-pool-suite/governance.svg',
  'public/assets/svg/insurance-pool-suite/reports.svg',
  'public/assets/svg/insurance-pool-suite/analytics.svg',
  'public/assets/svg/insurance-pool-suite/settings.svg'
];

const requiredDocs = [
  'docs/INSURANCE_POOL_FRONTEND_LOCK.md'
];

const forbiddenBranding = [
  'BlockPages',
  'Blockpages',
  'BlockPages411',
  'Blockpages411',
  'BP411',
  '411BlockPages'
];

const requiredAssetMapEntries = [
  'insurance-pool-dashboard.svg',
  'policies.svg',
  'claims.svg',
  'risk-tiers.svg',
  'reserves.svg',
  'reinsurance.svg',
  'staking-ins.svg',
  'governance.svg',
  'reports.svg',
  'analytics.svg',
  'settings.svg'
];

let failed = false;

function fail(message: string) {
  console.error(message);
  failed = true;
}

for (const file of [...requiredSvgFiles, ...requiredDocs]) {
  if (!existsSync(file)) {
    fail(`Missing locked insurance-pool asset/doc: ${file}`);
  }
}

for (const svg of requiredSvgFiles) {
  if (!existsSync(svg)) continue;
  const content = readFileSync(svg, 'utf8');
  if (!content.includes('<svg')) fail(`${svg} is not an SVG document.`);
  if (!content.includes('AUTO') || !content.includes('DEFI') || !content.includes('DAO')) {
    fail(`${svg} does not include AutoDeFi DAO branding.`);
  }
  for (const forbidden of forbiddenBranding) {
    if (content.includes(forbidden)) fail(`${svg} contains deprecated branding: ${forbidden}`);
  }
}

const lockDoc = existsSync('docs/INSURANCE_POOL_FRONTEND_LOCK.md')
  ? readFileSync('docs/INSURANCE_POOL_FRONTEND_LOCK.md', 'utf8')
  : '';

for (const required of ['Insurance Pool', 'Policies', 'Claims', 'Risk Tiers', 'Reserves', 'Reinsurance', 'Staking (INS)', 'Governance', 'Reports', 'Analytics', 'Settings']) {
  if (!lockDoc.includes(required)) fail(`Lock doc missing required tab: ${required}`);
}

const svgAssetsFile = existsSync('src/data/svgAssets.ts') ? readFileSync('src/data/svgAssets.ts', 'utf8') : '';
for (const entry of requiredAssetMapEntries) {
  if (!svgAssetsFile.includes(entry)) fail(`src/data/svgAssets.ts missing suite asset entry: ${entry}`);
}

const suiteDataFile = existsSync('src/data/insurancePoolSuite.ts') ? readFileSync('src/data/insurancePoolSuite.ts', 'utf8') : '';
for (const id of ['insurance-pool', 'policies', 'claims', 'risk-tiers', 'reserves', 'reinsurance', 'staking-ins', 'governance', 'reports', 'analytics', 'settings']) {
  if (!suiteDataFile.includes(id)) fail(`src/data/insurancePoolSuite.ts missing tab id: ${id}`);
}

if (failed) process.exit(1);
console.log('Insurance Pool SVG lock audit passed.');
