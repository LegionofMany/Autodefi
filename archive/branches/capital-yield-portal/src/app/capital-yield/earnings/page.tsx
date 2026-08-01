import CapitalYieldLayout from "@/components/capital-yield/CapitalYieldLayout";
import { Card, DataTable, EarningsList, MockChart, PageTitle, StatsGrid } from "@/components/capital-yield/UI";
import { earnings } from "@/data/capitalYieldData";

export default function EarningsPage() {
  const rows = [
    ["Prime Income Portfolio", "$2,156,000", "12.45%", "$13,245.67", "$168,325.45", "$456.75"],
    ["Core Growth Portfolio", "$1,642,500", "12.10%", "$8,921.34", "$112,450.30", "$307.63"],
    ["Growth Opportunities", "$892,750", "15.80%", "$5,814.22", "$75,320.50", "$200.49"],
    ["Opportunistic Portfolio", "$365,250", "19.20%", "$2,754.18", "$38,652.35", "$94.97"],
    ["Cash Reserve", "$182,340", "4.25%", "$1,749.88", "$18,102.07", "$60.34"],
  ];
  return (
    <CapitalYieldLayout>
      <PageTitle title="Earnings" subtitle="Track interest earnings, yield performance, and payout history across all portfolios." />
      <StatsGrid />
      <div className="mt-6 grid gap-6 xl:grid-cols-3">
        <Card title="Earnings Over Time" className="xl:col-span-2"><p className="text-sm text-slate-400">Month-to-date earnings</p><p className="mb-4 text-3xl font-bold">$32,485.29</p><MockChart /></Card>
        <Card title="Earnings by Source"><EarningsList /></Card>
      </div>
      <div className="mt-6 grid gap-6 xl:grid-cols-3">
        <Card title="Earnings Breakdown" className="xl:col-span-2"><DataTable columns={["Portfolio", "Invested", "Yield", "MTD", "YTD", "Avg Daily"]} rows={rows} /></Card>
        <Card title="Upcoming Payout Schedule"><div className="rounded-xl bg-white/5 p-5"><p className="text-slate-400">Next Payout Date</p><p className="text-2xl font-bold">Jun 1, 2025</p><p className="mt-4 text-slate-400">Estimated Payout</p><p className="text-3xl font-bold text-emerald-400">$8,942.36</p><button className="mt-5 w-full rounded-xl bg-violet-700 p-3">View Payout History</button></div></Card>
      </div>
    </CapitalYieldLayout>
  );
}
