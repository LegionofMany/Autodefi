# AutoDeFi Front End V1

Production-ready React + TypeScript + Vite front end for the AutoDeFi / Voltaire Protocols auto-loan liquidity system.

This package implements the completed AutoDeFi front-end direction from the chat: dark fintech UI, neon blue/green/purple accents, SVG-only product graphics, lender pool screens #1–#6, DAO navigation, risk, revenue, treasury, staking, governance, borrower, dealer, capital-yield, insurance/recovery, and admin command center screens.

## What is included

- Full React/TypeScript front-end scaffold.
- AutoDeFi sidebar and wallet header.
- SVG logo, SVG icons, SVG vehicle/tier graphics, SVG shield/insurance graphics, SVG chart components.
- Full tracked SVG dashboard files in `public/assets/svg` for every major AutoDeFi area:
  - Dashboard Overview
  - DAO Proposals
  - DAO Vote
  - Treasury Management Center
  - ADF Staking
  - Lender Pool
  - Risk & Security Analytics
  - Revenue Sharing
  - ADF Token Utility
  - Governance Dashboard
  - Audit & Security
  - Analytics Dashboard
  - Borrower Portal
  - Dealer Portal / Block Motors
  - Capital Yield Portal
  - Insurance AI Recovery
  - Admin Command Center
- Lender Pool sections:
  1. Risk Tier Pool Allocation
  2. Pool Performance Overview
  3. Loan Origination & Funding Overview
  4. Risk & Credit Performance
  5. Lender Rewards & Revenue Distribution
  6. Pool Utilization & Capital Allocation
- DAO pages: Dashboard, Proposals, Vote, Treasury, Staking, Risk Management, Revenue Sharing, Token Utility, Governance, Audit & Security, Analytics.
- AutoDeFi portal pages: Borrower Portal, Dealer Portal, Capital Yield Portal, Insurance & Recovery, Admin Command Center.
- API service layer ready to connect to the completed backend through `VITE_AUTODEFI_API_BASE`.
- Static seed data included so the UI can render immediately while backend endpoints are wired.

## Install

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Connect the completed backend

Copy `.env.example` to `.env` and set:

```bash
VITE_AUTODEFI_API_BASE=https://your-api-domain.com
```

Then replace seed-data calls with backend responses inside `src/services/api.ts` or directly in the page loaders.

Suggested backend endpoints:

```txt
GET /metrics/global
GET /lender-pool/tier-allocation
GET /lender-pool/performance
GET /lender-pool/origination
GET /lender-pool/risk-credit
GET /lender-pool/rewards
GET /lender-pool/utilization
GET /dao/proposals
GET /treasury/overview
GET /risk/overview
GET /insurance-recovery/overview
```

## GitHub push

```bash
git init
git add .
git commit -m "Initial AutoDeFi frontend"
git branch -M main
git remote add origin git@github.com:YOUR_ORG/YOUR_REPO.git
git push -u origin main
```

## Design notes

This front end intentionally avoids raster dashboard screenshots as UI assets. Product graphics are SVG files or SVG React components so the design stays crisp, editable, Webflow-friendly, and GitHub-friendly.
