import { useMemo, useState } from "react";
import {
  BarChart3,
  Bell,
  Car,
  CheckCircle2,
  ClipboardList,
  DollarSign,
  FileText,
  Gauge,
  Gavel,
  Heart,
  Home,
  LineChart,
  LockKeyhole,
  Network,
  Search,
  Settings,
  ShieldCheck,
  ShoppingCart,
  Star,
  Store,
  Truck,
  Users,
  WalletCards,
} from "lucide-react";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const tabs = [
  ["Dashboard", Home],
  ["Marketplace", Store],
  ["All Listings", ClipboardList],
  ["Auctions", Gavel],
  ["My Listings", Car],
  ["Watchlist", Heart],
  ["Deals", ShoppingCart],
  ["Inventory Sold", CheckCircle2],
  ["Purchase Orders", FileText],
  ["Transfers", Truck],
  ["Floorplan Financing", WalletCards],
  ["Credit Lines", DollarSign],
  ["Funding History", LineChart],
  ["Dealers", Users],
  ["Dealer Directory", Network],
  ["Ratings & Reviews", Star],
  ["Performance", Gauge],
  ["Analytics", BarChart3],
  ["Reports", FileText],
  ["Profile & Store", Store],
  ["Users & Permissions", LockKeyhole],
  ["Integrations", ShieldCheck],
  ["Settings", Settings],
];

const kpis = [
  ["Active Listings", "1,284", "+12.6% vs last 30d", ShoppingCart],
  ["Inventory Sold (30D)", "326", "+15.7% vs last 30d", DollarSign],
  ["Total Volume (30D)", "$24.85M", "+16.3% vs last 30d", BarChart3],
  ["Total Earnings (30D)", "$342,850", "+18.9% vs last 30d", DollarSign],
  ["Active Watchlist", "48", "+9.1% vs last 30d", Star],
  ["Dealer Rating", "4.8 / 5", "+0.2 vs last 30d", ShieldCheck],
  ["Network Dealers", "2,145", "+8.3% vs last 30d", Users],
];

const vehicles = [
  ["2022 BMW X5 xDrive40i", "M Sport Package", "Dallas, TX", "$43,750", "Escrow Ready", "4.9", "SUV"],
  ["2021 Ford F-150 Lariat", "SuperCrew 4WD", "Houston, TX", "$34,760", "ADF Finance Eligible", "4.7", "Truck"],
  ["2021 Audi Q7 Premium Plus", "45 TFSI quattro", "Atlanta, GA", "$36,250", "Price Drop", "4.8", "SUV"],
  ["2023 Tesla Model Y LR", "Long Range AWD", "Miami, FL", "$47,900", "New", "5.0", "EV"],
  ["2020 Mercedes GLC 300", "4MATIC", "Phoenix, AZ", "$38,900", "Auction", "4.6", "Luxury"],
  ["2021 Toyota 4Runner SRS", "4WD", "San Antonio, TX", "$24,750", "Hot Deal", "4.6", "SUV"],
];

const rows = [
  ["DEAL-88521", "2021 Ford F-150 Lariat", "AutoHub Dallas", "$34,760", "Completed", "May 29, 2025"],
  ["DEAL-88520", "2022 BMW X5 xDrive40i", "Prime Motors TX", "$43,750", "Completed", "May 28, 2025"],
  ["DEAL-88519", "2021 Audi Q7 Premium", "Elevate Auto Group", "$36,250", "Completed", "May 27, 2025"],
  ["DEAL-88518", "2023 Tesla Model Y LR", "NextLevel Autos", "$47,900", "Completed", "May 26, 2025"],
  ["DEAL-88517", "2020 Ram 1500 Laramie", "Summit Motors", "$32,480", "In Progress", "May 26, 2025"],
];

const chart = [
  { day: "Apr 30", volume: 800000, units: 24 },
  { day: "May 7", volume: 1100000, units: 35 },
  { day: "May 14", volume: 1300000, units: 40 },
  { day: "May 21", volume: 1500000, units: 45 },
  { day: "May 28", volume: 1850000, units: 50 },
];

const pie = [
  { name: "Active", value: 1024, fill: "#2f7bff" },
  { name: "Under Offer", value: 126, fill: "#f59e0b" },
  { name: "Pending", value: 78, fill: "#7c3aed" },
  { name: "Sold", value: 56, fill: "#19e68c" },
];

function Card({ children, className = "" }) {
  return <section className={`rounded-2xl border border-autodefi-border bg-autodefi-panel/88 p-4 shadow-glow ${className}`}>{children}</section>;
}

function Status({ value }) {
  const green = ["Completed", "Active", "Escrow Ready", "ADF Finance Eligible", "New", "Excellent", "Open"];
  const orange = ["In Progress", "Hot Deal", "Auction", "Reviewing"];
  const color = green.includes(value) ? "text-autodefi-green bg-autodefi-green/10 border-autodefi-green/30" : orange.includes(value) ? "text-autodefi-orange bg-autodefi-orange/10 border-autodefi-orange/30" : "text-autodefi-blue bg-autodefi-blue/10 border-autodefi-blue/30";
  return <span className={`rounded-md border px-2 py-1 text-xs ${color}`}>{value}</span>;
}

function Sidebar({ active, setActive }) {
  return (
    <aside className="fixed inset-y-0 left-0 z-20 hidden w-72 border-r border-autodefi-border bg-[#030b18]/95 p-4 lg:block">
      <div className="mb-8 flex items-center gap-3">
        <div className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-autodefi-blue to-autodefi-purple font-black">A</div>
        <div>
          <h1 className="text-xl font-black tracking-wide">AUTODEFI <span className="text-autodefi-purple">DAO</span></h1>
          <p className="text-xs uppercase tracking-[.18em] text-autodefi-muted">Dealer Marketplace Network</p>
        </div>
      </div>
      <nav className="space-y-1 overflow-y-auto pb-48 h-[calc(100vh-180px)]">
        {tabs.map(([name, Icon]) => (
          <button key={name} onClick={() => setActive(name)} className={`flex w-full items-center gap-3 rounded-xl px-3 py-2 text-left text-sm transition ${active === name ? "bg-autodefi-purple text-white" : "text-autodefi-muted hover:bg-white/5 hover:text-white"}`}>
            <Icon size={17} /> {name}
          </button>
        ))}
      </nav>
      <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-autodefi-border bg-autodefi-panel2 p-4">
        <p className="font-semibold">Premier Auto Group</p>
        <p className="text-sm text-autodefi-muted">Dallas, TX</p>
        <p className="mt-2 inline-flex rounded-lg bg-autodefi-green/10 px-2 py-1 text-xs text-autodefi-green">Verified Dealer</p>
        <p className="mt-3 text-xs text-autodefi-muted">Dealer ID DLR-78542</p>
      </div>
    </aside>
  );
}

function Topbar({ active }) {
  return (
    <header className="sticky top-0 z-10 border-b border-autodefi-border bg-[#020817]/80 p-4 backdrop-blur-xl lg:ml-72">
      <div className="flex flex-col gap-3 xl:flex-row xl:items-center xl:justify-between">
        <div>
          <h2 className="text-2xl font-black">{active === "Dashboard" ? "Welcome back, Premier Auto Group! 👋" : active}</h2>
          <p className="text-sm text-autodefi-muted">Buy, sell, auction, transfer, and finance verified inventory across the AutoDeFi dealer network.</p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex min-w-72 items-center gap-2 rounded-xl border border-autodefi-border bg-autodefi-panel px-3 py-2 text-sm text-autodefi-muted"><Search size={16} /> Search vehicles, VIN, dealer...</div>
          <button className="rounded-xl border border-autodefi-border bg-autodefi-panel px-3 py-2 text-sm">All Locations</button>
          <button className="rounded-xl border border-autodefi-border bg-autodefi-panel px-3 py-2 text-sm">May 12 - May 29, 2025</button>
          <Bell className="text-autodefi-muted" />
        </div>
      </div>
    </header>
  );
}

function DashboardView({ active }) {
  const isAuctions = active === "Auctions";
  const isListings = active === "All Listings";
  const title = active === "Marketplace" ? "Browse Marketplace" : isAuctions ? "Live Auctions" : isListings ? "All Vehicle Listings" : "Marketplace Spotlight";
  return (
    <div className="space-y-5">
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-7">
        {kpis.map(([label, value, delta, Icon]) => (
          <Card key={label} className="xl:col-span-1">
            <div className="flex items-center gap-3">
              <div className="grid h-12 w-12 place-items-center rounded-full bg-autodefi-blue/20 text-autodefi-blue"><Icon size={22} /></div>
              <div>
                <p className="text-xs text-autodefi-muted">{label}</p>
                <p className="text-2xl font-black">{value}</p>
                <p className="text-xs text-autodefi-green">{delta}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="grid gap-5 xl:grid-cols-2">
        <Card>
          <div className="mb-4 flex items-center justify-between"><h3 className="text-lg font-bold">{title}</h3><button className="text-sm text-autodefi-cyan">View All</button></div>
          <div className="mb-4 grid gap-2 md:grid-cols-4">
            {["Make / Model", "Price Range", "Body Style", isAuctions ? "Ending Soon" : "Finance Eligible"].map((f) => <button key={f} className="rounded-lg border border-autodefi-border bg-autodefi-panel2 px-3 py-2 text-sm text-autodefi-muted">{f}</button>)}
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {vehicles.map(([name, trim, city, price, status, rating, type]) => (
              <article key={name} className="rounded-xl border border-autodefi-border bg-[#08172b] p-3">
                <div className="mb-3 h-24 rounded-xl bg-gradient-to-br from-slate-800 via-slate-700 to-slate-950 grid place-items-center"><Car className="text-autodefi-blue" size={44} /></div>
                <div className="flex justify-between gap-2"><h4 className="font-bold leading-tight">{name}</h4><Heart size={17} className="text-autodefi-muted" /></div>
                <p className="text-sm text-autodefi-muted">{trim}</p>
                <p className="mt-1 text-xs text-autodefi-muted">{city} • {type}</p>
                <div className="mt-3 flex items-end justify-between"><p className="text-xl font-black">{price}</p><p className="text-sm">{rating} ⭐</p></div>
                <div className="mt-2 flex items-center justify-between"><Status value={status} /><button className="rounded-lg bg-autodefi-purple px-3 py-1 text-sm">{isAuctions ? "Place Bid" : "View"}</button></div>
              </article>
            ))}
          </div>
        </Card>

        <Card>
          <div className="mb-4 flex items-center justify-between"><h3 className="text-lg font-bold">Inventory & Sales Overview</h3><button className="text-sm text-autodefi-muted">This Month</button></div>
          <div className="grid gap-5 lg:grid-cols-2">
            <div className="h-64"><ResponsiveContainer><PieChart><Pie data={pie} dataKey="value" innerRadius={58} outerRadius={90}>{pie.map((entry) => <Cell key={entry.name} fill={entry.fill} />)}</Pie><Tooltip /></PieChart></ResponsiveContainer></div>
            <div className="h-64"><ResponsiveContainer><AreaChart data={chart}><CartesianGrid stroke="#18314f" /><XAxis dataKey="day" stroke="#8fa3bf" /><YAxis stroke="#8fa3bf" /><Tooltip /><Area dataKey="volume" stroke="#2f7bff" fill="#2f7bff33" /><Area dataKey="units" stroke="#19e68c" fill="#19e68c22" /></AreaChart></ResponsiveContainer></div>
          </div>
          <div className="grid gap-3 md:grid-cols-4">
            {["$24.85M Total Volume", "326 Units Sold", "$76,075 Avg Sale Price", "74.2% Sell Through"].map((item) => <div key={item} className="rounded-xl border border-autodefi-border bg-autodefi-panel2 p-3 font-semibold">{item}<p className="text-xs text-autodefi-green">Aligned to dealer funding and settlement flows</p></div>)}
          </div>
        </Card>
      </div>

      <div className="grid gap-5 xl:grid-cols-3">
        <Card className="xl:col-span-2">
          <h3 className="mb-4 text-lg font-bold">Recent Deals</h3>
          <div className="overflow-x-auto"><table className="w-full text-left text-sm"><thead className="text-autodefi-muted"><tr>{["Deal ID", "Vehicle", "Buyer Dealer", "Amount", "Status", "Close Date"].map((h) => <th key={h} className="border-b border-autodefi-border p-3">{h}</th>)}</tr></thead><tbody>{rows.map((r) => <tr key={r[0]}>{r.map((c, i) => <td key={c} className="border-b border-autodefi-border/60 p-3">{i === 4 ? <Status value={c} /> : c}</td>)}</tr>)}</tbody></table></div>
        </Card>
        <Card>
          <h3 className="mb-4 text-lg font-bold">AutoDeFi Alignment</h3>
          <ul className="space-y-3 text-sm text-autodefi-muted">
            <li>✅ Verified dealer-to-dealer marketplace.</li>
            <li>✅ Auctions, sales, transfers, watchlists, and financing.</li>
            <li>✅ Approved borrower deals fund dealers in full.</li>
            <li>✅ Borrowers repay through regional stable-value rails.</li>
            <li>✅ ADF remains staking, collateral, rewards, access, and governance utility.</li>
          </ul>
        </Card>
      </div>
    </div>
  );
}

function GenericTab({ active }) {
  const data = useMemo(() => rows.map((r, i) => ({ id: `${active.slice(0, 3).toUpperCase()}-${88520 + i}`, title: r[1], dealer: r[2], value: r[3], status: i % 2 ? "Reviewing" : "Active" })), [active]);
  return (
    <div className="space-y-5">
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {["Total Records", "30D Volume", "Network Health", "Risk Status"].map((label, i) => <Card key={label}><p className="text-sm text-autodefi-muted">{label}</p><p className="mt-2 text-3xl font-black">{["1,284", "$24.85M", "98.7", "Stable"][i]}</p><p className="text-xs text-autodefi-green">AutoDeFi dealer pool aligned</p></Card>)}
      </div>
      <Card>
        <div className="mb-4 flex items-center justify-between"><h3 className="text-lg font-bold">{active} Center</h3><button className="rounded-lg bg-autodefi-purple px-4 py-2 text-sm">Create / Manage</button></div>
        <div className="grid gap-3 md:grid-cols-3">
          {["Verification", "Settlement", "Escrow", "Floorplan", "Risk Tier", "Audit Trail"].map((x) => <div key={x} className="rounded-xl border border-autodefi-border bg-autodefi-panel2 p-4"><p className="font-bold">{x}</p><p className="text-sm text-autodefi-muted">Connected to dealer marketplace permissions and DeFi auto loan pool controls.</p></div>)}
        </div>
      </Card>
      <Card>
        <h3 className="mb-4 text-lg font-bold">{active} Activity</h3>
        <div className="overflow-x-auto"><table className="w-full text-left text-sm"><thead className="text-autodefi-muted"><tr>{["ID", "Vehicle / Record", "Dealer", "Value", "Status"].map((h) => <th key={h} className="border-b border-autodefi-border p-3">{h}</th>)}</tr></thead><tbody>{data.map((r) => <tr key={r.id}><td className="border-b border-autodefi-border/60 p-3">{r.id}</td><td className="border-b border-autodefi-border/60 p-3">{r.title}</td><td className="border-b border-autodefi-border/60 p-3">{r.dealer}</td><td className="border-b border-autodefi-border/60 p-3">{r.value}</td><td className="border-b border-autodefi-border/60 p-3"><Status value={r.status} /></td></tr>)}</tbody></table></div>
      </Card>
    </div>
  );
}

export default function App() {
  const [active, setActive] = useState("Dashboard");
  const richTabs = ["Dashboard", "Marketplace", "All Listings", "Auctions"];
  return (
    <div className="min-h-screen bg-autodefi-bg text-autodefi-text">
      <Sidebar active={active} setActive={setActive} />
      <Topbar active={active} />
      <main className="p-4 lg:ml-72 lg:p-6">
        {richTabs.includes(active) ? <DashboardView active={active} /> : <GenericTab active={active} />}
      </main>
    </div>
  );
}
