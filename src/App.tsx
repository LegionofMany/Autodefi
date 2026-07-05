import { useState } from 'react';
import { Shell } from './components/Shell';
import { LenderPool } from './pages/LenderPool';
import { ModulePage } from './pages/ModulePage';
import { AIUnderwriterCommandCenter } from './pages/AIUnderwriterCommandCenter';
import { AIUnderwriterBureauAudit } from './pages/AIUnderwriterBureauAudit';
import { AIUnderwriterIncomeAudit } from './pages/AIUnderwriterIncomeAudit';

export default function App() {
  const [activeView, setActiveView] = useState('lender-pool');

  let content = <ModulePage id={activeView} />;
  if (activeView === 'lender-pool') content = <LenderPool />;
  if (activeView === 'ai-underwriter-v2') content = <AIUnderwriterCommandCenter />;
  if (activeView === 'ai-underwriter-v2-bureau') content = <AIUnderwriterBureauAudit />;
  if (activeView === 'ai-underwriter-v2-income') content = <AIUnderwriterIncomeAudit />;

  return (
    <Shell activeView={activeView} onNavigate={setActiveView}>
      {content}
    </Shell>
  );
}
