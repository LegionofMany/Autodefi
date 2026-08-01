# AutoDeFi Insurance Claims Center — Front End

Front-end-only implementation for the AutoDeFi Insurance Claims Center inside the AutoDeFi loan pool ecosystem.

This screen set preserves the approved visual direction:

- Dark fintech / Web3 layout
- Neon blue, purple, green, orange, and red status accents
- AutoDeFi insurance and recovery language
- DAO verification flow
- Smart contract payout flow
- Reserve pool visibility
- Loan ID, VIN, borrower, risk tier, payout rail, and recovery-status alignment

## Included tabs

1. Dashboard
2. Claims
3. Submit Claim
4. Open Claims
5. Approved Claims
6. Denied Claims
7. Claims History
8. Payouts
9. Reserves
10. Reports

## Run locally

Open `index.html` directly in a browser, or serve this folder with any static server:

```bash
cd insurance-claims-center
python3 -m http.server 8080
```

Then open:

```text
http://localhost:8080
```

## Backend integration notes

This folder intentionally contains no backend logic. The mock claim, payout, reserve, and report values live in `app.js` so the existing AutoDeFi backend can replace them later without changing the approved front-end vision.

Recommended integration points:

- Replace mock claim rows with the claim API response.
- Connect Submit Claim to the claim intake endpoint.
- Replace KPI cards with live metrics from insurance, treasury, and recovery services.
- Connect payout rows to smart contract transaction records.
- Connect reserve data to DAO treasury / insurance reserve policy.
- Connect recovery references to ZONYCS marketplace recovery and liquidation flows.

## Files

```text
index.html
styles.css
app.js
README.md
```

Phase status: complete for the Insurance Claims Center front-end design.
