import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import type { ReactNode } from 'react';

type ActionDialog = {
  title: string;
  message: string;
  details?: readonly string[];
};

type ActionCenterValue = {
  openAction: (title: string, message: string, details?: readonly string[]) => void;
  notify: (message: string) => void;
  downloadCsv: (filename: string, rows: readonly (readonly string[])[]) => void;
};

const ActionCenterContext = createContext<ActionCenterValue | null>(null);

function csvCell(value: string) {
  return `"${value.split('"').join('""')}"`;
}

export function ActionCenterProvider({ children }: { children: ReactNode }) {
  const [dialog, setDialog] = useState<ActionDialog | null>(null);
  const [toast, setToast] = useState('');

  const openAction = useCallback((title: string, message: string, details?: readonly string[]) => {
    setDialog({ title, message, details });
  }, []);

  const notify = useCallback((message: string) => {
    setToast(message);
  }, []);

  const downloadCsv = useCallback((filename: string, rows: readonly (readonly string[])[]) => {
    const csv = rows.map((row) => row.map(csvCell).join(',')).join('\n');
    const url = URL.createObjectURL(new Blob([csv], { type: 'text/csv;charset=utf-8' }));
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = filename;
    document.body.appendChild(anchor);
    anchor.click();
    anchor.remove();
    URL.revokeObjectURL(url);
    setToast(`${filename} downloaded`);
  }, []);

  useEffect(() => {
    if (!toast) return undefined;
    const timer = window.setTimeout(() => setToast(''), 2800);
    return () => window.clearTimeout(timer);
  }, [toast]);

  useEffect(() => {
    if (!dialog) return undefined;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setDialog(null);
    };
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [dialog]);

  const value = useMemo(() => ({ openAction, notify, downloadCsv }), [downloadCsv, notify, openAction]);

  return (
    <ActionCenterContext.Provider value={value}>
      {children}
      {dialog ? (
        <div className="action-overlay" role="presentation" onMouseDown={() => setDialog(null)}>
          <section className="action-dialog" role="dialog" aria-modal="true" aria-labelledby="action-dialog-title" onMouseDown={(event) => event.stopPropagation()}>
            <div className="action-dialog-head">
              <div>
                <span>AutoDeFi action</span>
                <h2 id="action-dialog-title">{dialog.title}</h2>
              </div>
              <button type="button" aria-label="Close dialog" onClick={() => setDialog(null)}>×</button>
            </div>
            <p>{dialog.message}</p>
            {dialog.details?.length ? <ul>{dialog.details.map((detail) => <li key={detail}>{detail}</li>)}</ul> : null}
            <div className="action-dialog-actions">
              <button type="button" className="btn btn-primary" onClick={() => setDialog(null)} autoFocus>Done</button>
            </div>
          </section>
        </div>
      ) : null}
      {toast ? <div className="action-toast" role="status">{toast}</div> : null}
    </ActionCenterContext.Provider>
  );
}

export function useActionCenter() {
  const value = useContext(ActionCenterContext);
  if (!value) throw new Error('useActionCenter must be used inside ActionCenterProvider');
  return value;
}
