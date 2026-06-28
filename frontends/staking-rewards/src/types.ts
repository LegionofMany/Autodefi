export type RiskTier = 1 | 2 | 3;
export type StakeStatus = 'Active' | 'Pending' | 'Locked' | 'Unlock Available' | 'Claimable' | 'Completed';

export interface StatCardData {
  id: string;
  label: string;
  value: string;
  subValue?: string;
  trend: string;
  icon: string;
  tone: 'purple' | 'green' | 'amber' | 'blue';
}

export interface StakePosition {
  id: string;
  asset: 'ADF';
  tokenName: string;
  tier: RiskTier;
  riskLabel: 'Low Risk' | 'Medium Risk' | 'High Risk';
  stakedAmount: number;
  usdValue: number;
  apr: number;
  pendingRewards: number;
  pendingRewardsUsd: number;
  lockPeriodDays: number;
  lockEndDate: string;
  status: StakeStatus;
  txHash?: string;
  isNew?: boolean;
}

export interface RewardHistoryItem {
  epoch: number;
  distributionDate: string;
  rewards: number;
  usdValue: number;
  boostApplied: number;
  status: 'Claimed' | 'Pending' | 'Scheduled';
  txHash: string;
}

export interface UpcomingReward {
  epoch: number;
  date: string;
  rewardAmount: number;
  usdValue: number;
}

export interface RewardSource {
  label: string;
  description: string;
  percent: number;
  icon: string;
}

export interface BoostSetting {
  id: string;
  label: string;
  description: string;
  percent: number;
  icon: string;
}

export interface DashboardData {
  wallet: {
    address: string;
    shortAddress: string;
    network: string;
    balanceADF: number;
    connected: boolean;
  };
  token: {
    symbol: 'ADF';
    priceUsd: number;
    changePercent: number;
  };
  stakingPower: {
    totalADF: number;
    trendPercent: number;
  };
  stats: StatCardData[];
  positions: StakePosition[];
  rewardsSummary: {
    totalPendingUsd: number;
    tiers: Array<{ tier: RiskTier; label: string; valueUsd: number; percent: number }>;
  };
  boosts: BoostSetting[];
  rewardSources: RewardSource[];
  upcomingRewards: UpcomingReward[];
  rewardHistory: RewardHistoryItem[];
  performanceSeries: Array<{ date: string; value: number }>;
  autoCompound: {
    enabled: boolean;
    frequency: 'Weekly' | 'Monthly' | 'Every Epoch' | 'Manual';
    minimumRewardThresholdADF: number;
    gasLimitEth: number;
    nextExecution: string;
  };
}

export interface StakeRequest {
  amountADF: number;
  tier: RiskTier;
  lockPeriodDays: number;
  autoCompoundEnabled: boolean;
}

export interface StakeResponse {
  stakeId: string;
  transactionHash: string;
  startDate: string;
  unlockDate: string;
  rewardRate: number;
  tier: RiskTier;
  status: StakeStatus;
}
