import { Link } from 'react-router-dom';

interface LogoProps {
  className?: string;
  showText?: boolean;
}

export default function Logo({ className = '', showText = true }: LogoProps) {
  return (
    <Link to="/" className={`inline-flex items-center gap-2.5 group ${className}`}>
      <svg
        width="32"
        height="32"
        viewBox="0 0 64 64"
        fill="none"
        className="transition-transform duration-300 group-hover:scale-110"
      >
        <path
          d="M32 12L50 22V42L32 52L14 42V22L32 12Z"
          stroke="#2563eb"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
        <path
          d="M32 12L50 22L32 32L14 22L32 12Z"
          fill="#2563eb"
          fillOpacity="0.15"
        />
        <path d="M32 32V52" stroke="#60a5fa" strokeWidth="2.5" strokeLinejoin="round" />
        <path d="M23 27L32 32L41 27" stroke="#60a5fa" strokeWidth="2.5" strokeLinejoin="round" />
        <circle cx="32" cy="32" r="3" fill="#60a5fa" />
      </svg>
      {showText && (
        <span className="font-display font-bold text-lg tracking-[0.15em] text-light-text">
          CLOUDFORGE
        </span>
      )}
    </Link>
  );
}
