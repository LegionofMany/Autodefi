import type { ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
  variant?: 'primary' | 'ghost' | 'danger';
  onClick?: () => void;
  className?: string;
};

export function Button({ children, variant = 'primary', onClick, className = '' }: ButtonProps) {
  return (
    <button className={`btn btn-${variant} ${className}`} onClick={onClick} type="button">
      {children}
    </button>
  );
}
