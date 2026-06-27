import CapitalYieldLayout from "@/components/capital-yield/CapitalYieldLayout";
import { Badge, Card, DataTable, MockChart, PageTitle, RiskBars, StatsGrid } from "@/components/capital-yield/UI";
import { riskTiers } from "@/data/capitalYieldData";

export default function ReportsPage() {
  return (
    <CapitalYieldLayout>
      <PageTitle title="Reports & Analytics" subtitle="Analyze portfolio performance, loan pool health, yields, repayments, and risk exposure." />
      <StatsGrid />
      <div className="mt-6 grid gap-6 xl:grid-cols-3">
        <Card title="Performance Analytics" className="xl:col-span-2"><p className="text-sm text-slate-400">Portfolio value over time</p><p className="mb-4 text-3xl font-bold">$5,661,600.67</p><MockChart /></Card>
        <Card title="Allocation & Yield Mix"><RiskBars /></Card>
      </div>
      <div className="mt-6 grid gap-6 xl:grid-cols-2">
        <Card title="Repayment Analytics"><div className="grid grid-cols-2 gap-4"><div className="rounded-xl bg-white/5 p-4"><p className="text-slate-400">On-Time Payments</p><p className="text-2xl font-bold text-emerald-400">98.21%</p></div><div className="rounded-xl bg-white/5 p-4"><p className="text-slate-400">Delinquency 30+ Days</p><p className="text-2xl font-bold text-yellow-300">1.22%</p></div><div className="rounded-xl bg-white/5 p-4"><p className="text-slate-400">Early Payoff Rate</p><p className="text-2xl font-bold text-blue-300">6.14%</p></div><div className="rounded-xl bg-white/5 p-4"><p className="text-slate-400">Recovery Rate</p><p className="text-2xl font-bold text-violet-300">62.35%</p></div></div></Card>
        <Card title="Risk & Loan Pool Health"><DataTable columns={["Pool", "Invested", "Default %", "Status"]} rows={riskTiers.map(r => [`${r.name} Auto Pool ${r.grade}`, r.invested, r.defaultRate, r.status])} /></Card>
      </div>
      <div className="mt-6 grid gap-6 xl:grid-cols-3">
        <Card title="Report Library"><div className="grid gap-3">{["Monthly Investor Statement", "Loan Pool Performance Report", "Yield Summary Report", "Risk Exposure Report", "Tax Summary", "Cash Flow Report"].map(x => <button key={x} className="rounded-xl bg-white/5 p-4 text-left">{x}<span className="float-right">↓</span></button>)}</div></Card>
        <Card title="Analytics Insights"><div className="space-y-3"><Badge>Best Performing Pool: Prime</Badge><Badge tone="blue">Highest Yield Grade: A Prime</Badge><Badge tone="green">Concentration within limit</Badge><Badge tone="purple">Repayment trend improving</Badge></div></Card>
        <Card title="Quick Actions"><div className="grid gap-3"><button className="rounded-xl bg-violet-700 p-4">Export Report</button><button className="rounded-xl bg-white/5 p-4">Download CSV</button><button className="rounded-xl bg-white/5 p-4">Schedule Report</button></div></Card>
      </div>
    </CapitalYieldLayout>
  );
}
