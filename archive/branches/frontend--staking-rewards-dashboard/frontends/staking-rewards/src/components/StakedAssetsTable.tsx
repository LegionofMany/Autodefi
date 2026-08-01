import { useState } from 'react';
import type { StakePosition } from '../types';
import adfBlue from '../assets/svg/adf-blue.svg';
import adfOrange from '../assets/svg/adf-orange.svg';
import adfRed from '../assets/svg/adf-red.svg';
import plus from '../assets/svg/icon-plus.svg';
import chevron from '../assets/svg/icon-chevron.svg';
import external from '../assets/svg/icon-external.svg';

interface Props {
  positions: StakePosition[];
  onOpenStake: () => void;
  onOpenLock: (position: StakePosition) => void;
}

const tierIcon = { 1: adfBlue, 2: adfOrange, 3: adfRed } as const;

export function StakedAssetsTable({ positions, onOpenStake, onOpenLock }: Props) {
  const [openMenuId, setOpenMenuId] = useState<string | null>(null);

  return (
    <section className="panel staked-assets-panel">
      <div className="panel-title-row">
        <h2>My Staked Assets</h2>
      </div>
      <div className="table-wrap">
        <table className="staking-table">
          <thead>
            <tr>
              <th>Asset</th>
              <th>Staked Amount</th>
              <th>USD Value</th>
              <th>APR</th>
              <th>Pending Rewards</th>
              <th>Lock Period</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {positions.map((position) => (
              <tr key={position.id} className={position.isNew ? 'new-position' : ''}>
                <td>
                  <div className="asset-cell">
                    {position.isNew && <span className="row-new-label">NEW</span>}
                    <img src={tierIcon[position.tier]} alt="ADF" />
                    <span><strong>ADF</strong><small>AutoDeFi Token<br /><b className={`risk risk-${position.tier}`}>{position.riskLabel}</b></small></span>
                    <i className={`tier-pill tier-${position.tier}`}>Tier {position.tier}</i>
                  </div>
                </td>
                <td><strong>{position.stakedAmount.toLocaleString()} ADF</strong><small>${position.stakedAmount.toLocaleString()}</small></td>
                <td>${position.usdValue.toLocaleString(undefined, { minimumFractionDigits: 2 })}</td>
                <td className="apr">{position.apr.toFixed(2)}%</td>
                <td><strong>{position.pendingRewards.toLocaleString(undefined, { minimumFractionDigits: 2 })} ADF</strong><small>${position.pendingRewardsUsd.toFixed(2)}</small></td>
                <td><strong>{position.lockPeriodDays} Days</strong><small>{position.lockEndDate}</small></td>
                <td><span className={`status ${position.status.toLowerCase().replace(/\s+/g, '-')}`}>{position.status}</span></td>
                <td className="actions-cell">
                  <button className="manage-button" onClick={() => setOpenMenuId(openMenuId === position.id ? null : position.id)}>Manage</button>
                  <button className="manage-arrow" onClick={() => setOpenMenuId(openMenuId === position.id ? null : position.id)}><img src={chevron} alt="" /></button>
                  {openMenuId === position.id && (
                    <div className="manage-menu">
                      <button onClick={onOpenStake}>Increase Stake</button>
                      <button onClick={() => onOpenLock(position)}>Extend Lock</button>
                      <button>Claim Rewards</button>
                      <button>Enable AutoCompound</button>
                      <button>View Details</button>
                      <button>View Contract <img src={external} alt="" /></button>
                      <button className="danger">Request Unstake <small>Available after lock period</small></button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="add-stake-row">
        <div>
          <img src={plus} alt="" />
          <span><strong>Add More Stake</strong><small>Stake more tokens to grow your rewards and increase your staking power.</small></span>
        </div>
        <button className="primary-button" onClick={onOpenStake}>Stake Now</button>
      </div>
    </section>
  );
}
