# AutoDeFi Investor Portal Front End

Dark fintech/Web3 investor portal for the AutoDeFi DeFi auto loan pool ecosystem.

## Included tabs

- Dashboard
- Investments
- Pools
- Performance
- Statements
- Reports
- Transactions
- Capital Requests
- KYC & Profile
- Documents
- Alerts & Notifications
- Settings
- Support

## AutoDeFi parameters followed

- Investor portal is focused on capital providers, not borrowers or dealers.
- Pools are aligned to AutoDeFi loan-pool logic: Tier 1, Tier 2, Tier 3, liquid staking, cash/stablecoin reserve, and insurance/recovery reserves.
- Real estate backed pools were removed.
- Borrower repayments are represented as stable-value rail payouts, shown as USDC in the mock UI.
- Yield comes from auto loan interest, origination fees, late fees, liquidation/recovery fees, and other protocol income.
- ADF is treated as ecosystem utility, staking/collateral/governance/rewards, not default borrower payment currency.

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```
