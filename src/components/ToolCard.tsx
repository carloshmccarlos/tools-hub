import { ToolMeta } from '../types/tool';
import { Link } from '@tanstack/react-router';
import {
  Globe, Sparkles, Wand2, Shield, Feather, Utensils, Users, Video,
  BookOpen, Music, Heart, ArrowUpRight, Flame, Building2, Swords, Mic2,
  Zap, Star, Headphones, TrendingUp, DollarSign, Home, BarChart3,
  PiggyBank, Clock, Ruler, Layers, Activity, Calculator, Copy,
} from 'lucide-react';
import { CSSProperties } from 'react';

const ICON_MAP: Record<string, any> = {
  Globe, Sparkles, Wand2, Shield, Feather, Utensils, Users, Video,
  BookOpen, Music, Heart, Flame, Building2, Swords, Mic2, Zap, Star,
  Headphones, TrendingUp, DollarSign, Home, BarChart3, PiggyBank,
  Clock, Ruler, Layers, Activity, Calculator, Copy,
};

export function ToolCard({
  tool,
  isStarred,
  onToggleStar,
}: {
  tool: ToolMeta;
  isStarred?: boolean;
  onToggleStar?: (id: string) => void;
}) {
  const IconComponent = ICON_MAP[tool.iconName] ?? Globe;
  const isCalc = tool.site === 'calculator';

  return (
    <div
      style={{
        position: 'relative',
        height: '100%',
        display: 'flex',
      }}
      className={isCalc ? 'tool-card-calc group' : 'tool-card-name group'}
    >
      {/* Flat Single-Layer Card */}
      <div 
        className="card-shell" 
        style={{ 
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          padding: '1.5rem',
        }}
      >
        {/* Top row: icon + badges + star toggle */}
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
          <div
            style={{
              width: '2.5rem',
              height: '2.5rem',
              background: 'var(--surface-2)',
              border: '1px solid var(--border)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}
            className="tool-icon-wrap"
          >
            <IconComponent style={{ width: '1.25rem', height: '1.25rem', color: 'var(--text)', pointerEvents: 'none' }} strokeWidth={1.5} />
          </div>

          <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'flex-end' }}>
            {tool.popular && <span className="badge badge-popular">Popular</span>}
            {tool.badge && <span className="badge">{tool.badge}</span>}
            {onToggleStar && (
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  onToggleStar(tool.id);
                }}
                title={isStarred ? 'Unstar tool' : 'Star tool'}
                className={isStarred ? 'star-btn star-btn-active' : 'star-btn'}
              >
                <Star
                  style={{ width: '1rem', height: '1rem' }}
                  fill={isStarred ? 'currentColor' : 'none'}
                  strokeWidth={isStarred ? 0 : 1.5}
                />
              </button>
            )}
          </div>
        </div>

        {/* Name + description */}
        <a
          href={tool.externalUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: 'none', flex: 1, display: 'flex', flexDirection: 'column' }}
        >
          <h3
            style={{
              fontFamily: 'Cabinet Grotesk, sans-serif',
              fontWeight: 700,
              fontSize: '1.125rem',
              letterSpacing: '0.01em',
              color: 'var(--text)',
              marginBottom: '0.5rem',
            }}
          >
            {tool.name}
          </h3>
          <p
            style={{
              fontFamily: 'Satoshi, sans-serif',
              fontSize: '0.875rem',
              lineHeight: 1.5,
              color: 'var(--text-2)',
              display: '-webkit-box',
              WebkitLineClamp: 3,
              WebkitBoxOrient: 'vertical' as CSSProperties['WebkitBoxOrient'],
              overflow: 'hidden',
              marginBottom: '1.5rem',
              flex: 1,
            }}
          >
            {tool.description}
          </p>
        </a>

        {/* Minimal Footer */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            paddingTop: '1rem',
            borderTop: '1px solid var(--border)',
          }}
        >
          <a
            href={tool.externalUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: '0.75rem',
              fontFamily: 'Satoshi, sans-serif',
              fontWeight: 700,
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              color: 'var(--text)',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
            }}
            className="card-label"
            title="Launch tool in new tab"
          >
            Launch Tool
            <ArrowUpRight style={{ width: '0.875rem', height: '0.875rem', color: 'var(--text-3)' }} strokeWidth={2} />
          </a>
        </div>
      </div>

      <style>{`
        .tool-card-name:hover .tool-icon-wrap,
        .tool-card-calc:hover .tool-icon-wrap {
          background: var(--text);
        }
        .tool-card-name:hover .tool-icon-wrap svg,
        .tool-card-calc:hover .tool-icon-wrap svg {
          color: var(--bg) !important;
        }
        .tool-card-name:hover .card-label,
        .tool-card-calc:hover .card-label { 
          color: var(--accent-name); 
        }
        .tool-card-calc:hover .card-label { 
          color: var(--accent-calc); 
        }
        .tool-card-name:hover .card-label svg,
        .tool-card-calc:hover .card-label svg {
          color: currentColor !important;
        }
      `}</style>
    </div>
  );
}
