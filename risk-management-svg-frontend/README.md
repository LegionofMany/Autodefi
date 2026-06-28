# AutoDeFi DAO Risk Management SVG Frontend

This folder contains the pushed front-end implementation for the AutoDeFi DAO Risk Management section.

## What is included

- A real runnable front-end entry at `risk-management-svg-frontend/index.html`.
- Dark AutoDeFi DAO styling with neon blue, green, purple, orange, and red risk states.
- Inline SVG logo, shields, charts, sparklines, donut charts, heatmap cells, and interface graphics.
- No screenshot images are required to render the UI.
- Hash routes for all Risk Management screens generated in the chat.

## Completed routes

1. `#/loan-monitoring-live` — Loan Monitoring / live loan health
2. `#/stress-testing-scenarios` — Stress Testing scenarios
3. `#/risk-parameters-core` — Core Risk Parameters
4. `#/risk-parameters-global` — Global Risk Configuration
5. `#/liquidation-engine` — Liquidation Engine Settings
6. `#/insurance-coverage-programs` — Insurance Coverage Programs
7. `#/risk-reports` — Risk Reports library
8. `#/historical-risk` — Historical Risk dashboard
9. `#/loan-monitoring-portfolio` — Loan Portfolio Analytics
10. `#/stress-testing-resilience` — Stress Testing Resilience view
11. `#/risk-model-parameters` — Risk Model Parameters
12. `#/liquidation-automation` — Liquidation Automation Rules
13. `#/insurance-management` — Insurance Management
14. `#/historical-analysis` — Historical Risk Analysis

Additional internal links are included:

- `#/risk-overview`
- `#/alerts`
- `#/loan-detail`
- `#/advanced-filters`
- `#/collateral-heatmap`
- `#/risk-assessment-run`

## Run locally

Open `index.html` directly in a browser, or serve the folder with any static server.

Example:

```bash
cd risk-management-svg-frontend
python3 -m http.server 5173
```

Then visit:

```txt
http://localhost:5173
```

## AutoDeFi protocol alignment

The UI follows the locked AutoDeFi rules from the project build:

- Approved dealer deals are funded in full to the dealer after approval and delivery confirmation.
- Borrowers repay through regional stable-value rails.
- ADF is used for staking, collateral, access, rewards, governance, and ecosystem utility.
- Interest yield is distributed to users staked in the matching risk-tier pool.
- Risk Management protects lenders, stakers, insurance reserves, treasury health, and liquidation readiness.

## Next integration step

This folder is isolated so it does not overwrite the existing AutoDeFi frontend on `main`. The next step is to merge the branch, then wire the screen data to the completed backend endpoints.
