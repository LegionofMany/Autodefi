import React from 'react';
import { KpiGrid, FilterBar, DataTable, StatusBadge, PoolBadge } from '../components/ui.jsx';
import { borrowers } from '../data/mockData.js';

export const activeLoansActions = [
  { label: 'Collect Payment', icon: '▣' },
  { label: 'Send Reminder', icon: '✉' },
  { label: 'Modify Loan', icon: '✎' },
  { label: 'Refinance Request', icon: '⟳' },
  { label: 'Payoff Quote', icon: '$' },
  { label: 'Download Statement', icon: '⇩' }
];

export default function ActiveLoansPage() {
  const kpis = [
    { label: 'Total Active Loans', value: '11,293', change: '100%', sub: 'of portfolio', tone: 'blue', icon: '$', trend: [18, 19, 20, 21, 20, 23, 22] },
    { label: 'Current Loans', value: '9,842', change: '87.1%', sub: 'of portfolio', tone: 'green', icon: '◔', trend: [65, 67, 70, 68, 72, 76, 78] },
    { label: '30+ Days Past Due', value: '812', change: '7.2%', sub: 'of portfolio', tone: 'orange', icon: '△', trend: [11, 14, 12, 16, 15, 20, 18] },
    { label: '60+ Days Past Due', value: '425', change: '3.8%', sub: 'of portfolio', tone: 'red', icon: '△', trend: [8, 6, 9, 11, 8, 14, 13] },
    { label: '90+ Days Past Due', value: '214', change: '1.9%', sub: 'of portfolio', tone: 'purple', icon: '◔', trend: [6, 8, 7, 9, 10, 11, 12] },
    { label: 'Total Outstanding', value: '$68.11M', change: 'Across', sub: 'all active loans', tone: 'cyan', icon: '$', trend: [40, 42, 45, 43, 48, 50, 55] }
  ];

  const rows = borrowers.slice(0, 8).map((loan) => [
    <label className="check"><input type="checkbox" /></label>,
    <div className="person"><span className="mini-avatar">{loan.initials}</span><span>{loan.borrower}</span></div>,
    loan.vehicle,
    loan.loanId,
    <PoolBadge pool={loan.pool} />,
    loan.loanAmount,
    loan.balance,
    <span className={loan.payment.includes('Late') ? 'inline-warn' : 'inline-ok'}>● {loan.payment}</span>,
    <span>{loan.nextPayment}<small className="subline">({loan.borrower.length % 7 + 2} days)</small></span>,
    <StatusBadge status={loan.status} />,
    <span className={loan.autopay === 'Enrolled' ? 'inline-ok' : 'inline-muted'}>{loan.autopay === 'Enrolled' ? '✓' : '⊗'} {loan.autopay}</span>,
    <span className="row-actions">◉ ⋮</span>
  ]);

  return (
    <>
      <KpiGrid items={kpis} className="six" />
      <FilterBar placeholders={['Search by borrower, vehicle, or loan ID...', 'Status All Statuses', 'Payment Status All', 'Loan Type All', 'Pool All Pools']} />
      <DataTable columns={['', 'Borrower', 'Vehicle', 'Loan ID', 'Pool', 'Loan Amount', 'Outstanding Balance', 'Payment Status', 'Next Payment', 'Status', 'AutoPay', 'Actions']} rows={rows} footer="Showing 1 to 8 of 11,293 results" />
    </>
  );
}
