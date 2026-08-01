import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

type AuditCheck = {
  name: string;
  pass: boolean;
  detail: string;
};

const root = process.cwd();
const files = {
  app: join(root, 'src/App.tsx'),
  page: join(root, 'src/pages/TreasuryManagementCenter.tsx'),
  data: join(root, 'src/data/treasuryManagementData.ts'),
  styles: join(root, 'src/styles/treasury.css'),
  main: join(root, 'src/main.tsx'),
  docs: join(root, 'docs/TREASURY_MANAGEMENT_CENTER_LOCK.md')
};

function read(path: string) {
  return existsSync(path) ? readFileSync(path, 'utf8') : '';
}

const app = read(files.app);
const page = read(files.page);
const data = read(files.data);
const styles = read(files.styles);
const main = read(files.main);
const docs = read(files.docs);

const requiredPages = [
  'Dashboard',
  'Treasury Assets',
  'Allocations',
  'Revenue Streams',
  'Reserves',
  'Expenditures',
  'Budgeting',
  'Reports',
  'Audit Logs'
];

const checks: AuditCheck[] = [
  { name: 'Treasury page exists', pass: existsSync(files.page), detail: 'src/pages/TreasuryManagementCenter.tsx must be present.' },
  { name: 'Treasury data exists', pass: existsSync(files.data), detail: 'src/data/treasuryManagementData.ts must be present.' },
  { name: 'Treasury styles exist', pass: existsSync(files.styles), detail: 'src/styles/treasury.css must be present.' },
  { name: 'App routes treasury view', pass: app.includes('TreasuryManagementCenter') && app.includes("useState('treasury')"), detail: 'App should load the locked Treasury Management Center first and route the treasury nav to it.' },
  { name: 'Treasury stylesheet imported', pass: main.includes("./styles/treasury.css"), detail: 'main.tsx should import treasury.css.' },
  { name: 'All nine locked treasury pages included', pass: requiredPages.every((label) => data.includes(label)), detail: 'Data model should include Dashboard, Assets, Allocations, Revenue, Reserves, Expenditures, Budgeting, Reports, and Audit Logs.' },
  { name: 'Token holdings naming reconciled', pass: !data.includes('Token Holdings (ADF)') && data.includes("label: 'Token Holdings'"), detail: 'Top KPI should use Token Holdings, not Token Holdings (ADF), unless it only represents ADF.' },
  { name: 'Hedera network visible', pass: data.includes('Hedera') && data.includes('ADF'), detail: 'ADF is Hedera-based, so Hedera must remain visible in network and asset tables.' },
  { name: 'Budget utilization exact value locked', pass: data.includes('41.61%'), detail: 'Detailed budget utilization should use 41.61% consistently.' },
  { name: 'Multi-signature governance footer locked', pass: page.includes('multi-signature governance'), detail: 'Treasury footer should preserve smart contract and multi-signature governance language.' },
  { name: 'Lock document exists', pass: existsSync(files.docs) && docs.includes('Treasury Management Center V1'), detail: 'docs/TREASURY_MANAGEMENT_CENTER_LOCK.md should document the locked parameters.' },
  { name: 'No raster screenshot dependency', pass: !page.includes('.png') && !page.includes('.jpg') && !page.includes('.jpeg'), detail: 'Treasury UI should be implemented as React/CSS/SVG-style primitives, not screenshot assets.' },
  { name: 'CSS namespace isolated', pass: styles.includes('.tmc-shell') && styles.includes('.tmc-sidebar') && styles.includes('.tmc-kpi-grid'), detail: 'Treasury CSS should use the tmc-* namespace to avoid breaking existing V1 screens.' }
];

const failed = checks.filter((check) => !check.pass);

console.log('\nAutoDeFi DAO Treasury Management Center Audit');
console.log('================================================');
for (const check of checks) {
  console.log(`${check.pass ? '✅' : '❌'} ${check.name} — ${check.detail}`);
}

if (failed.length > 0) {
  console.error(`\n${failed.length} treasury audit check(s) failed.`);
  process.exitCode = 1;
} else {
  console.log('\nAll treasury audit checks passed. Ready for frontend review and PR validation.');
}
