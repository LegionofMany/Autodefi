# AutoDeFi AI Underwriting SVG Backward / Forward Audit

This audit records how the new AI Underwriting & Risk Command Suite aligns with the existing AutoDeFi repository and how future implementation should be checked.

## Backward Audit

### Repository baseline confirmed

- Repository: `LegionofMany/Autodefi`
- Default branch: `main`
- Project type: React + TypeScript + Vite front end
- Existing design direction: dark fintech UI with neon blue/green/purple accents
- Existing asset direction: SVG-only product graphics

### Existing visual rules preserved

The new suite preserves the existing V1 visual system:

- Dark cyber-finance terminal
- Left command sidebar
- Glass cards
- Neon blue, green, and purple highlights
- AI risk terminal direction
- Institutional portal consistency

### Existing product rules preserved

The new suite does not replace the earlier AutoDeFi V1 dashboards. It adds a dedicated underwriting/risk command suite for:

- Main Dashboard
- AI Underwriter
- Risk Modules
- Identity & KYC
- Income Verification
- Bank Analysis
- Vehicle Valuation
- Fraud Signals
- Conditional Approvals
- Funding Readiness
- Analytics
- Settings

### Existing finance rules preserved

The suite remains consistent with the locked AutoDeFi rules:

- ADF is used for staking, collateral, access, rewards, and governance.
- Borrower repayment should use regional stable-value rails.
- Approved dealer deals are funded in full.
- Interest yield is distributed to stakers in matching risk-tier pools.
- Tier 4 remains last-chance/off-platform dealer routing.

## Forward Audit

Future code must pass these checks before being considered complete.

### Asset checks

- Each locked dashboard tab has an SVG file in `public/assets/svg/ai-underwriting-suite/`.
- Each SVG uses viewBox `0 0 1792 1024`.
- Each SVG keeps the shared sidebar/nav shell.
- Each SVG uses active navigation correctly for its tab.
- SVGs remain editable text/vector files, not embedded raster screenshots.

### Implementation checks

- React components should reuse the locked shell and component naming.
- New routes/pages should not break the current V1 lender pool, DAO, borrower, dealer, capital-yield, insurance/recovery, or admin command screens.
- Dashboard data can be seed data until backend endpoints are connected.
- Tables, charts, KPIs, and status pills must keep the same color semantics.
- All compliance footer copy should remain visible on regulated workflow screens.

### Design consistency checks

- Do not change the navigation order without owner approval.
- Do not remove AutoDeFi DAO branding.
- Do not replace the neon fintech theme with a flat/light theme.
- Do not use BlockPages/Reqrium branding inside AutoDeFi unless the screen specifically references identity verification integration.
- Do not introduce screenshots as final UI assets.

### Build/check commands

Recommended local checks after pulling these changes:

```bash
npm install
npm run build
npm run audit:v1-docs
npm run audit:ai-underwriting-svg-lock
```

## Current Locked File Count

Expected locked SVG tab files: 12

Expected support files:

- `docs/AI_UNDERWRITING_SVG_LOCK.md`
- `docs/AI_UNDERWRITING_BACKWARD_FORWARD_AUDIT.md`
- `public/assets/svg/ai-underwriting-suite/README.md`
- `scripts/audit-ai-underwriting-svg-lock.ts`

## Upload Gate

The suite is considered uploaded when all 12 SVG files, both docs, the suite README, and the audit script exist on the repository branch and `package.json` exposes the audit command.
