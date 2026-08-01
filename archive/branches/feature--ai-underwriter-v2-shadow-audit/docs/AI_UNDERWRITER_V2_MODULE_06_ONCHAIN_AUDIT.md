# AI Underwriter V2 — Module 6: On-Chain Audit

Status: added from product reconstruction because the original rendered page is missing.

Branch: `feature/ai-underwriter-v2-shadow-audit`

## Placement

The On-Chain Audit page is Module 6 of the AI Underwriter audit flow.

It sits after:

5. Wallet Audit

And before:

7. Vehicle Audit

## Page title

`6. ON-CHAIN AUDIT`

## Page subtitle

Blockchain verification, transaction behavior analysis, protocol exposure, AML risk, and digital trust assessment.

## Product purpose

The Wallet Audit page verifies the wallet identity, broad activity quality, asset mix, wallet age, and wallet trust level.

The On-Chain Audit page goes one level deeper. It checks whether the connected wallet behaves safely on-chain and whether the wallet should increase, reduce, or block underwriting confidence.

## V1 responsibility

V1 uses this module as part of the live underwriting decision.

V1 should:

- Confirm the wallet is linked to the applicant identity.
- Check wallet age and network history.
- Review stablecoin and repayment-capable asset activity.
- Check protocol interaction quality.
- Check sanction, AML, mixer, bridge, exploit, and high-risk counterparty exposure.
- Produce a clear underwriting signal.
- Add explainable reason codes into the final decision.

## V2 responsibility

V2 shadows V1 and audits whether V1 weighted on-chain signals correctly.

V2 should:

- Re-score the wallet independently.
- Compare V1 wallet/on-chain confidence to repayment outcomes.
- Learn which wallet behaviors predict stronger borrower performance.
- Learn which behaviors predict default, fraud, synthetic identity, mule activity, or early delinquency.
- Detect whether V1 is over-rewarding token balances without true repayment quality.
- Detect whether V1 is over-penalizing normal DeFi behavior.
- Recommend model/rule changes through the human promotion gate.

## Locked visual direction

The reconstructed page must follow the uploaded AI Underwriter page family:

- Dark AutoDeFi command center shell.
- Left module rail with Module 6 active.
- Top AI metrics: NeuralRisk AI Active, Models Online 12, Accuracy 98.7%, Decisions Today 1,842, AI Status Active.
- Cyan/blue/green/purple glow system.
- Right-side results score card.
- Bottom navigation: Previous Module, View Full On-Chain Report, Next Module: Vehicle Audit.

## Main KPI row

| KPI | Example value | Meaning |
|---|---:|---|
| On-Chain Score | 83 / Good | Overall blockchain behavior score |
| Wallet Age | 2.8 Years | Time since first meaningful activity |
| Transaction History | 1,248 Active | Depth of historical activity |
| Stablecoin Flow | $226,400 | Repayment-relevant stable-value behavior |
| Protocol Risk | Low | DeFi/protocol interaction risk |
| AML / Sanctions | Clear | Screening result |
| Counterparty Risk | Low | Exposure to high-risk wallets or contracts |

## Core panels

### 1. On-Chain Activity Overview

Tracks 24-month transaction count, volume, counterparties, unique interactions, active months, and consistency of use.

### 2. Network and Protocol Exposure

Breaks down primary networks and protocols used.

Example protocol set:

- Ethereum
- Hedera
- Base
- Polygon
- Uniswap
- Aave
- Compound
- Curve
- Chainlink

### 3. Stable-Value Rail Readiness

Measures whether the applicant has practical experience with stable-value assets that could support AutoDeFi repayment rails.

Signals:

- USDC activity
- USDT activity
- DAI activity
- Average stablecoin balance
- Stablecoin deposit/withdrawal history
- Payment-like transaction patterns

### 4. Smart Contract Safety

Checks exposure to risky contract approvals, known exploited contracts, revoked approvals, signature hygiene, and malicious dApp interaction.

### 5. AML, Sanctions, and Counterparty Review

Checks:

- Sanctions match
- Mixer exposure
- Darknet exposure
- Scam-wallet exposure
- High-risk exchange exposure
- Bridge anomaly risk
- Peel-chain pattern risk
- Wash activity risk

### 6. On-Chain Behavior Analysis

Scores:

- Activity consistency
- Transaction diversity
- Fund flow stability
- Smart contract safety
- Stablecoin behavior
- Risky protocol exposure
- Identity link confidence
- Counterparty quality

### 7. Impact on Decision

Example output:

- Approval Impact: `+5%`
- Risk Adjustment: `-3%`
- Confidence Boost: `Medium / High`

## Right results rail

Suggested card title:

`On-Chain Results`

Suggested score:

`89% On-Chain Confidence`

Suggested fields:

| Field | Value |
|---|---|
| On-Chain Score | 83 |
| Wallet Score | 782 |
| Trust Level | High Trust |
| Identity Link | Verified |
| AML / Sanctions | Clear |
| Wallet Age | 2.8 Years |
| Protocol Risk | Low |
| Stable Rail Readiness | Strong |
| Overall Risk | Low |

## Reason codes

Positive reason codes:

- `ONCHAIN_IDENTITY_LINK_VERIFIED`
- `ONCHAIN_WALLET_AGE_ESTABLISHED`
- `ONCHAIN_STABLECOIN_HISTORY_STRONG`
- `ONCHAIN_COUNTERPARTY_RISK_LOW`
- `ONCHAIN_SANCTIONS_CLEAR`
- `ONCHAIN_PROTOCOL_ACTIVITY_HEALTHY`
- `ONCHAIN_CONSISTENT_ACTIVITY`

Caution reason codes:

- `ONCHAIN_WALLET_TOO_NEW`
- `ONCHAIN_ACTIVITY_TOO_THIN`
- `ONCHAIN_STABLECOIN_HISTORY_WEAK`
- `ONCHAIN_COUNTERPARTY_RISK_ELEVATED`
- `ONCHAIN_PROTOCOL_RISK_ELEVATED`
- `ONCHAIN_BRIDGE_ACTIVITY_REVIEW`
- `ONCHAIN_CONTRACT_APPROVAL_RISK`

Block / manual-review reason codes:

- `ONCHAIN_SANCTIONS_MATCH`
- `ONCHAIN_MIXER_EXPOSURE`
- `ONCHAIN_SCAM_EXPOSURE`
- `ONCHAIN_IDENTITY_LINK_FAILED`
- `ONCHAIN_EXPLOITED_CONTRACT_EXPOSURE`
- `ONCHAIN_SUSPICIOUS_FLOW_PATTERN`

## V2 learning outcomes

V2 should learn over time whether the following signals improve or weaken repayment quality:

- Stablecoin transaction history.
- Wallet age.
- Number of active months.
- Network diversity.
- Protocol diversity.
- High-risk dApp exposure.
- Counterparty quality.
- Contract approval hygiene.
- Exchange deposit/withdrawal behavior.
- Stable-value repayment rail familiarity.

## Promotion gate

V2 may recommend new on-chain scoring weights, but it must not update the live V1 model directly.

Required promotion approvals:

1. V2 shadow audit generates recommendation.
2. Risk operator reviews evidence.
3. Compliance reviews reason-code effect.
4. Human model-governance approval is recorded.
5. Change is versioned and deployed as a controlled V1.x/V3 model update.

## Final reconstructed page rule

This page is now part of the locked 15-module AI Underwriter V2 page flow even though the original screenshot is missing.
