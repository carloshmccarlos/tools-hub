import { Link } from '@tanstack/react-router';

export function Header({ onOpenSearch }: { onOpenSearch?: () => void }) {
  return (
    <header
      style={{
        position: 'sticky',
        top: '0',
        zIndex: 50,
        display: 'flex',
        justifyContent: 'center',
        padding: '0',
      }}
    >
      <div
        className="nav-pill"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 'var(--space-xl)',
          padding: 'var(--space-md) var(--space-xl)',
          width: '100%',
          maxWidth: '100%',
          borderLeft: 'none',
          borderRight: 'none',
          borderTop: 'none',
          background: 'var(--bg)',
        }}
      >
        {/* Logo */}
        <Link
          to="/"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 'var(--space-md)',
            textDecoration: 'none',
            flexShrink: 0,
          }}
        >
          <span
            style={{
              width: '2rem',
              height: '2rem',
              background: 'var(--text)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1rem',
              fontWeight: 900,
              color: 'var(--bg)',
              fontFamily: 'Cabinet Grotesk, sans-serif',
              flexShrink: 0,
            }}
          >
            TH
          </span>
          <span
            style={{
              fontFamily: 'Cabinet Grotesk, sans-serif',
              fontWeight: 900,
              fontSize: '1.25rem',
              letterSpacing: '0.02em',
              color: 'var(--text)',
              textTransform: 'uppercase',
            }}
          >
            ToolHub
          </span>
        </Link>

        {/* Desktop Nav & Quick Search */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-xl)' }}>


          <nav style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-lg)' }}>
            {[
              { to: '/', label: 'Tools' },
              { to: '/about', label: 'About' },
              { to: '/contact', label: 'Contact' },
            ].map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                style={{
                  fontSize: '0.875rem',
                  fontFamily: 'Satoshi, sans-serif',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  color: 'var(--text)',
                  textDecoration: 'none',
                  transition: 'color 0.2s ease',
                }}
              >
                {label}
              </Link>
            ))}


          </nav>
        </div>
      </div>
    </header>
  );
}
