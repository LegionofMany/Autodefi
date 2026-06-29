# AutoDeFi V1 Security Boundaries

## Private Key Boundary

Never expose backend private keys to the frontend.

Do not commit:

- HEDERA_OPERATOR_PRIVATE_KEY
- HEDERA_TREASURY_PRIVATE_KEY
- HEDERA_EVM_PRIVATE_KEY
- production JWT_SECRET
- production DATABASE_URL
- private wallet keys

## API Boundary

Frontend calls API gateway only.

Frontend to API gateway to service.

## Data Boundary

- Dealer sees own dealership data.
- Borrower sees own loan, payment, and collateral data.
- LP sees own positions and yield.
- Admin can operate internal controls.
