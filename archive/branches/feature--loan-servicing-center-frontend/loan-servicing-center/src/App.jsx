import React, { useMemo, useState } from 'react';
import { PageShell } from './components/ui.jsx';
import DashboardPage, { dashboardActions } from './pages/DashboardPage.jsx';
import LoanServicingPage, { loanServicingActions } from './pages/LoanServicingPage.jsx';
import ActiveLoansPage, { activeLoansActions } from './pages/ActiveLoansPage.jsx';
import PaymentHistoryPage, { paymentHistoryActions } from './pages/PaymentHistoryPage.jsx';
import EscrowCollateralPage, { escrowActions } from './pages/EscrowCollateralPage.jsx';
import InsurancePage, { insuranceActions } from './pages/InsurancePage.jsx';
import RefinanceCenterPage, { refinanceActions } from './pages/RefinanceCenterPage.jsx';
import LoanModificationsPage, { modificationActions } from './pages/LoanModificationsPage.jsx';
import StatementsPage, { statementsActions } from './pages/StatementsPage.jsx';
import ReportsPage, { reportsActions } from './pages/ReportsPage.jsx';

const pages = {
  dashboard: {
    title: 'Loan Servicing Center',
    subtitle: 'Manage and monitor your active loan portfolio',
    Component: DashboardPage,
    actions: dashboardActions
  },
  servicing: {
    title: 'Loan Servicing Center',
    subtitle: 'Manage and monitor your active loan portfolio',
    Component: LoanServicingPage,
    actions: loanServicingActions
  },
  'active-loans': {
    title: 'Active Loans',
    subtitle: 'View and manage all active loans in the portfolio',
    Component: ActiveLoansPage,
    actions: activeLoansActions
  },
  'payment-history': {
    title: 'Payment History',
    subtitle: 'View and track payment activity for all loans',
    Component: PaymentHistoryPage,
    actions: paymentHistoryActions
  },
  'escrow-collateral': {
    title: 'Escrow & Collateral',
    subtitle: 'Monitor escrow accounts and collateral securing all active loans',
    Component: EscrowCollateralPage,
    actions: escrowActions
  },
  insurance: {
    title: 'Insurance',
    subtitle: 'Monitor insurance coverage and compliance for all active loans',
    Component: InsurancePage,
    actions: insuranceActions
  },
  refinance: {
    title: 'Refinance Center',
    subtitle: 'Manage refinance requests and track refinance activity',
    Component: RefinanceCenterPage,
    actions: refinanceActions
  },
  modifications: {
    title: 'Loan Modifications',
    subtitle: 'Manage loan modification requests and track modification performance',
    Component: LoanModificationsPage,
    actions: modificationActions
  },
  statements: {
    title: 'Statements',
    subtitle: 'Generate, manage, and deliver loan statements for borrowers',
    Component: StatementsPage,
    actions: statementsActions
  },
  reports: {
    title: 'Reports',
    subtitle: 'Analyze loan portfolio performance and generate insights',
    Component: ReportsPage,
    actions: reportsActions
  }
};

export default function App() {
  const [active, setActive] = useState('servicing');
  const page = useMemo(() => pages[active] ?? pages.servicing, [active]);
  const Component = page.Component;

  return (
    <PageShell active={active} onChange={setActive} title={page.title} subtitle={page.subtitle} actions={page.actions}>
      <Component />
    </PageShell>
  );
}
