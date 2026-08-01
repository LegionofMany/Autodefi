'use client';
import { SettingsShell } from '@/components/Shell';
import { AlertBox, DonutCard, InfoBox, TableCard } from '@/components/Cards';
import { listRows, transactions } from '@/data/mock';

export function Toggle({ on = true }: { on?: boolean }) {
  return <span className={`inline-flex h-6 w-11 items-center rounded-full p-1 ${on ? 'bg-violet' : 'bg-slate-700'}`}><span className={`h-4 w-4 rounded-full bg-white transition ${on ? 'translate-x-5' : 'translate-x-0'}`} /></span>;
}

export function Field({ label, value }: { label: string; value: string }) {
  return <label className="block text-sm"><span className="text-slate-400">{label}</span><div className="mt-2 rounded-lg border border-line bg-ink/40 px-3 py-2 flex justify-between"><span>{value}</span><span className="text-slate-500">⌄</span></div></label>;
}

export function SettingsPanel({ title, description, children }: { title: string; description: string; children: React.ReactNode }) {
  return <SettingsShell><div className="glass rounded-xl p-5"><h2 className="text-xl font-semibold">{title}</h2><p className="text-sm text-slate-400 mt-1 mb-5">{description}</p>{children}</div></SettingsShell>;
}

export function GenericSettingsPage({ title, description, tabs = [] }: { title: string; description: string; tabs?: string[] }) {
  return <SettingsPanel title={title} description={description}>
    {tabs.length > 0 && <div className="flex gap-6 border-b border-line mb-5 overflow-auto">{tabs.map((t, i) => <button key={t} className={`pb-3 text-sm whitespace-nowrap ${i === 0 ? 'text-white border-b-2 border-violet' : 'text-slate-400'}`}>{t}</button>)}</div>}
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
      <InfoBox title="Configuration"><div className="space-y-4"><Field label="Default module" value="Risk Overview" /><Field label="Refresh interval" value="30 seconds" /><div className="flex justify-between"><span>Auto-refresh data</span><Toggle /></div><div className="flex justify-between"><span>Preserve dashboard filters</span><Toggle /></div><button className="bg-violet rounded-lg px-4 py-2 text-sm">Save Changes</button></div></InfoBox>
      <InfoBox title="Access Controls"><div className="space-y-4"><div className="flex justify-between"><span>MFA required</span><Toggle /></div><div className="flex justify-between"><span>IP restrictions</span><Toggle /></div><div className="flex justify-between"><span>Audit logging</span><Toggle /></div><Field label="Session timeout" value="30 minutes" /></div></InfoBox>
      <InfoBox title="Status Preview"><DonutCard title="Security Posture" total="92" label="Excellent" /></InfoBox>
    </div>
  </SettingsPanel>;
}

export function ListSettingsPage({ title, description, kind }: { title: string; description: string; kind: string }) {
  const rows = kind === 'API' ? [
    ['Risk Analytics Service', 'adf_sk_live_7f3a1b...', 'Read', 'May 20, 2025', 'Active'],
    ['Fraud Detection Engine', 'adf_sk_live_a8d4e1...', 'Read / Write', 'May 18, 2025', 'Active'],
    ['External Dashboard', 'adf_sk_live_c1e9f8...', 'Read', 'May 10, 2025', 'Active']
  ] : kind === 'IP' ? [
    ['203.0.113.10', 'Corporate Office - New York', 'John Risk Manager', 'May 20, 2025', 'Active'],
    ['203.0.113.0/24', 'Corporate Network - NYC', 'Sarah Compliance', 'May 18, 2025', 'Active'],
    ['198.51.100.25', 'Data Center - Primary', 'Mike Security', 'May 15, 2025', 'Active']
  ] : kind === 'WH' ? [
    ['Slack Alerts', '12 events', 'https://hooks.slack.com/...', 'Active', '100%'],
    ['PagerDuty Incidents', '6 events', 'https://events.pagerduty.com/...', 'Active', '98.7%'],
    ['Audit Archive', '4 events', 'https://archive.example.com/webhook', 'Degraded', '85.4%']
  ] : kind === 'SRC' ? [
    ['Hedera Mainnet', 'Blockchain', 'On-Chain', 'Healthy', 'Real-time'],
    ['Chainalysis KYT', 'Third-Party', 'Risk & Compliance', 'Healthy', '1 min delay'],
    ['OFAC Sanctions List', 'Third-Party', 'Risk & Compliance', 'Unhealthy', 'Outdated']
  ] : kind === 'LOG' ? [
    ['May 29, 2025 10:42 AM', 'John Risk Manager', 'Login', 'Authentication', 'Success'],
    ['May 29, 2025 10:38 AM', 'Sarah Compliance', 'Updated', 'Risk Rule', 'Success'],
    ['May 29, 2025 10:35 AM', 'System', 'Data Export', 'Transaction Data', 'Completed']
  ] : kind === 'RET' ? [
    ['Security Events', 'Alerts and incident events', '2 years', '4.2 TB', 'Active'],
    ['Transaction Data', 'Blockchain and off-chain activity', '5 years', '3.6 TB', 'Active'],
    ['Audit Logs', 'System audit trails', '7 years', '896.7 GB', 'Active']
  ] : kind === 'SES' ? [
    ['John Risk Manager', 'Chrome 124 / Windows 11', 'New York, USA', '2 min ago', 'Active'],
    ['Sarah Compliance', 'Chrome 124 / macOS', 'London, UK', '15 min ago', 'Active'],
    ['Mike Security', 'Edge 124 / Windows 11', 'Toronto, Canada', '1 hour ago', 'Active']
  ] : kind === 'RULE' ? [
    ['Multiple Failed Logins', 'RULE-1001', 'Authentication', 'High', 'Active'],
    ['High Value Transfer', 'RULE-1002', 'Transaction', 'High', 'Active'],
    ['Smart Contract Anomaly', 'RULE-1005', 'Smart Contract', 'Critical', 'Active']
  ] : kind === 'SYS' ? [
    ['API Gateway', 'Healthy', '99.97%', '120 ms', '1 min ago'],
    ['Risk Engine', 'Healthy', '99.98%', '98 ms', '1 min ago'],
    ['Hedera Monitor', 'Healthy', '99.96%', '134 ms', '1 min ago']
  ] : listRows;

  return <SettingsPanel title={title} description={description}>
    <div className="grid grid-cols-1 xl:grid-cols-[1fr_320px] gap-4">
      <div><div className="flex gap-3 mb-4"><input className="w-full rounded-lg border border-line bg-ink/40 px-3 py-2" placeholder={`Search ${title.toLowerCase()}...`} /><button className="rounded-lg border border-line px-4">Filters</button><button className="rounded-lg bg-violet px-4 whitespace-nowrap">+ Add</button></div><TableCard title={title} rows={rows} /></div>
      <div className="space-y-4"><InfoBox title={`About ${title}`}><p className="text-sm text-slate-400">Configure, monitor, and audit this area of the AutoDeFi Risk & Security Portal.</p></InfoBox><InfoBox title="Summary"><DonutCard title="Overview" total="98.6%" label="Healthy" /></InfoBox><InfoBox title="Recent Activity"><AlertBox text={`${title} setting updated`} /><AlertBox text="Policy sync completed" /><AlertBox text="Recommended action created" /></InfoBox></div>
    </div>
  </SettingsPanel>;
}

export function SettingsHome() {
  return <SettingsShell><div className="grid grid-cols-1 xl:grid-cols-3 gap-4"><InfoBox title="Organization Settings"><p className="text-xl font-semibold">AutoDeFi Labs</p><p className="text-green text-sm mt-1">Verified</p><p className="text-sm text-slate-400 mt-4">Manage organization details, members, roles, permissions, and environments.</p></InfoBox><InfoBox title="Preferences"><div className="space-y-3"><Field label="Time Zone" value="UTC" /><Field label="Default Dashboard" value="Risk Overview" /><div className="flex justify-between"><span>Auto refresh</span><Toggle /></div></div></InfoBox><InfoBox title="Authentication & Access"><div className="space-y-3"><div className="flex justify-between"><span>MFA</span><span className="text-green">Enabled</span></div><div className="flex justify-between"><span>SSO</span><span className="text-green">Enabled</span></div><div className="flex justify-between"><span>Audit logging</span><span className="text-green">Enabled</span></div></div></InfoBox><InfoBox title="API & Integrations"><p className="text-sm text-slate-400 mb-3">API access, webhooks, connected data sources, and third-party security integrations.</p><button className="bg-violet rounded-lg px-4 py-2 text-sm">Manage Integrations</button></InfoBox><InfoBox title="Data Retention"><TableCard title="Retention" rows={transactions.slice(0, 3)} /></InfoBox><InfoBox title="System & Maintenance"><div className="flex justify-between mb-3"><span>Auto updates</span><Toggle /></div><div className="flex justify-between"><span>System notifications</span><Toggle /></div></InfoBox></div></SettingsShell>;
}
