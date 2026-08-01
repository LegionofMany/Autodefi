# AutoDeFi DAO Investor Portal Frontend

Production-ready React + TypeScript frontend for the AutoDeFi DAO Investor Portal.

This is real front-end code, not image-only mockups. It includes the complete Investor Portal flow rendered in the chat: Overview, Pools, Investments, Performance, Transactions, Statements, Reports, My Portfolio, Allocation, Yield History, Payouts, Tax Documents, How It Works, Risk Framework, Documentation, Help Center, and Contact Support.

## Run locally

```bash
cd investor-portal
npm install
cp .env.example .env.local
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Backend integration

Set your backend URL:

```bash
VITE_API_BASE_URL=https://api.your-autodefi-backend.com
VITE_USE_FIXTURE_DATA=false
```

The app calls:

- `GET /api/investor/dashboard`
- `POST /api/support/tickets`

The UI includes local fallback data for visual QA only. Production should keep backend routes live.

## AutoDeFi alignment

- Approved deals are funded in full to dealers.
- Borrowers repay using regional stable-value rails.
- Interest yield is distributed to matching risk-tier investors/stakers.
- ADF is used for staking, collateral, access, rewards, governance, and ecosystem utility.
- ADF is not treated as the default borrower repayment currency.
