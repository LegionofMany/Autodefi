import { runV2ShadowAuditApi as runAuditApi, type RunV2ShadowAuditRequest } from '../api';
import type { RouteAdapterRequest } from './routeTypes';
import { toRouteResponse } from './routeTypes';

export async function v2AuditRoute(request: RouteAdapterRequest<RunV2ShadowAuditRequest>) {
  const response = await runAuditApi(request.body as RunV2ShadowAuditRequest);
  return toRouteResponse(response);
}
