import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AutoDeFi Capital Yield Portal",
  description: "Investor capital yield portal for the AutoDeFi decentralized auto loan pool.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
