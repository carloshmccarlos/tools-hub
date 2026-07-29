import { useState } from 'react';
import { createFileRoute } from '@tanstack/react-router';
import { Send, CheckCircle2, MessageSquare, Sparkles } from 'lucide-react';

export const Route = createFileRoute('/contact')({
  component: ContactPage,
});

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    type: 'tool-request',
    name: '',
    email: '',
    message: '',
  });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!formData.message.trim()) return;
    setSubmitted(true);
  }

  return (
    <div style={{ maxWidth: '38rem', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
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
          <MessageSquare style={{ width: '0.75rem', height: '0.75rem' }} />
          <span>Get In Touch</span>
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
          Request a Tool or Feedback
        </h1>
        <p style={{ fontSize: '0.875rem', color: 'var(--text-2)', lineHeight: 1.6 }}>
          Have an idea for a new generator or financial calculator? We build tools based on user community demand.<br/>
          Or email us directly at <a href="mailto:feedback@loveyouall.qzz.io" style={{ color: 'var(--text)', fontWeight: 600, textDecoration: 'underline' }}>feedback@loveyouall.qzz.io</a>
        </p>
      </div>

      {submitted ? (
        <div
          style={{
            padding: '3rem 2rem',
            borderRadius: '1.5rem',
            background: 'var(--surface-2)',
            border: '1px solid var(--border)',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1rem',
          }}
        >
          <div
            style={{
              width: '3rem',
              height: '3rem',
              borderRadius: '9999px',
              background: 'oklch(0.72 0.17 162 / 0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--accent-calc)',
            }}
          >
            <CheckCircle2 style={{ width: '1.75rem', height: '1.75rem' }} />
          </div>
          <h3 style={{ fontFamily: 'Bricolage Grotesque, sans-serif', fontSize: '1.25rem', fontWeight: 700, color: 'var(--text)' }}>
            Thank You for Your Feedback!
          </h3>
          <p style={{ fontSize: '0.8125rem', color: 'var(--text-2)', maxWidth: '24rem', lineHeight: 1.6 }}>
            Your request has been received. Our team regularly reviews suggestions to expand the Tool Hub directory.
          </p>
          <button
            type="button"
            onClick={() => {
              setSubmitted(false);
              setFormData({ type: 'tool-request', name: '', email: '', message: '' });
            }}
            style={{
              marginTop: '0.5rem',
              padding: '0.5rem 1.25rem',
              borderRadius: '9999px',
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              fontSize: '0.8125rem',
              fontWeight: 600,
              color: 'var(--text)',
              cursor: 'pointer',
            }}
          >
            Send Another Message
          </button>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
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
              gap: '1.25rem',
            }}
          >
            <div>
              <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-2)', marginBottom: '0.4rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Topic Type
              </label>
              <select
                value={formData.type}
                onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem',
                  borderRadius: '0.75rem',
                  background: 'var(--surface-2)',
                  border: '1px solid var(--border)',
                  color: 'var(--text)',
                  fontSize: '0.875rem',
                  outline: 'none',
                }}
              >
                <option value="tool-request">New Tool Request</option>
                <option value="feedback">General Feedback</option>
                <option value="bug">Report a Bug</option>
                <option value="other">Other Inquiry</option>
              </select>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-2)', marginBottom: '0.4rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Your Name (Optional)
              </label>
              <input
                type="text"
                placeholder="e.g. Alex"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem',
                  borderRadius: '0.75rem',
                  background: 'var(--surface-2)',
                  border: '1px solid var(--border)',
                  color: 'var(--text)',
                  fontSize: '0.875rem',
                  outline: 'none',
                }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-2)', marginBottom: '0.4rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Email Address (Optional)
              </label>
              <input
                type="email"
                placeholder="alex@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem',
                  borderRadius: '0.75rem',
                  background: 'var(--surface-2)',
                  border: '1px solid var(--border)',
                  color: 'var(--text)',
                  fontSize: '0.875rem',
                  outline: 'none',
                }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-2)', marginBottom: '0.4rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Details & Description *
              </label>
              <textarea
                required
                rows={4}
                placeholder="Describe the tool or feature you would like to see added..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem',
                  borderRadius: '0.75rem',
                  background: 'var(--surface-2)',
                  border: '1px solid var(--border)',
                  color: 'var(--text)',
                  fontSize: '0.875rem',
                  outline: 'none',
                  resize: 'vertical',
                }}
              />
            </div>

            <button
              type="submit"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                padding: '0.875rem 1.5rem',
                borderRadius: '0.75rem',
                background: 'var(--accent-name)',
                color: 'white',
                fontWeight: 700,
                fontSize: '0.875rem',
                border: 'none',
                cursor: 'pointer',
                transition: 'opacity 0.2s ease',
              }}
            >
              <Send style={{ width: '1rem', height: '1rem' }} />
              Submit Request
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
