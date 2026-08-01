import { dealerDashboardEntryPoint } from '../features/entry-points/entryPointData';
import { EntryPointMainPage } from './EntryPointMainPage';

type DealerDashboardMainProps = {
  onNavigate?: (viewId: string) => void;
};

export function DealerDashboardMain({ onNavigate }: DealerDashboardMainProps) {
  return <EntryPointMainPage model={dealerDashboardEntryPoint} onNavigate={onNavigate} />;
}
