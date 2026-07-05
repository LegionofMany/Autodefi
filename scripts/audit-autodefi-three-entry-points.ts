import { existsSync, readFileSync } from 'node:fs';

const files = [
  'src/features/entry-points/entryPointData.ts',
  'src/features/entry-points/index.ts',
  'src/pages/EntryPointMainPage.tsx',
  'src/pages/entryPointMain.css',
  'src/pages/GeneralPublicMain.tsx',
  'src/pages/DealerDashboardMain.tsx',
  'src/pages/AdminMain.tsx',
  'src/App.tsx',
  'docs/AUTODEFI_THREE_ENTRY_POINTS_LOCK.md'
];

const tokens = [
  'general-public-main',
  'dealer-dashboard-main',
  'admin-main',
  'General Public Main',
  'Dealer Dashboard Main',
  'Admin Main',
  'AutoDeFi Public Gateway',
  'Dealer Operating Center',
  'AutoDeFi Admin Command Center',
  'Reqrium',
  'ZONYCS',
  'No private borrower data',
  'No guaranteed-yield wording',
  'V2 shadow-only lock',
  'Human governance required'
];

let failed = false;
for (const file of files) {
  if (!existsSync(file)) {
    console.error(`Missing entry point file: ${file}`);
    failed = true;
  }
}

const text = files.filter((file) => existsSync(file)).map((file) => readFileSync(file, 'utf8')).join('\n');
for (const token of tokens) {
  if (!text.includes(token)) {
    console.error(`Missing entry point token: ${token}`);
    failed = true;
  }
}

if (failed) process.exit(1);
console.log('AutoDeFi three entry points audit passed.');
