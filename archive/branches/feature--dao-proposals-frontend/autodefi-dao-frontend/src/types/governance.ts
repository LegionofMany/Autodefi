export type ProposalStatus = 'Active' | 'Pending' | 'Passed' | 'Rejected' | 'Executed';
export type UserVote = 'For' | 'Against' | 'Abstain' | 'Not Voted';
export type ProposalCategory =
  | 'Treasury'
  | 'Protocol'
  | 'Risk'
  | 'Governance'
  | 'Marketing'
  | 'Staking'
  | 'Recovery'
  | 'Lending Pool'
  | 'Insurance Fund'
  | 'Revenue Sharing'
  | 'Token Utility'
  | 'Dealer Network'
  | 'Borrower Policy'
  | 'Smart Contract Upgrade'
  | 'DAO Operations';

export interface VoteTotals {
  forAdf: number;
  againstAdf: number;
  abstainAdf: number;
  quorumAdf: number;
}

export interface GovernanceProposal {
  id: string;
  title: string;
  category: ProposalCategory;
  type: string;
  status: ProposalStatus;
  summary: string;
  description: string;
  creator: string;
  createdAt: string;
  startDate: string;
  endDate: string;
  snapshotBlock: string;
  votingPeriod: string;
  endsIn: string;
  icon: 'lending' | 'protocol' | 'insurance' | 'collateral' | 'marketing' | 'staking-rewards' | 'recovery';
  votes: VoteTotals;
  userVote: UserVote;
  votingPowerAdf?: number;
  executed?: boolean;
  impactAreas: string[];
}

export interface DaoMetrics {
  treasuryUsd: number;
  treasuryChange30d: number;
  adfPriceUsd: number;
  adfChangePct: number;
  governancePowerAdf: number;
  governanceSupplyPct: number;
  nextGovernanceCall: string;
  connectedWallet: string;
}
