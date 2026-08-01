import { useState } from 'react';
import { Shell } from './components/Shell';
import { VoteLayout } from './components/VoteLayout';
import { LenderPool } from './pages/LenderPool';
import { ModulePage } from './pages/ModulePage';
import { VoteDetails } from './pages/VoteDetails';

export default function App() {
  const [activeView, setActiveView] = useState('vote');

  if (activeView === 'vote') {
    return (
      <VoteLayout activeView={activeView} onNavigate={setActiveView}>
        <VoteDetails />
      </VoteLayout>
    );
  }

  return (
    <Shell activeView={activeView} onNavigate={setActiveView}>
      {activeView === 'lender-pool' ? <LenderPool /> : <ModulePage id={activeView} />}
    </Shell>
  );
}
