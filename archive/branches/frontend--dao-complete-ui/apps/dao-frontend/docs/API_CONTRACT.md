# AutoDeFi DAO Frontend API Contract

The DAO front-end is designed to run with static fallback data until the completed backend is connected.

## Base URL

Set the backend base URL in one of two ways:

```js
window.AUTODEFI_API_BASE_URL = "https://your-api-domain.com";
```

or:

```js
localStorage.setItem("AUTODEFI_API_BASE_URL", "https://your-api-domain.com");
```

## Page data

```txt
GET /api/dao/pages/:slug
```

Expected slugs:

```txt
dashboard
proposals
voting
treasury
staking
lender-pool
risk-management
revenue-sharing
token-utility
governance
audit-security
analytics
tokenomics
delegation
members
forum
announcements
reports-analytics
resources
settings
```

## Suggested response shape

```json
{
  "title": "Treasury",
  "sub": "Manage DAO treasury, assets, and financial resources.",
  "metrics": [
    ["Total Treasury Balance", "$12.48M", "+5.21%", "green"]
  ],
  "tabs": ["Overview", "Assets", "Reserves"],
  "sections": ["treasuryChart", "allocation", "assets"],
  "side": ["treasuryActions", "disbursements"]
}
```

The current single-file app includes a complete local page registry. The backend can replace full pages gradually without breaking navigation.

## Production integration notes

- Keep ADF separated from borrower repayment currency.
- Keep borrower repayment data in stable-value rails.
- Keep Hedera account IDs, transaction IDs, token IDs, Mirror Node sync, and consensus timestamps in API payloads.
- Keep role-based permissions enforced server-side even when the UI hides restricted modules.
