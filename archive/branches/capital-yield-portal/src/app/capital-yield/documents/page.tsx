import CapitalYieldLayout from "@/components/capital-yield/CapitalYieldLayout";
import { Card, DataTable, PageTitle } from "@/components/capital-yield/UI";
import { documents } from "@/data/capitalYieldData";

export default function DocumentsPage() {
  return (
    <CapitalYieldLayout>
      <PageTitle title="Documents" subtitle="Securely store, manage, and access your important account and investment documents." />
      <div className="grid gap-6 xl:grid-cols-4">
        <Card title="All Documents" className="xl:col-span-3">
          <div className="mb-4 flex flex-wrap gap-3 text-sm">{["All Documents", "Account Documents", "Investment Documents", "Legal & Compliance", "Tax Documents", "Reports", "Other"].map((x, i) => <button key={x} className={`rounded-xl px-4 py-2 ${i === 0 ? "bg-violet-700" : "bg-white/5"}`}>{x}</button>)}</div>
          <div className="mb-4 grid gap-3 md:grid-cols-3"><input className="rounded-xl border border-white/10 bg-black/20 p-3 md:col-span-2" placeholder="Search documents by name or keyword..."/><select className="rounded-xl border border-white/10 bg-black/20 p-3"><option>Sort by: Newest</option></select></div>
          <DataTable columns={["Document Name", "Category", "Type", "Related To", "Date Added"]} rows={documents.map(d => [d.name, d.category, d.type, d.related, d.date])} />
        </Card>
        <div className="space-y-6">
          <Card title="Storage Overview"><div className="grid h-40 place-items-center rounded-full border-[20px] border-cyan-500"><div className="text-center"><p className="text-2xl font-bold">32%</p><p className="text-xs text-slate-400">3.2GB used</p></div></div></Card>
          <Card title="Quick Actions"><div className="grid gap-3"><button className="rounded-xl bg-violet-700 p-4 text-left">Upload Document</button><button className="rounded-xl bg-white/5 p-4 text-left">Create Folder</button><button className="rounded-xl bg-white/5 p-4 text-left">Request Document</button><button className="rounded-xl bg-white/5 p-4 text-left">Share Document</button></div></Card>
          <Card title="My Folders"><div className="space-y-2 text-sm text-slate-300">{["Statements", "Loan Agreements", "Tax Documents", "KYC & Compliance", "Reports"].map(x => <p key={x}>📁 {x}</p>)}</div></Card>
        </div>
      </div>
    </CapitalYieldLayout>
  );
}
