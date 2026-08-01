import { useCallback, useEffect, useMemo, useState } from 'react';
import { Button } from '../components/Button';
import { useActionCenter } from '../components/ActionCenter';
import { Card, CardTitle } from '../components/Card';
import { DashboardGraphic } from '../components/DashboardGraphic';
import { Icon } from '../components/Icon';
import { StatusPill } from '../components/StatusPill';
import { DonutChart, LineChart } from '../components/SvgCharts';
import { modulePages, proposals, tierPools, revenueDistribution, type Tone } from '../data/autodefiData';

type ModulePageProps = { id: string };

type ModulePageContent = {
  readonly title: string;
  readonly subtitle: string;
  readonly cards: readonly (readonly string[])[];
};

const genericCopy: Record<string, ModulePageContent> = {
  'investor-portal': { title: 'Investor Portal', subtitle: 'Portfolio allocation, earnings, opportunities, reporting, and investor controls.', cards: [['Portfolio', 'Allocation, principal, realized yield, APY, and current position health.'], ['Opportunities', 'Available loan pools, risk tiers, terms, and insurance protection.'], ['Earnings', 'Accrued yield, distributions, statements, and transaction history.'], ['Reports', 'Performance, risk, tax, and portfolio export controls.']] },
  'ai-underwriter': { title: 'AI Underwriter Command Center', subtitle: 'Application review, AI scoring, bureau analysis, risk decisions, and underwriting controls.', cards: [['Application Queue', 'New, reviewing, escalated, approved, and declined applications.'], ['Bureau Analysis', 'Credit, income, identity, cash flow, fraud, and affordability signals.'], ['Decision Engine', 'Risk tier, loan structure, rate, term, conditions, and confidence.'], ['Human Review', 'Manual overrides, reason codes, audit evidence, and decision history.']] },
  'ai-underwriter-v2': { title: 'AI Underwriter V2', subtitle: 'Shadow-audited underwriting modules, verification, explainability, and decision controls.', cards: [['Bureau Audit', 'Credit bureau normalization, disputes, tradelines, and confidence checks.'], ['Fraud Defense', 'Identity, velocity, synthetic identity, device, and document signals.'], ['Affordability', 'Income verification, bank analysis, obligations, and payment capacity.'], ['Decision Audit', 'Model output, human review, reason codes, controls, and evidence.']] },
  'dealer-marketplace': { title: 'Dealer Marketplace', subtitle: 'Vehicle inventory, financing opportunities, dealer offers, and marketplace transactions.', cards: [['Inventory', 'Approved dealer listings, VIN data, pricing, condition, and availability.'], ['Financing', 'Eligible programs, terms, risk tiers, down payment, and coverage.'], ['Offers', 'Active offers, approvals, expirations, and counteroffers.'], ['Transactions', 'Settlement, funding, title, delivery, and marketplace activity.']] },
  marketplace: { title: 'AutoDeFi Marketplace', subtitle: 'Search, finance, allocate, and settle approved vehicle and loan opportunities.', cards: [['Browse', 'Vehicle and loan listings by tier, return, term, dealer, and region.'], ['Compare', 'Pricing, expected yield, protection, LTV, and risk comparison.'], ['Finance', 'Application, approval, funding, and settlement workflow.'], ['Activity', 'Saved items, offers, allocations, documents, and transaction history.']] },
  'marketplace-center': { title: 'Marketplace Center', subtitle: 'Marketplace listings, offers, activity, settlement, and operational controls.', cards: [['Listings', 'Active, pending, sold, recovered, and paused marketplace inventory.'], ['Offers', 'Buyer, dealer, lender, and DAO offer workflows.'], ['Settlement', 'Funding, transfer, title, documentation, and payout status.'], ['Operations', 'Exceptions, reviews, disputes, alerts, and marketplace reporting.']] },
  'liquidation-marketplace': { title: 'Liquidation Marketplace', subtitle: 'Recovered collateral listings, auctions, sales, settlement, and lender recovery.', cards: [['Recovered Assets', 'Vehicle details, condition, title, valuation, and recovery status.'], ['Auction Queue', 'Upcoming, active, ended, reserve, and winning bid workflows.'], ['Settlement', 'Buyer verification, payment, title transfer, and release controls.'], ['Recovery Allocation', 'Proceeds, fees, lender recovery, insurance, and DAO accounting.']] },
  'loan-servicing': { title: 'Loan Servicing Center', subtitle: 'Active accounts, schedules, payments, documents, exceptions, and servicing operations.', cards: [['Active Loans', 'Balances, APR, term, payment status, collateral, and account health.'], ['Payment Center', 'Schedules, autopay, receipts, adjustments, and payoff quotes.'], ['Service Queue', 'Borrower requests, exceptions, promises, disputes, and escalations.'], ['Documents', 'Contracts, statements, notices, insurance, and servicing history.']] },
  'collections-recovery': { title: 'Collections & Recovery Center', subtitle: 'Delinquency, outreach, workouts, repossession, legal status, and asset recovery.', cards: [['Collections Queue', 'Past-due accounts, priority, contact status, balance, and owner.'], ['Workouts', 'Payment plans, promises, extensions, hardship, and settlement options.'], ['Repossession', 'Assignment, agent, location, title, condition, and recovery status.'], ['Recovery Performance', 'Cure, repo, sale, proceeds, loss, and insurance coverage.']] },
  'insurance-claims': { title: 'Insurance Claims Center', subtitle: 'Claim intake, review, evidence, coverage, reserves, settlement, and recovery.', cards: [['Claim Intake', 'Loss event, borrower, vehicle, policy, documents, and initial reserve.'], ['Assessment', 'Coverage validation, evidence, adjuster review, and fraud screening.'], ['Settlement', 'Approved amount, payment, recovery rights, and accounting.'], ['Claim Analytics', 'Frequency, severity, reserve adequacy, cycle time, and recoveries.']] },
  'risk-security': { title: 'Risk & Security Portal', subtitle: 'Exposure, compliance, security posture, incidents, audit evidence, and platform controls.', cards: [['Risk Posture', 'Portfolio exposure, limits, concentrations, alerts, and stress tests.'], ['Security Controls', 'Access, keys, policies, monitoring, and vulnerability management.'], ['Incidents', 'Detection, triage, containment, remediation, and evidence.'], ['Compliance', 'KYC/AML, retention, audit trail, attestations, and reports.']] },
  'dao-command': { title: 'DAO Command Center', subtitle: 'Governance operations, proposals, voting, treasury, execution, and community status.', cards: [['Governance Overview', 'Active proposals, quorum, delegates, voting power, and participation.'], ['Execution Queue', 'Approved actions, timelocks, multi-sig, dependencies, and status.'], ['Treasury', 'Balances, reserves, budgets, runway, and approved allocations.'], ['Community', 'Members, announcements, forum, working groups, and resources.']] },
  'dao-community': { title: 'DAO Community Portal', subtitle: 'Members, participation, announcements, forum, resources, and governance education.', cards: [['Community Overview', 'Members, contributors, delegates, activity, and participation.'], ['Forum', 'Proposal discussion, risk review, treasury planning, and feedback.'], ['Resources', 'Governance guides, reports, policies, documents, and onboarding.'], ['Working Groups', 'Risk, treasury, marketplace, community, and protocol initiatives.']] },
  'treasury-management': { title: 'Treasury Management Center', subtitle: 'Treasury assets, reserves, allocations, budgets, approvals, and audit controls.', cards: [['Asset Overview', 'Stable-value rails, HBAR, ADF, operating balances, and reserves.'], ['Allocation', 'Insurance, operations, incentives, grants, growth, and liquidity.'], ['Approval Queue', 'Budgets, transfers, multi-sig, evidence, and execution status.'], ['Scenario Planning', 'Runway, cash flow, reserve policy, and stress scenarios.']] },
  'staking-rewards': { title: 'Staking Rewards Dashboard', subtitle: 'ADF staking positions, reward accrual, boosts, distributions, and activity.', cards: [['Staking Position', 'Staked ADF, lock period, voting power, tier, and collateral utility.'], ['Rewards', 'Accrued, claimed, pending, projected, and historical rewards.'], ['Boosts', 'Lender, governance, access, participation, and duration multipliers.'], ['Activity', 'Stake, unstake, claim, delegate, and distribution history.']] },
  'dao-governance': { title: 'DAO Governance Dashboard', subtitle: 'Governance parameters, delegates, proposals, voting, timelocks, and execution.', cards: [['Governance Status', 'Quorum, participation, proposal stages, and execution readiness.'], ['Delegates', 'Voting power, focus, performance, activity, and delegation controls.'], ['Parameters', 'Risk, treasury, staking, marketplace, and protocol settings.'], ['Execution', 'Timelock, multi-sig, transaction, evidence, and audit trail.']] },
  proposals: { title: 'DAO Proposal Center', subtitle: 'Create, review, fund, and execute AutoDeFi governance proposals.', cards: proposals.map((p) => [p.title, p.detail]) },
  vote: { title: 'Vote', subtitle: 'Vote with ADF governance weight across treasury, risk, staking, and marketplace proposals.', cards: [['Active Votes', 'ZONYCS recovery allocation, marketing budget Q2, new collateral types, and reward emissions.'], ['Delegation', 'Delegate voting power to trusted risk, treasury, and compliance operators.'], ['Snapshot', 'Review quorum, execution delay, and proposal history.']] },
  treasury: { title: 'Treasury Management Center', subtitle: 'Assets, allocations, reserves, expenditures, budgets, audit logs, and approved spending.', cards: [['Treasury Assets', 'HBAR, stable-value rails, insurance reserves, ADF allocations, and operating balances.'], ['Scenario Planning', 'Stress testing, cash-flow, reserve policy, and DAO transfer workflows.'], ['Multi-Sig', 'Treasury proposal approvals, security policy, integrations, and audit controls.']] },
  staking: { title: 'ADF Staking', subtitle: 'Stake ADF for collateral access, governance, rewards, lender boosts, and tier participation.', cards: [['Risk Tier Staking', 'Stake into matching pools for Tier 1, Tier 2, Tier 3, insurance-backed, and dealer reserve exposure.'], ['Reward Boosts', 'Earn ADF emissions and higher protocol access from active participation.'], ['Collateral Utility', 'ADF supports access, reputation, collateral boosts, rewards, and governance.']] },
  'risk-management': { title: 'Risk Management', subtitle: 'Fraud detection, exposure monitoring, identity, compliance, contracts, alerts, and policies.', cards: [['Fraud Detection', 'Identity verification, document checks, wallet history, bank analysis, and transaction monitoring.'], ['Exposure Monitor', 'LTV, delinquency, default, recovery, repo queue, and insurance reserve health.'], ['System Controls', 'API keys, IP allow list, webhooks, risk rules, audit logs, and maintenance.']] },
  'revenue-sharing': { title: 'Revenue Sharing', subtitle: 'Borrower interest, lender yield, ADF staking rewards, insurance top-ups, and DAO reserves.', cards: revenueDistribution.map((r) => [r.label, `${r.amount} · ${r.pct}% · ${r.purpose}`]) },
  'token-utility': { title: 'ADF Token Utility', subtitle: 'ADF is for staking, collateral, access, rewards, governance, and ecosystem utility.', cards: [['Not Repayment Currency', 'Borrowers repay using regional stable-value rails, not ADF by default.'], ['Collateral & Access', 'ADF can support Tier 1 qualification, lender boosts, and dealer access.'], ['Governance', 'ADF votes on treasury, risk parameters, marketplace integrations, and rewards.']] },
  governance: { title: 'Governance', subtitle: 'DAO parameters, delegates, forum, announcements, voting power, and execution controls.', cards: [['Delegation', 'Assign ADF governance power to specialized delegates.'], ['Forum', 'Discuss risk tiers, insurance reserves, treasury allocations, and new collateral types.'], ['Execution', 'Timelock, multi-sig, proposal execution, and audit trail.']] },
  'audit-security': { title: 'Audit & Security', subtitle: 'Smart contract security, oracle uptime, KYC/AML, API controls, and incident monitoring.', cards: [['Smart Contract Safety', 'Score, audit history, contract status, and upgrade controls.'], ['Compliance', 'KYC/AML, identity rules, retention, access, and reports.'], ['Monitoring', 'Security events, transaction monitoring, and suspicious activity alerts.']] },
  analytics: { title: 'Analytics', subtitle: 'Portfolio analytics, loan book performance, lender cohorts, treasury health, and DAO metrics.', cards: [['Performance', 'TVL, APY, yield, utilization, loan origination, and cash-flow analytics.'], ['Risk', 'Delinquency, default, recovery, LTV, credit score, and insurance coverage analytics.'], ['Dealer Network', 'Funding queue, dealer performance, ZONYCS recovery, and marketing attribution.']] }
};

export function ModulePage({ id }: ModulePageProps) {
  const { downloadCsv, openWorkflow, notify } = useActionCenter();
  const page: ModulePageContent =
    id in modulePages
      ? modulePages[id as keyof typeof modulePages]
      : genericCopy[id] || genericCopy.proposals;
  const metricTone = ['blue', 'green', 'purple', 'orange', 'cyan', 'red'] as Tone[];
  const [query, setQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [rowStates, setRowStates] = useState<Record<string, string>>({});

  useEffect(() => {
    setQuery('');
    setStatusFilter('All');
    setRowStates({});
  }, [id]);

  const statusFor = useCallback((title: string, index: number) => rowStates[title] || (index % 3 === 0 ? 'Healthy' : index % 3 === 1 ? 'In Review' : 'Queued'), [rowStates]);
  const visibleCards = useMemo(() => page.cards.filter((card, index) => {
    const matchesQuery = `${card[0]} ${card[1]}`.toLowerCase().includes(query.trim().toLowerCase());
    const matchesStatus = statusFilter === 'All' || statusFor(card[0], index) === statusFilter;
    return matchesQuery && matchesStatus;
  }), [page.cards, query, statusFilter, statusFor]);

  const openSettings = () => openWorkflow({
    title: `${page.title} settings`,
    message: 'These preferences update the current frontend workspace without changing the approved dashboard design.',
    fields: [
      { id: 'density', label: 'Table density', type: 'select', options: ['Comfortable', 'Compact'], defaultValue: 'Comfortable', required: true },
      { id: 'notifications', label: 'Enable dashboard notifications', type: 'checkbox', defaultValue: true },
      { id: 'savedView', label: 'Saved view name', placeholder: `${page.title} default` },
    ],
    submitLabel: 'Save settings',
    successMessage: `${page.title} settings saved`,
    onSubmit: () => undefined,
  });

  const openQueueItem = (card: readonly string[], index: number) => openWorkflow({
    title: card[0],
    message: card[1],
    details: [`Owner: AutoDeFi DAO`, `Priority: ${index + 1}`, `Current status: ${statusFor(card[0], index)}`],
    fields: [
      { id: 'status', label: 'Frontend status', type: 'select', options: ['Healthy', 'In Review', 'Queued'], defaultValue: statusFor(card[0], index), required: true },
      { id: 'note', label: 'Review note', type: 'textarea', placeholder: 'Add an operational note for this record.' },
    ],
    submitLabel: 'Update item',
    successMessage: `${card[0]} updated`,
    onSubmit: (values) => setRowStates((current) => ({ ...current, [card[0]]: String(values.status) })),
  });

  return (
    <div className="module-page">
      <Card className="page-card">
        <div className="page-head">
          <div>
            <h2>{page.title}</h2>
            <p>{page.subtitle}</p>
          </div>
          <div className="head-actions">
            <Button onClick={() => downloadCsv(`${id}-report.csv`, [['Metric', 'Detail'], ...page.cards.map((card) => [card[0], card[1]])])}>Export</Button>
            <Button variant="ghost" onClick={openSettings}>Open Settings</Button>
          </div>
        </div>

        <DashboardGraphic id={id} title={page.title} />

        <div className="mini-kpi-grid six">
          {page.cards.slice(0, 6).map((card, index) => (
            <div className={`mini-kpi tone-${metricTone[index % metricTone.length]}`} key={card[0]}>
              <Icon name={index % 2 ? 'analytics' : 'dashboard'} size={34} />
              <span>{card[0]}</span>
              <strong>{index % 2 ? 'Active' : 'Ready'}</strong>
              <small>{card[1]}</small>
            </div>
          ))}
        </div>

        <div className="split-grid">
          <Card>
            <CardTitle title="Operational Overview" />
            <LineChart labels={['W1','W2','W3','W4','W5','W6']} series={[{label:'Volume',values:[22,28,31,39,44,52,58,61,68,72,76,84],tone:'blue'},{label:'Health',values:[42,43,47,51,55,58,62,65,69,71,76,80],tone:'green'},{label:'Risk',values:[16,14,15,13,12,13,11,10,9,10,8,7],tone:'red'}]} />
          </Card>
          <Card>
            <CardTitle title="Allocation Snapshot" />
            <div className="portfolio-row">
              <DonutChart data={tierPools.slice(0,5).map((tier) => ({ label: tier.title, value: tier.share, tone: tier.tone }))} centerValue="$38.45M" centerLabel="Total" />
              <div className="legend-list large">
                {tierPools.slice(0,5).map((tier) => <span key={tier.id}><i className={`dot tone-bg-${tier.tone}`} />{tier.title}<b>{tier.share}%</b></span>)}
              </div>
            </div>
          </Card>
        </div>

        <Card>
          <CardTitle title="Work Queue" action={<Button variant="ghost" onClick={() => { setQuery(''); setStatusFilter('All'); notify(`Showing all ${page.cards.length} work-queue groups`); }}>View All →</Button>} />
          <div className="work-queue-controls">
            <label><span>Search queue</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder={`Search ${page.title.toLowerCase()}...`} /></label>
            <label><span>Status</span><select value={statusFilter} onChange={(event) => setStatusFilter(event.target.value)}><option>All</option><option>Healthy</option><option>In Review</option><option>Queued</option></select></label>
          </div>
          <table className="data-table">
            <thead><tr><th>Item</th><th>Status</th><th>Owner</th><th>Priority</th><th>Action</th></tr></thead>
            <tbody>
              {visibleCards.map((card) => {
                const index = page.cards.indexOf(card);
                const status = statusFor(card[0], index);
                return (
                <tr key={card[0]}>
                  <td><b>{card[0]}</b><small>{card[1]}</small></td>
                  <td><StatusPill tone={status === 'Healthy' ? 'green' : status === 'In Review' ? 'blue' : 'orange'}>{status}</StatusPill></td>
                  <td>AutoDeFi DAO</td>
                  <td>{index + 1}</td>
                  <td><Button variant="ghost" onClick={() => openQueueItem(card, index)}>Open</Button></td>
                </tr>
              )})}
              {!visibleCards.length ? <tr><td colSpan={5}>No queue items match the current search and status filter.</td></tr> : null}
            </tbody>
          </table>
        </Card>
      </Card>
    </div>
  );
}
