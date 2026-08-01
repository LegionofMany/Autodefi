# AutoDeFi Frontend

This folder contains the safe React + TypeScript + Vite frontend for the AutoDeFi / ADF DAO interface.

It was added under `/autodefi-frontend` so the completed backend and existing repository files remain untouched.

## What is included

- Real React frontend code, not a static screenshot or image mockup.
- Dark neon AutoDeFi design system using CSS and inline SVG.
- Inline SVG graphics for the AutoDeFi logo, ADF coin, line charts, bar charts, donut allocation chart, utility gauge, network map, and heatmap.
- Main ADF Token Utility command center.
- Ten Token Utility deep pages:
  1. Full ADF Tokenomics
  2. Stake ADF Quick Action
  3. ADF Utility Report
  4. Cross-Chain Utility & Bridges
  5. NFT Access & Memberships
  6. DeFi Partners & Integrations
  7. Merchant Ecosystem Access
  8. Token Audit
  9. Smart Contract Details
  10. Usage Analytics & Insights
- AutoDeFi portal pages for Borrower, Dealer, Capital Yield, DAO Governance, Risk & Security, and Insurance & Recovery.
- Backend API adapter in `src/api.ts`.

## Locked AutoDeFi rules reflected in the UI

- Approved AutoDeFi deals pay the dealer in full after delivery confirmation.
- Borrowers repay with regional stable-value rails, not ADF by default.
- ADF is used for staking, collateral, access, rewards, discounts, governance, and ecosystem utility.
- Interest yield is distributed to users staked in the matching risk-tier pools.
- ZONYCS recovery auctions can be routed by DAO-approved allocation rules.

## Install

```bash
cd autodefi-frontend
npm install
```

## Run locally

```bash
npm run dev
```

## Build

```bash
npm run build
```

## Connect to backend

Create an environment file:

```bash
cp .env.example .env
```

Then update:

```bash
VITE_AUTODEFI_API_BASE_URL=https://your-autodefi-backend.example.com
```

The backend adapter lives at:

```text
src/api.ts
```

Replace the in-component demo arrays with API responses as backend endpoints are connected.

## Safety note

This frontend was intentionally pushed into its own folder to avoid overwriting the completed backend. Merge or integrate into the backend app only after confirming deployment structure.
