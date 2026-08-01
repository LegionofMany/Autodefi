import type { ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
  variant?: 'primary' | 'ghost' | 'danger';
  onClick: () => void;
  className?: string;
  ariaLabel?: string;
  disabled?: boolean;
};

export function Button({ children, variant = 'primary', onClick, className = '', ariaLabel, disabled = false }: ButtonProps) {
  return (
    <button className={`btn btn-${variant} ${className}`} onClick={onClick} type="button" aria-label={ariaLabel} disabled={disabled}>
      {children}
    </button>
  );
}
