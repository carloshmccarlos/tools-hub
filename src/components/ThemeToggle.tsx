import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

export function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const stored = localStorage.getItem('toolhub-theme') as 'light' | 'dark' | null;
    const initial = stored || 'light';
    apply(initial);
    setTheme(initial);
  }, []);

  function apply(t: 'light' | 'dark') {
    const root = document.documentElement;
    if (t === 'light') {
      root.classList.remove('dark');
      root.classList.add('light');
    } else {
      root.classList.remove('light');
      root.classList.add('dark');
    }
  }

  function toggle() {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    localStorage.setItem('toolhub-theme', next);
    apply(next);
  }

  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      style={{
        width: '2.25rem', height: '2.25rem',
        borderRadius: '9999px',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        border: '1px solid var(--border)',
        background: 'var(--surface-2)',
        color: 'var(--text-2)',
        cursor: 'pointer',
        transition: 'all 0.25s cubic-bezier(0.25, 1, 0.5, 1)',
      }}
    >
      {theme === 'dark'
        ? <Sun style={{ width: '0.875rem', height: '0.875rem', color: 'oklch(0.82 0.16 72)' }} />
        : <Moon style={{ width: '0.875rem', height: '0.875rem' }} />
      }
    </button>
  );
}
