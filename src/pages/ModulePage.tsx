import { Button } from '../components/Button';
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
  const page: ModulePageContent =
    id in modulePages
      ? modulePages[id as keyof typeof modulePages]
      : genericCopy[id] || genericCopy.proposals;
  const metricTone = ['blue', 'green', 'purple', 'orange', 'cyan', 'red'] as Tone[];

  return (
    <div className="module-page">
      <Card className="page-card">
        <div className="page-head">
          <div>
            <h2>{page.title}</h2>
            <p>{page.subtitle}</p>
          </div>
          <div className="head-actions">
            <Button>Export</Button>
            <Button variant="ghost">Open Settings</Button>
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
          <CardTitle title="Work Queue" action={<Button variant="ghost">View All →</Button>} />
          <table className="data-table">
            <thead><tr><th>Item</th><th>Status</th><th>Owner</th><th>Priority</th><th>Action</th></tr></thead>
            <tbody>
              {page.cards.map((card, index) => (
                <tr key={card[0]}>
                  <td><b>{card[0]}</b><small>{card[1]}</small></td>
                  <td><StatusPill tone={index % 3 === 0 ? 'green' : index % 3 === 1 ? 'blue' : 'orange'}>{index % 3 === 0 ? 'Healthy' : index % 3 === 1 ? 'In Review' : 'Queued'}</StatusPill></td>
                  <td>AutoDeFi DAO</td>
                  <td>{index + 1}</td>
                  <td><Button variant="ghost">Open</Button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
      </Card>
    </div>
  );
}
