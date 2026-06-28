import { icons } from '../assets';
import { Icon } from './Icon';
import type { ProposalStatus } from '../types/governance';

type FilterKey = 'All' | ProposalStatus;

interface ProposalToolbarProps {
  selectedFilter: FilterKey;
  onFilterChange: (filter: FilterKey) => void;
  search: string;
  onSearchChange: (value: string) => void;
  counts: Record<FilterKey, number>;
  onCreateProposal: () => void;
}

const filterTabs: { key: FilterKey; label: string; icon: string }[] = [
  { key: 'All', label: 'All Proposals', icon: icons.proposals },
  { key: 'Active', label: 'Active', icon: icons.vote },
  { key: 'Pending', label: 'Pending', icon: icons.risk },
  { key: 'Passed', label: 'Passed', icon: icons.check },
  { key: 'Rejected', label: 'Rejected', icon: icons.cross },
  { key: 'Executed', label: 'Executed', icon: icons.audit },
];

export function ProposalToolbar({ selectedFilter, onFilterChange, search, onSearchChange, counts, onCreateProposal }: ProposalToolbarProps) {
  return (
    <section className="proposal-toolbar glass-panel">
      <div className="filter-tabs" role="tablist" aria-label="Proposal status filters">
        {filterTabs.map((tab) => (
          <button
            key={tab.key}
            className={`filter-tab ${selectedFilter === tab.key ? 'selected' : ''} ${tab.key.toLowerCase()}`}
            type="button"
            onClick={() => onFilterChange(tab.key)}
          >
            <Icon src={tab.icon} />
            <span>{tab.label}</span>
            <strong>{counts[tab.key]}</strong>
          </button>
        ))}
      </div>
      <div className="toolbar-controls">
        <label className="search-field">
          <span className="sr-only">Search proposals</span>
          <input value={search} onChange={(event) => onSearchChange(event.target.value)} placeholder="Search proposals..." />
          <Icon src={icons.search} />
        </label>
        <button className="outline-button" type="button"><Icon src={icons.filter} /> Filters</button>
        <button className="create-button desktop-create" type="button" onClick={onCreateProposal}><Icon src={icons.plus} /> Create Proposal</button>
      </div>
    </section>
  );
}
