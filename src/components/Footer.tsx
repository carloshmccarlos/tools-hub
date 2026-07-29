import { Link } from '@tanstack/react-router';

export function Footer() {
  return (
    <footer
      style={{
        borderTop: '2px solid var(--border)',
        padding: 'var(--space-4xl) var(--space-xl) var(--space-2xl) var(--space-xl)',
        marginTop: 'auto',
        background: 'var(--bg)',
      }}
    >
      <div
        style={{
          maxWidth: '72rem',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: 'var(--space-2xl)',
          paddingBottom: 'var(--space-2xl)',
          borderBottom: '1px solid var(--border)',
        }}
      >
        {/* Brand Column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-sm)' }}>
            <span
              style={{
                width: '1.75rem',
                height: '1.75rem',
                background: 'var(--text)',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                color: 'var(--bg)',
                fontFamily: 'Cabinet Grotesk, sans-serif',
                fontWeight: 900,
                fontSize: '0.875rem'
              }}
            >
              TH
            </span>
            <span style={{ fontFamily: 'Cabinet Grotesk, sans-serif', fontWeight: 900, fontSize: '1.25rem', color: 'var(--text)', textTransform: 'uppercase' }}>
              ToolHub
            </span>
          </div>
          <p style={{ fontSize: '0.875rem', lineHeight: 1.6, color: 'var(--text-2)', maxWidth: '18rem', fontFamily: 'Satoshi, sans-serif' }}>
            Unified directory of curated AI name generators and domain-tuned calculators.
          </p>

          {/* Operational Status Indicator */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 'var(--space-sm)',
              marginTop: 'var(--space-xs)',
              padding: 'var(--space-xs) var(--space-sm)',
              background: 'transparent',
              border: '1px solid var(--border)',
              width: 'fit-content',
            }}
          >
            <span
              style={{
                width: '0.5rem',
                height: '0.5rem',
                background: 'var(--accent-calc)',
              }}
            />
            <span style={{ fontSize: '0.75rem', fontFamily: 'Satoshi, sans-serif', fontWeight: 700, color: 'var(--text-2)', textTransform: 'uppercase' }}>
              All Systems Operational
            </span>
          </div>
        </div>

        {/* Hubs Column */}
        <div>
          <h4 style={{ fontSize: '0.875rem', fontFamily: 'Satoshi, sans-serif', fontWeight: 700, color: 'var(--text)', marginBottom: 'var(--space-md)', textTransform: 'uppercase' }}>
            Platforms
          </h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)' }}>
            <li>
              <a
                href="https://names.317713.xyz"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontSize: '0.875rem', fontFamily: 'Satoshi, sans-serif', color: 'var(--text-2)', textDecoration: 'none' }}
              >
                Name Hub (23+ Generators) ↗
              </a>
            </li>
            <li>
              <a
                href="https://calculators.317713.xyz"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontSize: '0.875rem', fontFamily: 'Satoshi, sans-serif', color: 'var(--text-2)', textDecoration: 'none' }}
              >
                Calc Hub (34+ Calculators) ↗
              </a>
            </li>
          </ul>
        </div>

        {/* Platform Column */}
        <div>
          <h4 style={{ fontSize: '0.875rem', fontFamily: 'Satoshi, sans-serif', fontWeight: 700, color: 'var(--text)', marginBottom: 'var(--space-md)', textTransform: 'uppercase' }}>
            Company & Resources
          </h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)' }}>
            <li>
              <Link to="/about" style={{ fontSize: '0.875rem', fontFamily: 'Satoshi, sans-serif', color: 'var(--text-2)', textDecoration: 'none' }}>
                About ToolHub
              </Link>
            </li>
            <li>
              <Link to="/contact" style={{ fontSize: '0.875rem', fontFamily: 'Satoshi, sans-serif', color: 'var(--text-2)', textDecoration: 'none' }}>
                Request a Tool / Feedback
              </Link>
            </li>
          </ul>
        </div>

        {/* Legal Column */}
        <div>
          <h4 style={{ fontSize: '0.875rem', fontFamily: 'Satoshi, sans-serif', fontWeight: 700, color: 'var(--text)', marginBottom: 'var(--space-md)', textTransform: 'uppercase' }}>
            Legal & Compliance
          </h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)' }}>
            <li>
              <Link to="/privacy" style={{ fontSize: '0.875rem', fontFamily: 'Satoshi, sans-serif', color: 'var(--text-2)', textDecoration: 'none' }}>
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/terms" style={{ fontSize: '0.875rem', fontFamily: 'Satoshi, sans-serif', color: 'var(--text-2)', textDecoration: 'none' }}>
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div
        style={{
          maxWidth: '72rem',
          margin: 'var(--space-xl) auto 0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontSize: '0.75rem',
          fontFamily: 'Satoshi, sans-serif',
          color: 'var(--text-3)',
          textTransform: 'uppercase',
        }}
      >
        <span>© {new Date().getFullYear()} ToolHub. All rights reserved.</span>
        <span>Built with TanStack Start & Vite</span>
      </div>
    </footer>
  );
}
