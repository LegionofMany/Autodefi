import { useState } from 'react';
import type { DashboardData } from '../../types';
import { ModalFrame } from './ModalFrame';
import calendar from '../../assets/svg/icon-calendar.svg';

export function StakingSettingsModal({ data, onSave, onClose }: { data: DashboardData; onSave: (settings: DashboardData['autoCompound']) => Promise<unknown>; onClose: () => void }) {
  const [settings, setSettings] = useState(data.autoCompound);
  const [saving, setSaving] = useState(false);

  async function save() {
    setSaving(true);
    try {
      await onSave(settings);
      onClose();
    } finally {
      setSaving(false);
    }
  }

  return (
    <ModalFrame title="Staking Settings" onClose={onClose}>
      <div className="settings-tabs"><button className="active">AutoCompound</button><button>Notifications</button><button>Security</button><button>Preferences</button></div>
      <section className="modal-card settings-card">
        <h3>AutoCompound Settings <span>ⓘ</span></h3>
        <p>Automatically compound your rewards to maximize your earnings.</p>
        <label className="settings-row"><span>Enable AutoCompound<small>Compound rewards automatically</small></span><button className={`switch large ${settings.enabled ? 'on' : ''}`} onClick={() => setSettings({ ...settings, enabled: !settings.enabled })} /></label>
        <label className="settings-row"><span>Compound Frequency<small>Choose how often to compound</small></span><select value={settings.frequency} onChange={(e) => setSettings({ ...settings, frequency: e.target.value as DashboardData['autoCompound']['frequency'] })}><option>Weekly</option><option>Monthly</option><option>Every Epoch</option><option>Manual</option></select></label>
        <label className="settings-row"><span>Minimum Reward Threshold<small>Only compound when rewards are above</small></span><div className="input-suffix"><input value={settings.minimumRewardThresholdADF} onChange={(e) => setSettings({ ...settings, minimumRewardThresholdADF: Number(e.target.value) })} /><b>ADF</b></div></label>
        <label className="settings-row"><span>Gas Limit (ETH)<small>Maximum gas to use per transaction</small></span><div className="input-suffix"><input value={settings.gasLimitEth} onChange={(e) => setSettings({ ...settings, gasLimitEth: Number(e.target.value) })} /><b>ETH</b></div></label>
        <label className="settings-row"><span>Next AutoCompound<small>Estimated next compound execution</small></span><div className="next-exec"><img src={calendar} alt="" />{settings.nextExecution}</div></label>
      </section>
      <div className="info-callout">AutoCompound helps you grow your rewards by automatically reinvesting them back into your staking position.</div>
      <div className="settings-actions"><button className="secondary-button" onClick={() => setSettings(data.autoCompound)}>Reset to Default</button><button className="primary-button" onClick={save}>{saving ? 'Saving...' : 'Save Settings'}</button></div>
    </ModalFrame>
  );
}
