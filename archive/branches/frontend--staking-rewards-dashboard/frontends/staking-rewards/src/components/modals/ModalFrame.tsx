import type { ReactNode } from 'react';
import closeIcon from '../../assets/svg/icon-close.svg';

interface Props {
  title: string;
  subtitle?: string;
  width?: 'md' | 'lg';
  children: ReactNode;
  onClose: () => void;
}

export function ModalFrame({ title, subtitle, width = 'md', children, onClose }: Props) {
  return (
    <div className="modal-backdrop" role="presentation">
      <section className={`modal-frame ${width}`} role="dialog" aria-modal="true" aria-label={title}>
        <button className="modal-close" onClick={onClose} aria-label="Close"><img src={closeIcon} alt="" /></button>
        <header className="modal-header">
          <h2>{title}</h2>
          {subtitle && <p>{subtitle}</p>}
        </header>
        {children}
      </section>
    </div>
  );
}
