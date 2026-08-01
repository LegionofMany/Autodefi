import { PrismaClient } from "@prisma/client";
import { V1_DEMO } from "./v1-demo-constants";

const prisma = new PrismaClient();

async function main() {
  const deal = await prisma.deal.findUnique({ where: { dealNumber: V1_DEMO.dealNumber } });
  const payout = await prisma.dealerFullFundingPayout.findUnique({ where: { payoutNumber: V1_DEMO.dealerPayoutNumber } });
  const loan = await prisma.servicedLoan.findUnique({ where: { id: V1_DEMO.loanId } });
  const payment = await prisma.stablePaymentIntent.findUnique({ where: { intentNumber: V1_DEMO.paymentIntentNumber } });
  const yieldEvent = await prisma.tierPoolYieldEvent.findUnique({ where: { eventNumber: V1_DEMO.yieldEventNumber } });
  const lock = await prisma.aDFCollateralLock.findUnique({ where: { lockNumber: V1_DEMO.collateralLockNumber } });

  if (!deal || !payout || !loan || !payment || !yieldEvent || !lock) {
    console.error("AutoDeFi V1 demo verification failed.");
    process.exit(1);
  }

  console.log("AutoDeFi V1 demo verified.");
}

main().finally(() => prisma.$disconnect());
