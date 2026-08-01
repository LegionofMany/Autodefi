# AI Underwriter V2 — Frontend Client Bridge

Branch: `feature/ai-underwriter-v2-shadow-audit`

## Status

This phase adds a small frontend client bridge around the runtime dispatcher and makes the Backend Brain Console reachable from the AI Underwriter Command Center.

## Added files

```txt
src/features/ai-underwriter/client/v2BackendBrainClient.ts
src/features/ai-underwriter/client/index.ts
```

## Updated files

```txt
src/features/ai-underwriter/backend/runtime/runtimeDashboardModel.ts
src/pages/AIUnderwriterCommandCenter.tsx
```

## Client functions

```txt
createPersistedV1Decision
readBackendBrainSnapshot
runBackendBrainAudit
createBackendBrainGovernancePacket
runBackendBrainClientDemo
```

## Command Center entry point

The AI Decision Engine footer now includes:

```txt
Backend Brain →
```

That button routes to:

```txt
ai-underwriter-v2-backend-brain
```

## Client flow

```txt
runBackendBrainClientDemo
  -> reset V2 API repository
  -> create persisted V1 decision
  -> read backend brain snapshot
  -> run V2 audit pass
  -> create governance packet
```

## Safety locks preserved

```txt
shadowOnly: true
canMutateV1Decision: false
V2 cannot change V1 decisions
Governance packet cannot change V1 decisions
Snapshot read is read-only
```

## Next step

The next cleanup can attempt sidebar navigation again with a smaller patch, then run a final TypeScript/audit alignment pass.
