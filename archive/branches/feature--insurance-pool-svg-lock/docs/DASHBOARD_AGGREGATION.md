# AutoDeFi V1 Dashboard Aggregation

The dashboard aggregation layer gives the frontend clean summary endpoints instead of forcing each page to assemble raw data.

## Planned Endpoints

- GET /api/finance/dashboard/institutional
- GET /api/finance/dashboard/dealer/:dealerId
- GET /api/finance/dashboard/borrower/:borrowerUserId
- GET /api/finance/dashboard/lp/:walletAddress
- GET /api/finance/dashboard/treasury
- GET /api/finance/dashboard/risk

## Dashboard Rule

Every major page should have loading, empty, error and fallback states.
