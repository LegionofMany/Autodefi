import { execSync } from "node:child_process";

execSync("pnpm reset:v1-demo", { stdio: "inherit" });
execSync("pnpm run:v1-flow", { stdio: "inherit" });
