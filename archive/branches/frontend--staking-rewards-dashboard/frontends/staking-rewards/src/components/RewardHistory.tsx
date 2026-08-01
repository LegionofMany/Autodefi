import type { RewardHistoryItem } from '../types';
import external from '../assets/svg/icon-external.svg';

export function RewardHistory({ history }: { history: RewardHistoryItem[] }) {
  return (
    <section className="panel history-panel">
      <h2>Reward History</h2>
      <div className="table-wrap">
        <table className="history-table">
          <thead><tr><th>Epoch</th><th>Distribution Date</th><th>Rewards</th><th>USD Value</th><th>Boost Applied</th><th>Status</th><th>Tx Hash</th></tr></thead>
          <tbody>
            {history.map((item) => (
              <tr key={`${item.epoch}-${item.txHash}`}>
                <td>#{item.epoch}</td>
                <td>{item.distributionDate}</td>
                <td className="green">+{item.rewards.toFixed(2)} ADF</td>
                <td>${item.usdValue.toFixed(2)}</td>
                <td>+{item.boostApplied.toFixed(1)}%</td>
                <td><span className="claimed">{item.status}</span></td>
                <td><a href={`https://hashscan.io/mainnet/transaction/${item.txHash}`} target="_blank" rel="noreferrer">{item.txHash} <img src={external} alt="" /></a></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <a href="#history" className="view-all">View All Reward History →</a>
    </section>
  );
}
