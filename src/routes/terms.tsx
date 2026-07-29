import { createFileRoute } from '@tanstack/react-router';
import { ShieldAlert } from 'lucide-react';

export const Route = createFileRoute('/terms')({
  component: TermsPage,
});

function TermsPage() {
  return (
    <div style={{ maxWidth: '42rem', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <div style={{ textAlign: 'center' }}>
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.25rem 0.75rem',
            borderRadius: '9999px',
            background: 'var(--surface-2)',
            border: '1px solid var(--border)',
            fontSize: '0.6875rem',
            fontWeight: 700,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'var(--text-2)',
            marginBottom: '1rem',
          }}
        >
          <ShieldAlert style={{ width: '0.75rem', height: '0.75rem' }} />
          <span>Legal Agreement</span>
        </div>
        <h1
          style={{
            fontFamily: 'Bricolage Grotesque, sans-serif',
            fontSize: '2.25rem',
            fontWeight: 800,
            color: 'var(--text)',
            marginBottom: '0.5rem',
          }}
        >
          Terms of Service
        </h1>
        <p style={{ fontSize: '0.875rem', color: 'var(--text-2)' }}>
          Last updated: July 2026
        </p>
      </div>

      <div
        className="card-shell"
        style={{ padding: '1px', borderRadius: '1.5rem' }}
      >
        <div
          className="card-inner"
          style={{
            padding: '2rem',
            borderRadius: 'calc(1.5rem - 1px)',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
            fontSize: '0.875rem',
            lineHeight: 1.7,
            color: 'var(--text-2)',
          }}
        >
          <section>
            <h3 style={{ fontFamily: 'Bricolage Grotesque, sans-serif', fontSize: '1.125rem', fontWeight: 700, color: 'var(--text)', marginBottom: '0.5rem' }}>
              1. Acceptance of Terms
            </h3>
            <p>
              By accessing or using ToolHub, you agree to be bound by these Terms of Service. If you do not agree to all terms, you may not use the services.
            </p>
          </section>

          <section>
            <h3 style={{ fontFamily: 'Bricolage Grotesque, sans-serif', fontSize: '1.125rem', fontWeight: 700, color: 'var(--text)', marginBottom: '0.5rem' }}>
              2. Fair Use & Access
            </h3>
            <p>
              ToolHub provides free access to generative utilities and calculation engines. You agree to use the site solely for lawful purposes and not to perform automated DDoS, malicious scraping, or abuse of platform infrastructure.
            </p>
          </section>

          <section>
            <h3 style={{ fontFamily: 'Bricolage Grotesque, sans-serif', fontSize: '1.125rem', fontWeight: 700, color: 'var(--text)', marginBottom: '0.5rem' }}>
              3. Calculation Disclaimer
            </h3>
            <p>
              Calculators on ToolHub are provided for informational and educational purposes only. Financial, health, or construction calculations do not constitute professional advice. Always verify crucial data with certified professionals.
            </p>
          </section>

          <section>
            <h3 style={{ fontFamily: 'Bricolage Grotesque, sans-serif', fontSize: '1.125rem', fontWeight: 700, color: 'var(--text)', marginBottom: '0.5rem' }}>
              4. Intellectual Property
            </h3>
            <p>
              Names, outputs, and generated text produced by our tools belong to you. The underlying brand, UI components, design tokens, and source code are protected by intellectual property laws.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
