import CapitalYieldLayout from "@/components/capital-yield/CapitalYieldLayout";
import { Card, DataTable, MockChart, PageTitle, RiskBars, StatsGrid } from "@/components/capital-yield/UI";

const portfolios = [
  ["Prime Income Portfolio", "$2,156,000", "$2,258,625", "12.45%", "$102,625", "+18.23%"],
  ["Core Growth Portfolio", "$1,642,500", "$1,732,230", "12.10%", "$89,730", "+16.12%"],
  ["Growth Opportunities", "$892,750", "$932,285", "15.80%", "$110,425", "+21.48%"],
  ["Opportunistic Portfolio", "$365,250", "$398,052", "19.20%", "$64,052", "+24.58%"],
  ["Cash Reserve", "$182,340", "$187,405", "4.25%", "$5,064", "+2.78%"],
];

export default function PortfoliosPage() {
  return (
    <CapitalYieldLayout>
      <PageTitle title="Portfolios" subtitle="View and manage your investment portfolios and loan pool allocations." />
      <StatsGrid />
      <div className="mt-6 grid gap-6 xl:grid-cols-4">
        <Card title="My Portfolios"><div className="space-y-3">{portfolios.map((p, i) => <div key={p[0]} className="rounded-xl bg-white/5 p-4"><p className="font-semibold">{p[0]}</p><p className="mt-1 text-2xl">{p[1]}</p><p className="text-sm text-emerald-400">{p[3]} APY</p><p className="text-xs text-slate-400">{i === 4 ? "Cash reserve" : `${12 + i * 4} investments`}</p></div>)}</div></Card>
        <Card title="Portfolio Performance" className="xl:col-span-2"><p className="text-sm text-slate-400">Total Portfolio Value</p><p className="mb-4 text-3xl font-bold">$5,661,600.67</p><MockChart /></Card>
        <Card title="Portfolio Allocation"><RiskBars /></Card>
      </div>
      <div className="mt-6 grid gap-6 xl:grid-cols-3">
        <Card title="Portfolio Holdings" className="xl:col-span-2"><DataTable columns={["Portfolio", "Invested", "Current Value", "Avg Yield", "Earnings", "Return"]} rows={portfolios} /></Card>
        <Card title="Portfolio Actions"><div className="grid gap-3"><button className="rounded-xl bg-violet-700 p-4">Rebalance Allocations</button><button className="rounded-xl bg-white/5 p-4">Add Funds</button><button className="rounded-xl bg-white/5 p-4">Withdraw</button><button className="rounded-xl bg-white/5 p-4">Portfolio Settings</button></div></Card>
      </div>
    </CapitalYieldLayout>
  );
}
