import type { RouteAdapterRequest, RouteAdapterResponse } from '../routes/routeTypes';

export type V2RuntimeRouteId =
  | 'create-v1-decision'
  | 'run-v2-audit'
  | 'get-v2-snapshot'
  | 'create-governance-packet';

export type V2RuntimeRequest = RouteAdapterRequest & {
  routeId?: V2RuntimeRouteId;
};

export type V2RuntimeResponse = RouteAdapterResponse & {
  runtime: {
    routeId: V2RuntimeRouteId | 'unknown';
    mounted: true;
    shadowOnly: true;
    canMutateV1Decision: false;
  };
};

export function withRuntimeMeta(
  routeId: V2RuntimeResponse['runtime']['routeId'],
  response: RouteAdapterResponse
): V2RuntimeResponse {
  return {
    ...response,
    runtime: {
      routeId,
      mounted: true,
      shadowOnly: true,
      canMutateV1Decision: false
    }
  };
}
