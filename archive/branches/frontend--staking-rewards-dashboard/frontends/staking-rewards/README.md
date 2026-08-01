# AutoDeFi Staking Rewards Front End

Production front-end module for the AutoDeFi **Staking Rewards** page and the completed #1–#7 interaction set from the current design pass.

This is not a static image mockup. It is a Vite + React + TypeScript front-end with real component state, typed API boundaries, modal flows, tables, charts, and SVG assets.

## Included Screens / Flows

1. **Stake ADF Tokens modal**
   - Wallet balance
   - ADF amount input
   - Risk tier selection
   - Lock duration selection
   - Live stake preview
   - Risk disclosure
   - Confirm stake flow

2. **Staking Rewards base dashboard**
   - Sidebar navigation
   - Top wallet bar
   - KPI cards
   - My Staked Assets
   - Rewards Summary
   - Reward Boosts
   - Rewards Performance
   - Reward History
   - Upcoming Rewards

3. **Manage stake dropdown**
   - Increase Stake
   - Extend Lock
   - Claim Rewards
   - Enable AutoCompound
   - View Details
   - View Contract
   - Request Unstake

4. **Lock Duration modal**
   - 30 / 60 / 90 / 180 / 360 days
   - Reward boost preview
   - Confirm lock duration

5. **Claim All Rewards modal**
   - Pending ADF
   - Reward destination
   - Estimated network fee
   - AutoCompound summary
   - Claim rewards action

6. **New staked position state**
   - After staking, a new pending position is inserted into the table
   - Purple highlight and NEW marker
   - Pending status handling

7. **Staking Settings modal**
   - AutoCompound toggle
   - Frequency
   - Minimum reward threshold
   - Gas limit
   - Next AutoCompound execution
   - Save settings

## SVG Assets

All key graphics are supplied as editable SVG files under:

```txt
src/assets/svg/
```

Included:

- AutoDeFi logo
- ADF tier tokens
- Wallet orb
- Growth staking promo artwork
- Navigation icons
- KPI icons
- Reward/boost icons
- Modal utility icons
- Table/action icons

## API Connection

The front end uses a typed API adapter in:

```txt
src/api/stakingApi.ts
```

Expected backend endpoints:

```txt
GET  /staking/dashboard
POST /staking/positions
POST /staking/rewards/claim
PUT  /staking/autocompound
```

Set the backend URL in `.env`:

```txt
VITE_AUTODEFI_API_BASE_URL=https://your-autodefi-backend.com
VITE_USE_STAKING_FIXTURES=false
```

For local visual QA without a backend running:

```txt
VITE_USE_STAKING_FIXTURES=true
```

## Install

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Project Structure

```txt
src/
  api/
    stakingApi.ts
  assets/svg/
  components/
    layout/
    modals/
    RewardBoosts.tsx
    RewardHistory.tsx
    RewardPerformance.tsx
    RewardsSummary.tsx
    StakedAssetsTable.tsx
    StakingRewardsPage.tsx
    StatCard.tsx
    UpcomingRewards.tsx
  data/
    stakingFixtures.ts
  hooks/
    useStakingDashboard.ts
  styles/
    dashboard.css
    global.css
    modals.css
    tokens.css
  types.ts
```

## AutoDeFi Rule Alignment

This module keeps the AutoDeFi rules clear:

- Borrowers repay through stable-value rails.
- ADF is used for staking, governance, collateral, access, rewards, and boost mechanics.
- Rewards can be sourced from borrower interest yield, treasury incentives, marketplace/recovery fees, governance participation, and staking lock boosts.
- Tier 1 / Tier 2 / Tier 3 represent risk/reward staking exposure, not borrower payment currency.
