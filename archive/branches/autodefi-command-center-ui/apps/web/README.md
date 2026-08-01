# AutoDeFi Command Center Front End

React/Vite front-end prototype for the AutoDeFi decentralized auto loan pool command center.

## Included screens

- Command Center
- Profile
- Wallet
- KYC Verified
- Notifications
- Borrow
- Invest
- Insurance Pool
- DAO Governance
- Staking Rewards
- Marketplace
- Dealer Access
- Apply Now
- Final Review & Apply

## Apply flow coverage

The coded apply flow includes the calculator/pre-qualification stage and final review stage:

- Vehicle value
- Loan amount requested
- Cash down payment
- ADF staked in the ecosystem
- Loan term
- Payment frequency
- LTV output
- Risk tier match
- Estimated APR
- Estimated payment
- Approval strength
- Pre-submission checklist
- Final approval CTA

## Run locally

```bash
cd apps/web
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Status

This is the V1 front-end UI build. Backend services, wallet connection, Hedera integrations, KYC provider integrations, underwriting APIs, and production data persistence are separate phases.
