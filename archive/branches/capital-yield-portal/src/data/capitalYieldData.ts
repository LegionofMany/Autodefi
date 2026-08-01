export const stats = [
  { label: "Total Invested", value: "$5,248,750", change: "+18.6% vs last month", tone: "purple" },
  { label: "Total Earnings (YTD)", value: "$412,850.67", change: "+24.3% vs last month", tone: "green" },
  { label: "Current Weighted Yield", value: "12.74%", change: "+0.82% vs last month", tone: "blue" },
  { label: "Active Investments", value: "28", change: "+7 vs last month", tone: "orange" },
  { label: "Available to Invest", value: "$182,340.25", change: "stable-value rail reserve", tone: "teal" },
];

export const riskTiers = [
  { grade: "A", name: "Prime", invested: "$2,156,000", yield: "9.85%", defaultRate: "1.32%", status: "Healthy", color: "bg-emerald-500" },
  { grade: "B", name: "Core", invested: "$1,642,500", yield: "12.45%", defaultRate: "1.85%", status: "Healthy", color: "bg-blue-500" },
  { grade: "C", name: "Growth", invested: "$892,750", yield: "15.80%", defaultRate: "2.45%", status: "Healthy", color: "bg-yellow-500" },
  { grade: "D", name: "Opportunistic", invested: "$365,250", yield: "19.20%", defaultRate: "3.18%", status: "Watch", color: "bg-orange-500" },
  { grade: "E", name: "Specialty", invested: "$192,250", yield: "22.75%", defaultRate: "4.92%", status: "Watch", color: "bg-red-500" },
];

export const investments = [
  { name: "Prime Pool Q2 2025", pool: "Prime Auto Loans", tier: "A", invested: "$1,652,000", yield: "8.25%", earned: "$68,112.45", status: "Active", payout: "Jun 3, 2025" },
  { name: "Core Pool Q2 2025", pool: "Core Auto Loans", tier: "B", invested: "$1,284,500", yield: "11.20%", earned: "$68,941.32", status: "Active", payout: "Jun 3, 2025" },
  { name: "Growth Pool Q2 2025", pool: "Growth Auto Loans", tier: "C", invested: "$985,750", yield: "15.35%", earned: "$100,724.31", status: "Active", payout: "Jun 3, 2025" },
  { name: "Opportunistic Pool Q2 2025", pool: "Opportunistic Auto Loans", tier: "D", invested: "$732,000", yield: "18.75%", earned: "$80,748.26", status: "Active", payout: "Jun 3, 2025" },
  { name: "Specialty Pool Q2 2025", pool: "Specialty Auto Loans", tier: "E", invested: "$594,500", yield: "22.90%", earned: "$94,324.33", status: "Active", payout: "Jun 3, 2025" },
];

export const loans = [
  { vehicle: "2022 BMW X5 xDrive40i", borrower: "Prime · 720 score", pool: "Prime Pool · Tier A", apr: "9.85%", term: "60 mo", amount: "$28,450", funded: "95%" },
  { vehicle: "2021 Tesla Model Y Long Range", borrower: "Prime · 705 score", pool: "Prime Pool · Tier A", apr: "10.25%", term: "60 mo", amount: "$34,800", funded: "99%" },
  { vehicle: "2020 Ford F-150 Lariat", borrower: "Core · 680 score", pool: "Core Pool · Tier B", apr: "12.45%", term: "60 mo", amount: "$26,750", funded: "89%" },
  { vehicle: "2019 Audi Q5 Premium Plus", borrower: "Growth · 640 score", pool: "Growth Pool · Tier C", apr: "14.80%", term: "60 mo", amount: "$22,100", funded: "79%" },
  { vehicle: "2018 Honda Accord EX-L", borrower: "Opportunistic · 600 score", pool: "Opp. Pool · Tier D", apr: "16.75%", term: "48 mo", amount: "$18,500", funded: "74%" },
];

export const earnings = [
  { source: "Prime Pool Q2 2025", type: "Interest Payment", date: "May 29, 2025", amount: "+$1,624.35" },
  { source: "Core Pool Q2 2025", type: "Interest Payment", date: "May 28, 2025", amount: "+$1,248.80" },
  { source: "Growth Pool Q2 2025", type: "Interest Payment", date: "May 27, 2025", amount: "+$1,087.45" },
  { source: "Opportunistic Pool Q2 2025", type: "Interest Payment", date: "May 26, 2025", amount: "+$987.60" },
  { source: "Cash Reserve Yield", type: "Stable Rail Yield", date: "May 25, 2025", amount: "+$214.67" },
];

export const transactions = [
  { date: "May 29, 2025 10:24 AM", type: "Interest Payment", description: "Interest from Prime Pool Q2 2025", amount: "+$1,624.35", status: "Completed" },
  { date: "May 28, 2025 09:15 AM", type: "Interest Payment", description: "Interest from Core Pool Q2 2025", amount: "+$1,248.80", status: "Completed" },
  { date: "May 26, 2025 11:02 AM", type: "Deposit", description: "Add funds via USDC", amount: "+$50,000.00", status: "Completed" },
  { date: "May 24, 2025 02:18 PM", type: "Withdrawal", description: "Withdraw to USDC wallet", amount: "-$25,000.00", status: "Completed" },
  { date: "May 21, 2025 09:22 AM", type: "Platform Fee", description: "Management fee April 2025", amount: "-$125.30", status: "Completed" },
];

export const documents = [
  { name: "Account Statement - May 2025.pdf", category: "Account Documents", type: "PDF", related: "All Accounts", date: "May 29, 2025" },
  { name: "Investment Summary - Q2 2025.xlsx", category: "Reports", type: "XLSX", related: "All Portfolios", date: "May 28, 2025" },
  { name: "Loan Agreement - 2023 Tesla Model Y.pdf", category: "Investment Documents", type: "PDF", related: "LN-83472", date: "May 26, 2025" },
  { name: "Tax Summary - 2024.pdf", category: "Tax Documents", type: "PDF", related: "Tax Year 2024", date: "May 20, 2025" },
  { name: "KYC Verification Letter.docx", category: "Legal & Compliance", type: "DOCX", related: "KYC", date: "May 15, 2025" },
];
