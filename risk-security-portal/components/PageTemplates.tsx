import { Page } from '@/components/Shell';
import { AlertBox, BarPanel, DonutCard, InfoBox, MetricCard, StatusList, TableCard, TrendCard } from '@/components/Cards';
import { transactions } from '@/data/mock';

export function AnalyticsPage({ title, subtitle, metrics, focus = 'Risk Overview' }: { title: string; subtitle: string; metrics: string[]; focus?: string }) {
  return <Page title={title} subtitle={subtitle}>
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-6 gap-4 mb-4">{metrics.map((m, i) => <MetricCard key={m} label={m} value={['42/100', '28', '16', '37', '$85.7M', '97.3%'][i % 6]} tone={i === 1 || i === 2 ? 'red' : i === 3 ? 'amber' : i === 4 ? 'violet' : 'green'} />)}</div>
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 mb-4"><DonutCard title={focus} /><div className="xl:col-span-2"><TrendCard title={`${title} Trend`} /></div></div>
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 mb-4"><BarPanel title="AutoDeFi Pool Activity" /><StatusList title="Operational Controls" items={['Dealer funding checks', 'Borrower KYC reviews', 'ADF collateral locks', 'Stable-rail repayment checks', 'ZONYCS liquidation readiness']} /><TableCard title="High Priority Queue" rows={transactions.slice(0, 5)} /></div>
    <div className="grid grid-cols-1 xl:grid-cols-4 gap-4"><InfoBox title="Regional Heat Map"><div className="h-44 rounded-lg bg-[radial-gradient(circle_at_20%_30%,#ef4444_0_6px,transparent_8px),radial-gradient(circle_at_60%_40%,#f59e0b_0_7px,transparent_9px),radial-gradient(circle_at_80%_70%,#22c55e_0_7px,transparent_9px)] border border-line grid place-items-center text-slate-500">Global Risk Map</div></InfoBox><InfoBox title="Recent Critical Alerts"><AlertBox text="Suspicious dealer submission spike" /><AlertBox text="Treasury wallet access anomaly" /><AlertBox text="Stable-rail settlement delay" /></InfoBox><InfoBox title="Performance"><p className="text-4xl font-semibold">98.6%</p><p className="text-green text-sm mt-2">SLA compliance</p><p className="text-slate-400 text-sm mt-4">Automated response, rule tuning, and manual review resolution are within tolerance.</p></InfoBox><InfoBox title="Security Footer"><p className="text-sm text-slate-400">Your data is secured with bank-level encryption and monitored 24/7 across the AutoDeFi ecosystem.</p></InfoBox></div>
  </Page>;
}
