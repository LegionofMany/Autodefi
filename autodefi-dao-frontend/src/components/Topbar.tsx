import { brandAssets, icons } from '../assets';
import { Icon } from './Icon';
import type { DaoMetrics } from '../types/governance';

interface TopbarProps {
  metrics: DaoMetrics;
  onCreateProposal?: () => void;
}

export function Topbar({ metrics, onCreateProposal }: TopbarProps) {
  return (
    <header className="topbar">
      <div>
        <h1>Proposals</h1>
        <p>Create, review and vote on proposals that shape the future of AutoDeFi.</p>
      </div>
      <div className="top-actions">
        <div className="price-pill">
          <img src={brandAssets.tokenAdf} alt="ADF" />
          <span>ADF</span>
          <strong>${metrics.adfPriceUsd.toFixed(4)}</strong>
          <em>+{metrics.adfChangePct.toFixed(2)}%</em>
        </div>
        <button className="icon-button notification" type="button" aria-label="Notifications">
          <Icon src={icons.bell} />
          <span>12</span>
        </button>
        <button className="wallet-button" type="button" aria-label="Connected wallet">
          <span className="wallet-orb" />
          <span>{metrics.connectedWallet}</span>
          <Icon src={icons.chevronDown} />
        </button>
      </div>
      <button className="create-button mobile-create" type="button" onClick={onCreateProposal}>
        <Icon src={icons.plus} /> Create Proposal
      </button>
    </header>
  );
}
