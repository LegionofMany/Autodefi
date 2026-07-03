import { existsSync, readFileSync } from "node:fs";

const requiredFiles = [
  "docs/AI_UNDERWRITING_SVG_LOCK.md",
  "docs/AI_UNDERWRITING_BACKWARD_FORWARD_AUDIT.md",
  "public/assets/svg/ai-underwriting-suite/README.md",
  "public/assets/svg/ai-underwriting-suite/autodefi-ai-underwriter.svg",
  "public/assets/svg/ai-underwriting-suite/autodefi-risk-modules.svg",
  "public/assets/svg/ai-underwriting-suite/autodefi-identity-kyc.svg",
  "public/assets/svg/ai-underwriting-suite/autodefi-income-verification.svg",
  "public/assets/svg/ai-underwriting-suite/autodefi-bank-analysis.svg",
  "public/assets/svg/ai-underwriting-suite/autodefi-vehicle-valuation.svg",
  "public/assets/svg/ai-underwriting-suite/autodefi-fraud-signals.svg",
  "public/assets/svg/ai-underwriting-suite/autodefi-conditional-approvals.svg",
  "public/assets/svg/ai-underwriting-suite/autodefi-funding-readiness.svg",
  "public/assets/svg/ai-underwriting-suite/autodefi-analytics.svg",
  "public/assets/svg/ai-underwriting-suite/autodefi-settings.svg"
];

let failed = false;

for (const file of requiredFiles) {
  if (!existsSync(file)) {
    console.error(`Missing file: ${file}`);
    failed = true;
    continue;
  }

  console.log(`Found ${file}`);

  if (file.endsWith(".svg")) {
    const content = readFileSync(file, "utf8");
    if (!content.includes("viewBox=\"0 0 1792 1024\"")) {
      console.error(`Missing locked viewBox: ${file}`);
      failed = true;
    }
    if (!content.includes("class=\"svg-root\"")) {
      console.error(`Missing svg-root class: ${file}`);
      failed = true;
    }
  }
}

if (failed) process.exit(1);
console.log("AI underwriting SVG lock audit passed.");
