import { createFileRoute, Link } from '@tanstack/react-router';
import { Sparkles, ArrowRight, ShieldCheck, Zap } from 'lucide-react';

export const Route = createFileRoute('/about')({
  head: () => ({
    meta: [
      { title: 'About — ToolHub Platform' },
      { name: 'description', content: 'Learn about ToolHub unified directory of AI name generators and calculators.' },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
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
          <Sparkles style={{ width: '0.75rem', height: '0.75rem' }} />
          <span>Platform Mission</span>
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
          About ToolHub
        </h1>
        <p style={{ fontSize: '0.875rem', color: 'var(--text-2)', lineHeight: 1.6 }}>
          Building the cleanest, fastest, and most useful directory of online generators and calculators.
        </p>
      </div>

      <div className="card-shell" style={{ padding: '1px', borderRadius: '1.5rem' }}>
        <div
          className="card-inner"
          style={{
            padding: '2rem',
            borderRadius: 'calc(1.5rem - 1px)',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.25rem',
            fontSize: '0.875rem',
            lineHeight: 1.7,
            color: 'var(--text-2)',
          }}
        >
          <p>
            <strong style={{ color: 'var(--text)' }}>ToolHub</strong> was launched with a single objective: to eliminate bloated, ad-cluttered tool websites and replace them with high-end, client-side utility platforms.
          </p>
          <p>
            We operate two dedicated utility ecosystems:
          </p>
          <ul style={{ paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <li>
              <strong style={{ color: 'var(--accent-name-light)' }}>Generative Naming Hub (23+ Tools):</strong> Advanced phonetic, cultural, and context-aware name generators for gaming, writing, branding, and world-building.
            </li>
            <li>
              <strong style={{ color: 'var(--accent-calc-light)' }}>Precision Calculator Hub (34+ Tools):</strong> Financial, construction, health, and statistical calculators built for instant accuracy.
            </li>
          </ul>

          <div
            style={{
              padding: '1.25rem',
              borderRadius: '1rem',
              background: 'var(--surface-2)',
              border: '1px solid var(--border)',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.75rem',
              marginTop: '0.5rem',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text)', fontWeight: 700 }}>
              <ShieldCheck style={{ width: '1.125rem', height: '1.125rem', color: 'var(--accent-calc-light)' }} />
              <span>Zero Privacy Compromise</span>
            </div>
            <p style={{ fontSize: '0.8125rem', lineHeight: 1.6, color: 'var(--text-2)', margin: 0 }}>
              Your calculations and generated data run entirely within your local browser sandbox. No user tracking, server storage, or selling of personal data.
            </p>
          </div>

          <div style={{ paddingTop: '0.5rem', display: 'flex', justifyContent: 'center' }}>
            <Link
              to="/"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.75rem 1.5rem',
                borderRadius: '9999px',
                background: 'var(--text)',
                color: 'var(--bg)',
                fontSize: '0.875rem',
                fontWeight: 700,
                textDecoration: 'none',
              }}
            >
              <span>Explore Directory</span>
              <ArrowRight style={{ width: '0.875rem', height: '0.875rem' }} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
