import CapitalYieldLayout from "@/components/capital-yield/CapitalYieldLayout";
import { Badge, Card, PageTitle } from "@/components/capital-yield/UI";

export default function SettingsPage() {
  return (
    <CapitalYieldLayout>
      <PageTitle title="Settings" subtitle="Manage your account, security, preferences, and notifications." />
      <div className="grid gap-6 xl:grid-cols-4">
        <div className="space-y-6 xl:col-span-3">
          <Card title="Account Information"><div className="space-y-3">{[["Full Name", "Capital Yield Partner"], ["Email Address", "partner@capitalyield.io"], ["Phone Number", "+1 (555) 123-4567"], ["Account Type", "Verified Investor"], ["Member Since", "Jan 10, 2024"]].map(([k,v]) => <div key={k} className="flex items-center justify-between rounded-xl bg-white/5 p-4"><span className="text-slate-400">{k}</span><span>{v}</span></div>)}</div></Card>
          <Card title="Wallet Information"><div className="space-y-3"><div className="flex justify-between rounded-xl bg-white/5 p-4"><span>Connected Wallet</span><span>0x7a8B3c4D...EF23</span></div><div className="flex justify-between rounded-xl bg-white/5 p-4"><span>Network</span><span>Ethereum Mainnet</span></div><div className="flex justify-between rounded-xl bg-white/5 p-4"><span>Wallet Type</span><span>MetaMask</span></div><button className="rounded-xl border border-red-500/40 px-4 py-3 text-red-300">Disconnect Wallet</button></div></Card>
          <Card title="Account Actions"><div className="grid gap-3 md:grid-cols-3"><button className="rounded-xl bg-white/5 p-4 text-left">Change Password</button><button className="rounded-xl bg-white/5 p-4 text-left">Export Account Data</button><button className="rounded-xl bg-red-500/10 p-4 text-left text-red-300">Close Account</button></div></Card>
        </div>
        <div className="space-y-6">
          <Card title="Profile Completion"><div className="grid h-36 place-items-center rounded-full border-[18px] border-emerald-500"><div className="text-center"><p className="text-2xl font-bold">100%</p><p className="text-xs text-slate-400">Complete</p></div></div><div className="mt-4 space-y-2 text-sm"><p>✅ Identity Verified</p><p>✅ Email Verified</p><p>✅ Phone Verified</p><p>✅ Wallet Connected</p></div></Card>
          <Card title="Security Summary"><div className="space-y-3 text-sm"><div className="flex justify-between"><span>Two-Factor Authentication</span><Badge>Enabled</Badge></div><div className="flex justify-between"><span>Login Alerts</span><Badge>Enabled</Badge></div><div className="flex justify-between"><span>Device Management</span><span>3 devices</span></div><div className="flex justify-between"><span>Last Login</span><span>May 29, 2025</span></div></div></Card>
          <Card title="Support & Resources"><div className="space-y-2 text-sm text-slate-300"><p>Help Center</p><p>Contact Support</p><p className="text-emerald-400">● System Status operational</p></div></Card>
        </div>
      </div>
    </CapitalYieldLayout>
  );
}
