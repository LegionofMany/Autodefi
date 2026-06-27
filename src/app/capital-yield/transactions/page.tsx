import CapitalYieldLayout from "@/components/capital-yield/CapitalYieldLayout";
import { Card, DataTable, PageTitle, StatsGrid } from "@/components/capital-yield/UI";
import { transactions } from "@/data/capitalYieldData";

export default function TransactionsPage() {
  return (
    <CapitalYieldLayout>
      <PageTitle title="Transactions" subtitle="View all account activity including investments, earnings, deposits, withdrawals, and repayments." />
      <StatsGrid />
      <div className="mt-6 grid gap-6 xl:grid-cols-4">
        <Card title="All Transactions" className="xl:col-span-3">
          <div className="mb-4 flex flex-wrap gap-3 text-sm">{["All Transactions", "Deposits", "Withdrawals", "Earnings", "Loan Repayments", "Investments", "Fees"].map((x, i) => <button key={x} className={`rounded-xl px-4 py-2 ${i === 0 ? "bg-violet-700" : "bg-white/5"}`}>{x}</button>)}</div>
          <DataTable columns={["Date & Time", "Type", "Description", "Amount", "Status"]} rows={transactions.map(t => [t.date, t.type, t.description, t.amount, t.status])} />
        </Card>
        <Card title="Filter Transactions"><div className="space-y-4"><select className="w-full rounded-xl border border-white/10 bg-black/20 p-3"><option>May 1 - May 29, 2025</option></select><select className="w-full rounded-xl border border-white/10 bg-black/20 p-3"><option>All Types</option></select><select className="w-full rounded-xl border border-white/10 bg-black/20 p-3"><option>All Portfolios</option></select><button className="w-full rounded-xl bg-violet-700 p-3 font-semibold">Apply Filters</button><div className="rounded-xl bg-white/5 p-4"><p className="font-semibold">Transaction Summary</p><p className="mt-3 text-sm text-slate-400">Deposits: $1,256,780</p><p className="text-sm text-slate-400">Withdrawals: $485,420</p><p className="text-sm text-emerald-400">Net Cash Flow: +$2,656,699.91</p></div></div></Card>
      </div>
    </CapitalYieldLayout>
  );
}
