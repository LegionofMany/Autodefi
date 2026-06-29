import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const snapshot = await prisma.v1DashboardSnapshot.findFirst({
    where: { scope: "v1_flow" },
    orderBy: { createdAt: "desc" }
  });

  console.log("AutoDeFi V1 Flow Summary");
  console.log(snapshot);
}

main().finally(() => prisma.$disconnect());
