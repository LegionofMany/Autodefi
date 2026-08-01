import { icons, proposalIcons } from '../assets';
import type { GovernanceProposal } from '../types/governance';
import { formatAdf } from '../utils/format';
import { Badge } from './Badge';
import { Icon } from './Icon';

interface ProposalDetailsProps {
  proposal: GovernanceProposal;
}

export function ProposalDetails({ proposal }: ProposalDetailsProps) {
  return (
    <section className="right-card proposal-detail-card">
      <div className="card-title-row">
        <h2>Proposal Details</h2>
        <Icon src={icons.chevronDown} className="collapse-icon" />
      </div>

      <div className="detail-head">
        <img src={proposalIcons[proposal.icon]} alt="" className="detail-icon" />
        <div className="detail-heading-copy">
          <div className="detail-title-line"><h3>{proposal.title}</h3><Badge tone={proposal.status} size="md">{proposal.status}</Badge></div>
          <Badge tone={proposal.category}>{proposal.category}</Badge>
        </div>
      </div>

      <p className="detail-description">{proposal.description}</p>

      <div className="detail-meta-line">
        <span>ID: <strong>{proposal.id}</strong></span>
        <Icon src={icons.copy} />
        <span>Created by <strong>{proposal.creator}</strong></span>
        <Icon src={icons.calendar} />
      </div>
      <div className="created-date"><Icon src={icons.calendar} /> Created {proposal.createdAt}</div>

      <div className="detail-separator" />

      <dl className="detail-grid">
        <div><dt>Category</dt><dd>{proposal.category}</dd></div>
        <div><dt>Type</dt><dd>{proposal.type}</dd></div>
        <div><dt>Quorum</dt><dd>{formatAdf(proposal.votes.quorumAdf)}</dd></div>
        <div><dt>Voting Period</dt><dd>{proposal.votingPeriod}</dd></div>
        <div><dt>Start Date</dt><dd>{proposal.startDate}</dd></div>
        <div><dt>End Date</dt><dd>{proposal.endDate}</dd></div>
        <div><dt>Snapshot</dt><dd>{proposal.snapshotBlock}</dd></div>
      </dl>

      <div className="detail-separator" />

      <div className="impact-section">
        <h4>Impact Areas</h4>
        <div className="impact-tags">
          {proposal.impactAreas.map((impact, index) => <span key={impact} className={`impact-tag impact-${index % 6}`}>{impact}</span>)}
        </div>
      </div>

      <div className="detail-separator" />

      <div className="summary-block">
        <h4>Summary</h4>
        <p>{proposal.description}</p>
      </div>

      <button type="button" className="full-proposal-button">View Full Proposal <Icon src={icons.external} /></button>
    </section>
  );
}
