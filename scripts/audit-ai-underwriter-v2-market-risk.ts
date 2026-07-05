import { existsSync, readFileSync } from 'node:fs';

const requiredFiles = [
  'src/features/ai-underwriter/marketRiskAuditModule.ts',
  'src/pages/AIUnderwriterMarketRiskAudit.tsx',
  'src/pages/aiUnderwriterMarketRisk.css',
  'public/assets/svg/ai-underwriter-v2/module-09-market-risk-audit.svg',
  'docs/AI_UNDERWRITER_V2_MODULE_09_MARKET_RISK_AUDIT_LOCK.md'
];

const requiredTokens = [
  'market-risk-audit',
  'moduleNumber: 9',
  'MARKET_RISK_LOW',
  'MARKET_SEGMENT_DEMAND_HEALTHY',
  'MARKET_DEPRECIATION_STABLE',
  'MARKET_RECOVERY_LIQUIDITY_GOOD',
  'MARKET_RATE_ENVIRONMENT_ELEVATED',
  'MARKET_AUCTION_SPREAD_ACCEPTABLE',
  'MARKET_REGIONAL_DEMAND_STABLE',
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
    console.error(`Missing Market Risk Audit V2 file: ${file}`);
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
    console.error(`Missing Market Risk Audit token: ${token}`);
    failed = true;
  }
}

if (failed) process.exit(1);
console.log('AI Underwriter V2 Market Risk Audit validation passed with SVG, graphics, branding, frontend UX/UI, and audit locks.');
