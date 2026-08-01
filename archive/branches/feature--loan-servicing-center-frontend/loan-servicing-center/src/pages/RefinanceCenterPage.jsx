import React from 'react';
import { KpiGrid, FilterBar, DataTable, StatusBadge, Panel, Donut, LegendList, BarBreakdown } from '../components/ui.jsx';
import { borrowers } from '../data/mockData.js';

export const refinanceActions = [
  { label: 'Create Refinance Quote', icon: '$' },
  { label: 'Review Documents', icon: '▤' },
  { label: 'Approve Refinance', icon: '✓' },
  { label: 'Decline Request', icon: '⊗' },
  { label: 'Request More Info', icon: 'i' },
  { label: 'Send Decision', icon: '✈' },
  { label: 'Download Report', icon: '⇩' }
];

export default function RefinanceCenterPage() {
  const kpis = [
    { label: 'Total Refinance Requests', value: '426', change: '↑ 18.4%', sub: 'vs last 30d', tone: 'blue', icon: '▤', trend: [24, 29, 27, 33, 31, 39, 42] },
    { label: 'Approved (This Period)', value: '132', change: '↑ 15.7%', sub: 'vs last 30d', tone: 'green', icon: '✓', trend: [12, 15, 17, 18, 22, 24, 28] },
    { label: 'Pending Review', value: '178', change: '↑ 7.3%', sub: 'vs last 30d', tone: 'orange', icon: '◷', trend: [18, 21, 20, 24, 22, 28, 30] },
    { label: 'Completed (This Period)', value: '96', change: '↑ 22.1%', sub: 'vs last 30d', tone: 'purple', icon: '⟳', trend: [8, 10, 13, 12, 16, 19, 22] },
    { label: 'Total Refinanced Amount', value: '$12.48M', change: '↑ 19.8%', sub: 'vs last 30d', tone: 'cyan', icon: '$', trend: [24, 27, 26, 32, 34, 38, 45] },
    { label: 'Avg. Rate Reduction', value: '1.42%', change: '↓ 3.1%', sub: 'vs last 30d', tone: 'cyan', icon: '%', trend: [18, 17, 15, 14, 12, 11, 10] }
  ];
  const requestTypes = ['Rate & Term', 'Rate & Term', 'Rate Only', 'Rate & Term', 'Cash-Out', 'Rate & Term', 'Rate Only', 'Cash-Out', 'Rate & Term', 'Rate Only'];
  const statuses = ['Pending Review', 'Under Review', 'Approved', 'Pending Review', 'Documents Needed', 'Approved', 'Completed', 'Under Review', 'Pending Review', 'Completed'];
  const rows = borrowers.map((loan, i) => [
    <label className="check"><input type="checkbox" /></label>,
    <div className="person"><span className="mini-avatar">{loan.initials}</span><span>{loan.borrower}</span></div>,
    loan.vehicle,
    loan.loanId,
    <StatusBadge status={requestTypes[i]} />,
    loan.rate,
    <span className="inline-ok">{loan.proposed}</span>,
    <span className="inline-ok">{loan.savings}</span>,
    <StatusBadge status={statuses[i]} />,
    `May ${12 - Math.min(i, 7)}, 2025`,
    <span className="row-actions">◉ ⋮</span>
  ]);
  const segments = [{ label: 'Pending Review', value: '178', percent: 41.8, color: 'orange' }, { label: 'Under Review', value: '92', percent: 21.6, color: 'blue' }, { label: 'Approved', value: '132', percent: 31.0, color: 'green' }, { label: 'Documents Needed', value: '24', percent: 5.6, color: 'red' }];
  return (
    <>
      <KpiGrid items={kpis} className="six" />
      <FilterBar placeholders={['Search by borrower, vehicle, or loan ID...', 'Status All Statuses', 'Request Type All Types', 'Loan Type All', 'Date Range Last 90 Days', 'Pool All Pools']} />
      <div className="content-with-right">
        <DataTable columns={['', 'Borrower', 'Vehicle', 'Loan ID', 'Request Type', 'Current Rate', 'Proposed Rate', 'Est. Savings / Mo.', 'Status', 'Requested On', 'Actions']} rows={rows} footer="Showing 1 to 10 of 426 results" />
        <aside className="right-stack">
          <Panel title="Refinance Requests by Status"><Donut segments={segments} center="426" subtitle="Total" /><LegendList items={segments} /></Panel>
          <Panel title="Refinance Activity"><div className="metric-list compact"><div><span>Requests Received</span><strong>426</strong></div><div><span>Approved</span><strong>132</strong></div><div><span>Completed</span><strong>96</strong></div><div><span>Declined</span><strong>18</strong></div><div><span>Withdrawn</span><strong>12</strong></div></div></Panel>
          <Panel title="Top Reasons for Refinance"><BarBreakdown rows={[{ label: 'Lower Interest Rate', value: '62.4%', width: '82%', color: 'green' }, { label: 'Lower Monthly Payment', value: '21.7%', width: '48%', color: 'blue' }, { label: 'Better Terms', value: '9.8%', width: '25%', color: 'purple' }, { label: 'Cash-Out', value: '6.1%', width: '18%', color: 'orange' }]} /></Panel>
        </aside>
      </div>
    </>
  );
}
