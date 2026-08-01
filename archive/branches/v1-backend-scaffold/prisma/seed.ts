import { execSync } from "node:child_process";

execSync("pnpm seed:v1-demo", { stdio: "inherit" });
