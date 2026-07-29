import { createFileRoute } from '@tanstack/react-router';
import { ShieldCheck } from 'lucide-react';

export const Route = createFileRoute('/privacy')({
  head: () => ({
    meta: [
      { title: 'Privacy Policy — ToolHub' },
      { name: 'description', content: 'ToolHub privacy policy detailing client-side zero tracking principles.' },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
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
          <ShieldCheck style={{ width: '0.75rem', height: '0.75rem' }} />
          <span>Security & Transparency</span>
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
          Privacy Policy
        </h1>
        <p style={{ fontSize: '0.875rem', color: 'var(--text-2)' }}>
          Effective Date: July 2026
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
            gap: '1.5rem',
            fontSize: '0.875rem',
            lineHeight: 1.7,
            color: 'var(--text-2)',
          }}
        >
          <section>
            <h3 style={{ fontFamily: 'Bricolage Grotesque, sans-serif', fontSize: '1.125rem', fontWeight: 700, color: 'var(--text)', marginBottom: '0.5rem' }}>
              1. Local-First Processing
            </h3>
            <p>
              At ToolHub, we prioritize user privacy. All computations, calculations, and name generation processes are executed directly inside your local web browser session. We do not store, transmit, or record your inputs on external servers.
            </p>
          </section>

          <section>
            <h3 style={{ fontFamily: 'Bricolage Grotesque, sans-serif', fontSize: '1.125rem', fontWeight: 700, color: 'var(--text)', marginBottom: '0.5rem' }}>
              2. Cookies & Local Storage
            </h3>
            <p>
              ToolHub uses standard browser <code>localStorage</code> exclusively to persist your UI preferences (such as Light/Dark theme mode) and your Starred Tool favorites. No personal identity cookies or tracking beacons are used.
            </p>
          </section>

          <section>
            <h3 style={{ fontFamily: 'Bricolage Grotesque, sans-serif', fontSize: '1.125rem', fontWeight: 700, color: 'var(--text)', marginBottom: '0.5rem' }}>
              3. Analytics
            </h3>
            <p>
              We may utilize aggregated, privacy-preserving web analytics (such as Cloudflare Analytics) to monitor platform health and uptime. This telemetry contains zero personally identifiable information (PII).
            </p>
          </section>

          <section>
            <h3 style={{ fontFamily: 'Bricolage Grotesque, sans-serif', fontSize: '1.125rem', fontWeight: 700, color: 'var(--text)', marginBottom: '0.5rem' }}>
              4. Contact Us
            </h3>
            <p>
              If you have any questions regarding privacy on ToolHub, please contact us at <a href="mailto:feedback@loveyouall.qzz.io" style={{ color: 'var(--accent-name-light)' }}>feedback@loveyouall.qzz.io</a> or visit our <a href="/contact" style={{ color: 'var(--accent-name-light)' }}>Contact Page</a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
