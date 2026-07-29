import { useState, useEffect, useRef } from 'react';
import { Search, X, ArrowRight, Type, Calculator } from 'lucide-react';
import { TOOLS } from '../data/tools';
import { ToolMeta } from '../types/tool';

export function QuickSearchModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const filtered = query.trim()
    ? TOOLS.filter(
        (t) =>
          t.name.toLowerCase().includes(query.toLowerCase()) ||
          t.description.toLowerCase().includes(query.toLowerCase()) ||
          t.category.toLowerCase().includes(query.toLowerCase())
      )
    : TOOLS.slice(0, 8); // Top default suggestions

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setQuery('');
      setSelectedIndex(0);
    }
  }, [isOpen]);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (!isOpen) return;
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % (filtered.length || 1));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + (filtered.length || 1)) % (filtered.length || 1));
      } else if (e.key === 'Enter' && filtered[selectedIndex]) {
        e.preventDefault();
        window.open(filtered[selectedIndex].externalUrl, '_blank');
        onClose();
      }
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, filtered, selectedIndex, onClose]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: '100%',
          maxWidth: '38rem',
          background: 'var(--surface)',
          border: '1px solid var(--border)',
          borderRadius: '1.25rem',
          boxShadow: '0 24px 60px oklch(0 0 0 / 0.4)',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* Search Input Bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            padding: '1rem 1.25rem',
            borderBottom: '1px solid var(--border)',
          }}
        >
          <Search style={{ width: '1.125rem', height: '1.125rem', color: 'var(--text-3)' }} />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            placeholder="Type a tool name or category... (e.g. 401k, Skyrim, Percentage)"
            style={{
              flex: 1,
              background: 'transparent',
              border: 'none',
              outline: 'none',
              color: 'var(--text)',
              fontSize: '0.9375rem',
            }}
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery('')}
              style={{
                background: 'transparent',
                border: 'none',
                color: 'var(--text-3)',
                cursor: 'pointer',
                padding: '0.2rem',
              }}
            >
              <X style={{ width: '1rem', height: '1rem' }} />
            </button>
          )}
          <span className="kbd">ESC</span>
        </div>

        {/* Search Results List */}
        <div style={{ maxHeight: '22rem', overflowY: 'auto', padding: '0.5rem' }}>
          {filtered.length > 0 ? (
            filtered.map((tool: ToolMeta, idx: number) => {
              const isSelected = idx === selectedIndex;
              const isCalc = tool.site === 'calculator';
              return (
                <a
                  key={tool.id}
                  href={tool.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={onClose}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0.75rem 1rem',
                    borderRadius: '0.75rem',
                    textDecoration: 'none',
                    background: isSelected ? 'var(--surface-2)' : 'transparent',
                    border: '1px solid',
                    borderColor: isSelected ? 'var(--border)' : 'transparent',
                    transition: 'all 0.15s ease',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div
                      style={{
                        width: '2rem',
                        height: '2rem',
                        borderRadius: '0.5rem',
                        background: isCalc ? 'oklch(0.72 0.17 162 / 0.15)' : 'oklch(0.64 0.18 270 / 0.15)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: isCalc ? 'var(--accent-calc-light)' : 'var(--accent-name-light)',
                        fontSize: '0.75rem',
                      }}
                    >
                      {isCalc ? <Calculator style={{ width: '1rem', height: '1rem' }} /> : <Type style={{ width: '1rem', height: '1rem' }} />}
                    </div>
                    <div>
                      <div style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text)' }}>
                        {tool.name}
                      </div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-3)', display: '-webkit-box', WebkitLineClamp: 1, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                        {tool.description}
                      </div>
                    </div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span className="badge">{tool.category}</span>
                    <ArrowRight style={{ width: '0.875rem', height: '0.875rem', color: isSelected ? 'var(--text-2)' : 'transparent' }} />
                  </div>
                </a>
              );
            })
          ) : (
            <div style={{ padding: '2rem', textAlign: 'center', color: 'var(--text-3)', fontSize: '0.875rem' }}>
              No tools matching "{query}"
            </div>
          )}
        </div>

        {/* Modal Footer hints */}
        <div
          style={{
            padding: '0.625rem 1.25rem',
            borderTop: '1px solid var(--border)',
            background: 'var(--surface-2)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            fontSize: '0.75rem',
            color: 'var(--text-3)',
          }}
        >
          <div style={{ display: 'flex', gap: '0.75rem' }}>
            <span><span className="kbd">↑</span> <span className="kbd">↓</span> to navigate</span>
            <span><span className="kbd">↵</span> to launch</span>
          </div>
          <span>{TOOLS.length} total utilities registered</span>
        </div>
      </div>
    </div>
  );
}
