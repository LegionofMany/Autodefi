import { runBackendBrainClientDemo, type V2BackendBrainClientResult } from '../../client';

export type RuntimeDashboardModel = {
  title: string;
  subtitle: string;
  statusCards: Array<{ label: string; value: string; detail: string; tone: 'green' | 'cyan' | 'purple' | 'yellow' }>;
  routeContracts: Array<{ method: string; path: string; purpose: string }>;
  smokeTest: V2BackendBrainClientResult;
};

export async function loadRuntimeDashboardModel(): Promise<RuntimeDashboardModel> {
  const smokeTest = await runBackendBrainClientDemo();

  return {
    title: 'V2 Backend Brain Runtime Console',
    subtitle: 'Frontend client bridge for V1 decision, V2 audit, snapshot, and governance packet flow.',
    smokeTest,
    statusCards: [
      { label: 'Runtime Mounted', value: 'Online', detail: 'Dispatcher active', tone: 'green' },
      { label: 'Frontend Client', value: 'Connected', detail: 'Client calls runtime', tone: 'cyan' },
      { label: 'V2 Mode', value: 'Shadow Only', detail: 'Cannot mutate V1', tone: 'purple' },
      { label: 'Smoke Flow', value: smokeTest.shadowOnly ? 'Pass' : 'Review', detail: smokeTest.decisionId, tone: smokeTest.shadowOnly ? 'green' : 'yellow' }
    ],
    routeContracts: [
      { method: 'POST', path: '/api/ai-underwriter/v2/v1-decisions', purpose: 'Create and persist V1 decision snapshot' },
      { method: 'POST', path: '/api/ai-underwriter/v2/audits', purpose: 'Run V2 audit pass' },
      { method: 'GET', path: '/api/ai-underwriter/v2/snapshots/:decisionId', purpose: 'Read persisted backend brain snapshot' },
      { method: 'POST', path: '/api/ai-underwriter/v2/governance-packets', purpose: 'Create governance review packet' }
    ]
  };
}
