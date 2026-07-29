import { useState } from 'react';
import { Briefcase, Copy, Check } from 'lucide-react';

interface BrandingResult {
  brandName: string;
  tagline: string;
  niche: string;
}

const BRANDING_DATABASE: Record<string, { names: string[]; taglines: string[]; niches: string[] }> = {
  'restaurant-name': {
    names: ['Umai Craft Table', 'The Copper Kettle', 'Bistro Lumière', 'Harvest & Ember', 'Saffron & Salt', 'Velvet & Vine'],
    taglines: ['Artisanal flavors crafted with passion', 'Rustic comfort food reinvented for foodies', 'French bistro magic under starry skies'],
    niches: ['Fine Dining', 'Artisan Bakery', 'Bistro & Grill', 'Modern Fusion'],
  },
  'app-name': {
    names: ['NexusFlow', 'PulseStack', 'OmniVerse AI', 'LuminaDraft', 'HyperGrid', 'SyncVault'],
    taglines: ['Streamline your workflows in real-time', 'Next-generation AI workspace for creators', 'Ultra-fast cloud infrastructure engine'],
    niches: ['SaaS Platform', 'AI Productivity', 'Developer Tools', 'Mobile App'],
  },
  'tagline-generator': {
    names: ['Code Faster. Build Better.', 'Unleash Your Creative Genius', 'Simplicity Meets Power', 'Designed for Tomorrow'],
    taglines: ['Transform ideas into market reality', 'The ultimate toolkit for modern creators', 'Reimagining digital productivity'],
    niches: ['Slogan & Tagline', 'Product Positioning', 'Marketing Hook'],
  },
  'team-name': {
    names: ['Apex Syndicate', 'Vanguard Labs', 'Chroma Dynamics', 'Quantum Titans', 'Cyber Tribe', 'Infinite Foundry', 'Digital Pioneers', 'Iron Alliance', 'Velocity Guild'],
    taglines: ['Pioneering innovation at scale', 'Dominating competitive esports arenas', 'Crafting high-impact digital experiences'],
    niches: ['Creative Studio', 'Esports Squad', 'Dev Agency'],
  },
};

export function BrandingNameGenerator({ toolId }: { toolId: string }) {
  const [niche, setNiche] = useState<string>('all');
  const [results, setResults] = useState<BrandingResult[]>([]);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const data = BRANDING_DATABASE[toolId] || BRANDING_DATABASE['app-name'];

  const generate = () => {
    const list: BrandingResult[] = [];
    const pool = data.names;
    const shuffled = [...pool].sort(() => 0.5 - Math.random());

    for (let i = 0; i < Math.min(6, shuffled.length); i++) {
      list.push({
        brandName: shuffled[i],
        tagline: data.taglines[i % data.taglines.length],
        niche: data.niches[i % data.niches.length],
      });
    }
    setResults(list);
  };

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div>
          <label className="block text-xs font-medium text-slate-600 dark:text-slate-400 mb-1">Industry / Niche</label>
          <select value={niche} onChange={(e) => setNiche(e.target.value)} className="tool-input">
            <option value="all">All Niches</option>
            {data.niches.map((n) => (
              <option key={n} value={n}>
                {n}
              </option>
            ))}
          </select>
        </div>
      </div>

      <button onClick={generate} className="tool-btn-primary w-full py-3 text-base">
        <Briefcase className="w-5 h-5" />
        <span>Generate 6 Brand Names</span>
      </button>

      {results.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
          {results.map((item, idx) => (
            <div key={idx} className="glass-panel p-4 flex flex-col justify-between space-y-2 relative group hover:border-emerald-500/50">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="text-xl font-bold text-slate-900 dark:text-slate-100">{item.brandName}</h4>
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 px-2 py-0.5 rounded-full bg-emerald-500/10 inline-block mt-1">
                    {item.niche}
                  </span>
                </div>
                <button
                  onClick={() => copyToClipboard(item.brandName, idx)}
                  className="p-2 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-colors"
                >
                  {copiedIndex === idx ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed pt-1 border-t border-slate-200/50 dark:border-slate-800/50 italic">
                "{item.tagline}"
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
