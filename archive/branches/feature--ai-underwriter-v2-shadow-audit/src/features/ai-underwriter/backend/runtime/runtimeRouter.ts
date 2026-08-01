import { governanceRoute } from '../routes/governanceRoute';
import { snapshotRoute } from '../routes/snapshotRoute';
import { v1DecisionRoute } from '../routes/v1DecisionRoute';
import { v2AuditRoute } from '../routes/v2AuditRoute';
import { badRequest } from '../routes/routeTypes';
import type { V2RuntimeRequest, V2RuntimeResponse } from './runtimeTypes';
import { withRuntimeMeta } from './runtimeTypes';

function normalizePath(path: string) {
  return path.replace(/\/+$/, '') || '/';
}

function getSnapshotDecisionId(path: string) {
  const prefix = '/api/ai-underwriter/v2/snapshots/';
  if (!path.startsWith(prefix)) return undefined;
  return path.slice(prefix.length);
}

export async function dispatchV2RuntimeRoute(request: V2RuntimeRequest): Promise<V2RuntimeResponse> {
  const path = normalizePath(request.path);

  if (request.method === 'POST' && path === '/api/ai-underwriter/v2/v1-decisions') {
    return withRuntimeMeta('create-v1-decision', await v1DecisionRoute(request as never));
  }

  if (request.method === 'POST' && path === '/api/ai-underwriter/v2/audits') {
    return withRuntimeMeta('run-v2-audit', await v2AuditRoute(request as never));
  }

  const snapshotDecisionId = getSnapshotDecisionId(path);
  if (request.method === 'GET' && snapshotDecisionId) {
    return withRuntimeMeta('get-v2-snapshot', await snapshotRoute({ ...request, params: { decisionId: snapshotDecisionId } }));
  }

  if (request.method === 'POST' && path === '/api/ai-underwriter/v2/governance-packets') {
    return withRuntimeMeta('create-governance-packet', await governanceRoute(request as never));
  }

  return withRuntimeMeta('unknown', badRequest(request.requestId ?? `runtime-${Date.now()}`, `No V2 runtime route found for ${request.method} ${path}.`));
}
