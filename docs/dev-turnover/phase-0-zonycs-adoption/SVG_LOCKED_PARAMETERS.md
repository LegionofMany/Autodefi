# SVG Locked Parameters — AutoDeFi / ZONYCS / ADF / Voltaire

This document adds the locked SVG and visual asset parameters to the Phase 0 dev turnover branch.

These parameters should guide all frontend implementation and asset exports. Do not reinterpret the brand style without founder approval.

---

# 1. Master visual direction

## Locked style

- Dark premium fintech / Web3 dashboard.
- Deep black and carbon/navy backgrounds.
- Neon cyber accents: cyan, electric blue, lime/success green, violet/purple, and selective magenta.
- Glass-card UI with rounded corners, soft glow, thin borders, and futuristic protocol styling.
- Matrix / data-stream energy is acceptable as a background accent, not as clutter.
- Clean, high-contrast UI suitable for dealer software, finance dashboards, and token/pool pages.

## Primary ecosystem brands in this turnover

- **ZONYCS** — dealership marketplace adoption layer.
- **AutoDeFi** — finance/dealer/capital ecosystem.
- **ADF** — token/pool utility layer.
- **Voltaire Protocols** — umbrella protocol brand.
- **Reqrium** — verification, trust intelligence, wallet/address/dealer safety support layer where used.

---

# 2. Locked color tokens

Use CSS variables or design tokens so all SVGs and UI elements share the same palette.

```css
:root {
  --adf-bg-black: #000010;
  --adf-bg-carbon: #05070D;
  --adf-glass-navy: #020A1E;
  --adf-panel-navy: #07111F;

  --adf-neon-cyan: #00E5FF;
  --adf-electric-blue: #007BFF;
  --adf-lime-green: #00F2A6;
  --adf-purple: #7B2CFF;
  --adf-violet: #9B5CFF;
  --adf-magenta: #FF3DF2;

  --adf-warning-gold: #FFD66B;
  --adf-danger-red: #FF4D6D;
  --adf-orange: #FF9A3D;

  --adf-text-white: #FFFFFF;
  --adf-text-cool: #C8D2E0;
  --adf-text-muted: #8A96A8;

  --adf-border-soft: rgba(0, 229, 255, 0.22);
  --adf-glow-cyan: rgba(0, 229, 255, 0.45);
  --adf-glow-green: rgba(0, 242, 166, 0.38);
  --adf-glow-purple: rgba(123, 44, 255, 0.42);
}
```

## Usage rules

- Cyan/blue = primary fintech/action/navigation energy.
- Green = success, verified, active, approved, reward positive state.
- Purple/violet = protocol, DeFi, pool, governance, advanced modules.
- Gold/orange = warning, pending, premium/founder status, attention.
- Red = risk, overdue, blocked, failed, critical alert.
- Avoid flat light themes unless explicitly requested later.

---

# 3. SVG file standards

All brand, icon, badge, chart, and dashboard illustrations should be exported as standalone SVGs where practical.

## Required SVG rules

- Every SVG must have a valid `viewBox`.
- No embedded raster/base64 payloads inside SVG files.
- No external image URLs inside SVGs.
- No external icon-library dependency for locked assets.
- No missing gradient/filter IDs.
- Repeated inline SVGs in React must use unique IDs, preferably via `useId()`, to prevent gradient/filter collisions.
- Keep shapes vector-based.
- Keep backgrounds transparent unless the asset is intentionally a panel/card.
- Use semantic file names.
- Do not stretch, crop, skew, or recolor locked marks without founder approval.

## Recommended React handling

- Store standalone SVGs in `public/assets/...` when used as public static assets.
- Store componentized SVG icons in `src/components/icons/...` when color/state must be controlled by props.
- For repeated icons using gradients/filters, inject unique IDs using React `useId()`.
- Use `currentColor` for simple monochrome icons.
- Use locked gradients for logo marks and premium badges.

## Accessibility

- Decorative SVGs: `aria-hidden="true"`.
- Meaningful SVGs: include a `<title>` or accessible label.
- Do not rely on color alone for risk/approval states.

---

# 4. Folder structure for locked assets

Recommended structure for this repo:

```txt
public/
  assets/
    autodefi/
      logos/
      badges/
      icons/
      charts/
      backgrounds/
    zonycs/
      logos/
      badges/
      icons/
      dealer-portal/
    adf/
      token/
      badges/
      pool-icons/
    voltaire/
      logos/
      protocol-icons/
    reqrium/
      logos/
      trust-icons/
      scanner-icons/

src/
  components/
    icons/
      autodefi/
      zonycs/
      adf/
      reqrium/
    brand/
```

---

# 5. AutoDeFi locked parameters

## Visual identity

- Dark cyber-fintech dashboard.
- Auto/road + finance/protocol energy.
- Neon blue/green primary accents.
- Purple is used for DeFi/pool/governance depth.
- Hedera/HBAR direction is allowed in copy and dashboard context.
- ADF token direction should stay connected to AutoDeFi, not become a disconnected coin graphic.

## Required asset groups

- `autodefi-logo-primary.svg`
- `autodefi-logo-horizontal.svg`
- `autodefi-logo-mark.svg`
- `autodefi-adf-badge.svg`
- `autodefi-dealer-portal-icon.svg`
- `autodefi-borrower-portal-icon.svg`
- `autodefi-capital-yield-icon.svg`
- `autodefi-risk-security-icon.svg`
- `autodefi-dao-governance-icon.svg`
- `autodefi-insurance-recovery-icon.svg`
- `autodefi-zonycs-marketplace-icon.svg`

## Dashboard SVGs

For charts and dashboard graphics:

- Prefer full vector SVG line, donut, gauge, radar, and bar charts.
- Use neon outlines and transparent grid lines.
- Keep chart labeling readable on black/navy backgrounds.
- Avoid raster screenshots for dashboard widgets.

---

# 6. ZONYCS locked parameters

## Role in Phase 0 / Phase 1

ZONYCS is the first adoption layer.

The ZONYCS visual system should feel like dealership marketplace software with Web3-grade verification and future AutoDeFi/ADF integration.

## Visual identity

- Dealer marketplace + vehicle inventory + auction/listing platform.
- Dark premium software UI.
- Strong but clean automotive marketplace presentation.
- Neon cyan/blue for listings and actions.
- Green for active/verified dealerships and live listings.
- Purple only for protocol/ADF/DeFi future modules.

## Required asset groups

- `zonycs-logo-primary.svg`
- `zonycs-logo-horizontal.svg`
- `zonycs-logo-mark.svg`
- `zonycs-dealer-badge.svg`
- `zonycs-verified-dealer-badge.svg`
- `zonycs-regional-rep-icon.svg`
- `zonycs-inventory-icon.svg`
- `zonycs-auction-icon.svg`
- `zonycs-leads-icon.svg`
- `zonycs-sales-pipeline-icon.svg`

## Dealer software UI rules

- Dealer screens must be clearer than the ecosystem mural.
- Do not overload the dealer with token/pool terminology in Phase 1.
- Dealer adoption screens should prioritize inventory, leads, listings, rep support, and sales activity.

---

# 7. ADF locked parameters

## Role

ADF is the AutoDeFi token/pool utility layer and should be introduced after ZONYCS adoption groundwork.

## Visual identity

- ADF badges and token graphics should feel premium, protocol-grade, and financial.
- Use blue/green for utility and rewards.
- Use purple/violet for pools, staking, governance, and DeFi.
- Avoid any visual language that implies guaranteed profit.

## Required asset groups

- `adf-token-badge.svg`
- `adf-token-mark.svg`
- `adf-pool-icon.svg`
- `adf-staking-icon.svg`
- `adf-rewards-icon.svg`
- `adf-governance-icon.svg`
- `adf-collateral-icon.svg`
- `adf-risk-tier-icon.svg`

## Copy/visual guardrails

- ADF should be treated as utility, access, staking/collateral, governance, and rewards.
- Borrower repayments should not be represented as default ADF payments unless founder explicitly changes this later.
- Avoid guaranteed-yield iconography or wording.

---

# 8. Voltaire Protocols locked parameters

## Role

Voltaire Protocols is the umbrella brand for the larger ecosystem.

## Visual identity

- Protocol layer to freedom / sovereignty.
- Dark cyber-sovereign branding.
- Neon blue/green/purple base with optional gold accent for premium protocol status.
- Matrix/data-stream effects are acceptable on hero sections and ecosystem maps.

## Required asset groups

- `voltaire-logo-primary.svg`
- `voltaire-logo-horizontal.svg`
- `voltaire-v-mark.svg`
- `voltaire-protocol-badge.svg`
- `voltaire-ecosystem-icon.svg`

---

# 9. Reqrium locked parameters

Reqrium should be used wherever the system references verification, trust intelligence, wallet/address safety, merchant/dealer checks, or threat intelligence.

## Locked brand facts

- Brand wordmark: `REQRIUM`
- Product text: `Reqrium`
- Tagline: `Real-Time Trust Intelligence`
- Primary logo direction: **Eye + R**
- Mood: dark premium Web3 trust/intelligence.
- Palette: deep black/navy, neon cyan/blue/violet/magenta gradient, success green, white/cool-gray text.

## Approved asset names

- `reqrium-logo-primary.svg`
- `reqrium-logo-mark.svg`
- `reqrium-wordmark.svg`
- `reqrium-logo-monochrome-light.svg`
- `reqrium-logo-monochrome-dark.svg`
- `reqrium-logo-icon-app.svg`
- `reqrium-hero-eye-illustration.svg`
- `reqrium-eye-network.svg`

## Locked replacement rule

- Do not use old BlockPages / BlockPages411 / BP / 411 branding in new screens.
- Replace those references with Reqrium unless a historical archive reference is explicitly needed.

## Known approved icon-pack direction

A previously approved Reqrium icon set was split into individual SVG files, organized by:

- navigation
- core-features
- trust-status
- intelligence-monitoring
- cause-categories
- utilities

For AutoDeFi/ZONYCS, reuse Reqrium styling only for verification and trust/safety modules, not for every dealership marketplace icon.

---

# 10. Locked icon behavior rules

## Status colors

- Verified / approved / active: green glow.
- Pending / review / attention: gold or orange glow.
- Risk / blocked / failed / overdue: red glow.
- Protocol / DeFi / governance: purple glow.
- Main action / navigation / marketplace: cyan or blue glow.

## Icon style

- Rounded futuristic line icons.
- Stroke weight should be consistent within each icon family.
- Use subtle inner glow and outer glow sparingly.
- Keep icons legible at 24px, 32px, 48px, and 64px.
- Badge versions may include more detail, but app/nav icons must remain simple.

## Do not

- Do not mix cartoon icons with this product UI.
- Do not use generic flat-color icon packs.
- Do not use mismatched third-party icons beside locked SVGs.
- Do not recolor verified/trust icons into red/purple unless the status requires it.

---

# 11. Locked badge behavior rules

Badges are important for:

- verified dealer
- regional representative
- ADF token/pool
- Reqrium trust check
- risk tier
- governance/protocol
- premium/founder/admin status

## Badge rules

- Use shield, hexagon, circular protocol, or rounded-square badge forms.
- Keep neon edge lighting.
- Use glass or metallic depth where appropriate.
- Text inside badges must remain readable at intended size.
- Create standalone badge SVGs for repeated use.

---

# 12. Required SVG QA checklist

Before marking any SVG asset complete:

- [ ] File has a valid `viewBox`.
- [ ] File renders on dark background.
- [ ] File renders on transparent background.
- [ ] No raster/base64 payloads embedded.
- [ ] No broken gradients or duplicate IDs.
- [ ] No external images or external font dependencies.
- [ ] Asset is readable at required UI sizes.
- [ ] Colors use locked tokens or approved gradient values.
- [ ] File name matches asset manifest.
- [ ] Brand name and tagline spelling are correct.
- [ ] Old BlockPages/BP/411 branding is not used in new screens.
- [ ] Accessibility label/title decision has been made.

---

# 13. Phase 1 implementation note

For the first developer pass, prioritize SVG work for:

1. ZONYCS dealer onboarding and marketplace UI.
2. Regional representative dashboard icons.
3. Admin Command Center icons.
4. Dealer/listing/lead status icons.
5. AutoDeFi/ADF badges as future-phase placeholders.
6. Reqrium verification/trust badges only where verification is shown.

Do not spend Phase 1 building every future DeFi SVG icon unless it is needed for a placeholder or roadmap section.
