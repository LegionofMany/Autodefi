# AutoDeFi Frontend

GitHub-ready React + TypeScript frontend for the AutoDeFi decentralized auto loan pool ecosystem under Voltaire Protocols.

## Included portals

- Borrower Portal Dashboard
- Dealer Portal Dashboard / Block Motors workflow
- Capital Yield Portal Dashboard
- DAO & Community Governance Dashboard
- Risk & Security Analytics Dashboard
- Insurance AI Recovery Modules Dashboard
- Loan Servicing Center
- Insurance Claims Center
- Treasury Management Center
- Collections & Recovery Center
- Investor Portal
- Dealer Marketplace Network
- AI Underwriter Center

## AutoDeFi rules implemented in the UI

- Approved dealer deals are funded in full to the dealer after delivery confirmation.
- Borrowers repay through regional stable-value rails.
- ADF is used for staking, collateral, rewards, access, utility, and governance, not as the default borrower repayment currency.
- Interest yield is distributed to users staked in the matching risk-tier pool.
- Zonycs.com is represented as the marketplace and recovery/liquidation integration layer.

## Install

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Environment

Copy `.env.example` to `.env.local` and connect your completed backend:

```bash
VITE_API_BASE_URL=https://your-api-domain.com
VITE_HEDERA_NETWORK=testnet
VITE_ZONYCS_URL=https://zonycs.com
```

## Repository status

This is the first pushed frontend implementation. It is intentionally frontend-only and backend-ready. Static dashboard fallbacks are included so the UI renders while API endpoints are being connected.
