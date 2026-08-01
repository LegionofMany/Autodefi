# AutoDeFi Front End V1

Production-ready React + TypeScript + Vite front end for the AutoDeFi / Voltaire Protocols auto-loan liquidity system.

This package implements the completed AutoDeFi front-end direction from the chat: dark fintech UI, neon blue/green/purple accents, SVG-only product graphics, lender pool screens, DAO navigation, risk, revenue, treasury, staking, governance, borrower, dealer, capital-yield, insurance/recovery, admin command center screens, and the locked AI Underwriting & Risk Command Suite SVG dashboard family.

## What is included

- Full React/TypeScript front-end scaffold.
- AutoDeFi sidebar and wallet header.
- SVG logo, SVG icons, SVG vehicle/tier graphics, SVG shield/insurance graphics, SVG chart components.
- Full tracked SVG dashboard files in `public/assets/svg` for every major AutoDeFi area.
- Locked AI Underwriting & Risk Command Suite SVGs in `public/assets/svg/ai-underwriting-suite`.
- Lender Pool sections for risk tiers, performance, origination, risk credit, rewards, and utilization.
- DAO pages for dashboard, proposals, vote, treasury, staking, risk management, revenue sharing, token utility, governance, audit/security, and analytics.
- AutoDeFi portal pages for borrower, dealer, capital yield, insurance/recovery, and admin command.
- API service layer ready to connect through `VITE_AUTODEFI_API_BASE`.
- Static seed data included so the UI can render immediately while backend endpoints are wired.

## Whitepaper

The current AutoDeFi / ADF Token whitepaper is available at [`docs/WHITEPAPER.md`](docs/WHITEPAPER.md).

It covers the AutoDeFi ecosystem, ADF token utility, proposed tokenomics framework, Hedera direction, ZONYCS marketplace integration, Reqrium identity and verification layer, loan lifecycle, risk tiers, treasury, DAO governance, compliance, security, roadmap, and risk factors.

## Install

Run `npm install` and then `npm run dev`.

## Build

Run `npm run build`.

## Audits

Run `npm run audit:v1-docs` and `npm run audit:ai-underwriting-svg-lock`.

## Backend connection

Copy `.env.example` to `.env` and set `VITE_AUTODEFI_API_BASE` to the backend domain. Then replace seed-data calls with backend responses inside `src/services/api.ts` or directly in the page loaders.

## Design notes

This front end intentionally avoids raster dashboard screenshots as UI assets. Product graphics are SVG files or SVG React components so the design stays crisp, editable, Webflow-friendly, and GitHub-friendly.

The AI Underwriting & Risk Command Suite is locked by `docs/AI_UNDERWRITING_SVG_LOCK.md` and audited by `scripts/audit-ai-underwriting-svg-lock.ts`.
