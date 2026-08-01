import { icons, proposalIcons } from '../assets';
import type { GovernanceProposal } from '../types/governance';
import { formatAdf, pct } from '../utils/format';
import { Badge } from './Badge';
import { Icon } from './Icon';

interface ProposalTableProps {
  proposals: GovernanceProposal[];
  selectedProposalId: string;
  onSelectProposal: (proposal: GovernanceProposal) => void;
}

function VoteSummary({ proposal }: { proposal: GovernanceProposal }) {
  const total = proposal.votes.forAdf + proposal.votes.againstAdf + proposal.votes.abstainAdf;
  const forPct = pct(proposal.votes.forAdf, total);
  const againstPct = pct(proposal.votes.againstAdf, total);

  if (proposal.status === 'Pending') {
    return (
      <div className="vote-summary pending-summary">
        <div className="vote-percent-grid">
          <span><strong>–</strong><small>Voting begins</small></span>
          <span><strong>–</strong><small>Voting begins</small></span>
        </div>
        <div className="pending-bar" />
        <small>Quorum: {formatAdf(proposal.votes.quorumAdf)}</small>
      </div>
    );
  }

  return (
    <div className="vote-summary">
      <div className="vote-percent-grid">
        <span><strong className="for-text">{forPct.toFixed(1)}%</strong><small>For</small></span>
        <span><strong className="against-text">{againstPct.toFixed(1)}%</strong><small>Against</small></span>
      </div>
      <div className="vote-track" aria-hidden="true">
        <span className="vote-for-bar" style={{ width: `${forPct}%` }} />
        <span className="vote-against-bar" style={{ width: `${againstPct}%` }} />
      </div>
      <div className="vote-amounts">
        <small>{formatAdf(proposal.votes.forAdf)}</small>
        <small>{formatAdf(proposal.votes.againstAdf)}</small>
      </div>
      <small>Quorum: {formatAdf(proposal.votes.quorumAdf)}</small>
    </div>
  );
}

export function ProposalTable({ proposals, selectedProposalId, onSelectProposal }: ProposalTableProps) {
  return (
    <section className="proposal-table glass-panel" aria-label="DAO proposals">
      <div className="table-header">
        <span>Proposal</span>
        <span>Status</span>
        <span>For / Against</span>
        <span>Ends In</span>
        <span>Voted</span>
        <span>Action</span>
      </div>

      <div className="table-body">
        {proposals.map((proposal) => {
          const selected = selectedProposalId === proposal.id;
          const voted = proposal.userVote !== 'Not Voted';
          return (
            <article
              key={proposal.id}
              className={`proposal-row ${selected ? 'selected' : ''} status-${proposal.status.toLowerCase()}`}
              onClick={() => onSelectProposal(proposal)}
              tabIndex={0}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') onSelectProposal(proposal);
              }}
              aria-label={`${proposal.title}, ${proposal.status}`}
            >
              <div className="proposal-title-cell">
                <img src={proposalIcons[proposal.icon]} alt="" className="proposal-icon" />
                <div>
                  <div className="proposal-title-line"><strong>{proposal.title}</strong><Badge tone={proposal.category}>{proposal.category}</Badge></div>
                  <p>{proposal.summary}</p>
                  <div className="row-meta"><span>ID: {proposal.id}</span><span>Created by {proposal.creator}</span></div>
                </div>
              </div>

              <div className="status-cell"><Badge tone={proposal.status} size="md">{proposal.status}</Badge>{proposal.executed && <span className="executed-mini"><Icon src={icons.check} />Executed</span>}</div>
              <VoteSummary proposal={proposal} />
              <div className="end-cell"><strong>{proposal.endsIn}</strong><span>{proposal.endDate.split(' ').slice(0, 3).join(' ')}</span><span>{proposal.endDate.split(' ').slice(3).join(' ')}</span></div>
              <div className="voted-cell">
                {voted ? <><Icon src={icons.check} className="voted-check" /><strong>Voted</strong><span>{proposal.votingPowerAdf?.toLocaleString()} ADF</span></> : <><span className="empty-radio" /> <span>Not Voted</span></>}
              </div>
              <div className="action-cell">
                {proposal.status === 'Active' && !voted && <button type="button" className="vote-now-button" onClick={(event) => { event.stopPropagation(); onSelectProposal(proposal); }}>Vote Now</button>}
                <button type="button" className="details-button" onClick={(event) => { event.stopPropagation(); onSelectProposal(proposal); }}>View Details</button>
              </div>
            </article>
          );
        })}
      </div>

      <footer className="table-footer">
        <span>Showing 1 to {proposals.length} of {proposals.length} proposals</span>
        <div className="pagination"><button aria-label="Previous page"><Icon src={icons.chevronLeft} /></button><strong>1</strong><button aria-label="Next page"><Icon src={icons.chevronRight} /></button></div>
      </footer>
    </section>
  );
}
