import React, { useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  Bell, Briefcase, CalendarDays, ChevronDown, CircleHelp, ClipboardList, Coins,
  Download, FileText, Gauge, Home, IdCard, LineChart, Menu, Search, Settings,
  ShieldCheck, SlidersHorizontal, TrendingUp, Upload, Wallet, Car, Database,
  DollarSign, RefreshCcw, MessageCircle, Phone, Eye, MoreVertical
} from 'lucide-react';
import {
  Area, AreaChart, CartesianGrid, Cell, Pie, PieChart, ResponsiveContainer,
  Tooltip, XAxis, YAxis
} from 'recharts';
import './styles.css';

const COLORS = ['#2563ff', '#7c3aed', '#f97316', '#13c6c6', '#22c55e', '#64748b'];

const pools = [
  { name: 'Tier 1 Auto Loan Pool', code: 'ALP-T1-001', tier: 'Tier 1', strategy: 'Conservative Income', deployed: 5080000, value: 5646400, apy: 12.24, ret: 566400, retPct: 11.14, util: 85.2, reserve: 158.4, delinquency: 0.82, status: 'Active' },
  { name: 'Tier 2 Auto Loan Pool', code: 'ALP-T2-004', tier: 'Tier 2', strategy: 'Balanced Growth', deployed: 3290000, value: 3712880, apy: 18.12, ret: 422880, retPct: 12.85, util: 76.1, reserve: 140.2, delinquency: 1.12, status: 'Active' },
  { name: 'Tier 3 Auto Loan Pool', code: 'ALP-T3-007', tier: 'Tier 3', strategy: 'High Yield Opportunities', deployed: 1310000, value: 1512310, apy: 24.35, ret: 202310, retPct: 15.44, util: 82.7, reserve: 126.7, delinquency: 1.68, status: 'Active' },
  { name: 'Liquid Staking Pool', code: 'LSP-1001', tier: 'Liquid', strategy: 'Liquidity Yield', deployed: 1620000, value: 1771200, apy: 8.92, ret: 151200, retPct: 9.33, util: 42.3, reserve: 215.6, delinquency: 0, status: 'Active' },
  { name: 'Cash & Stablecoin Reserve', code: 'CSP-0001', tier: 'Reserve', strategy: 'Capital Preservation', deployed: 410000, value: 413290, apy: 5.5, ret: 3290, retPct: 0.8, util: 100, reserve: 300, delinquency: 0, status: 'Active' },
  { name: 'Insurance & Recovery Pool', code: 'IRP-001', tier: 'Recovery', strategy: 'Reserve Coverage', deployed: 140000, value: 142800, apy: 3.8, ret: 2800, retPct: 2, util: 53, reserve: 300, delinquency: 0.11, status: 'Active' }
];

const chartData = [
  ['Apr 30', 11800000, 0.3], ['May 3', 12200000, 1.1], ['May 6', 12850000, 2.8],
  ['May 9', 13210000, 4.2], ['May 12', 13500000, 5.7], ['May 15', 13430000, 5.1],
  ['May 18', 13980000, 7.9], ['May 21', 14520000, 10.4], ['May 24', 14790000, 11.3],
  ['May 27', 14870000, 11.7], ['May 29', 14280000, 12.81]
].map(([d, v, r]) => ({ d, v, r }));

const txs = [
  ['May 20, 2025', 'Payout', 'Earnings Payout', 'Tier 2 Auto Loan Pool', 287450, 'Completed'],
  ['May 16, 2025', 'Deposit', 'Capital Deposit', 'Tier 2 Auto Loan Pool', 500000, 'Completed'],
  ['May 14, 2025', 'Reinvest', 'AutoInvest Rebalance', 'Tier 2 Auto Loan Pool', 125320, 'Completed'],
  ['May 12, 2025', 'Payout', 'Earnings Payout', 'Tier 1 Auto Loan Pool', 169750, 'Completed'],
  ['May 10, 2025', 'Withdrawal', 'Capital Withdrawal', 'Tier 2 Auto Loan Pool', -150000, 'Completed'],
  ['May 8, 2025', 'Fee', 'Management Fee', 'All Pools', -2450, 'Completed'],
  ['May 6, 2025', 'Deposit', 'Capital Deposit', 'Tier 3 Auto Loan Pool', 250000, 'Completed'],
  ['May 4, 2025', 'Payout', 'Earnings Payout', 'Liquid Staking Pool', 87320, 'Completed']
];

const requests = [
  ['CR-2025-0058', 'Tier 1 Auto Loan Pool', 'Increase Allocation', 'Loan originations', 1000000, 'Approved'],
  ['CR-2025-0057', 'Tier 2 Auto Loan Pool', 'Increase Allocation', 'Loan demand', 750000, 'Pending Approval'],
  ['CR-2025-0056', 'Liquid Staking Pool', 'Rebalance Allocation', 'Strategy rebalance', 500000, 'Approved'],
  ['CR-2025-0055', 'Tier 3 Auto Loan Pool', 'Increase Allocation', 'High-yield loan demand', 1250000, 'Funded'],
  ['CR-2025-0054', 'Cash & Stablecoin Reserve', 'Increase Allocation', 'Liquidity buffer', 300000, 'Funded'],
  ['CR-2025-0052', 'Tier 1 Auto Loan Pool', 'Withdrawal', 'Capital redeployment', -400000, 'Funded']
];

const docs = [
  ['Operating Agreement', 'Legal', 'All Pools', 'May 28, 2025', '1.2 MB'],
  ['Q1 2025 Performance Report', 'Report', 'All Pools', 'May 15, 2025', '842 KB'],
  ['Tax Statement (1099)', 'Tax', 'All Pools', 'Jan 31, 2025', '623 KB'],
  ['KYC Verification Certificate', 'KYC', 'Account', 'Mar 18, 2024', '456 KB'],
  ['Investor Onboarding Agreement', 'Legal', 'Account', 'Mar 18, 2024', '1.0 MB'],
  ['Transaction History Export', 'Report', 'All Pools', 'May 29, 2025', '265 KB'],
  ['Risk Disclosure Statement', 'Compliance', 'Account', 'Mar 18, 2024', '789 KB'],
  ['Capital Call Notice – ALP-T2-004', 'Notice', 'Tier 2 Auto Loan Pool', 'May 16, 2025', '356 KB']
];

const alerts = [
  ['Pool Risk Level Increased', 'Tier 2 Auto Loan Pool risk level increased to High.', 'Tier 2 Auto Loan Pool', 'High'],
  ['Capital Request Pending Approval', 'Capital request CR-2025-0057 is pending approval.', 'Tier 2 Auto Loan Pool', 'Medium'],
  ['Payout Processed Successfully', 'Payout of $128,450 has been processed.', 'Liquid Staking Pool', 'Low'],
  ['Monthly Statement Available', 'Your May 2025 statement is available.', 'All Pools', 'Info'],
  ['Pool Utilization High', 'Auto loan pool utilization is above 90%.', 'Tier 3 Auto Loan Pool', 'Medium'],
  ['System Maintenance Scheduled', 'Scheduled maintenance on May 31 from 02:00-04:00 UTC.', 'System', 'Info']
];

const money = (n) => n < 0 ? `-$${Math.abs(n).toLocaleString()}` : `$${n.toLocaleString()}`;
const compact = (n) => `$${(n / 1000000).toFixed(2)}M`;

function App() {
  const [tab, setTab] = useState('Dashboard');
  const [open, setOpen] = useState(false);
  const page = useMemo(() => pages[tab] || pages.Dashboard, [tab]);
  return <div className="app"><Sidebar tab={tab} setTab={(t)=>{setTab(t);setOpen(false)}} open={open}/><main className="main"><Topbar setOpen={setOpen}/><Kpis />{page}</main></div>;
}

function Sidebar({ tab, setTab, open }) {
  const items = [['Dashboard',Home],['Investments',Briefcase],['Pools',Database],['Performance',LineChart],['Statements',FileText],['Reports',ClipboardList],['Transactions',SlidersHorizontal],['Capital Requests',Wallet],['KYC & Profile',IdCard],['Documents',FileText],['Alerts & Notifications',Bell],['Settings',Settings],['Support',CircleHelp]];
  return <aside className={`sidebar ${open?'open':''}`}><div className="brand"><span>4</span><div><b>AUTO<em>DEFI</em></b><small>INVESTOR PORTAL</small></div></div><nav>{items.map(([n,I])=><button key={n} className={tab===n?'active':''} onClick={()=>setTab(n)}><I size={18}/>{n}{n==='Alerts & Notifications'&&<i>7</i>}</button>)}</nav><SideCard title="Investor Profile"><div className="profile"><b>IC</b><div>InvestCony Capital<small>Verified Investor</small></div></div><dl><dt>Investor ID</dt><dd>INV-7C89...4E21</dd><dt>KYC Status</dt><dd className="greenText">Verified</dd><dt>Accredited</dt><dd className="greenText">Yes</dd></dl></SideCard><SideCard title="Investor Wallet"><p>Total Balance</p><strong>$256.48M</strong><p>Available to Invest</p><strong>$18.74M</strong><button className="primary">Deposit Capital</button></SideCard></aside>;
}

function Topbar({setOpen}){return <header className="topbar"><button className="mobile" onClick={()=>setOpen(true)}><Menu/></button><div><h1>Welcome back, InvestCony Capital 👋</h1><p>AutoDeFi capital provider portal for auto loan pool yield, repayments, and risk-tier performance.</p></div><div className="topActions"><button><CalendarDays size={16}/>May 12 – May 29, 2025<ChevronDown size={16}/></button><button><Bell size={16}/><span className="dot">7</span></button><button><Download size={16}/>Export</button><button className="avatar">IC</button></div></header>}
function Kpis(){return <section className="kpis"><Kpi icon={DollarSign} title="Total Invested" value="$12.85M" up="11.23% vs last 30d"/><Kpi icon={Coins} title="Current Value" value="$14.28M" up="11.11% vs last 30d"/><Kpi icon={TrendingUp} title="Total Return (YTD)" value="$1.43M" up="12.81% vs last year"/><Kpi icon={Gauge} title="Average APY" value="18.62%" up="1.24% vs last 30d"/><Kpi icon={CalendarDays} title="Next Payout" value="May 20, 2025" sub="Est. $318,750.00"/><Kpi icon={DollarSign} title="Total Earned" value="$2.34M" up="15.43% all time"/></section>}
function Kpi({icon:Icon,title,value,up,sub}){return <div className="kpi"><div className="kpiIcon"><Icon size={24}/></div><div><small>{title}</small><strong>{value}</strong>{up&&<p className="up">↑ {up}</p>}{sub&&<p>{sub}</p>}</div></div>}
function SideCard({title,children}){return <section className="sideCard"><h3>{title}</h3>{children}</section>}

function PageShell({title,subtitle,tabs=[],children,right}){return <><section className="pageHead"><h2>{title}</h2><p>{subtitle}</p>{tabs.length>0&&<div className="tabs">{tabs.map((t,i)=><button className={i===0?'active':''} key={t}>{t}</button>)}</div>}<Filters/></section><div className="gridMain"><div>{children}</div>{right&&<aside className="rightRail">{right}</aside>}</div></>}
function Filters(){return <div className="filters"><button>All Pools <ChevronDown size={14}/></button><button>All Risk Tiers <ChevronDown size={14}/></button><button>All Status <ChevronDown size={14}/></button><label><Search size={16}/><input placeholder="Search..."/></label><button className="primary small">Apply Filters</button></div>}
function Card({title,children}){return <section className="card"><div className="cardTitle"><h3>{title}</h3><MoreVertical size={16}/></div>{children}</section>}
function Status({s}){return <span className={`status ${String(s).toLowerCase().replaceAll(' ','')}`}>{s}</span>}
function PoolTable(){return <table><thead><tr><th>Pool</th><th>Tier</th><th>Strategy</th><th>Deployed</th><th>Value</th><th>APY</th><th>Return</th><th>Status</th></tr></thead><tbody>{pools.map(p=><tr key={p.code}><td><b>{p.name}</b><small>{p.code}</small></td><td><span className="tag">{p.tier}</span></td><td>{p.strategy}</td><td>{compact(p.deployed)}</td><td>{compact(p.value)}</td><td className="greenText">{p.apy}%</td><td className="greenText">{money(p.ret)}</td><td><Status s={p.status}/></td></tr>)}</tbody></table>}
function PerformanceChart({title='Performance Over Time'}){return <Card title={title}><div className="chart"><ResponsiveContainer><AreaChart data={chartData}><defs><linearGradient id="g" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#7c3aed" stopOpacity=".7"/><stop offset="100%" stopColor="#7c3aed" stopOpacity="0"/></linearGradient></defs><CartesianGrid strokeDasharray="3 3" stroke="#17314a"/><XAxis dataKey="d" stroke="#8aa0b4"/><YAxis stroke="#8aa0b4" tickFormatter={(v)=>`$${v/1000000}M`}/><Tooltip contentStyle={{background:'#061424',border:'1px solid #17314a'}}/><Area dataKey="v" stroke="#9b5cff" fill="url(#g)" strokeWidth={3}/></AreaChart></ResponsiveContainer></div></Card>}
function AllocationCard({title='Allocation by Pool'}){return <Card title={title}><div className="donut"><ResponsiveContainer><PieChart><Pie data={pools} dataKey="value" innerRadius={62} outerRadius={92}>{pools.map((_,i)=><Cell key={i} fill={COLORS[i%COLORS.length]}/>)}</Pie></PieChart></ResponsiveContainer><div><h2>$14.28M</h2><p>Current Value</p></div></div><ul className="legend">{pools.map((p,i)=><li key={p.name}><span style={{background:COLORS[i%COLORS.length]}}/>{p.name}<b>{compact(p.value)}</b></li>)}</ul></Card>}
function QuickActions(){return <Card title="Quick Actions"><ul className="actions"><li>Deposit More Capital</li><li>Rebalance Portfolio</li><li>View Pool Marketplace</li><li>Download Report</li></ul></Card>}

function Dashboard(){return <PageShell title="Dashboard" subtitle="Track investments, earnings, and portfolio performance." right={<><AllocationCard/><RiskCard/><QuickActions/></>}><div className="twoCols"><AllocationCard title="Portfolio Overview"/><PerformanceChart title="Investments Overview"/></div><Card title="Pool Performance"><PoolTable/></Card><div className="twoCols"><RecentEarnings/><TransactionsMini/></div></PageShell>}
function Investments(){return <PageShell title="Investments" subtitle="View and manage active AutoDeFi loan pool investments." tabs={['Overview','Active Investments','Investment History','Exposure','Cash & Pending']} right={<><AllocationCard title="Allocation by Risk Tier"/><HealthCard/><QuickActions/></>}><Card title="Active Investments"><PoolTable/></Card><div className="twoCols"><PerformanceChart/><AllocationCard title="Investments by Strategy"/></div></PageShell>}
function Pools(){return <PageShell title="Pools" subtitle="Monitor AutoDeFi capital pools, utilization, yields, and reserve health." tabs={['Overview','Live Pools','Pool Performance','Funding Queue','Reserve Coverage']} right={<><AllocationCard/><HealthCard/><QuickActions/></>}><Card title="Pool Directory"><PoolTable/></Card><div className="twoCols"><PerformanceChart title="Pool Performance Over Time"/><AllocationCard title="Pool Mix by Risk Tier"/></div></PageShell>}
function Performance(){return <PageShell title="Performance" subtitle="Track returns, repayment quality, and risk-adjusted performance across AutoDeFi pools." tabs={['Overview','Yield Trends','Loan Quality','Benchmarking','Reports']} right={<><AllocationCard title="Performance Mix"/><Benchmark/><RiskCard/></>}><PerformanceChart title="Portfolio Performance Over Time"/><Card title="Pool Performance Breakdown"><PoolTable/></Card></PageShell>}
function Statements(){return <PageShell title="Statements" subtitle="View and download account statements, earnings summaries, and transaction history." tabs={['Account Statements','Earnings Statements','Tax Documents','Custom Reports']} right={<><Summary title="Statement Summary"/><DownloadPanel/></>}><Card title="Statement History"><GenericTable rows={['May 1 - May 29, 2025','Apr 1 - Apr 30, 2025','Mar 1 - Mar 31, 2025','Q1 2025 Summary','2024 Annual Summary'].map((x,i)=>[x,i>2?'Quarterly / Annual':'Monthly Statement','All AutoDeFi Loan Pools',i===0?'$318,750':'$287,450','Available'])}/></Card></PageShell>}
function Reports(){return <PageShell title="Reports" subtitle="Generate and download reports on AutoDeFi loan pool investments." tabs={['Standard Reports','Custom Reports','Scheduled Reports','Report History']} right={<><ReportInsights/><ExportData/></>}><div className="reportCards">{['Portfolio Summary','Performance Report','Earnings Report','Transaction Report','Tax Report (1099)','Capital Activity Report'].map(r=><Card key={r} title={r}><p>Pre-built report for performance, allocation, and compliance.</p><button className="primary small">Generate Report</button></Card>)}</div><PerformanceChart title="Reports Preview"/><Card title="Top Performing Pools"><PoolTable/></Card></PageShell>}
function Transactions(){return <PageShell title="Transactions" subtitle="View deposits, payouts, earnings, reinvestments, withdrawals, and fees." tabs={['All Transactions','Deposits','Payouts','Earnings','Reinvestments','Withdrawals','Fees & Charges']} right={<><TxSummary/><AllocationCard title="Transactions by Type"/><QuickActions/></>}><Card title="Transaction History"><table><thead><tr><th>Date</th><th>Type</th><th>Description</th><th>Pool</th><th>Amount</th><th>Currency</th><th>Status</th></tr></thead><tbody>{txs.map((t,i)=><tr key={i}><td>{t[0]}</td><td>{t[1]}</td><td>{t[2]}</td><td>{t[3]}</td><td className={t[4]<0?'badText':'greenText'}>{money(t[4])}</td><td>USDC</td><td><Status s={t[5]}/></td></tr>)}</tbody></table></Card></PageShell>}
function CapitalRequests(){return <PageShell title="Capital Requests" subtitle="Review and manage capital requests across AutoDeFi loan pool allocations." tabs={['All Requests','Pending Approval','Approved','Funded','Rejected','History']} right={<><Summary title="Request Summary"/><AllocationCard title="Requests by Type"/><QuickActions/></>}><Card title="Capital Request Queue"><table><tbody>{requests.map(r=><tr key={r[0]}>{r.map((c,i)=><td key={i} className={i===4&&c<0?'badText':''}>{i===4?money(c):c}</td>)}<td><MoreVertical size={16}/></td></tr>)}</tbody></table></Card></PageShell>}
function KycProfile(){return <PageShell title="KYC & Profile" subtitle="Manage identity verification, organization details, and preferences." tabs={['Profile Overview','Organization Details','Team Members','Banking & Payment','Preferences']} right={<><KycDocs/><TeamMembers/></>}><div className="twoCols"><Card title="Verification Status"><h2 className="greenText">Verified</h2><p>Your identity has been verified successfully.</p><ProfileInfo/></Card><Card title="Compliance & Status"><ul className="checks"><li>KYC Verification — Completed</li><li>AML Screening — Cleared</li><li>OFAC Screening — Cleared</li><li>PEP Screening — Cleared</li></ul></Card></div></PageShell>}
function Documents(){return <PageShell title="Documents" subtitle="Securely access and manage account and investment documents." tabs={['All Documents','Account Documents','Investment Documents','Tax Documents','Legal & Compliance','Other']} right={<><Summary title="Document Summary"/><DocFolders/><QuickActions/></>}><Card title="Document Library"><GenericTable rows={docs}/></Card></PageShell>}
function Alerts(){return <PageShell title="Alerts & Notifications" subtitle="View and manage alerts, system notifications, and account updates." tabs={['All','Alerts (5)','Notifications (12)']} right={<><Summary title="Alerts Summary"/><Preferences/><QuickActions/></>}><Card title="Notification Center"><GenericTable rows={alerts}/></Card></PageShell>}
function SettingsPage(){return <PageShell title="Settings" subtitle="Manage account, security, notifications, and portal preferences." tabs={['Account Settings','Security','Notifications','Preferences','API Access','Audit Log']} right={<><SecurityOverview/><Preferences/><DataPrivacy/></>}><div className="twoCols"><Card title="Organization Information"><ProfileInfo/></Card><Card title="Billing & Subscription"><dl><dt>Plan</dt><dd>Premium Investor</dd><dt>Status</dt><dd className="greenText">Active</dd><dt>Next Billing Date</dt><dd>Jun 18, 2025</dd></dl></Card></div></PageShell>}
function Support(){return <PageShell title="Support Center" subtitle="Get support and find answers for AutoDeFi investor portal questions." right={<><PopularQuestions/><Card title="Need Help?"><p>Contact support for payout, capital request, statement, KYC, or allocation questions.</p><button className="primary">Contact Support</button></Card></>}><div className="supportHero"><label><Search size={18}/><input placeholder="Search help articles..."/></label><button><Upload size={18}/>Submit a Ticket</button><button><MessageCircle size={18}/>Live Chat</button><button><Phone size={18}/>Contact Us</button></div><div className="twoCols"><Card title="Get Help"><ul className="actions"><li>Submit a Ticket</li><li>Live Chat</li><li>Contact Us</li><li>Help Center</li></ul></Card><Card title="Support Tickets"><GenericTable rows={[['TKT-2025-0567','Capital request status update','Open','May 29, 2025'],['TKT-2025-0542','Statement download issue','In Progress','May 28, 2025'],['TKT-2025-0498','KYC document verification','Resolved','May 25, 2025']]}/></Card></div></PageShell>}

function RecentEarnings(){return <Card title="Recent Earnings"><dl><dt>Interest Income</dt><dd className="greenText">$198,450</dd><dt>Origination Fees</dt><dd>$67,320</dd><dt>Late Fees</dt><dd>$23,780</dd><dt>Liquidation Fees</dt><dd>$18,650</dd></dl></Card>}
function TransactionsMini(){return <Card title="Transactions"><GenericTable rows={txs.slice(0,5)}/></Card>}
function HealthCard(){return <Card title="Investment Health"><dl><dt>Active Loans</dt><dd>2,584</dd><dt>Avg. Loan LTV</dt><dd>58.3%</dd><dt>Coverage Ratio</dt><dd>3.41x</dd><dt>Diversification</dt><dd className="greenText">Excellent</dd></dl></Card>}
function RiskCard(){return <Card title="Risk & Performance"><h2 className="score">87</h2><dl><dt>Portfolio Volatility</dt><dd>6.24%</dd><dt>Max Drawdown</dt><dd>-2.18%</dd><dt>Win Rate</dt><dd>92.6%</dd><dt>Average Loan LTV</dt><dd>62.7%</dd></dl></Card>}
function Benchmark(){return <Card title="Benchmark Comparison"><PoolTable/></Card>}
function Summary({title}){return <Card title={title}><dl><dt>Total</dt><dd>48</dd><dt>Total Funded</dt><dd className="greenText">$2,175,000</dd><dt>Net Change</dt><dd className="greenText">$1,475,000</dd></dl></Card>}
function DownloadPanel(){return <Card title="Download Statements"><ul className="actions"><li>Account Statement PDF</li><li>Earnings Statement PDF</li><li>Tax Statement PDF</li><li>CSV Export</li></ul></Card>}
function ReportInsights(){return <Card title="Report Insights"><ul><li>Best Pool: Tier 3 Auto Loan Pool</li><li>Total Earnings: $606,200</li><li>Avg. APY: 18.62%</li></ul></Card>}
function ExportData(){return <Card title="Export Data"><ul className="actions"><li>Export to CSV</li><li>Export to Excel</li><li>Export to PDF</li></ul></Card>}
function TxSummary(){return <Card title="Transaction Summary"><dl><dt>Total Deposits</dt><dd className="greenText">$2,750,000</dd><dt>Total Payouts</dt><dd className="greenText">$606,200</dd><dt>Total Withdrawals</dt><dd className="badText">-$150,000</dd></dl></Card>}
function KycDocs(){return <Card title="KYC Documents"><ul className="actions"><li>Certificate of Formation — Verified</li><li>Operating Agreement — Verified</li><li>EIN / Tax ID — Verified</li><li>Proof of Address — Verified</li></ul></Card>}
function TeamMembers(){return <Card title="Team Members"><ul><li>John Cony — Administrator</li><li>Mary Smith — Compliance Officer</li><li>David White — Portfolio Manager</li></ul></Card>}
function ProfileInfo(){return <dl><dt>Entity Name</dt><dd>InvestCony Capital</dd><dt>Investor ID</dt><dd>INV-7C89...4E21</dd><dt>Entity Type</dt><dd>Investment Manager</dd><dt>Registration Type</dt><dd>Limited Liability Company</dd><dt>Email</dt><dd>contact@investcony.com</dd></dl>}
function DocFolders(){return <Card title="Document Folders"><ul><li>Account Documents — 12</li><li>Investment Documents — 16</li><li>Tax Documents — 8</li><li>Legal & Compliance — 10</li></ul></Card>}
function Preferences(){return <Card title="Notification Preferences"><ul className="toggles"><li>Investment Alerts <span/></li><li>Account Activity <span/></li><li>Capital Requests <span/></li><li>Payouts & Payments <span/></li></ul></Card>}
function SecurityOverview(){return <Card title="Security Overview"><h3 className="greenText">Your account is secure</h3><ul><li>Two-Factor Authentication — Enabled</li><li>Login Alerts — Enabled</li><li>Device Management — 3 devices</li></ul></Card>}
function DataPrivacy(){return <Card title="Data & Privacy"><ul className="actions"><li>Download My Data</li><li>Delete Account</li></ul></Card>}
function PopularQuestions(){return <Card title="Popular Questions"><ul className="actions"><li>How do I submit a capital request?</li><li>When will I receive my next payout?</li><li>How can I download statements?</li><li>How are returns calculated?</li></ul></Card>}
function GenericTable({rows}){return <table><tbody>{rows.map((r,i)=><tr key={i}>{r.map((c,j)=><td key={j}>{c}</td>)}<td><Download size={16}/></td></tr>)}</tbody></table>}

const pages = { Dashboard:<Dashboard/>, Investments:<Investments/>, Pools:<Pools/>, Performance:<Performance/>, Statements:<Statements/>, Reports:<Reports/>, Transactions:<Transactions/>, 'Capital Requests':<CapitalRequests/>, 'KYC & Profile':<KycProfile/>, Documents:<Documents/>, 'Alerts & Notifications':<Alerts/>, Settings:<SettingsPage/>, Support:<Support/> };

createRoot(document.getElementById('root')).render(<App />);
