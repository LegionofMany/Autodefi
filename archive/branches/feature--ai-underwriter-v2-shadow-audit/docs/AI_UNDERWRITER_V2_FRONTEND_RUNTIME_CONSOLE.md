# AI Underwriter V2 — Frontend Runtime Console

Branch: `feature/ai-underwriter-v2-shadow-audit`

## Status

This phase connects the frontend/admin surface to the V2 runtime dispatcher through a Backend Brain Console page.

## Added files

```txt
src/features/ai-underwriter/backend/runtime/runtimeDashboardModel.ts
src/pages/AIUnderwriterBackendBrainConsole.tsx
src/pages/aiUnderwriterBackendBrainConsole.css
```

## Updated files

```txt
src/features/ai-underwriter/backend/runtime/runtimeSmokeTest.ts
src/App.tsx
```

## Route

```txt
ai-underwriter-v2-backend-brain
```

## Console flow

The console calls:

```txt
loadRuntimeDashboardModel
  -> runV2RuntimeSmokeTest
  -> dispatchV2RuntimeRoute
  -> create persisted V1 decision
  -> read persisted snapshot
  -> run V2 audit pass
  -> create governance packet
```

## UI panels

```txt
Runtime Mounted
V2 Mode
Smoke Flow
Governance
Create V1 status
Snapshot status
V2 Audit status
Governance status
Decision ID
Shadow-only lock
Route contracts
```

## Safety locks preserved

```txt
shadowOnly: true
canMutateV1Decision: false
V2 runtime remains mounted but shadow-only
Governance packet does not change V1 decision
Snapshot panel only reads persisted state
```

## Note

The sidebar navigation update was not included in this step because the GitHub write safety layer blocked the full Shell file update. The route is wired in `src/App.tsx`, and the console page is ready for navigation wiring in the next cleanup pass.
