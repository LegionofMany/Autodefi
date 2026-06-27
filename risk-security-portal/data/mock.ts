export const trend = Array.from({ length: 30 }, (_, i) => ({
  day: i + 1,
  risk: 38 + Math.round(Math.sin(i / 2) * 6 + i / 9),
  fraud: 20 + Math.round(Math.cos(i / 3) * 5 + i / 12),
  compliance: 82 + Math.round(Math.sin(i / 4) * 4),
  security: 62 + Math.round(Math.cos(i / 5) * 7),
}));

export const donut = [
  { name: 'Low', value: 42 },
  { name: 'Moderate', value: 31 },
  { name: 'High', value: 19 },
  { name: 'Critical', value: 8 }
];

export const transactions = [
  ['0x1234567-89012', 'Hedera (HBAR)', 'Loan Disbursement', 'AutoDeFi Pool', 'Dealer ABC Motors', '$48,500.00', 'Low', 'Completed'],
  ['0x9876543-21098', 'Bank Rails (ACH)', 'Repayment', '0x871c...a9F2', 'AutoDeFi Pool', '$1,245.62', 'Low', 'Completed'],
  ['0x1122334-44556', 'Off-Chain Portal', 'Dealer Payout', 'AutoDeFi Pool', 'Speedway Auto Group', '$32,780.00', 'Low', 'Completed'],
  ['0x9988776-66554', 'Wire Transfer', 'Dealer Payout', 'AutoDeFi Pool', 'Prime Auto Dealer', '$27,650.00', 'Medium', 'Pending Review'],
  ['0x6677889-90123', 'Card / PSP', 'Repayment', '0xD12f...ee44', 'AutoDeFi Pool', '$852.44', 'High', 'Flagged']
];

export const listRows = [
  ['ADF-25-12987', 'Borrower Risk', 'KYC / AML Engine', 'Nigeria', '92', 'High Priority'],
  ['ADF-25-12912', 'Dealer Funding', 'Dealer Audit Pack', 'UAE', '88', 'Investigating'],
  ['ADF-25-12876', 'Smart Contract', 'Treasury Review', 'Brazil', '87', 'Escalated'],
  ['ADF-25-12831', 'Protocol Risk', 'ADF Pool Monitor', 'Pakistan', '82', 'Review'],
  ['ADF-25-12794', 'Network Health', 'Hedera Monitor', 'Philippines', '78', 'New']
];
