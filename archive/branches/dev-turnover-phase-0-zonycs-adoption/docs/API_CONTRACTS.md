# AutoDeFi V1 API Contracts

The V1 API contract layer verifies that portal endpoints work through the API gateway.

## Gateway Rule

Frontend and tests call the API gateway at localhost port 4010 during local development. Frontend should not call individual backend services directly.

## Covered Areas

- Gateway health
- Service health
- Institutional dashboard
- Dealer dashboard
- LP dashboard
- Treasury dashboard
- Tier pools
- ADF utility policies
- Stable treasury rails
- Stable payment intents
- Funding executions
- Reconciliation runs
- AI deal audits

## Local Test Command

pnpm test:v1-api

## Required Before Running

Start Docker, run migrations, start dev services, then seed the V1 demo.

## Contract Goal

The API must prove dealer paid-in-full status, borrower stable-value repayment, tier pool yield distribution, ADF utility lock, dashboard snapshot, and reconciliation.
