const API_BASE_URL = import.meta.env.VITE_AUTODEFI_API_BASE_URL ?? '';

export type ApiResult<T> = {
  data: T | null;
  error: string | null;
};

export async function autodefiApi<T>(path: string, init?: RequestInit): Promise<ApiResult<T>> {
  try {
    const response = await fetch(`${API_BASE_URL}${path}`, {
      headers: { 'Content-Type': 'application/json', ...(init?.headers ?? {}) },
      ...init
    });

    if (!response.ok) {
      return { data: null, error: `AutoDeFi API error ${response.status}` };
    }

    return { data: (await response.json()) as T, error: null };
  } catch (error) {
    return { data: null, error: error instanceof Error ? error.message : 'Unknown AutoDeFi API error' };
  }
}

export const endpoints = {
  tokenUtility: '/dao/token-utility',
  tokenomics: '/dao/tokenomics',
  staking: '/dao/staking',
  governance: '/dao/governance',
  treasury: '/dao/treasury',
  borrower: '/borrower/dashboard',
  dealer: '/dealer/dashboard',
  capitalYield: '/capital-yield/dashboard',
  risk: '/risk/dashboard',
  insurance: '/insurance-recovery/dashboard',
  smartContract: '/dao/token/smart-contract',
  audit: '/dao/token/audit',
  analytics: '/dao/token/analytics'
};
