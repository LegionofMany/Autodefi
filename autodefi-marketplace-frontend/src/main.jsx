import React, { useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  Bell,
  Car,
  ChartNoAxesCombined,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ClipboardCheck,
  Eye,
  Grid2X2,
  Home,
  IdCard,
  Layers,
  List,
  Lock,
  Search,
  ShieldCheck,
  ShoppingCart,
  Sparkles,
  Store,
  User,
  Users,
  Wallet,
  Wrench
} from 'lucide-react';
import './styles.css';

const ADF_USD = 0.25;

const products = [
  {
    id: 'premium-access',
    name: 'AutoDeFi Premium Access',
    category: 'Premium Access',
    badge: 'Featured',
    price: 500,
    hero: 'shield',
    subtitle: 'Unlock exclusive platform features and higher yield opportunities.',
    description: 'AutoDeFi Premium Access is your all-in-one upgrade for the AutoDeFi ecosystem. Gain early access to new features, exclusive marketplace discounts, reward boosts, premium support, and member-only opportunities across borrowing, staking, insurance, DAO participation, and marketplace utility.',
    includes: ['Priority access to new features', 'Higher staking rewards', 'Exclusive marketplace discounts', 'Early access to NFT drops', 'Premium community access', 'Dedicated support'],
    tags: ['Access', 'Premium', 'Utility', 'Membership']
  },
  {
    id: 'insurance-booster-pack',
    name: 'Insurance Booster Pack',
    category: 'DeFi Services',
    badge: 'New',
    price: 300,
    hero: 'insurance',
    subtitle: 'Increase your coverage efficiency and reward multiplier.',
    description: 'The Insurance Booster Pack maximizes protection and returns inside the AutoDeFi Insurance Pool. It is designed for coverage efficiency, priority claim visibility, boosted rewards, and stronger risk protection across the insurance and recovery layer.',
    includes: ['+50% coverage efficiency for 30 days', '1.5x insurance rewards multiplier for 30 days', 'Priority claim processing', 'Premium risk analytics access', 'Dedicated insurance support', 'Stackable with other boosters'],
    tags: ['Insurance', 'Booster', 'Coverage', 'Rewards', 'Utility']
  },
  {
    id: 'staking-booster-tier-1',
    name: 'Staking Booster Tier 1',
    category: 'Tools',
    badge: 'Bestseller',
    price: 250,
    hero: 'cube',
    subtitle: 'Boost your staking rewards with enhanced multipliers.',
    description: 'Staking Booster Tier 1 increases staking reward efficiency for matched AutoDeFi risk-tier pools while keeping ADF aligned to staking, collateral, access, rewards, governance, and ecosystem utility.',
    includes: ['Tier 1 staking multiplier', 'Risk-pool yield visibility', 'Reward boost window', 'Pool allocation insights', 'Governance utility alignment', 'Transparent reward tracking'],
    tags: ['Staking', 'Rewards', 'Tier 1', 'Utility']
  },
  {
    id: 'defi-analytics-pro',
    name: 'DeFi Analytics Pro',
    category: 'Tools',
    badge: 'Bestseller',
    price: 400,
    hero: 'analytics',
    subtitle: 'Advanced analytics tools for smarter DeFi decisions.',
    description: 'DeFi Analytics Pro provides real-time data, market intelligence, and advanced visualizations to help investors, DAO members, and operators analyze pools, monitor performance, compare yields, export reports, and optimize strategies with confidence.',
    includes: ['Real-time portfolio analytics', 'Advanced charting and indicators', 'DeFi market insights and trends', 'Yield optimization suggestions', 'Risk assessment and alerts', 'Custom dashboards and reports', 'CSV/PDF export', 'Priority analytics support', 'Lifetime updates'],
    tags: ['Analytics', 'Pro', 'Insights', 'Tools', 'Data', 'Reports']
  },
  {
    id: 'ai-underwriting-pro-pack',
    name: 'AI Underwriting Pro Pack',
    category: 'Tools',
    badge: 'New',
    price: 500,
    hero: 'ai',
    subtitle: 'Leverage AI to underwrite smarter, reduce risk, and approve more good borrowers.',
    description: 'AI Underwriting Pro Pack uses advanced machine-learning style workflows and data aggregation patterns to evaluate borrower risk, reduce defaults, improve approval rates, and support the AutoDeFi credit decision engine.',
    includes: ['AI risk scoring and credit assessment', 'Fraud detection and anomaly identification', 'Income and cash-flow verification', 'DeFi and on-chain behavior analysis', 'Automated underwriting decisions', 'Dynamic risk-based pricing', 'Approval recommendation engine', 'Comprehensive risk reporting', 'API access and integration', 'Priority support'],
    tags: ['AI', 'Underwriting', 'Risk', 'Credit', 'Automation', 'DeFi', 'Analytics', 'Premium', 'Pro']
  },
  {
    id: 'dealer-pro-pack',
    name: 'Dealer Pro Pack',
    category: 'Tools',
    badge: 'New',
    price: 600,
    hero: 'dealer',
    subtitle: 'The ultimate toolkit for dealerships to increase approvals, reduce funding time, and grow with DeFi.',
    description: 'Dealer Pro Pack is built for automotive dealerships using AutoDeFi to fund more deals, close faster, access analytics, launch co-marketing, and connect dealership systems to the AutoDeFi loan, marketplace, and recovery ecosystem.',
    includes: ['Dealer analytics dashboard', 'Priority deal processing', 'Exclusive dealer interest rates', 'Co-marketing materials and support', 'White-label integration access', 'Dealer training and onboarding', 'Dedicated account manager', 'API access for dealership systems', 'Early access to new features', 'Premium dealer support 24/7'],
    tags: ['Dealer', 'Business', 'Tools', 'Analytics', 'Pro', 'DeFi']
  },
  {
    id: 'genesis-nft',
    name: 'AutoDeFi Genesis NFT',
    category: 'NFTs',
    badge: 'Limited',
    price: 1250,
    hero: 'car',
    subtitle: 'Limited edition Genesis Pass for early ecosystem members.',
    description: 'The Genesis NFT is a limited AutoDeFi membership asset for early ecosystem believers, designed for future collection utility across marketplace, DAO, dealer access, staking rewards, and ZONYCS marketplace integrations.',
    includes: ['Genesis member badge', 'Limited collection access', 'Early marketplace perks', 'Community recognition', 'Future utility eligibility', 'Transferable digital asset'],
    tags: ['NFT', 'Genesis', 'Collection', 'Access']
  },
  {
    id: 'autodefi-cap',
    name: 'AutoDeFi Cap',
    category: 'Merchandise',
    badge: 'Merch',
    price: 80,
    hero: 'cap',
    subtitle: 'Premium quality cap with embroidered logo.',
    description: 'A premium AutoDeFi community cap for members, dealers, borrowers, and contributors representing the decentralized auto finance ecosystem.',
    includes: ['Premium embroidery', 'Community merch', 'Member identity', 'Dark fintech style'],
    tags: ['Merchandise', 'Cap', 'Community']
  },
  {
    id: 'autodefi-hoodie',
    name: 'AutoDeFi Hoodie',
    category: 'Merchandise',
    badge: 'Merch',
    price: 250,
    hero: 'hoodie',
    subtitle: 'Comfortable hoodie for the DeFi community.',
    description: 'A premium dark AutoDeFi hoodie built for the community, dealer network, DAO contributors, and marketplace supporters.',
    includes: ['Premium fabric', 'Community identity', 'Dark neon styling', 'AutoDeFi logo'],
    tags: ['Merchandise', 'Hoodie', 'Community']
  },
  {
    id: 'vehicle-nft-cyber-x',
    name: 'Vehicle NFT - Cyber X',
    category: 'NFTs',
    badge: 'Exclusive',
    price: 2500,
    hero: 'vehicle-nft',
    subtitle: 'Exclusive NFT of the limited Cyber X concept.',
    description: 'Vehicle NFT - Cyber X is a premium concept vehicle asset designed for future ZONYCS marketplace integrations, auctions, raffles, sales, and digital collectible experiences.',
    includes: ['Concept vehicle art', 'Marketplace collectible', 'Auction-ready utility', 'ZONYCS integration layer'],
    tags: ['NFT', 'Vehicle', 'ZONYCS', 'Collection']
  }
];

const categories = [
  ['Premium Access', Sparkles, 8],
  ['NFTs', Layers, 12],
  ['DeFi Services', ShieldCheck, 15],
  ['Merchandise', Store, 7],
  ['Tools', Wrench, 9],
  ['Collections', Grid2X2, 6]
];

function usd(price) {
  return `≈ $${(price * ADF_USD).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })} USD`;
}

function Logo() {
  return <div className="brand-mark">AD</div>;
}

function TokenIcon() {
  return <span className="token"><Logo /></span>;
}

function App() {
  const [page, setPage] = useState('marketplace');
  const [activeProductId, setActiveProductId] = useState('premium-access');
  const [categoryFilter, setCategoryFilter] = useState('All');
  const activeProduct = products.find(product => product.id === activeProductId) || products[0];
  const filteredProducts = categoryFilter === 'All' ? products : products.filter(product => product.category === categoryFilter);

  const openProduct = (id) => {
    setActiveProductId(id);
    setPage('product');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="app-shell">
      <TopNav />
      <div className="layout">
        <SideNav />
        <main className="content">
          {page === 'marketplace' ? (
            <MarketplacePage products={filteredProducts} categoryFilter={categoryFilter} setCategoryFilter={setCategoryFilter} openProduct={openProduct} />
          ) : (
            <ProductPage product={activeProduct} openProduct={openProduct} goMarketplace={() => setPage('marketplace')} />
          )}
        </main>
      </div>
      <BottomTrustBar />
      <NewsCard />
    </div>
  );
}

function TopNav() {
  return (
    <header className="top-nav">
      <div className="brand"><Logo /><div><strong>AUTODEFI</strong><span>DeFi Auto Loan Pool</span></div></div>
      <nav>{['Dashboard', 'How It Works', 'Borrow', 'Invest', 'Insurance Pool', 'DAO Governance', 'Token Utility', 'Marketplace'].map(item => <button key={item} className={item === 'Marketplace' ? 'active' : ''}>{item}{['Borrow', 'Invest'].includes(item) && <ChevronDown size={13}/>}</button>)}</nav>
      <div className="user-actions"><Bell size={22}/><div className="avatar">JD</div><div><strong>John Doe</strong><span>Verified Member</span></div><button className="wallet-btn">Connect Wallet</button></div>
    </header>
  );
}

function SideNav() {
  const items = [
    ['Command Center', Home], ['Profile', User], ['Wallet', Wallet], ['KYC Verified', IdCard], ['Notifications', Bell],
    ['Borrow', Car], ['Invest', ChartNoAxesCombined], ['Insurance Pool', ShieldCheck], ['DAO Governance', Users], ['Staking Rewards', Layers], ['Marketplace', Store],
    ['Dealer Access', Wrench], ['Apply Now', ClipboardCheck]
  ];
  return (
    <aside className="side-nav">
      {items.map(([label, Icon], index) => (
        <React.Fragment key={label}>
          {index === 5 && <h4>ECOSYSTEM</h4>}
          {index === 11 && <h4>DEALER PORTAL</h4>}
          <button className={label === 'Marketplace' ? 'active' : ''}><Icon size={20}/><span>{label}</span>{label === 'KYC Verified' && <b className="ok">●</b>}{label === 'Notifications' && <b className="badge">12</b>}</button>
        </React.Fragment>
      ))}
      <div className="sidebar-card"><h3>The Future of Auto Finance is Decentralized.</h3><ShoppingCart size={72}/><button>Learn More →</button></div>
    </aside>
  );
}

function MarketplacePage({ products, categoryFilter, setCategoryFilter, openProduct }) {
  return (
    <>
      <HeroStrip />
      <div className="page-header"><h1>Marketplace <ShoppingCart /></h1><p>Explore exclusive products, services, and digital assets in the AutoDeFi ecosystem.</p></div>
      <div className="toolbar"><label className="search"><Search size={18}/><input placeholder="Search products, collections, and more..." /></label><button className="select">All Categories <ChevronDown size={16}/></button><button className="select">Sort by: <strong>Latest</strong> <ChevronDown size={16}/></button><button className="view active"><Grid2X2 size={18}/></button><button className="view"><List size={18}/></button></div>
      <div className="category-tabs">{['All', 'Premium Access', 'NFTs', 'DeFi Services', 'Merchandise', 'Tools', 'Collections'].map(category => <button key={category} onClick={() => setCategoryFilter(category)} className={categoryFilter === category ? 'active' : ''}>{category}</button>)}</div>
      <div className="market-layout"><section className="product-grid">{products.map(product => <ProductCard key={product.id} product={product} openProduct={openProduct} />)}</section><RightRail /></div>
      <Pagination />
    </>
  );
}

function HeroStrip() {
  return <div className="hero-strip"><Car size={112}/><div className="round-logo"><Logo /></div></div>;
}

function ProductCard({ product, openProduct }) {
  return (
    <article className="product-card" onClick={() => openProduct(product.id)}>
      <ProductVisual product={product} compact />
      <h3>{product.name}</h3>
      <p>{product.subtitle}</p>
      <span className="price-label">Price</span>
      <div className="price-row"><TokenIcon /><strong>{product.price.toLocaleString()} ADF</strong><small>{usd(product.price)}</small></div>
      <button>{['premium-access', 'genesis-nft', 'vehicle-nft-cyber-x'].includes(product.id) ? 'View Details' : 'Add to Cart'}</button>
    </article>
  );
}

function ProductPage({ product, openProduct, goMarketplace }) {
  const related = useMemo(() => products.filter(item => item.id !== product.id).slice(0, 5), [product.id]);
  return (
    <div className="product-detail">
      <div className="breadcrumb"><button onClick={goMarketplace}>Marketplace</button><span>›</span><span>{product.category}</span><span>›</span><strong>{product.name}</strong></div>
      <div className="detail-grid">
        <section className="media-column"><ProductVisual product={product} large /><div className="thumb-row"><ProductVisual product={product} thumb />{['car', 'analytics', 'cube', 'map', 'lock'].map((type, index) => <MiniThumb key={type} type={type} locked={index === 4} />)}</div><section className="description-card"><h2>Product Description</h2><p>{product.description}</p><h3>Tags</h3><div className="tags">{product.tags.map(tag => <span key={tag}>{tag}</span>)}</div></section></section>
        <section className="info-column"><span className={`pill ${product.badge === 'Bestseller' ? 'purple' : ''}`}>{product.badge}</span><h1>{product.name}</h1><p className="lead">{product.subtitle}</p><span className="price-label">Price</span><div className="big-price"><TokenIcon /><strong>{product.price.toLocaleString()} ADF</strong><small>{usd(product.price)}</small></div><h3>Includes:</h3><ul className="include-list">{product.includes.map(item => <li key={item}><ShieldCheck size={17}/>{item}</li>)}</ul></section>
        <aside className="purchase-column"><PurchaseCard product={product}/><SecurityCard />{product.id === 'defi-analytics-pro' && <AnalyticsMini />}</aside>
      </div>
      <section className="related"><h2>You May Also Like</h2><button className="arrow"><ChevronLeft /></button><div>{related.map(item => <RelatedCard key={item.id} product={item} openProduct={openProduct} />)}</div><button className="arrow"><ChevronRight /></button></section>
    </div>
  );
}

function ProductVisual({ product, compact, large, thumb }) {
  const Icon = product.hero === 'dealer' ? Wrench : product.hero === 'ai' ? Eye : product.hero === 'analytics' ? ChartNoAxesCombined : product.hero === 'cube' ? Grid2X2 : product.hero === 'car' || product.hero === 'vehicle-nft' ? Car : product.hero === 'cap' ? Store : product.hero === 'hoodie' ? User : ShieldCheck;
  return <div className={`product-visual ${compact ? 'compact' : ''} ${large ? 'large' : ''} ${thumb ? 'thumb' : ''}`}><span className="visual-badge">{product.badge}</span><div className="grid-glow" /><div className="visual-main"><Icon size={large ? 104 : compact ? 66 : 40}/><Logo /></div>{!thumb && <div className="visual-copy"><strong>{product.visualTitle || product.name}</strong><span>{product.subtitle}</span></div>}{(product.hero === 'dealer' || product.hero === 'ai') && !thumb && <div className="feature-strip"><SmallFeature icon={ShieldCheck} label="Higher Approvals"/><SmallFeature icon={ChartNoAxesCombined} label="Risk Scoring"/><SmallFeature icon={Wrench} label="Advanced Tools"/></div>}</div>;
}

function MiniThumb({ type, locked }) {
  const Icon = type === 'analytics' ? ChartNoAxesCombined : type === 'cube' ? Grid2X2 : type === 'map' ? ChartNoAxesCombined : type === 'lock' ? Lock : Car;
  return <div className="mini-thumb"><Icon size={26}/>{locked && <Lock size={16} className="lock-overlay"/>}</div>;
}

function SmallFeature({ icon: Icon, label }) {
  return <div><Icon size={20}/><span>{label}</span></div>;
}

function PurchaseCard({ product }) {
  return <div className="purchase-card"><div className="split"><h2>Purchase</h2><span>Balance: 1,245,780 ADF</span></div><div className="big-price"><TokenIcon/><strong>{product.price.toLocaleString()} ADF</strong><small>{usd(product.price)}</small></div><label>Quantity</label><div className="qty"><button>−</button><strong>1</strong><button>+</button></div><label>Total</label><div className="big-price total"><TokenIcon/><strong>{product.price.toLocaleString()} ADF</strong><small>{usd(product.price)}</small></div><button className="cart-btn"><ShoppingCart size={18}/> Add to Cart</button><button className="buy-btn">Buy Now</button></div>;
}

function SecurityCard() {
  return <div className="security-card"><InfoRow icon={ShieldCheck} title="Secure Transaction" text="256-bit Encrypted"/><InfoRow icon={ClipboardCheck} title="Smart Contract" text="Audited by CertiK"/><InfoRow icon={Lock} title="Non-Custodial" text="You own your assets"/></div>;
}

function InfoRow({ icon: Icon, title, text }) {
  return <div><span><Icon size={20}/></span><p><strong>{title}</strong><small>{text}</small></p></div>;
}

function AnalyticsMini() {
  return <div className="analytics-mini"><h3>What You Get</h3><div className="mini-dashboard"><div className="donut">42%</div><div><small>Total Value Locked</small><strong>$2.45M</strong><em>+12.48%</em></div><div className="line-chart"><span/><span/><span/><span/><span/></div></div><div className="mini-icons"><span>Real-time Data</span><span>Smart Insights</span><span>Data Export</span><span>Custom Reports</span></div></div>;
}

function RelatedCard({ product, openProduct }) {
  return <button className="related-card" onClick={() => openProduct(product.id)}><ProductVisual product={product} thumb/><strong>{product.name}</strong><span>{product.price.toLocaleString()} ADF</span></button>;
}

function RightRail() {
  return <aside className="right-rail"><section><div className="rail-head"><h2>Categories</h2><a>View All →</a></div>{categories.map(([label, Icon, count]) => <div className="category-row" key={label}><Icon size={16}/><span>{label}</span><strong>{count}</strong></div>)}</section><section><h2>Marketplace Stats</h2><div className="stats-grid"><Stat title="Total Sales (ADF)" value="1,245,780"/><Stat title="Total Items" value="57" plus="+5 New"/><Stat title="Total Traders" value="2,845" plus="+94 (7d)"/><Stat title="Volume (7d)" value="125,780 ADF" plus="+21.36%"/></div></section><section><div className="rail-head"><h2>Featured Collection</h2><a>View Collection →</a></div><div className="collection-strip"><Logo/><Logo/><Logo/><Logo/></div><h3>AutoDeFi Genesis Collection</h3><p>The original collection for true believers.</p><div className="split"><span>Floor Price<br/><strong>950 ADF</strong></span><span>Items<br/><strong>250 / 500</strong></span></div><button>View Collection</button></section></aside>;
}

function Stat({ title, value, plus }) {
  return <div className="stat"><small>{title}</small><strong>{value}</strong>{plus && <em>{plus}</em>}</div>;
}

function Pagination() {
  return <div className="pagination"><button><ChevronLeft size={16}/></button><button className="active">1</button><button>2</button><button>3</button><span>...</span><button>10</button><button><ChevronRight size={16}/></button></div>;
}

function BottomTrustBar() {
  return <footer className="trust-bar"><InfoRow icon={ShieldCheck} title="Secure Transactions" text="256-bit Encrypted"/><InfoRow icon={ClipboardCheck} title="Smart Contracts" text="Audited by CertiK"/><InfoRow icon={Lock} title="Non-Custodial" text="You own your assets"/><div className="brand center"><Logo/><div><strong>AUTODEFI</strong><span>DeFi Auto Loan Pool</span></div></div><InfoRow icon={Layers} title="$ADF Token" text="Utility & Governance"/><InfoRow icon={ShieldCheck} title="Community Driven" text="Built for the Community"/></footer>;
}

function NewsCard() {
  return <aside className="news-card"><div className="rail-head"><strong>AutoDeFi News⌄</strong><a>View All →</a></div><div><div className="news-thumb"><ShoppingCart /></div><p><strong>Marketplace Hits 1.2M ADF in Total Sales!</strong><small>May 12, 2025 · Read More →</small></p></div></aside>;
}

createRoot(document.getElementById('root')).render(<App />);
