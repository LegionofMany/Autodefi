export type NavKey =
  | 'dashboard' | 'prequal' | 'application' | 'loans' | 'payments' | 'autopay'
  | 'refinance' | 'insurance' | 'documents' | 'collateral' | 'rewards' | 'wallet'
  | 'support' | 'settings';

export interface BorrowerProfile {
  name: string;
  status: string;
  memberSince: string;
  wallet: string;
  email: string;
  phone: string;
  address: string;
  timezone: string;
}

export interface Loan {
  vehicle: string;
  vin: string;
  loanId: string;
  originalDate: string;
  amount: number;
  balance: number;
  monthlyPayment: number;
  apr: number;
  termMonths: number;
  remainingMonths: number;
  nextDueDate: string;
  paidToDate: number;
  interestPaid: number;
  status: string;
  frequency: string;
  payoffAmount: number;
}

export interface DocumentItem {
  name: string;
  file: string;
  category: string;
  uploaded: string;
  size: string;
  status: string;
}

export interface TransactionItem {
  type: string;
  description: string;
  status: string;
  amount: number;
  date: string;
}

export interface RewardItem {
  date: string;
  type: string;
  description: string;
  adf: number;
  usd: number;
}
