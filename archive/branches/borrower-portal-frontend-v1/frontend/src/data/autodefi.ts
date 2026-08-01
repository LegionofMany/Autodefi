import type { BorrowerProfile, DocumentItem, Loan, RewardItem, TransactionItem } from '../types/autodefi';

export const profile: BorrowerProfile = {
  name: 'Marcus Johnson',
  status: 'Verified Borrower',
  memberSince: 'May 12, 2025',
  wallet: '0x7a8B...EF23',
  email: 'marcus.johnson@email.com',
  phone: '(555) 123-4567',
  address: '123 DeFi Lane, Toronto, ON M4B 1B3',
  timezone: '(UTC-5) Eastern Time (US & Canada)'
};

export const activeLoan: Loan = {
  vehicle: '2023 Tesla Model Y Long Range',
  vin: '7SAYGDEEXNF123456',
  loanId: 'LN-84723',
  originalDate: 'May 10, 2025',
  amount: 35000,
  balance: 28450.67,
  monthlyPayment: 624.35,
  apr: 9.82,
  termMonths: 60,
  remainingMonths: 32,
  nextDueDate: 'May 20, 2025',
  paidToDate: 6549.33,
  interestPaid: 2461,
  status: 'On Track',
  frequency: 'Monthly',
  payoffAmount: 28302.11
};

export const closedLoan: Loan = {
  ...activeLoan,
  vehicle: '2020 Honda Civic EX',
  vin: '2HGFC2F7XLH123456',
  loanId: 'LN-59210',
  originalDate: 'Feb 15, 2022',
  amount: 22318.44,
  balance: 0,
  monthlyPayment: 0,
  apr: 8.99,
  termMonths: 48,
  remainingMonths: 0,
  paidToDate: 22318.44,
  payoffAmount: 0,
  status: 'Paid Off'
};

export const documents: DocumentItem[] = [
  ['Loan Agreement','Loan_Agreement.pdf','Loan Documents','May 10, 2025','2.4 MB','Verified'],
  ['Truth in Lending Disclosure','TIL_Disclosure.pdf','Loan Documents','May 10, 2025','1.1 MB','Verified'],
  ['Payment Schedule','Payment_Schedule.pdf','Loan Documents','May 10, 2025','845 KB','Verified'],
  ['Vehicle Title','Title_1HGCM82633A004352.pdf','Vehicle Documents','May 11, 2025','1.6 MB','Verified'],
  ['VIN Verification','VIN_1HGCM82633A004352.jpg','Vehicle Documents','May 11, 2025','1.2 MB','Verified'],
  ['Proof of Insurance','Insurance_Declaration.pdf','Insurance','May 18, 2025','960 KB','Verified'],
  ['Driver’s License','DL_Marcus_Johnson.pdf','Personal Documents','May 9, 2025','1.3 MB','Verified'],
  ['Proof of Income','Paystub_May2025.pdf','Personal Documents','May 9, 2025','1.7 MB','Verified']
].map(([name,file,category,uploaded,size,status]) => ({ name, file, category, uploaded, size, status }));

export const transactions: TransactionItem[] = [
  { type: 'Deposit', description: 'From Chase Bank (•••• 4587)', status: 'Completed', amount: 1000, date: 'May 18, 2025 10:24 AM' },
  { type: 'Payment', description: 'Loan Payment – LN-2025-0017', status: 'Completed', amount: -624.35, date: 'May 18, 2025 10:20 AM' },
  { type: 'Escrow', description: 'Collateral Lock – 2025-0008', status: 'Locked', amount: -500, date: 'May 17, 2025 4:15 PM' },
  { type: 'Deposit', description: 'From Wells Fargo (•••• 9821)', status: 'Completed', amount: 2000, date: 'May 16, 2025 9:08 AM' },
  { type: 'Convert', description: 'USDT to USDC', status: 'Completed', amount: 250, date: 'May 15, 2025 2:33 PM' }
];

export const rewardHistory: RewardItem[] = [
  { date: 'May 20, 2025', type: 'Monthly Payment Bonus', description: 'On-time payment reward', adf: 50, usd: 2.5 },
  { date: 'May 20, 2025', type: 'AutoPay Reward', description: 'AutoPay active bonus', adf: 25, usd: 1.25 },
  { date: 'May 18, 2025', type: 'Referral Bonus', description: 'Referral: 0xAb12...9f3e', adf: 100, usd: 5 },
  { date: 'May 15, 2025', type: 'Staking Yield Bonus', description: 'Staked 1,250 ADF', adf: 30, usd: 1.5 },
  { date: 'May 10, 2025', type: 'Insurance Loyalty Bonus', description: 'Insurance bundle active', adf: 40, usd: 2 }
];

export const payments = ['Apr 20, 2025','Mar 20, 2025','Feb 20, 2025','Jan 20, 2025','Dec 20, 2024'].map((date, index) => ({
  date,
  amount: 624.35,
  principal: [438.75,435.60,432.40,429.15,425.85][index],
  interest: [186.60,188.75,191.95,195.20,198.50][index],
  status: index === 0 || index === 4 ? 'On Time' : 'Paid',
  method: 'USDC'
}));
