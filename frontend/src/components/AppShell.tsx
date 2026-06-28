import type { ReactNode } from 'react';
import { Bell, Car, CircleDollarSign, ClipboardList, FileText, Gauge, Gift, Headphones, Home, Landmark, MessageSquare, RefreshCcw, Settings, ShieldCheck, WalletCards } from 'lucide-react';
import type { NavKey } from '../types/autodefi';
import { profile } from '../data/autodefi';

const nav: { key: NavKey; label: string; icon: ReactNode; fresh?: boolean }[] = [
  { key: 'dashboard', label: 'Dashboard', icon: <Home size={18}/> },
  { key: 'prequal', label: 'Pre-Qualification', icon: <Car size={18}/> },
  { key: 'application', label: 'Loan Application', icon: <ClipboardList size={18}/> },
  { key: 'loans', label: 'My Loans', icon: <Car size={18}/> },
  { key: 'payments', label: 'Payments', icon: <CircleDollarSign size={18}/> },
  { key: 'autopay', label: 'AutoPay', icon: <RefreshCcw size={18}/> },
  { key: 'refinance', label: 'Refinance', icon: <Gauge size={18}/> },
  { key: 'insurance', label: 'Insurance & Protection', icon: <ShieldCheck size={18}/> },
  { key: 'documents', label: 'Documents', icon: <FileText size={18}/> },
  { key: 'collateral', label: 'Collateral', icon: <Landmark size={18}/> },
  { key: 'rewards', label: 'Rewards', icon: <Gift size={18}/>, fresh: true },
  { key: 'wallet', label: 'Wallet', icon: <WalletCards size={18}/> },
  { key: 'support', label: 'Support', icon: <Headphones size={18}/> },
  { key: 'settings', label: 'Settings', icon: <Settings size={18}/> }
];

export function AppShell({ active, onNavigate, children }: { active: NavKey; onNavigate: (key: NavKey)=>void; children: ReactNode }) {
  return <div className="app-shell">
    <aside className="sidebar">
      <div className="brand"><div className="ad-logo">AD</div><div><h1>AUTODEFI</h1><span>BORROWER PORTAL</span></div></div>
      <div className="profile"><div className="avatar">MJ</div><div><h3>{profile.name}</h3><p>{profile.status} ✓</p><span>Member since {profile.memberSince}</span></div></div>
      <nav>{nav.map(item => <button key={item.key} onClick={() => onNavigate(item.key)} className={active === item.key ? 'active' : ''}>{item.icon}<span>{item.label}</span>{item.fresh && <em>NEW</em>}</button>)}</nav>
      <div className="sidebar-card"><h3>{active === 'support' ? 'We’re here to help.' : active === 'wallet' ? 'Add funds. Unlock more opportunities.' : 'Lower your rate with staking'}</h3><p>ADF utility, stable-value rails, and on-chain verification connect this borrower portal to the AutoDeFi loan pool.</p><button>{active === 'support' ? 'Contact Support' : active === 'wallet' ? 'Add Funds' : 'Explore Benefits'}</button></div>
    </aside>
    <main className="main">
      <header className="topbar"><div></div><div className="top-actions"><button><Bell size={20}/><b>8</b></button><button><MessageSquare size={20}/><b>3</b></button><button className="wallet-chip"><span></span>{profile.wallet}<small>Connected Wallet</small></button></div></header>
      {children}
    </main>
  </div>;
}
