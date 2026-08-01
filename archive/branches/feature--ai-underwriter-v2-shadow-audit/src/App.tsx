import { useState } from 'react';
import { Shell } from './components/Shell';
import { LenderPool } from './pages/LenderPool';
import { ModulePage } from './pages/ModulePage';
import { GeneralPublicMain } from './pages/GeneralPublicMain';
import { DealerDashboardMain } from './pages/DealerDashboardMain';
import { AdminMain } from './pages/AdminMain';
import { AIUnderwriterCommandCenter } from './pages/AIUnderwriterCommandCenter';
import { AIUnderwriterBureauAudit } from './pages/AIUnderwriterBureauAudit';
import { AIUnderwriterIncomeAudit } from './pages/AIUnderwriterIncomeAudit';
import { AIUnderwriterEmploymentAudit } from './pages/AIUnderwriterEmploymentAudit';
import { AIUnderwriterResidenceAudit } from './pages/AIUnderwriterResidenceAudit';
import { AIUnderwriterWalletAudit } from './pages/AIUnderwriterWalletAudit';
import { AIUnderwriterOnChainAudit } from './pages/AIUnderwriterOnChainAudit';
import { AIUnderwriterVehicleAudit } from './pages/AIUnderwriterVehicleAudit';
import { AIUnderwriterCollateralAudit } from './pages/AIUnderwriterCollateralAudit';
import { AIUnderwriterMarketRiskAudit } from './pages/AIUnderwriterMarketRiskAudit';
import { AIUnderwriterApprovalProbability } from './pages/AIUnderwriterApprovalProbability';
import { AIUnderwriterDefaultRisk } from './pages/AIUnderwriterDefaultRisk';
import { AIUnderwriterBestFundingSource } from './pages/AIUnderwriterBestFundingSource';
import { AIUnderwriterYieldToLenders } from './pages/AIUnderwriterYieldToLenders';
import { AIUnderwriterFinalAction } from './pages/AIUnderwriterFinalAction';
import { AIUnderwriterAuditProgramSettings } from './pages/AIUnderwriterAuditProgramSettings';
import { AIUnderwriterBackendBrainConsole } from './pages/AIUnderwriterBackendBrainConsole';

export default function App() {
  const [activeView, setActiveView] = useState('general-public-main');

  let content = <ModulePage id={activeView} />;
  if (activeView === 'general-public-main') content = <GeneralPublicMain onNavigate={setActiveView} />;
  if (activeView === 'dealer-dashboard-main') content = <DealerDashboardMain onNavigate={setActiveView} />;
  if (activeView === 'admin-main') content = <AdminMain onNavigate={setActiveView} />;
  if (activeView === 'lender-pool') content = <LenderPool />;
  if (activeView === 'ai-underwriter-v2') content = <AIUnderwriterCommandCenter onNavigate={setActiveView} />;
  if (activeView === 'ai-underwriter-v2-backend-brain') content = <AIUnderwriterBackendBrainConsole />;
  if (activeView === 'ai-underwriter-v2-bureau') content = <AIUnderwriterBureauAudit />;
  if (activeView === 'ai-underwriter-v2-income') content = <AIUnderwriterIncomeAudit />;
  if (activeView === 'ai-underwriter-v2-employment') content = <AIUnderwriterEmploymentAudit />;
  if (activeView === 'ai-underwriter-v2-residence') content = <AIUnderwriterResidenceAudit />;
  if (activeView === 'ai-underwriter-v2-wallet') content = <AIUnderwriterWalletAudit />;
  if (activeView === 'ai-underwriter-v2-on-chain') content = <AIUnderwriterOnChainAudit />;
  if (activeView === 'ai-underwriter-v2-vehicle') content = <AIUnderwriterVehicleAudit />;
  if (activeView === 'ai-underwriter-v2-collateral') content = <AIUnderwriterCollateralAudit />;
  if (activeView === 'ai-underwriter-v2-market-risk') content = <AIUnderwriterMarketRiskAudit />;
  if (activeView === 'ai-underwriter-v2-approval-probability') content = <AIUnderwriterApprovalProbability />;
  if (activeView === 'ai-underwriter-v2-default-risk') content = <AIUnderwriterDefaultRisk />;
  if (activeView === 'ai-underwriter-v2-best-funding-source') content = <AIUnderwriterBestFundingSource />;
  if (activeView === 'ai-underwriter-v2-yield-to-lenders') content = <AIUnderwriterYieldToLenders />;
  if (activeView === 'ai-underwriter-v2-final-action') content = <AIUnderwriterFinalAction />;
  if (activeView === 'ai-underwriter-v2-audit-program-settings') content = <AIUnderwriterAuditProgramSettings />;

  return (
    <Shell activeView={activeView} onNavigate={setActiveView}>
      {content}
    </Shell>
  );
}
