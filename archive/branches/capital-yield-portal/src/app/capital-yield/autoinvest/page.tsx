import CapitalYieldLayout from "@/components/capital-yield/CapitalYieldLayout";
import { Badge, Card, DataTable, MockChart, PageTitle, RiskBars } from "@/components/capital-yield/UI";
import { riskTiers } from "@/data/capitalYieldData";

export default function AutoInvestPage() {
  return (
    <CapitalYieldLayout>
      <PageTitle title="AutoInvest" subtitle="Automate allocation across AutoDeFi loan pools based on target yield, risk limits, and reinvestment rules." />
      <div className="grid gap-4 xl:grid-cols-6">
        {["Status: ON", "Capital Allocated: $3,782,400", "Cash Reserve: $182,340", "Avg Target Yield: 12.85%", "Active Strategies: 5", "Next Execution: Tomorrow 09:00"].map(x => <div key={x} className="cy-card rounded-2xl p-5"><p className="text-xs text-slate-400">{x.split(":")[0]}</p><p className="mt-2 text-xl font-bold">{x.split(":").slice(1).join(":")}</p></div>)}
      </div>
      <div className="mt-6 grid gap-6 xl:grid-cols-3">
        <Card title="Strategy Overview" className="xl:col-span-2"><p className="text-sm text-slate-400">Automated Allocation Value</p><p className="mb-4 text-3xl font-bold">$3,782,400.00</p><MockChart /></Card>
        <Card title="Strategy Rules" action="Edit Rules"><div className="space-y-3 text-sm"><div className="flex justify-between rounded-xl bg-white/5 p-3"><span>Reinvest earnings</span><Badge>ON</Badge></div><div className="flex justify-between rounded-xl bg-white/5 p-3"><span>Minimum cash reserve</span><span>$25,000</span></div><div className="flex justify-between rounded-xl bg-white/5 p-3"><span>Max per loan pool</span><span>18%</span></div><div className="flex justify-between rounded-xl bg-white/5 p-3"><span>Preferred grades</span><span>A · B · C</span></div><div className="flex justify-between rounded-xl bg-white/5 p-3"><span>Settlement rail</span><span>USDC</span></div></div></Card>
      </div>
      <div className="mt-6 grid gap-6 xl:grid-cols-3">
        <Card title="Allocation Targets by Risk Tier"><RiskBars /></Card>
        <Card title="Loan Pool Automation Health" className="xl:col-span-2"><DataTable columns={["Loan Pool", "Target Yield", "Fill Status", "Auto-Eligibility", "Health"]} rows={riskTiers.map((r, i) => [`${r.name} Pool Q2 2025`, r.yield, `${94 - i * 12}%`, i < 4 ? "Eligible" : "Limited", r.status])} /></Card>
      </div>
    </CapitalYieldLayout>
  );
}
