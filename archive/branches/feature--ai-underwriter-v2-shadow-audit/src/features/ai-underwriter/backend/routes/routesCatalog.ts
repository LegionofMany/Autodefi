import type { RouteDefinition } from './routeTypes';

export const v2RouteDefinitions: RouteDefinition[] = [
  { id: 'create-v1-decision', method: 'POST', path: '/api/ai-underwriter/v2/v1-decisions', description: 'V1 decision route.', shadowOnly: true, canMutateV1Decision: false },
  { id: 'run-v2-audit', method: 'POST', path: '/api/ai-underwriter/v2/audits', description: 'V2 audit route.', shadowOnly: true, canMutateV1Decision: false },
  { id: 'get-v2-snapshot', method: 'GET', path: '/api/ai-underwriter/v2/snapshots/:decisionId', description: 'Snapshot route.', shadowOnly: true, canMutateV1Decision: false },
  { id: 'create-governance-packet', method: 'POST', path: '/api/ai-underwriter/v2/governance-packets', description: 'Governance route.', shadowOnly: true, canMutateV1Decision: false }
];
