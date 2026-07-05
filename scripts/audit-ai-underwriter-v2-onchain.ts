import { existsSync, readFileSync } from 'node:fs';

const requiredFiles = [
  'docs/AI_UNDERWRITER_V2_MODULE_06_ONCHAIN_AUDIT.md',
  'src/features/ai-underwriter/onChainAuditModule.ts'
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
  "nextModule: 'vehicle-audit'",
  "previousModule: 'wallet-audit'"
];

let failed = false;

for (const file of requiredFiles) {
  if (!existsSync(file)) {
    console.error(`Missing required On-Chain Audit V2 file: ${file}`);
    failed = true;
    continue;
  }

  const content = readFileSync(file, 'utf8');
  console.log(`Found ${file}`);

  for (const token of requiredTokens) {
    if (file.endsWith('.ts') && !content.includes(token)) {
      console.error(`Missing token in ${file}: ${token}`);
      failed = true;
    }
  }
}

if (failed) process.exit(1);

console.log('AI Underwriter V2 On-Chain Audit module validation passed.');
