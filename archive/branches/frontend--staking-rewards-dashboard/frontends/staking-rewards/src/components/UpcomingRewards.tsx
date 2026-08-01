import type { UpcomingReward } from '../types';
import clock from '../assets/svg/icon-clock.svg';

export function UpcomingRewards({ rewards }: { rewards: UpcomingReward[] }) {
  return (
    <section className="panel upcoming-panel">
      <div className="row-between panel-heading">
        <h2>Upcoming Rewards <span>ⓘ</span></h2>
        <a href="#schedule">View Full Schedule →</a>
      </div>
      <div className="upcoming-list">
        {rewards.map((reward) => (
          <div key={reward.epoch}>
            <img src={clock} alt="" />
            <p>Epoch #{reward.epoch}<small>{reward.date}</small></p>
            <b>+{reward.rewardAmount.toFixed(2)} ADF<small>${reward.usdValue.toFixed(2)}</small></b>
          </div>
        ))}
      </div>
    </section>
  );
}
