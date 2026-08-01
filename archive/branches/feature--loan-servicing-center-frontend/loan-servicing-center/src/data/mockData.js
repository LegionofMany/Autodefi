export const sidebarItems = [
  { key: 'dashboard', label: 'Dashboard', icon: '⌂' },
  { key: 'servicing', label: 'Loan Servicing', icon: '$' },
  { key: 'active-loans', label: 'Active Loans', icon: '▰' },
  { key: 'payment-history', label: 'Payment History', icon: '▤' },
  { key: 'escrow-collateral', label: 'Escrow & Collateral', icon: '◈' },
  { key: 'insurance', label: 'Insurance', icon: '☂' },
  { key: 'refinance', label: 'Refinance Center', icon: '⟳' },
  { key: 'modifications', label: 'Loan Modifications', icon: '☷' },
  { key: 'statements', label: 'Statements', icon: '▧' },
  { key: 'reports', label: 'Reports', icon: '▥' }
];

export const dashboardKpis = [
  { label: 'Total Loans Serviced', value: '11,293', change: '↑ 12.81%', sub: 'vs last 30d', tone: 'blue', icon: '$', trend: [25, 28, 24, 29, 27, 31, 26, 40, 33, 36] },
  { label: 'Current Portfolio Value', value: '$78.42M', change: '↑ 8.33%', sub: 'vs last 30d', tone: 'blue', icon: '▣', trend: [38, 41, 37, 44, 40, 46, 43, 52, 48, 58] },
  { label: 'Total Outstanding', value: '$68.11M', change: '↑ 6.21%', sub: 'vs last 30d', tone: 'purple', icon: '◔', trend: [30, 34, 28, 39, 36, 42, 33, 48, 41, 53] },
  { label: 'Delinquency Rate (30+)', value: '1.87%', change: '↓ 0.34%', sub: 'vs last 30d', tone: 'orange', icon: '△', trend: [16, 12, 20, 14, 22, 18, 30, 24, 36, 28] },
  { label: 'Average Remaining Term', value: '32.4 Months', change: '—', sub: 'No change vs last 30d', tone: 'green', icon: '◷', trend: [26, 28, 24, 29, 27, 31, 25, 30, 28, 39] }
];

export const loanStatusSegments = [
  { label: 'Current', value: 9842, percent: 87.1, color: 'green' },
  { label: '30+ Days', value: 812, percent: 7.2, color: 'orange' },
  { label: '60+ Days', value: 425, percent: 3.8, color: 'yellow' },
  { label: '90+ Days', value: 214, percent: 1.9, color: 'red' }
];

export const borrowers = [
  { initials: 'MJ', borrower: 'Marcus Johnson', vehicle: '2023 Tesla Model Y', loanId: 'ADFI-78291', pool: 'Pool A', loanAmount: '$28,500.00', balance: '$24,820.35', payment: 'On Time', nextPayment: 'May 15, 2025', status: 'Current', autopay: 'Enrolled', rate: '8.49%', proposed: '6.39%', savings: '$142.35', collateral: '$28,500.00', ltv: '58.7%', escrow: '$1,820.35', insurance: 'Progressive', policy: 'PRG-88900123' },
  { initials: 'SM', borrower: 'Sophia Martinez', vehicle: '2022 BMW X5', loanId: 'ADFI-78292', pool: 'Pool A', loanAmount: '$35,200.00', balance: '$31,450.20', payment: 'On Time', nextPayment: 'May 16, 2025', status: 'Current', autopay: 'Enrolled', rate: '9.25%', proposed: '6.74%', savings: '$168.90', collateral: '$35,800.00', ltv: '62.1%', escrow: '$2,140.20', insurance: 'State Farm', policy: 'SF-55877422' },
  { initials: 'JW', borrower: 'James Wilson', vehicle: '2021 Ford F-150', loanId: 'ADFI-78293', pool: 'Pool B', loanAmount: '$21,800.00', balance: '$18,730.65', payment: 'Late (1–30)', nextPayment: 'May 17, 2025', status: '30+ Day', autopay: 'Enrolled', rate: '7.99%', proposed: '6.24%', savings: '$98.76', collateral: '$24,600.00', ltv: '57.6%', escrow: '$1,450.65', insurance: 'GEICO', policy: 'GEC-66778811' },
  { initials: 'OS', borrower: 'Olivia Smith', vehicle: '2022 Audi Q7', loanId: 'ADFI-78294', pool: 'Pool B', loanAmount: '$38,100.00', balance: '$36,125.40', payment: 'On Time', nextPayment: 'May 18, 2025', status: 'Current', autopay: 'Not Enrolled', rate: '9.49%', proposed: '6.49%', savings: '$176.45', collateral: '$38,700.00', ltv: '64.2%', escrow: '$2,310.40', insurance: 'Allstate', policy: 'ALL-33445566' },
  { initials: 'DB', borrower: 'Daniel Brown', vehicle: '2020 Jeep Grand Cherokee', loanId: 'ADFI-78295', pool: 'Pool C', loanAmount: '$24,900.00', balance: '$22,910.15', payment: 'Late (1–30)', nextPayment: 'May 18, 2025', status: '30+ Day', autopay: 'Enrolled', rate: '10.25%', proposed: '7.24%', savings: '$210.60', collateral: '$22,000.00', ltv: '69.3%', escrow: '$1,120.15', insurance: 'Nationwide', policy: 'NAT-11223344' },
  { initials: 'EW', borrower: 'Emily Watson', vehicle: '2023 Honda CR-V', loanId: 'ADFI-78296', pool: 'Pool C', loanAmount: '$26,300.00', balance: '$23,870.45', payment: 'On Time', nextPayment: 'May 19, 2025', status: 'Current', autopay: 'Enrolled', rate: '8.75%', proposed: '6.25%', savings: '$134.22', collateral: '$26,800.00', ltv: '59.2%', escrow: '$1,760.45', insurance: 'Progressive', policy: 'PRG-99001122' },
  { initials: 'LM', borrower: 'Liam Miller', vehicle: '2022 Toyota Highlander', loanId: 'ADFI-78297', pool: 'Pool A', loanAmount: '$29,750.00', balance: '$26,540.80', payment: 'Late (31+)', nextPayment: 'May 20, 2025', status: '60+ Day', autopay: 'Not Enrolled', rate: '7.49%', proposed: '5.99%', savings: '$87.13', collateral: '$29,900.00', ltv: '65.8%', escrow: '$1,980.80', insurance: 'State Farm', policy: 'SF-77889900' },
  { initials: 'AC', borrower: 'Ava Clark', vehicle: '2021 Chevrolet Tahoe', loanId: 'ADFI-78298', pool: 'Pool B', loanAmount: '$41,200.00', balance: '$38,765.30', payment: 'On Time', nextPayment: 'May 21, 2025', status: 'Current', autopay: 'Enrolled', rate: '9.99%', proposed: '7.49%', savings: '$198.75', collateral: '$41,500.00', ltv: '60.1%', escrow: '$2,650.30', insurance: 'Allstate', policy: 'ALL-55667788' },
  { initials: 'ND', borrower: 'Noah Davis', vehicle: '2021 Lexus RX 350', loanId: 'ADFI-78299', pool: 'Pool B', loanAmount: '$31,200.00', balance: '$27,720.10', payment: 'On Time', nextPayment: 'May 22, 2025', status: 'Current', autopay: 'Enrolled', rate: '8.30%', proposed: '6.15%', savings: '$123.80', collateral: '$31,200.00', ltv: '63.4%', escrow: '$1,920.00', insurance: 'GEICO', policy: 'GEC-22334455' },
  { initials: 'IT', borrower: 'Isabella Thomas', vehicle: '2022 Nissan Rogue', loanId: 'ADFI-78300', pool: 'Pool C', loanAmount: '$20,900.00', balance: '$18,410.25', payment: 'On Time', nextPayment: 'May 23, 2025', status: 'Current', autopay: 'Enrolled', rate: '7.25%', proposed: '5.74%', savings: '$75.40', collateral: '$20,900.00', ltv: '56.8%', escrow: '$1,210.25', insurance: 'Nationwide', policy: 'NAT-33445566' }
];

export const paymentRows = [
  ['May 12, 2025', 'Marcus Johnson', 'ADFI-78291', 'Regular Payment', 'May 15, 2025', '$820.35', '$820.35', 'On Time', 'AutoPay (USDC)'],
  ['May 11, 2025', 'Sophia Martinez', 'ADFI-78292', 'Regular Payment', 'May 16, 2025', '$910.20', '$910.20', 'On Time', 'AutoPay (USDC)'],
  ['May 10, 2025', 'James Wilson', 'ADFI-78293', 'Regular Payment', 'May 17, 2025', '$645.65', '$645.65', 'Late (1–30)', 'Bank Transfer'],
  ['May 10, 2025', 'Olivia Smith', 'ADFI-78294', 'Regular Payment', 'May 18, 2025', '$1,125.40', '$1,125.40', 'On Time', 'AutoPay (USDC)'],
  ['May 9, 2025', 'Daniel Brown', 'ADFI-78295', 'Regular Payment', 'May 18, 2025', '$730.15', '$730.15', 'Late (1–30)', 'Debit Card'],
  ['May 8, 2025', 'Emily Watson', 'ADFI-78296', 'Partial Payment', 'May 19, 2025', '$820.45', '$400.00', 'Late (31+)', 'Bank Transfer'],
  ['May 8, 2025', 'Liam Miller', 'ADFI-78297', 'Regular Payment', 'May 20, 2025', '$885.80', '$885.80', 'Late (31+)', 'Manual (Admin)'],
  ['May 7, 2025', 'Ava Clark', 'ADFI-78298', 'Regular Payment', 'May 21, 2025', '$945.30', '$945.30', 'On Time', 'AutoPay (USDC)'],
  ['May 6, 2025', 'Noah Davis', 'ADFI-78299', 'Extra Payment', 'May 22, 2025', '$0.00', '$500.00', 'On Time', 'Bank Transfer'],
  ['May 5, 2025', 'Isabella Thomas', 'ADFI-78300', 'Regular Payment', 'May 23, 2025', '$815.25', '$815.25', 'On Time', 'AutoPay (USDC)']
];

export const statementRows = [
  ['STM-2025-05012', 'Marcus Johnson', 'ADFI-78291', 'Monthly Statement', 'May 12, 2025', 'Apr 12 - May 12, 2025', '$820.35', 'Email', 'Delivered', 'May 12, 2025 8:32 AM'],
  ['STM-2025-05011', 'Sophia Martinez', 'ADFI-78292', 'Monthly Statement', 'May 12, 2025', 'Apr 12 - May 12, 2025', '$910.20', 'Portal', 'Delivered', 'May 12, 2025 6:14 AM'],
  ['STM-2025-05010', 'James Wilson', 'ADFI-78293', 'Monthly Statement', 'May 12, 2025', 'Apr 12 - May 12, 2025', '$645.65', 'Email', 'Delivered', 'May 12, 2025 7:45 AM'],
  ['STM-2025-05009', 'Olivia Smith', 'ADFI-78294', 'Monthly Statement', 'May 12, 2025', 'Apr 12 - May 12, 2025', '$1,125.40', 'Portal', 'Delivered', 'May 12, 2025 1:22 AM'],
  ['STM-2025-05008', 'Daniel Brown', 'ADFI-78295', 'Payoff Statement', 'May 11, 2025', 'As of May 11, 2025', '$24,820.35', 'Email', 'Delivered', 'May 11, 2025 3:10 PM'],
  ['STM-2025-05007', 'Emily Watson', 'ADFI-78296', 'Monthly Statement', 'May 11, 2025', 'Apr 11 - May 11, 2025', '$820.45', 'Email', 'Failed', '—'],
  ['STM-2025-05006', 'Liam Miller', 'ADFI-78297', 'Monthly Statement', 'May 11, 2025', 'Apr 11 - May 11, 2025', '$885.80', 'Email', 'Bounced', '—'],
  ['STM-2025-05005', 'Ava Clark', 'ADFI-78298', 'Year-End Statement', 'May 10, 2025', 'Jan 1 - Dec 31, 2024', '—', 'Portal', 'Delivered', 'May 10, 2025 11:08 AM'],
  ['STM-2025-05004', 'Noah Davis', 'ADFI-78299', 'Monthly Statement', 'May 10, 2025', 'Apr 10 - May 10, 2025', '$615.20', 'Email', 'Delivered', 'May 10, 2025 9:19 AM'],
  ['STM-2025-05003', 'Isabella Thomas', 'ADFI-78300', 'Monthly Statement', 'May 10, 2025', 'Apr 10 - May 10, 2025', '$815.25', 'Portal', 'Delivered', 'May 10, 2025 8:05 AM']
];

export const reportPerformanceRows = [
  ['Total Portfolio Value', '$78.42M', '$72.36M', '$6.06M', '8.33%'],
  ['Total Outstanding', '$68.11M', '$64.12M', '$3.99M', '6.21%'],
  ['Total Loans Serviced', '11,293', '10,001', '1,292', '12.81%'],
  ['New Loans Funded', '1,245', '1,032', '213', '20.64%'],
  ['Loans Paid Off', '842', '715', '127', '17.76%'],
  ['30+ Delinquency Rate', '1.87%', '2.21%', '-0.34%', '15.38%'],
  ['Charge-off Rate (Annualized)', '0.46%', '0.59%', '-0.13%', '22.03%'],
  ['Avg. Interest Rate', '8.67%', '8.79%', '-0.12%', '1.37%'],
  ['Avg. Remaining Term', '32.4', '32.3', '0.1', '0.31%']
];
