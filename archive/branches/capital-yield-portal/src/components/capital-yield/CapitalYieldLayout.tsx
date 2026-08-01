"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BarChart3, Bell, Bot, Briefcase, CircleDollarSign, FileText, HelpCircle, LayoutDashboard, Mail, PieChart, Settings, WalletCards, ArrowLeftRight } from "lucide-react";

const nav = [
  ["Dashboard", "/capital-yield", LayoutDashboard],
  ["Investments", "/capital-yield/investments", Briefcase],
  ["Loan Marketplace", "/capital-yield/loan-marketplace", WalletCards],
  ["Portfolios", "/capital-yield/portfolios", PieChart],
  ["Earnings", "/capital-yield/earnings", CircleDollarSign],
  ["Transactions", "/capital-yield/transactions", ArrowLeftRight],
  ["Reports & Analytics", "/capital-yield/reports", BarChart3],
  ["AutoInvest", "/capital-yield/autoinvest", Bot],
  ["Documents", "/capital-yield/documents", FileText],
  ["Settings", "/capital-yield/settings", Settings],
  ["Support", "/capital-yield/support", HelpCircle],
] as const;

export default function CapitalYieldLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  return (
    <div className="min-h-screen bg-[#020817] text-slate-100">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,.18),transparent_32%),radial-gradient(circle_at_top_left,rgba(124,58,237,.18),transparent_28%)]" />
      <div className="flex min-h-screen">
        <aside className="w-72 shrink-0 border-r border-white/10 bg-[#06111f]/90 p-5">
          <div className="mb-7">
            <div className="text-3xl font-black"><span className="text-blue-500">AD</span> AUTO<span className="text-blue-400">DEFI</span></div>
            <p className="text-xs uppercase tracking-[.28em] text-slate-400">Capital Yield Portal</p>
          </div>
          <div className="cy-panel mb-6 rounded-2xl p-4">
            <div className="flex items-center gap-3"><div className="grid h-12 w-12 place-items-center rounded-full bg-violet-700 text-xl">🏦</div><div><p className="font-semibold">Capital Yield Partner</p><p className="text-xs text-emerald-400">Verified Investor</p></div></div>
            <p className="mt-3 text-xs text-slate-400">Member since Jan 10, 2024</p>
          </div>
          <nav className="space-y-1">
            {nav.map(([label, href, Icon]) => {
              const active = pathname === href;
              return <Link key={href} href={href} className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm transition ${active ? "bg-violet-700 text-white shadow-lg shadow-violet-950/50" : "text-slate-300 hover:bg-white/5 hover:text-white"}`}><Icon size={18} />{label}</Link>;
            })}
          </nav>
          <div className="mt-7 rounded-2xl border border-violet-500/20 bg-violet-950/30 p-4">
            <p className="font-semibold">AutoInvest is <span className="text-emerald-400">ON</span></p>
            <p className="mt-2 text-xs leading-5 text-slate-400">Your capital is working across approved AutoDeFi risk-tier pools.</p>
            <button className="mt-4 w-full rounded-xl bg-violet-700 py-2 text-sm font-semibold">Manage AutoInvest</button>
          </div>
          <div className="cy-panel mt-7 rounded-2xl p-4"><p className="font-semibold">Need Help?</p><p className="mt-2 text-xs text-slate-400">Our team is here to help.</p><button className="mt-4 w-full rounded-xl border border-blue-500/30 py-2 text-sm text-blue-300">Contact Support</button></div>
        </aside>
        <main className="min-w-0 flex-1">
          <header className="flex items-center justify-end gap-4 border-b border-white/10 px-8 py-4">
            <button className="relative rounded-xl border border-white/10 p-3"><Bell size={18}/><span className="absolute -right-1 -top-1 rounded-full bg-violet-600 px-1.5 text-xs">5</span></button>
            <button className="relative rounded-xl border border-white/10 p-3"><Mail size={18}/><span className="absolute -right-1 -top-1 rounded-full bg-violet-600 px-1.5 text-xs">3</span></button>
            <div className="rounded-xl border border-white/10 px-5 py-3"><p className="text-sm font-semibold">0x7a8B...EF23</p><p className="text-xs text-slate-400">Connected Wallet</p></div>
          </header>
          <div className="p-8">{children}<footer className="mt-8 text-center text-xs text-slate-500">🔒 Your data is secured with bank-level encryption and stored on the blockchain.</footer></div>
        </main>
      </div>
    </div>
  );
}
