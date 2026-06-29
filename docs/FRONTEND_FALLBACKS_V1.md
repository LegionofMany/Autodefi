# AutoDeFi V1 Frontend Fallbacks

V1 pages must not crash if a backend service is unavailable.

## Rule

- Load live data when available.
- Show fallback demo data when an API call fails.
- Show empty state when no records exist.
- Show degraded status when fallback data is active.

## Protected Pages

- /autodefi/institutional
- /autodefi/dealer-command
- /autodefi/borrower-command
- /autodefi/tier-pools
- /autodefi/stable-treasury
- /autodefi/adf-utility
- /autodefi/ai-risk

## Fallback Source

apps/web/lib/v1-fallback-data.ts

## Future Hardening

Add safeArray, safeNumber, money formatting, empty-state components, and live/degraded status strip handling.
