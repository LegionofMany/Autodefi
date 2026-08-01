import { Button } from '../components/Button';
import { Card, CardTitle } from '../components/Card';
import { Icon } from '../components/Icon';
import { DonutChart } from '../components/SvgCharts';
import type { Tone } from '../data/autodefiData';

const voteTabs = [
  ['Active Votes', '5'],
  ['Upcoming', '2'],
  ['Executed', '18'],
  ['All Votes', '']
];

const proposalStats = [
  ['Current Lending Pool', '$54.0M'],
  ['Requested Increase', '+$8.2M'],
  ['New Projected Pool Size', '$62.2M'],
  ['Deployment Window', '30 days']
];

const riskTiers: { tier: string; allocation: string; amount: string; purpose: string; tone: Tone; value: number }[] = [
  { tier: 'Tier 1 (Prime)', allocation: '35%', amount: '$2.87M', purpose: 'Best quality borrowers, staked ADF or strong down payment', tone: 'green', value: 35 },
  { tier: 'Tier 2 (Good)', allocation: '40%', amount: '$3.28M', purpose: 'Good credit with token/down payment support', tone: 'blue', value: 40 },
  { tier: 'Tier 3 (Standard)', allocation: '25%', amount: '$2.05M', purpose: 'Good credit with lower upfront capital', tone: 'purple', value: 25 },
  { tier: 'Tier 4 (Referral)', allocation: '0%', amount: '$0', purpose: 'Dealer referral / off-platform last chance', tone: 'red', value: 0 }
];

const treasuryImpact = [
  ['Treasury Balance (Before)', '$8,742,651', 'neutral'],
  ['Allocation Requested', '-$8,200,000', 'danger'],
  ['Treasury Balance (After)', '$542,651', 'good'],
  ['Reserve Ratio (After)', '6.2%', 'good'],
  ['Emergency Buffer Remaining', '$1,750,000', 'good'],
  ['Insurance Reserve Impact', 'Protected', 'good'],
  ['Minimum Reserve Rule Met', 'Yes', 'good'],
  ['Revenue Stream Support', 'Stable', 'good']
];

const riskReview = [
  ['Portfolio Risk Score', 'Low'],
  ['Expected Delinquency Delta', '-0.18%'],
  ['Loss Buffer Coverage', '2.35x'],
  ['Insurance Support Level', 'High'],
  ['LTV Exposure Impact', 'Low'],
  ['Underwriting Readiness', 'High'],
  ['Recovery Team Capacity', 'Adequate'],
  ['Liquidity Stress Impact', 'Minimal']
];

const executionChecks = [
  ['Quorum Requirement', 'Met (106.0%)', 'good'],
  ['Approval Threshold', 'Met (78.3%)', 'good'],
  ['Voting Window Closes', 'May 15, 2025 2:00 PM EST', 'neutral'],
  ['Timelock Period', '24 hours after approval', 'neutral'],
  ['Multi-Sig Approval', 'Required (5 of 8)', 'neutral'],
  ['Treasury Transfer', 'Triggered after timelock', 'neutral'],
  ['Lending Pool Update', 'Auto on execution', 'good'],
  ['Audit Log Creation', 'On-chain record', 'good']
];

const auditTrail = [
  ['Snapshot Block', '55,867,421'],
  ['Proposal Tx Hash', '0x9a7b...3c8d9f'],
  ['Vote Contract', 'AutoDeFiGovernance'],
  ['Network', 'Hedera Mainnet'],
  ['Your Vote Tx Hash', '0x1f4e...9b7c2d'],
  ['Your Signature', 'Verified'],
  ['Last Updated', 'May 11, 2025 9:26 AM EST']
];

const documents = [
  'Full Proposal Memo',
  'Treasury Recommendation',
  'Risk Committee Review',
  'Lender Pool Performance Report',
  'Financial Model & Projections',
  'Related Proposals History'
];

const discussion = [
  ['0xA3eF...9b21', 'This allocation increase will significantly improve liquidity and allow us to support more borrowers.', '24'],
  ['0x8d12...cF44', 'Strongly support. The demand for auto loans is growing fast.', '18'],
  ['0x39f2...aB71', 'We should also consider risk parameters with higher allocation.', '7']
];

export function VoteDetails() {
  return (
    <div className="vote-page">
      <div className="vote-tabs">
        {voteTabs.map(([label, count], index) => (
          <button className={index === 0 ? 'active' : ''} type="button" key={label}>{label}{count && <span>{count}</span>}</button>
        ))}
        <label className="proposal-search"><input placeholder="Search proposals..." /><b>⌕</b></label>
        <Button variant="ghost">Filters</Button>
      </div>

      <Card className="vote-hero-card">
        <div className="back-link">← Back to All Proposals</div>
        <div className="proposal-hero-row">
          <div className="proposal-icon"><Icon name="governance" size={48} /></div>
          <div className="proposal-copy">
            <div className="proposal-title-line"><h2>Increase Lending Pool Allocation</h2><span>Treasury</span></div>
            <p>Increase allocation to the lending pool to support more auto loan originations and improve liquidity across the AutoDeFi ecosystem.</p>
            <div className="proposal-meta"><span>ID: #ADF-125</span><span>Created by 0x92...8F52</span><span>May 10, 2025</span></div>
          </div>
          <div className="active-pill">Active</div>
          <div className="time-box"><span>Time Remaining</span><strong>2d 14h 33m 21s</strong><small>Ends May 15, 2025 @ 2:00 PM EST</small></div>
        </div>
        <div className="vote-result-card">
          <div className="vote-count-grid">
            <div><strong className="good">78.3%</strong><span>For</span><small>12,450,250 ADF</small></div>
            <div><strong className="danger">21.7%</strong><span>Against</span><small>3,450,250 ADF</small></div>
            <div><strong>0.0%</strong><span>Abstain</span><small>0 ADF</small></div>
          </div>
          <div className="stacked-vote-bar"><i className="for" /><i className="against" /><i className="abstain" /></div>
          <div className="vote-result-foot"><b>Total Votes: 15,900,500 ADF</b><span>Quorum: 15,000,000 ADF <em>(106.0%) ✓</em></span></div>
        </div>
      </Card>

      <div className="vote-primary-grid">
        <Card className="proposal-breakdown-card">
          <CardTitle title="1. Proposal Breakdown" />
          <div className="proposal-stat-grid">{proposalStats.map(([label, value]) => <div key={label}><span>{label}</span><strong className={value.startsWith('+') ? 'good' : ''}>{value}</strong></div>)}</div>
          <div className="proposal-breakdown-body">
            <div className="proposal-facts">
              <div><Icon name="treasury" size={24} /><span>Proposal Type</span><strong>Treasury Allocation</strong></div>
              <div><Icon name="treasury" size={24} /><span>Funding Source</span><strong>DAO Treasury Reserve</strong></div>
              <div><Icon name="lender" size={24} /><span>Destination</span><strong>AutoDeFi Lending Pool</strong></div>
              <div><Icon name="shield" size={24} /><span>Execution Delay</span><strong>24h timelock after approval</strong></div>
            </div>
            <div className="risk-allocation-card">
              <h4>Risk Tier Allocation of New Capital ⓘ</h4>
              <div className="allocation-layout">
                <DonutChart data={riskTiers.map((tier) => ({ label: tier.tier, value: tier.value, tone: tier.tone }))} centerValue="$8.2M" centerLabel="Total Allocation" size={180} />
                <div className="allocation-table">
                  {riskTiers.map((tier) => <div key={tier.tier}><span><i className={`dot tone-bg-${tier.tone}`} />{tier.tier}</span><b>{tier.allocation}</b><b>{tier.amount}</b><small>{tier.purpose}</small></div>)}
                </div>
              </div>
              <p className="info-strip">Tier 4 is excluded from direct DAO lending pool allocation. These leads are referred to local dealers and partners.</p>
            </div>
          </div>
          <div className="deployment-plan">
            <h4>Capital Deployment Plan</h4>
            <ul>
              <li>Funds released in stages, not all at once</li>
              <li>Capital first supports approved Tier 1 and Tier 2 loans</li>
              <li>Tier 3 receives remaining approved allocation after risk review</li>
              <li>No funding released without underwriting confirmation</li>
              <li>Treasury transfer recorded in audit log</li>
              <li>Lending pool balance updated after DAO execution</li>
            </ul>
          </div>
        </Card>

        <Card>
          <CardTitle title="2. Treasury Impact" />
          <div className="vote-detail-list">{treasuryImpact.map(([label, value, tone]) => <div key={label}><span>{label}</span><strong className={tone}>{value}</strong></div>)}</div>
          <div className="status-callout good"><Icon name="shield" size={28} />Treasury remains above the minimum required reserve after allocation.</div>
        </Card>

        <Card>
          <CardTitle title="3. Risk Review" />
          <div className="vote-detail-list">{riskReview.map(([label, value]) => <div key={label}><span>{label}</span><strong className="good">{value}</strong></div>)}</div>
          <div className="status-callout purple"><Icon name="shield" size={28} />Risk impact is within acceptable DAO risk parameters.</div>
        </Card>
      </div>

      <div className="vote-secondary-grid">
        <Card>
          <CardTitle title="4. Execution Conditions" />
          <div className="vote-detail-list compact">{executionChecks.map(([label, value, tone]) => <div key={label}><span>{label}</span><strong className={tone}>{value}</strong></div>)}</div>
        </Card>
        <Card>
          <CardTitle title="5. Vote Integrity / Audit Trail" />
          <div className="vote-detail-list compact">{auditTrail.map(([label, value]) => <div key={label}><span>{label}</span><strong className={value === 'Verified' ? 'good' : ''}>{value}</strong></div>)}</div>
        </Card>
        <Card>
          <CardTitle title="6. Supporting Documents" />
          <div className="doc-list">{documents.map((doc) => <a key={doc}>{doc}<span>View ↗</span></a>)}</div>
        </Card>
        <Card>
          <CardTitle title="7. Vote Outlook" />
          <div className="outlook"><span>Projected Outcome</span><strong className="good">Likely Pass</strong><span>Confidence Level</span><strong>High</strong><div className="meter"><i style={{ width: '78%' }} /></div><span>Votes Needed to Maintain Approval</span><strong>1.10M ADF</strong><span>Largest Driver</span><strong>Strong For Majority</strong></div>
        </Card>
      </div>

      <div className="vote-lower-grid">
        <Card>
          <CardTitle title="Vote Details" />
          <div className="your-vote"><strong className="good">✓ For</strong><span>12,450.25 ADF</span><small>Voted on May 11, 2025</small><Button variant="ghost" className="full">Change Vote</Button></div>
        </Card>
        <Card>
          <CardTitle title="Voting Power Breakdown" />
          <div className="portfolio-row"><DonutChart data={[{label:'Locked',value:82.3,tone:'green'},{label:'Delegated',value:14.5,tone:'blue'},{label:'Available',value:3.2,tone:'purple'}]} centerValue="12,450.25" centerLabel="ADF" size={165} /><div className="legend-list large"><span><i className="dot tone-bg-green" />Locked (Staked)<b>10,250.00 ADF</b></span><span><i className="dot tone-bg-blue" />Delegated<b>1,800.25 ADF</b></span><span><i className="dot tone-bg-purple" />Available<b>400.00 ADF</b></span><span>Multiplier<b>1.031x</b></span><span>Effective Power<b className="good">12,450.25 ADF</b></span></div></div>
        </Card>
        <Card>
          <CardTitle title="Discussion" action={<a className="card-link">View All (24)</a>} />
          <div className="discussion-list">{discussion.map(([wallet, body, likes]) => <div key={wallet}><strong>{wallet}</strong><p>{body}</p><span>👍 {likes}</span></div>)}</div><Button variant="ghost" className="full">Add Comment</Button>
        </Card>
      </div>
    </div>
  );
}
