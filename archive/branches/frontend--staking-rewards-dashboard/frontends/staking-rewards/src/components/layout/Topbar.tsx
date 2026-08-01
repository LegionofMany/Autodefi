import bellIcon from '../../assets/svg/icon-bell.svg';
import orb from '../../assets/svg/adf-orb.svg';
import adfBlue from '../../assets/svg/adf-blue.svg';
import chevron from '../../assets/svg/icon-chevron.svg';

interface TopbarProps {
  price: number;
  change: number;
  shortAddress: string;
}

export function Topbar({ price, change, shortAddress }: TopbarProps) {
  return (
    <header className="topbar">
      <div className="token-chip">
        <img src={adfBlue} alt="ADF" />
        <span>ADF</span>
        <strong>${price.toFixed(4)}</strong>
        <b>+ {change.toFixed(2)}%</b>
      </div>
      <button className="notification-button" aria-label="Notifications">
        <img src={bellIcon} alt="" />
        <span>12</span>
      </button>
      <button className="wallet-button">
        <img src={orb} alt="Wallet avatar" />
        <span><strong>{shortAddress}</strong><small>Connected</small></span>
        <img src={chevron} alt="" />
      </button>
    </header>
  );
}
