import { Link } from 'react-router-dom';
import type { ReactNode } from 'react';

type Variant = 'primary' | 'secondary' | 'ghost' | 'outline';
type Size = 'sm' | 'md' | 'lg';

interface ButtonProps {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  to?: string;
  href?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
  disabled?: boolean;
  className?: string;
  fullWidth?: boolean;
}

const variantStyles: Record<Variant, string> = {
  primary:
    'bg-accent-600 text-white hover:bg-accent-700 shadow-lg shadow-accent-600/20 hover:shadow-accent-600/30 hover:-translate-y-0.5',
  secondary:
    'bg-black/[0.04] text-light-text border border-light-border hover:bg-black/[0.07] backdrop-blur-xl',
  ghost: 'text-light-muted hover:text-light-text hover:bg-black/[0.04]',
  outline:
    'border border-accent-600/40 text-accent-600 hover:bg-accent-600/8 hover:border-accent-600/60',
};

const sizeStyles: Record<Size, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-base',
};

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  to,
  href,
  onClick,
  type = 'button',
  disabled,
  className = '',
  fullWidth,
}: ButtonProps) {
  const base = `inline-flex items-center justify-center gap-2 font-medium rounded-xl transition-all duration-300 ease-out active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none ${variantStyles[variant]} ${sizeStyles[size]} ${fullWidth ? 'w-full' : ''} ${className}`;

  if (to) {
    return (
      <Link to={to} className={base} onClick={onClick}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={base} onClick={onClick} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={base} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}
