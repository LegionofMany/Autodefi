# AutoDeFi Capital Yield Portal

Front-end implementation for the AutoDeFi Capital Yield Portal phase.

AutoDeFi is modeled as a decentralized auto loan pool where approved dealer deals are funded in full, borrowers repay through regional stable-value rails, and interest yield is distributed back to matching risk-tier capital providers. ADF remains focused on staking, collateral, access, rewards, governance, and ecosystem utility rather than default borrower repayment currency.

## Completed Portal Tabs

1. Dashboard
2. Investments
3. Loan Marketplace
4. Portfolios
5. Earnings
6. Transactions
7. Reports & Analytics
8. AutoInvest
9. Documents
10. Settings
11. Support

## Tech Stack

- Next.js
- React
- TypeScript
- Tailwind CSS
- Lucide React icons

## Run Locally

```bash
npm install
npm run dev
```

Open:

```txt
http://localhost:3000/capital-yield
```

## Project Structure

```txt
src/
  app/
    capital-yield/
      page.tsx
      investments/page.tsx
      loan-marketplace/page.tsx
      portfolios/page.tsx
      earnings/page.tsx
      transactions/page.tsx
      reports/page.tsx
      autoinvest/page.tsx
      documents/page.tsx
      settings/page.tsx
      support/page.tsx
  components/
    capital-yield/
      CapitalYieldLayout.tsx
      UI.tsx
  data/
    capitalYieldData.ts
```

## Design Direction

Dark fintech/Web3 interface with neon blue, purple, green, teal, orange, and red risk-tier accents. The UI is aligned to the AutoDeFi capital/yield workflow: investor allocation, risk tiers, loan marketplace review, earnings, repayments, AutoInvest rules, reports, documents, and support.
