# AutoDeFi Loan Servicing Center Front End

A dark fintech/Web3 front-end for the AutoDeFi DeFi Auto Loan Pool servicing workflow.

## Included screens

1. Dashboard / Loan Servicing Center
2. Active Loans
3. Payment History
4. Escrow & Collateral
5. Insurance
6. Refinance Center
7. Loan Modifications
8. Statements
9. Reports

## Project notes

This is a front-end only implementation using React + Vite. It is designed to match the AutoDeFi visual language from the chat: black/navy background, neon blue/green/purple accents, card dashboards, KPI tiles, loan tables, status badges, right-side insight panels, and bottom action bars.

The dashboard assumes the AutoDeFi model:

- Approved funded deals are paid in full to dealers.
- Borrowers repay through regional stable-value rails.
- Interest yield is distributed to users staked in matching risk-tier pools.
- ADF is used for staking, collateral, access, rewards, governance, and ecosystem utility.
- Servicing connects to insurance, escrow, collateral health, refinance, modifications, reports, and ZONYCS recovery flows.

## Run locally

```bash
npm install
npm run dev
```

Then open the local Vite URL shown in the terminal.

## Build

```bash
npm run build
```

## Suggested next integration layer

- Connect table data to Supabase, Firebase, or a custom Node API.
- Add wallet login through Hedera-compatible Web3 auth.
- Connect stable-value repayment rails.
- Add role-based admin permissions.
- Add DAO/governance action logging for servicing policy changes.
