import { execSync } from "node:child_process";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

function run(command: string) {
  console.log(`\n> ${command}`);
  execSync(command, { stdio: "inherit" });
}

async function main() {
  run("pnpm seed:v1-demo");
  run("pnpm verify:v1-demo");

  await prisma.v1DashboardSnapshot.deleteMany({ where: { scope: "v1_flow", scopeId: "demo" } });
  await prisma.v1DashboardSnapshot.create({
    data: {
      snapshotKey: `v1-flow-${Date.now()}`,
      scope: "v1_flow",
      scopeId: "demo",
      totalDealVolume: 32000,
      activePrincipal: 31480,
      availableLiquidity: 218520,
      totalYieldDistributed: 157.95,
      dealerPayoutsExecuted: 32000,
      borrowerPaymentsPosted: 735,
      adfCollateralLocked: 5000,
      activeLoans: 1,
      fundedDeals: 1,
      metadata: { source: "run-v1-flow" }
    }
  });

  console.log("AutoDeFi V1 flow completed successfully.");
}

main().finally(() => prisma.$disconnect());
