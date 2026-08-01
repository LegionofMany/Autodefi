import CapitalYieldLayout from "@/components/capital-yield/CapitalYieldLayout";
import { Badge, Card, DataTable, PageTitle } from "@/components/capital-yield/UI";
import { loans } from "@/data/capitalYieldData";

export default function LoanMarketplacePage() {
  return (
    <CapitalYieldLayout>
      <PageTitle title="Loan Marketplace" subtitle="Browse and invest in auto loan opportunities from AutoDeFi loan pools." />
      <div className="grid gap-4 xl:grid-cols-5">
        {["Total Loan Requests: 128", "Total Requested: $4,785,420", "Avg. Interest Rate: 12.45%", "Funded 24h: $1,256,780", "Default Rate: 1.32%"].map((x) => <div key={x} className="cy-card rounded-2xl p-5"><p className="text-slate-400">{x.split(":")[0]}</p><p className="mt-2 text-2xl font-bold">{x.split(":")[1]}</p><p className="mt-1 text-xs text-emerald-400">Aligned to approved auto loan pools</p></div>)}
      </div>
      <div className="mt-6 grid gap-6 xl:grid-cols-4">
        <Card title="Available Loans" className="xl:col-span-3">
          <div className="mb-4 flex flex-wrap gap-3"><button className="rounded-xl bg-violet-700 px-4 py-2 text-sm">Available Loans</button><button className="rounded-xl bg-white/5 px-4 py-2 text-sm">Pre-Funded</button><button className="rounded-xl bg-white/5 px-4 py-2 text-sm">Funded & Active</button></div>
          <DataTable columns={["Vehicle", "Borrower", "Pool / Risk Tier", "APR", "Term", "Requested", "Progress"]} rows={loans.map(l => [l.vehicle, l.borrower, l.pool, l.apr, l.term, l.amount, l.funded])} />
        </Card>
        <Card title="Marketplace Filters"><div className="space-y-4"><select className="w-full rounded-xl border border-white/10 bg-black/20 p-3"><option>All Pools</option></select><select className="w-full rounded-xl border border-white/10 bg-black/20 p-3"><option>All Risk Tiers</option></select><select className="w-full rounded-xl border border-white/10 bg-black/20 p-3"><option>All Purposes</option></select><button className="w-full rounded-xl bg-violet-700 p-3 font-semibold">Apply Filters</button><div className="rounded-xl bg-white/5 p-4"><p className="font-semibold">How It Works</p><ol className="mt-3 space-y-2 text-sm text-slate-400"><li>1. Review borrower and vehicle details</li><li>2. Invest capital by risk tier</li><li>3. Earn interest from stable-value repayments</li></ol></div></div></Card>
      </div>
      <div className="mt-6"><Card title="Risk & Yield Notes"><div className="grid gap-3 md:grid-cols-3"><Badge>Dealer funded in full on approval</Badge><Badge tone="blue">Borrowers repay through regional stable rails</Badge><Badge tone="purple">Yield routes to matching risk-tier pool</Badge></div></Card></div>
    </CapitalYieldLayout>
  );
}
