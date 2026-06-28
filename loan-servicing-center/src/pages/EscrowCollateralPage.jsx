import React from 'react';
import { KpiGrid, FilterBar, DataTable, StatusBadge, Panel, Donut, LegendList } from '../components/ui.jsx';
import { borrowers } from '../data/mockData.js';

export const escrowActions = [
  { label: 'Review Collateral', icon: '◈' },
  { label: 'Update Collateral', icon: '▰' },
  { label: 'Escrow Adjustment', icon: '▣' },
  { label: 'Request Payoff', icon: '$' },
  { label: 'Release Collateral', icon: '▧' },
  { label: 'View Liens', icon: '▤' },
  { label: 'Download Report', icon: '⇩' }
];

export default function EscrowCollateralPage() {
  const kpis = [
    { label: 'Total Collateral Value', value: '$14.28M', change: '↑ 4.21%', sub: 'vs last 30d', tone: 'blue', icon: '◈', trend: [28, 30, 29, 33, 32, 38, 40] },
    { label: 'Collateral Secured Loans', value: '10,892', change: '96.4%', sub: 'of portfolio', tone: 'green', icon: '▣', trend: [70, 72, 74, 73, 78, 80, 83] },
    { label: 'At Risk Collateral', value: '401', change: '3.6%', sub: 'of portfolio', tone: 'orange', icon: '△', trend: [12, 14, 13, 18, 15, 21, 23] },
    { label: 'Escrow Balance', value: '$8.62M', change: '↑ 3.18%', sub: 'vs last 30d', tone: 'purple', icon: '▤', trend: [30, 33, 31, 37, 35, 40, 43] },
    { label: 'Avg. LTV (Current)', value: '61.3%', change: '↓ 1.27%', sub: 'vs last 30d', tone: 'cyan', icon: '◔', trend: [50, 49, 51, 48, 47, 46, 44] }
  ];
  const rows = borrowers.map((loan, index) => {
    const atRisk = index === 3 || index === 4 || index === 6 || index === 8;
    const shortfall = index === 4;
    return [
      <label className="check"><input type="checkbox" /></label>,
      <div className="person"><span className="mini-avatar">{loan.initials}</span><span>{loan.borrower}</span></div>,
      loan.vehicle,
      loan.loanId,
      'Vehicle',
      loan.collateral,
      <span className={parseFloat(loan.ltv) > 64 ? 'ltv orange' : 'ltv green'}>{loan.ltv}<i /></span>,
      loan.escrow,
      <StatusBadge status={atRisk ? 'At Risk' : 'Secured'} />,
      <StatusBadge status={shortfall ? 'Shortfall' : 'Funded'} />,
      <span className="row-actions">◉ ⋮</span>
    ];
  });
  const segments = [{ label: 'Secured', value: '10,451', percent: 95.9, color: 'green' }, { label: 'At Risk', value: '401', percent: 3.6, color: 'orange' }, { label: 'Unsecured', value: '40', percent: 0.5, color: 'red' }];
  return (
    <>
      <KpiGrid items={kpis} />
      <FilterBar placeholders={['Search by borrower, vehicle, or loan ID...', 'Collateral Status All Statuses', 'Collateral Type All Types', 'LTV Range All', 'Escrow Status All']} />
      <div className="content-with-right">
        <DataTable columns={['', 'Borrower', 'Vehicle', 'Loan ID', 'Collateral Type', 'Est. Collateral Value', 'LTV (Current)', 'Escrow Balance', 'Collateral Status', 'Escrow Status', 'Actions']} rows={rows} footer="Showing 1 to 10 of 10,892 results" />
        <aside className="right-stack">
          <Panel title="Collateral Status Overview"><Donut segments={segments} center="10,892" subtitle="Total Loans" /><LegendList items={segments} /></Panel>
          <Panel title="Escrow Health"><div className="metric-list compact"><div><span>✓ Fully Funded</span><strong>10,102 (92.8%)</strong></div><div><span>△ Underfunded</span><strong>632 (5.8%)</strong></div><div><span>⊗ Shortfall</span><strong>158 (1.4%)</strong></div></div></Panel>
          <Panel title="Collateral Alerts"><div className="metric-list compact"><div><span>△ Expiring Liens (30 days)</span><strong>86</strong></div><div><span>△ Insurance Lapse Risk</span><strong>132</strong></div><div><span>⊗ Title Issues</span><strong>24</strong></div></div></Panel>
        </aside>
      </div>
    </>
  );
}
