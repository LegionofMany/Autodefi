import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import type { FormEvent, ReactNode } from 'react';

export type ActionValue = string | boolean;

export type ActionField = {
  id: string;
  label: string;
  type?: 'text' | 'number' | 'textarea' | 'select' | 'checkbox';
  placeholder?: string;
  options?: readonly string[];
  defaultValue?: ActionValue;
  required?: boolean;
};

type ActionDialog = {
  title: string;
  message: string;
  details?: readonly string[];
  fields?: readonly ActionField[];
  submitLabel?: string;
  successMessage?: string;
  onSubmit?: (values: Record<string, ActionValue>) => void;
  danger?: boolean;
};

type OpenWorkflowOptions = Omit<ActionDialog, 'title' | 'message'> & {
  title: string;
  message: string;
};

type ActionCenterValue = {
  openAction: (title: string, message: string, details?: readonly string[]) => void;
  openWorkflow: (options: OpenWorkflowOptions) => void;
  notify: (message: string) => void;
  downloadCsv: (filename: string, rows: readonly (readonly string[])[]) => void;
  copyText: (label: string, value: string) => Promise<void>;
};

const ActionCenterContext = createContext<ActionCenterValue | null>(null);

function csvCell(value: string) {
  return `"${value.split('"').join('""')}"`;
}

function initialValues(fields: readonly ActionField[] = []) {
  return Object.fromEntries(fields.map((field) => [field.id, field.defaultValue ?? (field.type === 'checkbox' ? false : '')]));
}

function rememberFrontendAction(title: string, values: Record<string, ActionValue>) {
  try {
    const key = 'autodefi.frontend.actions.v1';
    const previous = JSON.parse(window.localStorage.getItem(key) || '[]') as unknown[];
    const next = [{ title, values, createdAt: new Date().toISOString() }, ...previous].slice(0, 50);
    window.localStorage.setItem(key, JSON.stringify(next));
  } catch {
    // The interface remains usable when storage is blocked by browser privacy settings.
  }
}

export function ActionCenterProvider({ children }: { children: ReactNode }) {
  const [dialog, setDialog] = useState<ActionDialog | null>(null);
  const [values, setValues] = useState<Record<string, ActionValue>>({});
  const [formError, setFormError] = useState('');
  const [toast, setToast] = useState('');

  const openAction = useCallback((title: string, message: string, details?: readonly string[]) => {
    setValues({});
    setFormError('');
    setDialog({ title, message, details });
  }, []);

  const openWorkflow = useCallback((options: OpenWorkflowOptions) => {
    setValues(initialValues(options.fields));
    setFormError('');
    setDialog(options);
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

  const copyText = useCallback(async (label: string, value: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setToast(`${label} copied`);
    } catch {
      setToast(`Copy unavailable. ${value}`);
    }
  }, []);

  const submitWorkflow = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!dialog) return;
    if (!dialog.onSubmit) {
      setDialog(null);
      return;
    }
    const missing = dialog.fields?.find((field) => field.required && !values[field.id]);
    if (missing) {
      setFormError(`${missing.label} is required.`);
      return;
    }
    dialog.onSubmit?.(values);
    rememberFrontendAction(dialog.title, values);
    setToast(dialog.successMessage || `${dialog.title} saved`);
    setDialog(null);
  };

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

  const value = useMemo(() => ({ openAction, openWorkflow, notify, downloadCsv, copyText }), [copyText, downloadCsv, notify, openAction, openWorkflow]);

  return (
    <ActionCenterContext.Provider value={value}>
      {children}
      {dialog ? (
        <div className="action-overlay" role="presentation" onMouseDown={() => setDialog(null)}>
          <form className="action-dialog" role="dialog" aria-modal="true" aria-labelledby="action-dialog-title" onSubmit={submitWorkflow} onMouseDown={(event) => event.stopPropagation()}>
            <div className="action-dialog-head">
              <div>
                <span>AutoDeFi action</span>
                <h2 id="action-dialog-title">{dialog.title}</h2>
              </div>
              <button type="button" aria-label="Close dialog" onClick={() => setDialog(null)}>×</button>
            </div>
            <p>{dialog.message}</p>
            {dialog.details?.length ? <ul>{dialog.details.map((detail) => <li key={detail}>{detail}</li>)}</ul> : null}
            {dialog.fields?.length ? (
              <div className="action-form-grid">
                {dialog.fields.map((field) => field.type === 'checkbox' ? (
                  <label className="action-checkbox" key={field.id}>
                    <input type="checkbox" checked={Boolean(values[field.id])} onChange={(event) => setValues((current) => ({ ...current, [field.id]: event.target.checked }))} />
                    <span>{field.label}</span>
                  </label>
                ) : (
                  <label key={field.id}>
                    <span>{field.label}{field.required ? ' *' : ''}</span>
                    {field.type === 'textarea' ? (
                      <textarea value={String(values[field.id] ?? '')} placeholder={field.placeholder} onChange={(event) => setValues((current) => ({ ...current, [field.id]: event.target.value }))} />
                    ) : field.type === 'select' ? (
                      <select value={String(values[field.id] ?? '')} onChange={(event) => setValues((current) => ({ ...current, [field.id]: event.target.value }))}>
                        <option value="">Select an option</option>
                        {field.options?.map((option) => <option key={option} value={option}>{option}</option>)}
                      </select>
                    ) : (
                      <input type={field.type === 'number' ? 'number' : 'text'} value={String(values[field.id] ?? '')} placeholder={field.placeholder} onChange={(event) => setValues((current) => ({ ...current, [field.id]: event.target.value }))} />
                    )}
                  </label>
                ))}
              </div>
            ) : null}
            {formError ? <p className="action-form-error" role="alert">{formError}</p> : null}
            <div className="action-dialog-actions">
              {dialog.onSubmit ? <button type="button" className="btn btn-ghost" onClick={() => setDialog(null)}>Cancel</button> : null}
              <button type="submit" className={`btn ${dialog.danger ? 'btn-danger' : 'btn-primary'}`} autoFocus={!dialog.fields?.length}>
                {dialog.onSubmit ? dialog.submitLabel || 'Save' : 'Done'}
              </button>
            </div>
          </form>
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
