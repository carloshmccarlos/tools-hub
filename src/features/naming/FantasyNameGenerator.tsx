import { useState } from 'react';
import { Sparkles, Copy, Check } from 'lucide-react';

interface FantasyNameResult {
  title: string;
  lore: string;
  race: string;
}

const FANTASY_DATABASE: Record<string, { titles: string[]; lores: string[]; races: string[] }> = {
  'fantasy-name': {
    titles: ['Aelion Frostweaver', 'Thalor Stormstrider', 'Vespera Nightshade', 'Kaelen Shadowblade', 'Zephyrus Silverwing', 'Malakor Bloodthorn'],
    lores: ['Master of ancient cryogenic runes', 'Wanderer of thunderous tempest peaks', 'Assassin steeped in shadow mystery', 'Blade dancer of the high citadel'],
    races: ['High Elf', 'Dragonborn', 'Shadow Elf', 'Human Paladin'],
  },
  'skyrim-name': {
    titles: ['Torvald Iron-Hearth', 'Astrid Frost-Eye', 'Varnis Dark-Moon', 'Brandulf Bear-Grip', 'Siddgeir Storm-Shield', 'Freya Ice-Heart'],
    lores: ['Nord warrior of Windhelm legendary lineage', 'Dragonborn descendant of ancient Skyrim jarls', 'Dunmer spellsword trained in Solstheim'],
    races: ['Nord', 'Dunmer', 'Argonian', 'Khajiit'],
  },
  'wizard-name': {
    titles: ['Ignis Ember-Crown', 'Archmage Valerius', 'Morgana Star-Gazer', 'Cygnus Void-Seeker', 'Solomon Sun-Shaper', 'Eldrin Astral-Weaver'],
    lores: ['Supreme scholar of arcana and cosmos', 'Sorcerer who commands solar flames', 'Warlock bound to primordial astral entities'],
    races: ['High Archmage', 'Elemental Sorcerer', 'Necromancer'],
  },
  'warrior-name': {
    titles: ['Garrick Iron-Shatter', 'Valeria Shield-Maiden', 'Balthazar War-Hammer', 'Kragor Blood-Axe', 'Darius Vanguard', 'Sigrun Spear-Bane'],
    lores: ['Frontline champion of 100 sieges', 'Unbroken defender of the northern watchtower', 'Berserker famed for unbreakable fortitude'],
    races: ['Knight Templar', 'Nordic Berserker', 'Iron Vanguard'],
  },
  'elf-name': {
    titles: ['Sylvia Leaf-Whisper', 'Aearon Star-Gleam', 'Celestia Moon-Glow', 'Finrod Sun-Blade', 'Laeroth Willow-Wind', 'Elyria Dawn-Breeze'],
    lores: ['Guardian of the sacred silver woods', 'Highborn elf who sings stars into light', 'Drow ranger tracking shadow beasts'],
    races: ['High Elf', 'Wood Elf', 'Drow', 'Star Elf'],
  },
};

export function FantasyNameGenerator({ toolId }: { toolId: string }) {
  const [race, setRace] = useState<string>('all');
  const [results, setResults] = useState<FantasyNameResult[]>([]);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const data = FANTASY_DATABASE[toolId] || FANTASY_DATABASE['fantasy-name'];

  const generate = () => {
    const list: FantasyNameResult[] = [];
    const pool = data.titles;
    const shuffled = [...pool].sort(() => 0.5 - Math.random());

    for (let i = 0; i < Math.min(6, shuffled.length); i++) {
      list.push({
        title: shuffled[i],
        lore: data.lores[i % data.lores.length],
        race: data.races[i % data.races.length],
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
          <label className="block text-xs font-medium text-slate-600 dark:text-slate-400 mb-1">Archetype / Race</label>
          <select value={race} onChange={(e) => setRace(e.target.value)} className="tool-input">
            <option value="all">All Archetypes</option>
            {data.races.map((r) => (
              <option key={r} value={r}>
                {r}
              </option>
            ))}
          </select>
        </div>
      </div>

      <button onClick={generate} className="tool-btn-primary w-full py-3 text-base">
        <Sparkles className="w-5 h-5" />
        <span>Generate 6 Fantasy Titles</span>
      </button>

      {results.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
          {results.map((item, idx) => (
            <div key={idx} className="glass-panel p-4 flex flex-col justify-between space-y-2 relative group hover:border-purple-500/50">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="text-xl font-bold text-slate-900 dark:text-slate-100">{item.title}</h4>
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-purple-600 dark:text-purple-400 px-2 py-0.5 rounded-full bg-purple-500/10 inline-block mt-1">
                    {item.race}
                  </span>
                </div>
                <button
                  onClick={() => copyToClipboard(item.title, idx)}
                  className="p-2 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-colors"
                >
                  {copiedIndex === idx ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed pt-1 border-t border-slate-200/50 dark:border-slate-800/50">
                {item.lore}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
