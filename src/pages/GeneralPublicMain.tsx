import { generalPublicEntryPoint } from '../features/entry-points/entryPointData';
import { EntryPointMainPage } from './EntryPointMainPage';

type GeneralPublicMainProps = {
  onNavigate?: (viewId: string) => void;
};

export function GeneralPublicMain({ onNavigate }: GeneralPublicMainProps) {
  return <EntryPointMainPage model={generalPublicEntryPoint} onNavigate={onNavigate} />;
}
