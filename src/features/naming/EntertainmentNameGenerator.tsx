import { useState } from 'react';
import { Video, Copy, Check } from 'lucide-react';

interface EntertainmentResult {
  title: string;
  categoryNote: string;
}

const ENTERTAINMENT_DATABASE: Record<string, { titles: string[]; notes: string[] }> = {
  'youtube-name': {
    titles: ['TechPulse Studio', 'Pixel Quest Gaming', 'The Everyday Nomad', 'ByteSize Cooking', 'Future Craft', 'Curious Minds Daily'],
    notes: ['Tech Review & Unboxing', 'Gaming & Walkthroughs', 'Travel & Vlogging', 'Quick Recipe Shorts'],
  },
  'book-title': {
    titles: ['The Last Oracle of Atlantis', 'Whispers in the Starlight', 'Shadows Over Kingsgate', 'The Alchemist of Time', 'Echoes of a Forgotten Kingdom'],
    notes: ['Sci-Fi Fantasy Epic', 'Mystery Thriller', 'Historical Fiction', 'Urban Fantasy'],
  },
  'song-title': {
    titles: ['Midnight Neon Lights', 'Electric Dreams in Tokyo', 'Lost in the Summer Waves', 'Chasing Starlight', 'Velvet Heartbeats'],
    notes: ['Synthwave / Retro', 'Lo-Fi Chill Hop', 'Indie Pop Anthem', 'Acoustic Folk'],
  },
  'pet-name': {
    titles: ['Mochi', 'Boba', 'Zeus', 'Coco', 'Luna', 'Kobi', 'Oliver', 'Ziggy'],
    notes: ['Playful & Energetic', 'Sweet & Cuddly', 'Noble & Majestic', 'Aesthetic Minimalist'],
  },
};

export function EntertainmentNameGenerator({ toolId }: { toolId: string }) {
  const [results, setResults] = useState<EntertainmentResult[]>([]);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const data = ENTERTAINMENT_DATABASE[toolId] || ENTERTAINMENT_DATABASE['youtube-name'];

  const generate = () => {
    const list: EntertainmentResult[] = [];
    const pool = data.titles;
    const shuffled = [...pool].sort(() => 0.5 - Math.random());

    for (let i = 0; i < Math.min(6, shuffled.length); i++) {
      list.push({
        title: shuffled[i],
        categoryNote: data.notes[i % data.notes.length],
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
      <button onClick={generate} className="tool-btn-primary w-full py-3 text-base">
        <Video className="w-5 h-5" />
        <span>Generate 6 Entertainment Titles</span>
      </button>

      {results.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
          {results.map((item, idx) => (
            <div key={idx} className="glass-panel p-4 flex flex-col justify-between space-y-2 relative group hover:border-amber-500/50">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="text-xl font-bold text-slate-900 dark:text-slate-100">{item.title}</h4>
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-400 px-2 py-0.5 rounded-full bg-amber-500/10 inline-block mt-1">
                    {item.categoryNote}
                  </span>
                </div>
                <button
                  onClick={() => copyToClipboard(item.title, idx)}
                  className="p-2 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-colors"
                >
                  {copiedIndex === idx ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
