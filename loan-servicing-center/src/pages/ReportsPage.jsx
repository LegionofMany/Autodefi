import React from 'react';
import { KpiGrid, Panel, Donut, LegendList, LineChart, DataTable, BarBreakdown } from '../components/ui.jsx';
import { dashboardKpis, loanStatusSegments, reportPerformanceRows } from '../data/mockData.js';

export const reportsActions = [
  { label: 'Schedule Report', icon: '▣' },
  { label: 'Email Report', icon: '✉' },
  { label: 'Download Report', icon: '⇩' },
  { label: 'Create Custom Report', icon: '+' },
  { label: 'Edit Report Templates', icon: '⚙' },
  { label: 'Manage Schedules', icon: '◷' }
];

export default function ReportsPage() {
  const kpis = [
    dashboardKpis[1],
    dashboardKpis[2],
    dashboardKpis[0],
    dashboardKpis[3],
    dashboardKpis[4],
    { label: 'Avg Interest Rate', value: '8.67%', change: '↓ 0.12%', sub: 'vs Apr 12, 2025', tone: 'purple', icon: '⌁', trend: [18, 17, 16, 15, 14, 13, 12] }
  ];
  const rows = reportPerformanceRows.map((row) => [row[0], row[1], row[2], row[3], <span className="inline-ok">↑ {row[4]}</span>, <span className="inline-ok">↑</span>]);
  return (
    <>
      <KpiGrid items={kpis} className="six" />
      <div className="report-tabs"><button className="active">Portfolio Summary</button><button>Performance Analysis</button><button>Delinquency Analysis</button><button>Payment Analysis</button><button>Collateral & Insurance</button><button>Borrower Analysis</button><button>Trend Analysis</button><button>Custom Reports</button></div>
      <div className="reports-grid">
        <Panel title="Portfolio Value Trend"><LineChart series={[[50, 55, 60, 66, 70, 76, 80]]} labels={["Nov '24", "Dec '24", "Jan '25", "Feb '25", "Mar '25", "Apr '25", "May '25"]} /></Panel>
        <Panel title="Loan Status Distribution"><div className="donut-panel-content"><Donut segments={loanStatusSegments} center="11,293" subtitle="Total Loans" /><LegendList items={loanStatusSegments} /></div></Panel>
        <Panel title="Delinquency Rate Trend (30+)"><LineChart series={[[1.6, 2.4, 2.0, 2.3, 2.1, 1.8, 1.6]]} labels={["Nov '24", "Dec '24", "Jan '25", "Feb '25", "Mar '25", "Apr '25", "May '25"]} tone="green" /></Panel>
      </div>
      <div className="dashboard-grid lower report-lower">
        <Panel title="Portfolio Performance Summary" className="span-2"><DataTable columns={['Metric', 'This Period', 'Prior Period', 'Change', 'Change (%)', 'Trend']} rows={rows} footer="" /></Panel>
        <Panel title="Top Loan Originators"><BarBreakdown rows={[{ label: 'AutoDeFi Direct', value: '$18.42M · 23.5%', width: '86%', color: 'blue' }, { label: 'Drive Capital Partners', value: '$15.67M · 20.0%', width: '74%', color: 'blue' }, { label: 'Roadway Motors', value: '$11.32M · 14.4%', width: '58%', color: 'blue' }, { label: 'Secure Auto Group', value: '$8.91M · 11.4%', width: '46%', color: 'blue' }, { label: 'Premier Auto Finance', value: '$7.18M · 9.2%', width: '36%', color: 'blue' }]} /></Panel>
        <Panel title="Report Shortcuts"><div className="shortcut-list"><button>Portfolio Performance Report ›</button><button>Delinquency Trend Report ›</button><button>Payment Performance Report ›</button><button>Collateral & Insurance Report ›</button><button>Borrower Demographics Report ›</button><button>Custom Report Builder ›</button></div></Panel>
      </div>
    </>
  );
}
