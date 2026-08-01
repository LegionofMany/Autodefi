import type { ReactNode } from 'react';
import { ArrowRight, CheckCircle2, MoreVertical } from 'lucide-react';
import { money } from '../lib/format';

export function Card({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <section className={`card ${className}`}>{children}</section>;
}

export function Stat({ icon, label, value, sub, tone = 'blue' }: { icon: ReactNode; label: string; value: string; sub: string; tone?: 'blue'|'green'|'purple'|'orange' }) {
  return <Card className="stat"><div className={`icon ${tone}`}>{icon}</div><div><p>{label}</p><h3>{value}</h3><span>{sub}</span></div></Card>;
}

export function Button({ children, variant='primary' }: { children: ReactNode; variant?: 'primary'|'secondary'|'ghost' }) {
  return <button className={`btn ${variant}`}>{children}</button>;
}

export function Status({ children, tone='green' }: { children: ReactNode; tone?: 'green'|'purple'|'orange'|'blue' }) {
  return <span className={`status ${tone}`}>{children}</span>;
}

export function Row({ label, value }: { label: string; value: ReactNode }) {
  return <div className="row"><span>{label}</span><strong>{value}</strong></div>;
}

export function Progress({ value }: { value: number }) {
  return <div className="progress"><span style={{ width: `${value}%` }} /></div>;
}

export function HealthList({ items }: { items: [string, string][] }) {
  return <div className="health-list">{items.map(([label,value]) => <div key={label}><span><CheckCircle2 size={16}/>{label}</span><strong>{value}</strong></div>)}</div>;
}

export function Table({ headers, rows }: { headers: string[]; rows: ReactNode[][] }) {
  return <div className="table"><div className="tr head">{headers.map(h => <span key={h}>{h}</span>)}</div>{rows.map((r,i)=><div className="tr" key={i}>{r.map((c,j)=><span key={j}>{c}</span>)}</div>)}</div>;
}

export function LoanHero({ loan }: { loan: { vehicle: string; vin: string; loanId: string; originalDate: string; amount: number; balance: number; monthlyPayment: number; apr: number; termMonths: number; remainingMonths: number; nextDueDate: string; status: string; payoffAmount?: number; frequency?: string } }) {
  return <Card className="loan-hero">
    <div className="vehicle-art"><span className="badge">{loan.status}</span><div className="car-shape">▰</div></div>
    <div className="loan-info">
      <h2>{loan.vehicle}</h2><p>VIN: {loan.vin} · Loan ID: {loan.loanId}</p><p>Originally Financed: {loan.originalDate}</p>
      <div className="metric-grid compact">
        <Row label="Loan Term" value={`${loan.termMonths} Months`} />
        <Row label="APR" value={`${loan.apr}%`} />
        <Row label="Loan Amount" value={money(loan.amount)} />
        <Row label="Balance" value={money(loan.balance)} />
        <Row label="Monthly Payment" value={money(loan.monthlyPayment)} />
        <Row label="Next Due" value={loan.nextDueDate} />
      </div>
      <div className="actions"><Button variant="secondary">View Details</Button><Button>Make a Payment <ArrowRight size={16}/></Button></div>
    </div>
  </Card>;
}

export function Kebab(){ return <button className="kebab"><MoreVertical size={17}/></button>; }
