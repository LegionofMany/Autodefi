import { existsSync, readFileSync } from 'node:fs';
import { dashboardRegistry, navItems } from '../src/data/autodefiData';
import { dashboardGraphicSets, dashboardSvgAssets } from '../src/data/svgAssets';

const failures: string[] = [];
const navIds = new Set<string>();

for (const item of navItems) {
  if (navIds.has(item.id)) failures.push(`Duplicate navigation id: ${item.id}`);
  navIds.add(item.id);
  if (!dashboardGraphicSets[item.id]?.length) failures.push(`Navigation destination missing approved graphic placement: ${item.id}`);
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
  const graphicSet = dashboardGraphicSets[dashboard.id];
  if (!graphicSet?.length) failures.push(`Dashboard missing approved graphic placement set: ${dashboard.id}`);
  for (const asset of graphicSet || []) {
    if (!existsSync(`public${asset.src}`)) failures.push(`Placed dashboard graphic does not exist: public${asset.src}`);
  }
}

for (const [id, expected] of [['ai-underwriter', 12], ['ai-underwriter-v2', 15], ['insurance-claims', 11]] as const) {
  if (dashboardGraphicSets[id]?.length !== expected) failures.push(`${id} must place all ${expected} approved SVG screens; found ${dashboardGraphicSets[id]?.length || 0}`);
}

const appSource = readFileSync('src/App.tsx', 'utf8');
for (const requiredView of ['dashboard-hub', 'dealer-portal', 'InteractivePortal', 'LenderPool', 'LoanServicing']) {
  if (!appSource.includes(requiredView)) failures.push(`App router is missing: ${requiredView}`);
}

for (const file of ['src/pages/LenderPool.tsx', 'src/pages/LoanServicing.tsx']) {
  if (!existsSync(file)) failures.push(`Recovered portal implementation is missing: ${file}`);
}

const interactivePortalSource = readFileSync('src/pages/InteractivePortal.tsx', 'utf8');
for (const requiredCapability of ['data-portal-action', 'openWorkflow', 'downloadCsv', 'requestFullscreen', 'portal-screen-tabs']) {
  if (!interactivePortalSource.includes(requiredCapability)) failures.push(`Interactive portal capability is missing: ${requiredCapability}`);
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

const placedGraphics = new Set(Object.values(dashboardGraphicSets).flat().map((asset) => asset.src));
console.log(`Dashboard consolidation audit passed (${dashboardRegistry.length} live dashboards, ${placedGraphics.size} approved product graphics, ${archivedBranches.length} archived branches).`);
