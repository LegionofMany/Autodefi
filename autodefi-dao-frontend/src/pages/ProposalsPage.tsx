import { useEffect, useMemo, useState } from 'react';
import { CreateProposalModal } from '../components/CreateProposalModal';
import { CurrentResults } from '../components/CurrentResults';
import { ProposalDetails } from '../components/ProposalDetails';
import { ProposalTable } from '../components/ProposalTable';
import { ProposalToolbar } from '../components/ProposalToolbar';
import { Sidebar } from '../components/Sidebar';
import { Topbar } from '../components/Topbar';
import { VoteCard } from '../components/VoteCard';
import { daoMetrics as seedMetrics, proposals as seedProposals } from '../data/proposals';
import { getGovernanceMetrics, getProposals } from '../services/governanceApi';
import type { DaoMetrics, GovernanceProposal, ProposalStatus, UserVote } from '../types/governance';

type FilterKey = 'All' | ProposalStatus;

export function ProposalsPage() {
  const [metrics, setMetrics] = useState<DaoMetrics>(seedMetrics);
  const [proposals, setProposals] = useState<GovernanceProposal[]>(seedProposals);
  const [selectedId, setSelectedId] = useState('#ADF-125');
  const [filter, setFilter] = useState<FilterKey>('All');
  const [search, setSearch] = useState('');
  const [createOpen, setCreateOpen] = useState(false);

  useEffect(() => {
    let alive = true;
    Promise.all([getGovernanceMetrics(), getProposals()])
      .then(([nextMetrics, nextProposals]) => {
        if (!alive) return;
        setMetrics(nextMetrics);
        setProposals(nextProposals);
        if (nextProposals.length && !nextProposals.some((proposal) => proposal.id === selectedId)) {
          setSelectedId(nextProposals[0].id);
        }
      })
      .catch(() => {
        // The checked-in seed state keeps the approved AutoDeFi design visible until VITE_API_BASE_URL is configured.
      });
    return () => { alive = false; };
  }, []);

  const counts = useMemo(() => {
    const base: Record<FilterKey, number> = { All: proposals.length, Active: 0, Pending: 0, Passed: 0, Rejected: 0, Executed: 0 };
    proposals.forEach((proposal) => {
      base[proposal.status] += 1;
      if (proposal.executed) base.Executed += 1;
    });
    return base;
  }, [proposals]);

  const visibleProposals = useMemo(() => {
    const q = search.trim().toLowerCase();
    return proposals.filter((proposal) => {
      const matchesFilter = filter === 'All' || proposal.status === filter || (filter === 'Executed' && proposal.executed);
      const searchable = [proposal.title, proposal.id, proposal.category, proposal.status, proposal.creator, proposal.summary, proposal.description].join(' ').toLowerCase();
      return matchesFilter && (!q || searchable.includes(q));
    });
  }, [proposals, filter, search]);

  const selectedProposal = useMemo(() => {
    return proposals.find((proposal) => proposal.id === selectedId) ?? visibleProposals[0] ?? proposals[0];
  }, [proposals, selectedId, visibleProposals]);

  const handleSelectProposal = (proposal: GovernanceProposal) => {
    setSelectedId(proposal.id);
  };

  const handleVote = (vote: Exclude<UserVote, 'Not Voted'>) => {
    setProposals((current) => current.map((proposal) => proposal.id === selectedProposal.id ? { ...proposal, userVote: vote, votingPowerAdf: metrics.governancePowerAdf } : proposal));
  };

  return (
    <div className="app-shell">
      <Sidebar metrics={metrics} />
      <main className="main-content">
        <Topbar metrics={metrics} onCreateProposal={() => setCreateOpen(true)} />
        <ProposalToolbar selectedFilter={filter} onFilterChange={setFilter} search={search} onSearchChange={setSearch} counts={counts} onCreateProposal={() => setCreateOpen(true)} />
        <section className="content-grid">
          <ProposalTable proposals={visibleProposals} selectedProposalId={selectedProposal.id} onSelectProposal={handleSelectProposal} />
          <aside className="right-column">
            <ProposalDetails proposal={selectedProposal} />
            <CurrentResults proposal={selectedProposal} />
            <VoteCard proposal={selectedProposal} votingPowerAdf={metrics.governancePowerAdf} onVote={handleVote} />
          </aside>
        </section>
      </main>
      <CreateProposalModal open={createOpen} onClose={() => setCreateOpen(false)} />
    </div>
  );
}
