import { existsSync, readFileSync } from 'node:fs';

const requiredFiles = [
  'src/features/ai-underwriter/walletAuditModule.ts',
  'src/pages/AIUnderwriterWalletAudit.tsx',
  'src/pages/aiUnderwriterWallet.css',
  'public/assets/svg/ai-underwriter-v2/module-05-wallet-audit.svg',
  'docs/AI_UNDERWRITER_V2_MODULE_05_WALLET_AUDIT_LOCK.md'
];

const requiredTokens = [
  'wallet-audit',
  'moduleNumber: 5',
  'WALLET_HIGH_TRUST',
  'WALLET_OWNERSHIP_VERIFIED',
  'WALLET_KYC_LINK_MATCHED',
  'WALLET_AGE_ESTABLISHED',
  'WALLET_SCREENING_CLEAR',
  'WALLET_ACTIVITY_HEALTHY',
  'WALLET_STABLE_RAIL_READY',
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
    console.error(`Missing Wallet Audit V2 file: ${file}`);
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
    console.error(`Missing Wallet Audit token: ${token}`);
    failed = true;
  }
}

if (failed) process.exit(1);
console.log('AI Underwriter V2 Wallet Audit validation passed with SVG, graphics, branding, frontend UX/UI, and audit locks.');
