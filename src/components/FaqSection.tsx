import { HelpCircle } from 'lucide-react';

export function FaqSection() {
  const faqs = [
    {
      q: 'Are all tools completely free to use?',
      a: 'Yes, 100% free. No account registration, premium paywalls, or hidden subscription costs are required.',
    },
    {
      q: 'How are name generator results generated?',
      a: 'Our generators rely on authentic cultural dictionaries, phonetic syllable rules, and seedable procedural algorithms to craft meaningful titles.',
    },
    {
      q: 'Are calculator computations accurate and private?',
      a: 'All calculations utilize standard financial, engineering, and mathematical formulas executed directly within your browser session.',
    },
    {
      q: 'Can I bookmark or save my favorite tools?',
      a: 'Yes! Simply click the star icon on any tool card to add it to your Pinned Favorites list stored in your browser.',
    },
  ];

  return (
    <section style={{ margin: 'var(--space-4xl) 0 var(--space-4xl) 0' }}>
      <div style={{ textAlign: 'left', marginBottom: 'var(--space-2xl)' }}>
        <div className="eyebrow-pill" style={{ marginBottom: 'var(--space-md)' }}>
          <HelpCircle style={{ width: '0.875rem', height: '0.875rem' }} />
          <span>Frequently Asked Questions</span>
        </div>
        <h2
          style={{
            fontFamily: 'Cabinet Grotesk, sans-serif',
            fontSize: '2rem',
            fontWeight: 900,
            letterSpacing: '0.02em',
            color: 'var(--text)',
            textTransform: 'uppercase',
          }}
        >
          Got Questions? We Have Answers.
        </h2>
      </div>

      <div 
        style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: 'var(--space-2xl)' 
        }}
      >
        {faqs.map((faq, idx) => (
          <div key={idx} style={{ padding: '0', display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)' }}>
            <h3
              style={{
                fontFamily: 'Cabinet Grotesk, sans-serif',
                fontSize: '1.25rem',
                fontWeight: 700,
                color: 'var(--text)',
              }}
            >
              {faq.q}
            </h3>
            <p
              style={{
                fontSize: '1rem',
                lineHeight: 1.6,
                color: 'var(--text-2)',
                fontFamily: 'Satoshi, sans-serif',
              }}
            >
              {faq.a}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
