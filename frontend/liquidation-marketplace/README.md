# AutoDeFi DAO Liquidation Auction Marketplace Frontend

Production-ready React/Vite frontend for the AutoDeFi DAO liquidation marketplace. This folder is intentionally isolated under `frontend/liquidation-marketplace` so the completed backend in the main repository is not overwritten.

## Completed screens

Dashboard, Live Auctions, Upcoming Auctions, Buy Now, My Bids, Watchlist, Won Auctions, Inventory NFTs, Settlements, Auction Analytics, Recovery Stats, Market Trends, Dealer Access, Retail Access, Partners, Wallet, Orders, Profile, Notifications, and Settings.

## No mock data

The UI does not ship vehicle, wallet, settlement, or auction mock records. It requests live data from the completed backend and renders loading, empty, and error states when data is not returned.

## Run locally

```bash
cd frontend/liquidation-marketplace
cp .env.example .env
npm install
npm run dev
```

Set `VITE_API_BASE_URL` to the backend host. The frontend reads marketplace data from `VITE_MARKETPLACE_PATH`, defaulting to `/api/liquidation-marketplace`.

## Build

```bash
npm run build
npm run preview
```

## Expected backend shape

See `docs/BACKEND_CONTRACT.md`.
