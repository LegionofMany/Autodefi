import { useState } from 'react';
import { Shell } from './components/Shell';
import { LenderPool } from './pages/LenderPool';
import { ModulePage } from './pages/ModulePage';

export default function App() {
  const [activeView, setActiveView] = useState('lender-pool');
  return (
    <Shell activeView={activeView} onNavigate={setActiveView}>
      {activeView === 'lender-pool' ? <LenderPool /> : <ModulePage id={activeView} />}
    </Shell>
  );
}
