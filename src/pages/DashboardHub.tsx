import { useMemo, useState } from 'react';
import { useActionCenter } from '../components/ActionCenter';
import { dashboardRegistry } from '../data/autodefiData';
import { dashboardGraphicSets } from '../data/svgAssets';

type DashboardHubProps = {
  onNavigate: (id: string) => void;
};

export function DashboardHub({ onNavigate }: DashboardHubProps) {
  const [query, setQuery] = useState('');
  const [group, setGroup] = useState<'all' | 'core' | 'portal' | 'operations' | 'dao'>('all');
  const { openAction } = useActionCenter();
  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return dashboardRegistry.filter((dashboard) => {
      const groupMatch = group === 'all' || dashboard.group === group;
      const queryMatch = !normalized || `${dashboard.label} ${dashboard.description} ${dashboard.group}`.toLowerCase().includes(normalized);
      return groupMatch && queryMatch;
    });
  }, [group, query]);

  return (
    <main className="portal-hub">
      <header className="portal-hub-header">
        <a className="portal-brand" href="#dashboard-hub" aria-label="AutoDeFi portal hub">
          <img src="/assets/svg/logo.svg" alt="" />
          <span><b>AUTO<em>DEFI</em></b><small>Portal Workspace</small></span>
        </a>
        <div className="portal-hub-status"><i /> System operational</div>
        <button type="button" className="portal-wallet" onClick={() => openAction('Connect wallet', 'Choose a supported wallet to continue.', ['HashPack', 'MetaMask', 'WalletConnect'])}>Connect wallet</button>
      </header>

      <section className="portal-hub-hero">
        <span>AutoDeFi operating system</span>
        <h1>Choose your portal</h1>
        <p>One connected workspace for automotive finance, lending, governance, risk, and recovery.</p>
        <div className="portal-hub-stats">
          <div><strong>27</strong><small>Specialized portals</small></div>
          <div><strong>24/7</strong><small>Portfolio visibility</small></div>
          <div><strong>HBAR</strong><small>Hedera network</small></div>
        </div>
      </section>

      <section className="portal-hub-controls" aria-label="Portal filters">
        <label><span>⌕</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search dashboards and portals…" /></label>
        <div className="portal-group-filters">
          {(['all', 'core', 'portal', 'operations', 'dao'] as const).map((item) => (
            <button type="button" key={item} className={group === item ? 'active' : ''} aria-pressed={group === item} onClick={() => setGroup(item)}>{item === 'all' ? 'All portals' : item}</button>
          ))}
        </div>
      </section>

      <section className="portal-launch-grid" aria-live="polite">
        {filtered.map((dashboard) => {
          const graphic = dashboardGraphicSets[dashboard.id]?.[0];
          return (
            <button type="button" className={`portal-launch-card tone-${dashboard.tone}`} key={dashboard.id} onClick={() => onNavigate(dashboard.id)}>
              <span className="portal-launch-visual">{graphic ? <img src={graphic.src} alt="" loading="lazy" /> : null}<i /></span>
              <span className="portal-launch-copy">
                <small>{dashboard.group}</small>
                <strong>{dashboard.label}</strong>
                <em>{dashboard.description}</em>
                <b>Open portal <span>→</span></b>
              </span>
            </button>
          );
        })}
      </section>
      {!filtered.length ? <div className="portal-empty"><strong>No matching portal</strong><p>Try another name or reset the category filter.</p><button type="button" onClick={() => { setQuery(''); setGroup('all'); }}>Show all portals</button></div> : null}
    </main>
  );
}
