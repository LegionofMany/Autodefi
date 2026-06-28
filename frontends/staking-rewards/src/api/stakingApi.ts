import type { DashboardData, StakeRequest, StakeResponse } from '../types';
import { stakingDashboardFixture } from '../data/stakingFixtures';

const API_BASE_URL = import.meta.env.VITE_AUTODEFI_API_BASE_URL ?? '';
const USE_FIXTURES = import.meta.env.VITE_USE_STAKING_FIXTURES !== 'false';

async function request<T>(path: string, init?: RequestInit): Promise<T> {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    headers: {
      'Content-Type': 'application/json',
      ...(init?.headers ?? {})
    },
    ...init
  });

  if (!response.ok) {
    const message = await response.text();
    throw new Error(message || `AutoDeFi API request failed: ${response.status}`);
  }

  return response.json() as Promise<T>;
}

export async function fetchStakingDashboard(): Promise<DashboardData> {
  if (USE_FIXTURES) return stakingDashboardFixture;
  return request<DashboardData>('/staking/dashboard');
}

export async function createStake(requestBody: StakeRequest): Promise<StakeResponse> {
  if (USE_FIXTURES) {
    return {
      stakeId: `stake-${Date.now()}`,
      transactionHash: '0xnew...stake',
      startDate: new Date().toISOString(),
      unlockDate: new Date(Date.now() + requestBody.lockPeriodDays * 86400000).toISOString(),
      rewardRate: requestBody.tier === 1 ? 7.25 : requestBody.tier === 2 ? 18.56 : 28.75,
      tier: requestBody.tier,
      status: 'Pending'
    };
  }
  return request<StakeResponse>('/staking/positions', {
    method: 'POST',
    body: JSON.stringify(requestBody)
  });
}

export async function claimRewards(): Promise<{ transactionHash: string }> {
  if (USE_FIXTURES) return { transactionHash: '0xclaim...adf' };
  return request<{ transactionHash: string }>('/staking/rewards/claim', { method: 'POST' });
}

export async function updateAutoCompoundSettings(body: {
  enabled: boolean;
  frequency: string;
  minimumRewardThresholdADF: number;
  gasLimitEth: number;
}): Promise<{ ok: true }> {
  if (USE_FIXTURES) return { ok: true };
  return request<{ ok: true }>('/staking/autocompound', {
    method: 'PUT',
    body: JSON.stringify(body)
  });
}
