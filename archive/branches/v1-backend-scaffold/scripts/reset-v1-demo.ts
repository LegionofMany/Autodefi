import { PrismaClient } from "@prisma/client";
import { V1_DEMO } from "./v1-demo-constants";

const prisma = new PrismaClient();

async function main() {
  await prisma.v1DashboardSnapshot.deleteMany({ where: { scopeId: "demo" } });
  await prisma.tierPoolYieldEvent.deleteMany({ where: { eventNumber: V1_DEMO.yieldEventNumber } });
  await prisma.stablePaymentIntent.deleteMany({ where: { intentNumber: V1_DEMO.paymentIntentNumber } });
  await prisma.aDFCollateralLock.deleteMany({ where: { lockNumber: V1_DEMO.collateralLockNumber } });
  await prisma.dealerFullFundingPayout.deleteMany({ where: { payoutNumber: V1_DEMO.dealerPayoutNumber } });
  await prisma.servicedLoan.deleteMany({ where: { id: V1_DEMO.loanId } });
  await prisma.aIDealAudit.deleteMany({ where: { auditNumber: V1_DEMO.auditNumber } });
  await prisma.deal.deleteMany({ where: { dealNumber: V1_DEMO.dealNumber } });
  await prisma.vehicle.deleteMany({ where: { vin: V1_DEMO.vin } });
  await prisma.dealer.deleteMany({ where: { id: V1_DEMO.dealerId } });
  await prisma.userWallet.deleteMany({ where: { walletAddress: { in: [V1_DEMO.wallets.lp, V1_DEMO.wallets.borrower, V1_DEMO.wallets.dealer] } } });
  await prisma.user.deleteMany({ where: { email: { in: Object.values(V1_DEMO.users) } } });
  console.log("AutoDeFi V1 demo reset.");
}

main().finally(() => prisma.$disconnect());
