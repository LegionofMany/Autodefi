import { useState } from 'react';
import { Shell } from './components/Shell';
import { LenderPool } from './pages/LenderPool';
import { ModulePage } from './pages/ModulePage';
import { TreasuryManagementCenter } from './pages/TreasuryManagementCenter';

export default function App() {
  const [activeView, setActiveView] = useState('treasury');

  if (activeView === 'treasury') {
    return <TreasuryManagementCenter onBack={() => setActiveView('dashboard')} />;
  }

  return (
    <Shell activeView={activeView} onNavigate={setActiveView}>
      {activeView === 'lender-pool' ? <LenderPool /> : <ModulePage id={activeView} />}
    </Shell>
  );
}
