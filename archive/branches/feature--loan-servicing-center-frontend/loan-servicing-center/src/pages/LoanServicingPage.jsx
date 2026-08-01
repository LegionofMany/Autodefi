import React from 'react';
import { KpiGrid, Panel, Donut, LegendList, MultiLineChart, DataTable, StatusBadge } from '../components/ui.jsx';
import { borrowers, dashboardKpis, loanStatusSegments } from '../data/mockData.js';

const actions = [
  { label: 'Collect Payment', icon: '▣' },
  { label: 'Send Reminder', icon: '✉' },
  { label: 'Modify Loan', icon: '✎' },
  { label: 'Refinance Request', icon: '⟳' },
  { label: 'Payoff Quote', icon: '$' },
  { label: 'Download Statement', icon: '⇩' }
];

export default function LoanServicingPage() {
  const activityRows = borrowers.slice(0, 5).map((loan) => [
    loan.borrower,
    loan.vehicle,
    loan.loanId,
    loan.balance,
    loan.nextPayment,
    <StatusBadge status={loan.status} />
  ]);

  return (
    <>
      <KpiGrid items={dashboardKpis} />
      <div className="dashboard-grid three">
        <Panel title="Active Loans Overview" footer={<a>View All Loans →</a>}>
          <div className="donut-panel-content">
            <Donut segments={loanStatusSegments} center="11,293" subtitle="Total Loans" />
            <LegendList items={loanStatusSegments} />
          </div>
        </Panel>
        <Panel title="Payment Performance" footer={<a>View Performance Report →</a>} className="wide-panel">
          <MultiLineChart />
        </Panel>
        <Panel title="AutoPay Status" footer={<a>Manage AutoPay →</a>}>
          <Donut segments={[{ label: 'Enrolled', value: 8182, percent: 72.6, color: 'green' }, { label: 'Not Enrolled', value: 3111, percent: 27.4, color: 'muted' }]} center="72.6%" subtitle="AutoPay Enrolled" />
          <div className="center-caption">8,182 Loans</div>
        </Panel>
      </div>
      <div className="dashboard-grid lower">
        <Panel title="Recent Loan Activity" className="span-2" footer={<a>View All Activity →</a>}>
          <DataTable columns={['Borrower', 'Vehicle', 'Loan ID', 'Balance', 'Next Payment', 'Status']} rows={activityRows} footer="" />
        </Panel>
        <Panel title="Collateral & Insurance Health" footer={<a className="full-link">View Collateral Health →</a>}>
          <div className="metric-list">
            <div><span>◈ Active Insurance</span><strong>11,102 (98.3%)</strong></div>
            <div><span>▣ Collateral Secured</span><strong>10,892 (96.4%)</strong></div>
            <div><span>◎ Total Collateral Locked</span><strong>$14.28M</strong></div>
            <div><span>△ At Risk Collateral</span><strong>401 (3.6%)</strong></div>
          </div>
        </Panel>
      </div>
      <div className="hidden-actions" data-actions={JSON.stringify(actions)} />
    </>
  );
}

export { actions as loanServicingActions };
