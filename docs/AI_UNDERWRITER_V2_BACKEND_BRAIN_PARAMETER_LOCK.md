# AI Underwriter V2 — Backend Brain Parameter Lock

Branch: `feature/ai-underwriter-v2-shadow-audit`

## Lock status

This phase locks the backend-brain parameters that the next backend implementation must obey.

The V2 backend brain is **not allowed** to mutate V1 production decisions. It starts as a shadow-audit brain only.

## Locked source files

```txt
src/features/ai-underwriter/v2BackendBrainParameters.ts
src/features/ai-underwriter/v2BackwardForwardAudit.ts
src/features/ai-underwriter/recursiveShadowAudit.ts
src/features/ai-underwriter/aiUnderwriterV2Data.ts
```

## Hard parameters

```txt
Engine: NeuralRisk V2 Backend Brain
Version: v2.0.0-shadow-brain-lock.1
V1 authority: production_engine
V2 mode: shadow_audit_only
Can mutate V1 decision: false
Human promotion approval required: true
Locked module count: 15
Primary underwriting module count: 14
Settings module number: 15
Minimum reason codes per module: 2
Minimum recursive learning signals: 5
```

## Locked module sequence

```txt
1. Bureau Audit
2. Income Audit
3. Employment Audit
4. Residence Audit
5. Wallet Audit
6. On-Chain Audit
7. Vehicle Audit
8. Collateral Audit
9. Market Risk Audit
10. Approval Probability
11. Default Risk
12. Best Funding Source
13. Yield to Lenders
14. Final Action
15. Audit Program Settings
```

## Promotion evidence required later

```txt
repayment_performance
delinquency_outcomes
recovery_outcomes
pool_yield_outcomes
dealer_funding_speed
market_drift_review
bias_review
human_governance_approval
model_version_record
rollback_plan
```

## Safety lock

- V1 remains the operating decision engine.
- V2 remains shadow-audit only.
- V2 cannot auto-change V1 approvals, conditions, declines, pricing, funding source, or final action.
- V2 recommendations require outcome evidence.
- V2 recommendations require human governance approval.
- Every module must remain reason-code-ready.
- Every model promotion must have a version record and rollback path.

## Completion note

Backend brain parameters are now locked for the next backend build phase.
