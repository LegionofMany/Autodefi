import { existsSync, readFileSync } from 'node:fs';

const requiredFiles = [
  'src/features/ai-underwriter/backend/routes/routeTypes.ts',
  'src/features/ai-underwriter/backend/routes/routeValidation.ts',
  'src/features/ai-underwriter/backend/routes/v1DecisionRoute.ts',
  'src/features/ai-underwriter/backend/routes/v2AuditRoute.ts',
  'src/features/ai-underwriter/backend/routes/snapshotRoute.ts',
  'src/features/ai-underwriter/backend/routes/governanceRoute.ts',
  'src/features/ai-underwriter/backend/routes/routesCatalog.ts',
  'src/features/ai-underwriter/backend/routes/routeExports.ts',
  'docs/AI_UNDERWRITER_V2_ROUTE_ADAPTERS.md'
];

const requiredTokens = [
  'RouteAdapterRequest',
  'RouteAdapterResponse',
  'RouteDefinition',
  'toRouteResponse',
  'hasDecisionInput',
  'v1DecisionRoute',
  'v2AuditRoute',
  'snapshotRoute',
  'governanceRoute',
  'v2RouteDefinitions',
  '/api/ai-underwriter/v2/v1-decisions',
  '/api/ai-underwriter/v2/audits',
  '/api/ai-underwriter/v2/snapshots/:decisionId',
  '/api/ai-underwriter/v2/governance-packets',
  'x-autodefi-ai-mode',
  'x-autodefi-can-mutate-v1',
  'shadowOnly: true',
  'canMutateV1Decision: false'
];

let failed = false;

for (const file of requiredFiles) {
  if (!existsSync(file)) {
    console.error(`Missing route adapter file: ${file}`);
    failed = true;
  }
}

const content = requiredFiles
  .filter((file) => existsSync(file))
  .map((file) => readFileSync(file, 'utf8'))
  .join('\n');

for (const token of requiredTokens) {
  if (!content.includes(token)) {
    console.error(`Missing route adapter token: ${token}`);
    failed = true;
  }
}

if (failed) process.exit(1);
console.log('AI Underwriter V2 route adapter audit passed.');
