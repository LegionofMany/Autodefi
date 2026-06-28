# AutoDeFi DAO Frontend

Production-ready front-end application for the AutoDeFi DAO / Voltaire Protocols governance command center.

This app is intentionally isolated under `apps/dao-frontend/` so it can be pushed safely without overwriting the existing backend or prior AutoDeFi portal work in the repository.

## Included DAO tabs

- Dashboard / Analytics Command Center
- Proposals
- Voting
- Treasury
- Staking
- Lender Pool
- Risk Management
- Revenue Sharing
- Token Utility
- Governance
- Audit & Security
- Analytics
- Tokenomics
- Delegation
- Members
- Forum
- Announcements
- Reports & Analytics
- Resources
- Settings

## Design system

The front end uses the approved AutoDeFi visual direction from the chat build:

- Dark fintech interface
- Neon blue, green, purple, orange, and red status colors
- Voltaire Protocols / AutoDeFi DAO branding
- Hedera Mainnet alignment
- ADF token status and governance identity
- Dashboard cards, charts, donuts, heatmaps, tables, feeds, governance queues, and status bars
- Inline SVG iconography so the design layer remains bundled with the page

## AutoDeFi rules represented

- AutoDeFi is aligned to Hedera / HBAR / ADF.
- ADF is used for staking, collateral support, access, rewards, governance, and ecosystem utility.
- ADF is not the default borrower loan repayment currency.
- Borrower repayments use regional stable-value rails.
- Approved dealer deals are funded in full to the dealer after approval and delivery confirmation.
- Interest yield routes to matching risk-tier stakers.
- Tier 4 is represented as referral / last-chance dealer flow.
- ZONYCS recovery auction allocation is represented inside token utility and recovery flow.

## Backend connection

The file is self-contained and works with static fallback data. To connect the completed backend, set this value before loading the app:

```js
window.AUTODEFI_API_BASE_URL = "https://your-api-domain.com";
```

or set it in local storage:

```js
localStorage.setItem("AUTODEFI_API_BASE_URL", "https://your-api-domain.com");
```

The expected page endpoint is:

```txt
GET /api/dao/pages/:slug
```

The app safely falls back to built-in DAO data if the API is not configured yet.

## Run locally

Because the app is self-contained, it can be opened directly in a browser. For local development with Vite:

```bash
cd apps/dao-frontend
npm run dev
```

## Build

```bash
cd apps/dao-frontend
npm run build
```

## Current branch

This app was pushed to:

```txt
frontend/dao-complete-ui
```
