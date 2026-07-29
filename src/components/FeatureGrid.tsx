import { Cpu, Shield, Sparkles, Layers } from 'lucide-react';

export function FeatureGrid() {
  const features = [
    {
      icon: Cpu,
      title: 'Domain-Tuned Algorithms',
      description: 'Each generator and calculator is engineered with specialized phonetic matrices or standard financial formulas.',
    },
    {
      icon: Shield,
      title: 'Zero Tracking & Privacy First',
      description: 'Your session data stays strictly inside your browser sandbox. No persistent tracking or mandatory registrations.',
    },
    {
      icon: Sparkles,
      title: 'Direct Standalone Launch',
      description: 'One click opens full-featured utility suites optimized for desktop, mobile, and rapid workflow integration.',
    },
  ];

  return (
    <section style={{ margin: 'var(--space-4xl) 0 var(--space-2xl) 0' }}>
      <div style={{ textAlign: 'left', marginBottom: 'var(--space-2xl)' }}>
        <div className="eyebrow-pill" style={{ marginBottom: 'var(--space-md)' }}>
          <Layers style={{ width: '0.875rem', height: '0.875rem' }} />
          <span>Core Platform Architecture</span>
        </div>
        <h2
          style={{
            fontFamily: 'Cabinet Grotesk, sans-serif',
            fontSize: '2rem',
            fontWeight: 900,
            letterSpacing: '0.02em',
            color: 'var(--text)',
            marginBottom: 'var(--space-sm)',
            textTransform: 'uppercase',
          }}
        >
          Built for Velocity & Precision
        </h2>
        <p style={{ fontSize: '1rem', color: 'var(--text-2)', maxWidth: '32rem', fontFamily: 'Satoshi, sans-serif' }}>
          Explore the core design principles that make Tool Hub the premier studio for naming and math.
        </p>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 'var(--space-xl)',
        }}
      >
        {features.map((feat, idx) => {
          const Icon = feat.icon;
          return (
            <div
              key={idx}
              className="card-shell"
              style={{ 
                padding: 'var(--space-2xl)', 
                display: 'flex',
                flexDirection: 'column',
                gap: 'var(--space-lg)'
              }}
            >
              <div
                style={{
                  width: '3rem',
                  height: '3rem',
                  background: 'var(--surface-2)',
                  border: '1px solid var(--border)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--text)',
                }}
              >
                <Icon style={{ width: '1.25rem', height: '1.25rem' }} />
              </div>
              <div>
                <h3
                  style={{
                    fontFamily: 'Cabinet Grotesk, sans-serif',
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    color: 'var(--text)',
                    marginBottom: 'var(--space-sm)'
                  }}
                >
                  {feat.title}
                </h3>
                <p style={{ fontSize: '0.875rem', lineHeight: 1.6, color: 'var(--text-2)', margin: 0, fontFamily: 'Satoshi, sans-serif' }}>
                  {feat.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
