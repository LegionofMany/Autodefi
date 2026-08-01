import { createGovernanceReviewApi, type CreateGovernanceReviewRequest } from '../api';
import type { RouteAdapterRequest } from './routeTypes';
import { toRouteResponse } from './routeTypes';

export async function governanceRoute(request: RouteAdapterRequest<CreateGovernanceReviewRequest>) {
  const response = await createGovernanceReviewApi(request.body as CreateGovernanceReviewRequest);
  return toRouteResponse(response);
}
