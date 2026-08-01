import { useEffect, useRef, useState } from 'react';
import type { KeyboardEvent, MouseEvent } from 'react';
import { useActionCenter } from '../components/ActionCenter';
import { navItems } from '../data/autodefiData';
import { dashboardGraphicSets, fallbackDashboardSvg } from '../data/svgAssets';

type InteractivePortalProps = {
  id: string;
  onNavigate: (id: string) => void;
};

const ACTION_LABEL = /^(add|apply|approve|bid|browse|buy|claim|clear|compare|connect|continue|create|delegate|deposit|download|edit|export|filter|finance|fund|list|make|manage|new|next|notifications?|open|pay|previous|review|save|search|sell|settings|stake|start|submit|supply|swap|transfer|upload|view|vote|withdraw)/i;
const normalize = (value: string) => value.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, ' ').trim();
const ROUTE_LABELS = new Map(navItems.map((item) => [normalize(item.label), item.id]));
ROUTE_LABELS.set('dashboard', 'dashboard');
ROUTE_LABELS.set('home', 'dashboard-hub');
const FALLBACK_ASSETS = [{ src: fallbackDashboardSvg, label: 'AutoDeFi Dashboard' }] as const;

export function InteractivePortal({ id, onNavigate }: InteractivePortalProps) {
  const assets = dashboardGraphicSets[id] || FALLBACK_ASSETS;
  const [activeIndex, setActiveIndex] = useState(0);
  const [markup, setMarkup] = useState('');
  const [loadError, setLoadError] = useState('');
  const [actualSize, setActualSize] = useState(false);
  const stageRef = useRef<HTMLDivElement>(null);
  const { downloadCsv, openAction, openWorkflow, notify } = useActionCenter();
  const activeAsset = assets[activeIndex] || assets[0];
  const portalTitle = navItems.find((item) => item.id === id)?.label || activeAsset.label;

  const routeLabels = ROUTE_LABELS;

  useEffect(() => setActiveIndex(0), [id]);

  useEffect(() => {
    let cancelled = false;
    setMarkup('');
    setLoadError('');
    fetch(activeAsset.src)
      .then((response) => {
        if (!response.ok) throw new Error(`Design asset returned ${response.status}`);
        return response.text();
      })
      .then((source) => {
        if (!cancelled) setMarkup(source);
      })
      .catch((error: unknown) => {
        if (!cancelled) setLoadError(error instanceof Error ? error.message : 'Design asset could not be loaded.');
      });
    return () => { cancelled = true; };
  }, [activeAsset.src]);

  useEffect(() => {
    if (!markup || !stageRef.current) return undefined;
    const frame = window.requestAnimationFrame(() => {
      const svg = stageRef.current?.querySelector('svg');
      if (!svg) return;
      svg.setAttribute('role', 'img');
      svg.setAttribute('aria-label', `${portalTitle}: ${activeAsset.label}`);
      svg.removeAttribute('width');
      svg.removeAttribute('height');

      svg.querySelectorAll('.portal-hit-target').forEach((node) => node.remove());
      svg.querySelectorAll('text').forEach((textNode) => {
        const label = textNode.textContent?.replace(/\s+/g, ' ').trim() || '';
        if (!label || label.length > 80) return;
        let bounds: DOMRect | SVGRect;
        try {
          bounds = textNode.getBBox();
        } catch {
          return;
        }
        const isSidebarItem = bounds.x < 250 && bounds.y > 55 && bounds.y < 760;
        const isScreenLabel = assets.some((asset) => {
          const assetName = normalize(asset.label);
          const textName = normalize(label);
          return assetName === textName || assetName.includes(textName) || textName.includes(assetName);
        });
        const isRouteLabel = routeLabels.has(normalize(label));
        if (!isSidebarItem && !isScreenLabel && !isRouteLabel && !ACTION_LABEL.test(label)) return;

        const hitTarget = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        hitTarget.setAttribute('x', String(Math.max(0, bounds.x - 10)));
        hitTarget.setAttribute('y', String(Math.max(0, bounds.y - 8)));
        hitTarget.setAttribute('width', String(Math.max(28, bounds.width + 20)));
        hitTarget.setAttribute('height', String(Math.max(26, bounds.height + 16)));
        hitTarget.setAttribute('rx', '7');
        hitTarget.setAttribute('fill', 'transparent');
        hitTarget.setAttribute('class', 'portal-hit-target');
        hitTarget.setAttribute('data-portal-action', label);
        hitTarget.setAttribute('role', 'button');
        hitTarget.setAttribute('tabindex', '0');
        hitTarget.setAttribute('aria-label', label);
        textNode.parentNode?.appendChild(hitTarget);
      });
    });
    return () => window.cancelAnimationFrame(frame);
  }, [activeAsset.label, assets, markup, portalTitle, routeLabels]);

  const runAction = (rawLabel: string) => {
    const label = rawLabel.replace(/\s+/g, ' ').trim();
    const normalized = normalize(label);
    const matchingScreen = assets.findIndex((asset) => {
      const assetName = normalize(asset.label);
      return assetName === normalized || assetName.includes(normalized) || normalized.includes(assetName);
    });
    if (matchingScreen >= 0) {
      setActiveIndex(matchingScreen);
      notify(`${assets[matchingScreen].label} opened`);
      return;
    }

    const route = routeLabels.get(normalized);
    if (route) {
      onNavigate(route);
      return;
    }

    if (/export|download/i.test(label)) {
      downloadCsv(`${id}-${activeAsset.label.toLowerCase().replace(/[^a-z0-9]+/g, '-')}.csv`, [
        ['Portal', 'Screen', 'Action', 'Status'],
        [portalTitle, activeAsset.label, label, 'Frontend export generated'],
      ]);
      return;
    }

    if (/filter|search/i.test(label)) {
      openWorkflow({
        title: `${label} — ${activeAsset.label}`,
        message: `Refine the information shown in the ${portalTitle}.`,
        fields: [
          { id: 'query', label: 'Search', placeholder: `Search ${activeAsset.label.toLowerCase()}…` },
          { id: 'status', label: 'Status', type: 'select', options: ['All', 'Active', 'In Review', 'Completed', 'Needs Attention'] },
          { id: 'period', label: 'Period', type: 'select', options: ['Today', 'Last 7 days', 'Last 30 days', 'This quarter'] },
        ],
        submitLabel: 'Apply',
        successMessage: `${activeAsset.label} filters applied`,
        onSubmit: () => undefined,
      });
      return;
    }

    if (/add|apply|approve|bid|buy|claim|connect|create|delegate|deposit|edit|finance|fund|list|make|manage|new|pay|review|save|sell|stake|start|submit|supply|swap|transfer|upload|vote|withdraw/i.test(label)) {
      openWorkflow({
        title: label,
        message: `Complete this frontend workflow in ${portalTitle}. No transaction is submitted until a live backend and wallet signer are connected.`,
        fields: [
          { id: 'reference', label: 'Reference', placeholder: 'Account, application, proposal, or asset' },
          { id: 'amount', label: 'Amount', type: 'number', placeholder: '0.00' },
          { id: 'note', label: 'Notes', type: 'textarea', placeholder: 'Add workflow details…' },
          { id: 'confirmed', label: 'I reviewed the frontend action', type: 'checkbox', defaultValue: false },
        ],
        submitLabel: 'Continue',
        successMessage: `${label} saved in the frontend session`,
        onSubmit: () => undefined,
      });
      return;
    }

    openAction(label, `${label} is active in the ${portalTitle} frontend.`, [
      `Current screen: ${activeAsset.label}`,
      'The approved visual is rendered directly from the GitHub-tracked SVG.',
      'Live records and signed transactions connect during backend integration.',
    ]);
  };

  const handleStageClick = (event: MouseEvent<HTMLDivElement>) => {
    const target = event.target as Element;
    const action = target.closest('[data-portal-action]')?.getAttribute('data-portal-action');
    if (action) {
      runAction(action);
      return;
    }
    const svg = target.closest('svg');
    if (!svg) return;
    let nearestLabel = '';
    let nearestDistance = Number.POSITIVE_INFINITY;
    svg.querySelectorAll('text').forEach((textNode) => {
      const bounds = textNode.getBoundingClientRect();
      const centerX = bounds.left + bounds.width / 2;
      const centerY = bounds.top + bounds.height / 2;
      const distance = Math.hypot(event.clientX - centerX, event.clientY - centerY);
      if (distance < nearestDistance) {
        nearestDistance = distance;
        nearestLabel = textNode.textContent?.replace(/\s+/g, ' ').trim() || '';
      }
    });
    runAction(nearestDistance < 120 && nearestLabel ? nearestLabel : `${activeAsset.label} detail`);
  };

  const handleStageKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key !== 'Enter' && event.key !== ' ') return;
    const target = event.target as Element;
    const action = target.closest('[data-portal-action]')?.getAttribute('data-portal-action');
    if (!action) return;
    event.preventDefault();
    runAction(action);
  };

  const openFullscreen = async () => {
    try {
      await stageRef.current?.requestFullscreen();
    } catch {
      notify('Fullscreen is unavailable in this browser.');
    }
  };

  return (
    <main className="interactive-portal">
      <header className="portal-toolbar">
        <button type="button" className="portal-back" onClick={() => onNavigate('dashboard-hub')}>← All portals</button>
        <div className="portal-toolbar-title"><span>{portalTitle}</span><strong>{activeAsset.label}</strong></div>
        {assets.length > 1 ? (
          <label className="portal-screen-select"><span>Screen</span><select value={activeIndex} onChange={(event) => setActiveIndex(Number(event.target.value))}>{assets.map((asset, index) => <option value={index} key={asset.src}>{index + 1}. {asset.label}</option>)}</select></label>
        ) : <span className="portal-single-screen">Approved design</span>}
        <div className="portal-toolbar-actions">
          <button type="button" onClick={() => setActualSize((current) => !current)}>{actualSize ? 'Fit screen' : 'Actual size'}</button>
          <button type="button" onClick={openFullscreen}>Full screen</button>
          <button type="button" className="portal-connected" onClick={() => openAction('Frontend connection', `${portalTitle} is online and interactive.`, ['Approved design loaded from GitHub', 'Frontend controls enabled', 'Backend data adapter pending'])}><i /> Interactive</button>
        </div>
      </header>

      {assets.length > 1 ? <nav className="portal-screen-tabs" aria-label={`${portalTitle} screens`}>{assets.map((asset, index) => <button type="button" key={asset.src} className={activeIndex === index ? 'active' : ''} aria-pressed={activeIndex === index} onClick={() => setActiveIndex(index)}>{asset.label}</button>)}</nav> : null}

      <section className={`portal-design-viewport${actualSize ? ' actual-size' : ''}`} aria-label={`${portalTitle} interactive approved design`}>
        {!markup && !loadError ? <div className="portal-loading"><i /><strong>Loading approved design…</strong></div> : null}
        {loadError ? <div className="portal-load-error"><strong>The approved design could not be loaded.</strong><p>{loadError}</p><button type="button" onClick={() => window.location.reload()}>Reload portal</button></div> : null}
        {markup ? <div ref={stageRef} className="portal-svg-surface" onClick={handleStageClick} onKeyDown={handleStageKeyDown} dangerouslySetInnerHTML={{ __html: markup }} /> : null}
      </section>

      <footer className="portal-workspace-footer"><span><i /> Approved GitHub design</span><span>{activeIndex + 1} of {assets.length}</span><span>Highlighted controls respond to click or keyboard</span></footer>
    </main>
  );
}
