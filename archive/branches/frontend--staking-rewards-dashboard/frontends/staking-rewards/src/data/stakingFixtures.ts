import type { DashboardData } from '../types';
import lockIcon from '../assets/svg/icon-lock.svg';
import rewardIcon from '../assets/svg/icon-reward.svg';
import pendingIcon from '../assets/svg/icon-pending.svg';
import shieldIcon from '../assets/svg/icon-shield.svg';
import durationIcon from '../assets/svg/icon-duration.svg';
import boostLock from '../assets/svg/icon-boost-lock.svg';
import boostGov from '../assets/svg/icon-boost-gov.svg';
import boostLp from '../assets/svg/icon-boost-lp.svg';
import walletIcon from '../assets/svg/icon-wallet.svg';

export const stakingDashboardFixture: DashboardData = {
  wallet: {
    address: 'demo-wallet-address',
    shortAddress: '0x7a8B...EF23',
    network: 'Arbitrum One',
    balanceADF: 18450.75,
    connected: true
  },
  token: { symbol: 'ADF', priceUsd: 0.8724, changePercent: 4.32 },
  stakingPower: { totalADF: 12450.25, trendPercent: 12.45 },
  stats: [
    { id: 'totalStakedValue', label: 'Total Staked Value', value: '$103,250.00', trend: '↑ 12.45% vs last 30d', icon: lockIcon, tone: 'purple' },
    { id: 'totalRewards', label: 'Total Rewards (All Time)', value: '$18,742.66', subValue: 'Claimed: $6,250.00', trend: '', icon: rewardIcon, tone: 'green' },
    { id: 'pendingRewards', label: 'Pending Rewards', value: '$1,245.80', trend: '↑ 15.8% vs last 7d', icon: pendingIcon, tone: 'amber' },
    { id: 'weightedApr', label: 'APR (Weighted)', value: '18.75%', trend: '↑ 1.25% vs last 7d', icon: shieldIcon, tone: 'blue' },
    { id: 'avgLock', label: 'Average Lock Duration', value: '113 Days', trend: '↑ 5 Days vs last 30d', icon: durationIcon, tone: 'purple' }
  ],
  positions: [
    { id: 'stake-tier-1-primary', asset: 'ADF', tokenName: 'AutoDeFi Token', tier: 1, riskLabel: 'Low Risk', stakedAmount: 5250, usdValue: 5250, apr: 7.25, pendingRewards: 125.5, pendingRewardsUsd: 109.25, lockPeriodDays: 90, lockEndDate: 'Apr 12, 2025', status: 'Active', txHash: 'demo-tx-1' },
    { id: 'stake-tier-2-primary', asset: 'ADF', tokenName: 'AutoDeFi Token', tier: 2, riskLabel: 'Medium Risk', stakedAmount: 12500, usdValue: 12500, apr: 15.8, pendingRewards: 975, pendingRewardsUsd: 849.75, lockPeriodDays: 180, lockEndDate: 'Aug 10, 2025', status: 'Active', txHash: 'demo-tx-2' },
    { id: 'stake-tier-3-primary', asset: 'ADF', tokenName: 'AutoDeFi Token', tier: 3, riskLabel: 'High Risk', stakedAmount: 25000, usdValue: 25000, apr: 28.75, pendingRewards: 1325.3, pendingRewardsUsd: 1153.98, lockPeriodDays: 360, lockEndDate: 'Jan 25, 2026', status: 'Active', txHash: 'demo-tx-3' }
  ],
  rewardsSummary: {
    totalPendingUsd: 1245.8,
    tiers: [
      { tier: 1, label: 'Tier 1 (Low)', valueUsd: 109.25, percent: 8.8 },
      { tier: 2, label: 'Tier 2 (Medium)', valueUsd: 849.75, percent: 68.2 },
      { tier: 3, label: 'Tier 3 (High)', valueUsd: 1153.98, percent: 23.0 }
    ]
  },
  boosts: [
    { id: 'lock', label: 'Lock Duration Boost', description: 'Longer lock = higher rewards', percent: 15.0, icon: boostLock },
    { id: 'governance', label: 'Governance Boost', description: 'Active voter = higher rewards', percent: 7.5, icon: boostGov },
    { id: 'lp', label: 'LP Staking Boost', description: 'Stake in DAO pools for extra boost', percent: 5.0, icon: boostLp }
  ],
  rewardSources: [
    { label: 'Borrower Interest Yield', description: 'From auto loan repayments', percent: 52, icon: walletIcon },
    { label: 'Treasury Incentives', description: 'Protocol & DAO funding', percent: 22, icon: boostGov },
    { label: 'Marketplace Fees', description: 'Auctions, sales & liquidations', percent: 12, icon: boostLp },
    { label: 'Governance Participation', description: 'Voting & proposal rewards', percent: 8, icon: boostGov },
    { label: 'Staking Lock Boost', description: 'Longer lock duration bonus', percent: 6, icon: boostLock }
  ],
  upcomingRewards: [
    { epoch: 128, date: 'May 19, 2025 2:00 PM EST', rewardAmount: 415.3, usdValue: 361.45 },
    { epoch: 129, date: 'May 26, 2025 2:00 PM EST', rewardAmount: 427.85, usdValue: 372.35 },
    { epoch: 130, date: 'Jun 2, 2025 2:00 PM EST', rewardAmount: 443.2, usdValue: 385.76 }
  ],
  rewardHistory: [
    { epoch: 127, distributionDate: 'May 12, 2025', rewards: 415.3, usdValue: 361.45, boostApplied: 27.5, status: 'Claimed', txHash: 'demo-tx-127' },
    { epoch: 126, distributionDate: 'May 5, 2025', rewards: 402.15, usdValue: 345.62, boostApplied: 27.5, status: 'Claimed', txHash: 'demo-tx-126' },
    { epoch: 125, distributionDate: 'Apr 28, 2025', rewards: 389.4, usdValue: 332.98, boostApplied: 27.5, status: 'Claimed', txHash: 'demo-tx-125' },
    { epoch: 124, distributionDate: 'Apr 21, 2025', rewards: 377.8, usdValue: 322.71, boostApplied: 27.5, status: 'Claimed', txHash: 'demo-tx-124' },
    { epoch: 123, distributionDate: 'Apr 14, 2025', rewards: 365.9, usdValue: 311.88, boostApplied: 27.5, status: 'Claimed', txHash: 'demo-tx-123' }
  ],
  performanceSeries: [
    { date: 'Apr 12', value: 1700 }, { date: 'Apr 14', value: 3150 }, { date: 'Apr 17', value: 6250 }, { date: 'Apr 19', value: 7100 }, { date: 'Apr 22', value: 9650 }, { date: 'Apr 24', value: 9900 }, { date: 'Apr 27', value: 12350 }, { date: 'Apr 29', value: 13500 }, { date: 'May 2', value: 15100 }, { date: 'May 4', value: 16050 }, { date: 'May 7', value: 18100 }, { date: 'May 9', value: 18600 }, { date: 'May 12', value: 20250 }
  ],
  autoCompound: { enabled: true, frequency: 'Weekly', minimumRewardThresholdADF: 10, gasLimitEth: 0.003, nextExecution: 'May 19, 2025 2:00 PM EST' }
};
