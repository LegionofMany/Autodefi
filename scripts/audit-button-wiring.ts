import { readFileSync } from 'node:fs';

const interactiveFiles = [
  'src/components/Button.tsx',
  'src/components/ActionCenter.tsx',
  'src/components/Shell.tsx',
  'src/components/dealer/DealerPortal.tsx',
  'src/pages/DashboardHub.tsx',
  'src/pages/LenderPool.tsx',
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
  const anchorTags = [...source.matchAll(/<a\b[^>]*>/gs)].map((match) => match[0]);
  const inputTags = [...source.matchAll(/<input\b[^>]*>/gs)].map((match) => match[0]);

  nativeButtons += buttonTags.length;
  sharedButtons += sharedButtonTags.length;
  inputs += inputTags.length;

  for (const tag of buttonTags) {
    if (!tag.includes('type="button"')) failures.push(`${file}: native button is missing type="button": ${tag.replace(/\s+/g, ' ')}`);
    if (!tag.includes('onClick=')) failures.push(`${file}: native button is missing onClick: ${tag.replace(/\s+/g, ' ')}`);
  }

  for (const tag of anchorTags) {
    if (!tag.includes('href=') && !tag.includes('onClick=')) failures.push(`${file}: anchor is not interactive: ${tag.replace(/\s+/g, ' ')}`);
  }
}

const buttonSource = readFileSync('src/components/Button.tsx', 'utf8');
for (const marker of ['const handleClick = onClick ||', 'openAction(', 'onClick={handleClick}']) {
  if (!buttonSource.includes(marker)) failures.push(`Shared Button fallback is missing: ${marker}`);
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
