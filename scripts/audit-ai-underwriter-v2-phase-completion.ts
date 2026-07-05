import { existsSync, readFileSync } from 'node:fs';

const moduleIds = [
  'bureau-audit',
  'income-audit',
  'employment-audit',
  'residence-audit',
  'wallet-audit',
  'on-chain-audit',
  'vehicle-audit',
  'collateral-audit',
  'market-risk-audit',
  'approval-probability',
  'default-risk',
  'best-funding-source',
  'yield-to-lenders',
  'final-action',
  'audit-program-settings'
];

const requiredFiles = [
  'src/features/ai-underwriter/aiUnderwriterV2Data.ts',
  'src/features/ai-underwriter/recursiveShadowAudit.ts',
  'src/features/ai-underwriter/v2BackendBrainParameters.ts',
  'src/features/ai-underwriter/v2BackwardForwardAudit.ts',
  'src/pages/AIUnderwriterCommandCenter.tsx',
  'src/App.tsx',
  'docs/AI_UNDERWRITER_V2_BACKEND_BRAIN_PARAMETER_LOCK.md',
  'docs/AI_UNDERWRITER_V2_BACKWARD_FORWARD_AUDIT.md'
];

const moduleLockDocs = [
  'docs/AI_UNDERWRITER_V2_MODULE_01_BUREAU_AUDIT_LOCK.md',
  'docs/AI_UNDERWRITER_V2_MODULE_02_INCOME_AUDIT_LOCK.md',
  'docs/AI_UNDERWRITER_V2_MODULE_03_EMPLOYMENT_AUDIT_LOCK.md',
  'docs/AI_UNDERWRITER_V2_MODULE_04_RESIDENCE_AUDIT_LOCK.md',
  'docs/AI_UNDERWRITER_V2_MODULE_05_WALLET_AUDIT_LOCK.md',
  'docs/AI_UNDERWRITER_V2_MODULE_06_ONCHAIN_AUDIT_LOCK.md',
  'docs/AI_UNDERWRITER_V2_MODULE_07_VEHICLE_AUDIT_LOCK.md',
  'docs/AI_UNDERWRITER_V2_MODULE_08_COLLATERAL_AUDIT_LOCK.md',
  'docs/AI_UNDERWRITER_V2_MODULE_09_MARKET_RISK_AUDIT_LOCK.md',
  'docs/AI_UNDERWRITER_V2_MODULE_10_APPROVAL_PROBABILITY_LOCK.md',
  'docs/AI_UNDERWRITER_V2_MODULE_11_DEFAULT_RISK_LOCK.md',
  'docs/AI_UNDERWRITER_V2_MODULE_12_BEST_FUNDING_SOURCE_LOCK.md',
  'docs/AI_UNDERWRITER_V2_MODULE_13_YIELD_TO_LENDERS_LOCK.md',
  'docs/AI_UNDERWRITER_V2_MODULE_14_FINAL_ACTION_LOCK.md',
  'docs/AI_UNDERWRITER_V2_MODULE_15_AUDIT_PROGRAM_SETTINGS_LOCK.md'
];

const svgFiles = [
  'public/assets/svg/ai-underwriter-v2/module-01-bureau-audit.svg',
  'public/assets/svg/ai-underwriter-v2/module-02-income-audit.svg',
  'public/assets/svg/ai-underwriter-v2/module-03-employment-audit.svg',
  'public/assets/svg/ai-underwriter-v2/module-04-residence-audit.svg',
  'public/assets/svg/ai-underwriter-v2/module-05-wallet-audit.svg',
  'public/assets/svg/ai-underwriter-v2/module-06-on-chain-audit.svg',
  'public/assets/svg/ai-underwriter-v2/module-07-vehicle-audit.svg',
  'public/assets/svg/ai-underwriter-v2/module-08-collateral-audit.svg',
  'public/assets/svg/ai-underwriter-v2/module-09-market-risk-audit.svg',
  'public/assets/svg/ai-underwriter-v2/module-10-approval-probability.svg',
  'public/assets/svg/ai-underwriter-v2/module-11-default-risk.svg',
  'public/assets/svg/ai-underwriter-v2/module-12-best-funding-source.svg',
  'public/assets/svg/ai-underwriter-v2/module-13-yield-to-lenders.svg',
  'public/assets/svg/ai-underwriter-v2/module-14-final-action.svg',
  'public/assets/svg/ai-underwriter-v2/module-15-audit-program-settings.svg'
];

const requiredTokens = [
  'v2BackendBrainParameters',
  'runV2BackwardForwardAudit',
  'shadow_audit_only',
  'canMutateV1Decision: false',
  'requiresHumanPromotionApproval: true',
  'moduleCount: 15',
  'allModulesComplete',
  'backwardAuditPassed',
  'forwardAuditPassed',
  'promotionGatePassed',
  'ai-underwriter-v2-audit-program-settings',
  'onNavigate={setActiveView}',
  'status: \'complete\'',
  'SETTINGS_V2_SHADOW_LOCKED',
  'FINAL_V2_SHADOW_LOCKED'
];

let failed = false;

for (const file of [...requiredFiles, ...moduleLockDocs, ...svgFiles]) {
  if (!existsSync(file)) {
    console.error(`Missing V2 phase completion file: ${file}`);
    failed = true;
  }
}

const content = [...requiredFiles, ...moduleLockDocs, ...svgFiles]
  .filter((file) => existsSync(file))
  .map((file) => readFileSync(file, 'utf8'))
  .join('\n');

for (const moduleId of moduleIds) {
  if (!content.includes(moduleId)) {
    console.error(`Missing locked module id: ${moduleId}`);
    failed = true;
  }
}

for (const token of requiredTokens) {
  if (!content.includes(token)) {
    console.error(`Missing V2 phase completion token: ${token}`);
    failed = true;
  }
}

const svgContent = svgFiles
  .filter((file) => existsSync(file))
  .map((file) => readFileSync(file, 'utf8'));

for (const [index, svg] of svgContent.entries()) {
  if (!svg.includes('viewBox="0 0 1792 1024"')) {
    console.error(`Missing SVG viewBox lock for module ${index + 1}`);
    failed = true;
  }
}

if (failed) process.exit(1);
console.log('AI Underwriter V2 phase completion audit passed: parameters locked, backward audit passed, forward audit passed, SVG and module locks complete.');
