import CapitalYieldLayout from "@/components/capital-yield/CapitalYieldLayout";
import { Badge, Card, PageTitle } from "@/components/capital-yield/UI";

export default function SupportPage() {
  const categories = ["Getting Started", "Investments", "Loan Marketplace", "AutoInvest", "Account & Security", "Payments & Wallet", "Reports & Analytics", "Fees & Billing"];
  return (
    <CapitalYieldLayout>
      <PageTitle title="Support" subtitle="We’re here to help you every step of the way." />
      <div className="grid gap-6 xl:grid-cols-4">
        <div className="space-y-6 xl:col-span-3">
          <Card title="How can we help you?"><input className="w-full rounded-xl border border-white/10 bg-black/20 p-4" placeholder="Search for help articles, topics, or keywords..."/><div className="mt-4 flex flex-wrap gap-2 text-sm text-violet-300"><span>Popular:</span><span>Getting Started</span><span>Investments</span><span>Payments</span><span>AutoInvest</span><span>Security</span></div></Card>
          <Card title="Help Categories"><div className="grid gap-4 md:grid-cols-4">{categories.map((c, i) => <div key={c} className="rounded-xl border border-white/10 bg-white/5 p-4"><p className="font-semibold">{c}</p><p className="mt-2 text-sm text-slate-400">{8 + i} articles</p></div>)}</div></Card>
          <Card title="Recent Announcements"><div className="space-y-4">{["Platform Maintenance - June 2, 2025", "New Feature: Enhanced Portfolio Analytics", "AutoInvest Strategy Templates Are Here"].map((a, i) => <div key={a} className="border-b border-white/10 pb-4"><p className="font-semibold">{a}</p><p className="text-sm text-slate-400">{i === 0 ? "Scheduled maintenance from 02:00 - 04:00 UTC." : "AutoDeFi platform update for capital yield partners."}</p></div>)}</div></Card>
        </div>
        <div className="space-y-6">
          <Card title="Contact Support"><div className="space-y-3"><button className="w-full rounded-xl bg-violet-700 p-4 text-left">Submit a Ticket</button><button className="w-full rounded-xl bg-blue-600 p-4 text-left">Live Chat</button><button className="w-full rounded-xl bg-emerald-600 p-4 text-left">Email Us</button></div></Card>
          <Card title="My Support Tickets"><div className="space-y-3 text-sm"><div className="rounded-xl bg-white/5 p-3"><Badge>Resolved</Badge><p className="mt-2">Withdrawal not received</p></div><div className="rounded-xl bg-white/5 p-3"><Badge tone="blue">In Progress</Badge><p className="mt-2">AutoInvest strategy question</p></div><div className="rounded-xl bg-white/5 p-3"><Badge tone="purple">Closed</Badge><p className="mt-2">KYC verification help</p></div></div></Card>
          <Card title="Support Hours"><p className="text-sm text-slate-300">Monday - Friday<br/>9:00 AM - 6:00 PM UTC<br/>Excluding public holidays</p></Card>
          <Card title="Feedback"><button className="rounded-xl bg-violet-700 px-5 py-3">Send Feedback</button></Card>
        </div>
      </div>
    </CapitalYieldLayout>
  );
}
