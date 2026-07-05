import { createV1DecisionApi, type CreateV1DecisionRequest } from '../api';
import type { RouteAdapterRequest } from './routeTypes';
import { toRouteResponse } from './routeTypes';

export async function v1DecisionRoute(request: RouteAdapterRequest<CreateV1DecisionRequest>) {
  const response = await createV1DecisionApi(request.body as CreateV1DecisionRequest);
  return toRouteResponse(response);
}
