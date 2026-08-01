# Backend Contract

The frontend expects the completed AutoDeFi backend to expose JSON endpoints under:

```text
GET  /api/liquidation-marketplace/bootstrap
GET  /api/liquidation-marketplace/:pageKey
POST /api/liquidation-marketplace/actions/*
```

`pageKey` values:

```text
dashboard
live-auctions
upcoming-auctions
buy-now
my-bids
watchlist
won-auctions
inventory-nfts
settlements
auction-analytics
recovery-stats
market-trends
dealer-access
retail-access
partners
wallet
orders
profile
notifications
settings
```

## Bootstrap response

```json
{
  "member": { "name": "", "wallet": "", "role": "", "verified": true },
  "token": { "symbol": "ADF", "price": "$0.8724", "change": "+4.32%" },
  "notifications": 0,
  "walletConnected": false
}
```

## Page response

```json
{
  "title": "Live Auctions",
  "subtitle": "Real-time recovery auctions.",
  "metrics": [{ "label": "Active Live Auctions", "value": "48", "delta": "+12%", "tone": "purple" }],
  "tabs": [{ "label": "All", "count": 48, "active": true }],
  "filters": [{ "label": "All Types", "value": "type", "options": ["SUV", "Truck"] }],
  "cards": [{
    "id": "asset-id",
    "title": "2022 BMW X5 xDrive40i",
    "subtitle": "M Sport Package",
    "imageUrl": "https://...",
    "badges": ["Repo", "Tier 2", "SUV"],
    "stats": [{ "label": "Current Bid", "value": "$48,750" }],
    "primaryAction": { "label": "Place Bid", "endpoint": "/api/liquidation-marketplace/actions/place-bid", "method": "POST" }
  }],
  "charts": [{ "title": "Recovery Rate", "type": "line", "series": [{ "label": "Recovery", "points": [72, 76, 81, 87] }] }],
  "table": { "columns": ["Vehicle", "Status"], "rows": [{ "Vehicle": "2022 BMW X5", "Status": "Live" }] },
  "panels": [{ "title": "Auction Spotlight", "items": [{ "label": "Current Bid", "value": "$48,750" }] }],
  "emptyState": { "title": "No records", "message": "Nothing returned yet." }
}
```

All action buttons send their payload to the provided `endpoint` and then reload the active page.
