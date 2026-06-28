import { useState } from 'react';
import { Shell } from './components/Shell';
import { LenderPool } from './pages/LenderPool';
import { ModulePage } from './pages/ModulePage';
import { VoteDetails } from './pages/VoteDetails';

export default function App() {
  const [activeView, setActiveView] = useState('vote');

  return (
    <Shell activeView={activeView} onNavigate={setActiveView}>
      {activeView === 'lender-pool' ? <LenderPool /> : activeView === 'vote' ? <VoteDetails /> : <ModulePage id={activeView} />}
    </Shell>
  );
}
