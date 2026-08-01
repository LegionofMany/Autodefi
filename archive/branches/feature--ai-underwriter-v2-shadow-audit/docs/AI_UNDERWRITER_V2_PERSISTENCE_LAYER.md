# AI Underwriter V2 — Persistence Layer

Branch: `feature/ai-underwriter-v2-shadow-audit`

## Status

This phase adds the persistence contract for the V2 backend brain. It is still framework-neutral TypeScript, so it can later be mapped to Postgres, Supabase, Prisma, Drizzle, Firebase, or another backend storage layer.

## Added files

```txt
src/features/ai-underwriter/backend/persistence/schema.ts
src/features/ai-underwriter/backend/persistence/repository.ts
src/features/ai-underwriter/backend/persistence/inMemoryRepository.ts
src/features/ai-underwriter/backend/persistence/modelVersionService.ts
src/features/ai-underwriter/backend/persistence/persistBackendBrain.ts
src/features/ai-underwriter/backend/persistence/index.ts
```

## Locked persistence tables

```txt
ai_v1_decisions
ai_v2_shadow_audits
ai_audit_logs
ai_outcome_events
ai_learning_proposals
ai_governance_requests
ai_model_versions
```

## Required indexes

```txt
idx_ai_v1_decisions_decision_id
idx_ai_v2_shadow_audits_shadow_audit_id
idx_ai_v2_shadow_audits_audited_decision_id
idx_ai_audit_logs_decision_id_created_at
idx_ai_outcome_events_decision_id_event_type
idx_ai_learning_proposals_decision_id
idx_ai_governance_requests_proposal_id_status
idx_ai_model_versions_model_version
```

## Safety columns

```txt
canMutateV1Decision
canChangeDecision
promotionLocked
requiresHumanGovernance
rollbackPlanRequired
immutable
```

## Repository contract

The repository layer supports:

```txt
saveV1Decision
saveV2ShadowAudit
appendAuditLog
appendOutcomeEvents
saveLearningProposal
saveGovernanceRequest
saveModelVersion
getSnapshot
tableNames
```

## Persistence runner

`persistBackendBrain()` runs the backend brain and persists:

```txt
V1 decision
V2 shadow audit
Audit logs
Outcome-learning events
Recursive learning proposal
Governance request
Model version record
```

## Locked safety behavior

```txt
V1 decision authority is preserved.
V2 shadow audit cannot change the V1 decision.
Governance request cannot mutate the V1 decision.
Model version remains promotion locked.
Audit log entries use immutable: true.
Rollback version is recorded.
```

## Next step

The next backend phase can map this repository contract to a real database and then expose it through API routes.
