import { existsSync, readFileSync } from 'node:fs';
import { dashboardRegistry, navItems } from '../src/data/autodefiData';
import { dashboardSvgAssets } from '../src/data/svgAssets';

const failures: string[] = [];
const navIds = new Set<string>();

for (const item of navItems) {
  if (navIds.has(item.id)) failures.push(`Duplicate navigation id: ${item.id}`);
  navIds.add(item.id);
}

for (const dashboard of dashboardRegistry) {
  if (!navIds.has(dashboard.id)) failures.push(`Dashboard missing from navigation: ${dashboard.id}`);
  const publicAsset = dashboardSvgAssets[dashboard.id];
  if (!publicAsset) {
    failures.push(`Dashboard missing SVG mapping: ${dashboard.id}`);
    continue;
  }
  const assetPath = `public${publicAsset}`;
  if (!existsSync(assetPath)) failures.push(`Dashboard SVG does not exist: ${assetPath}`);
}

const appSource = readFileSync('src/App.tsx', 'utf8');
for (const requiredView of ['dashboard-hub', 'dealer-portal', 'lender-pool', 'ModulePage']) {
  if (!appSource.includes(requiredView)) failures.push(`App router is missing: ${requiredView}`);
}

const consolidationDoc = readFileSync('docs/DASHBOARD_CONSOLIDATION.md', 'utf8');
const archivedBranches = consolidationDoc.match(/^- `.+`$/gm) ?? [];
if (archivedBranches.length !== 34) {
  failures.push(`Expected 34 archived branch snapshots, found ${archivedBranches.length}`);
}

if (dashboardRegistry.length !== 27) {
  failures.push(`Expected 27 wired dashboard entries, found ${dashboardRegistry.length}`);
}

if (failures.length) {
  console.error(failures.join('\n'));
  process.exit(1);
}

console.log(`Dashboard consolidation audit passed (${dashboardRegistry.length} live dashboards, ${archivedBranches.length} archived branches).`);
