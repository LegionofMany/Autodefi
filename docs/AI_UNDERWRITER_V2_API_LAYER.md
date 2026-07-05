# AI Underwriter V2 — API Layer

Branch: `feature/ai-underwriter-v2-shadow-audit`

## Status

This phase adds framework-neutral TypeScript API handlers on top of the V2 backend brain and persistence layer. These handlers can later be wrapped by Vercel functions, Express routes, Next.js routes, Firebase functions, or another API runtime.

## Added files

```txt
src/features/ai-underwriter/backend/api/apiTypes.ts
src/features/ai-underwriter/backend/api/apiRuntime.ts
src/features/ai-underwriter/backend/api/v1DecisionApi.ts
src/features/ai-underwriter/backend/api/v2ShadowAuditApi.ts
src/features/ai-underwriter/backend/api/snapshotApi.ts
src/features/ai-underwriter/backend/api/governanceApi.ts
src/features/ai-underwriter/backend/api/index.ts
```

## API handlers

```txt
createV1DecisionApi
runV2ShadowAuditApi
getPersistenceSnapshotApi
createGovernanceReviewApi
```

## API runtime

```txt
getV2ApiRepository
setV2ApiRepository
resetV2ApiRepository
```

## API response safety

Every API response includes:

```txt
apiVersion: v2-shadow-api.1
shadowOnly: true
canMutateV1Decision: false
```

## Endpoint behavior

### createV1DecisionApi

Creates a V1 production decision from `V1DecisionInput`. If `persist` is true, it runs and persists the full backend brain snapshot.

### runV2ShadowAuditApi

Loads a persisted V1 decision snapshot, runs a V2 shadow audit against provided outcome evidence ids, saves the updated V2 audit, and returns either `ok` or `review_required` if evidence is incomplete.

### getPersistenceSnapshotApi

Loads the persisted backend brain snapshot for a decision id.

### createGovernanceReviewApi

Creates a governance review request from a persisted recursive learning proposal. It does not mutate the V1 decision.

## Safety locks preserved

```txt
V1 remains production authority.
V2 API remains shadow-only.
API metadata marks canMutateV1Decision as false.
Governance requests cannot mutate V1 decisions.
Incomplete evidence returns review_required.
Human review and rollback remain required.
```

## Next step

The next build can map these framework-neutral handlers to real route files and add request validation/authentication.
