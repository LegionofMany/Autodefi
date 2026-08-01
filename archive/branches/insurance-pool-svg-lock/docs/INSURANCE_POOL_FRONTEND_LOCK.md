# AutoDeFi DAO Insurance Pool Front-End Lock

## Purpose

This document locks the front-end direction for the AutoDeFi DAO Insurance Pool dashboard suite generated from the approved dashboard renders.

The suite is a dedicated insurance/protection pool command center inside AutoDeFi DAO. It is separate from the broader Insurance & Recovery portal.

## Locked Product Separation

| Area | Purpose |
|---|---|
| Insurance Pool | DAO coverage pool, reserves, staking, reinsurance, utilization, reports, analytics, settings |
| Insurance & Recovery | Claims operations, collections, delinquency, repossession, workouts, payment plans, recovery assets |

## Locked Visual System

- Dark cyber-finance dashboard background.
- Neon blue, cyan, green, purple, orange, and red highlights.
- Glass-card panels with thin electric-blue borders.
- Left-side command navigation.
- AutoDeFi DAO brand in top-left.
- Page title with icon and one-line operational subtitle.
- Top KPI row.
- Large middle dashboard cards.
- Bottom operational tables and action panels.
- SVG-first implementation. No raster dashboard screenshots should be used as UI assets.

## Locked Insurance Pool Tabs

The dashboard suite contains these locked tabs:

1. Dashboard / Insurance Pool
2. Policies
3. Claims
4. Risk Tiers
5. Reserves
6. Reinsurance
7. Staking (INS)
8. Governance
9. Reports
10. Analytics
11. Settings

## Locked Asset Paths

All generated dashboard SVGs live in:

`public/assets/svg/insurance-pool-suite/`

| Tab | SVG file |
|---|---|
| Insurance Pool | `insurance-pool-dashboard.svg` |
| Policies | `policies.svg` |
| Claims | `claims.svg` |
| Risk Tiers | `risk-tiers.svg` |
| Reserves | `reserves.svg` |
| Reinsurance | `reinsurance.svg` |
| Staking (INS) | `staking-ins.svg` |
| Governance | `governance.svg` |
| Reports | `reports.svg` |
| Analytics | `analytics.svg` |
| Settings | `settings.svg` |

## Locked Metrics by Tab

### Insurance Pool
- Total Coverage: $132.84M
- Claims Reserve: $38.67M
- Active Policies: 8,642
- Coverage Ratio: 182.6%
- Insurance APY: 24.38%
- Key visuals: risk exposure by tier, pool health shield, utilization donut, recent claims, stakers, coverage by asset type, reinsurance partners.

### Policies
- Total Policies: 8,642
- Active Policies: 7,984
- Pending Approval: 318
- Renewal Rate: 91.8%
- Premium Volume: $24.86M
- Key visuals: policy portfolio, policy health shield, policy mix, recent policies, expiring soon, underwriting queue.

### Claims
- Total Claims: 4,218
- Approved Claims: 3,126
- In Review: 482
- Avg Resolution Time: 4.8 days
- Claims Paid: $18.43M
- Key visuals: claims pipeline, claims health shield, claim mix, recent claims, high priority claims, payout by claim type, adjuster queue.

### Risk Tiers
- Total Tier Exposure: $132.84M
- Tier 1 Allocation: 40.8%
- Avg Portfolio Risk: 2.18
- 30D Delinquency: 2.61%
- Recovery Rate: 42.7%
- Key visuals: tier exposure, tier health shield, risk mix, tier changes, tier performance, review queue.

### Reserves
- Total Reserves: $38.67M
- Available Reserves: $25.55M
- Restricted Reserves: $13.12M
- Reserve Ratio: 182.6%
- Reserve Runway: 14.7 months
- Reinsurance Capacity: $75.40M
- Key visuals: reserve overview, reserve health shield, reserve metrics, balance trend, tier allocation, reserve activity.

### Reinsurance
- Total Reinsurance Capacity: $75.40M
- Total Cost: $4.28M
- Net Reinsurance Coverage: $71.12M
- Capacity Utilization: 48.6%
- Recovery Ratio: 92.4%
- Counterparty Score: A- / 7.8
- Key visuals: capacity overview, capacity trend, partner table, structure pyramid, events.

### Staking (INS)
- Total INS Staked: 24.68M INS
- Stakers: 5,842
- Staking APY: 24.38%
- Total Rewards Paid: 3.87M INS
- Lockup Ratio: 78.6%
- Circulating INS: 75.32M INS
- Key visuals: staking overview, staked over time, APY by tier, top stakers, reward distribution, actions.

### Governance
- Total Voting Power: 42.87M INS
- Proposals: 18
- Voter Participation: 64.2%
- Quorum Requirement: 30.0%
- Treasury Controlled: $21.47M
- Governance Proposals Enacted This Year: 8
- Key visuals: active proposals, voting power distribution, proposal categories, governance activity, quorum trend, funds.

### Reports
- Total Coverage: $132.84M
- Claims Paid YTD: $21.47M
- Loss Ratio YTD: 38.4%
- Reserve Ratio: 182.6%
- Investment Yield YTD: 5.78%
- Operating Cost Ratio: 12.7%
- Total Stakers: 5,842
- Key visuals: coverage trend, claims overview, KPIs, asset coverage, financial performance, loss ratio analysis, export reports.

### Analytics
- Total Premiums YTD: $48.67M
- Claims Paid YTD: $21.47M
- Loss Ratio YTD: 38.4%
- Combined Ratio YTD: 76.8%
- Investment Yield YTD: 5.78%
- Net Profit YTD: $21.78M
- Key visuals: premiums and claims trend, loss ratio, key insights, geographic distribution, policy growth, predictive risk outlook.

### Settings
- Key visuals: general settings, security settings, notification preferences, integrations, access roles, system information.
- Locked platform name: AutoDeFi Insurance Pool.
- Locked currency: USD.
- Locked network: Hedera Hashgraph / HBAR.
- Locked identity integration label: Reqrium. Do not reintroduce BlockPages branding.

## Brand Lock

Use `AutoDeFi DAO` on all suite screens.

Use `Reqrium` for identity and reputation integrations. Do not use BlockPages, BlockPages411, BP, or 411 branding in new insurance-pool front-end assets.

## Compliance Language

Public-facing wording should prefer:

- protection pool
- coverage pool
- reserves
- claims reserve
- mutual coverage
- reinsurance partner

The word insurance can remain in the current internal product UI, but production launch copy requires legal review.

## Completion Rule

A dashboard tab is complete only when:

1. It has a tracked SVG file.
2. The SVG uses the locked dark neon dashboard visual system.
3. It appears in the insurance pool suite asset map.
4. It uses the approved AutoDeFi DAO naming.
5. It avoids deprecated BlockPages branding.
6. It is included in the insurance pool SVG audit.
