import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const pools = [
    ["tier_1_prime_pool", "tier_1_prime", "Tier 1 Prime Pool"],
    ["tier_2_standard_pool", "tier_2_standard", "Tier 2 Standard Pool"],
    ["tier_3_high_yield_pool", "tier_3_high_yield", "Tier 3 High Yield Pool"],
    ["tier_4_last_chance_pool", "tier_4_last_chance", "Tier 4 Last Chance Pool"]
  ];

  for (const [poolKey, riskTier, name] of pools) {
    await prisma.tierPool.upsert({
      where: { riskTier },
      create: {
        poolKey,
        riskTier,
        name,
        availableLiquidity: riskTier === "tier_2_standard" ? 250000 : 100000
      },
      update: { name }
    });
  }

  console.log("AutoDeFi V1 defaults seeded.");
}

main().finally(() => prisma.$disconnect());
