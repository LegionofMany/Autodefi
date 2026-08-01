const $ = (s, r = document) => r.querySelector(s);

const colors = {
  blue: '#1478ff', cyan: '#00d4ff', green: '#00e5a8', purple: '#9b4dff',
  gold: '#ffb800', orange: '#ff8a00', red: '#ff3864', pink: '#d747ff'
};

const wallet = {
  address: '0x7aB8...EF23', role: 'DAO Member', power: '18,742 ADF',
  share: '1.92% of total', price: '$0.8724', change: '+4.32%', network: 'Hedera Mainnet'
};

const tabs = [
  ['dashboard','Dashboard','dashboard'], ['proposals','Proposals','proposal'], ['vote','Vote','vote'],
  ['treasury','Treasury','treasury'], ['staking','Staking','staking'], ['lender-pool','Lender Pool','lender'],
  ['insurance-fund','Insurance Fund','insurance'], ['risk-management','Risk Management','risk'],
  ['revenue-sharing','Revenue Sharing','revenue'], ['token-utility','Token Utility','token'],
  ['governance','Governance','governance'], ['audit-security','Audit & Security','security'], ['analytics','Analytics','analytics']
];

const meta = {
  dashboard: ['Governance Dashboard','ADF-powered community governance for lending rules, treasury controls, risk tiers and protocol growth.','AutoDeFi is Community Governed','Your voice shapes lending policy, risk tiers, insurance pools and decentralized auto finance.'],
  proposals: ['Proposals','Create, review and vote on proposals that shape the future of AutoDeFi.','AutoDeFi is Community Powered','Propose lending policy updates, risk changes, treasury allocations and ecosystem growth.'],
  vote: ['Cast Your Vote','Vote on active proposals to shape the future of AutoDeFi.','AutoDeFi is Community Powered','Your vote helps govern lending policies, insurance pools, risk tiers and protocol upgrades.'],
  treasury: ['Treasury','Transparent. Secure. Community controlled.','AutoDeFi Treasury','DAO-controlled funds support reserves, rewards, recovery, liquidity and operations.'],
  staking: ['Staking','Stake ADF tokens. Support the ecosystem. Earn rewards.','ADF Staking','Your stake strengthens lending pools, lowers ecosystem risk and grows governance power.'],
  'lender-pool': ['Lender Pool','Provide liquidity. Fund auto loans. Earn yield.','Power the Auto Loan Ecosystem','Provide liquidity to income-generating auto loans and earn sustainable ADF yield.'],
  'insurance-fund': ['Insurance Fund','Protect borrowers. Cover losses. Strengthen trust in the AutoDeFi loan pool.','Protecting Borrowers','Insurance reserves cover claims, defaults, workouts and recovery events.'],
  'risk-management': ['Risk Management','Monitor, assess and mitigate risk across the AutoDeFi loan pool.','Protect the Ecosystem','Real-time risk monitoring keeps borrowers, lenders and the protocol secure.'],
  'revenue-sharing': ['Revenue Sharing','Transparent distribution of ecosystem revenue to stakers and contributors.','Earn Together','Loan interest, fees and protocol revenue are shared with aligned participants.'],
  'token-utility': ['Token Utility','The ADF token powers the entire AutoDeFi ecosystem.','ADF Powers the Ecosystem','Stake, govern, earn rewards, access products and grow with the community.'],
  governance: ['Governance','Empowering the community to govern the AutoDeFi ecosystem.','Shape the Future','Participate in governance to make AutoDeFi stronger, safer and decentralized.'],
  'audit-security': ['Audit & Security','Protecting the AutoDeFi ecosystem with audits, monitoring and best-in-class security.','Secure and Transparent','Multi-layer security and independent audits keep AutoDeFi safe.'],
  analytics: ['Analytics','Comprehensive insights and performance analytics for the AutoDeFi ecosystem.','Data Drives Better Decisions','Real-time analytics and deep insights help the community grow and thrive.']
};

const stats = {
  dashboard: [['Total Proposals','52','+14 this month','purple'],['Active Proposals','6','+2 in voting','green'],['Total Votes Cast','3.28M ADF','+19.6% vs last 30d','blue'],['Participation Rate','29.41%','+6.84% vs last 30d','orange'],['Treasury Controlled','$14,926,381','100% transparent','gold'],['Voting Power','18,742 ADF','1.92% of total','purple']],
  proposals: [['Total Proposals','48','+12 this month','purple'],['Active Proposals','5','+3 in voting','green'],['Pending Review','2','+1 awaiting review','purple'],['Successful Proposals','23','63.9% success rate','gold'],['Total Votes Cast','2.45M ADF','+18.4% vs last 30d','blue'],['Participation Rate','27.68%','+6.21% vs last 30d','orange']],
  vote: [['Active Proposals','5','+3 in voting','green'],['Your Voting Power','18,742 ADF','1.92% of total','purple'],['Total Votes Cast','2.45M ADF','+18.4% vs last 30d','blue'],['Participation Rate','27.68%','+6.21% vs last 30d','gold'],['Quorum Requirement','20.00%','27.68% reached','blue'],['Voting Period','7 days','Ends in 1d 20h 33m','orange']],
  treasury: [['Total Treasury Value','$12,847,921','100% transparent','purple'],['ADF Treasury Balance','14.72M ADF','$12,847,921 USD','green'],['Stable Reserves','7.62M USDC','59.35% of treasury','blue'],['Growth (30D)','+18.42%','+$1,997,432','green'],['Treasury Proposals','5 Active','3 Pending Execution','gold'],['Audit Status','Up to Date','Next audit in 18 days','green']],
  staking: [['Total Staked','246.38M ADF','+12.45% vs last 30d','cyan'],['Your Total Staked','20,000 ADF','$17,448.00 USD','green'],['Avg. APY','13.86%','+0.92% vs last 30d','blue'],['Rewards Paid','4.82M ADF','$4,204,416 USD','gold'],['Active Stakers','6,315','+8.71% vs last 30d','green'],['Locked for Security','78.62%','of total staked','purple']],
  'lender-pool': [['Total Liquidity','$215,874,562','248.12M ADF','blue'],['Active Loans Funded','1,245','Across all tiers','green'],['Total Earned','36.42M ADF','$31,792,814','purple'],['Avg. APY','14.28%','+0.85% vs last 30d','gold'],['Total Lenders','12,846','+6.21% vs last 30d','blue'],['Loans Performing','93.62%','+1.28% vs last 30d','green']],
  'insurance-fund': [['Total Insurance Fund','$3,648,112','4.18M ADF','purple'],['Available to Cover','$2,912,450','79.72% of total','green'],['Active Claims','28','$412,680 in progress','blue'],['Claims Paid','$736,842','199 claims settled','gold'],['Coverage Ratio','142.68%','Healthy','green'],['Reserve Growth','+12.48%','+$404,512 ADF','purple']],
  'risk-management': [['Total Loans Outstanding','2,451','$128.67M','blue'],['Total Value at Risk','$4.21M','3.28% of TVL','red'],['Portfolio Risk Score','62 / 100','Moderate Risk','gold'],['Delinquency Rate','6.38%','-0.42% vs last 30d','green'],['Default Rate (90D)','2.74%','-0.28% vs last 30d','green'],['Risk-Adjusted Yield','9.48%','+0.32% vs last 30d','purple']],
  'revenue-sharing': [['Total Revenue','$3,248,721','+12.48% vs last 30d','green'],['Total Distributed','$2,739,184','84.32% of revenue','blue'],['Stakers Paid','6,315','Across all tiers','purple'],['Avg. APY','14.67%','+0.72% vs last 30d','gold'],['Pending Distribution','$509,537','Next payout in 2d 13h','green'],['Total Paid','$18,472,391','Since inception','purple']],
  'token-utility': [['Total Supply','1,000,000,000 ADF','Fixed Supply','blue'],['Circulating Supply','426,785,231 ADF','42.68% of total','purple'],['Total Staked','246.38M ADF','57.75% of circulating','green'],['Holders','38,642','+2.31% vs last 30d','purple'],['Transactions','128,542','+18.65% vs last 30d','blue'],['Market Cap','$372.18M','Rank #327','gold']],
  governance: [['Total Proposals','96','+8 this month','blue'],['Active Proposals','7','Currently open','green'],['Votes Cast','245,871','+12.48% vs last 30d','purple'],['Participation Rate','24.37%','+1.82% vs last 30d','blue'],['Treasury Controlled','$18.47M ADF','By DAO votes','gold'],['Delegates','312','Active delegates','purple']],
  'audit-security': [['Security Score','94 / 100','Excellent','green'],['Active Threats','2','Low Risk','gold'],['Vulnerabilities','7','3 Critical • 4 Medium','purple'],['Audits Completed','12','All Passed','blue'],['Contracts Monitored','18','On-chain & Off-chain','cyan'],['Last Audit','Jun 2, 2025','2 days ago','purple']],
  analytics: [['Total Value Locked','$128.67M','+8.24% vs last 30d','blue'],['Total Loans Issued','2,451','+15.38% vs last 30d','green'],['Active Borrowers','1,827','+9.62% vs last 30d','purple'],['Total Staked','246.38M','+7.91% vs last 30d','green'],['Ecosystem Revenue','$3.25M','+12.48% vs last 30d','gold'],['Unique Wallets','38,642','+11.27% vs last 30d','purple']]
};

const proposals = [
  ['#48','Increase Insurance Coverage Fund','Insurance & Protection','Active','Increase allocation from 15% to 18% of platform revenue.','2.12M ADF','0.32M ADF',86,'2d 14h 32m','green'],
  ['#47','Adjust Tier 2 APR Range','Loan Risk Tiers','Active','Move Tier 2 APR from 15%-20% to 14%-19%.','1.45M ADF','0.78M ADF',65,'4d 6h 18m','blue'],
  ['#46','Add Luxury Vehicle Collateral Category','Product & Features','Active','Add vehicles over $100k as a separate collateral category.','1.12M ADF','0.21M ADF',84,'6d 8h 45m','gold'],
  ['#45','Cross-Chain Liquidity Expansion','Protocol Upgrades','Active','Expand liquidity across Hedera and stable repayment rails.','0.98M ADF','0.52M ADF',65,'8d 12h 11m','purple'],
  ['#49','Update DAO Governance Parameters','Governance Rules','Pending Review','Update quorum, voting thresholds and execution delay.','—','—',0,'Awaiting review','orange']
];

const categories = [['Treasury & Reserves',29.2,'blue'],['Loan Risk Tiers',20.8,'orange'],['Insurance & Protection',16.7,'purple'],['Dealer & Marketplace',12.5,'cyan'],['Protocol Upgrades',10.4,'green'],['Staking & Yield',6.2,'red'],['Governance Rules',4.2,'pink']];
const lineA = [32,39,46,44,52,57,63,60,72,69,75,81,78,86,82,89,94,91,98,96,104,112,108,118,124,129,136,132,146,151];
const lineB = [8,11,15,14,18,19,18,20,22,21,24,26,24,27,30,28,33,31,35,34,38,36,39,42,41,44,45,43,47,49];
const lineC = [62,61,63,65,66,67,69,72,74,70,71,73,75,76,77,74,73,74,76,79,78,80,81,79,82,84,83,85,84,86];

function icon(name='dashboard') {
  const common = 'fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"';
  const paths = {
    dashboard:`<path ${common} d="M4 13h7V4H4v9Zm9 7h7V4h-7v16ZM4 20h7v-5H4v5Z"/>`,
    proposal:`<path ${common} d="M7 3h7l5 5v13H7V3Zm7 0v6h6M10 13h7M10 17h5"/>`,
    vote:`<path ${common} d="M9 11l2 2 5-6M4 20h16M6 20V4h12v16"/>`,
    treasury:`<path ${common} d="M3 10h18M5 10V8l7-4 7 4v2M6 10v8M10 10v8M14 10v8M18 10v8M4 18h16"/>`,
    staking:`<path ${common} d="M12 3v18M5 8c0-2 14-2 14 0s-14 2-14 0Zm0 0v8c0 2 14 2 14 0V8"/>`,
    lender:`<path ${common} d="M4 16c2-4 5-6 8-6s6 2 8 6M5 17h14l-1 4H6l-1-4Zm4-7 2-4h2l2 4"/>`,
    insurance:`<path ${common} d="M12 3l7 3v6c0 5-3 8-7 10-4-2-7-5-7-10V6l7-3Zm-3 9 2 2 4-5"/>`,
    risk:`<path ${common} d="M12 3l10 18H2L12 3Zm0 6v5m0 4h.01"/>`,
    revenue:`<path ${common} d="M5 19V9m7 10V5m7 14v-7M3 21h18"/>`,
    token:`<circle ${common} cx="12" cy="12" r="9"/><path ${common} d="M12 7v10m-3-7c1-3 6-3 6 0 0 2-6 1-6 4s6 3 6 0"/>`,
    governance:`<path ${common} d="M4 10h16M6 10V8l6-4 6 4v2M7 10v7M12 10v7M17 10v7M5 19h14"/>`,
    security:`<path ${common} d="M12 3l7 3v6c0 5-3 8-7 10-4-2-7-5-7-10V6l7-3Z"/><path ${common} d="M9 12l2 2 4-5"/>`,
    analytics:`<path ${common} d="M4 19V5m0 14h16M7 15l4-4 3 2 5-7"/>`
  };
  return `<svg viewBox="0 0 24 24" aria-hidden="true">${paths[name] || paths.dashboard}</svg>`;
}

function linePath(data,w=360,h=150) {
  const max = Math.max(...data), min = Math.min(...data), dx = w / (data.length - 1 || 1);
  return data.map((v,i) => `${i ? 'L' : 'M'}${(i*dx).toFixed(1)},${(h - ((v-min)/(max-min||1))*(h-20) - 10).toFixed(1)}`).join(' ');
}
function lineChart(data, tone='purple') {
  const p = linePath(data);
  return `<svg class="svg-chart" viewBox="0 0 360 150" preserveAspectRatio="none">${[30,60,90,120].map(y=>`<line x1="0" x2="360" y1="${y}" y2="${y}" class="grid-line"/>`).join('')}<path d="${p} L360,150 L0,150 Z" fill="${colors[tone]}" opacity=".16"/><path d="${p}" fill="none" stroke="${colors[tone]}" stroke-width="3" stroke-linecap="round"/></svg>`;
}
function multiChart() {
  return `<div class="legend"><div><i class="dot" style="--accent:${colors.purple}"></i><span>TVL / Revenue</span><b></b></div><div><i class="dot" style="--accent:${colors.green}"></i><span>Loans / Votes</span><b></b></div><div><i class="dot" style="--accent:${colors.red}"></i><span>Risk / Alerts</span><b></b></div></div><svg class="svg-chart" viewBox="0 0 360 150" preserveAspectRatio="none">${[30,60,90,120].map(y=>`<line x1="0" x2="360" y1="${y}" y2="${y}" class="grid-line"/>`).join('')}<path d="${linePath(lineA)}" fill="none" stroke="${colors.purple}" stroke-width="2.5"/><path d="${linePath(lineB)}" fill="none" stroke="${colors.green}" stroke-width="2.5"/><path d="${linePath(lineC)}" fill="none" stroke="${colors.red}" stroke-width="2.5"/></svg>`;
}
function bars() {
  const data = [42,35,48,44,62,70,45,38,54,30,45,56,66,38,74,49,32,44,50,37,65,51,76,58];
  const max = Math.max(...data);
  return `<svg class="svg-chart" viewBox="0 0 360 150" preserveAspectRatio="none">${data.map((v,i)=>{const w=360/data.length*.58,x=i*(360/data.length)+w*.35,h=v/max*126,y=145-h;return `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="3" fill="${colors.blue}" opacity=".86"/>`;}).join('')}</svg>`;
}
function donut(items, total, label) {
  const sum = items.reduce((a,b)=>a+b[1],0); let offset = 25; const c = 2*Math.PI*36;
  const circles = items.map(i => { const dash = c*i[1]/sum; const out = `<circle cx="50" cy="50" r="36" fill="none" stroke="${colors[i[2]]}" stroke-width="15" stroke-dasharray="${dash} ${c-dash}" stroke-dashoffset="${-offset}" transform="rotate(-90 50 50)"/>`; offset += dash; return out; }).join('');
  return `<div class="donut-wrap"><svg class="donut" viewBox="0 0 100 100"><circle cx="50" cy="50" r="36" fill="none" stroke="rgba(255,255,255,.08)" stroke-width="15"/>${circles}<circle cx="50" cy="50" r="25" fill="#081220"/><text x="50" y="48" class="donut-text" font-size="11" font-weight="800">${total}</text><text x="50" y="60" class="donut-text" font-size="5" opacity=".7">${label}</text></svg><div class="legend">${items.map(i=>`<div><i class="dot" style="--accent:${colors[i[2]]}"></i><span>${i[0]}</span><b>${i[1]}%</b></div>`).join('')}</div></div>`;
}
function statCards(id) {
  return `<section class="metrics">${stats[id].map(s=>`<article class="metric" style="--accent:${colors[s[3]]}"><small>${s[0]}</small><strong>${s[1]}</strong><span>${s[2]}</span></article>`).join('')}</section>`;
}
function table(head, rows) {
  return `<div style="overflow:auto"><table class="table"><thead><tr>${head.map(h=>`<th>${h}</th>`).join('')}</tr></thead><tbody>${rows.map(r=>`<tr>${r.map(c=>`<td>${c}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
}
function proposalCards() {
  return `<div class="cards">${proposals.map(p=>`<article class="proposal" style="--accent:${colors[p[9]]}"><span class="badge ${p[3].toLowerCase().replaceAll(' ','-')}">${p[3]}</span><span style="float:right;color:var(--muted)">${p[0]}</span><div class="icon-bubble">${icon('proposal')}</div><h3>${p[1]}</h3><p class="empty">${p[4]}</p><div class="split"><b>For ${p[5]}</b><b style="color:var(--red)">Against ${p[6]}</b></div><div class="vote-line" style="--pct:${p[7]}%"><i></i></div><div class="split"><span>${p[7]}%</span><span>${100-p[7]}%</span></div><button class="primary">${p[3]==='Pending Review'?'View Details':'Vote Now'}</button></article>`).join('')}</div>`;
}
function sidebar(id) {
  const m = meta[id];
  return `<aside class="sidebar"><div class="brand"><img src="./assets/svg/autodefi-mark.svg" alt="AutoDeFi"/><div><strong>AUTO<span>DEFI</span> <em>DAO</em></strong><small>${m[0]}</small></div></div><section class="profile"><div class="wallet"><div class="avatar"></div><div><b>${wallet.address}</b><small>${wallet.role}</small></div></div><div class="verified">✓ Verified Member</div><div class="vote-ring"><div><small>ADF Voting Power</small><b>${wallet.power}</b><small>${wallet.share}</small></div><div class="ring"></div></div><button class="delegate">Delegate Votes</button></section><nav class="nav">${tabs.map(t=>`<button class="${t[0]===id?'active':''}" data-tab="${t[0]}">${icon(t[2])}<span>${t[1]}</span></button>`).join('')}</nav><section class="callout"><h3>${m[2]}</h3><p class="empty">${m[3]}</p><img src="./assets/svg/${id}.svg" alt="${m[0]} SVG illustration"/></section></aside>`;
}
function topbar(id) {
  const m = meta[id];
  return `<header class="topbar"><div class="title"><h1>${m[0]}</h1><p>${m[1]}</p></div><div class="top-actions"><div class="top-pill">ADF ${wallet.price} <span class="gain">${wallet.change}</span></div><div class="top-pill">🔔 12</div><div class="top-pill">${wallet.address}</div><div class="top-pill">${wallet.network} ●</div></div></header>`;
}
function genericPage(id) {
  const sectionTitle = id.split('-').map(w=>w[0].toUpperCase()+w.slice(1)).join(' ');
  const allocation = id === 'token-utility' ? [['Staking & Rewards',35,'green'],['Governance',20,'purple'],['Access',20,'blue'],['Liquidity',15,'gold'],['Reserve',10,'cyan']] :
    id === 'analytics' ? [['Lender Pool',45.4,'blue'],['Staking',25,'green'],['Insurance',14.6,'gold'],['Treasury',9.8,'red'],['Other',5.2,'purple']] : categories;
  const tableRows = id === 'audit-security' ? [['Loan Pool','Passed','Jun 2, 2025','96'],['Treasury Module','Passed','May 28, 2025','94'],['Staking Rewards','Passed','May 20, 2025','95'],['Insurance Fund','Passed','May 18, 2025','93']] :
    id === 'lender-pool' ? [['Tier 1 Pool','Low Risk','$82.45M','11.24%'],['Tier 2 Pool','Moderate','$64.71M','14.86%'],['Tier 3 Pool','High Risk','$48.32M','18.92%'],['Dealer Financing','Moderate','$8.23M','12.41%']] :
    id === 'insurance-fund' ? [['Tire & Rim','Up to $1,500','68.2%','Active'],['Scratch & Dent','Up to $1,000','54.1%','Active'],['Extended Warranty','Up to $3,000','42.7%','Active'],['Gap Coverage','Up to $5,000','31.6%','Active']] :
    [['Tier 1 / Low Risk','Active','$58.42M','Healthy'],['Tier 2 / Moderate','Active','$43.18M','Watch'],['Insurance Reserve','Active','$18.74M','Healthy'],['DAO Treasury','Operational','$12.58M','Audited']];
  return `${topbar(id)}${statCards(id)}<section class="grid"><div class="panel"><div class="panel-head"><h2>${sectionTitle} Overview</h2><span class="link">View Details →</span></div>${id==='analytics'?bars():lineChart(id==='risk-management'?lineC:lineA,'purple')}</div><div class="panel"><div class="panel-head"><h2>${sectionTitle} Allocation</h2><span class="link">View All →</span></div>${donut(allocation, id==='analytics'?'$128.67M':'48', id==='analytics'?'TVL':'Total')}</div></section><section class="grid-3"><div class="panel"><h2>${sectionTitle} Records</h2>${table(['Name','Status / Risk','Amount / Limit','Result'], tableRows)}</div><div class="panel"><h2>Performance</h2>${multiChart()}</div><div class="panel"><h2>Quick Actions</h2><div class="actions-grid"><div class="action-card"><strong>Create</strong><small>Submit action</small></div><div class="action-card"><strong>Review</strong><small>Inspect data</small></div><div class="action-card"><strong>Execute</strong><small>Smart contract action</small></div><div class="action-card"><strong>Export</strong><small>Reports</small></div></div></div></section>`;
}
function dashboardPage(id) {
  return `${topbar(id)}${statCards(id)}<section class="panel"><div class="panel-head"><h2>Active Proposals</h2><span class="link">View All Proposals →</span></div>${proposalCards()}</section><section class="grid"><div class="panel"><h2>Governance Activity</h2>${table(['ID','Proposal','Category','Status','For / Against','Result','Executed'], [['#50','Increase Staking Rewards Pool','Staking & Yield','Passed','2.35M / 0.62M','80%','May 12'],['#49','Insurance Reserve Allocation Q2','Insurance','Passed','1.97M / 0.41M','83%','May 9'],['#48','Update Liquidation Fee','Risk','Passed','1.64M / 0.28M','85%','May 6'],['#47','Treasury Diversification Plan','Treasury','Passed','1.21M / 0.24M','83%','May 3']])}</div><div class="panel"><h2>Proposal Categories</h2>${donut(categories,'48','Total')}</div></section><section class="grid-3"><div class="panel"><h2>Treasury Controlled by DAO</h2><strong style="font-size:30px">$12,847,921</strong>${lineChart(lineA,'purple')}</div><div class="panel"><h2>Your Governance Summary</h2><div class="kv"><div><small>Created</small><h3>3</h3></div><div><small>Votes Cast</small><h3>2.45M ADF</h3></div><div><small>Successful</small><h3>2</h3></div><div><small>Rank</small><h3>#142</h3></div></div></div><div class="panel"><h2>Power Distribution</h2>${donut([['Top 10',28.4,'blue'],['Top 50',31.6,'purple'],['Top 100',18.8,'orange'],['Top 500',12.2,'red'],['Other',9,'pink']],'500M','Voting Power')}</div></section>`;
}
function proposalsPage(id) {
  return `${topbar(id)}${statCards(id)}<section class="grid"><div class="panel"><div class="panel-head"><h2>All Proposals</h2><button class="primary" style="width:auto">Create Proposal</button></div>${table(['Proposal','Category','Status','For / Against','Participation','Ends In','Action'], proposals.map(p=>[`${p[0]} ${p[1]}`,p[2],p[3],`${p[5]} / ${p[6]}`,`${p[7]}%`,p[8],'View / Vote']))}</div><div class="panel"><h2>Proposal Categories</h2>${donut(categories,'48','Total')}<h3>Create a Proposal</h3><p class="empty">Submit an improvement for community review and voting.</p><button class="primary">Create New Proposal</button></div></section>`;
}
function votePage(id) {
  return `${topbar(id)}${statCards(id)}<section class="grid"><div class="panel"><h2>Current Proposal</h2><div class="hero-row"><div class="hero-card"><h3>Increase Insurance Coverage Fund</h3><p class="empty">Strengthen borrower protection and claims liquidity.</p></div><div class="hero-card"><h3>For</h3><strong style="color:var(--green)">68.6%</strong><p>1.68M ADF</p></div><div class="hero-card"><h3>Against</h3><strong style="color:var(--red)">14.2%</strong><p>0.348M ADF</p></div><div class="hero-card"><h3>Abstain</h3><strong style="color:var(--gold)">17.2%</strong><p>0.422M ADF</p></div></div><h2>Cast Your Vote</h2><div class="actions-grid"><button class="primary">For</button><button class="primary">Against</button><button class="primary">Abstain</button><button class="primary">Confirm Vote</button></div></div><div class="panel"><h2>Voting Summary</h2>${donut([['For',68.6,'green'],['Against',14.2,'red'],['Abstain',17.2,'gold']],'2.45M','Total Votes')}</div></section>`;
}
function analyticsPage(id) {
  return `${genericPage(id)}<section class="panel"><h2>Geographic Distribution</h2><img class="map" src="./assets/svg/analytics-map.svg" alt="Geographic distribution SVG map"></section>`;
}

const pages = { dashboard: dashboardPage, proposals: proposalsPage, vote: votePage, analytics: analyticsPage };
function currentId() { return meta[location.hash.slice(1)] ? location.hash.slice(1) : 'dashboard'; }
function render() {
  const id = currentId();
  document.title = `AutoDeFi DAO | ${meta[id][0]}`;
  $('#app').innerHTML = `<div class="app">${sidebar(id)}<main class="main">${(pages[id] || genericPage)(id)}<footer class="footer"><span>All DAO frontend tabs are coded with local SVG graphics and ready for backend binding.</span><span>Smart Contracts: <b class="operational">Operational</b></span></footer></main></div>`;
  document.querySelectorAll('[data-tab]').forEach(btn => btn.addEventListener('click', () => { location.hash = btn.dataset.tab; }));
}
window.addEventListener('hashchange', render);
render();
