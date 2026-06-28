import React from 'react';
import LoanServicingPage, { loanServicingActions } from './LoanServicingPage.jsx';

export default function DashboardPage() {
  return <LoanServicingPage />;
}

export { loanServicingActions as dashboardActions };
