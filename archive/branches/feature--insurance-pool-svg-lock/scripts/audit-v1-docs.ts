import { existsSync } from "node:fs";

const requiredDocs = [
  "docs/ARCHITECTURE.md",
  "docs/V1_SCOPE.md",
  "docs/DEAL_FLOW.md",
  "docs/ADF_UTILITY.md",
  "docs/STABLECOIN_RAILS.md",
  "docs/HEDERA.md",
  "docs/API_CONTRACTS.md",
  "docs/DEPLOYMENT_V1.md",
  "docs/FRONTEND_FALLBACKS_V1.md",
  "docs/VISUAL_SYSTEM_V1.md",
  "docs/V1_COMPLETION_GATE.md",
  "docs/V1_1_V2_BACKLOG.md"
];

let failed = false;

for (const doc of requiredDocs) {
  if (!existsSync(doc)) {
    console.error(`Missing doc: ${doc}`);
    failed = true;
  } else {
    console.log(`Found ${doc}`);
  }
}

if (failed) process.exit(1);
console.log("V1 docs audit passed.");
