import { useState } from 'react';
import { Shell } from './components/Shell';
import { LenderPool } from './pages/LenderPool';
import { LoanServicing } from './pages/LoanServicing';
import { ModulePage } from './pages/ModulePage';

export default function App() {
  const [activeView, setActiveView] = useState('loan-servicing');
  return (
    <Shell activeView={activeView} onNavigate={setActiveView}>
      {activeView === 'lender-pool' ? <LenderPool /> : activeView === 'loan-servicing' ? <LoanServicing /> : <ModulePage id={activeView} />}
    </Shell>
  );
}
