# AutoDeFi V1 Permission Matrix

## Roles

| Role | Access |
|---|---|
| consumer | public marketplace, borrower onboarding |
| borrower | own loan, own payments, own notices, own ADF collateral |
| dealer | own dealership, own deals, own funding queue, own tasks |
| lp | tier pools, own LP positions, own yield distributions |
| investor | investor command, revenue-share, protocol analytics |
| admin | internal operations, funding, treasury, risk, reconciliation |
| dao | governance, proposal and treasury approval views |

## Hard Rules

- Dealer cannot access another dealer's deal.
- Borrower cannot access another borrower's loan.
- LP cannot modify pool accounting directly.
- Investor cannot execute admin treasury actions.
- DAO cannot bypass admin execution controls.
- Frontend never receives backend private keys.
- Hedera private keys stay backend/server-side only.
