import { useState } from 'react';
import { Shell } from './components/Shell';
import DealerPortal from './components/dealer/DealerPortal';
import { LenderPool } from './pages/LenderPool';
import { ModulePage } from './pages/ModulePage';

export default function App() {
  const [activeView, setActiveView] = useState('dealer-portal');

  if (activeView === 'dealer-portal') {
    return <DealerPortal />;
  }

  return (
    <Shell activeView={activeView} onNavigate={setActiveView}>
      {activeView === 'lender-pool' ? <LenderPool /> : <ModulePage id={activeView} />}
    </Shell>
  );
}
