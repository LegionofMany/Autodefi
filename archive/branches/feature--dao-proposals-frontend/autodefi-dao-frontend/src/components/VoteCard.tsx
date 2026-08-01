import { icons } from '../assets';
import type { GovernanceProposal, UserVote } from '../types/governance';
import { Icon } from './Icon';

interface VoteCardProps {
  proposal: GovernanceProposal;
  votingPowerAdf: number;
  onVote: (vote: Exclude<UserVote, 'Not Voted'>) => void;
}

export function VoteCard({ proposal, votingPowerAdf, onVote }: VoteCardProps) {
  const canVote = proposal.status === 'Active' && proposal.userVote === 'Not Voted';
  const alreadyVoted = proposal.userVote !== 'Not Voted';

  return (
    <section className="right-card vote-card">
      <h2>Cast Your Vote</h2>
      <p>You have {votingPowerAdf.toLocaleString()} ADF voting power</p>
      <div className="vote-actions">
        <button type="button" className="vote-choice vote-for" disabled={!canVote} onClick={() => onVote('For')}><Icon src={icons.vote} /> Vote For</button>
        <button type="button" className="vote-choice vote-against" disabled={!canVote} onClick={() => onVote('Against')}><Icon src={icons.cross} /> Vote Against</button>
        <button type="button" className="vote-choice vote-abstain" disabled={!canVote} onClick={() => onVote('Abstain')}><Icon src={icons.governance} /> Abstain</button>
      </div>
      {alreadyVoted && <div className="vote-message success"><Icon src={icons.check} /> You have already voted on this proposal</div>}
      {!alreadyVoted && proposal.status === 'Active' && <div className="vote-message info"><Icon src={icons.audit} /> You have not voted on this proposal</div>}
      {proposal.status === 'Pending' && <div className="vote-message info"><Icon src={icons.calendar} /> Voting has not started yet</div>}
      {(proposal.status === 'Passed' || proposal.status === 'Rejected' || proposal.status === 'Executed') && <div className="vote-message info"><Icon src={icons.audit} /> Voting is closed for this proposal</div>}
    </section>
  );
}
