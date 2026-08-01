# Treasury Management Center V1 Lock

This document locks the AutoDeFi DAO Treasury Management Center frontend parameters from the approved treasury dashboard review.

## Scope

Treasury Management Center V1 includes nine locked pages:

1. Dashboard
2. Treasury Assets
3. Allocations
4. Revenue Streams
5. Reserves
6. Expenditures
7. Budgeting
8. Reports
9. Audit Logs

## Locked visual direction

- Dark fintech / Web3 dashboard background.
- Neon cyan, blue, green, purple, orange, and red accents.
- Glass-card panels with soft borders and glow.
- AutoDeFi DAO shield/treasury branding.
- Left treasury sidebar with active purple/blue tab state.
- Matrix-style lower sidebar texture.
- KPI cards, donut charts, line charts, progress bars, status pills, tables, audit filters, and export controls.
- Footer language must reference AutoDeFi DAO smart contracts and multi-signature governance.

## Locked sidebar order

1. Dashboard
2. Treasury Assets
3. Allocations
4. Revenue Streams
5. Reserves
6. Expenditures
7. Budgeting
8. Reports
9. Audit Logs

## Locked common metrics

| Metric | Value |
| --- | ---: |
| Total Treasury Value | $24.67M |
| Stablecoins | $18.42M |
| Token Holdings | $4.12M |
| Other Assets | $2.13M |
| Monthly Revenue | $1.24M |
| Monthly Expenses | $342.11K |
| Treasury Status | Healthy |
| Risk Score | 18 / 100 |
| Utilization | 24.3% |
| Runway | 18.2 Months |

## Naming reconciliation

The top KPI is locked as **Token Holdings**, not **Token Holdings (ADF)**. The $4.12M token total may include ADF, HBAR, ETH, and other treasury tokens. ADF appears separately in asset tables as the Hedera-based governance token.

## Hedera / ADF rule

ADF remains a Hedera-based governance/staking/collateral/access/rewards token. ADF is not the default borrower loan payment currency. Borrower repayments remain stable-value rail based.

## Budget utilization rule

The detailed budget utilization value is locked at **41.61%**. Smaller visual labels may round only when necessary, but the detailed value must remain exact.

## Allocation math rule

Protected reserves are a subset of treasury allocation, not a second treasury total. The UI must not imply that allocated plus reserved is additive outside the $24.67M treasury value.

## Implementation files

- `src/pages/TreasuryManagementCenter.tsx`
- `src/data/treasuryManagementData.ts`
- `src/styles/treasury.css`
- `scripts/audit-treasury-management-center.ts`

## Audit command

Run:

```bash
npm run audit:treasury-management-center
```

The audit checks page coverage, naming reconciliation, Hedera visibility, exact budget utilization, governance footer language, raster-asset avoidance, and CSS namespace isolation.
