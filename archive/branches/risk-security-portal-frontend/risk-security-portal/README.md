# AutoDeFi Risk & Security Portal

Coded front-end scaffold for the AutoDeFi Risk & Security Portal aligned to the DeFi auto loan pool build.

## Included Pages

Main portal routes:

- `/dashboard`
- `/risk-overview`
- `/fraud-detection`
- `/security-events`
- `/exposure-monitor`
- `/transaction-monitoring`
- `/smart-contract-security`
- `/identity-verification`
- `/compliance`
- `/reports-analytics`
- `/alerts-notifications`
- `/settings`

Settings internal routes:

- `/settings/preferences`
- `/settings/integrations`
- `/settings/security`
- `/settings/notifications`
- `/settings/system`
- `/settings/data-retention`
- `/settings/audit-logs`
- `/settings/appearance`
- `/settings/access-authentication`
- `/settings/api-keys`
- `/settings/ip-allowlist`
- `/settings/session-management`
- `/settings/data-sources`
- `/settings/webhooks`
- `/settings/risk-rules-policies`
- `/settings/system-maintenance`

## AutoDeFi Context

This front end is designed for the AutoDeFi / Voltaire Protocols ecosystem:

- Hedera-based decentralized auto loan pool
- ADF used for staking, collateral, rewards, governance, access, and tier participation
- Borrower repayments through regional stable-value rails
- Dealers funded in full after approved deal acceptance
- Interest yield routed back to matching risk-tier staking pools
- ZONYCS recovery and liquidation readiness included in the risk model

## Tech Stack

- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- Recharts
- Lucide React icons

## Run Locally

```bash
cd risk-security-portal
npm install
npm run dev
```

Open `http://localhost:3000`.

## Build

```bash
npm run build
npm run start
```

## Notes

This phase uses mock data and reusable dashboard components. It is ready for real API connections to Hedera, ADF staking/collateral, borrower/dealer systems, KYC/KYT providers, treasury feeds, stable-rail payment events, and ZONYCS recovery workflows.
