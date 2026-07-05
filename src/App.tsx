import { useState } from 'react';
import { Shell } from './components/Shell';
import { InsurancePoolSuite } from './pages/InsurancePoolSuite';
import { LenderPool } from './pages/LenderPool';
import { ModulePage } from './pages/ModulePage';

export default function App() {
  const [activeView, setActiveView] = useState('insurance-pool-suite');
  return (
    <Shell activeView={activeView} onNavigate={setActiveView}>
      {activeView === 'lender-pool' ? <LenderPool /> : activeView === 'insurance-pool-suite' ? <InsurancePoolSuite /> : <ModulePage id={activeView} />}
    </Shell>
  );
}
