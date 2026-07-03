import { useState, type ReactNode } from 'react';
import type { Tone } from '../data/autodefiData';
import {
  allocationKpis,
  allocationOverview,
  allocationPerformance,
  approvalRows,
  assetActivity,
  assetComposition,
  assetsByNetwork,
  auditEventSeries,
  auditEventTypes,
  auditKpis,
  auditRows,
  auditSeverity,
  budgetKpis,
  budgetMonths,
  budgetOverview,
  budgetRows,
  budgetSeries,
  dashboardAllocation,
  expenditureKpis,
  expenditureRows,
  expenditureSeries,
  expendituresByCategory,
  monthlyLabels,
  protocolAllocations,
  recentTreasuryTransactions,
  reportCategories,
  reportRows,
  reportsKpis,
  reserveAdequacy,
  reserveComposition,
  reserveHealth,
  reserveHealthRows,
  reserveKpis,
  reserveSeries,
  reserveTransactions,
  revenueBreakdown,
  revenueKpis,
  revenueStreams,
  revenueTransactions,
  topTreasuryAssets,
  treasuryCommonKpis,
  treasuryPageMeta,
  treasuryPages,
  treasuryPerformanceSeries,
  treasuryStatus,
  type ProgressMetric,
  type TreasuryKpi,
  type TreasuryPageId,
  type TreasurySlice,
  type TreasuryTransaction
} from '../data/treasuryManagementData';

const toneColor: Record<Tone, string> = {
  blue: '#2f80ff',
  green: '#00e88f',
  purple: '#8b5cf6',
  orange: '#f59e0b',
  red: '#ef4444',
  cyan: '#22d3ee'
};

type TmcProps = {
  onBack?: () => void;
};

export function TreasuryManagementCenter({ onBack }: TmcProps) {
  const [activePage, setActivePage] = useState<TreasuryPageId>('dashboard');
  const meta = treasuryPageMeta[activePage];

  return (
    <div className="tmc-shell">
      <aside className="tmc-sidebar">
        <div className="tmc-brand">
          <div className="tmc-logo-mark" aria-hidden="true"><span>⬡</span></div>
          <div>
            <strong><span>AUTO</span><em>DEFI</em><b> DAO</b></strong>
            <small>Treasury Management Center</small>
          </div>
        </div>

        <nav className="tmc-nav" aria-label="Treasury navigation">
          {treasuryPages.map((page) => (
            <button key={page.id} type="button" className={activePage === page.id ? 'active' : ''} onClick={() => setActivePage(page.id)}>
              <i>{page.icon}</i>
              <span>{page.label}</span>
            </button>
          ))}
        </nav>

        <div className="tmc-sidebar-footer">
          {onBack && <button className="tmc-back-button" type="button" onClick={onBack}>← AutoDeFi Command</button>}
          <div className="tmc-status-card">
            <div className="tmc-status-head"><span>⬡</span><div><small>{treasuryStatus.label}</small><strong>{treasuryStatus.value}</strong></div></div>
            <dl>
              <div><dt>Risk Score</dt><dd>{treasuryStatus.riskScore}</dd></div>
              <div><dt>Utilization</dt><dd>{treasuryStatus.utilization}</dd></div>
              <div><dt>Runway</dt><dd>{treasuryStatus.runway}</dd></div>
            </dl>
          </div>
          <button className="tmc-export-side" type="button">⇩ Export Report</button>
        </div>
      </aside>

      <main className="tmc-main">
        <header className="tmc-header">
          <div>
            <h1>{meta.title}</h1>
            <p>{meta.subtitle}</p>
          </div>
          <div className="tmc-actions">
            <button type="button">▣ {meta.dateLabel}⌄</button>
            {meta.showFilters && <button type="button">⏳ Filters</button>}
            <button className="primary" type="button">⇩ {meta.exportLabel}</button>
          </div>
        </header>

        {renderTreasuryPage(activePage)}

        <footer className="tmc-security-footer">▣ All {activePage === 'audit-logs' ? 'audit log' : activePage.replace('-', ' ')} data is encrypted and secured by AutoDeFi DAO smart contracts and multi-signature governance.</footer>
      </main>
    </div>
  );
}

function renderTreasuryPage(page: TreasuryPageId) {
  switch (page) {
    case 'dashboard':
      return <DashboardPage />;
    case 'assets':
      return <AssetsPage />;
    case 'allocations':
      return <AllocationsPage />;
    case 'revenue-streams':
      return <RevenuePage />;
    case 'reserves':
      return <ReservesPage />;
    case 'expenditures':
      return <ExpendituresPage />;
    case 'budgeting':
      return <BudgetingPage />;
    case 'reports':
      return <ReportsPage />;
    case 'audit-logs':
      return <AuditLogsPage />;
    default:
      return <DashboardPage />;
  }
}

function DashboardPage() {
  return (
    <div className="tmc-page-stack">
      <KpiGrid items={treasuryCommonKpis} />
      <section className="tmc-grid three">
        <Panel title="Treasury Allocation">
          <DonutWithLegend data={dashboardAllocation} centerValue="$24.67M" centerLabel="Total Treasury" />
        </Panel>
        <Panel title="Revenue Streams (30D)">
          <ProgressRows rows={revenueStreams} />
          <div className="tmc-panel-total"><span>Total Revenue</span><strong>$1.24M</strong></div>
        </Panel>
        <Panel title="Reserve Health">
          <table className="tmc-simple-table">
            <tbody>{reserveHealth.map(([label, value, status, tone]) => <tr key={label}><td>{label}</td><td>{value}</td><td><StatusPill tone={tone}>{status}</StatusPill></td></tr>)}</tbody>
          </table>
        </Panel>
      </section>
      <section className="tmc-grid two bottom-heavy">
        <Panel title="Recent Transactions">
          <TransactionTable rows={recentTreasuryTransactions} />
          <PanelLink>View All Transactions →</PanelLink>
        </Panel>
        <Panel title="DAO Budget (Q2 2025)">
          <BudgetSummary budget="$2.45M" spent="$1.03M" remaining="$1.43M" percentage={41.61} />
          <PanelButton>View Full Treasury Report</PanelButton>
        </Panel>
      </section>
    </div>
  );
}

function AssetsPage() {
  return (
    <div className="tmc-page-stack">
      <KpiGrid items={treasuryCommonKpis} />
      <section className="tmc-grid three">
        <Panel title="Asset Composition">
          <DonutWithLegend data={assetComposition} centerValue="$24.67M" centerLabel="Total Assets" />
          <PanelLink>View Full Asset Allocation →</PanelLink>
        </Panel>
        <Panel title="Assets by Type">
          <DataTable headers={['Asset Type', 'Value (USD)', '% of Total', '30D Change']} rows={assetComposition.map((item) => [item.label, item.amount || '', `${item.value}%`, <span className="tmc-positive">↑ {item.value > 10 ? '7.17' : '2.11'}%</span>])} compact />
          <PanelLink>View All Assets →</PanelLink>
        </Panel>
        <Panel title="Assets by Network">
          <ProgressRows rows={assetsByNetwork} />
          <PanelLink>View Network Breakdown →</PanelLink>
        </Panel>
      </section>
      <section className="tmc-grid two assets-bottom">
        <Panel title="Top Treasury Assets">
          <DataTable headers={['Asset', 'Type', 'Network', 'Balance', 'Value (USD)', '% of Total', '30D Change']} rows={topTreasuryAssets.map((row) => [...row.slice(0, 6), <span className="tmc-positive">{row[6]}</span>])} />
          <PanelLink>View All Treasury Assets →</PanelLink>
        </Panel>
        <div className="tmc-nested-stack">
          <Panel title="Asset Health Overview">
            <div className="tmc-health-overview"><Gauge value={84} label="Healthy" /><MetricList rows={[['Diversification Score', '82 / 100'], ['Liquidity Score', '88 / 100'], ['Security Score', '90 / 100'], ['Growth Score', '76 / 100']]} /></div>
          </Panel>
          <Panel title="Recent Asset Activity">
            <DataTable headers={['Type', 'Asset', 'Amount', 'Time', 'Status']} rows={assetActivity.map((row) => [row[0], row[1], row[2], row[3], <StatusPill tone="green">{row[4]}</StatusPill>])} compact />
            <PanelLink>View All Activity →</PanelLink>
          </Panel>
        </div>
      </section>
    </div>
  );
}

function AllocationsPage() {
  return (
    <div className="tmc-page-stack">
      <KpiGrid items={allocationKpis} />
      <section className="tmc-grid three">
        <Panel title="Allocation Overview"><DonutWithLegend data={allocationOverview} centerValue="$24.67M" centerLabel="Total Allocated" /><PanelLink>View Detailed Allocation →</PanelLink></Panel>
        <Panel title="Allocation Performance (30D)"><DataTable headers={['Category', 'Allocated', 'Current Value', 'Yield (APY)', '30D Change']} rows={allocationPerformance.map((row) => [...row.slice(0, 4), <span className="tmc-positive">{row[4]}</span>])} compact /><PanelLink>View Performance Analytics →</PanelLink></Panel>
        <Panel title="Target vs Current Allocation"><ProgressRows rows={allocationOverview.map((item) => ({ label: item.label, value: Math.min(item.value * 2.4, 100), amount: `${item.value}%`, note: item.label === 'Liquidity' ? '-0.4%' : '+0.2%', tone: item.tone }))} /><PanelLink>View Rebalancing Plan →</PanelLink></Panel>
      </section>
      <section className="tmc-grid three allocation-bottom">
        <Panel title="Allocation by Protocol / Platform"><DataTable headers={['Protocol / Platform', 'Category', 'Allocated', 'Current Value', 'APY', 'Status']} rows={protocolAllocations.map((row) => [...row.slice(0, 5), <StatusPill tone="green">{row[5]}</StatusPill>])} compact /><PanelLink>View All Protocol Allocations →</PanelLink></Panel>
        <Panel title="Allocation Heatmap (Risk vs Return)"><AllocationHeatmap /><PanelLink>View Risk Analysis →</PanelLink></Panel>
        <Panel title="Rebalancing Insights"><InsightStack rows={[['✓', 'Overall Status', 'On Track', 'Current allocations are within target ranges.', 'green'], ['ⓘ', 'Recommended Action', 'Maintain', 'No rebalancing required at this time.', 'blue'], ['▣', 'Next Review Date', 'May 16, 2025', 'Review in 4 days', 'cyan'], ['⌁', 'Potential Optimization', '+$215.4K', 'Potential additional yield with minor adjustments.', 'purple']]} /><PanelLink>View Rebalancing Plan →</PanelLink></Panel>
      </section>
    </div>
  );
}

function RevenuePage() {
  return (
    <div className="tmc-page-stack">
      <KpiGrid items={revenueKpis} />
      <section className="tmc-grid three">
        <Panel title="Revenue Breakdown"><DonutWithLegend data={revenueBreakdown} centerValue="$1.24M" centerLabel="Total Revenue" /><PanelLink>View Detailed Breakdown →</PanelLink></Panel>
        <Panel title="Revenue Performance (30D)"><ProgressRows rows={revenueBreakdown.map((item) => ({ label: item.label, amount: item.amount, value: item.value, note: `${item.value}%`, tone: item.tone }))} /><div className="tmc-panel-total"><span>Total Revenue</span><strong>$1.24M</strong></div></Panel>
        <Panel title="Revenue Health"><MetricList rows={[['Revenue Diversification Score', '84 / 100', <StatusPill tone="green">Healthy</StatusPill>], ['Recurring Revenue Ratio', '78.4%', <StatusPill tone="green">Strong</StatusPill>], ['Yield Stability', '82 / 100', <StatusPill tone="green">Stable</StatusPill>], ['Runway Contribution', '38.6%', <StatusPill tone="green">Strong</StatusPill>], ['Revenue Trend (30D)', 'Upward', <span className="tmc-positive">↑</span>]]} /><div className="tmc-panel-total"><span>Overall Status</span><strong className="tmc-positive">⬡ Healthy</strong></div></Panel>
      </section>
      <section className="tmc-grid two bottom-heavy">
        <Panel title="Recent Revenue Transactions"><TransactionTable rows={revenueTransactions} /><PanelLink>View All Transactions →</PanelLink></Panel>
        <Panel title="Revenue Forecast (Q2 2025)"><BudgetSummary budget="$3.75M" spent="$1.24M" remaining="$2.51M" percentage={33.1} spentLabel="Collected" remainingLabel="Remaining" /><PanelButton>View Full Revenue Report</PanelButton></Panel>
      </section>
    </div>
  );
}

function ReservesPage() {
  return (
    <div className="tmc-page-stack">
      <KpiGrid items={reserveKpis} />
      <section className="tmc-grid three">
        <Panel title="Reserve Composition"><DonutWithLegend data={reserveComposition} centerValue="$1.48M" centerLabel="Total Reserves" /><PanelLink>View Reserve Allocation →</PanelLink></Panel>
        <Panel title="Reserve Health Overview"><DataTable headers={['Reserve', 'Balance', 'Health Score', 'Status', 'Target Range']} rows={reserveHealthRows.map((row) => [row[0], row[1], row[2], <StatusPill tone="green">{row[3]}</StatusPill>, row[4]])} compact /><div className="tmc-panel-total"><span>Overall Reserve Health Score</span><strong className="tmc-positive">86 / 100</strong></div></Panel>
        <Panel title="Reserve Adequacy & Coverage"><ProgressRows rows={reserveAdequacy} /><PanelLink>View Stress Test Results →</PanelLink></Panel>
      </section>
      <section className="tmc-grid two bottom-heavy">
        <Panel title="Reserve Balances Over Time (30D)"><LinePanel series={reserveSeries} labels={monthlyLabels} /><PanelLink>View Historical Analysis →</PanelLink></Panel>
        <Panel title="Recent Reserve Transactions"><TransactionTable rows={reserveTransactions} reserveMode /><PanelLink>View All Reserve Transactions →</PanelLink></Panel>
      </section>
    </div>
  );
}

function ExpendituresPage() {
  return (
    <div className="tmc-page-stack">
      <KpiGrid items={expenditureKpis} />
      <section className="tmc-grid three">
        <Panel title="Expenditures by Category"><DonutWithLegend data={expendituresByCategory} centerValue="$1.03M" centerLabel="Total Spent" /><PanelLink>View Category Breakdown →</PanelLink></Panel>
        <Panel title="Expenditures Over Time (30D)"><LinePanel series={expenditureSeries} labels={monthlyLabels} /><div className="tmc-mini-stat-row"><span>Total Spent (30D)<strong>$1.03M</strong></span><span>Daily Average<strong>$34.37K</strong></span><span>vs Previous 30D<strong className="tmc-positive">↓ 8.7%</strong></span></div></Panel>
        <Panel title="Budget vs Actual by Category"><ProgressRows rows={expendituresByCategory.map((item) => ({ label: item.label, amount: item.amount, value: Math.min(100, item.value * 2.9), note: `${Math.round(item.value * 2.45)}%`, tone: item.tone }))} /><PanelLink>View Full Budget Report →</PanelLink></Panel>
      </section>
      <section className="tmc-grid two bottom-heavy">
        <Panel title="Recent Expenditures"><DataTable headers={['ID', 'Description', 'Category', 'Amount', 'Status', 'Approved By', 'Date', 'Tx Hash']} rows={expenditureRows.map((row) => [row[0], row[1], row[2], <span className="tmc-negative">{row[3]}</span>, <StatusPill tone={row[4] === 'Pending' ? 'orange' : 'green'}>{row[4]}</StatusPill>, row[5], row[6], row[7]])} /><PanelLink>View All Expenditures →</PanelLink></Panel>
        <Panel title="Expenditure Approvals"><div className="tmc-approval-summary"><span>Pending<strong>$27.34K</strong><small>5 requests</small></span><span>Approved<strong>$967.24K</strong><small>93.9% of total</small></span><span>Rejected<strong>$6.18K</strong><small>1 request</small></span></div><DataTable headers={['Request', 'Description', 'Amount', 'Requested By', 'Status', 'Date']} rows={approvalRows.map((row) => [row[0], row[1], row[2], row[3], <StatusPill tone={row[4] === 'Pending' ? 'orange' : 'green'}>{row[4]}</StatusPill>, row[5]])} compact /><PanelLink>View All Approval Requests →</PanelLink></Panel>
      </section>
    </div>
  );
}

function BudgetingPage() {
  return (
    <div className="tmc-page-stack">
      <KpiGrid items={budgetKpis} />
      <section className="tmc-grid three">
        <Panel title="Budget Overview"><DonutWithLegend data={budgetOverview} centerValue="$2.45M" centerLabel="Total Budget" /><PanelLink>View Full Budget Breakdown →</PanelLink></Panel>
        <Panel title="Budget vs Actual (YTD)"><LinePanel series={budgetSeries} labels={budgetMonths} /><div className="tmc-mini-stat-row"><span>YTD Budget<strong>$1.03M</strong></span><span>YTD Actual<strong>$1.03M</strong></span><span>Variance<strong className="tmc-positive">+$0</strong></span><span>Forecast (FY)<strong>$2.33M</strong></span></div><PanelLink>View Budget Analytics →</PanelLink></Panel>
        <Panel title="Budget by Category"><DataTable headers={['Category', 'Budget', 'Allocated', 'Spent', 'Utilization', 'Variance']} rows={budgetRows.map((row) => [row[0], row[1], row[2], row[3], row[4], <span className="tmc-positive">{row[5]}</span>])} compact /><PanelLink>View Category Details →</PanelLink></Panel>
      </section>
      <section className="tmc-grid three budget-mid">
        <Panel title="Budget Timeline & Milestones"><Timeline /><PanelLink>View All Milestones →</PanelLink></Panel>
        <Panel title="Budget Scenarios"><DataTable headers={['Scenario', 'Description', 'Projected Outcome', 'Impact']} rows={[[ 'Base Case', 'Current plan & growth', '$2.33M', <span className="tmc-positive">On Track</span> ], [ 'Optimistic', '15% revenue growth', '$2.68M', <span className="tmc-positive">+$350K</span> ], [ 'Conservative', '10% revenue decline', '$2.05M', <span className="tmc-negative">-$280K</span> ], [ 'High Growth', '30% revenue growth', '$2.95M', <span className="tmc-positive">+$620K</span> ], [ 'Cost Reduction', '10% expense reduction', '$2.21M', <span className="tmc-positive">+$120K</span> ]]} compact /><PanelLink>View Scenario Planner →</PanelLink></Panel>
        <Panel title="Budget Alerts"><InsightStack rows={[['⌃', 'Operations spending is within budget.', 'Utilization: 41%', '2h ago', 'green'], ['!', 'Marketing utilization is approaching 50%.', 'Consider rebalancing.', '5h ago', 'orange'], ['ⓘ', 'Q2 Mid-Year Review due in 14 days.', 'Prepare department reports.', '1d ago', 'cyan'], ['✓', 'Infrastructure project under budget.', '$8.20K remaining.', '2d ago', 'green']]} /><PanelLink>View All Alerts →</PanelLink></Panel>
      </section>
      <section className="tmc-grid three budget-bottom">
        <Panel title="Budget Allocations by Department"><DonutWithLegend data={budgetOverview} centerValue="$2.45M" centerLabel="Total Budget" /><PanelLink>View Allocation Matrix →</PanelLink></Panel>
        <Panel title="Department Budgets"><DataTable headers={['Department', 'Budget', 'Allocated', 'Spent', 'Utilization', 'Status', 'Trend']} rows={budgetRows.slice(0, 5).map((row) => [row[0], row[1], row[2], row[3], row[4], <span className="tmc-positive">On Track</span>, '⌁'])} compact /><PanelLink>View All Departments →</PanelLink></Panel>
        <Panel title="Upcoming Budget Milestones"><MilestoneList /><PanelLink>View All Milestones →</PanelLink></Panel>
      </section>
    </div>
  );
}

function ReportsPage() {
  return (
    <div className="tmc-page-stack">
      <KpiGrid items={reportsKpis} />
      <section className="tmc-grid three reports-top">
        <Panel title="Treasury Performance Overview"><LinePanel series={treasuryPerformanceSeries} labels={monthlyLabels} /><PanelLink>View Detailed Performance Report →</PanelLink></Panel>
        <Panel title="Reports by Category"><DonutWithLegend data={reportCategories} centerValue="42" centerLabel="Total Reports" /><PanelLink>View All Reports →</PanelLink></Panel>
        <Panel title="Key Insights (30D)"><InsightStack rows={[['↗', 'Revenue growth of 21.3% driven by', 'interest income and protocol fees.', '', 'green'], ['⬡', 'Reserve health improved across all pools', 'with increased coverage ratios.', '', 'blue'], ['◔', 'Operations remain the largest expense', 'category at 30.3% of total spend.', '', 'purple'], ['!', '3 budget categories are over allocated', 'and require attention.', '', 'orange']]} /><PanelLink>View Insights Dashboard →</PanelLink></Panel>
      </section>
      <section className="tmc-grid three reports-mid">
        <Panel title="Recent Reports"><DataTable headers={['Report Name', 'Category', 'Period', 'Generated On', 'Status']} rows={reportRows.map((row) => [row[0], row[1], row[2], row[3], <StatusPill tone={row[4] === 'Pending' ? 'orange' : 'green'}>{row[4]}</StatusPill>])} compact /><PanelLink>View All Reports →</PanelLink></Panel>
        <Panel title="Report Types"><MetricList rows={[[ 'PDF Reports', '24', '57.1%' ], [ 'Excel Reports', '10', '23.8%' ], [ 'On-Chain Reports', '5', '11.9%' ], [ 'Audit Reports', '3', '7.1%' ], [ 'Custom Reports', '0', '0.0%' ]]} /><PanelLink>View Report Library →</PanelLink></Panel>
        <Panel title="Report Schedule"><DataTable headers={['Report', 'Frequency', 'Next Run', 'Status']} rows={[[ 'Daily Treasury Summary', 'Daily', 'May 13, 2025', <span className="tmc-positive">Active</span> ], [ 'Weekly Performance Report', 'Weekly', 'May 18, 2025', <span className="tmc-positive">Active</span> ], [ 'Monthly Budget Report', 'Monthly', 'Jun 2, 2025', <span className="tmc-positive">Active</span> ], [ 'Quarterly Audit Report', 'Quarterly', 'Jul 1, 2025', <span className="tmc-positive">Active</span> ], [ 'Annual Summary Report', 'Annually', 'Jan 1, 2026', <span className="tmc-linkish">Scheduled</span> ]]} compact /><PanelLink>Manage Schedules →</PanelLink></Panel>
      </section>
      <section className="tmc-grid two bottom-heavy">
        <Panel title="Performance Metrics"><div className="tmc-performance-metrics">{['Gross Revenue Growth|21.3%', 'Expense Efficiency|78.6%', 'Net Profit Margin|72.4%', 'Capital Efficiency|0.84x', 'Return on Assets|12.84%'].map((metric) => { const [label, value] = metric.split('|'); return <div key={label}><span>{label}</span><strong>{value}</strong><SmallSparkline values={[4, 8, 6, 9, 11, 10, 13, 15]} tone="green" /></div>; })}</div><PanelLink>View Performance Analytics →</PanelLink></Panel>
        <Panel title="Custom Report Builder"><div className="tmc-builder"><div><strong>▧</strong><span>Create custom reports with advanced filters, custom date ranges, and tailored metrics.</span></div><PanelButton>Create Custom Report</PanelButton></div><MetricList rows={[[ 'Department Spending Analysis', '↗' ], [ 'Protocol Revenue Breakdown', '↗' ], [ 'Asset Allocation Impact Report', '↗' ], [ 'Risk Exposure Analysis', '↗' ]]} /><PanelLink>View All Custom Reports →</PanelLink></Panel>
      </section>
    </div>
  );
}

function AuditLogsPage() {
  return (
    <div className="tmc-page-stack">
      <KpiGrid items={auditKpis} />
      <section className="tmc-grid three audit-top">
        <Panel title="Audit Events Over Time"><LinePanel series={auditEventSeries} labels={monthlyLabels} /><PanelLink>View Event Timeline →</PanelLink></Panel>
        <Panel title="Events by Type"><DonutWithLegend data={auditEventTypes} centerValue="12,842" centerLabel="Total Events" /></Panel>
        <Panel title="Event Severity Breakdown"><DonutWithLegend data={auditSeverity} centerValue="Low" centerLabel="Risk Level" /><PanelLink>View Security Events →</PanelLink></Panel>
      </section>
      <section className="tmc-grid audit-layout">
        <Panel title="Recent Audit Logs"><DataTable headers={['Time (UTC)', 'User / Actor', 'Event Type', 'Category', 'Description', 'Status', 'Severity', 'Tx Hash / ID']} rows={auditRows.map((row) => [row[0], row[1], row[2], row[3], row[4], <StatusPill tone={row[5] === 'Failed' ? 'red' : 'green'}>{row[5]}</StatusPill>, <StatusPill tone={severityTone(row[6])}>{row[6]}</StatusPill>, row[7]])} /><PanelLink>View All Audit Logs →</PanelLink><div className="tmc-pagination"><button>1</button><button>2</button><button>3</button><button>4</button><button>5</button><span>...</span><button>322</button><button>25 / page⌄</button></div></Panel>
        <div className="tmc-nested-stack">
          <Panel title="Audit Log Filters"><div className="tmc-filter-form"><label>Date Range<input value="May 12, 2025 - May 12, 2025" readOnly /></label><label>Event Type<select><option>All Types</option></select></label><label>Category<select><option>All Categories</option></select></label><label>Severity<select><option>All Severities</option></select></label><label>User / Actor<input placeholder="Search address or name..." /></label><PanelButton>⏳ Apply Filters</PanelButton><button className="tmc-clear" type="button">Clear Filters</button></div></Panel>
          <Panel title="Export Audit Logs"><div className="tmc-export-list"><button>▧ Export CSV <small>.csv</small></button><button>▧ Export JSON <small>.json</small></button><button>▧ Export PDF <small>.pdf</small></button></div></Panel>
        </div>
      </section>
    </div>
  );
}

function KpiGrid({ items }: { items: TreasuryKpi[] }) {
  return <section className="tmc-kpi-grid">{items.map((item) => <KpiCard key={item.label} item={item} />)}</section>;
}

function KpiCard({ item }: { item: TreasuryKpi }) {
  return (
    <article className={`tmc-kpi-card tmc-tone-${item.tone}`}>
      <div className="tmc-kpi-icon">{item.icon}</div>
      <div className="tmc-kpi-copy">
        <span>{item.label}</span>
        <strong>{item.value}</strong>
        {(item.delta || item.note) && <small><em className={item.delta?.includes('↓') ? 'tmc-negative' : 'tmc-positive'}>{item.delta}</em> {item.note}</small>}
      </div>
      {item.spark && <SmallSparkline values={item.spark} tone={item.tone} />}
    </article>
  );
}

function Panel({ title, children }: { title: string; children: ReactNode }) {
  return <section className="tmc-panel"><h2>{title}</h2>{children}</section>;
}

function DonutWithLegend({ data, centerValue, centerLabel }: { data: TreasurySlice[]; centerValue: string; centerLabel: string }) {
  return (
    <div className="tmc-donut-row">
      <DonutChart data={data} centerValue={centerValue} centerLabel={centerLabel} />
      <div className="tmc-legend-list">
        {data.map((item) => <div key={item.label}><i className={`tmc-dot tmc-bg-${item.tone}`} /><span>{item.label}</span><b>{item.amount}</b><em>{item.value}%</em></div>)}
      </div>
    </div>
  );
}

function DonutChart({ data, centerValue, centerLabel }: { data: TreasurySlice[]; centerValue: string; centerLabel: string }) {
  const radius = 74;
  const stroke = 24;
  const circumference = 2 * Math.PI * radius;
  let offset = 0;
  return (
    <svg className="tmc-donut" viewBox="0 0 200 200" role="img" aria-label={centerLabel}>
      <circle cx="100" cy="100" r={radius} fill="transparent" stroke="rgba(255,255,255,.08)" strokeWidth={stroke} />
      {data.map((item) => {
        const dash = (item.value / 100) * circumference;
        const circle = <circle key={item.label} cx="100" cy="100" r={radius} fill="transparent" stroke={toneColor[item.tone]} strokeWidth={stroke} strokeDasharray={`${dash} ${circumference - dash}`} strokeDashoffset={-offset} transform="rotate(-90 100 100)" />;
        offset += dash;
        return circle;
      })}
      <circle cx="100" cy="100" r="50" fill="#06101d" />
      <text x="100" y="95" fill="#fff" fontSize="22" fontWeight="800" textAnchor="middle">{centerValue}</text>
      <text x="100" y="116" fill="rgba(230,241,255,.72)" fontSize="12" textAnchor="middle">{centerLabel}</text>
    </svg>
  );
}

function ProgressRows({ rows }: { rows: ProgressMetric[] }) {
  return (
    <div className="tmc-progress-list">
      {rows.map((row) => (
        <div className="tmc-progress-row" key={row.label}>
          <span>{row.label}</span>
          <div className="tmc-progress-track"><i className={`tmc-bg-${row.tone}`} style={{ width: `${Math.max(3, Math.min(100, row.value))}%` }} /></div>
          <b>{row.amount}</b>
          <em>{row.note || row.status}</em>
          {row.status && <StatusPill tone="green">{row.status}</StatusPill>}
        </div>
      ))}
    </div>
  );
}

function TransactionTable({ rows, reserveMode = false }: { rows: TreasuryTransaction[]; reserveMode?: boolean }) {
  const headers = reserveMode ? ['Type', 'Reserve', 'Description', 'Amount', 'Date', 'Tx Hash'] : ['Type', 'Description', 'Amount', 'Asset', 'Date', 'Tx Hash'];
  const tableRows = rows.map((row) => reserveMode
    ? [row.type, row.asset, row.description, <span className={row.tone === 'red' ? 'tmc-negative' : 'tmc-positive'}>{row.amount}</span>, row.date, <span className="tmc-linkish">{row.hash}</span>]
    : [<span className={row.tone === 'red' ? 'tmc-negative' : 'tmc-positive'}>{row.type}</span>, row.description, <span className={row.tone === 'red' ? 'tmc-negative' : 'tmc-positive'}>{row.amount}</span>, row.asset, row.date, <span className="tmc-linkish">{row.hash}</span>]
  );
  return <DataTable headers={headers} rows={tableRows} />;
}

function DataTable({ headers, rows, compact = false }: { headers: string[]; rows: ReactNode[][]; compact?: boolean }) {
  return (
    <div className="tmc-table-wrap">
      <table className={compact ? 'tmc-data-table compact' : 'tmc-data-table'}>
        <thead><tr>{headers.map((head) => <th key={head}>{head}</th>)}</tr></thead>
        <tbody>{rows.map((row, rowIndex) => <tr key={rowIndex}>{row.map((cell, cellIndex) => <td key={`${rowIndex}-${cellIndex}`}>{cell}</td>)}</tr>)}</tbody>
      </table>
    </div>
  );
}

function MetricList({ rows }: { rows: ReactNode[][] }) {
  return <dl className="tmc-metric-list">{rows.map((row, index) => <div key={index}><dt>{row[0]}</dt><dd>{row[1]}</dd>{row[2] && <dd>{row[2]}</dd>}</div>)}</dl>;
}

function StatusPill({ tone, children }: { tone: Tone; children: ReactNode }) {
  return <span className={`tmc-status-pill tmc-status-${tone}`}>{children}</span>;
}

function PanelLink({ children }: { children: ReactNode }) {
  return <a className="tmc-panel-link">{children}</a>;
}

function PanelButton({ children }: { children: ReactNode }) {
  return <button className="tmc-panel-button" type="button">{children}</button>;
}

function BudgetSummary({ budget, spent, remaining, percentage, spentLabel = 'Spent', remainingLabel = 'Remaining' }: { budget: string; spent: string; remaining: string; percentage: number; spentLabel?: string; remainingLabel?: string }) {
  return (
    <div className="tmc-budget-summary">
      <div><span>Budget</span><strong>{budget}</strong></div>
      <div><span>{spentLabel}</span><strong>{spent}</strong><em>({percentage.toFixed(2)}%)</em></div>
      <div><span>{remainingLabel}</span><strong>{remaining}</strong><em>({(100 - percentage).toFixed(1)}%)</em></div>
      <div className="tmc-budget-bar"><i style={{ width: `${percentage}%` }} /></div>
    </div>
  );
}

function Gauge({ value, label }: { value: number; label: string }) {
  const radius = 62;
  const circumference = 2 * Math.PI * radius;
  const dash = (value / 100) * circumference;
  return (
    <svg className="tmc-gauge" viewBox="0 0 180 180" role="img" aria-label={`${label} ${value}`}>
      <circle cx="90" cy="90" r={radius} fill="transparent" stroke="rgba(255,255,255,.08)" strokeWidth="18" />
      <circle cx="90" cy="90" r={radius} fill="transparent" stroke={toneColor.green} strokeWidth="18" strokeDasharray={`${dash} ${circumference - dash}`} strokeLinecap="round" transform="rotate(-90 90 90)" />
      <text x="90" y="88" fill="#fff" fontSize="30" fontWeight="800" textAnchor="middle">{value}</text>
      <text x="90" y="113" fill={toneColor.green} fontSize="13" textAnchor="middle">{label}</text>
    </svg>
  );
}

function LinePanel({ series, labels }: { series: { label: string; values: number[]; tone: Tone }[]; labels: string[] }) {
  return (
    <div className="tmc-line-panel">
      <svg viewBox="0 0 720 260" role="img" aria-label="Treasury line chart">
        {[0, 1, 2, 3].map((row) => <line key={row} x1="44" x2="700" y1={34 + row * 54} y2={34 + row * 54} stroke="rgba(255,255,255,.07)" />)}
        {series.map((entry) => {
          const poly = linePoints(entry.values, 720, 220).map(([x, y]) => `${x},${y}`).join(' ');
          return <polyline key={entry.label} points={poly} fill="none" stroke={toneColor[entry.tone]} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />;
        })}
        {labels.map((label, index) => <text key={label} x={50 + index * (640 / Math.max(labels.length - 1, 1))} y="246" fill="rgba(230,241,255,.62)" fontSize="12" textAnchor="middle">{label}</text>)}
      </svg>
      <div className="tmc-chart-legend">{series.map((entry) => <span key={entry.label}><i className={`tmc-dot tmc-bg-${entry.tone}`} />{entry.label}</span>)}</div>
    </div>
  );
}

function SmallSparkline({ values, tone }: { values: number[]; tone: Tone }) {
  const poly = linePoints(values, 110, 42, 3).map(([x, y]) => `${x},${y}`).join(' ');
  return <svg className="tmc-sparkline" viewBox="0 0 110 42" role="img" aria-label="metric trend"><polyline points={poly} fill="none" stroke={toneColor[tone]} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

function linePoints(values: number[], width: number, height: number, padding = 18) {
  const max = Math.max(...values);
  const min = Math.min(...values);
  const range = Math.max(max - min, 1);
  return values.map((value, index) => {
    const x = padding + (index / Math.max(values.length - 1, 1)) * (width - padding * 2);
    const y = height - padding - ((value - min) / range) * (height - padding * 2);
    return [Number(x.toFixed(1)), Number(y.toFixed(1))];
  });
}

function AllocationHeatmap() {
  const points = [
    ['Aave V3', 20, 28, 'green'], ['Growth & Dev', 47, 20, 'green'], ['Maple Finance', 66, 28, 'green'], ['Insurance Reserve', 56, 58, 'purple'], ['Operations', 18, 72, 'blue'], ['USDC Treasury', 16, 84, 'blue'], ['Liquidity', 42, 78, 'orange'], ['Contingency', 86, 78, 'red']
  ];
  return (
    <div className="tmc-heatmap-card">
      <span className="tmc-axis y">Expected Return (APY)</span>
      <span className="tmc-axis x">Risk Level</span>
      {points.map(([label, left, top, tone]) => <div key={label} className={`tmc-heat-dot tmc-bg-${tone}`} style={{ left: `${left}%`, top: `${top}%` }}><span>{label}</span></div>)}
      <div className="tmc-risk-labels"><span>Low</span><span>Medium</span><span>High</span><span>Very High</span></div>
    </div>
  );
}

function InsightStack({ rows }: { rows: string[][] }) {
  return (
    <div className="tmc-insight-stack">
      {rows.map(([icon, title, value, detail, tone]) => (
        <div key={`${title}-${value}`} className={`tmc-insight tmc-tone-${tone}`}>
          <i>{icon}</i>
          <div><strong>{title}</strong><b>{value}</b><small>{detail}</small></div>
        </div>
      ))}
    </div>
  );
}

function Timeline() {
  const rows = [
    ['FY 2025 Budget Planning', 'May', 'Completed', 'blue'],
    ['Department Submissions', 'Jun', 'Completed', 'red'],
    ['DAO Review & Approval', 'Jul', 'Completed', 'orange'],
    ['Q2 Execution', 'Aug', 'In Progress', 'green'],
    ['Mid-Year Review', 'Sep', 'Upcoming', 'cyan'],
    ['Q3 Execution', 'Oct', 'Upcoming', 'orange'],
    ['Q4 Execution', 'Nov', 'Upcoming', 'blue'],
    ['Year-End Review', 'Dec', 'Upcoming', 'purple']
  ];
  return <div className="tmc-timeline">{rows.map(([name, month, status, tone]) => <div key={name}><span>{name}</span><i className={`tmc-bg-${tone}`}>{month}</i><StatusPill tone={status === 'Completed' ? 'green' : status === 'In Progress' ? 'blue' : 'orange'}>{status}</StatusPill></div>)}</div>;
}

function MilestoneList() {
  const milestones = [['May 26', 'Q2 Mid-Year Review', 'Review department performance and projections', '14 days'], ['Jun 02', 'Q3 Budget Planning', 'Begin Q3 budget planning process', '21 days'], ['Jun 16', 'DAO Budget Proposal', 'Submit revised budget proposals to DAO', '35 days'], ['Jun 30', 'Q2 Final Report', 'Finalize Q2 budget performance report', '49 days']];
  return <div className="tmc-milestone-list">{milestones.map(([date, title, detail, due]) => <div key={title}><time>{date}</time><span><strong>{title}</strong><small>{detail}</small></span><em>{due}</em></div>)}</div>;
}

function severityTone(value: string): Tone {
  if (value === 'High') return 'red';
  if (value === 'Medium') return 'orange';
  return 'green';
}
