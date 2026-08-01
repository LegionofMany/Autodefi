import { proposals as localProposals, daoMetrics as localDaoMetrics } from '../data/proposals';
import type { DaoMetrics, GovernanceProposal, UserVote } from '../types/governance';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL?.replace(/\/$/, '');

async function request<T>(path: string, init?: RequestInit): Promise<T> {
  if (!API_BASE_URL) {
    throw new Error('VITE_API_BASE_URL is not configured. Connect this frontend to the completed AutoDeFi backend.');
  }

  const response = await fetch(`${API_BASE_URL}${path}`, {
    headers: {
      'Content-Type': 'application/json',
      ...init?.headers,
    },
    ...init,
  });

  if (!response.ok) {
    const details = await response.text().catch(() => '');
    throw new Error(`AutoDeFi API ${response.status}: ${details || response.statusText}`);
  }

  return response.json() as Promise<T>;
}

export async function getGovernanceMetrics(): Promise<DaoMetrics> {
  if (!API_BASE_URL) return localDaoMetrics;
  return request<DaoMetrics>('/dao/metrics');
}

export async function getProposals(): Promise<GovernanceProposal[]> {
  if (!API_BASE_URL) return localProposals;
  return request<GovernanceProposal[]>('/dao/proposals');
}

export async function castProposalVote(proposalId: string, vote: Exclude<UserVote, 'Not Voted'>): Promise<{ ok: true }> {
  return request<{ ok: true }>(`/dao/proposals/${encodeURIComponent(proposalId)}/vote`, {
    method: 'POST',
    body: JSON.stringify({ vote }),
  });
}
