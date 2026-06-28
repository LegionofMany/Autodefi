import React from 'react';
import { KpiGrid, FilterBar, DataTable, StatusBadge, Panel, Donut, LegendList, BarBreakdown } from '../components/ui.jsx';
import { borrowers } from '../data/mockData.js';

export const insuranceActions = [
  { label: 'Verify Insurance', icon: '◈' },
  { label: 'Upload Policy', icon: '⇧' },
  { label: 'Send Insurance Reminder', icon: '◉' },
  { label: 'Report Lapse', icon: '△' },
  { label: 'Add Insurance', icon: '+' },
  { label: 'Claims Center', icon: '◎' },
  { label: 'Download Report', icon: '⇩' }
];

export default function InsurancePage() {
  const kpis = [
    { label: 'Active Insurance Policies', value: '11,102', change: '98.3%', sub: 'of total loans', tone: 'green', icon: '◈', trend: [66, 67, 69, 68, 72, 75, 77] },
    { label: 'Expiring Soon (30 Days)', value: '186', change: '1.6%', sub: 'of total loans', tone: 'orange', icon: '△', trend: [9, 10, 12, 11, 15, 14, 18] },
    { label: 'Expired / Lapsed', value: '34', change: '0.3%', sub: 'of total loans', tone: 'red', icon: '△', trend: [3, 2, 5, 4, 6, 5, 7] },
    { label: 'Total Coverage Amount', value: '$142.58M', change: 'Across', sub: 'all policies', tone: 'blue', icon: '$', trend: [45, 48, 46, 50, 54, 57, 62] },
    { label: 'Avg. Loan to Value (LTV)', value: '61.3%', change: '↓ 1.27%', sub: 'vs last 30d', tone: 'purple', icon: '◔', trend: [55, 52, 53, 50, 48, 46, 44] },
    { label: 'Claims Filed (YTD)', value: '28', change: '↓ 12.5%', sub: 'vs last 30d', tone: 'cyan', icon: '▤', trend: [8, 7, 9, 6, 8, 7, 5] }
  ];
  const rows = borrowers.map((loan, index) => {
    const status = index === 8 ? 'Expired' : index === 3 || index === 4 ? 'Expiring Soon' : 'Active';
    const days = index === 8 ? '-8' : index === 3 ? '28' : index === 4 ? '35' : `${243 - index * 27}`;
    return [
      <label className="check"><input type="checkbox" /></label>,
      <div className="person"><span className="mini-avatar">{loan.initials}</span><span>{loan.borrower}</span></div>,
      loan.vehicle,
      loan.loanId,
      loan.insurance,
      loan.policy,
      loan.collateral,
      <span>May {10 + index}, 2025<br /><small>May {10 + index}, 2026</small></span>,
      <StatusBadge status={status} />,
      <span className={status === 'Expired' ? 'inline-danger' : status === 'Expiring Soon' ? 'inline-warn' : ''}>{days}</span>,
      <span className="row-actions">◉ ⋮</span>
    ];
  });
  const segments = [{ label: 'Active', value: '11,102', percent: 98.3, color: 'green' }, { label: 'Expiring Soon', value: '186', percent: 1.6, color: 'orange' }, { label: 'Expired / Lapsed', value: '34', percent: 0.3, color: 'red' }];
  return (
    <>
      <KpiGrid items={kpis} className="six" />
      <FilterBar placeholders={['Search by borrower, vehicle, policy #, or loan ID...', 'Insurance Status All Statuses', 'Policy Status All', 'Expiring In All', 'Insurance Type All']} />
      <div className="content-with-right">
        <DataTable columns={['', 'Borrower', 'Vehicle', 'Loan ID', 'Provider', 'Policy #', 'Coverage Amount', 'Policy Period', 'Status', 'Days Left', 'Actions']} rows={rows} footer="Showing 1 to 10 of 11,102 results" />
        <aside className="right-stack">
          <Panel title="Insurance Status Overview"><Donut segments={segments} center="11,293" subtitle="Total Loans" /><LegendList items={segments} /></Panel>
          <Panel title="Coverage Breakdown"><div className="metric-list compact"><div><span>Comprehensive</span><strong>$78.42M (55.0%)</strong></div><div><span>Collision</span><strong>$42.31M (29.7%)</strong></div><div><span>Liability</span><strong>$18.65M (13.1%)</strong></div><div><span>Other</span><strong>$3.20M (2.2%)</strong></div></div></Panel>
          <Panel title="Top Insurance Providers"><BarBreakdown rows={[{ label: 'Progressive', value: '3,842 (34.1%)', width: '88%', color: 'blue' }, { label: 'State Farm', value: '3,128 (27.7%)', width: '72%', color: 'purple' }, { label: 'GEICO', value: '2,146 (19.0%)', width: '55%', color: 'orange' }, { label: 'Allstate', value: '1,376 (12.2%)', width: '38%', color: 'green' }]} /></Panel>
        </aside>
      </div>
    </>
  );
}
