# AutoDeFi Dealer Portal Asset Audit

This audit records the production assets uploaded for the locked 11-page AutoDeFi Dealer Portal.

## Uploaded core assets

| Asset | Path | Type | Status | Used by |
|---|---|---:|---|---|
| AutoDeFi primary logo | `public/assets/dealer/logos/autodefi-logo-primary.svg` | SVG | Uploaded | Dealer sidebar brand |
| AutoDeFi compact mark | `public/assets/dealer/logos/autodefi-mark.svg` | SVG | Uploaded | App icon / compact mark |
| Elite Motors badge | `public/assets/dealer/logos/elite-motors-badge.svg` | SVG | Uploaded | Dealer profile / topbar |
| Dealer icon sprite | `public/assets/dealer/icons/dealer-icon-sprite.svg` | SVG sprite | Uploaded | Nav, metrics, actions, tables |
| Social/share icon sprite | `public/assets/dealer/icons/social-icon-sprite.svg` | SVG sprite | Uploaded | Referral and marketing share/channel icons |
| Avatar placeholder sprite | `public/assets/dealer/avatars/avatar-placeholders.svg` | SVG sprite | Uploaded | Customer and referral avatar cells |
| Neon vehicle graphic | `public/assets/dealer/graphics/dealer-neon-vehicle.svg` | SVG | Uploaded | AutoDeFi Protect banner |

## Uploaded vehicle assets

| Asset | Path | Status |
|---|---|---|
| Mercedes-Benz GLC 300 | `public/assets/dealer/vehicles/vehicle-mercedes-glc-300.svg` | Uploaded |
| Tesla Model 3 | `public/assets/dealer/vehicles/vehicle-tesla-model-3.svg` | Uploaded |
| Range Rover Sport | `public/assets/dealer/vehicles/vehicle-range-rover-sport.svg` | Uploaded |
| BMW X5 | `public/assets/dealer/vehicles/vehicle-bmw-x5.svg` | Uploaded |
| Ford F-150 | `public/assets/dealer/vehicles/vehicle-ford-f150.svg` | Uploaded |
| Audi Q7 | `public/assets/dealer/vehicles/vehicle-audi-q7.svg` | Uploaded |
| Jeep Wrangler | `public/assets/dealer/vehicles/vehicle-jeep-wrangler.svg` | Uploaded |
| Lexus RX 350 | `public/assets/dealer/vehicles/vehicle-lexus-rx350.svg` | Uploaded |
| Ram 1500 | `public/assets/dealer/vehicles/vehicle-ram-1500.svg` | Uploaded |
| Corvette Stingray | `public/assets/dealer/vehicles/vehicle-corvette-stingray.svg` | Uploaded |

## Uploaded lender/provider badges

| Asset | Path | Status |
|---|---|---|
| AutoDeFi Pool | `public/assets/dealer/lenders/autodefi-pool.svg` | Uploaded |
| OpenRoad Financial | `public/assets/dealer/lenders/openroad-financial.svg` | Uploaded |
| Prime Capital | `public/assets/dealer/lenders/prime-capital.svg` | Uploaded |
| NorthBridge Bank | `public/assets/dealer/lenders/northbridge-bank.svg` | Uploaded |
| First Community | `public/assets/dealer/lenders/first-community.svg` | Uploaded |

## Uploaded campaign thumbnails

| Asset | Path | Status |
|---|---|---|
| Truck Season Sales Event | `public/assets/dealer/campaigns/campaign-truck-season-sales-event.svg` | Uploaded |
| Luxury SUV Showcase | `public/assets/dealer/campaigns/campaign-luxury-suv-showcase.svg` | Uploaded |
| Financing Made Easy | `public/assets/dealer/campaigns/campaign-financing-made-easy.svg` | Uploaded |
| Email Newsletter May | `public/assets/dealer/campaigns/campaign-email-newsletter-may.svg` | Uploaded |
| Referral Rewards Program | `public/assets/dealer/campaigns/campaign-referral-rewards-program.svg` | Uploaded |

## Source screenshot pages locked

| # | Page | Asset status |
|---|---|---|
| 01 | Dashboard | Logo, badge, icon sprite, wallet/rail icons, and protect vehicle graphic uploaded. |
| 02 | Inventory | Inventory metric icons and all visible vehicle thumbnails uploaded or represented in sprite. |
| 03 | Leads | Lead icons represented in sprite; source/channel assets represented through social sprite. |
| 04 | Deals | Deal icons represented in sprite; lender badges uploaded and wired into deal rows. |
| 05 | Financing | Financing icons represented in sprite; lender badges uploaded and wired into financing rows. |
| 06 | Customers | Customer icons represented in sprite; avatar placeholder sprite uploaded and wired into rows. |
| 07 | Referrals | Referral icons represented in sprite; avatar and share-icon sprites uploaded and wired into rows/share cards. |
| 08 | Auctions | Auction icons represented in sprite; auction vehicle thumbnails uploaded and wired into rows. |
| 09 | Reports | Report icons represented in sprite; reporting visuals remain data-driven SVG/CSS charts. |
| 10 | F&I Products | F&I category/action icons represented in sprite; product table is fully data-driven. |
| 11 | Marketing Tools | Marketing icons represented in sprite; campaign thumbnails uploaded and wired into campaign rows. |

## Remaining polish queue

These are optional polish items, not blockers for the Dealer Portal lock:

- Replace generated placeholder avatars with final approved portrait artwork, if desired.
- Add more exact per-product icons for VSC, GAP, tire/wheel, key/lock, maintenance, and claims.
- Add exact social brand SVGs as standalone files in addition to the current sprite, if a design export requires individual files.
- Split the current data-driven Dealer Portal into individual per-page component folders once the UI is approved in GitHub.

## Lock rule

No final Dealer Portal page should depend on untracked screenshots or external image URLs. Every logo, icon, graphic, thumbnail, avatar, badge, and campaign asset used by the current Dealer Portal implementation is represented as a repository file, generated SVG, or documented sprite symbol.
