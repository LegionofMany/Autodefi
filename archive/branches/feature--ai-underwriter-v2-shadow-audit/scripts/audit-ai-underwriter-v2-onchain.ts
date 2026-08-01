import { existsSync, readFileSync } from 'node:fs';

const requiredFiles = [
  'docs/AI_UNDERWRITER_V2_MODULE_06_ONCHAIN_AUDIT.md',
  'docs/AI_UNDERWRITER_V2_MODULE_06_ONCHAIN_AUDIT_LOCK.md',
  'src/features/ai-underwriter/onChainAuditModule.ts',
  'src/pages/AIUnderwriterOnChainAudit.tsx',
  'src/pages/aiUnderwriterOnChain.css',
  'public/assets/svg/ai-underwriter-v2/module-06-on-chain-audit.svg'
];

const requiredTokens = [
  'ONCHAIN_IDENTITY_LINK_VERIFIED',
  'ONCHAIN_STABLECOIN_HISTORY_STRONG',
  'ONCHAIN_SANCTIONS_CLEAR',
  'ONCHAIN_SANCTIONS_MATCH',
  'shadowModeOnly: true',
  'canMutateV1Decision: false',
  'requiresHumanPromotionApproval: true',
  'moduleNumber: 6',
  'on-chain-audit',
  'vehicle-audit',
  'wallet-audit',
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
    console.error(`Missing required On-Chain Audit V2 file: ${file}`);
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
    console.error(`Missing On-Chain Audit token: ${token}`);
    failed = true;
  }
}

if (failed) process.exit(1);
console.log('AI Underwriter V2 On-Chain Audit validation passed with SVG, graphics, branding, frontend UX/UI, and audit locks.');
