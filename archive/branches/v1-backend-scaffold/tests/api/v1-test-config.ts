export const v1TestConfig = {
  gatewayUrl: process.env.API_GATEWAY_URL || "http://localhost:4010",
  webUrl: process.env.WEB_APP_URL || "http://localhost:3000",
  demo: {
    adminEmail: "admin@autodefi.local",
    dealerEmail: "dealer@autodefi.local",
    borrowerEmail: "borrower@autodefi.local",
    lpEmail: "lp@autodefi.local",
    investorEmail: "investor@autodefi.local",
    daoEmail: "dao@autodefi.local",
    password: "AutoDeFiDemo123!",
    dealerId: "demo_dealer_zonycs_motors",
    lpWallet: "0xlp00000000000000000000000000000000000001"
  }
};
