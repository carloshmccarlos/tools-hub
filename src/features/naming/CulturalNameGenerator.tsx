import { useState } from 'react';
import { RefreshCw, Copy, Check } from 'lucide-react';

interface CulturalNameResult {
  name: string;
  transliteration?: string;
  meaning: string;
  style: string;
}

const CULTURAL_DATABASE: Record<string, { names: string[]; meanings: string[]; styles: string[] }> = {
  'chinese-name': {
    names: ['林墨轩', '沈清歌', '陆云澜', '叶知秋', '楚临风', '夏薇雨', '顾星河', '晏如许', '许轻舟', '宋听雨', '苏莫白', '江慕云'],
    meanings: ['墨香雅致，逸群之才', '清歌雅意，超凡脱俗', '云海澜漫，气度宏大', '一叶知秋，敏锐睿智', '临风独立，潇洒不羁', '夏雨润物，温婉清丽'],
    styles: ['Modern Elegant', 'Historical Wuxia', 'Poetic Classic', 'Minimalist'],
  },
  'japanese-name': {
    names: ['蓮 (Ren)', '葵 (Aoi)', '翔太 (Shota)', '桜 (Sakura)', '大翔 (Hiroto)', '美月 (Mizuki)', '楓 (Kaede)', '悠真 (Yuma)'],
    meanings: ['Lotus bloom in serenity', 'Hollyhock flower of hope', 'Soaring high above sky', 'Cherry blossom in spring', 'Flying grand and free', 'Beautiful moon night'],
    styles: ['Modern Japanese', 'Traditional Kanji', 'Anime Aesthetic'],
  },
  'english-name': {
    names: ['Alexander Vance', 'Evelyn Reed', 'Julian Sterling', 'Clara Montgomery', 'Oliver Hayes', 'Seraphina Hale', 'Sebastian Thorne'],
    meanings: ['Defender of people & noble heritage', 'Wished-for child by water reed', 'Youthful & pure sterling quality', 'Bright & majestic mountain'],
    styles: ['Classic Heritage', 'Modern Minimal', 'Aristocratic Elegance'],
  },
  'french-name': {
    names: ['Lucien Moreau', 'Céleste Laurent', 'Etienne Dupont', 'Sylvie Fontaine', 'Gabriel Vance', 'Camille Rocher'],
    meanings: ['Bearer of light & wisdom', 'Heavenly and divine grace', 'Crowned honor & nobility', 'Of the forest & natural beauty'],
    styles: ['Parisian Classic', 'Romantic Elegant'],
  },
  'german-name': {
    names: ['Maximilian Von Berg', 'Greta Lindner', 'Friedrich Stein', 'Elsa Weiss', 'Konrad Fischer', 'Helena Brandt'],
    meanings: ['Greatest high leader', 'Pearl of purity & strength', 'Peaceful ruler over stone', 'Noble & pure light'],
    styles: ['Traditional Noble', 'Contemporary Alpine'],
  },
};

export function CulturalNameGenerator({ toolId }: { toolId: string }) {
  const [gender, setGender] = useState<'all' | 'male' | 'female'>('all');
  const [style, setStyle] = useState<string>('all');
  const [seedKeyword, setSeedKeyword] = useState<string>('');
  const [results, setResults] = useState<CulturalNameResult[]>([]);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const data = CULTURAL_DATABASE[toolId] || CULTURAL_DATABASE['chinese-name'];

  const generate = () => {
    const list: CulturalNameResult[] = [];
    const pool = data.names;
    const shuffled = [...pool].sort(() => 0.5 - Math.random());

    for (let i = 0; i < Math.min(6, shuffled.length); i++) {
      const name = seedKeyword ? `${seedKeyword} ${shuffled[i]}` : shuffled[i];
      list.push({
        name,
        meaning: data.meanings[i % data.meanings.length],
        style: data.styles[i % data.styles.length],
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
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div>
          <label className="block text-xs font-medium text-slate-600 dark:text-slate-400 mb-1">Gender</label>
          <select value={gender} onChange={(e: any) => setGender(e.target.value)} className="tool-input">
            <option value="all">Unisex / All</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div>
          <label className="block text-xs font-medium text-slate-600 dark:text-slate-400 mb-1">Style Tone</label>
          <select value={style} onChange={(e) => setStyle(e.target.value)} className="tool-input">
            <option value="all">All Styles</option>
            {data.styles.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-xs font-medium text-slate-600 dark:text-slate-400 mb-1">Seed Keyword (Optional)</label>
          <input
            type="text"
            value={seedKeyword}
            onChange={(e) => setSeedKeyword(e.target.value)}
            placeholder="e.g. Moon, River..."
            className="tool-input"
          />
        </div>
      </div>

      <button onClick={generate} className="tool-btn-primary w-full py-3 text-base">
        <RefreshCw className="w-5 h-5" />
        <span>Generate 6 Cultural Names</span>
      </button>

      {results.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
          {results.map((item, idx) => (
            <div key={idx} className="glass-panel p-4 flex flex-col justify-between space-y-2 relative group hover:border-blue-500/50">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="text-xl font-bold text-slate-900 dark:text-slate-100">{item.name}</h4>
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 px-2 py-0.5 rounded-full bg-blue-500/10 inline-block mt-1">
                    {item.style}
                  </span>
                </div>
                <button
                  onClick={() => copyToClipboard(item.name, idx)}
                  className="p-2 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-colors"
                >
                  {copiedIndex === idx ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed pt-1 border-t border-slate-200/50 dark:border-slate-800/50">
                {item.meaning}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
