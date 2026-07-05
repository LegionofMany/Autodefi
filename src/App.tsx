import { useState } from 'react';
import { Shell } from './components/Shell';
import { LenderPool } from './pages/LenderPool';
import { ModulePage } from './pages/ModulePage';
import { AIUnderwriterCommandCenter } from './pages/AIUnderwriterCommandCenter';
import { AIUnderwriterBureauAudit } from './pages/AIUnderwriterBureauAudit';
import { AIUnderwriterIncomeAudit } from './pages/AIUnderwriterIncomeAudit';
import { AIUnderwriterEmploymentAudit } from './pages/AIUnderwriterEmploymentAudit';
import { AIUnderwriterResidenceAudit } from './pages/AIUnderwriterResidenceAudit';
import { AIUnderwriterWalletAudit } from './pages/AIUnderwriterWalletAudit';
import { AIUnderwriterOnChainAudit } from './pages/AIUnderwriterOnChainAudit';
import { AIUnderwriterVehicleAudit } from './pages/AIUnderwriterVehicleAudit';
import { AIUnderwriterCollateralAudit } from './pages/AIUnderwriterCollateralAudit';

export default function App() {
  const [activeView, setActiveView] = useState('lender-pool');

  let content = <ModulePage id={activeView} />;
  if (activeView === 'lender-pool') content = <LenderPool />;
  if (activeView === 'ai-underwriter-v2') content = <AIUnderwriterCommandCenter />;
  if (activeView === 'ai-underwriter-v2-bureau') content = <AIUnderwriterBureauAudit />;
  if (activeView === 'ai-underwriter-v2-income') content = <AIUnderwriterIncomeAudit />;
  if (activeView === 'ai-underwriter-v2-employment') content = <AIUnderwriterEmploymentAudit />;
  if (activeView === 'ai-underwriter-v2-residence') content = <AIUnderwriterResidenceAudit />;
  if (activeView === 'ai-underwriter-v2-wallet') content = <AIUnderwriterWalletAudit />;
  if (activeView === 'ai-underwriter-v2-on-chain') content = <AIUnderwriterOnChainAudit />;
  if (activeView === 'ai-underwriter-v2-vehicle') content = <AIUnderwriterVehicleAudit />;
  if (activeView === 'ai-underwriter-v2-collateral') content = <AIUnderwriterCollateralAudit />;

  return (
    <Shell activeView={activeView} onNavigate={setActiveView}>
      {content}
    </Shell>
  );
}
