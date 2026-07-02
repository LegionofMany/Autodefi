import { Button } from '../components/Button';
import { Card, CardTitle } from '../components/Card';
import { Icon } from '../components/Icon';
import { StatusPill } from '../components/StatusPill';
import { DonutChart, LineChart } from '../components/SvgCharts';
import type { Tone } from '../data/autodefiData';
import '../styles/loanServicing.css';

type LoanKpi = {
  label: string;
  value: string;
  delta?: string;
  note?: string;
  icon: string;
  tone: Tone;
};

type LoanRow = {
  borrower: string;
  vehicle: string;
  loanId: string;
  balance: string;
  nextPayment: string;
  status: string;
  tone: Tone;
};

const loanKpis: LoanKpi[] = [
  { label: 'Total Loans Serviced', value: '11,293', delta: '+ 12.81%', note: 'vs last 30d', icon: 'borrower', tone: 'blue' },
  { label: 'Current Portfolio Value', value: '$78.42M', delta: '+ 6.33%', note: 'vs last 30d', icon: 'analytics', tone: 'cyan' },
  { label: 'Total Outstanding', value: '$68.11M', note: 'active principal', icon: 'dollar', tone: 'purple' },
  { label: 'Delinquency Rate (30+)', value: '1.87%', delta: '- 0.34%', note: 'improved vs last 30d', icon: 'risk', tone: 'orange' },
  { label: 'Average Remaining Term', value: '32.4 Months', note: 'weighted average', icon: 'proposals', tone: 'purple' }
];

const loanStatus = [
  { label: 'Current', value: 87.1, count: '9,842', tone: 'green' as Tone },
  { label: '30+ Days', value: 7.2, count: '812', tone: 'orange' as Tone },
  { label: '60+ Days', value: 3.1, count: '351', tone: 'purple' as Tone },
  { label: '90+ Days', value: 1.9, count: '214', tone: 'red' as Tone }
];

const recentLoans: LoanRow[] = [
  { borrower: 'Marcus Johnson', vehicle: '2023 Tesla Model Y', loanId: 'ADFL-78291', balance: '$24,820.35', nextPayment: 'May 15, 2025', status: 'Current', tone: 'green' },
  { borrower: 'Sophia Martinez', vehicle: '2022 BMW X5', loanId: 'ADFL-78292', balance: '$31,450.20', nextPayment: 'May 16, 2025', status: 'Current', tone: 'green' },
  { borrower: 'James Wilson', vehicle: '2021 Ford F-150', loanId: 'ADFL-78293', balance: '$18,370.65', nextPayment: 'May 17, 2025', status: '30+ Days', tone: 'orange' },
  { borrower: 'Olivia Smith', vehicle: '2022 Audi Q7', loanId: 'ADFL-78294', balance: '$36,125.40', nextPayment: 'May 18, 2025', status: 'Current', tone: 'green' },
  { borrower: 'Daniel Brown', vehicle: '2020 Jeep Grand Cherokee', loanId: 'ADFL-78295', balance: '$22,910.80', nextPayment: 'May 18, 2025', status: 'Current', tone: 'green' }
];

const collateralHealth = [
  { label: 'Active Insurance', value: '11,102 (98.1%)', tone: 'blue' as Tone, icon: 'shield' },
  { label: 'Collateral Secured', value: '10,882 (96.4%)', tone: 'green' as Tone, icon: 'shield' },
  { label: 'Token Collateral Locked', value: '$14.28M', tone: 'orange' as Tone, icon: 'token' },
  { label: 'At Risk Collateral', value: '401 (3.6%)', tone: 'red' as Tone, icon: 'risk' }
];

const servicingActions = [
  ['Collect Payment', 'dollar', 'purple'],
  ['Send Reminder', 'proposals', 'cyan'],
  ['Modify Loan', 'audit', 'purple'],
  ['Refinance Request', 'analytics', 'blue'],
  ['Payoff Quote', 'dollar', 'cyan'],
  ['Download Statement', 'dashboard', 'purple']
] as const;

function LoanMetricCard({ metric }: { metric: LoanKpi }) {
  return (
    <Card className={`loan-kpi tone-${metric.tone}`}>
      <div className="loan-kpi-icon"><Icon name={metric.icon} size={28} /></div>
      <div>
        <span>{metric.label}</span>
        <strong>{metric.value}</strong>
        <small className={metric.delta?.startsWith('-') ? 'good' : undefined}>{metric.delta ? `${metric.delta} ` : ''}{metric.note}</small>
      </div>
    </Card>
  );
}

export function LoanServicing() {
  return (
    <div className="loan-service-page">
      <section className="loan-page-head">
        <div>
          <h2>Loan Servicing Center</h2>
          <p>Manage and monitor your active loan portfolio.</p>
        </div>
        <div className="loan-page-actions">
          <Button variant="ghost">All Pools ▾</Button>
          <Button variant="ghost">May 12, 2025 ▾</Button>
          <Button>Export</Button>
        </div>
      </section>

      <section className="loan-kpi-grid">
        {loanKpis.map((metric) => <LoanMetricCard key={metric.label} metric={metric} />)}
      </section>

      <section className="loan-primary-grid">
        <Card className="loan-overview-card">
          <CardTitle title="Active Loans Overview" />
          <div className="loan-donut-layout">
            <DonutChart data={loanStatus.map((item) => ({ label: item.label, value: item.value, tone: item.tone }))} centerValue="11,293" centerLabel="Total Loans" size={220} />
            <div className="legend-list large">
              {loanStatus.map((item) => (
                <span key={item.label}><i className={`dot tone-bg-${item.tone}`} />{item.label}<b>{item.count} ({item.value}%)</b></span>
              ))}
            </div>
          </div>
        </Card>

        <Card className="loan-chart-card">
          <CardTitle title="Payment Performance" />
          <LineChart
            labels={['Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May']}
            height={230}
            series={[
              { label: 'On Time', values: [89, 85, 84, 85, 89, 97, 90, 92, 94, 90, 86], tone: 'green' },
              { label: 'Late (1–30)', values: [19, 30, 35, 25, 23, 27, 22, 22, 26, 22, 21], tone: 'orange' },
              { label: 'Late (31+)', values: [2, 2, 3, 3, 3, 3, 3, 3, 3, 2, 2], tone: 'red' }
            ]}
          />
        </Card>

        <Card className="autopay-card">
          <CardTitle title="AutoPay Status" />
          <DonutChart data={[{ label: 'Enabled', value: 72.6, tone: 'green' }, { label: 'Manual', value: 27.4, tone: 'blue' }]} centerValue="72.6%" centerLabel="AutoPay Enabled" size={220} />
          <strong>8,182 Loans</strong>
        </Card>
      </section>

      <section className="loan-lower-grid">
        <Card>
          <CardTitle title="Recent Loan Activity" action={<Button variant="ghost">View All →</Button>} />
          <table className="data-table loan-table">
            <thead>
              <tr><th>Borrower</th><th>Vehicle</th><th>Loan ID</th><th>Balance</th><th>Next Payment</th><th>Status</th></tr>
            </thead>
            <tbody>
              {recentLoans.map((loan) => (
                <tr key={loan.loanId}>
                  <td>{loan.borrower}</td>
                  <td>{loan.vehicle}</td>
                  <td>{loan.loanId}</td>
                  <td>{loan.balance}</td>
                  <td>{loan.nextPayment}</td>
                  <td><StatusPill tone={loan.tone}>{loan.status}</StatusPill></td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>

        <Card>
          <CardTitle title="Collateral & Insurance Health" />
          <div className="loan-health-list">
            {collateralHealth.map((item) => (
              <div key={item.label}>
                <span><Icon name={item.icon} size={26} className={`tone-${item.tone}`} />{item.label}</span>
                <strong>{item.value}</strong>
              </div>
            ))}
          </div>
          <Button className="full" variant="ghost">View Collateral Health →</Button>
        </Card>
      </section>

      <section className="loan-action-bar">
        {servicingActions.map(([label, icon, tone]) => (
          <button className={`loan-action tone-${tone}`} type="button" key={label}>
            <Icon name={icon} size={28} />
            <span>{label}</span>
          </button>
        ))}
      </section>
    </div>
  );
}
