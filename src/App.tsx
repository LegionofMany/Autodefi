import { useState } from 'react';
import { Shell } from './components/Shell';
import { LenderPool } from './pages/LenderPool';
import { ModulePage } from './pages/ModulePage';
import { AIUnderwriterCommandCenter } from './pages/AIUnderwriterCommandCenter';
import { AIUnderwriterBureauAudit } from './pages/AIUnderwriterBureauAudit';

export default function App() {
  const [activeView, setActiveView] = useState('lender-pool');

  let content = <ModulePage id={activeView} />;
  if (activeView === 'lender-pool') content = <LenderPool />;
  if (activeView === 'ai-underwriter-v2') content = <AIUnderwriterCommandCenter />;
  if (activeView === 'ai-underwriter-v2-bureau') content = <AIUnderwriterBureauAudit />;

  return (
    <Shell activeView={activeView} onNavigate={setActiveView}>
      {content}
    </Shell>
  );
}
