'use client';
import { Area, AreaChart, Bar, BarChart, Cell, Line, LineChart, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { AlertTriangle, ArrowDown, ArrowUp, CheckCircle2, Shield } from 'lucide-react';
import { donut, trend } from '@/data/mock';

const colors = ['#6d42e8', '#2f8cff', '#f59e0b', '#ef4444', '#22c55e'];

export function MetricCard({ label, value, sub = 'vs last month', tone = 'green' }: { label: string; value: string; sub?: string; tone?: 'green' | 'red' | 'amber' | 'blue' | 'violet' }) {
  const positive = tone !== 'red';
  const bg = tone === 'red' ? 'bg-danger/20' : tone === 'amber' ? 'bg-amber/20' : tone === 'violet' ? 'bg-violet/20' : 'bg-green/20';
  const line = tone === 'red' ? '#ef4444' : tone === 'amber' ? '#f59e0b' : tone === 'violet' ? '#6d42e8' : '#2f8cff';
  return <div className="glass rounded-xl p-4 min-h-[122px]">
    <div className="flex justify-between">
      <div>
        <p className="text-sm text-slate-400">{label}</p>
        <h3 className="text-2xl font-semibold mt-2">{value}</h3>
        <p className={`text-xs mt-1 ${positive ? 'text-green' : 'text-danger'}`}>{positive ? <ArrowUp size={12} className="inline" /> : <ArrowDown size={12} className="inline" />} {positive ? '12.4%' : '8.7%'} {sub}</p>
      </div>
      <div className={`h-11 w-11 rounded-xl grid place-items-center ${bg}`}><Shield size={20} /></div>
    </div>
    <MiniLine color={line} />
  </div>
}

function MiniLine({ color }: { color: string }) {
  return <div className="h-8 mt-2"><ResponsiveContainer><LineChart data={trend}><Line type="monotone" dataKey="risk" stroke={color} dot={false} strokeWidth={2} /></LineChart></ResponsiveContainer></div>
}

export function DonutCard({ title, total = '$85.7M', label = 'Total Portfolio' }: { title: string; total?: string; label?: string }) {
  return <div className="glass rounded-xl p-4"><h3 className="font-semibold mb-3">{title}</h3><div className="grid grid-cols-1 md:grid-cols-[210px_1fr] gap-3 items-center"><div className="h-56 relative"><ResponsiveContainer><PieChart><Pie data={donut} dataKey="value" innerRadius={70} outerRadius={100} paddingAngle={1}>{donut.map((_, i) => <Cell key={i} fill={colors[i % colors.length]} />)}</Pie></PieChart></ResponsiveContainer><div className="absolute inset-0 grid place-items-center text-center"><div><div className="text-2xl">{total}</div><div className="text-xs text-slate-400">{label}</div></div></div></div><div className="space-y-3">{donut.map((d, i) => <div key={d.name} className="flex justify-between text-sm"><span><i className="inline-block h-3 w-3 rounded-full mr-2" style={{ background: colors[i] }} />{d.name} Risk</span><b>{d.value}%</b></div>)}</div></div></div>
}

export function TrendCard({ title = 'Risk Trend' }: { title?: string }) {
  return <div className="glass rounded-xl p-4"><div className="flex justify-between mb-3"><h3 className="font-semibold">{title}</h3><button className="rounded-lg border border-line px-3 py-1 text-xs">30 Days</button></div><div className="h-64"><ResponsiveContainer><AreaChart data={trend}><defs><linearGradient id="g" x1="0" x2="0" y1="0" y2="1"><stop offset="5%" stopColor="#6d42e8" stopOpacity={0.7} /><stop offset="95%" stopColor="#6d42e8" stopOpacity={0} /></linearGradient></defs><XAxis dataKey="day" stroke="#64748b" /><YAxis stroke="#64748b" /><Tooltip contentStyle={{ background: '#061524', border: '1px solid rgba(148,163,184,.2)' }} /><Area dataKey="risk" stroke="#8b5cf6" fill="url(#g)" strokeWidth={2} /><Line dataKey="fraud" stroke="#2f8cff" dot={false} /></AreaChart></ResponsiveContainer></div></div>
}

export function TableCard({ title, rows }: { title: string; rows: string[][] }) {
  return <div className="glass rounded-xl p-4 overflow-hidden"><div className="flex justify-between mb-3"><h3 className="font-semibold">{title}</h3><button className="text-neon text-sm">View All</button></div><div className="overflow-auto"><table className="w-full text-sm"><tbody>{rows.map((r, i) => <tr key={i} className="border-t border-line">{r.map((c, j) => <td key={j} className="py-3 pr-4 text-slate-300 whitespace-nowrap">{j === 0 ? <span className="text-neon">{c}</span> : c}</td>)}</tr>)}</tbody></table></div></div>
}

export function StatusList({ title, items }: { title: string; items: string[] }) {
  return <div className="glass rounded-xl p-4"><h3 className="font-semibold mb-3">{title}</h3><div className="space-y-3">{items.map((item, i) => <div key={item} className="flex items-center justify-between border-b border-line pb-2"><span className="text-sm text-slate-300 flex gap-2"><CheckCircle2 size={16} className="text-green" />{item}</span><span className={i % 3 === 0 ? 'text-amber text-xs' : 'text-green text-xs'}>{i % 3 === 0 ? 'Review' : 'Healthy'}</span></div>)}</div></div>
}

export function BarPanel({ title }: { title: string }) {
  return <div className="glass rounded-xl p-4"><h3 className="font-semibold mb-4">{title}</h3><div className="h-52"><ResponsiveContainer><BarChart data={trend}><XAxis dataKey="day" hide /><YAxis hide /><Tooltip contentStyle={{ background: '#061524', border: '1px solid rgba(148,163,184,.2)' }} /><Bar dataKey="security" fill="#2f8cff" /><Bar dataKey="fraud" fill="#6d42e8" /></BarChart></ResponsiveContainer></div></div>
}

export function InfoBox({ title, children }: { title: string; children: React.ReactNode }) { return <div className="glass rounded-xl p-4"><h3 className="font-semibold mb-3">{title}</h3>{children}</div> }
export function AlertBox({ text }: { text: string }) { return <div className="flex gap-2 items-center text-sm py-2 border-b border-line"><AlertTriangle size={16} className="text-danger" /><span>{text}</span><span className="ml-auto text-xs text-slate-500">2 min ago</span></div> }
