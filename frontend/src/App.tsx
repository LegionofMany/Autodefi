import { ReactNode, useState } from 'react';
import type { NavKey } from './types/autodefi';
import { AppShell } from './components/AppShell';
import { Dashboard } from './pages/Dashboard';
import { PreQualification } from './pages/PreQualification';
import { Application } from './pages/Application';
import { Loans } from './pages/Loans';
import { Payments } from './pages/Payments';
import { AutoPay } from './pages/AutoPay';
import { Refinance } from './pages/Refinance';
import { Insurance } from './pages/Insurance';
import { Documents } from './pages/Documents';
import { Collateral } from './pages/Collateral';
import { Rewards } from './pages/Rewards';
import { Wallet } from './pages/Wallet';
import { Support } from './pages/Support';
import { Settings } from './pages/Settings';

const screens: Record<NavKey, ReactNode> = {
  dashboard: <Dashboard />,
  prequal: <PreQualification />,
  application: <Application />,
  loans: <Loans />,
  payments: <Payments />,
  autopay: <AutoPay />,
  refinance: <Refinance />,
  insurance: <Insurance />,
  documents: <Documents />,
  collateral: <Collateral />,
  rewards: <Rewards />,
  wallet: <Wallet />,
  support: <Support />,
  settings: <Settings />
};

export default function App() {
  const [active, setActive] = useState<NavKey>('dashboard');
  return <AppShell active={active} onNavigate={setActive}>{screens[active]}</AppShell>;
}
