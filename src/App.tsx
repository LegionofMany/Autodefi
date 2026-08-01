import { useState } from 'react';
import { Shell } from './components/Shell';
import DealerPortal from './components/dealer/DealerPortal';
import { DashboardHub } from './pages/DashboardHub';
import { LenderPool } from './pages/LenderPool';
import { ModulePage } from './pages/ModulePage';

export default function App() {
  const [activeView, setActiveView] = useState('dashboard-hub');

  if (activeView === 'dealer-portal') {
    return <DealerPortal />;
  }

  return (
    <Shell activeView={activeView} onNavigate={setActiveView}>
      {activeView === 'dashboard-hub' ? (
        <DashboardHub onNavigate={setActiveView} />
      ) : activeView === 'lender-pool' ? (
        <LenderPool />
      ) : (
        <ModulePage id={activeView} />
      )}
    </Shell>
  );
}
