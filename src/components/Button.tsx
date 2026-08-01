import { isValidElement } from 'react';
import type { ReactNode } from 'react';
import { useActionCenter } from './ActionCenter';

type ButtonProps = {
  children: ReactNode;
  variant?: 'primary' | 'ghost' | 'danger';
  onClick?: () => void;
  className?: string;
  ariaLabel?: string;
};

function buttonLabel(node: ReactNode): string {
  if (typeof node === 'string' || typeof node === 'number') return String(node);
  if (Array.isArray(node)) return node.map(buttonLabel).join(' ').trim();
  if (isValidElement<{ children?: ReactNode }>(node)) return buttonLabel(node.props.children);
  return 'This action';
}

export function Button({ children, variant = 'primary', onClick, className = '', ariaLabel }: ButtonProps) {
  const { openAction } = useActionCenter();
  const label = buttonLabel(children).replace(/\s+/g, ' ').trim();
  const handleClick = onClick || (() => openAction(
    label,
    `${label} is connected to the AutoDeFi interface. The transaction is ready for its live service or wallet endpoint.`,
    ['The frontend control is active.', 'No transaction is submitted without explicit confirmation.', 'Backend execution will be connected to the corresponding AutoDeFi service.'],
  ));

  return (
    <button className={`btn btn-${variant} ${className}`} onClick={handleClick} type="button" aria-label={ariaLabel}>
      {children}
    </button>
  );
}
