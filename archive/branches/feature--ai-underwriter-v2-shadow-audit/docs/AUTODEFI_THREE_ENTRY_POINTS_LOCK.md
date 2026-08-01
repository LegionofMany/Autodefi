# AutoDeFi — Three Entry Points Lock

Branch: `feature/ai-underwriter-v2-shadow-audit`

## Status

This stage creates the three primary AutoDeFi entry points before deeper wiring begins.

## Locked entry points

```txt
General Public Main
Dealer Dashboard Main
Admin Main
```

## Route IDs

```txt
general-public-main
dealer-dashboard-main
admin-main
```

## Files added

```txt
src/features/entry-points/entryPointData.ts
src/features/entry-points/index.ts
src/pages/EntryPointMainPage.tsx
src/pages/entryPointMain.css
src/pages/GeneralPublicMain.tsx
src/pages/DealerDashboardMain.tsx
src/pages/AdminMain.tsx
```

## Files updated

```txt
src/App.tsx
```

## General Public Main

Purpose:

```txt
Public landing hub for borrowers, dealers, lenders, token utility, marketplace education, and trust verification.
```

Locked boundaries:

```txt
Public view only
No private borrower data
No guaranteed-yield wording
Clear disclosure path
```

## Dealer Dashboard Main

Purpose:

```txt
Dealer F&I workflow for inventory, leads, deal jackets, approvals, conditions, funding, payout status, and ZONYCS listings.
```

Locked boundaries:

```txt
Dealer-only workflow
No DAO approval of individual loans
Human review for exceptions
Dealer payout after approved funding
```

## Admin Main

Purpose:

```txt
Internal operations hub for AI Underwriter V2, dealer oversight, borrower workflows, pool risk, treasury, governance, and audit logs.
```

Locked boundaries:

```txt
Admin-only control
V2 shadow-only lock
Human governance required
Rollback required before promotion
```

## Wiring lock

The app now defaults to:

```txt
general-public-main
```

The public entry point links to dealer, lender, borrower, and admin paths. Dealer and admin pages link into their deeper dashboard/control paths.

## Next stage

After this entry-point layer, deeper wiring can connect each main entry point into its full route tree and permissions model.
