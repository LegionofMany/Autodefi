import { activeLoan, closedLoan, documents, payments, profile, rewardHistory, transactions } from '../data/autodefi';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

async function getJson<T>(path: string, fallback: T): Promise<T> {
  if (!API_BASE_URL) return fallback;
  try {
    const response = await fetch(`${API_BASE_URL}${path}`, { credentials: 'include' });
    if (!response.ok) throw new Error(`API ${response.status}`);
    return (await response.json()) as T;
  } catch {
    return fallback;
  }
}

export const autodefiApi = {
  getProfile: () => getJson('/borrower/profile', profile),
  getLoans: () => getJson('/borrower/loans', [activeLoan, closedLoan]),
  getActiveLoan: () => getJson('/borrower/loans/active', activeLoan),
  getDocuments: () => getJson('/borrower/documents', documents),
  getTransactions: () => getJson('/borrower/wallet/transactions', transactions),
  getRewards: () => getJson('/borrower/rewards/history', rewardHistory),
  getPayments: () => getJson('/borrower/payments/history', payments)
};
