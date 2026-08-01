# AI Underwriter V2 — Route Adapters

Branch: `feature/ai-underwriter-v2-shadow-audit`

## Status

This phase maps the framework-neutral API handlers into route-style adapters. These are not tied to Express, Next.js, or Vercel yet. They define method/path contracts and response wrappers that can be mounted later.

## Added files

```txt
src/features/ai-underwriter/backend/routes/routeTypes.ts
src/features/ai-underwriter/backend/routes/routeValidation.ts
src/features/ai-underwriter/backend/routes/v1DecisionRoute.ts
src/features/ai-underwriter/backend/routes/v2AuditRoute.ts
src/features/ai-underwriter/backend/routes/snapshotRoute.ts
src/features/ai-underwriter/backend/routes/governanceRoute.ts
src/features/ai-underwriter/backend/routes/routesCatalog.ts
src/features/ai-underwriter/backend/routes/routeExports.ts
```

## Route contracts

```txt
POST /api/ai-underwriter/v2/v1-decisions
POST /api/ai-underwriter/v2/audits
GET  /api/ai-underwriter/v2/snapshots/:decisionId
POST /api/ai-underwriter/v2/governance-packets
```

## Adapter functions

```txt
v1DecisionRoute
v2AuditRoute
snapshotRoute
governanceRoute
```

## Response contract

Route adapters return:

```txt
statusCode
headers
body
```

Headers preserve:

```txt
x-autodefi-ai-mode: v2-shadow-only
x-autodefi-can-mutate-v1: false
```

## Safety lock

```txt
V1 route calls the V1 decision API.
V2 route calls the V2 audit API.
Snapshot route only reads persisted snapshots.
Governance route creates a review packet but does not mutate V1 decisions.
All route metadata remains shadow-only.
```

## Next step

The next phase can mount these route adapters into a real runtime such as Vercel API functions, Express routes, or Next.js route handlers.
