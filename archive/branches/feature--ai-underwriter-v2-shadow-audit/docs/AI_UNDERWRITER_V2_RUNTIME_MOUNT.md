# AI Underwriter V2 — Runtime Mount Layer

Branch: `feature/ai-underwriter-v2-shadow-audit`

## Status

This phase adds a runtime dispatcher on top of the route adapters. It gives the V2 backend brain a callable route surface without locking the project to a specific server framework.

## Added files

```txt
src/features/ai-underwriter/backend/runtime/runtimeTypes.ts
src/features/ai-underwriter/backend/runtime/runtimeRouter.ts
src/features/ai-underwriter/backend/runtime/runtimeSmokeTest.ts
src/features/ai-underwriter/backend/runtime/runtimeExports.ts
```

## Runtime dispatcher

```txt
dispatchV2RuntimeRoute
```

The dispatcher maps:

```txt
POST /api/ai-underwriter/v2/v1-decisions
POST /api/ai-underwriter/v2/audits
GET  /api/ai-underwriter/v2/snapshots/:decisionId
POST /api/ai-underwriter/v2/governance-packets
```

## Runtime smoke test

```txt
runV2RuntimeSmokeTest
```

The smoke test runs:

```txt
1. resetV2ApiRepository
2. create persisted V1 decision
3. read persisted snapshot
4. run V2 audit pass
5. create governance packet
6. confirm runtime remains shadow-only
```

## Runtime response lock

Runtime responses include:

```txt
routeId
mounted: true
shadowOnly: true
canMutateV1Decision: false
```

## Safety lock

```txt
V1 decision route still goes through the V1 API.
V2 audit route still goes through the V2 audit API.
Snapshot route only reads a persisted snapshot.
Governance packet route still cannot change V1 decisions.
Runtime metadata remains shadow-only.
```

## Next step

The next build can connect this runtime dispatcher to actual app-facing calls, dev tools, or server route files.
