export const V1_DEMO = {
  password: "AutoDeFiDemo123!",
  users: {
    admin: "admin@autodefi.local",
    dealer: "dealer@autodefi.local",
    borrower: "borrower@autodefi.local",
    lp: "lp@autodefi.local",
    investor: "investor@autodefi.local",
    dao: "dao@autodefi.local"
  },
  wallets: {
    borrower: "0xborrower0000000000000000000000000000000001",
    lp: "0xlp00000000000000000000000000000000000001",
    dealer: "0xdealer0000000000000000000000000000000001"
  },
  dealerId: "demo_dealer_zonycs_motors",
  vin: "5YJ3E1EA7NFDEMO01",
  dealNumber: "ADF-DEMO-DEAL-0001",
  loanId: "demo_serviced_loan_0001",
  dealerPayoutNumber: "ADF-DEALER-FULL-DEMO-0001",
  paymentIntentNumber: "ADF-PAY-DEMO-0001",
  yieldEventNumber: "ADF-YIELD-DEMO-0001",
  collateralLockNumber: "ADF-COLL-DEMO-0001",
  auditNumber: "ADF-AUDIT-DEMO-0001",
  metadata: { demo: true, scenario: "tier_2_dealer_funding_demo" }
} as const;
