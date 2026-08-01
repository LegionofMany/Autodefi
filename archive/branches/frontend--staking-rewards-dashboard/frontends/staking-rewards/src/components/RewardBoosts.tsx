import type { BoostSetting, RewardSource } from '../types';

export function RewardBoosts({ boosts, rewardSources, showDistribution }: { boosts: BoostSetting[]; rewardSources: RewardSource[]; showDistribution: boolean }) {
  return (
    <section className="panel reward-boosts-panel">
      <div className="row-between panel-heading">
        <h2>{showDistribution ? 'Rewards Distribution' : 'Reward Boosts'} <span>ⓘ</span></h2>
        {!showDistribution && <a href="#boosts">Manage Boosts →</a>}
      </div>
      {showDistribution ? (
        <div className="boost-list source-list">
          {rewardSources.map((item) => (
            <div key={item.label}>
              <img src={item.icon} alt="" />
              <p>{item.label}<small>{item.description}</small></p>
              <b>+{item.percent.toFixed(1)}%</b>
            </div>
          ))}
          <div className="row-between total-row"><span>Total Rewards Source</span><strong>100%</strong></div>
        </div>
      ) : (
        <div className="boost-list">
          {boosts.map((boost) => (
            <div key={boost.id}>
              <img src={boost.icon} alt="" />
              <p>{boost.label}<small>{boost.description}</small></p>
              <b>+{boost.percent.toFixed(1)}%</b>
            </div>
          ))}
          <div className="row-between total-row"><span>Total Boost</span><strong>+{boosts.reduce((sum, b) => sum + b.percent, 0).toFixed(1)}%</strong></div>
        </div>
      )}
    </section>
  );
}
