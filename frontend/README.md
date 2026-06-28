# AutoDeFi Borrower Portal Front End

Production-ready React + TypeScript + Vite front end for the AutoDeFi DeFi auto loan pool borrower portal.

## Included screens

- Dashboard
- Pre-Qualification
- Loan Application
- My Loans
- Payments
- AutoPay
- Refinance
- Insurance & Protection
- Documents
- Collateral
- Rewards
- Wallet
- Support
- Settings

## Design system

Dark fintech/Web3 interface aligned to the AutoDeFi loan pool: neon blue, purple, and green accents; card-based layouts; borrower sidebar; wallet header; pool/security/ADF utility modules.

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Backend connection

Set your API URL in `.env`:

```bash
VITE_API_BASE_URL=https://your-api.example.com
```

The API adapter is in `src/lib/api.ts`. The front end expects backend payloads matching the interfaces in `src/types/autodefi.ts`. Until connected, the app uses seeded borrower data in `src/data/autodefi.ts` so the full UI remains runnable.

## Push to GitHub

```bash
git init
git add .
git commit -m "Initial AutoDeFi borrower portal frontend"
git branch -M main
git remote add origin <your-repo-url>
git push -u origin main
```
