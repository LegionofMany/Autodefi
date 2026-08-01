# AutoDeFi Dealer Portal Lock

Branch: `dealer-portal-lock`

This document locks the 11 uploaded AutoDeFi Dealer Portal screens into the front-end implementation pass. The implementation uses a reusable Dealer Portal shell, shared cards, reusable tables, reusable rail cards, SVG logo assets, an SVG icon sprite, and mock data that can later be replaced with API data.

## Locked visual system

- Dark fintech base: near-black backgrounds with blue/green/purple/orange neon accents.
- Primary action: electric blue.
- Positive/funded/active state: neon green.
- Pending/reserved/review state: orange.
- Web3/ADF/governance accents: purple/cyan.
- All 11 pages reuse the same dealer sidebar, topbar, metric-card, table, rail-card, filter, badge, and action styles.

## Locked pages

| # | Page | Route | Purpose |
|---|------|-------|---------|
| 01 | Dealer Dashboard | `/dealer/dashboard` | Dealer operating dashboard, wallet, pool transparency, pipeline, recent deals, AutoDeFi Protect banner. |
| 02 | Inventory | `/dealer/inventory` | Vehicle inventory, status filters, vehicle value, availability, top makes, inventory actions. |
| 03 | Leads | `/dealer/leads` | Lead pipeline, source performance, salesperson ownership, conversion tracking. |
| 04 | Deals | `/dealer/deals` | Deal lifecycle from new to funded/closed/declined with lender tracking. |
| 05 | Financing | `/dealer/financing` | Applications, lender matching, credit tiers, best approval option, funding progress. |
| 06 | Customers | `/dealer/customers` | Customer records, credit tiers, total financed/value, segmentation, customer actions. |
| 07 | Referrals | `/dealer/referrals` | Dealer referral code/link, share tools, referral table, payout tracking. |
| 08 | Auctions | `/dealer/auctions` | Live vehicle auctions, verified title state, bid activity, watchlist actions. |
| 09 | Reports | `/dealer/reports` | Sales, inventory, deals, financing, customers, leads, and performance reports. |
| 10 | F&I Products | `/dealer/fi-products` | VSC, GAP, appearance, tire/wheel, key/lock, maintenance, profit, penetration, claims. |
| 11 | Marketing Tools | `/dealer/marketing-tools` | Campaigns, ad performance, channel analytics, marketing tools, audience insights. |

## Implementation files

- `src/components/dealer/DealerPortal.tsx`
- `src/components/dealer/dealer.css`
- `src/data/dealerPortalData.ts`
- `public/assets/dealer/logos/autodefi-logo-primary.svg`
- `public/assets/dealer/logos/autodefi-mark.svg`
- `public/assets/dealer/logos/elite-motors-badge.svg`
- `public/assets/dealer/icons/dealer-icon-sprite.svg`
- `public/assets/dealer/graphics/dealer-neon-vehicle.svg`

## Locked data model groups

- Dealer profile and verified dealer status.
- Dealer nav items and badges.
- Page metrics and KPI cards.
- Dealer pipelines.
- Dealer tables and filters.
- Right-rail insight cards.
- Status badges and credit-tier badges.
- Asset paths and SVG references.

## GitHub notes

This pass intentionally starts with a reusable, data-driven front-end implementation. The next pass can split the large data-driven component into dedicated files, for example:

```txt
src/components/dealer/inventory/*
src/components/dealer/leads/*
src/components/dealer/deals/*
src/components/dealer/financing/*
src/components/dealer/customers/*
src/components/dealer/referrals/*
src/components/dealer/auctions/*
src/components/dealer/reports/*
src/components/dealer/fi-products/*
src/components/dealer/marketing-tools/*
```

## Build intention

The current default app view has been routed to the locked Dealer Portal through `src/App.tsx`. Existing DAO/lender components remain in the repository and can be restored behind navigation later.
