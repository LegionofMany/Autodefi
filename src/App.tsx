import { lazy, Suspense, useCallback, useEffect, useState } from 'react';
import { navItems } from './data/autodefiData';
import { DashboardHub } from './pages/DashboardHub';

const DealerPortal = lazy(() => import('./components/dealer/DealerPortal'));
const InteractivePortal = lazy(() => import('./pages/InteractivePortal').then((module) => ({ default: module.InteractivePortal })));
const Shell = lazy(() => import('./components/Shell').then((module) => ({ default: module.Shell })));
const LenderPool = lazy(() => import('./pages/LenderPool').then((module) => ({ default: module.LenderPool })));
const LoanServicing = lazy(() => import('./pages/LoanServicing').then((module) => ({ default: module.LoanServicing })));

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
    return <Suspense fallback={<div className="portal-route-loading">Loading Dealer Portal…</div>}><DealerPortal onExit={() => navigate('dashboard-hub')} /></Suspense>;
  }

  if (activeView === 'dashboard-hub') return <DashboardHub onNavigate={navigate} />;

  if (activeView === 'lender-pool' || activeView === 'loan-servicing') {
    return (
      <Suspense fallback={<div className="portal-route-loading">Opening portal…</div>}>
        <Shell activeView={activeView} onNavigate={navigate}>
          {activeView === 'lender-pool' ? <LenderPool /> : <LoanServicing />}
        </Shell>
      </Suspense>
    );
  }

  return <Suspense fallback={<div className="portal-route-loading">Opening portal…</div>}><InteractivePortal id={activeView} onNavigate={navigate} /></Suspense>;
}
