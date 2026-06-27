import './globals.css';
import { Shell } from '@/components/Shell';

export const metadata = {
  title: 'AutoDeFi Risk & Security Portal',
  description: 'Risk monitoring and security intelligence for the AutoDeFi loan pool ecosystem.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body><Shell>{children}</Shell></body></html>;
}
