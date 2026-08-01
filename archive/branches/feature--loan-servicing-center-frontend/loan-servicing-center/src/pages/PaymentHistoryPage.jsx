import React from 'react';
import { KpiGrid, FilterBar, DataTable, StatusBadge, Panel, Donut, LegendList } from '../components/ui.jsx';
import { paymentRows } from '../data/mockData.js';

export const paymentHistoryActions = [
  { label: 'Collect Payment', icon: '▣' },
  { label: 'Send Reminder', icon: '✉' },
  { label: 'Modify Loan', icon: '✎' },
  { label: 'Reconcile Payment', icon: '⟳' },
  { label: 'Issue Refund', icon: '$' },
  { label: 'Download Report', icon: '⇩' }
];

export default function PaymentHistoryPage() {
  const kpis = [
    { label: 'Total Payments', value: '2,458', change: '↑ 8.12%', sub: 'vs last 30d', tone: 'green', icon: '✓', trend: [20, 21, 25, 23, 28, 26, 34] },
    { label: 'Total Collected', value: '$5.42M', change: '↑ 6.84%', sub: 'vs last 30d', tone: 'blue', icon: '$', trend: [35, 36, 38, 41, 39, 45, 47] },
    { label: 'On-Time Payments', value: '2,137', change: '↑ 5.21%', sub: 'vs last 30d', tone: 'purple', icon: '▣', trend: [60, 62, 61, 66, 64, 69, 72] },
    { label: 'Late Payments', value: '321', change: '↓ 3.12%', sub: 'vs last 30d', tone: 'orange', icon: '◷', trend: [12, 14, 9, 16, 12, 18, 15] },
    { label: 'Refunds Issued', value: '12', change: '↓ 20.00%', sub: 'vs last 30d', tone: 'cyan', icon: '▤', trend: [3, 4, 2, 6, 5, 7, 8] }
  ];

  const rows = paymentRows.map((row) => row.map((cell, i) => i === 7 ? <StatusBadge status={cell} /> : cell).concat(<span className="row-actions">⋮</span>));
  const segments = [{ label: 'On-Time', value: '2,137', percent: 86.9, color: 'green' }, { label: 'Late (1–30)', value: '244', percent: 9.9, color: 'orange' }, { label: 'Late (31+)', value: '77', percent: 3.1, color: 'red' }];

  return (
    <>
      <KpiGrid items={kpis} />
      <FilterBar placeholders={['Search by borrower, loan ID, or vehicle...', 'Payment Status All Statuses', 'Payment Type All Types', 'Date Range Last 90 Days', 'Pool All Pools']} />
      <div className="content-with-right">
        <DataTable columns={['Date', 'Borrower', 'Loan ID', 'Payment Type', 'Due Date', 'Amount Due', 'Amount Paid', 'Status', 'Method', 'Actions']} rows={rows} footer="Showing 1 to 10 of 2,458 results" />
        <aside className="right-stack">
          <Panel title="Payment Summary"><Donut segments={segments} center="86.9%" subtitle="On-Time" /><LegendList items={segments} /></Panel>
          <Panel title="Collected by Payment Method"><div className="metric-list compact"><div><span>AutoPay (USDC)</span><strong>$3.21M (59.2%)</strong></div><div><span>Bank Transfer</span><strong>$1.32M (24.4%)</strong></div><div><span>Debit Card</span><strong>$682.45K (12.6%)</strong></div><div><span>Manual (Admin)</span><strong>$204.32K (3.8%)</strong></div></div></Panel>
          <Panel title="Refunds & Adjustments"><div className="metric-list compact"><div><span>Refunds Issued</span><strong>12</strong></div><div><span>Total Refunds</span><strong>$8,420.15</strong></div></div></Panel>
        </aside>
      </div>
    </>
  );
}
