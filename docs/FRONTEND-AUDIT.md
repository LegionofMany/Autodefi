# AutoDeFi Front-End Build Audit

## Locked AutoDeFi rules reflected in the front end

- Dealers are funded in full after approved deals.
- Borrowers repay through regional stable-value rails.
- Interest yield is paid to lenders/stakers based on matching risk-tier pools.
- ADF is used for staking, collateral, rewards, access, governance, and ecosystem utility.
- ADF is not presented as the default borrower repayment currency.
- Lender liquidity is organized by risk tier, not only by asset.
- Tier 4 is represented as a high-risk / last-chance dealer-lead path rather than a standard DeFi loan pool.
- Insurance and reserves are visible as lender protection layers.
- ZONYCS / marketplace recovery allocation is represented in governance proposal content.

## Front-end screens included

- Lender Pool #1–#6.
- DAO governance modules.
- Borrower, Dealer, Capital Yield, Insurance Recovery, Admin Command Center modules.
- Treasury, staking, revenue, token utility, risk, audit, analytics.

## Back-end integration still required

The UI includes a service layer and seed data. Wire the completed backend endpoints to the page data loaders after confirming final API routes, auth headers, and wallet-session requirements.
