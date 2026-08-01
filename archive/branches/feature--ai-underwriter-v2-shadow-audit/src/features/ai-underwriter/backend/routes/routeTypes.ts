import type { ApiResponse } from '../api';

export type HttpMethod = 'GET' | 'POST';

export type RouteAdapterRequest<TBody = unknown, TParams = Record<string, string>> = {
  method: HttpMethod;
  path: string;
  params: TParams;
  body?: TBody;
  requestId?: string;
};

export type RouteAdapterResponse<TData = unknown> = {
  statusCode: 200 | 202 | 400 | 404 | 500;
  headers: Record<string, string>;
  body: ApiResponse<TData>;
};

export type RouteDefinition = {
  id: string;
  method: HttpMethod;
  path: string;
  description: string;
  shadowOnly: true;
  canMutateV1Decision: false;
};

export function toRouteResponse<TData>(apiResponse: ApiResponse<TData>): RouteAdapterResponse<TData> {
  const statusCode = apiResponse.status === 'ok'
    ? 200
    : apiResponse.status === 'review_required'
      ? 202
      : apiResponse.status === 'not_found'
        ? 404
        : 500;

  return {
    statusCode,
    headers: {
      'content-type': 'application/json',
      'x-autodefi-ai-mode': 'v2-shadow-only',
      'x-autodefi-can-mutate-v1': 'false'
    },
    body: apiResponse
  };
}

export function badRequest<TData>(requestId: string, message: string): RouteAdapterResponse<TData> {
  return {
    statusCode: 400,
    headers: {
      'content-type': 'application/json',
      'x-autodefi-ai-mode': 'v2-shadow-only',
      'x-autodefi-can-mutate-v1': 'false'
    },
    body: {
      status: 'error',
      meta: {
        requestId,
        generatedAt: new Date().toISOString(),
        apiVersion: 'v2-shadow-api.1',
        shadowOnly: true,
        canMutateV1Decision: false
      },
      errors: [message]
    }
  };
}
