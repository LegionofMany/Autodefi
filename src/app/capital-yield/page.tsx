import CapitalYieldLayout from "@/components/capital-yield/CapitalYieldLayout";
import { Card, EarningsList, MockChart, PageTitle, RiskBars, StatsGrid } from "@/components/capital-yield/UI";

export default function CapitalYieldDashboardPage() {
  return (
    <CapitalYieldLayout>
      <PageTitle title="Welcome back, Investor! 👋" subtitle="Here’s your portfolio performance and earnings overview." />
      <StatsGrid />
      <div className="mt-6 grid gap-6 xl:grid-cols-3">
        <Card title="Portfolio Performance" className="xl:col-span-2"><div className="mb-4"><p className="text-sm text-slate-400">Total Portfolio Value</p><p className="text-3xl font-bold">$5,661,600.67</p><p className="text-sm text-emerald-400">↑ 19.4% vs last month</p></div><MockChart /></Card>
        <Card title="Investment Allocation" action="View All"><div className="grid h-52 place-items-center rounded-full border-[30px] border-violet-600"><div className="text-center"><p className="text-2xl font-bold">$5.25M</p><p className="text-xs text-slate-400">Total Invested</p></div></div></Card>
      </div>
      <div className="mt-6 grid gap-6 xl:grid-cols-3">
        <Card title="Yield Over Time"><MockChart color="green" /></Card>
        <Card title="Investments by Grade"><RiskBars /></Card>
        <Card title="Recent Earnings" action="View All"><EarningsList /></Card>
      </div>
      <div className="mt-6 grid gap-6 xl:grid-cols-3">
        <Card title="Top Performing Investments" className="xl:col-span-2"><div className="grid gap-3 md:grid-cols-4">{["2023 Tesla Model Y", "2022 BMW 330i", "2021 Ford F-150", "Commercial Property"].map((x, i) => <div key={x} className="rounded-xl border border-white/10 bg-white/5 p-4"><p className="font-semibold">{x}</p><p className="text-xs text-slate-400">Secured loan pool</p><p className="mt-3 text-emerald-400">{(12.8 - i * .7).toFixed(1)}% Current Yield</p></div>)}</div></Card>
        <Card title="Quick Actions"><div className="grid grid-cols-2 gap-3">{["Browse Loans", "Add Funds", "AutoInvest Settings", "Download Report", "View Statements", "Tax Center"].map(x => <button key={x} className="rounded-xl border border-white/10 bg-white/5 p-4 text-sm hover:bg-violet-700/30">{x}</button>)}</div></Card>
      </div>
    </CapitalYieldLayout>
  );
}
