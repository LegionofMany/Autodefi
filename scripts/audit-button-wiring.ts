import { readFileSync } from 'node:fs';

const interactiveFiles = [
  'src/components/Button.tsx',
  'src/components/ActionCenter.tsx',
  'src/components/DashboardGraphic.tsx',
  'src/components/Shell.tsx',
  'src/components/dealer/DealerPortal.tsx',
  'src/pages/DashboardHub.tsx',
  'src/pages/InteractivePortal.tsx',
  'src/pages/LenderPool.tsx',
  'src/pages/LoanServicing.tsx',
  'src/pages/ModulePage.tsx',
];

const failures: string[] = [];
let nativeButtons = 0;
let sharedButtons = 0;
let inputs = 0;

for (const file of interactiveFiles) {
  const source = readFileSync(file, 'utf8');
  const buttonTags = [...source.matchAll(/<button\b[^>]*>/gs)].map((match) => match[0]);
  const sharedButtonTags = [...source.matchAll(/<Button\b/g)];
  const sharedButtonOpenTags = [...source.matchAll(/<Button\b[^>]*>/gs)].map((match) => match[0]);
  const anchorTags = [...source.matchAll(/<a\b[^>]*>/gs)].map((match) => match[0]);
  const inputTags = [...source.matchAll(/<input\b[^>]*>/gs)].map((match) => match[0]);

  nativeButtons += buttonTags.length;
  sharedButtons += sharedButtonTags.length;
  inputs += inputTags.length;

  for (const tag of buttonTags) {
    const isSubmit = tag.includes('type="submit"');
    if (!tag.includes('type="button"') && !isSubmit) failures.push(`${file}: native button is missing an explicit type: ${tag.replace(/\s+/g, ' ')}`);
    if (!tag.includes('onClick=') && !isSubmit) failures.push(`${file}: native button is missing onClick: ${tag.replace(/\s+/g, ' ')}`);
  }

  for (const tag of sharedButtonOpenTags) {
    if (!tag.includes('onClick=')) failures.push(`${file}: shared Button is missing an explicit onClick workflow: ${tag.replace(/\s+/g, ' ')}`);
  }

  for (const tag of anchorTags) {
    if (!tag.includes('href=') && !tag.includes('onClick=')) failures.push(`${file}: anchor is not interactive: ${tag.replace(/\s+/g, ' ')}`);
  }
}

const buttonSource = readFileSync('src/components/Button.tsx', 'utf8');
if (!buttonSource.includes('onClick: () => void')) failures.push('Shared Button must require an explicit onClick workflow.');
if (buttonSource.includes('openAction(') || buttonSource.includes('onClick ||')) failures.push('Shared Button still contains a generic action fallback.');

const actionSource = readFileSync('src/components/ActionCenter.tsx', 'utf8');
for (const marker of ['openWorkflow:', 'fields?: readonly ActionField[]', 'rememberFrontendAction', 'downloadCsv:', 'copyText:']) {
  if (!actionSource.includes(marker)) failures.push(`Action workflow capability is missing: ${marker}`);
}

const appSource = readFileSync('src/App.tsx', 'utf8');
for (const marker of ['window.history.pushState', "window.addEventListener('popstate'", "#${encodeURIComponent(next)}"]) {
  if (!appSource.includes(marker)) failures.push(`App navigation wiring is missing: ${marker}`);
}

if (failures.length) {
  console.error(failures.join('\n'));
  process.exit(1);
}

console.log(`Button wiring audit passed (${nativeButtons} native buttons, ${sharedButtons} shared Button uses, ${inputs} controlled/search inputs).`);
