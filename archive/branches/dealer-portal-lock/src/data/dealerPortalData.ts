export type Tone = 'blue' | 'green' | 'purple' | 'orange' | 'red' | 'cyan' | 'slate';

export type DealerMetric = {
  label: string;
  value: string;
  delta?: string;
  note?: string;
  tone: Tone;
  icon: string;
};

export type DealerPipelineStage = {
  label: string;
  value: string;
  pct?: string;
  tone: Tone;
};

export type DealerTable = {
  tabs: string[];
  filters: string[];
  columns: string[];
  rows: string[][];
  pagination: string;
};

export type DealerRailCard = {
  title: string;
  kind: 'donut' | 'list' | 'chart' | 'funnel' | 'actions' | 'copy' | 'score';
  value?: string;
  subtitle?: string;
  items: string[];
};

export type DealerPage = {
  id: string;
  label: string;
  route: string;
  searchPlaceholder: string;
  primaryAction?: string;
  secondaryAction?: string;
  metrics: DealerMetric[];
  pipeline?: DealerPipelineStage[];
  table: DealerTable;
  rail: DealerRailCard[];
};

export const dealerProfile = {
  name: 'Elite Motors',
  role: 'Verified Dealer',
  user: 'John Dealer',
  userRole: 'Admin',
  location: 'Toronto, ON',
  code: 'ELITEMOTORS',
  referralUrl: 'https://autodefi.com/r/ELITEMOTORS'
};

export const dealerNav = [
  { id: 'dashboard', label: 'Dashboard', icon: 'dashboard' },
  { id: 'inventory', label: 'Inventory', icon: 'inventory' },
  { id: 'leads', label: 'Leads', icon: 'leads', badge: '24' },
  { id: 'deals', label: 'Deals', icon: 'deals', badge: '12' },
  { id: 'financing', label: 'Financing', icon: 'financing' },
  { id: 'customers', label: 'Customers', icon: 'customers' },
  { id: 'referrals', label: 'Referrals', icon: 'referrals' },
  { id: 'auctions', label: 'Auctions', icon: 'auctions' },
  { id: 'reports', label: 'Reports', icon: 'reports' },
  { id: 'fi-products', label: 'F&I Products', icon: 'fi-products' },
  { id: 'marketing-tools', label: 'Marketing Tools', icon: 'marketing' },
  { id: 'settings', label: 'Settings', icon: 'settings' }
];

const vehicleRows = [
  ['2020 Mercedes-Benz GLC 300', 'EM-2020-1456 / W1N0G8DB8LF123456', '2020', '72,500 KM', 'Available', '$28,450', 'Main Lot', '2 days ago'],
  ['2021 Tesla Model 3 Long Range', 'EM-2021-1422 / 5YJ3E1EAXMF123789', '2021', '48,200 KM', 'Available', '$34,990', 'Electric Lot', '3 days ago'],
  ['2019 Range Rover Sport HSE', 'EM-2019-1288 / SALWR2RKSKA123321', '2019', '60,000 KM', 'Reserved', '$45,500', 'Main Lot', '4 days ago'],
  ['2022 BMW X5 xDrive40i', 'EM-2022-1511 / 5UXCR6C06N9L123456', '2022', '36,800 KM', 'Available', '$52,990', 'Luxury Lot', '5 days ago'],
  ['2020 Ford F-150 Lariat', 'EM-2020-1344 / 1FTEW1E53LFA12345', '2020', '65,400 KM', 'Sold Pending', '$31,250', 'Trucks Lot', '6 days ago'],
  ['2023 Audi Q7 Premium Plus', 'EM-2023-1602 / WA1LAAF70PD123456', '2023', '22,100 KM', 'Available', '$68,900', 'Luxury Lot', '6 days ago'],
  ['2018 Jeep Wrangler Unlimited', 'EM-2018-1155 / 1C4HJXDG7JW123456', '2018', '89,000 KM', 'Inactive', '$26,500', 'Off Site', '7 days ago'],
  ['2021 Lexus RX 350', 'EM-2021-1444 / 2T2HZMAA1MC123456', '2021', '41,600 KM', 'Available', '$39,750', 'Main Lot', '8 days ago']
];

const leadRows = [
  ['LEAD-1256', 'Michael Johnson', '(555) 123-4567 / michael.j@email.com', '2020 Mercedes-Benz GLC 300', 'Website', 'New', 'Sarah M.', 'May 31, 2025'],
  ['LEAD-1255', 'Sarah Williams', '(555) 987-6543 / sarah.w@email.com', '2021 Tesla Model 3', 'AutoTrader', 'Contacted', 'David R.', 'May 31, 2025'],
  ['LEAD-1254', 'David Brown', '(555) 456-7890 / david.b@email.com', '2019 Range Rover Sport', 'Referral', 'Qualified', 'Michael T.', 'May 30, 2025'],
  ['LEAD-1253', 'Emily Davis', '(555) 321-0987 / emily.d@email.com', '2022 BMW X5', 'Facebook Ads', 'Follow-Up', 'Sarah M.', 'May 30, 2025'],
  ['LEAD-1252', 'James Wilson', '(555) 654-3210 / james.w@email.com', '2020 Ford F-150', 'Google Ads', 'Proposal Sent', 'David R.', 'May 30, 2025'],
  ['LEAD-1251', 'Ashley Miller', '(555) 789-0123 / ashley.m@email.com', '2023 Audi Q7', 'Walk-In', 'Lost / Closed', 'Michael T.', 'May 29, 2025']
];

const dealRows = [
  ['DEAL-8421', 'Michael Johnson', '2020 Mercedes-Benz GLC 300', '$28,450', 'Retail', 'Funded', 'AutoDeFi Pool', 'Sarah M.', '2m ago'],
  ['DEAL-8420', 'Sarah Williams', '2021 Tesla Model 3 Long Range', '$34,990', 'Retail', 'Under Review', 'OpenRoad Financial', 'David R.', '15m ago'],
  ['DEAL-8419', 'David Brown', '2019 Range Rover Sport HSE', '$45,500', 'Retail', 'Approved', 'Prime Capital', 'Michael T.', '1h ago'],
  ['DEAL-8418', 'Emily Davis', '2022 BMW X5 xDrive40i', '$52,990', 'Retail', 'Funding', 'AutoDeFi Pool', 'Sarah M.', '2h ago'],
  ['DEAL-8417', 'James Wilson', '2020 Ford F-150 Lariat', '$31,250', 'Retail', 'Pre-Qualified', 'NorthBridge Bank', 'David R.', '3h ago'],
  ['DEAL-8416', 'Ashley Miller', '2023 Audi Q7 Premium Plus', '$68,900', 'Retail', 'Submitted', 'AutoDeFi Pool', 'Michael T.', '4h ago'],
  ['DEAL-8415', 'Daniel Taylor', '2018 Jeep Wrangler Unlimited', '$26,500', 'Lease', 'Closed', 'Prime Capital', 'Sarah M.', '1d ago'],
  ['DEAL-8414', 'Jessica Anderson', '2021 Lexus RX 350', '$39,750', 'Retail', 'Declined', 'OpenRoad Financial', 'David R.', '1d ago']
];

const customerRows = [
  ['Michael Johnson', '(555) 123-4567 / michael.j@email.com', 'Tier 1', '3', '2', '$58,450', 'Mercedes GLC 300', 'Active'],
  ['Sarah Williams', '(555) 987-6543 / sarah.w@email.com', 'Tier 1', '2', '2', '$69,980', 'Tesla Model 3', 'Active'],
  ['David Brown', '(555) 456-7890 / david.b@email.com', 'Tier 2', '4', '3', '$102,750', 'Range Rover Sport', 'Active'],
  ['Emily Davis', '(555) 321-0987 / emily.d@email.com', 'Tier 2', '2', '1', '$52,990', 'BMW X5', 'Active'],
  ['Daniel Taylor', '(555) 789-0122 / daniel.t@email.com', 'Tier 3', '1', '0', '$26,500', 'Jeep Wrangler', 'Inactive'],
  ['Christopher Lee', '(555) 111-2222 / chris.l@email.com', 'Tier 4', '1', '0', '$18,750', 'Kia Forte', 'Inactive']
];

const reportsRows = [
  ['2021 Ford F-150', '4 sold', '$182,400', '$45,600', '$21,840'],
  ['2020 BMW X5', '3 sold', '$146,700', '$48,900', '$17,604'],
  ['2019 Tesla Model 3', '3 sold', '$134,250', '$44,750', '$16,110'],
  ['2018 Ram 1500', '2 sold', '$89,600', '$44,800', '$10,752'],
  ['2023 Audi Q7', '2 sold', '$84,100', '$42,050', '$9,672']
];

export const dealerPages: DealerPage[] = [
  {
    id: 'dashboard', label: 'Dashboard', route: '/dealer/dashboard', searchPlaceholder: 'Search VIN, customer, deal #, or vehicle...', primaryAction: 'Add New Listing',
    metrics: [
      { label: 'Total Inventory', value: '128', note: 'Vehicles', delta: '+12% vs last month', tone: 'blue', icon: 'inventory' },
      { label: 'Active Deals', value: '32', note: 'Deals', delta: '+18% vs last month', tone: 'cyan', icon: 'deals' },
      { label: 'Total Sales MTD', value: '$2.48M', delta: '+23% vs last month', tone: 'blue', icon: 'reports' },
      { label: 'Pending Funding', value: '$1.36M', note: '12 Deals', tone: 'orange', icon: 'financing' },
      { label: 'Earnings MTD', value: '$145,680', delta: '+27% vs last month', tone: 'green', icon: 'chart' }
    ],
    pipeline: [
      { label: 'New Leads', value: '48', tone: 'blue' }, { label: 'Qualified', value: '32', tone: 'purple' }, { label: 'Offers Sent', value: '18', tone: 'orange' }, { label: 'Deals Funded', value: '12', tone: 'green' }, { label: 'Closed', value: '9', tone: 'purple' }
    ],
    table: { tabs: ['Recent Deals'], filters: ['View All Deals'], columns: ['Deal #', 'Customer', 'Vehicle', 'Amount', 'Status', 'Updated'], rows: dealRows.slice(0, 5).map((r) => [r[0], r[1], r[2], r[3], r[5], r[8]]), pagination: 'Dashboard snapshot' },
    rail: [
      { title: 'Wallet & Dealer Balance', kind: 'list', value: '$245,680.45', items: ['USDC $122,450', 'HBAR 5,680', 'ADF 142,680'] },
      { title: 'Loan Pool Liquidity', kind: 'chart', value: '$8,721,540', subtitle: '+4.21%', items: ['AutoDeFi Loan Pool TVL'] },
      { title: 'On-Chain Transparency', kind: 'list', value: '1,248', items: ['Total Deals On-Chain', 'Tx Hash 0x3a5f...8e71'] },
      { title: 'NFT Title / Asset Vault', kind: 'score', value: '348', items: ['NFT Titles Secured'] },
      { title: 'Credit & Risk Score', kind: 'score', value: '732', subtitle: 'Risk Level Low', items: ['Good', 'Utilization 32%'] }
    ]
  },
  {
    id: 'inventory', label: 'Inventory', route: '/dealer/inventory', searchPlaceholder: 'Search by VIN, make, model, year, stock #...', primaryAction: 'Add New Vehicle', secondaryAction: 'Import Inventory',
    metrics: [
      { label: 'Total Inventory', value: '128', note: 'Vehicles', delta: '+12% vs last month', tone: 'blue', icon: 'inventory' },
      { label: 'Available', value: '92', note: 'Vehicles', delta: '+10% vs last month', tone: 'green', icon: 'chart' },
      { label: 'Reserved', value: '18', note: 'Vehicles', delta: '+5% vs last month', tone: 'orange', icon: 'tag' },
      { label: 'Sold Pending', value: '10', note: 'Vehicles', delta: '+8% vs last month', tone: 'purple', icon: 'shield' },
      { label: 'Inactive', value: '8', note: 'Vehicles', delta: '-3% vs last month', tone: 'slate', icon: 'settings' },
      { label: 'Total Value', value: '$4.68M', delta: '+18% vs last month', tone: 'blue', icon: 'wallet' }
    ],
    table: { tabs: ['All Inventory (128)', 'Available (92)', 'Reserved (18)', 'Sold Pending (10)', 'Inactive (8)'], filters: ['All Makes', 'All Models', 'All Years', 'All Status', 'All Locations'], columns: ['Vehicle', 'Stock # / VIN', 'Year', 'Mileage', 'Status', 'Price', 'Location', 'Listed'], rows: vehicleRows, pagination: 'Showing 1 to 8 of 128 vehicles' },
    rail: [
      { title: 'Inventory Value Summary', kind: 'donut', value: '$4.68M', items: ['SUV $2.01M', 'Sedan $1.09M', 'Truck $0.79M', 'Other $0.68M'] },
      { title: 'Inventory by Status', kind: 'list', items: ['Available 92 (72%)', 'Reserved 18 (14%)', 'Sold Pending 10 (8%)', 'Inactive 8 (6%)'] },
      { title: 'Top Makes', kind: 'list', items: ['Mercedes-Benz 18', 'BMW 16', 'Audi 14', 'Tesla 12', 'Ford 10'] },
      { title: 'Quick Inventory Actions', kind: 'actions', items: ['Add Single Vehicle', 'Import Inventory', 'VIN Decoder', 'Inventory Report'] }
    ]
  },
  {
    id: 'leads', label: 'Leads', route: '/dealer/leads', searchPlaceholder: 'Search by name, phone, email, VIN, or lead #...', primaryAction: 'Add New Lead', secondaryAction: 'Import Leads',
    metrics: [
      { label: 'Total Leads YTD', value: '1,248', delta: '+18% vs last year', tone: 'purple', icon: 'leads' },
      { label: 'New Leads MTD', value: '328', delta: '+22% vs last month', tone: 'blue', icon: 'customers' },
      { label: 'Qualified Leads', value: '186', delta: '+15% vs last month', tone: 'green', icon: 'shield' },
      { label: 'Appointments Set', value: '94', delta: '+10% vs last month', tone: 'orange', icon: 'calendar' },
      { label: 'Converted to Deals', value: '32', delta: '+14% vs last month', tone: 'purple', icon: 'tag' },
      { label: 'Est. Revenue', value: '$2.48M', delta: '+23% vs last month', tone: 'blue', icon: 'wallet' }
    ],
    pipeline: [
      { label: 'New', value: '48', pct: '28%', tone: 'blue' }, { label: 'Contacted', value: '32', pct: '19%', tone: 'purple' }, { label: 'Qualified', value: '18', pct: '15%', tone: 'orange' }, { label: 'Follow-Up', value: '12', pct: '9%', tone: 'green' }, { label: 'Proposal Sent', value: '8', pct: '9%', tone: 'cyan' }, { label: 'Lost / Closed', value: '6', pct: '4%', tone: 'slate' }
    ],
    table: { tabs: ['All Leads (1248)', 'New (48)', 'Contacted (32)', 'Qualified (18)', 'Follow-Up (12)', 'Proposal Sent (8)', 'Lost / Closed (6)'], filters: ['All Sources', 'All Status', 'All Types', 'All Salesperson'], columns: ['Lead #', 'Name', 'Contact', 'Vehicle Interest', 'Source', 'Status', 'Salesperson', 'Date Added'], rows: leadRows, pagination: 'Showing 1 to 8 of 1,248 leads' },
    rail: [
      { title: 'Lead Sources', kind: 'donut', value: '328', items: ['Website 128 (39%)', 'AutoTrader 78 (24%)', 'Referral 56 (17%)', 'Facebook Ads 38 (12%)', 'Google Ads 20 (6%)'] },
      { title: 'Top Performing Sources', kind: 'list', items: ['Referral 28.5%', 'Website 18.2%', 'AutoTrader 15.6%', 'Facebook Ads 12.3%', 'Google Ads 8.7%'] },
      { title: 'Quick Actions', kind: 'actions', items: ['Add New Lead', 'Import Leads', 'Lead Assignment', 'Follow-Up Reminders'] },
      { title: 'Recent Follow-Ups', kind: 'list', items: ['Michael Johnson — Follow-up call', 'Sarah Williams — Email sent', 'David Brown — Text message'] }
    ]
  },
  {
    id: 'deals', label: 'Deals', route: '/dealer/deals', searchPlaceholder: 'Search by VIN, customer, deal #, or vehicle...', primaryAction: 'Create New Deal', secondaryAction: 'Export Deals',
    metrics: [
      { label: 'Total Deals YTD', value: '342', delta: '+18% vs last year', tone: 'purple', icon: 'reports' },
      { label: 'Approved', value: '186', note: '54.4%', delta: '+22% vs last year', tone: 'green', icon: 'shield' },
      { label: 'Funded', value: '152', note: '44.4%', delta: '+20% vs last year', tone: 'blue', icon: 'wallet' },
      { label: 'Declined', value: '96', note: '28.1%', delta: '-8% vs last year', tone: 'red', icon: 'alert' },
      { label: 'Approval Rate', value: '54.4%', delta: '+3.2% vs last year', tone: 'purple', icon: 'chart' }
    ],
    pipeline: [
      { label: 'New', value: '48', pct: '14.0%', tone: 'blue' }, { label: 'Pre-Qualified', value: '32', pct: '9.4%', tone: 'purple' }, { label: 'Submitted', value: '26', pct: '7.6%', tone: 'purple' }, { label: 'Under Review', value: '34', pct: '9.9%', tone: 'orange' }, { label: 'Approved', value: '72', pct: '21.1%', tone: 'green' }, { label: 'Funding', value: '38', pct: '11.1%', tone: 'cyan' }, { label: 'Funded', value: '52', pct: '15.2%', tone: 'cyan' }, { label: 'Closed', value: '40', pct: '11.7%', tone: 'slate' }
    ],
    table: { tabs: ['All Deals (342)', 'New (48)', 'Under Review (34)', 'Approved (72)', 'Funding (38)', 'Funded (52)', 'Closed (40)'], filters: ['All Status', 'All Deal Types', 'All Lenders', 'All Salespersons'], columns: ['Deal #', 'Customer', 'Vehicle', 'Amount', 'Deal Type', 'Status', 'Lender', 'Salesperson', 'Updated'], rows: dealRows, pagination: 'Showing 1 to 8 of 342 deals' },
    rail: [
      { title: 'Deal Volume', kind: 'chart', value: '$2.48M', subtitle: '+23% vs last month', items: ['This Month'] },
      { title: 'Deals by Status', kind: 'donut', value: '342', items: ['Funded 52', 'Approved 72', 'Under Review 34', 'Submitted 26', 'Pre-Qualified 48', 'Declined 96', 'Closed 40'] },
      { title: 'Top Lenders by Volume', kind: 'list', items: ['AutoDeFi Pool $1.28M (51%)', 'Prime Capital $620K (25%)', 'OpenRoad Financial $420K (17%)', 'NorthBridge Bank $130K (5%)'] },
      { title: 'Quick Actions', kind: 'actions', items: ['Create New Deal', 'Credit Application', 'Funding Requests', 'Deal Calculator', 'Upload Documents', 'View Reports'] }
    ]
  },
  {
    id: 'financing', label: 'Financing', route: '/dealer/financing', searchPlaceholder: 'Search by VIN, customer, deal #, or vehicle...', primaryAction: 'Submit to Lenders', secondaryAction: 'Credit Application',
    metrics: [
      { label: 'Applications MTD', value: '56', delta: '+18% vs last month', tone: 'blue', icon: 'reports' },
      { label: 'Approved MTD', value: '28', delta: '+20% vs last month', tone: 'green', icon: 'shield' },
      { label: 'Funded MTD', value: '24', delta: '+25% vs last month', tone: 'orange', icon: 'wallet' },
      { label: 'Approval Rate MTD', value: '50.0%', delta: '+3.2% vs last month', tone: 'purple', icon: 'chart' },
      { label: 'Avg. Funding Time', value: '1.8 Days', delta: '-0.3 days vs last month', tone: 'blue', icon: 'calendar' }
    ],
    pipeline: [
      { label: 'New', value: '12', pct: '12.0%', tone: 'blue' }, { label: 'Pre-Qualified', value: '18', pct: '18.0%', tone: 'purple' }, { label: 'Submitted', value: '14', pct: '14.0%', tone: 'purple' }, { label: 'Under Review', value: '16', pct: '16.0%', tone: 'orange' }, { label: 'Approved', value: '28', pct: '28.0%', tone: 'green' }, { label: 'Funded', value: '24', pct: '24.0%', tone: 'cyan' }, { label: 'Closed', value: '18', pct: '18.0%', tone: 'slate' }
    ],
    table: { tabs: ['All Applications (56)', 'My Applications (24)', 'In Review (16)', 'Approved (28)', 'Funded (24)', 'Declined (8)', 'Closed (18)'], filters: ['All Status', 'All Lenders', 'All Credit Tiers', 'All Deal Types'], columns: ['Deal #', 'Customer', 'Vehicle', 'Loan Amount', 'Credit Tier', 'Status', 'Lender', 'Submitted'], rows: dealRows.map((r, index) => [`APP-${8421 - index}`, r[1], r[2], r[3], index % 3 === 0 ? 'Tier 1' : index % 3 === 1 ? 'Tier 2' : 'Tier 3', r[5], r[6], index < 2 ? 'May 31, 2025' : 'May 30, 2025']), pagination: 'Showing 1 to 8 of 56 applications' },
    rail: [
      { title: 'Lender Match Summary', kind: 'donut', value: '92%', subtitle: '8 Lenders Matched', items: ['Excellent Match 3', 'Good Match 3', 'Fair Match 1', 'Poor Match 1'] },
      { title: 'Best Approval Option', kind: 'score', value: 'AutoDeFi Pool', subtitle: '92% approval probability • 5.99% APR • Instant Funding', items: ['Loan Amount $28,450', 'Est. Payment $689.42 / mo', 'Total Interest $7,233'] },
      { title: 'Funding Progress', kind: 'list', value: '$1.36M', subtitle: 'Goal $2.50M', items: ['Progress 54%', '+27% vs last month'] },
      { title: 'Quick Actions', kind: 'actions', items: ['Submit to Lenders', 'Credit Application', 'Lender Comparison', 'Deal Calculator', 'Pre-Qualification', 'Save Application'] }
    ]
  },
  {
    id: 'customers', label: 'Customers', route: '/dealer/customers', searchPlaceholder: 'Search by name, phone, email, VIN, or customer ID...', primaryAction: 'Add New Customer', secondaryAction: 'Export Customers',
    metrics: [
      { label: 'Total Customers', value: '1,248', delta: '+18% vs last month', tone: 'purple', icon: 'customers' },
      { label: 'Active Customers', value: '842', delta: '+15% vs last month', tone: 'green', icon: 'leads' },
      { label: 'Financed Customers', value: '512', delta: '+22% vs last month', tone: 'blue', icon: 'financing' },
      { label: 'Repeat Customers', value: '326', delta: '+12% vs last month', tone: 'orange', icon: 'referrals' },
      { label: 'Applications', value: '684', delta: '+20% vs last month', tone: 'purple', icon: 'reports' }
    ],
    table: { tabs: ['All Customers (1,248)', 'Active (842)', 'Financed (512)', 'Repeat (326)', 'Inactive (406)', 'VIP (124)'], filters: ['All Status', 'All Credit Tiers', 'All Deal Types', 'All Salespersons'], columns: ['Customer', 'Contact', 'Credit Tier', 'Total Deals', 'Total Financed', 'Total Value', 'Last Deal', 'Status'], rows: customerRows, pagination: 'Showing 1 to 10 of 1,248 customers' },
    rail: [
      { title: 'Customer Overview', kind: 'donut', value: '1,248', items: ['Active 842', 'Financed 512', 'VIP 124', 'Inactive 406'] },
      { title: 'Top Customer Segments', kind: 'list', items: ['Premium Buyers 428', 'First Time Buyers 386', 'Repeat Buyers 326', 'Referrals 108'] },
      { title: 'Customer Value', kind: 'chart', value: '$12.48M', subtitle: '+24% vs last month', items: ['This Month'] },
      { title: 'Quick Actions', kind: 'actions', items: ['Add New Customer', 'Customer Import', 'Customer Groups', 'Send Email', 'Customer Offers', 'Loyalty Program'] }
    ]
  },
  {
    id: 'referrals', label: 'Referrals', route: '/dealer/referrals', searchPlaceholder: 'Search by name, email, phone, or referral code...', primaryAction: 'Invite & Share', secondaryAction: 'Referral Settings',
    metrics: [
      { label: 'Total Referrals', value: '128', delta: '+18% vs last month', tone: 'blue', icon: 'inventory' },
      { label: 'Active Referrals', value: '84', delta: '+15% vs last month', tone: 'green', icon: 'leads' },
      { label: 'Converted Deals', value: '32', delta: '+20% vs last month', tone: 'orange', icon: 'deals' },
      { label: 'Total Earned', value: '$24,680', delta: '+22% vs last month', tone: 'green', icon: 'wallet' },
      { label: 'Pending Payout', value: '$8,420', delta: '+12% vs last month', tone: 'purple', icon: 'wallet' },
      { label: 'Paid Out', value: '$16,260', delta: '+25% vs last month', tone: 'green', icon: 'chart' }
    ],
    pipeline: [
      { label: 'Clicks', value: '512', tone: 'blue' }, { label: 'Leads', value: '128', tone: 'green' }, { label: 'Applications', value: '64', tone: 'purple' }, { label: 'Deals', value: '32', tone: 'orange' }
    ],
    table: { tabs: ['All Referrals (128)', 'Active (84)', 'Converted (32)', 'Pending (12)', 'Paid (28)', 'Expired (8)', 'Declined (4)'], filters: ['All Status', 'All Tiers', 'All Sources'], columns: ['Referrer', 'Contact', 'Source', 'Tier', 'Status', 'Clicks', 'Leads', 'Deals', 'Earned', 'Payout Status'], rows: [['Mike Thompson','mike.t@example.com','Facebook','Tier 1 (5%)','Converted','96','24','8','$2,080','Paid'],['Sarah Johnson','sarah.j@example.com','Referral Link','Tier 1 (5%)','Converted','78','18','6','$1,560','Paid'],['David Miller','david.m@example.com','Email','Tier 2 (2%)','Converted','64','12','4','$640','Pending'],['Lisa Anderson','lisa.a@example.com','Instagram','Tier 1 (5%)','Active','52','15','0','$0','—'],['Chris Martin','chris.m@example.com','Twitter','Tier 2 (2%)','Under Review','36','8','2','$160','Pending'],['Robert Brown','robert.b@example.com','Email','Tier 2 (2%)','Declined','12','2','0','$0','—']], pagination: 'Showing 1 to 8 of 128 referrals' },
    rail: [
      { title: 'Your Referral Code', kind: 'copy', value: 'ELITEMOTORS', items: ['https://autodefi.com/r/ELITEMOTORS'] },
      { title: 'Share Your Link', kind: 'actions', items: ['Copy Link', 'Email', 'Facebook', 'Twitter', 'LinkedIn', 'SMS', 'WhatsApp', 'QR Code'] },
      { title: 'Referral Earnings', kind: 'donut', value: '$24,680', items: ['Tier 1 $14,260', 'Tier 2 $7,120', 'Tier 3 $2,310', 'Bonus $990'] },
      { title: 'Top Referrers', kind: 'list', items: ['Mike Thompson — 18 Deals — $3,560', 'Sarah Johnson — 12 Deals — $2,340', 'David Miller — 9 Deals — $1,780', 'Chris Anderson — 7 Deals — $1,320'] }
    ]
  },
  {
    id: 'auctions', label: 'Auctions', route: '/dealer/auctions', searchPlaceholder: 'Search by VIN, make, model, or auction ID...', primaryAction: 'List Vehicle for Auction',
    metrics: [
      { label: 'Active Auctions', value: '15', delta: '+25% vs last month', tone: 'purple', icon: 'auctions' },
      { label: 'Ending Today', value: '6', delta: '+20% vs last month', tone: 'green', icon: 'calendar' },
      { label: 'Total Bids', value: '248', delta: '+18% vs last month', tone: 'blue', icon: 'chart' },
      { label: 'Vehicles Sold MTD', value: '23', delta: '+28% vs last month', tone: 'green', icon: 'tag' },
      { label: 'Total Sales MTD', value: '$1.48M', delta: '+32% vs last month', tone: 'purple', icon: 'wallet' },
      { label: 'Avg. Sale Price', value: '$64,210', delta: '+12% vs last month', tone: 'orange', icon: 'reports' }
    ],
    table: { tabs: ['All Auctions (15)', 'Live Now (7)', 'Ending Today (6)', 'Upcoming (5)', 'Completed', 'My Listings (4)', 'Watchlist (8)'], filters: ['All Status', 'All Auction Types', 'All Makes', 'All Models'], columns: ['Vehicle', 'Auction Details', 'Current Bid', 'Bids', 'Time Left', 'Seller', 'Actions'], rows: [['2021 Ford F-150 Lariat SuperCrew','Live Auction / Public / Reserve Met','$38,750','18','00:15:32','Elite Motors','View Details'],['2020 BMW X5 xDrive40i','Live Auction / Public / Reserve Met','$31,250','22','00:47:18','Prime Auto Group','View Details'],['2019 Tesla Model 3 Long Range AWD','Live Auction / Public / Reserve Met','$26,900','31','01:12:45','Future Rides','View Details'],['2018 Ram 1500 Limited Crew Cab','Live Auction / Public / Reserve Not Met','$18,200','12','02:18:09','Elite Motors','View Details'],['2022 Audi Q7 Premium Plus','Upcoming / Public','—','0','Starts 10:00 AM','Luxury Auto Sales','View Details'],['2023 Chevrolet Corvette Stingray 2LT','Reserve Auction / Private','$62,500','7','05:45:18','Elite Motors','View Details']], pagination: 'Showing 1 to 6 of 15 auctions' },
    rail: [
      { title: 'Auction Activity Live', kind: 'list', items: ['New bid $38,750 on 2021 Ford F-150', 'New bid $31,250 on 2020 BMW X5', 'New bid $26,900 on 2019 Tesla Model 3', 'Auction ending soon: 2019 GMC Sierra 1500'] },
      { title: 'Auction Type Breakdown', kind: 'donut', value: '15', items: ['Public Auctions 8', 'Reserve Auctions 4', 'Private Auctions 2', 'Dealer Only 1'] },
      { title: 'Top Selling Vehicles MTD', kind: 'list', items: ['Ford F-150 — 4 Sold — $182,400', 'Tesla Model 3 — 3 Sold — $146,700', 'BMW X5 — 3 Sold — $134,250', 'Ram 1500 — 2 Sold — $89,600'] },
      { title: 'Quick Actions', kind: 'actions', items: ['List Vehicle', 'My Auctions', 'Watchlist', 'Bid History', 'Auction Alerts', 'Help Center'] }
    ]
  },
  {
    id: 'reports', label: 'Reports', route: '/dealer/reports', searchPlaceholder: 'Search by VIN, customer, deal #, or report...', primaryAction: 'Export Report', secondaryAction: 'May 1 – May 31, 2025',
    metrics: [
      { label: 'Total Sales MTD', value: '$2.48M', delta: '+24% vs Apr 1 – Apr 30', tone: 'blue', icon: 'cart' },
      { label: 'Total Deals MTD', value: '86', delta: '+18% vs Apr 1 – Apr 30', tone: 'green', icon: 'deals' },
      { label: 'Vehicles Sold MTD', value: '23', delta: '+28% vs Apr 1 – Apr 30', tone: 'purple', icon: 'inventory' },
      { label: 'Funding Amount MTD', value: '$1.36M', delta: '+22% vs Apr 1 – Apr 30', tone: 'orange', icon: 'wallet' },
      { label: 'Avg. Deal Size MTD', value: '$28,837', delta: '+12% vs Apr 1 – Apr 30', tone: 'cyan', icon: 'chart' },
      { label: 'Gross Profit MTD', value: '$145,680', delta: '+19% vs Apr 1 – Apr 30', tone: 'green', icon: 'bag' }
    ],
    table: { tabs: ['Overview', 'Sales', 'Inventory', 'Deals', 'Financing', 'Customers', 'Leads', 'Performance'], filters: ['Filters'], columns: ['Vehicle', 'Sold', 'Total Sales', 'Avg. Sale Price', 'Gross Profit'], rows: reportsRows, pagination: 'Reports updated in real-time based on dealer activity' },
    rail: [
      { title: 'Reports Center', kind: 'actions', items: ['Sales Summary', 'Inventory Report', 'Deals Report', 'Financing Report', 'Customer Report', 'Lead Source Report', 'Performance Report'] },
      { title: 'Sales by Vehicle Type', kind: 'donut', value: '$2.48M', items: ['Trucks $1.12M', 'SUVs $820K', 'Sedans $320K', 'Sports Cars $120K', 'Vans $100K'] },
      { title: 'Recent Report Activity', kind: 'list', items: ['Sales Summary Report — Completed', 'Inventory Report — Completed', 'Deals Report — Completed'] },
      { title: 'Report Insights', kind: 'list', items: ['Sales are up 24% compared to last month.', 'Trucks are top performing with 45.2% of sales.', 'AutoDeFi Pool funded 45.9% of deals this month.'] }
    ]
  },
  {
    id: 'fi-products', label: 'F&I Products', route: '/dealer/fi-products', searchPlaceholder: 'Search by product, provider, or category...', primaryAction: 'Add F&I Product', secondaryAction: 'Product Settings',
    metrics: [
      { label: 'Total Products', value: '24', delta: '+14% vs last month', tone: 'purple', icon: 'box' },
      { label: 'Products Sold MTD', value: '168', delta: '+18% vs last month', tone: 'green', icon: 'tag' },
      { label: 'Penetration Rate', value: '42.5%', delta: '+4.3% vs last month', tone: 'blue', icon: 'chart' },
      { label: 'Revenue MTD', value: '$124,680', delta: '+22% vs last month', tone: 'orange', icon: 'wallet' },
      { label: 'Avg. Profit per Deal', value: '$743', delta: '+9% vs last month', tone: 'purple', icon: 'reports' },
      { label: 'Refunds / Claims MTD', value: '5', delta: '-23% vs last month', tone: 'red', icon: 'shield' }
    ],
    table: { tabs: ['All Products', 'VSC', 'GAP', 'Appearance', 'Tire & Wheel', 'Key & Lock', 'Maintenance', 'Other'], filters: ['All Categories', 'All Providers', 'All Status'], columns: ['Product', 'Category', 'Provider', 'Coverage', 'Retail Price', 'Cost', 'Profit', 'Margin', 'Penetration', 'Sold MTD', 'Status'], rows: [['Platinum Vehicle Service Contract','VSC','AutoGuard Protection','84 Months / 100,000 Miles','$3,295','$1,850','$1,445','43.8%','28.7%','46','Active'],['Powertrain Service Contract','VSC','DriveSure Warranty','72 Months / 100,000 Miles','$2,495','$1,295','$1,200','48.1%','31.4%','33','Active'],['GAP Protection','GAP','AutoGuard Protection','Loan/Lease Term','$695','$245','$450','64.7%','62.3%','78','Active'],['Tire & Wheel Protection','Tire & Wheel','TireSecure Plus','60 Months','$795','$310','$485','60.9%','24.6%','29','Active'],['Appearance Protection','Appearance','Showroom Shield','5 Years','$995','$380','$615','61.8%','15.8%','19','Active'],['Key Replacement Protection','Key & Lock','KeySecure Solutions','60 Months','$495','$195','$300','60.6%','18.3%','21','Active'],['Maintenance Plan','Maintenance','ProCare Maintenance','3 Years / 36,000 Miles','$899','$420','$479','53.3%','20.1%','26','Active']], pagination: 'Showing 1 to 8 of 24 products' },
    rail: [
      { title: 'Product Sales MTD', kind: 'donut', value: '168', items: ['VSC 79', 'GAP 78', 'Appearance 19', 'Tire & Wheel 29', 'Key & Lock 21', 'Maintenance 26', 'Other 16'] },
      { title: 'Revenue by Category', kind: 'chart', value: '$124,680', items: ['VSC $48.6K', 'GAP $20.3K', 'Appearance $11.2K', 'Tire & Wheel $13.7K'] },
      { title: 'Top Performing Products', kind: 'list', items: ['GAP Protection — 78 Sold — $54,600', 'Platinum VSC — 46 Sold — $60,070', 'Powertrain VSC — 33 Sold — $41,085'] },
      { title: 'Quick Actions', kind: 'actions', items: ['Add Product', 'Sales Promotion', 'Product Bundles', 'Rate Calculator', 'Reports', 'Claims Management'] }
    ]
  },
  {
    id: 'marketing-tools', label: 'Marketing Tools', route: '/dealer/marketing-tools', searchPlaceholder: 'Search campaigns, templates, or tools...', primaryAction: 'Create New Campaign', secondaryAction: 'Marketing Settings',
    metrics: [
      { label: 'Total Campaigns', value: '18', delta: '+20% vs last month', tone: 'purple', icon: 'marketing' },
      { label: 'Total Impressions', value: '128.6K', delta: '+18% vs last month', tone: 'green', icon: 'eye' },
      { label: 'Total Clicks', value: '8.42K', delta: '+22% vs last month', tone: 'blue', icon: 'click' },
      { label: 'Leads Generated', value: '356', delta: '+25% vs last month', tone: 'purple', icon: 'leads' },
      { label: 'Cost Per Lead', value: '$24.87', delta: '-12% vs last month', tone: 'orange', icon: 'wallet' },
      { label: 'ROI This Month', value: '412%', delta: '+28% vs last month', tone: 'green', icon: 'chart' }
    ],
    table: { tabs: ['Active Campaigns'], filters: ['This Month', 'View All Campaigns'], columns: ['Campaign', 'Channel', 'Status', 'Impressions', 'Clicks', 'CTR', 'Leads', 'Cost / Lead', 'Budget'], rows: [['Truck Season Sales Event','Facebook / Instagram','Active','32,450','2,450','7.55%','98','$18.34','$2,500'],['Luxury SUV Showcase','Google / YouTube','Active','28,670','1,890','6.59%','76','$21.05','$2,000'],['Financing Made Easy','Facebook / Google','Active','24,180','1,650','6.83%','112','$17.86','$1,800'],['Email Newsletter — May','Email','Active','18,450','890','4.82%','34','$12.64','$500'],['Referral Rewards Program','Facebook / Instagram','Scheduled','—','—','—','—','—','$1,000']], pagination: 'Marketing tools snapshot' },
    rail: [
      { title: 'Performance Overview', kind: 'chart', value: '128.6K', subtitle: 'Impressions • Clicks • Leads', items: ['Impressions 128.6K', 'Clicks 8.42K', 'Leads 356'] },
      { title: 'Top Performing Channels', kind: 'list', items: ['Facebook 42.6K (33%)', 'Google Ads 35.2K (27%)', 'Instagram 22.8K (18%)', 'Email 15.4K (12%)', 'YouTube 7.6K (6%)'] },
      { title: 'Marketing Tools', kind: 'actions', items: ['Campaign Builder', 'Email Marketing', 'Social Media Manager', 'Ad Manager', 'Landing Pages', 'Templates'] },
      { title: 'Quick Actions', kind: 'actions', items: ['Create New Campaign', 'Create Email Campaign', 'Boost a Post', 'View Marketing Calendar'] }
    ]
  }
];
