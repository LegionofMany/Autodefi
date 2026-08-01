import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { createServer } from 'vite';

const server = await createServer({
  appType: 'custom',
  server: { middlewareMode: true, watch: { ignored: ['**/archive/**', '**/dist/**'] } },
  optimizeDeps: { noDiscovery: true },
});

try {
  const [{ default: App }, { DashboardHub }, { InteractivePortal }, { default: DealerPortal }, { dashboardRegistry }, { ActionCenterProvider }] = await Promise.all([
    server.ssrLoadModule('/src/App.tsx'),
    server.ssrLoadModule('/src/pages/DashboardHub.tsx'),
    server.ssrLoadModule('/src/pages/InteractivePortal.tsx'),
    server.ssrLoadModule('/src/components/dealer/DealerPortal.tsx'),
    server.ssrLoadModule('/src/data/autodefiData.ts'),
    server.ssrLoadModule('/src/components/ActionCenter.tsx'),
  ]);

  const renderWithActions = (component: ReturnType<typeof createElement>) => renderToStaticMarkup(createElement(ActionCenterProvider, null, component));

  const appMarkup = renderWithActions(createElement(App));
  if (!appMarkup.includes('Choose your portal')) throw new Error('App did not render the Portal Hub');

  const hubMarkup = renderWithActions(createElement(DashboardHub, { onNavigate: () => undefined }));
  const launchCards = hubMarkup.match(/portal-launch-card/g)?.length ?? 0;
  if (launchCards !== dashboardRegistry.length) {
    throw new Error(`Portal Hub rendered ${launchCards} launch cards; expected ${dashboardRegistry.length}`);
  }

  for (const dashboard of dashboardRegistry) {
    if (dashboard.id === 'dealer-portal') continue;
    const markup = renderWithActions(createElement(InteractivePortal, { id: dashboard.id, onNavigate: () => undefined }));
    if (!markup.includes('portal-design-viewport')) throw new Error(`${dashboard.id} did not render its approved interactive design surface`);
  }

  const dealerMarkup = renderWithActions(createElement(DealerPortal, { onExit: () => undefined }));
  if (!dealerMarkup.includes('Dealer Portal')) throw new Error('Dealer Portal did not render');

  console.log(`Render verification passed (${dashboardRegistry.length} portal destinations, approved interactive design surfaces, and Dealer Portal).`);
} finally {
  await server.close();
}
