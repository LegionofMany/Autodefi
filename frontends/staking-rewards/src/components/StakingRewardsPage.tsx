import { useState } from 'react';
import type { StakePosition } from '../types';
import { useStakingDashboard } from '../hooks/useStakingDashboard';
import { Sidebar } from './layout/Sidebar';
import { Topbar } from './layout/Topbar';
import { StatCard } from './StatCard';
import { StakedAssetsTable } from './StakedAssetsTable';
import { RewardsSummary } from './RewardsSummary';
import { RewardBoosts } from './RewardBoosts';
import { UpcomingRewards } from './UpcomingRewards';
import { RewardPerformance } from './RewardPerformance';
import { RewardHistory } from './RewardHistory';
import { StakeAdfModal } from './modals/StakeAdfModal';
import { LockDurationModal } from './modals/LockDurationModal';
import { ClaimRewardsModal } from './modals/ClaimRewardsModal';
import { StakingSettingsModal } from './modals/StakingSettingsModal';

export function StakingRewardsPage() {
  const { data, loading, error, totalBoost, submitStake, submitClaimRewards, saveAutoCompound, setPositionLock } = useStakingDashboard();
  const [modal, setModal] = useState<'stake' | 'claim' | 'settings' | null>(null);
  const [lockPosition, setLockPosition] = useState<StakePosition | null>(null);

  if (loading) return <main className="screen-loading">Loading AutoDeFi staking rewards…</main>;
  if (error || !data) return <main className="screen-loading error">{error ?? 'AutoDeFi dashboard could not load.'}</main>;

  return (
    <div className="app-shell">
      <Sidebar />
      <main className="content-shell">
        <Topbar price={data.token.priceUsd} change={data.token.changePercent} shortAddress={data.wallet.shortAddress} />
        <section className="page-heading">
          <h1>Staking Rewards</h1>
          <p>Earn, compound and grow your rewards across the AutoDeFi ecosystem.</p>
        </section>
        <section className="stats-grid">{data.stats.map((stat) => <StatCard key={stat.id} stat={stat} />)}</section>
        <section className="dashboard-grid">
          <div className="main-column">
            <StakedAssetsTable positions={data.positions} onOpenStake={() => setModal('stake')} onOpenLock={setLockPosition} />
            <RewardPerformance series={data.performanceSeries} />
            <RewardHistory history={data.rewardHistory} />
          </div>
          <aside className="right-column">
            <RewardsSummary summary={data.rewardsSummary} onClaim={() => setModal('claim')} />
            <RewardBoosts boosts={data.boosts} rewardSources={data.rewardSources} showDistribution={data.positions.length > 3} />
            <UpcomingRewards rewards={data.upcomingRewards} />
          </aside>
        </section>
      </main>
      {modal === 'stake' && <StakeAdfModal data={data} totalBoost={totalBoost} onSubmit={submitStake} onClose={() => setModal(null)} />}
      {modal === 'claim' && <ClaimRewardsModal data={data} totalBoost={totalBoost} onClaim={submitClaimRewards} onClose={() => setModal(null)} />}
      {modal === 'settings' && <StakingSettingsModal data={data} onSave={saveAutoCompound} onClose={() => setModal(null)} />}
      {lockPosition && <LockDurationModal position={lockPosition} onConfirm={(days, boost) => setPositionLock(lockPosition.id, days, boost)} onClose={() => setLockPosition(null)} />}
      <button className="floating-settings" onClick={() => setModal('settings')}>AutoCompound Settings</button>
    </div>
  );
}
