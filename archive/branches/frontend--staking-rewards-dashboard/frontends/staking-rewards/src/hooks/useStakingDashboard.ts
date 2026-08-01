import { useCallback, useEffect, useMemo, useState } from 'react';
import { claimRewards, createStake, fetchStakingDashboard, updateAutoCompoundSettings } from '../api/stakingApi';
import type { DashboardData, RiskTier, StakePosition, StakeRequest } from '../types';

export function useStakingDashboard() {
  const [data, setData] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let live = true;
    fetchStakingDashboard()
      .then((payload) => {
        if (live) setData(payload);
      })
      .catch((err) => {
        if (live) setError(err instanceof Error ? err.message : 'Unable to load staking dashboard');
      })
      .finally(() => {
        if (live) setLoading(false);
      });
    return () => {
      live = false;
    };
  }, []);

  const totalBoost = useMemo(() => {
    return data?.boosts.reduce((sum, item) => sum + item.percent, 0) ?? 0;
  }, [data?.boosts]);

  const submitStake = useCallback(async (request: StakeRequest) => {
    const response = await createStake(request);
    setData((current) => {
      if (!current) return current;
      const tokenPrice = current.token.priceUsd;
      const newPosition: StakePosition = {
        id: response.stakeId,
        asset: 'ADF',
        tokenName: 'AutoDeFi Token',
        tier: request.tier,
        riskLabel: request.tier === 1 ? 'Low Risk' : request.tier === 2 ? 'Medium Risk' : 'High Risk',
        stakedAmount: request.amountADF,
        usdValue: request.amountADF,
        apr: response.rewardRate,
        pendingRewards: request.amountADF * (response.rewardRate / 100) * (request.lockPeriodDays / 365) * 0.05,
        pendingRewardsUsd: request.amountADF * (response.rewardRate / 100) * (request.lockPeriodDays / 365) * 0.05 * tokenPrice,
        lockPeriodDays: request.lockPeriodDays,
        lockEndDate: new Date(response.unlockDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        status: response.status,
        txHash: response.transactionHash,
        isNew: true
      };
      return { ...current, positions: [...current.positions, newPosition] };
    });
    return response;
  }, []);

  const submitClaimRewards = useCallback(async () => {
    const response = await claimRewards();
    setData((current) => {
      if (!current) return current;
      const claimedDate = new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
      return {
        ...current,
        rewardHistory: [
          {
            epoch: 128,
            distributionDate: claimedDate,
            rewards: 1245.8,
            usdValue: 1245.8,
            boostApplied: totalBoost,
            status: 'Claimed',
            txHash: response.transactionHash
          },
          ...current.rewardHistory
        ]
      };
    });
    return response;
  }, [totalBoost]);

  const saveAutoCompound = useCallback(async (settings: DashboardData['autoCompound']) => {
    await updateAutoCompoundSettings(settings);
    setData((current) => (current ? { ...current, autoCompound: settings } : current));
  }, []);

  const setPositionLock = useCallback((positionId: string, days: number, boost: number) => {
    setData((current) => {
      if (!current) return current;
      return {
        ...current,
        positions: current.positions.map((position) =>
          position.id === positionId
            ? {
                ...position,
                lockPeriodDays: days,
                apr: Number((position.apr + boost / 10).toFixed(2))
              }
            : position
        )
      };
    });
  }, []);

  return {
    data,
    loading,
    error,
    totalBoost,
    submitStake,
    submitClaimRewards,
    saveAutoCompound,
    setPositionLock
  };
}
