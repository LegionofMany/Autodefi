# AutoDeFi V1

AutoDeFi is the vehicle finance protocol inside the Voltaire Protocols ecosystem.

## Locked V1 rule

Dealer gets funded in full after an approved deal. Borrower repays through regional stable-value rails. Principal returns to the matching risk-tier pool. Interest distributes to LPs/stakers in that same tier. ADF powers staking, collateral, dealer access, boosts, governance and rewards. Hedera records execution.

## Ecosystem

Voltaire Protocols → AutoDeFi → ZONYCS marketplace layer → Hedera/HBAR execution → ADF utility token.

## Quick start

```bash
pnpm install
cp .env.example .env
docker compose up -d
pnpm db:validate
pnpm db:migrate
pnpm seed:v1-demo
pnpm run:v1-flow
```

## Current package status

This ZIP is the first V1 repository scaffold generated from the frozen manifest. It is intended for review, GitHub import, and iterative hardening. The next pass should run the completion gate and fix any build/schema issues found locally.

## Demo users

admin@autodefi.local / AutoDeFiDemo123!  
dealer@autodefi.local / AutoDeFiDemo123!  
borrower@autodefi.local / AutoDeFiDemo123!  
lp@autodefi.local / AutoDeFiDemo123!  
investor@autodefi.local / AutoDeFiDemo123!  
dao@autodefi.local / AutoDeFiDemo123!
