# AI Underwriter V2 — Page Lock Process

Branch: `feature/ai-underwriter-v2-shadow-audit`

## Owner reminder

Every AI Underwriter V2 page must lock the following before the page is considered complete:

1. SVG file lock
2. Graphics styling lock
3. Logo and brand lock
4. Frontend UX/UI lock
5. Page audit lock

No page should move to final/push status until all five locks are present.

## Required per-page deliverables

For every module page, create or update:

```txt
src/features/ai-underwriter/<module>Module.ts
src/pages/AIUnderwriter<Module>.tsx
src/pages/aiUnderwriter<Module>.css
public/assets/svg/ai-underwriter-v2/module-XX-<module>.svg
docs/AI_UNDERWRITER_V2_MODULE_XX_<MODULE>_LOCK.md
scripts/audit-ai-underwriter-v2-<module>.ts
```

## SVG lock requirements

Each SVG must be:

- Editable SVG, not raster screenshot.
- 16:9 dashboard canvas.
- ViewBox: `0 0 1792 1024`.
- Dark AutoDeFi fintech theme.
- Neon cyan / blue / green / purple glow language.
- Uses AutoDeFi logo/mark area.
- Includes module title and module number.
- Includes V1/V2 status language where relevant.
- Includes the same layout rhythm as the uploaded reference pages.
- Safe for future React component conversion.

## Graphics styling lock requirements

Each page must preserve:

- Black/navy background.
- Neon border cards.
- Cyan primary action lines.
- Green success/active states.
- Purple shadow-audit states.
- Yellow/orange caution or governance states.
- Rounded command-center panels.
- KPI cards.
- Right-side results rail where used.
- Bottom/next-step action region where used.

## Logo and brand lock requirements

Each page must preserve:

- AutoDeFi brand name.
- AutoDeFi `A` icon/mark area.
- AI Underwriter Command Center title system.
- NeuralRisk AI active language for the V1/V2 model stack.
- Professional lending/risk dashboard tone.
- No replacement of AutoDeFi with unrelated branding.

## Frontend UX/UI lock requirements

Each page must include:

- Clear page title.
- Module number.
- Applicant/deal context where relevant.
- Primary KPI row.
- Results/decision rail where relevant.
- V1 operating-decision signal.
- V2 shadow-audit signal.
- Reason-code-ready outputs.
- Next-module navigation language.
- Responsive layout support.

## Page audit lock requirements

Each audit script should verify:

- Module data exists.
- Page component exists.
- Page CSS exists.
- SVG lock file exists.
- Reason codes exist.
- V1/V2 language exists.
- Shadow-audit/governance protection language exists.

## Current module sequence

0. Command Center Overview
1. Bureau Audit
2. Income Audit
3. Employment Audit
4. Residence Audit
5. Wallet Audit
6. On-Chain Audit
7. Vehicle Audit
8. Collateral Audit
9. Market Risk Audit
10. Approval Probability
11. Default Risk
12. Best Funding Source
13. Yield to Lenders
14. Final Action
15. Audit Program Settings

## Completion rule

A page is not locked until all five checklist items are complete and the issue/PR notes say:

`SVG + graphics + branding + frontend UX/UI + audit lock complete.`
