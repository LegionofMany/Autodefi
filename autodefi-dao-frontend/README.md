# AutoDeFi DAO Frontend

Production-ready React/Vite frontend for the AutoDeFi DAO governance proposal page. This is real frontend code, not a screenshot mockup. The approved design system from the conversation has been converted into reusable components, data-driven proposal states, and full SVG graphics/assets.

## Included

- AutoDeFi DAO `Proposals` page
- Completed left navigation shell
- Proposal table with selected, active, pending, passed, rejected, and executed states
- Right-side proposal detail panel
- Current results donut chart built in SVG
- Cast vote panel
- Create proposal modal
- Search and status filters
- Responsive layout
- Full SVG asset library for logo, token, DAO avatar, sidebar icons, proposal icons, and UI actions
- API service layer ready to connect to the completed backend

## Project Structure

```txt
autodefi-dao-frontend/
├── public/
├── src/
│   ├── assets/
│   │   ├── icons/
│   │   ├── proposals/
│   │   ├── dao-avatar.svg
│   │   ├── logo-autodefi.svg
│   │   └── token-adf.svg
│   ├── components/
│   │   ├── Badge.tsx
│   │   ├── CreateProposalModal.tsx
│   │   ├── CurrentResults.tsx
│   │   ├── Icon.tsx
│   │   ├── ProposalDetails.tsx
│   │   ├── ProposalTable.tsx
│   │   ├── ProposalToolbar.tsx
│   │   ├── Sidebar.tsx
│   │   ├── Topbar.tsx
│   │   └── VoteCard.tsx
│   ├── data/
│   │   └── proposals.ts
│   ├── pages/
│   │   └── ProposalsPage.tsx
│   ├── services/
│   │   └── governanceApi.ts
│   ├── types/
│   │   └── governance.ts
│   ├── utils/
│   │   └── format.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── styles.css
├── .env.example
├── index.html
├── package.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

## Run Locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Backend Connection

Copy `.env.example` to `.env` and set:

```bash
VITE_API_BASE_URL=https://your-autodefi-backend.example
```

The frontend expects these backend endpoints:

```txt
GET  /dao/metrics
GET  /dao/proposals
POST /dao/proposals/:proposalId/vote
```

The expected proposal shape is defined in:

```txt
src/types/governance.ts
```

Until `VITE_API_BASE_URL` is configured, the page renders the approved AutoDeFi DAO data from `src/data/proposals.ts` so the frontend design can be reviewed immediately.

## AutoDeFi Proposal Coverage

The current completed proposal rows are:

1. Increase Lending Pool Allocation
2. Protocol Fee Structure Update
3. Insurance Fund Increase
4. New Collateral Types
5. Marketing Budget Q2
6. Reduce Staking Rewards
7. Add ZONYCS Recovery Auction Allocation

## Design Rules Preserved

- Dark Web3 fintech interface
- Neon purple selected proposal state
- Green active/pass/vote states
- Red rejected/against states
- Orange pending/risk states
- Blue outline detail actions
- Full right-side proposal detail context
- SVG-only UI graphics
- No raster UI mockups required

## Push To GitHub

```bash
git init
git add .
git commit -m "Add AutoDeFi DAO governance frontend"
git branch -M main
git remote add origin <YOUR_GITHUB_REPO_URL>
git push -u origin main
```
