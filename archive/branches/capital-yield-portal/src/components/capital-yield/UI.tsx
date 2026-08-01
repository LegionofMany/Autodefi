import { LucideIcon, Wallet, TrendingUp, Percent, Briefcase, CircleDollarSign } from "lucide-react";
import { stats, riskTiers, earnings } from "@/data/capitalYieldData";

const tones: Record<string, string> = {
  purple: "from-violet-700 to-purple-950",
  green: "from-emerald-600 to-green-950",
  blue: "from-blue-600 to-blue-950",
  orange: "from-orange-600 to-amber-950",
  teal: "from-cyan-600 to-teal-950",
};

const icons: LucideIcon[] = [CircleDollarSign, TrendingUp, Percent, Briefcase, Wallet];

export function PageTitle({ title, subtitle }: { title: string; subtitle: string }) {
  return <div className="mb-6"><h1 className="text-3xl font-bold tracking-tight">{title}</h1><p className="mt-1 text-slate-400">{subtitle}</p></div>;
}

export function StatsGrid() {
  return <section className="grid grid-cols-1 gap-4 xl:grid-cols-5">{stats.map((s, i) => { const Icon = icons[i]; return <div key={s.label} className="cy-card rounded-2xl p-5"><div className="flex items-center gap-4"><div className={`grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br ${tones[s.tone]}`}><Icon size={25}/></div><div><p className="text-xs text-slate-400">{s.label}</p><p className="mt-1 text-2xl font-semibold">{s.value}</p><p className="mt-1 text-xs text-emerald-400">{s.change}</p></div></div></div>; })}</section>;
}

export function Card({ title, action, children, className = "" }: { title: string; action?: string; children: React.ReactNode; className?: string }) {
  return <section className={`cy-card rounded-2xl p-5 ${className}`}><div className="mb-4 flex items-center justify-between"><h2 className="text-lg font-semibold">{title}</h2>{action && <button className="text-sm text-blue-400">{action}</button>}</div>{children}</section>;
}

export function MockChart({ color = "violet" }: { color?: "violet" | "green" | "blue" }) {
  const bars = [45,48,52,55,58,61,64,66,69,72,74,77,82,85,88];
  const gradient = color === "green" ? "from-emerald-950 to-emerald-400" : color === "blue" ? "from-blue-950 to-blue-400" : "from-violet-950 to-violet-400";
  return <div className="flex h-64 items-end gap-2 rounded-xl border border-white/5 bg-black/20 p-4">{bars.map((h, i) => <div key={i} className={`flex-1 rounded-t-lg bg-gradient-to-t ${gradient}`} style={{ height: `${h}%` }} />)}</div>;
}

export function RiskBars() {
  return <div className="space-y-4">{riskTiers.map((tier, i) => <div key={tier.grade}><div className="mb-1 flex justify-between text-sm"><span><span className={`mr-2 inline-grid h-6 w-6 place-items-center rounded-full ${tier.color} text-xs font-bold`}>{tier.grade}</span>{tier.name}</span><span>{tier.invested}</span></div><div className="h-2 rounded-full bg-white/10"><div className={`h-2 rounded-full ${tier.color}`} style={{ width: `${90 - i * 13}%` }} /></div></div>)}</div>;
}

export function EarningsList() {
  return <div className="space-y-3">{earnings.map((e) => <div key={e.source} className="flex items-center justify-between border-b border-white/10 pb-3"><div><p className="font-medium">{e.type}</p><p className="text-sm text-slate-400">{e.source}</p></div><div className="text-right"><p className="font-semibold text-emerald-400">{e.amount}</p><p className="text-xs text-slate-500">{e.date}</p></div></div>)}</div>;
}

export function DataTable({ columns, rows }: { columns: string[]; rows: (string | number)[][] }) {
  return <div className="overflow-hidden rounded-xl border border-white/10"><table className="w-full text-left text-sm"><thead className="bg-white/5 text-xs uppercase tracking-wide text-slate-400"><tr>{columns.map(c => <th key={c} className="px-4 py-3 font-medium">{c}</th>)}</tr></thead><tbody>{rows.map((row, i) => <tr key={i} className="border-t border-white/10 hover:bg-white/[0.03]">{row.map((cell, j) => <td key={j} className="px-4 py-4">{cell}</td>)}</tr>)}</tbody></table></div>;
}

export function Badge({ children, tone = "green" }: { children: React.ReactNode; tone?: "green" | "yellow" | "red" | "blue" | "purple" }) {
  const map = { green: "bg-emerald-500/15 text-emerald-300", yellow: "bg-yellow-500/15 text-yellow-300", red: "bg-red-500/15 text-red-300", blue: "bg-blue-500/15 text-blue-300", purple: "bg-violet-500/15 text-violet-300" };
  return <span className={`rounded-lg px-2 py-1 text-xs font-semibold ${map[tone]}`}>{children}</span>;
}
