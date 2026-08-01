import React from 'react';
import { KpiGrid, FilterBar, DataTable, StatusBadge, Panel, Donut, LegendList, BarBreakdown } from '../components/ui.jsx';
import { statementRows } from '../data/mockData.js';

export const statementsActions = [
  { label: 'Generate Statements', icon: '▤' },
  { label: 'Resend Statement', icon: '✉' },
  { label: 'Download Statements', icon: '⇩' },
  { label: 'Upload Custom Letter', icon: '⇧' },
  { label: 'Statement Preferences', icon: '⚙' },
  { label: 'Download Report', icon: '⇩' }
];

export default function StatementsPage() {
  const kpis = [
    { label: 'Statements Generated (MTD)', value: '11,293', change: '↑ 12.6%', sub: 'vs Apr 12, 2025', tone: 'blue', icon: '▤', trend: [30, 31, 33, 36, 35, 39, 42] },
    { label: 'Delivered Successfully', value: '10,842', change: '↑ 9.8%', sub: 'vs Apr 12, 2025', tone: 'green', icon: '◈', trend: [60, 62, 64, 63, 67, 69, 72] },
    { label: 'Email Deliveries', value: '9,865', change: '↑ 8.5%', sub: 'vs Apr 12, 2025', tone: 'orange', icon: '✉', trend: [50, 53, 52, 56, 55, 61, 64] },
    { label: 'Portal Downloads', value: '977', change: '↑ 15.2%', sub: 'vs Apr 12, 2025', tone: 'purple', icon: '⇩', trend: [8, 10, 14, 13, 18, 22, 25] },
    { label: 'Failed Deliveries', value: '451', change: '↓ 5.3%', sub: 'vs Apr 12, 2025', tone: 'red', icon: '△', trend: [20, 18, 17, 14, 13, 12, 11] },
    { label: 'Avg. Time to Deliver', value: '2.1 min', change: '↓ 18.3%', sub: 'vs Apr 12, 2025', tone: 'cyan', icon: '◷', trend: [12, 11, 9, 8, 7, 6, 5] }
  ];
  const rows = statementRows.map((row) => row.map((cell, index) => index === 8 ? <StatusBadge status={cell} /> : cell).concat(<span className="row-actions">⇩ ◉ ⋮</span>));
  const segments = [{ label: 'Delivered', value: '10,842', percent: 96.0, color: 'green' }, { label: 'Failed', value: '451', percent: 4.0, color: 'red' }, { label: 'Bounced', value: '132', percent: 1.2, color: 'orange' }, { label: 'Pending', value: '126', percent: 1.1, color: 'blue' }];
  return (
    <>
      <KpiGrid items={kpis} className="six" />
      <FilterBar placeholders={['Search by borrower, loan ID, or statement ID...', 'Statement Type All Types', 'Delivery Method All Methods', 'Status All Statuses', 'Date Range May 1, 2025 - May 12, 2025']} />
      <div className="content-with-right">
        <DataTable columns={['Statement ID', 'Borrower', 'Loan ID', 'Statement Type', 'Statement Date', 'Period Covered', 'Amount Due', 'Delivery Method', 'Status', 'Delivered On', 'Actions']} rows={rows} footer="Showing 1 to 10 of 11,293 results" />
        <aside className="right-stack">
          <Panel title="Statement Summary (MTD)"><Donut segments={segments} center="11,293" subtitle="Total" /><LegendList items={segments} /></Panel>
          <Panel title="Delivery Method Breakdown"><BarBreakdown rows={[{ label: 'Email', value: '9,865 (87.3%)', width: '86%', color: 'blue' }, { label: 'Portal', value: '977 (8.7%)', width: '35%', color: 'purple' }, { label: 'SMS', value: '302 (2.7%)', width: '18%', color: 'orange' }, { label: 'Mail', value: '95 (0.8%)', width: '10%', color: 'green' }]} /></Panel>
          <Panel title="Top Statement Types"><BarBreakdown rows={[{ label: 'Monthly Statement', value: '10,124 (89.7%)', width: '90%', color: 'blue' }, { label: 'Payoff Statement', value: '842 (7.5%)', width: '32%', color: 'purple' }, { label: 'Year-End Statement', value: '184 (1.6%)', width: '14%', color: 'orange' }]} /></Panel>
        </aside>
      </div>
    </>
  );
}
