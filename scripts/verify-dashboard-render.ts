import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { createServer } from 'vite';

const server = await createServer({
  appType: 'custom',
  server: { middlewareMode: true },
  optimizeDeps: { noDiscovery: true },
});

try {
  const [{ default: App }, { DashboardHub }, { ModulePage }, { LenderPool }, { default: DealerPortal }, { dashboardRegistry }, { ActionCenterProvider }] = await Promise.all([
    server.ssrLoadModule('/src/App.tsx'),
    server.ssrLoadModule('/src/pages/DashboardHub.tsx'),
    server.ssrLoadModule('/src/pages/ModulePage.tsx'),
    server.ssrLoadModule('/src/pages/LenderPool.tsx'),
    server.ssrLoadModule('/src/components/dealer/DealerPortal.tsx'),
    server.ssrLoadModule('/src/data/autodefiData.ts'),
    server.ssrLoadModule('/src/components/ActionCenter.tsx'),
  ]);

  const renderWithActions = (component: ReturnType<typeof createElement>) => renderToStaticMarkup(createElement(ActionCenterProvider, null, component));

  const appMarkup = renderWithActions(createElement(App));
  if (!appMarkup.includes('AutoDeFi Dashboard Hub')) throw new Error('App did not render the Dashboard Hub');

  const hubMarkup = renderWithActions(createElement(DashboardHub, { onNavigate: () => undefined }));
  const openButtons = hubMarkup.match(/Open Dashboard/g)?.length ?? 0;
  if (openButtons !== dashboardRegistry.length) {
    throw new Error(`Dashboard Hub rendered ${openButtons} dashboard buttons; expected ${dashboardRegistry.length}`);
  }

  for (const dashboard of dashboardRegistry) {
    if (dashboard.id === 'dealer-portal' || dashboard.id === 'lender-pool') continue;
    const markup = renderWithActions(createElement(ModulePage, { id: dashboard.id }));
    if (!markup.includes('Work Queue')) throw new Error(`${dashboard.id} did not render its module page`);
  }

  const lenderMarkup = renderWithActions(createElement(LenderPool));
  if (!lenderMarkup.includes('Risk Tier Pool Allocation')) throw new Error('Lender Pool did not render');

  const dealerMarkup = renderWithActions(createElement(DealerPortal, { onExit: () => undefined }));
  if (!dealerMarkup.includes('Dealer Portal')) throw new Error('Dealer Portal did not render');

  console.log(`Render verification passed (${dashboardRegistry.length} hub destinations, all module views, Lender Pool, and Dealer Portal).`);
} finally {
  await server.close();
}
