import { Star } from 'lucide-react';

export function FavoritesSection({
  starredIds,
  activeFilter,
  onFilterChange,
}: {
  starredIds: string[];
  activeFilter: 'all' | 'starred';
  onFilterChange: (filter: 'all' | 'starred') => void;
}) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0.75rem 1.25rem',
        borderRadius: '1rem',
        background: 'var(--surface-2)',
        border: '1px solid var(--border)',
        margin: '1rem 0',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <Star style={{ width: '1rem', height: '1rem', color: 'oklch(0.85 0.18 85)' }} />
        <span style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--text-2)' }}>
          Pinned Favorites ({starredIds.length})
        </span>
      </div>

      <div style={{ display: 'flex', gap: '0.375rem' }}>
        <button
          type="button"
          onClick={() => onFilterChange('all')}
          style={{
            fontSize: '0.75rem',
            fontWeight: 600,
            padding: '0.25rem 0.75rem',
            borderRadius: '9999px',
            border: '1px solid',
            borderColor: activeFilter === 'all' ? 'var(--border-2)' : 'transparent',
            background: activeFilter === 'all' ? 'var(--surface)' : 'transparent',
            color: activeFilter === 'all' ? 'var(--text)' : 'var(--text-3)',
            cursor: 'pointer',
          }}
        >
          All Tools
        </button>
        <button
          type="button"
          onClick={() => onFilterChange('starred')}
          style={{
            fontSize: '0.75rem',
            fontWeight: 600,
            padding: '0.25rem 0.75rem',
            borderRadius: '9999px',
            border: '1px solid',
            borderColor: activeFilter === 'starred' ? 'oklch(0.85 0.18 85 / 0.4)' : 'transparent',
            background: activeFilter === 'starred' ? 'oklch(0.85 0.18 85 / 0.15)' : 'transparent',
            color: activeFilter === 'starred' ? 'oklch(0.85 0.18 85)' : 'var(--text-3)',
            cursor: 'pointer',
          }}
        >
          Starred Only ({starredIds.length})
        </button>
      </div>
    </div>
  );
}
