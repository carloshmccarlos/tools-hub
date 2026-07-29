import { useState } from 'react';
import { ToolCard } from './ToolCard';

export function SectionGrid({
  title,
  icon: Icon,
  tools,
  starredIds,
  onToggleStar,
}: {
  title: string;
  icon: any;
  tools: any[];
  starredIds: string[];
  onToggleStar: (id: string) => void;
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  if (tools.length === 0) return null;

  const hasMore = tools.length > 12;
  const displayedTools = isExpanded ? tools : tools.slice(0, 12);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-lg)' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <Icon style={{ width: '1.5rem', height: '1.5rem', color: 'var(--text)' }} />
        <h2 style={{ fontSize: '1.5rem', fontFamily: 'Cabinet Grotesk, sans-serif', fontWeight: 900, textTransform: 'uppercase', color: 'var(--text)', margin: 0 }}>
          {title}
        </h2>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: 'var(--space-lg)',
        }}
      >
        {displayedTools.map((tool) => (
          <ToolCard
            key={tool.id}
            tool={tool}
            isStarred={starredIds.includes(tool.id)}
            onToggleStar={onToggleStar}
          />
        ))}
      </div>

      {hasMore && (
        <div style={{ display: 'flex', justifyContent: 'center', position: 'relative', zIndex: 10 }}>
          <button
            type="button"
            onClick={() => setIsExpanded(!isExpanded)}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '0.75rem 2rem',
              background: 'var(--surface-2)',
              border: '1px solid var(--border-2)',
              color: 'var(--text)',
              fontSize: '0.875rem',
              fontFamily: 'Cabinet Grotesk, sans-serif',
              fontWeight: 700,
              textTransform: 'uppercase',
              cursor: 'pointer',
              userSelect: 'none',
              transition: 'all 0.2s ease',
              position: 'relative',
              zIndex: 10,
            }}
          >
            {isExpanded ? 'Show Less' : `Show All (${tools.length})`}
          </button>
        </div>
      )}
    </div>
  );
}
