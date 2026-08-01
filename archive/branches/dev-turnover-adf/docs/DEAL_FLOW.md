# AutoDeFi Deal Flow

## Locked V1 deal flow

1. Borrower starts an application.
2. Identity and KYC are verified.
3. Income verification and bank analysis are reviewed.
4. Vehicle valuation confirms collateral value and LTV.
5. AI underwriting and risk modules assign terms and tier routing.
6. Conditional approval may require documents, collateral changes, or other conditions.
7. Funding readiness confirms documents, conditions, capital matching, and dealer payout readiness.
8. Approved deals are funded in full to the dealer.
9. Borrower repays using regional stable-value rails.
10. Interest yield is distributed to stakers in matching risk-tier pools.

## Tier rules

- Tier 1: staked ADF collateral or more than one-third down payment.
- Tier 2: good credit plus token down.
- Tier 3: good credit with no money down.
- Tier 4: last-chance lead routed to a local dealer off-platform.

## Front-end representation

The current repo represents deal flow through seed data, dashboards, SVG locks, and module screens. Production API connections should preserve these workflow stages.
