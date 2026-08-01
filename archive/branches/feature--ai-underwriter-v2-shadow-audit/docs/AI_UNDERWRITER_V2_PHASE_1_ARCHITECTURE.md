# AI Underwriter V2 — Phase 1 Architecture

Branch: `feature/ai-underwriter-v2-shadow-audit`

## Phase 1 goal

Build the first live React page for the AI Underwriter V2 Command Center and lock the regenerative recursive architecture before coding the page sequence.

## Product split

### V1 AI Underwriter

V1 is the operating decision engine. It performs the active underwriting workflow:

1. Intake application data.
2. Verify KYC, income, bank, employment, residence, wallet, on-chain, vehicle, collateral, and market inputs.
3. Score the borrower, vehicle, dealer, collateral, market, and pool impact.
4. Route the deal to approval, conditional approval, decline, or Tier 4 off-platform routing.
5. Produce clear reason codes and audit logs.
6. Feed funding readiness and dealer payout workflow.

### V2 AI Underwriter

V2 is the shadow audit and market-learning engine. It does not mutate live V1 decisions.

V2:

1. Re-scores each V1 deal in shadow mode.
2. Compares V1 decisions to portfolio and market outcomes.
3. Detects false approvals, missed approvals, weak conditions, tier drift, dealer risk drift, valuation drift, and yield mismatch.
4. Learns from market data, payment performance, recovery, repossession, liquidation, stable-value repayment rails, and pool results.
5. Generates model/rule recommendations.
6. Sends recommendations to a human/model-governance promotion gate.

## Recursive loop

```txt
V1 Decision
  ↓
V2 Shadow Audit
  ↓
Outcome + Market Learning
  ↓
Recursive Improvement Proposal
  ↓
Human / Risk Governance Gate
  ↓
Approved Model Version Update
```

## Page flow

0. Command Center Overview
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

## Phase 1 files

- `src/features/ai-underwriter/types.ts`
- `src/features/ai-underwriter/aiUnderwriterV2Data.ts`
- `src/features/ai-underwriter/recursiveShadowAudit.ts`
- `src/pages/AIUnderwriterCommandCenter.tsx`
- `src/pages/aiUnderwriterV2.css`
- `scripts/audit-ai-underwriter-v2-phase1.ts`

## Safety and compliance lock

V2 starts in `shadow_mode`.

V2 cannot auto-approve, auto-decline, or directly update V1 production rules.

Every recommendation requires:

1. Reason-code explanation.
2. Outcome evidence.
3. Drift/bias check.
4. Human approval.
5. Model version record.
6. Rollback path.

## Phase 1 completion gate

Phase 1 is complete when:

- The command center page is wired into the app.
- The module sequence includes the reconstructed On-Chain Audit page.
- V2 shadow mode is represented in code.
- Recursive learning outputs are represented in code.
- The audit script verifies required files and safety tokens.
