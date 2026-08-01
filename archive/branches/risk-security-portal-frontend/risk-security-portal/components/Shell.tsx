'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Bell, CalendarDays, ChevronDown, HelpCircle, Mail, ShieldCheck } from 'lucide-react';
import { mainNav, settingsNav } from '@/data/nav';

export function Shell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const inSettings = pathname.startsWith('/settings');
  return <div className="min-h-screen flex">
    <aside className="w-[250px] border-r border-line bg-ink/70 px-4 py-5 hidden xl:flex flex-col fixed inset-y-0 left-0 z-30">
      <div className="mb-8">
        <div className="text-3xl font-black tracking-tight"><span className="text-neon">AD</span> AUTODE<span className="text-neon">FI</span></div>
        <div className="text-xs uppercase tracking-widest text-slate-400 mt-1">Risk & Security Portal</div>
      </div>
      <nav className="space-y-1 flex-1">
        {mainNav.map((item) => {
          const Icon = item.icon;
          const active = pathname === item.href || (item.href === '/settings' && inSettings);
          return <Link key={item.href} href={item.href} className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition ${active ? 'bg-violet text-white shadow-violet' : 'text-slate-300 hover:bg-white/5'}`}><Icon size={18} />{item.label}</Link>;
        })}
      </nav>
      <SideStatus />
    </aside>
    <main className="xl:ml-[250px] flex-1 p-4 md:p-6">
      <Topbar />
      {children}
      <footer className="mt-6 border-t border-line py-4 text-xs text-slate-500 flex justify-between"><span>© 2025 AutoDeFi. All rights reserved.</span><span>Privacy Policy · Terms of Service · Trust Center</span></footer>
    </main>
  </div>;
}

export function Topbar() {
  return <div className="flex justify-end gap-3 mb-5">
    <div className="glass rounded-lg px-4 py-2 text-xs text-green flex items-center gap-2"><span className="status-dot bg-green" />Live Feed<br /><span className="text-[10px] -ml-1">Connected</span></div>
    <button className="glass rounded-lg px-3 relative"><Bell size={18} /><b className="absolute -top-2 -right-2 bg-violet text-xs rounded-full px-1.5">17</b></button>
    <button className="glass rounded-lg px-3 relative"><Mail size={18} /><b className="absolute -top-2 -right-2 bg-violet text-xs rounded-full px-1.5">9</b></button>
    <button className="glass rounded-lg px-4 py-2 text-sm flex gap-2 items-center"><CalendarDays size={16} /> May 1 – May 29, 2025 <ChevronDown size={14} /></button>
    <button className="glass rounded-lg px-4 py-2 text-sm flex gap-2 items-center"><HelpCircle size={16} /> Help</button>
  </div>;
}

function SideStatus() {
  return <div className="space-y-3">
    <div className="glass rounded-lg p-4"><div className="flex gap-3"><ShieldCheck className="text-green" /><div><b className="text-sm">Security Status</b><p className="text-green text-sm">All Systems Operational</p><p className="text-xs text-slate-500">Last updated: 2 min ago</p></div></div></div>
    <div className="glass rounded-lg p-4 text-sm"><b>Network Status</b><p className="text-green mt-3">Hedera Mainnet</p><p className="text-green">Healthy</p><div className="mt-4 grid grid-cols-2 gap-1 text-xs"><span>Node Sync</span><span className="text-right">100%</span><span>Consensus</span><span className="text-green text-right">Healthy</span><span>TPS (30m avg)</span><span className="text-right">1,245</span></div></div>
    <div className="glass rounded-lg p-3 flex gap-3 items-center"><div className="h-10 w-10 rounded-full bg-gradient-to-br from-slate-200 to-orange-300" /><div><b className="text-sm">John Risk Manager</b><p className="text-xs text-slate-400">Risk Administrator</p></div><ChevronDown size={14} className="ml-auto" /></div>
  </div>;
}

export function SettingsShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  return <Page title="Settings" subtitle="Manage your account, system preferences, integrations, and security configurations.">
    <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-4">
      <aside className="glass rounded-xl p-4">
        {settingsNav.map(group => <div key={group.group} className="mb-5"><p className="text-xs uppercase tracking-widest text-slate-500 mb-2">{group.group}</p>{group.items.map(item => { const Icon = item.icon; const active = pathname === item.href; return <Link key={item.href} href={item.href} className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm ${active ? 'bg-violet text-white' : 'text-slate-300 hover:bg-white/5'}`}><Icon size={17} />{item.label}</Link>; })}</div>)}
      </aside>
      <section>{children}</section>
    </div>
  </Page>;
}

export function Page({ title, subtitle, children }: { title: string; subtitle: string; children: React.ReactNode }) {
  return <><div className="mb-5"><h1 className="text-2xl font-semibold">{title}</h1><p className="text-sm text-slate-400 mt-1">{subtitle}</p></div>{children}</>;
}
