import React, { useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  AlertTriangle,
  BarChart3,
  Bot,
  Building2,
  Calendar,
  Car,
  CheckCircle2,
  ChevronDown,
  ClipboardList,
  Clock3,
  Database,
  Download,
  FileCheck2,
  Filter,
  Fingerprint,
  Gauge,
  Home,
  Landmark,
  LineChart,
  LockKeyhole,
  RefreshCw,
  Search,
  Settings,
  Shield,
  ShieldAlert,
  ShieldCheck,
  SlidersHorizontal,
  Smartphone,
  TrendingUp,
  UserCheck,
  Users,
  WalletCards,
  XCircle,
} from 'lucide-react';
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  Cell,
  Line,
  LineChart as ReLineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import './styles.css';

const navItems = [
  ['dashboard', 'Dashboard', Home],
  ['applications', 'Applications Queue', ClipboardList],
  ['risk', 'Risk Models', Gauge],
  ['identity', 'Identity & KYC', Users],
  ['income', 'Income Verification', FileCheck2],
  ['bank', 'Bank Analysis', Landmark],
  ['vehicle', 'Vehicle Valuation', Car],
  ['fraud', 'Fraud Signals', AlertTriangle],
  ['conditional', 'Conditional Approvals', CheckCircle2],
  ['funding', 'Funding Readiness', WalletCards],
  ['analytics', 'Analytics', BarChart3],
  ['settings', 'Settings', Settings],
];

const colors = ['#00f59c', '#f5b400', '#1d9bf0', '#ff4d4d', '#8b5cf6', '#00e5ff'];
const trend = [
  { day: 'Apr 13', applications: 58, approved: 36, funded: 19, risk: 612, fraud: 11, time: 22 },
  { day: 'Apr 18', applications: 64, approved: 42, funded: 23, risk: 588, fraud: 9, time: 20 },
  { day: 'Apr 23', applications: 72, approved: 47, funded: 31, risk: 631, fraud: 13, time: 19 },
  { day: 'Apr 28', applications: 68, approved: 49, funded: 28, risk: 604, fraud: 12, time: 18 },
  { day: 'May 3', applications: 81, approved: 58, funded: 35, risk: 624, fraud: 15, time: 17 },
  { day: 'May 8', applications: 73, approved: 51, funded: 33, risk: 602, fraud: 12, time: 18 },
  { day: 'May 12', applications: 84, approved: 61, funded: 39, risk: 612, fraud: 10, time: 16 },
];
const cashFlow = [
  { month: 'Jun', inflow: 6200, outflow: 2700, net: 3500 },
  { month: 'Jul', inflow: 6900, outflow: 3100, net: 3800 },
  { month: 'Aug', inflow: 6500, outflow: 2800, net: 3700 },
  { month: 'Sep', inflow: 7250, outflow: 3000, net: 4250 },
  { month: 'Oct', inflow: 6800, outflow: 3100, net: 3700 },
  { month: 'Nov', inflow: 7420, outflow: 3300, net: 4120 },
  { month: 'Dec', inflow: 7100, outflow: 3200, net: 3900 },
  { month: 'Jan', inflow: 6950, outflow: 3050, net: 3900 },
  { month: 'Feb', inflow: 7600, outflow: 3350, net: 4250 },
  { month: 'Mar', inflow: 7350, outflow: 3250, net: 4100 },
  { month: 'Apr', inflow: 7800, outflow: 3400, net: 4400 },
  { month: 'May', inflow: 6842, outflow: 2753, net: 4089 },
];
const applications = [
  { applicant: 'Marcus Johnson', vehicle: '2022 Tesla Model Y', amount: '$42,500', tier: 'Tier 2', score: 642, action: 'Conditional Approval', status: 'Risk Scored' },
  { applicant: 'Sophia Martinez', vehicle: '2021 BMW X5', amount: '$51,000', tier: 'Tier 1', score: 518, action: 'Approve', status: 'Risk Scored' },
  { applicant: 'James Wilson', vehicle: '2021 Ford F-150', amount: '$38,700', tier: 'Tier 3', score: 701, action: 'Manual Review', status: 'Under Review' },
  { applicant: 'Olivia Smith', vehicle: '2022 Audi Q7', amount: '$46,250', tier: 'Tier 2', score: 593, action: 'Conditional Approval', status: 'Risk Scored' },
  { applicant: 'Daniel Brown', vehicle: '2020 Jeep Grand Cherokee', amount: '$33,800', tier: 'Tier 4', score: 742, action: 'Decline', status: 'Declined' },
];
const decisionMix = [
  { name: 'Approved', value: 1063 },
  { name: 'Conditional', value: 712 },
  { name: 'Manual Review', value: 287 },
  { name: 'Declined', value: 122 },
];

function toneClass(tone) {
  return `tone-${tone || 'blue'}`;
}
function Glass({ children, className = '' }) {
  return <section className={`glass ${className}`}>{children}</section>;
}
function Title({ title, subtitle, action }) {
  return <div className="section-title"><div><h3>{title}</h3>{subtitle && <p>{subtitle}</p>}</div>{action}</div>;
}
function Metric({ title, value, sub, icon: Icon, tone = 'blue' }) {
  return <div className="metric glass"><div className={`metric-icon ${toneClass(tone)}`}><Icon size={25}/></div><div><p>{title}</p><strong>{value}</strong><small className={sub?.includes('↓') || sub?.includes('risk') ? 'bad' : 'good'}>{sub}</small></div></div>;
}
function Pill({ children, tone = 'gray' }) { return <span className={`pill ${toneClass(tone)}`}>{children}</span>; }
function Mini({ label, value, tone = 'white' }) { return <div className="mini"><span>{label}</span><b className={toneClass(tone)}>{value}</b></div>; }
function DataTable({ columns, rows }) {
  return <div className="table-wrap"><table><thead><tr>{columns.map(c => <th key={c.key}>{c.label}</th>)}</tr></thead><tbody>{rows.map((row, i) => <tr key={i}>{columns.map(c => <td key={c.key}>{row[c.key]}</td>)}</tr>)}</tbody></table></div>;
}
function ActionButton({ children, tone }) { return <button className={`action ${toneClass(tone)}`}>{children}</button>; }
function SearchBar({ placeholder }) { return <div className="search"><Search size={16}/><input placeholder={placeholder}/><SlidersHorizontal size={16}/></div>; }
function ChartCard({ title, subtitle, type = 'area', data = trend }) {
  return <Glass><Title title={title} subtitle={subtitle}/><div className="chart">
    <ResponsiveContainer>
      {type === 'bar' ? <BarChart data={data}><XAxis dataKey={data[0]?.month ? 'month' : 'day'} stroke="#8aa4bd"/><YAxis stroke="#8aa4bd"/><Tooltip/><Bar dataKey="approved" fill="#00f59c"/><Bar dataKey="funded" fill="#1d9bf0"/></BarChart> :
       type === 'line' ? <ReLineChart data={data}><XAxis dataKey={data[0]?.month ? 'month' : 'day'} stroke="#8aa4bd"/><YAxis stroke="#8aa4bd"/><Tooltip/><Line dataKey={data[0]?.month ? 'inflow' : 'approved'} stroke="#00f59c" strokeWidth={2}/><Line dataKey={data[0]?.month ? 'outflow' : 'risk'} stroke="#8b5cf6" strokeWidth={2}/></ReLineChart> :
       <AreaChart data={data}><XAxis dataKey={data[0]?.month ? 'month' : 'day'} stroke="#8aa4bd"/><YAxis stroke="#8aa4bd"/><Tooltip/><Area dataKey={data[0]?.month ? 'inflow' : 'applications'} stroke="#1d9bf0" fill="#1d9bf022"/><Area dataKey={data[0]?.month ? 'net' : 'approved'} stroke="#00f59c" fill="#00f59c22"/><Area dataKey={data[0]?.month ? 'outflow' : 'funded'} stroke="#8b5cf6" fill="#8b5cf622"/></AreaChart>}
    </ResponsiveContainer>
  </div></Glass>;
}
function PieCard({ title, subtitle, data = decisionMix, center = '1,421' }) {
  return <Glass><Title title={title} subtitle={subtitle}/><div className="pie-row"><ResponsiveContainer width="45%" height={190}><PieChart><Pie data={data} dataKey="value" innerRadius={52} outerRadius={86}>{data.map((_, i) => <Cell key={i} fill={colors[i % colors.length]}/>)}</Pie><Tooltip/></PieChart></ResponsiveContainer><div className="legend">{data.map((d, i) => <p key={d.name}><i style={{background: colors[i % colors.length]}}/> {d.name}<b>{d.value}</b></p>)}<strong>{center}</strong><span>Total</span></div></div></Glass>;
}

const appColumns = [
  { key: 'applicant', label: 'Applicant' }, { key: 'vehicle', label: 'Vehicle' }, { key: 'amount', label: 'Requested' }, { key: 'tierEl', label: 'Tier' }, { key: 'score', label: 'Score' }, { key: 'actionEl', label: 'Action' }, { key: 'status', label: 'Status' },
];
function applicationRows() {
  return applications.map(a => ({...a, tierEl: <Pill tone={a.tier === 'Tier 4' ? 'red' : a.tier === 'Tier 3' ? 'amber' : 'green'}>{a.tier}</Pill>, actionEl: <Pill tone={a.action === 'Approve' ? 'green' : a.action === 'Decline' ? 'red' : a.action === 'Manual Review' ? 'blue' : 'amber'}>{a.action}</Pill>}));
}

function Dashboard() {
  return <><Header title="AI Underwriter Center" subtitle="Automated borrower risk assessment and approval workflow."/><MetricGrid items={[
    ['Total Applications Reviewed','1,842','↑ 13.6% vs last 30d',ClipboardList,'blue'], ['Approval Rate','68.7%','↑ 8.7% vs last 30d',ShieldCheck,'green'], ['Avg Risk Score','612','↓ 18 pts vs last 30d',Gauge,'amber'], ['Avg Decision Time','18m 42s','↓ 22% vs last 30d',Clock3,'purple'], ['Fraud Flags','37','↑ 12.1% vs last 30d',AlertTriangle,'red'], ['Funding Ready','$28.42M','↑ 9.3% vs last 30d',WalletCards,'cyan']
  ]}/><div className="grid cols-12"><Glass className="span-5"><Title title="Underwriting Workflow Funnel" subtitle="30 days"/><div className="workflow">{['Submitted\n2,146','KYC Verified\n1,896','Income Confirmed\n1,672','Risk Scored\n1,421','Conditional\n712','Final Approval\n1,063'].map(x => <div key={x}><CheckCircle2/><b>{x.split('\n')[1]}</b><span>{x.split('\n')[0]}</span></div>)}</div><div className="progress"><i style={{width:'49.5%'}}/></div><p className="center">Conversion Rate: <b className="good">49.5%</b></p></Glass><div className="span-3"><PieCard title="Application Decision Mix" subtitle="30 days"/></div><div className="span-4"><ChartCard title="Underwriting Performance" subtitle="Last 30 days" type="line"/></div><Glass className="span-7"><Title title="Recent Loan Applications"/><DataTable columns={appColumns} rows={applicationRows()}/></Glass><DecisionPanel className="span-5" score="642 / 900" confidence="87.6%"/></div></>;
}
function ApplicationsQueue() {
  return <><Header title="Applications Queue" subtitle="Open borrower files, route approvals, and manage required conditions."/><div className="mini-grid five"><Mini label="All Applications" value="1,842"/><Mini label="Under Review" value="287" tone="blue"/><Mini label="Awaiting Docs" value="226" tone="amber"/><Mini label="Conditional" value="712" tone="purple"/><Mini label="Ready to Fund" value="528" tone="green"/></div><Glass><SearchBar placeholder="Search borrower, application ID, VIN, dealer, or vehicle..."/><Title title="Active Application Queue"/><DataTable columns={appColumns} rows={applicationRows()}/></Glass><div className="grid four">{[['Tier 1','ADF collateral or 1/3+ down','green'],['Tier 2','Good credit + token down','blue'],['Tier 3','Good credit, no money down','amber'],['Tier 4','Dealer lead + internal bank review','red']].map(([a,b,c]) => <Glass key={a}><Pill tone={c}>{a}</Pill><p>{b}</p></Glass>)}</div></>;
}
function RiskModels() {
  const rows = [['AutoDeFi Risk Score v2.7','Credit Risk','87.6%','0.92','Active'],['Fraud Detection v1.4','Fraud Risk','91.3%','0.95','Active'],['Income Stability v1.6','Income Risk','84.2%','0.88','Active'],['Cash Flow Analysis v2.1','Behavioral','85.7%','0.89','Active'],['Collateral Valuation v1.3','Collateral Risk','90.1%','0.93','Active']].map(r => ({model:r[0], type:<Pill tone="blue">{r[1]}</Pill>, accuracy:r[2], auc:r[3], status:<Pill tone="green">{r[4]}</Pill>}));
  return <><Header title="Risk Models" subtitle="Configure, monitor, and manage AI risk scoring models."/><MetricGrid items={[["Active Risk Models","5","↑ 1 vs last 30d",Database,'blue'],["Avg Model Accuracy","87.6%","↑ 2.4% vs last 30d",Gauge,'green'],["Total Decisions","12,842","↑ 14.3% vs last 30d",ClipboardList,'purple'],["Good Predictions","11,238","87.6% of total",CheckCircle2,'green'],["Model Drift Status","0","All models stable",Shield,'cyan'],["Last Retrained","2 Days","May 10, 2025",RefreshCw,'green']]}/><div className="grid two"><Glass><Title title="Risk Model Inventory"/><DataTable columns={[{key:'model',label:'Model Name'},{key:'type',label:'Type'},{key:'accuracy',label:'Accuracy'},{key:'auc',label:'AUC'},{key:'status',label:'Status'}]} rows={rows}/></Glass><ChartCard title="Model Performance Trend" type="line"/><ChartCard title="Feature Importance" type="bar" data={[{day:'Payment',approved:19,funded:10},{day:'DTI',approved:14,funded:8},{day:'Credit',approved:12,funded:6},{day:'Income',approved:10,funded:4},{day:'LTV',approved:6,funded:3}]}/><Glass><Title title="Recent Model Activity"/><List items={['AutoDeFi Risk Score v2.7 retrained','Feature set updated','Fraud rules updated','Data drift detected: medium','Backtest completed']}/></Glass></div></>;
}
function IdentityKYC() {
  const rows = [['Marcus Johnson',"Driver's License",'98%','Pass','92','Verified'],['Sophia Martinez','Passport','93%','Pass','88','Manual Review'],['James Wilson',"Driver's License",'85%','Pass','76','Docs Requested'],['Daniel Brown',"Driver's License",'62%','Fail','41','Escalated']].map(r => ({applicant:r[0], id:r[1], face:r[2], liveness:r[3], score:r[4], status:<Pill tone={r[5]==='Verified'?'green':r[5]==='Escalated'?'red':r[5]==='Manual Review'?'blue':'amber'}>{r[5]}</Pill>}));
  return <><Header title="Identity & KYC" subtitle="Verify borrower identity, compliance, and onboarding integrity."/><MetricGrid items={[["Total Verifications","2,364","↑ 14.3% vs last 30d",UserCheck,'blue'],["KYC Pass Rate","84.9%","↑ 6.7% vs last 30d",ShieldCheck,'green'],["Avg Verification Time","9m 18s","↓ 8.4% vs last 30d",Clock3,'purple'],["Fraud / Identity Flags","46","↑ 15.0% vs last 30d",AlertTriangle,'red'],["Manual Reviews","128","↓ 3.2% vs last 30d",FileCheck2,'blue'],["Compliance Ready","1,742","↑ 12.1% vs last 30d",CheckCircle2,'green']]}/><div className="grid cols-12"><Glass className="span-8"><Title title="Recent Identity Reviews"/><DataTable columns={[{key:'applicant',label:'Applicant'},{key:'id',label:'ID Type'},{key:'face',label:'Face Match'},{key:'liveness',label:'Liveness'},{key:'score',label:'KYC Score'},{key:'status',label:'Status'}]} rows={rows}/></Glass><VerifyPanel/><Glass className="span-4"><Title title="Verification Signals"/><List items={['Document authenticity verified','Face match verified','Liveness check passed','Sanctions screening clear','PEP screening clear','Watchlist screening clear']}/></Glass><Glass className="span-4"><Title title="KYC Outcome Summary"/><Mini label="Verification Level" value="Level 2 Enhanced" tone="blue"/><p>Ready to proceed to income verification and bank analysis.</p></Glass><Glass className="span-4"><Title title="On-Chain Audit"/><p>Identity score, verification events, document requests, and manual overrides are recorded for compliance traceability.</p></Glass></div></>;
}
function IncomeVerification() {
  return <><Header title="Income Verification" subtitle="Verify income, employment, cash flow, and Tier 4 debt-to-service."/><MetricGrid items={[["Verified Income","$6,842","↑ 8.7% vs last 30d",WalletCards,'blue'],["DTI Front-End","21.4%","Good ≤ 28%",Gauge,'green'],["DTI Back-End","34.7%","Acceptable ≤ 40%",Gauge,'purple'],["Debt-to-Service Tier 4","1.28x","Meets minimum ≥ 1.15x",Shield,'amber'],["Income Stability","High","18+ months",Clock3,'cyan'],["Verification Status","Verified","May 12, 2025",CheckCircle2,'green']]}/><div className="grid cols-12"><Glass className="span-4"><Title title="Income Summary"/><KV pairs={[['Employer','Tesla, Inc.'],['Position','Senior Software Engineer'],['Pay Frequency','Bi-Weekly'],['Gross Monthly Income','$7,500'],['Verified Monthly Income','$6,842'],['Total Verified Income','$7,292']]}/></Glass><Glass className="span-4"><Title title="Income Verification Documents"/><DataTable columns={[{key:'doc',label:'Document'},{key:'status',label:'Status'},{key:'period',label:'Period'},{key:'source',label:'Source'}]} rows={[{doc:'Pay Stubs',status:'Verified',period:'Mar 24 — May 5',source:'Plaid'},{doc:'W-2 Tax Forms',status:'Verified',period:'2024',source:'Upload'},{doc:'Bank Statements',status:'Verified',period:'Feb 12 — May 12',source:'Plaid'},{doc:'Employment Verification',status:'Verified',period:'Current',source:'The Work Number'}]}/></Glass><div className="span-4"><ChartCard title="Income Stability Trend" type="line" data={cashFlow}/></div><Glass className="span-4"><Title title="Bank & Cash Flow Analysis"/><Mini label="Average Monthly Deposits" value="$7,215"/><Mini label="Net Cash Flow" value="$4,089" tone="green"/></Glass><Glass className="span-4"><Title title="Debt-to-Income Analysis"/><Mini label="Front-End DTI" value="21.4%" tone="green"/><Mini label="Back-End DTI" value="34.7%" tone="amber"/></Glass><Glass className="span-4 neon"><Title title="Internal Bank Review — Tier 4"/><Mini label="DTS Ratio" value="1.28x" tone="green"/><p>Required for Tier 4 applications to confirm debt-to-service capacity. Reviewer notes: stable employment and sufficient cash flow.</p></Glass></div></>;
}
function BankAnalysis() {
  return <><Header title="Bank Analysis" subtitle="Analyze bank data, cash flow, debt behavior, and repayment capacity."/><MetricGrid items={[["Accounts Analyzed","1,842","↑ 13.6% vs last 30d",Building2,'blue'],["Strong Cash Flow","68.7%","↑ 8.9% vs last 30d",TrendingUp,'green'],["Avg Net Cash Flow","$4,089","↑ $512 vs last 30d",WalletCards,'blue'],["Avg Balance","$7,215","↑ $842 vs last 30d",Landmark,'purple'],["High Risk Accounts","37","↑ 12.1% vs last 30d",ShieldAlert,'red'],["Data Confidence","98.6%","High confidence",CheckCircle2,'green']]}/><div className="grid cols-12"><Glass className="span-4"><Title title="Account Summary"/><Mini label="Primary Bank" value="Chase Bank"/><Mini label="Avg Monthly Inflow" value="$6,842"/><Mini label="Net Cash Flow" value="$4,089" tone="green"/><Mini label="Health Score" value="82 / 100" tone="green"/></Glass><div className="span-5"><ChartCard title="Cash Flow Trend" data={cashFlow}/></div><Glass className="span-3 neon"><Title title="Debt-to-Service Tier 4"/><b className="hero-number">1.28x</b><p className="good">Meets minimum ≥ 1.15x</p><p>Used before Tier 4 dealer routing.</p></Glass><Glass className="span-6"><Title title="Recent Bank Accounts Reviewed"/><DataTable columns={[{key:'applicant',label:'Applicant'},{key:'bank',label:'Bank'},{key:'income',label:'Income'},{key:'dts',label:'DTS'},{key:'risk',label:'Risk'},{key:'status',label:'Status'}]} rows={[{applicant:'Marcus Johnson',bank:'Chase',income:'$6,842',dts:'1.28x',risk:<Pill tone="green">Low</Pill>,status:<Pill tone="green">Pass</Pill>},{applicant:'Sophia Martinez',bank:'Wells Fargo',income:'$5,120',dts:'1.42x',risk:<Pill tone="green">Low</Pill>,status:<Pill tone="green">Pass</Pill>},{applicant:'James Wilson',bank:'Bank of America',income:'$4,980',dts:'1.05x',risk:<Pill tone="amber">Medium</Pill>,status:<Pill tone="amber">Review</Pill>}]} /></Glass><Glass className="span-3"><Title title="Bank Risk Signals"/><KV pairs={[['NSF / Overdraft','0'],['Returned Payments','0'],['High Cash Withdrawals','1'],['Account Closure Risk','Low']]}/></Glass><div className="span-3"><ChartCard title="Balance Trend" type="bar" data={cashFlow}/></div></div></>;
}
function VehicleValuation() {
  return <><Header title="Vehicle Valuation" subtitle="Vehicle valuation, market analysis, and collateral assessment."/><MetricGrid items={[["Valuations Completed","1,842","↑ 12.4% vs last 30d",Car,'blue'],["Avg Vehicle Value","$24,680","↑ 8.7% vs last 30d",WalletCards,'green'],["Total Market Value","$45.42M","↑ 10.3% vs last 30d",LineChart,'amber'],["Avg LTV Approved","68.2%","↓ 2.1% vs last 30d",Gauge,'blue'],["High Risk Vehicles","37","↓ 8.3% vs last 30d",AlertTriangle,'red'],["Clean Titles","96.8%","Verified",ShieldCheck,'green']]}/><div className="grid cols-12"><Glass className="span-5"><Title title="Vehicle Details & Valuation"/><div className="vehicle-card"><div className="car-art"><Car size={88}/></div><KV pairs={[["Vehicle","2022 Tesla Model Y"],["VIN","SYJYGDEESNF123456"],["Odometer","24,520 miles"],["Condition","Excellent"],["Market Value","$48,250"],["Confidence","92%"]]}/></div></Glass><Glass className="span-4"><Title title="Collateral & Loan Metrics"/><KV pairs={[["Market Value","$48,250"],["Loan Requested","$42,500"],["LTV","68.2%"],["Max LTV Tier 2","75%"],["Equity","$5,750"],["Collateral Status","Acceptable"]]}/></Glass><Glass className="span-3"><Title title="Condition Assessment"/><Mini label="Overall Score" value="9.2 / 10" tone="green"/><List items={['Exterior excellent','Interior excellent','Mechanical excellent','Tires good']}/></Glass><Glass className="span-7"><Title title="Comparable Vehicles"/><DataTable columns={[{key:'year',label:'Year'},{key:'model',label:'Model'},{key:'miles',label:'Mileage'},{key:'location',label:'Location'},{key:'price',label:'Price'}]} rows={[{year:'2022',model:'Tesla Model Y Long Range AWD',miles:'22,100',location:'Miami, FL',price:'$47,900'},{year:'2022',model:'Tesla Model Y Long Range AWD',miles:'28,450',location:'Fort Lauderdale, FL',price:'$46,500'},{year:'2022',model:'Tesla Model Y Long Range AWD',miles:'19,800',location:'West Palm Beach, FL',price:'$48,900'}]}/></Glass><Glass className="span-5"><Title title="Vehicle History Summary"/><div className="mini-grid five">{['No Accidents','Clean Title','Odometer OK','No Recalls','Not Stolen'].map(x => <Mini key={x} label="Check" value={x} tone="green"/>)}</div></Glass></div></>;
}
function FraudSignals() {
  const rows = applications.map((a,i)=>({...a, fraudScore:[812,724,653,438,367][i], signal:['Synthetic Identity','Device Fingerprint','Velocity Anomaly','Identity Mismatch','Low Risk'][i], actionEl:<Pill tone={i===4?'green':i===1?'blue':'amber'}>{i===4?'Clear & Continue':i===1?'Request Docs':'Escalate Tier 4'}</Pill>}));
  return <><Header title="Fraud Signals" subtitle="Detect identity fraud, device risk, behavioral anomalies, and application velocity."/><MetricGrid items={[["Fraud Cases Reviewed","2,731","↑ 14.6% vs last 30d",ShieldAlert,'blue'],["High-Risk Alerts","412","↓ 8.3% vs last 30d",AlertTriangle,'red'],["Fraud Score Avg","238","↓ 12 pts vs last 30d",Gauge,'purple'],["Identity Flags","319","↑ 15.2% vs last 30d",UserCheck,'amber'],["Device Alerts","287","↑ 9.1% vs last 30d",Smartphone,'blue'],["Cleared Cases","1,946","↑ 6.3% vs last 30d",ShieldCheck,'green']]}/><div className="grid cols-12"><Glass className="span-8"><Title title="Recent Fraud Reviews"/><DataTable columns={[{key:'applicant',label:'Applicant'},{key:'vehicle',label:'Vehicle'},{key:'fraudScore',label:'Fraud Score'},{key:'signal',label:'Top Signal'},{key:'actionEl',label:'Recommended Action'}]} rows={rows}/></Glass><FraudPanel/><Glass className="span-4"><Title title="Signal Verification Checklist"/><List items={['Face match verified','Document authenticity verified','Phone risk low','Device match passed','Watchlist screening clear']}/></Glass><Glass className="span-4"><Title title="Device & Network Analysis"/><Fingerprint size={34}/><p>Device fingerprint trusted, IP reputation good, no VPN/proxy detected.</p></Glass><Glass className="span-4 neon"><Title title="Tier 4 Escalation / Internal Review"/><Mini label="Escalated Cases" value="184" tone="amber"/><p>Senior analyst review when fraud, identity, and bank signals overlap.</p></Glass></div></>;
}
function ConditionalApprovals() {
  const rows = applications.map((a,i)=>({...a, conditions:['Down Payment + Insurance','Co-Signer','Income Proof','GPS + Insurance','Expired'][i], statusEl:<Pill tone={i===3?'green':i===4?'red':i===1?'amber':'blue'}>{i===3?'Fulfilled':i===4?'Expired':i===1?'Awaiting Docs':'In Progress'}</Pill>, actionEl:<Pill tone={a.action==='Decline'?'red':a.action==='Approve'?'green':a.action==='Manual Review'?'blue':'amber'}>{a.action}</Pill>}));
  return <><Header title="Conditional Approvals" subtitle="Apply AI-driven conditions to mitigate risk and enable approvals."/><MetricGrid items={[["Conditional Approvals","712","↑ 14.6% vs last 30d",ClipboardList,'purple'],["Converted to Funded","528","↑ 10.3% vs last 30d",CheckCircle2,'green'],["Avg Time to Fulfill","3.6 Days","↓ 1.2 days",Clock3,'amber'],["Conditions Fulfilled","81.3%","↑ 5.7% vs last 30d",Users,'blue'],["Conditions Not Met","18.7%","↓ 5.7% vs last 30d",XCircle,'red'],["Potential Funded","$28.42M","↑ 12.9% vs last 30d",WalletCards,'cyan']]}/><div className="grid cols-12"><Glass className="span-8"><Title title="Conditional Approvals Queue"/><DataTable columns={[{key:'applicant',label:'Applicant'},{key:'vehicle',label:'Vehicle'},{key:'score',label:'Risk Score'},{key:'actionEl',label:'Decision'},{key:'conditions',label:'Conditions'},{key:'statusEl',label:'Status'}]} rows={rows}/></Glass><Glass className="span-4 neon"><Title title="AI Condition Recommendations"/><Mini label="Risk Score" value="642" tone="amber"/><List items={['Increase down payment to 20%','Add co-signer with 700+ score','Maintain full coverage insurance','Optional GPS / collateral protection']}/><ActionButton tone="purple">Apply Conditions</ActionButton></Glass><Glass className="span-4"><Title title="Condition Templates"/><KV pairs={[["Down Payment Increase","83.2%"],["Co-Signer Required","88.9%"],["High DTI Income Proof","80.2%"],["Insurance Required","92.6%"]]}/></Glass><Glass className="span-4"><Title title="Condition Status Overview"/><div className="mini-grid two"><Mini label="Pending Borrower" value="226" tone="amber"/><Mini label="Docs Submitted" value="198" tone="green"/><Mini label="Under Review" value="154" tone="amber"/><Mini label="Approved" value="528" tone="green"/></div></Glass><Glass className="span-4"><Title title="Auto-Expiry Rules"/><p>Conditions expire after 14 days. Reminder sent after 7 days of inactivity. All conditional approvals are logged on-chain.</p></Glass></div></>;
}
function FundingReadiness() {
  return <><Header title="Funding Readiness" subtitle="Assess loan funding readiness, document status, and investor appetite."/><MetricGrid items={[["Readiness Score","92 / 100","Excellent",Gauge,'green'],["Ready to Fund","528","74.2% of approved",CheckCircle2,'green'],["Pending Conditions","154","21.6% of approved",Clock3,'amber'],["Not Ready","29","4.1% of approved",XCircle,'red'],["Total Approved","711","100% of approved",ClipboardList,'blue'],["Approved Amount","$28.42M","Total dollar amount",WalletCards,'cyan']]}/><div className="grid cols-12"><Glass className="span-4"><Title title="Funding Readiness Funnel"/><div className="funnel"><b>Applications Approved 711</b><b>Docs Complete 652</b><b>Conditions Cleared 573</b><b>Investor Matched 532</b><b>Ready to Fund 528</b></div></Glass><div className="span-4"><ChartCard title="Funding Readiness Trend" type="bar"/></div><Glass className="span-4"><Title title="Document Readiness"/><Mini label="Docs Complete" value="652 / 711" tone="green"/><KV pairs={[["Government ID","100%"],["Proof of Income","96.9%"],["Bank Statements","93.8%"],["Vehicle Docs","99.2%"],["Insurance","96.2%"]]}/></Glass><Glass className="span-4"><Title title="Investor Appetite"/><KV pairs={[["AutoDeFi Reserve Fund","High"],["Prime Credit Partners","High"],["Credit Line Partners","Medium"],["DeFi Liquidity Pool","Low"]]}/></Glass><Glass className="span-4"><Title title="Upcoming Fundings"/><DataTable columns={[{key:'id',label:'App ID'},{key:'borrower',label:'Borrower'},{key:'amount',label:'Amount'},{key:'status',label:'Status'}]} rows={[{id:'APP-2025-001842',borrower:'Marcus Johnson',amount:'$42,500',status:<Pill tone="blue">Scheduled</Pill>},{id:'APP-2025-001735',borrower:'Sophia Martinez',amount:'$31,000',status:<Pill tone="blue">Scheduled</Pill>},{id:'APP-2025-001623',borrower:'James Wilson',amount:'$28,750',status:<Pill tone="amber">Pending</Pill>}]} /></Glass><Glass className="span-4"><Title title="Funding Risk Overview"/><Mini label="Overall Funding Risk" value="18 / 100" tone="green"/><p>Approved deals are funded in full to dealers. Borrower repayments route through regional stable-value rails.</p></Glass></div></>;
}
function Analytics() {
  return <><Header title="Analytics" subtitle="Pipeline performance, risk trends, portfolio quality, and operational efficiency."/><MetricGrid items={[["Total Applications","2,842","↑ 14.6% vs last 30d",BarChart3,'blue'],["Approval Rate","74.2%","↑ 6.3 pp vs last 30d",CheckCircle2,'green'],["Avg Time to Decision","3.6 Days","↓ 0.8 days",Clock3,'amber'],["Funded Amount","$28.42M","↑ 15.2% vs last 30d",WalletCards,'green'],["Net Loss Rate","2.18%","↓ 0.42 pp",ShieldAlert,'red'],["ROI YTD","18.7%","↑ 2.9 pp",TrendingUp,'purple']]}/><div className="grid cols-12"><div className="span-5"><ChartCard title="Applications Trend"/></div><div className="span-3"><PieCard title="Approval Rate by Product" data={[{name:'Auto Loan',value:76},{name:'Personal',value:74},{name:'Debt Consolidation',value:72},{name:'Lease Buyout',value:68}]} center="74.2%"/></div><div className="span-4"><ChartCard title="Time to Decision Distribution" type="bar"/></div><Glass className="span-6"><Title title="Top Performing Segments"/><DataTable columns={[{key:'segment',label:'Segment'},{key:'apps',label:'Apps'},{key:'approval',label:'Approval'},{key:'funded',label:'Funded'},{key:'roi',label:'ROI'}]} rows={[{segment:'Prime 720+',apps:'1,124',approval:'82.6%',funded:'$14.82M',roi:'21.3%'},{segment:'Near Prime 660–719',apps:'862',approval:'76.6%',funded:'$8.91M',roi:'17.8%'},{segment:'Non-Prime 600–659',apps:'621',approval:'67.3%',funded:'$3.85M',roi:'13.4%'},{segment:'Sub-Prime <600',apps:'235',approval:'48.5%',funded:'$0.84M',roi:'7.6%'}]}/></Glass><Glass className="span-3"><Title title="Operational Efficiency"/><Mini label="STP Rate" value="62.7%" tone="green"/><Mini label="Manual Review Rate" value="37.3%"/><Mini label="Document Upload" value="96.8%" tone="green"/></Glass><Glass className="span-3"><Title title="Insights & Alerts"/><List items={['Approval rate improved by 6.3 pp','Sub-prime loss rate trending up','Avg time to decision improved']}/></Glass></div></>;
}
function SettingsPage() {
  return <><Header title="Settings" subtitle="Manage platform configuration, roles, workflows, integrations, and security."/><div className="grid cols-12"><SettingsCard title="Organization Settings" fields={[['Organization','AutoDeFi Underwriting'],['Legal Entity','AutoDeFi Lending LLC'],['Time Zone','Eastern Time, Canada / US'],['Currency','USD — US Dollar'],['Language','English']]}/><SettingsCard title="Decision & Approval Settings" fields={[['Decision Expiration','60 days'],['Auto-Approve Threshold','750+'],['Auto-Decline Threshold','< 500'],['Manual Review Range','500 — 749'],['Max Conditions','10']]}/><SettingsCard title="Risk & Scoring Settings" fields={[['Active Risk Model','Risk Model v2.7'],['Score Refresh','Real-time'],['Score Range','300 — 900'],['Fraud Threshold','Medium'],['Sanctions Screening','Enabled']]}/><SettingsCard title="Application & Pipeline Settings" fields={[['Default Product','Auto Loan'],['Default Loan Term','72 months'],['Duplicate Check','Enabled'],['Pipeline Visibility','All Assigned']]}/><SettingsCard title="Documents & Storage" fields={[['Retention','7 years'],['eSign Provider','DocuSign'],['Cloud Storage','AWS S3'],['File Types','PDF, JPG, PNG, DOCX']]}/><SettingsCard title="Notifications" fields={[['Email Notifications','On'],['In-App Notifications','On'],['SLA Breach Alerts','On'],['Quiet Hours','10 PM — 7 AM']]}/><SettingsCard title="Users & Access" fields={[['User Management','Configure'],['Roles & Permissions','Configure'],['Team Assignments','Configure'],['Data Access Scope','Configure']]}/><Glass className="span-4"><Title title="Integrations"/><KV pairs={[["Credit Bureau","Connected"],["Bank Data / Plaid","Connected"],["Income Verification","Connected"],["Identity Verification","Connected"],["ZONYCS Recovery Auction","Enabled"]]}/></Glass><SettingsCard title="Audit & System" fields={[["Audit Log","View"],["Login History","View"],["System Health","Online"],["Scheduled Jobs","Manage"]]}/></div></>;
}

function Header({ title, subtitle }) { return <div className="page-head"><div><h1>{title}</h1><p>{subtitle}</p></div></div>; }
function MetricGrid({ items }) { return <div className="metrics">{items.map(([title,value,sub,Icon,tone]) => <Metric key={title} title={title} value={value} sub={sub} icon={Icon} tone={tone}/>)}</div>; }
function List({ items }) { return <div className="list">{items.map((x,i) => <p key={x}><CheckCircle2 size={15}/><span>{x}</span></p>)}</div>; }
function KV({ pairs }) { return <div className="kv">{pairs.map(([k,v]) => <p key={k}><span>{k}</span><b>{v}</b></p>)}</div>; }
function DecisionPanel({ className = '', score = '642 / 900', confidence = '87.6%' }) { return <Glass className={className}><Title title="Manual Override / Final Decision"/><div className="mini-grid three"><Mini label="Risk Score" value={score} tone="amber"/><Mini label="Default Probability" value="7.8%"/><Mini label="Confidence" value={confidence} tone="green"/></div><div className="actions-stack"><ActionButton tone="green">Approve</ActionButton><ActionButton tone="amber">Conditional Approval</ActionButton><ActionButton tone="blue">Request More Docs</ActionButton><ActionButton tone="red">Decline</ActionButton></div><small>All actions are securely recorded on-chain.</small></Glass>; }
function VerifyPanel() { return <Glass className="span-4"><Title title="Manual Override / Final Verification"/><div className="mini-grid three"><Mini label="Identity Score" value="92/100" tone="green"/><Mini label="Fraud Probability" value="2.1%"/><Mini label="Confidence" value="89%"/></div><div className="actions-stack"><ActionButton tone="green">Verify</ActionButton><ActionButton tone="amber">Conditional Approval</ActionButton><ActionButton tone="blue">Request More Docs</ActionButton><ActionButton tone="purple">Escalate Review</ActionButton><ActionButton tone="red">Decline</ActionButton></div></Glass>; }
function FraudPanel() { return <Glass className="span-4"><Title title="Manual Override / Final Decision"/><div className="mini-grid three"><Mini label="Fraud Score" value="642 / 900" tone="amber"/><Mini label="Probability" value="7.8%"/><Mini label="Confidence" value="82.4%"/></div><div className="actions-stack"><ActionButton tone="green">Clear & Continue</ActionButton><ActionButton tone="amber">Escalate Review Tier 4</ActionButton><ActionButton tone="blue">Request More Docs</ActionButton><ActionButton tone="red">Decline / Block</ActionButton></div></Glass>; }
function SettingsCard({ title, fields }) { return <Glass className="span-4"><Title title={title}/><div className="settings-fields">{fields.map(([k,v]) => <label key={k}><span>{k}</span><input value={v} readOnly /></label>)}</div></Glass>; }

const pages = { dashboard: Dashboard, applications: ApplicationsQueue, risk: RiskModels, identity: IdentityKYC, income: IncomeVerification, bank: BankAnalysis, vehicle: VehicleValuation, fraud: FraudSignals, conditional: ConditionalApprovals, funding: FundingReadiness, analytics: Analytics, settings: SettingsPage };
function App() {
  const [active, setActive] = useState('dashboard');
  const Page = useMemo(() => pages[active] || Dashboard, [active]);
  return <div className="app"><aside className="sidebar"><div className="brand"><div className="logo"><Bot size={22}/></div><div><b>AUTO<span>DEFI</span> <em>DAO</em></b><small>AI UNDERWRITER CENTER</small></div></div><nav>{navItems.map(([id,label,Icon]) => <button key={id} className={active===id?'active':''} onClick={() => setActive(id)}><Icon size={18}/>{label}{id==='dashboard' && <ChevronDown size={14}/>}</button>)}</nav><div className="profile"><div className="avatar"><ShieldCheck size={22}/></div><div><b>Underwriter Pro</b><small>AutoDeFi Underwriting Team</small><p>● Online</p></div></div><button className="system"><ShieldCheck size={16}/> System Status</button></aside><main><header className="topbar"><div><small>AutoDeFi DAO</small><b>AI Underwriter Center</b></div><div className="top-actions"><button><Calendar size={16}/> May 12 — May 12, 2025</button><button><Filter size={16}/> Filters</button><button className="purple"><Download size={16}/> Export Report</button></div></header><section className="content"><Page /></section></main></div>;
}

createRoot(document.getElementById('root')).render(<App />);
