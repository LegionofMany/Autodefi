import CapitalYieldLayout from "@/components/capital-yield/CapitalYieldLayout";
import { Badge, Card, DataTable, PageTitle, RiskBars, StatsGrid } from "@/components/capital-yield/UI";
import { investments } from "@/data/capitalYieldData";

export default function InvestmentsPage() {
  return (
    <CapitalYieldLayout>
      <PageTitle title="Investments" subtitle="Manage your auto loan pool investments and monitor performance across risk tiers." />
      <StatsGrid />
      <div className="mt-6 grid gap-6 xl:grid-cols-4">
        <Card title="All Investments" className="xl:col-span-3">
          <div className="mb-4 flex flex-wrap gap-3 text-sm"><button className="rounded-xl bg-violet-700 px-4 py-2">All Investments</button><button className="rounded-xl bg-white/5 px-4 py-2">By Loan Pool</button><button className="rounded-xl bg-white/5 px-4 py-2">By Risk Tier</button><button className="rounded-xl bg-white/5 px-4 py-2">By Portfolio</button></div>
          <DataTable columns={["Investment", "Loan Pool", "Risk Tier", "Invested", "Yield", "Earned", "Status", "Next Payout"]} rows={investments.map(i => [i.name, i.pool, i.tier, i.invested, i.yield, i.earned, "Active", i.payout])} />
        </Card>
        <Card title="Investment Overview" action="View All"><RiskBars /></Card>
      </div>
      <div className="mt-6 grid gap-6 xl:grid-cols-3">
        <Card title="Allocation by Risk Tier"><RiskBars /></Card>
        <Card title="Loan Pool Health" className="xl:col-span-2"><div className="space-y-3">{["Prime Pool Q2 2025", "Core Pool Q2 2025", "Growth Pool Q2 2025", "Opportunistic Pool Q2 2025", "Specialty Pool Q2 2025"].map((pool, i) => <div key={pool} className="flex items-center justify-between rounded-xl bg-white/5 p-4"><div><p className="font-medium">{pool}</p><p className="text-xs text-slate-400">Current default rate {(1.12 + i * .93).toFixed(2)}%</p></div><Badge tone={i < 3 ? "green" : "yellow"}>{i < 3 ? "Healthy" : "Watch"}</Badge></div>)}</div></Card>
      </div>
    </CapitalYieldLayout>
  );
}
