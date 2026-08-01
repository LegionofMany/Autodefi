import React from 'react';
import { KpiGrid, FilterBar, DataTable, StatusBadge, Panel, Donut, LegendList } from '../components/ui.jsx';
import { borrowers } from '../data/mockData.js';

export const modificationActions = [
  { label: 'Approve Request', icon: '✓' },
  { label: 'Decline Request', icon: '⊗' },
  { label: 'Request More Info', icon: 'i' },
  { label: 'Upload Documents', icon: '⇧' },
  { label: 'Send to Underwriter', icon: '☷' },
  { label: 'Communication Log', icon: '▤' },
  { label: 'Download Report', icon: '⇩' }
];

export default function LoanModificationsPage() {
  const kpis = [
    { label: 'Total Modification Requests', value: '312', change: '↑ 14.7%', sub: 'vs last 30d', tone: 'blue', icon: '▤', trend: [10, 13, 12, 16, 17, 22, 21] },
    { label: 'Approved (This Period)', value: '98', change: '↑ 16.3%', sub: 'vs last 30d', tone: 'green', icon: '✓', trend: [8, 11, 13, 14, 18, 20, 23] },
    { label: 'Pending Review', value: '67', change: '↓ 7.2%', sub: 'vs last 30d', tone: 'orange', icon: '◷', trend: [20, 21, 18, 19, 16, 15, 14] },
    { label: 'Declined (This Period)', value: '42', change: '↓ 8.7%', sub: 'vs last 30d', tone: 'purple', icon: '⊗', trend: [14, 13, 12, 10, 9, 8, 7] },
    { label: 'Mods Completed', value: '76', change: '↑ 18.4%', sub: 'vs last 30d', tone: 'cyan', icon: '$', trend: [6, 8, 10, 12, 13, 16, 19] },
    { label: 'Total Modified Loans', value: '1,248', change: '↑ 12.9%', sub: 'vs last 30d', tone: 'green', icon: '▣', trend: [28, 30, 33, 31, 38, 40, 44] }
  ];
  const modTypes = ['Payment Extension', 'Payment Reduction', 'Term Extension', 'Payment Reduction', 'Interest Rate Reduction', 'Term Extension', 'Payment Reduction', 'Payment Extension', 'Interest Rate Reduction', 'Term Extension'];
  const reasons = ['Hardship', 'Hardship', 'Income Loss', 'Hardship', 'Financial Relief', 'Hardship', 'Income Loss', 'Hardship', 'Financial Relief', 'Hardship'];
  const statuses = ['Pending Review', 'Under Review', 'Approved', 'Pending Review', 'Documents Needed', 'Approved', 'Completed', 'Declined', 'Completed', 'Under Review'];
  const proposed = ['$820.35 (2 months)', '$750.00 (-17.6%)', '$645.65 (+6 months)', '$900.00 (-20.0%)', '$648.25 (Rate 8.49% → 6.49%)', '$820.45 (+4 months)', '$720.00 (-18.7%)', '$945.30 (3 months)', '$542.95 (Rate 7.99% → 6.49%)', '$815.25 (+5 months)'];
  const rows = borrowers.map((loan, i) => [
    <label className="check"><input type="checkbox" /></label>,
    <div className="person"><span className="mini-avatar">{loan.initials}</span><span>{loan.borrower}</span></div>,
    loan.vehicle,
    loan.loanId,
    modTypes[i],
    reasons[i],
    `May ${12 - Math.min(i, 7)}, 2025`,
    i === 8 ? '$615.20' : loan.balance.replace('$2', '$').slice(0, 7),
    proposed[i],
    <StatusBadge status={statuses[i]} />,
    <span className="row-actions">◉ ⋮</span>
  ]);
  const segments = [{ label: 'Pending Review', value: '67', percent: 21.5, color: 'orange' }, { label: 'Under Review', value: '53', percent: 17.0, color: 'blue' }, { label: 'Approved', value: '98', percent: 31.4, color: 'green' }, { label: 'Completed', value: '76', percent: 24.4, color: 'purple' }, { label: 'Declined', value: '18', percent: 5.8, color: 'red' }];
  return (
    <>
      <KpiGrid items={kpis} className="six" />
      <FilterBar placeholders={['Search by borrower, loan ID, or vehicle...', 'Status All Statuses', 'Modification Type All Types', 'Request Type All Types', 'Date Range Last 90 Days', 'Pool All Pools']} />
      <div className="content-with-right">
        <DataTable columns={['', 'Borrower', 'Vehicle', 'Loan ID', 'Modification Type', 'Request Type', 'Requested On', 'Current Payment', 'Proposed Payment', 'Status', 'Actions']} rows={rows} footer="Showing 1 to 10 of 312 results" />
        <aside className="right-stack">
          <Panel title="Modification Status Overview"><Donut segments={segments} center="312" subtitle="Total" /><LegendList items={segments} /></Panel>
          <Panel title="Modification Types"><div className="metric-list compact"><div><span>Payment Reduction</span><strong>132 (42.3%)</strong></div><div><span>Payment Extension</span><strong>96 (30.8%)</strong></div><div><span>Term Extension</span><strong>58 (18.6%)</strong></div><div><span>Interest Rate Reduction</span><strong>26 (8.3%)</strong></div></div></Panel>
          <Panel title="Average Impact"><div className="metric-list compact"><div><span>Avg. Payment Reduction</span><strong className="inline-ok">-$178.42</strong></div><div><span>Avg. Term Extension</span><strong>+3.2 Months</strong></div><div><span>Avg. Rate Reduction</span><strong className="inline-ok">-1.42%</strong></div></div></Panel>
        </aside>
      </div>
    </>
  );
}
