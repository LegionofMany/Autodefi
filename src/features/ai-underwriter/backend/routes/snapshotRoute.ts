import { getPersistenceSnapshotApi, type GetPersistenceSnapshotRequest } from '../api';
import type { RouteAdapterRequest } from './routeTypes';
import { toRouteResponse } from './routeTypes';

export async function snapshotRoute(request: RouteAdapterRequest<unknown, GetPersistenceSnapshotRequest>) {
  const response = await getPersistenceSnapshotApi(request.params);
  return toRouteResponse(response);
}
