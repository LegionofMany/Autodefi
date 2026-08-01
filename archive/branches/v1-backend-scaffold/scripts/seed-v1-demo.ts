import { PrismaClient } from "@prisma/client";
import { V1_DEMO } from "./v1-demo-constants";

const prisma = new PrismaClient();

async function main() {
  await import("./seed-defaults");

  const admin = await prisma.user.upsert({ where: { email: V1_DEMO.users.admin }, create: { email: V1_DEMO.users.admin, role: "admin", password: V1_DEMO.password }, update: { role: "admin" } });
  const dealerOwner = await prisma.user.upsert({ where: { email: V1_DEMO.users.dealer }, create: { email: V1_DEMO.users.dealer, role: "dealer", password: V1_DEMO.password }, update: { role: "dealer" } });
  const borrower = await prisma.user.upsert({ where: { email: V1_DEMO.users.borrower }, create: { email: V1_DEMO.users.borrower, role: "borrower", password: V1_DEMO.password }, update: { role: "borrower" } });
  const lp = await prisma.user.upsert({ where: { email: V1_DEMO.users.lp }, create: { email: V1_DEMO.users.lp, role: "lp", password: V1_DEMO.password }, update: { role: "lp" } });

  await prisma.userWallet.upsert({ where: { walletAddress: V1_DEMO.wallets.lp }, create: { userId: lp.id, walletAddress: V1_DEMO.wallets.lp, verified: true }, update: { verified: true } });
  await prisma.userWallet.upsert({ where: { walletAddress: V1_DEMO.wallets.borrower }, create: { userId: borrower.id, walletAddress: V1_DEMO.wallets.borrower, verified: true }, update: { verified: true } });

  const dealer = await prisma.dealer.upsert({ where: { id: V1_DEMO.dealerId }, create: { id: V1_DEMO.dealerId, name: "ZONYCS Demo Motors", ownerId: dealerOwner.id }, update: { name: "ZONYCS Demo Motors" } });
  const vehicle = await prisma.vehicle.upsert({ where: { vin: V1_DEMO.vin }, create: { vin: V1_DEMO.vin, make: "Tesla", model: "Model 3", trim: "Long Range", year: 2022, price: 38000, dealerId: dealer.id }, update: { price: 38000 } });
  const deal = await prisma.deal.upsert({ where: { dealNumber: V1_DEMO.dealNumber }, create: { dealNumber: V1_DEMO.dealNumber, dealerId: dealer.id, borrowerUserId: borrower.id, vehicleId: vehicle.id, status: "funded", riskTier: "tier_2_standard", approvedAmount: 32000, approvedRate: 14.99, approvedTerm: 60, metadata: V1_DEMO.metadata }, update: { status: "funded" } });

  await prisma.servicedLoan.upsert({ where: { id: V1_DEMO.loanId }, create: { id: V1_DEMO.loanId, dealId: deal.id, dealerId: dealer.id, borrowerUserId: borrower.id, principal: 31480, rate: 14.99, termMonths: 60, paymentAmount: 735, riskTier: "tier_2_standard", status: "active", metadata: V1_DEMO.metadata }, update: { principal: 31480, status: "active" } });
  await prisma.dealerFullFundingPayout.upsert({ where: { payoutNumber: V1_DEMO.dealerPayoutNumber }, create: { payoutNumber: V1_DEMO.dealerPayoutNumber, dealId: deal.id, loanId: V1_DEMO.loanId, dealerId: dealer.id, riskTier: "tier_2_standard", approvedAmount: 32000, payoutAmount: 32000, status: "executed", txHash: "demo_dealer_full_payout_tx", executedAt: new Date(), metadata: V1_DEMO.metadata }, update: { status: "executed", payoutAmount: 32000 } });
  await prisma.stablePaymentIntent.upsert({ where: { intentNumber: V1_DEMO.paymentIntentNumber }, create: { intentNumber: V1_DEMO.paymentIntentNumber, loanId: V1_DEMO.loanId, borrowerUserId: borrower.id, amount: 735, assetSymbol: "USDC", status: "posted", txHash: "demo_borrower_payment_tx", metadata: V1_DEMO.metadata }, update: { status: "posted", amount: 735 } });
  await prisma.tierPoolYieldEvent.upsert({ where: { eventNumber: V1_DEMO.yieldEventNumber }, create: { eventNumber: V1_DEMO.yieldEventNumber, loanId: V1_DEMO.loanId, riskTier: "tier_2_standard", totalPaymentAmount: 735, principalReturned: 520, grossInterest: 215, distributableYield: 157.95 }, update: { status: "posted" } });
  await prisma.aDFCollateralLock.upsert({ where: { lockNumber: V1_DEMO.collateralLockNumber }, create: { lockNumber: V1_DEMO.collateralLockNumber, loanId: V1_DEMO.loanId, borrowerUserId: borrower.id, walletAddress: V1_DEMO.wallets.borrower, riskTier: "tier_2_standard", stableLoanAmount: 32000, adfAmountLocked: 5000, collateralPercent: 6.5, hederaTxHash: "demo_adf_collateral_lock_tx", metadata: V1_DEMO.metadata }, update: { status: "locked" } });
  await prisma.aIDealAudit.upsert({ where: { auditNumber: V1_DEMO.auditNumber }, create: { auditNumber: V1_DEMO.auditNumber, dealId: deal.id, recommendation: "approve", finalTier: "tier_2_standard", confidenceScore: 0.91, metadata: V1_DEMO.metadata }, update: { recommendation: "approve" } });

  console.log("AutoDeFi V1 demo seeded.");
}

main().finally(() => prisma.$disconnect());
