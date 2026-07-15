import { ReactNode } from 'react';

interface CardProps {
  header?: ReactNode;
  footer?: ReactNode;
  children: ReactNode;
  className?: string;
}

export function Card({ header, footer, children, className = '' }: CardProps) {
  return (
    <div
      className={`rounded-xl border border-stellar-border bg-stellar-card ${className}`}
    >
      {header && (
        <div className="border-b border-stellar-border px-6 py-4">
          <h3 className="text-lg font-semibold text-white">{header}</h3>
        </div>
      )}
      <div className="px-6 py-4">{children}</div>
      {footer && (
        <div className="border-t border-stellar-border px-6 py-3">
          {footer}
        </div>
      )}
    </div>
  );
}
