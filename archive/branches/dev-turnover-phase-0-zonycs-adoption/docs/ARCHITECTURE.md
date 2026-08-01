# AutoDeFi Architecture

AutoDeFi is a React, TypeScript, and Vite front end for the AutoDeFi / Voltaire Protocols auto-loan liquidity system.

## Front-end structure

- `src/App.tsx` controls the current active view and routes into the shell.
- `src/components/Shell.tsx` provides the shared sidebar, wallet header, top metrics, content frame, and right rail.
- `src/pages/LenderPool.tsx` contains the six lender pool dashboard sections.
- `src/pages/ModulePage.tsx` renders the DAO and portal module screens from seed data.
- `src/data/autodefiData.ts` stores locked seed data, nav items, metrics, risk tiers, market data, proposals, and module cards.
- `src/data/svgAssets.ts` maps module IDs to tracked SVG assets.
- `src/services/api.ts` provides the backend fallback service helper.

## Product architecture

The interface supports:

- DAO governance and treasury oversight.
- ADF staking and token utility.
- Lender pools and capital-yield workflows.
- Borrower, dealer, insurance/recovery, and admin command portals.
- AI underwriting, risk, KYC, bank analysis, vehicle valuation, fraud, conditional approval, funding readiness, analytics, and settings SVG locks.

## Visual architecture

The design uses a dark cyber-finance terminal style, left command sidebar, glass cards, neon blue/green/purple highlights, SVG-only product graphics, and an institutional dashboard layout.
