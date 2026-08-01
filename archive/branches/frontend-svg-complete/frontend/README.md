# AutoDeFi DAO Frontend

Production-ready React/Vite frontend for the AutoDeFi DAO portal under Voltaire Protocols.

## Included DAO tabs

- Dashboard
- Proposals
- Vote
- Treasury
- Staking Rewards
- Lender Pool
- Insurance Pool
- Risk Management
- Revenue Sharing
- Token Utility
- Governance
- Audit & Security
- Analytics

## AutoDeFi rules represented

- Approved vehicle deals fund dealers in full.
- Borrowers repay through regional stable-value rails.
- ADF is used for staking, collateral, rewards, access, utility, and governance.
- Interest yield is routed to users staked in matching risk-tier pools.
- Insurance reserves, recovery reserves, and DAO treasury reserves are visible.
- ZONYCS recovery auction allocation is included.
- HashScan-ready transaction links are included through environment configuration.

## Run locally

```bash
cd frontend
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Backend connection

Set `VITE_AUTODEFI_API_URL` in `.env` to point at the completed AutoDeFi backend. The frontend is structured so metrics, pools, proposals, and transaction logs can be wired to backend endpoints without changing the page layout.
