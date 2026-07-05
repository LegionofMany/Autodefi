import { adminEntryPoint } from '../features/entry-points/entryPointData';
import { EntryPointMainPage } from './EntryPointMainPage';

type AdminMainProps = {
  onNavigate?: (viewId: string) => void;
};

export function AdminMain({ onNavigate }: AdminMainProps) {
  return <EntryPointMainPage model={adminEntryPoint} onNavigate={onNavigate} />;
}
