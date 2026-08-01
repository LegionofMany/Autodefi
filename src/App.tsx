import { useCallback, useEffect, useState } from 'react';
import { Shell } from './components/Shell';
import DealerPortal from './components/dealer/DealerPortal';
import { navItems } from './data/autodefiData';
import { DashboardHub } from './pages/DashboardHub';
import { LenderPool } from './pages/LenderPool';
import { ModulePage } from './pages/ModulePage';

export default function App() {
  const resolveView = useCallback(() => {
    if (typeof window === 'undefined') return 'dashboard-hub';
    const requested = decodeURIComponent(window.location.hash.slice(1));
    return navItems.some((item) => item.id === requested) ? requested : 'dashboard-hub';
  }, []);
  const [activeView, setActiveView] = useState(resolveView);

  const navigate = useCallback((id: string) => {
    const next = navItems.some((item) => item.id === id) ? id : 'dashboard-hub';
    setActiveView(next);
    if (typeof window === 'undefined') return;
    const nextHash = `#${encodeURIComponent(next)}`;
    if (window.location.hash !== nextHash) window.history.pushState({ view: next }, '', nextHash);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  useEffect(() => {
    const syncFromHistory = () => setActiveView(resolveView());
    window.addEventListener('popstate', syncFromHistory);
    window.addEventListener('hashchange', syncFromHistory);
    return () => {
      window.removeEventListener('popstate', syncFromHistory);
      window.removeEventListener('hashchange', syncFromHistory);
    };
  }, [resolveView]);

  if (activeView === 'dealer-portal') {
    return <DealerPortal onExit={() => navigate('dashboard-hub')} />;
  }

  return (
    <Shell activeView={activeView} onNavigate={navigate}>
      {activeView === 'dashboard-hub' ? (
        <DashboardHub onNavigate={navigate} />
      ) : activeView === 'lender-pool' ? (
        <LenderPool />
      ) : (
        <ModulePage id={activeView} />
      )}
    </Shell>
  );
}
