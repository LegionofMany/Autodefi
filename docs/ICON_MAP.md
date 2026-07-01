# AutoDeFi Dealer Portal Icon Map

All Dealer Portal icons are currently uploaded as one production SVG sprite:

`public/assets/dealer/icons/dealer-icon-sprite.svg`

The React helper is `DealerIcon` inside `src/components/dealer/DealerPortal.tsx` and references icons by symbol ID:

```tsx
<svg><use href="/assets/dealer/icons/dealer-icon-sprite.svg#dashboard" /></svg>
```

## Sprite IDs currently available

| ID | Usage |
|---|---|
| `dashboard` | Sidebar dashboard, home/dashboard state |
| `inventory` | Inventory nav and inventory metric cards |
| `leads` | Leads nav, lead/customer group states |
| `deals` | Deals nav and deal status cards |
| `financing` | Financing nav and lender/funding cards |
| `customers` | Customers nav and customer metric cards |
| `referrals` | Referrals nav and referral/repeat buyer states |
| `auctions` | Auctions nav and auction cards |
| `reports` | Reports nav and report cards |
| `fi-products` | F&I Products nav and product cards |
| `marketing` | Marketing Tools nav and campaign cards |
| `settings` | Settings and configuration controls |
| `academy` | AutoDeFi Academy sidebar card |
| `support` | Support sidebar card |
| `menu` | Menu/collapse action |
| `chevron` | Dropdown indicators |
| `bell` | Notifications |
| `message` | Messages/chat |
| `search` | Search inputs |
| `plus` | Add/create buttons |
| `filter` | Filters button |
| `grid` | Grid view toggle |
| `list` | List view toggle |
| `eye` | View row action |
| `edit` | Edit row action |
| `more` | More options row action |
| `chart` | Analytics, performance, ROI |
| `tag` | Tags, products, reserved/sold states |
| `shield` | Verified title, AutoDeFi Protect, security/approval |
| `wallet` | Wallet, balance, funding, revenue |
| `calendar` | Date range, ending today, appointments |
| `alert` | Declined/warning/refund/claim states |
| `cart` | Total sales/reporting |
| `bag` | Gross profit/reporting |
| `box` | Product/package/bundle states |
| `click` | Marketing clicks/campaign actions |

## Next icon expansion pass

The current sprite locks the Dealer Portal UI without external dependencies. The next pass can add more exact symbols for:

- `vsc-product`
- `gap-product`
- `tire-wheel-product`
- `facebook`
- `instagram`
- `google-ads`
- `youtube`
- `whatsapp`
- `qr-code`
- `verified-title`
- `lender-match`
- `nft-vault`
- `risk-gauge`
- `loan-pool-liquidity`

## Rule

Do not use third-party icon CDNs for locked production pages. Add or update symbols inside the repository sprite, then reference the symbol ID from the front end.
