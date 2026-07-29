import { useState, useEffect } from 'react';
import { createFileRoute } from '@tanstack/react-router';
import { TOOLS } from '../data/tools';
import { HeroStats } from '../components/HeroStats';
import { FeatureGrid } from '../components/FeatureGrid';
import { FaqSection } from '../components/FaqSection';
import { FavoritesSection } from '../components/FavoritesSection';
import { SectionGrid } from '../components/SectionGrid';
import { SeoSchema } from '../components/SeoSchema';
import { Search, Type, Calculator, Sparkles, FileText } from 'lucide-react';

export const Route = createFileRoute('/')({
  component: IndexPage,
});

function IndexPage() {
  const [starredIds, setStarredIds] = useState<string[]>([]);
  const [filterMode, setFilterMode] = useState<'all' | 'starred'>('all');

  useEffect(() => {
    try {
      const saved = localStorage.getItem('toolhub_starred');
      if (saved) {
        setStarredIds(JSON.parse(saved));
      }
    } catch {
      // Fallback
    }
  }, []);

  function handleToggleStar(id: string) {
    setStarredIds((prev) => {
      const next = prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id];
      try {
        localStorage.setItem('toolhub_starred', JSON.stringify(next));
      } catch {
        // Fallback
      }
      return next;
    });
  }

  const filtered = TOOLS.filter((tool) => {
    if (filterMode === 'starred' && !starredIds.includes(tool.id)) {
      return false;
    }
    return true;
  });

  const nameCount = TOOLS.filter((t) => t.site === 'name').length;
  const calcCount = TOOLS.filter((t) => t.site === 'calculator').length;
  const utilityCount = TOOLS.filter((t) => t.site === 'utility').length;
  const formatterCount = TOOLS.filter((t) => t.site === 'formatter').length;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4xl)' }}>
      <SeoSchema />

      {/* Asymmetric Hero Section */}
      <section
        className="animate-fade-up"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: 'var(--space-2xl)',
          alignItems: 'start',
          paddingTop: 'var(--space-2xl)',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-lg)', position: 'relative', zIndex: 50 }}>
          {/* Eyebrow badge */}
          <div>
            <div className="eyebrow-pill">
              <Sparkles style={{ width: '0.875rem', height: '0.875rem' }} />
              <span>Unified Web Utility Studio</span>
            </div>
          </div>

          {/* H1 Title */}
          <h1
            style={{
              fontFamily: 'Cabinet Grotesk, sans-serif',
              fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
              fontWeight: 900,
              letterSpacing: '0.02em',
              lineHeight: 1.05,
              color: 'var(--text)',
              textTransform: 'uppercase',
            }}
          >
            Curated Directory of<br />
            <span
              style={{
                color: 'var(--accent-calc)',
              }}
            >
              Premium Web Tools
            </span>
          </h1>

          {/* Subtitle */}
          <p
            style={{
              fontFamily: 'Satoshi, sans-serif',
              fontSize: '1.125rem',
              lineHeight: 1.6,
              color: 'var(--text-2)',
              maxWidth: '36rem',
              fontWeight: 400,
            }}
          >
            Instant access to {nameCount + calcCount + utilityCount + formatterCount} specialized web utilities, generators, formatters, and calculators.
          </p>
        </div>
        
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
           <HeroStats />
        </div>
      </section>

      {/* Favorites Toggle Pill */}
      {starredIds.length > 0 && (
        <FavoritesSection
          starredIds={starredIds}
          activeFilter={filterMode}
          onFilterChange={(mode) => setFilterMode(mode)}
        />
      )}

      {/* Grid of Tools */}
      <div className="animate-fade-up delay-100">
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: 'var(--space-xl)',
            paddingBottom: 'var(--space-md)',
            borderBottom: '2px solid var(--border)',
          }}
        >
          <span style={{ fontSize: '1rem', fontFamily: 'Cabinet Grotesk, sans-serif', fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase', color: 'var(--text)' }}>
            Showing {filtered.length} {filterMode === 'starred' ? 'Starred Tools' : 'Tools'}
          </span>
          {(filterMode !== 'all') && (
            <button
              type="button"
              onClick={() => {
                setFilterMode('all');
              }}
              style={{ fontSize: '0.75rem', fontFamily: 'Satoshi, sans-serif', fontWeight: 700, color: 'var(--text-2)', background: 'none', border: 'none', cursor: 'pointer', textTransform: 'uppercase' }}
            >
              Reset Filters
            </button>
          )}
        </div>

        {filtered.length > 0 ? (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4xl)' }}>
            <SectionGrid
              title="Calculators"
              icon={Calculator}
              tools={filtered.filter(t => t.site === 'calculator')}
              starredIds={starredIds}
              onToggleStar={handleToggleStar}
            />
            <SectionGrid
              title="Generators"
              icon={Type}
              tools={filtered.filter(t => t.site === 'name')}
              starredIds={starredIds}
              onToggleStar={handleToggleStar}
            />
            <SectionGrid
              title="AI & Utilities"
              icon={Sparkles}
              tools={filtered.filter(t => t.site === 'utility')}
              starredIds={starredIds}
              onToggleStar={handleToggleStar}
            />
            <SectionGrid
              title="Formatters"
              icon={FileText}
              tools={filtered.filter(t => t.site === 'formatter')}
              starredIds={starredIds}
              onToggleStar={handleToggleStar}
            />
          </div>
        ) : (
          <div
            style={{
              padding: 'var(--space-4xl) var(--space-xl)',
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              gap: 'var(--space-md)',
            }}
          >
            <Search style={{ width: '2rem', height: '2rem', color: 'var(--text-3)' }} />
            <p style={{ fontSize: '1.25rem', fontFamily: 'Cabinet Grotesk, sans-serif', fontWeight: 500, color: 'var(--text)' }}>
              No tools matching search or filters.
            </p>
            <button
              type="button"
              onClick={() => {
                setFilterMode('all');
              }}
              style={{
                fontSize: '0.875rem',
                fontFamily: 'Satoshi, sans-serif',
                fontWeight: 700,
                textTransform: 'uppercase',
                color: 'var(--bg)',
                background: 'var(--text)',
                border: 'none',
                padding: 'var(--space-sm) var(--space-xl)',
                cursor: 'pointer',
                marginTop: 'var(--space-sm)'
              }}
            >
              Clear filters
            </button>
          </div>
        )}
      </div>

      {/* Feature Highlights Grid */}
      <FeatureGrid />

      {/* FAQ Accordion Section */}
      <FaqSection />
    </div>
  );
}


