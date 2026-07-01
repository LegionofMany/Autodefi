# AutoDeFi Dealer Portal Asset Audit

This audit records the assets uploaded during the Dealer Portal lock pass and the assets still queued for later replacement or expansion.

## Uploaded in this pass

| Asset | Path | Type | Status | Used by |
|---|---|---:|---|---|
| AutoDeFi primary logo | `public/assets/dealer/logos/autodefi-logo-primary.svg` | SVG | Uploaded | Dealer sidebar brand |
| AutoDeFi compact mark | `public/assets/dealer/logos/autodefi-mark.svg` | SVG | Uploaded | App icon / compact mark |
| Elite Motors badge | `public/assets/dealer/logos/elite-motors-badge.svg` | SVG | Uploaded | Dealer profile / topbar |
| Dealer icon sprite | `public/assets/dealer/icons/dealer-icon-sprite.svg` | SVG sprite | Uploaded | All nav, actions, table icons |
| Neon vehicle graphic | `public/assets/dealer/graphics/dealer-neon-vehicle.svg` | SVG | Uploaded | AutoDeFi Protect banner |

## Source screenshot pages locked

| # | Page | Asset status |
|---|---|---|
| 01 | Dashboard | Logo, badge, icons, protect graphic uploaded. Vehicle/banner source graphic recreated as SVG. |
| 02 | Inventory | Icons represented in sprite. Vehicle thumbnails queued for SVG/PNG replacement. |
| 03 | Leads | Icons represented in sprite. Lead source/social icons queued for expanded sprite detail. |
| 04 | Deals | Icons represented in sprite. Lender badges queued for individual SVGs. |
| 05 | Financing | Icons represented in sprite. Lender/provider badges queued for individual SVGs. |
| 06 | Customers | Icons represented in sprite. Customer avatars queued for generated placeholder set. |
| 07 | Referrals | Icons represented in sprite. Social share icons queued for expanded sprite detail. |
| 08 | Auctions | Icons represented in sprite. Auction vehicle thumbnails queued for SVG/PNG replacement. |
| 09 | Reports | Icons represented in sprite. Report icons represented in sprite. |
| 10 | F&I Products | Icons represented in sprite. Product category icons represented in sprite. |
| 11 | Marketing Tools | Icons represented in sprite. Campaign thumbnails queued for SVG/PNG replacement. |

## Queued assets for the next upload pass

### Vehicle thumbnails

- `public/assets/dealer/vehicles/vehicle-mercedes-glc-300.svg`
- `public/assets/dealer/vehicles/vehicle-tesla-model-3.svg`
- `public/assets/dealer/vehicles/vehicle-range-rover-sport.svg`
- `public/assets/dealer/vehicles/vehicle-bmw-x5.svg`
- `public/assets/dealer/vehicles/vehicle-ford-f150.svg`
- `public/assets/dealer/vehicles/vehicle-audi-q7.svg`
- `public/assets/dealer/vehicles/vehicle-jeep-wrangler.svg`
- `public/assets/dealer/vehicles/vehicle-lexus-rx350.svg`

### Dealer/lender/provider badges

- `public/assets/dealer/lenders/autodefi-pool.svg`
- `public/assets/dealer/lenders/openroad-financial.svg`
- `public/assets/dealer/lenders/prime-capital.svg`
- `public/assets/dealer/lenders/northbridge-bank.svg`
- `public/assets/dealer/lenders/first-community.svg`

### Campaign thumbnails

- `public/assets/dealer/campaigns/campaign-truck-season-sales-event.svg`
- `public/assets/dealer/campaigns/campaign-luxury-suv-showcase.svg`
- `public/assets/dealer/campaigns/campaign-financing-made-easy.svg`
- `public/assets/dealer/campaigns/campaign-email-newsletter-may.svg`
- `public/assets/dealer/campaigns/campaign-referral-rewards-program.svg`

### Avatar placeholders

- `public/assets/dealer/avatars/customer-*`
- `public/assets/dealer/avatars/referral-*`

## Lock rule

No final Dealer Portal page should depend on untracked screenshots or external image URLs. Every logo, icon, graphic, thumbnail, avatar, and badge must be represented as a repository file, a generated SVG, or a documented placeholder in this audit.
