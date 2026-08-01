# Frontend Integration Notes

This document explains how to connect the AutoDeFi DAO governance frontend to the completed backend.

## Recommended runtime flow

1. Load wallet session and DAO member profile.
2. Fetch DAO summary metrics.
3. Fetch active proposals and proposal history.
4. Fetch treasury, staking, lender pool, insurance, risk, revenue, token, security, and analytics data.
5. Replace static arrays in `src/app.js` with async API responses.
6. Bind vote, delegate, stake, withdraw, contribute, claim, and proposal actions to backend routes or smart-contract calls.

## Suggested data adapters

Create a small `src/api.js` file when connecting the backend:

```js
const API_BASE = import.meta.env.VITE_API_BASE_URL;

export async function getJSON(path) {
  const res = await fetch(`${API_BASE}${path}`);
  if (!res.ok) throw new Error(`API error: ${res.status}`);
  return res.json();
}
```

Then replace static values with calls such as:

```js
const daoSummary = await getJSON('/api/dao/summary');
const proposals = await getJSON('/api/dao/proposals?status=active');
```

## Wallet and contract actions

The following UI actions are ready for connection:

- Delegate Votes
- Create Proposal
- Vote Now
- Confirm Vote
- Transfer Funds
- Swap / Convert
- Stake Assets
- Stake ADF
- Unstake
- Claim Rewards
- Deposit to Lender Pool
- Withdraw Liquidity
- Contribute to Insurance Fund
- View Audit Reports
- Export Analytics Data

## Environment variables

```bash
VITE_API_BASE_URL=https://your-autodefi-api.example.com
VITE_HEDERA_NETWORK=mainnet
VITE_ADF_TOKEN_ID=0.0.xxxxxx
VITE_TREASURY_ACCOUNT=0.0.xxxxxx
VITE_ZONYCS_URL=https://zonycs.com
```

## Deployment

This frontend can be deployed as a standalone Vite app or integrated into the existing AutoDeFi monorepo.

Recommended deployment commands:

```bash
npm install
npm run build
```

The production output is created in `dist/`.

## Completion status

The front-end phase includes all DAO navigation tabs and local SVG graphics. It is ready to be merged, reviewed, connected to backend routes, and deployed.
