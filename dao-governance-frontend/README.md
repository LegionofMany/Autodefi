# AutoDeFi DAO Governance Frontend

Production-ready front-end phase for the AutoDeFi DAO governance dashboard.

This package contains a complete Vite-powered static frontend for the DAO section of AutoDeFi. It is built to match the approved dark neon Web3 fintech design direction and includes local SVG assets for the graphics instead of external image dependencies.

## Included tabs

1. Dashboard
2. Proposals
3. Vote
4. Treasury
5. Staking
6. Lender Pool
7. Insurance Fund
8. Risk Management
9. Revenue Sharing
10. Token Utility
11. Governance
12. Audit & Security
13. Analytics

## AutoDeFi alignment

The UI follows the AutoDeFi / Voltaire Protocols rules established in the build:

- Approved dealer deals are funded in full to the dealer after approval and delivery confirmation.
- Borrowers repay through regional stable-value rails.
- ADF is used for staking, collateral, access, rewards, governance, protocol utility, and ecosystem incentives.
- ADF is not the default borrower repayment currency.
- Interest yield from repayments is distributed to users staked in the matching risk tier pool.
- Insurance reserves support claims, defaults, workouts, repossessions, and recovery operations.
- ZONYCS marketplace support is represented through dealer marketplace, recovery, liquidity, and collateral workflows.

## File structure

```text
dao-governance-frontend/
  index.html
  package.json
  README.md
  docs/
    FRONTEND_INTEGRATION.md
  src/
    app.js
    styles.css
  assets/
    svg/
      autodefi-mark.svg
      dashboard.svg
      proposals.svg
      vote.svg
      treasury.svg
      staking.svg
      lender-pool.svg
      insurance-fund.svg
      risk-management.svg
      revenue-sharing.svg
      token-utility.svg
      governance.svg
      audit-security.svg
      analytics.svg
      analytics-map.svg
```

## Install

```bash
cd dao-governance-frontend
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Backend integration

The current frontend is data-driven from `src/app.js`. Replace the static data arrays with API calls to the completed AutoDeFi backend.

Recommended API groups:

- `/api/dao/summary`
- `/api/dao/proposals`
- `/api/dao/votes`
- `/api/treasury/overview`
- `/api/staking/pools`
- `/api/lender-pool/overview`
- `/api/insurance-fund/claims`
- `/api/risk/overview`
- `/api/revenue-sharing/distributions`
- `/api/token/utility`
- `/api/security/audits`
- `/api/analytics/ecosystem`

## Notes

- No external UI framework is required.
- SVG charts are generated in the frontend.
- SVG illustrations are committed as real local files.
- The branch is ready for backend binding, wallet connection, contract calls, and deployment.
