import { Zap, ShieldCheck, Sparkles, CheckCircle2 } from 'lucide-react';

export function HeroStats() {
  const stats = [
    { icon: Sparkles, label: '57+ Curated Tools', desc: 'Domain-tuned generators & calculators' },
    { icon: ShieldCheck, label: 'Client-Side Privacy', desc: 'Zero data logging or server tracking' },
    { icon: Zap, label: 'Instant Execution', desc: 'Real-time computation & generation' },
    { icon: CheckCircle2, label: '100% Free Access', desc: 'No accounts or subscriptions required' },
  ];

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-md)',
        width: '100%',
        maxWidth: '24rem',
      }}
    >
      {stats.map((item, idx) => {
        const Icon = item.icon;
        return (
          <div
            key={idx}
            className="card-shell"
            style={{ 
              padding: 'var(--space-md) var(--space-lg)',
              display: 'flex',
              alignItems: 'center',
              gap: 'var(--space-md)',
            }}
          >
            <div
              style={{
                width: '2rem',
                height: '2rem',
                background: 'var(--text)',
                color: 'var(--bg)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <Icon style={{ width: '1rem', height: '1rem' }} />
            </div>
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontSize: '0.875rem', fontFamily: 'Cabinet Grotesk, sans-serif', fontWeight: 700, color: 'var(--text)', lineHeight: 1.2 }}>
                {item.label}
              </div>
              <div style={{ fontSize: '0.75rem', fontFamily: 'Satoshi, sans-serif', color: 'var(--text-2)', marginTop: '0.2rem', lineHeight: 1.4 }}>
                {item.desc}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
