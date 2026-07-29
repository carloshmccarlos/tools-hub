export type ToolSite = 'name' | 'calculator' | 'utility' | 'formatter';
export type ToolCategory =
  // name categories
  | 'cultural' | 'fantasy' | 'practical' | 'entertainment'
  // calculator categories
  | 'finance' | 'home' | 'health' | 'math' | 'lifestyle'
  // utility categories
  | 'ai' | 'general'
  // formatter categories
  | 'developer' | 'academic' | 'business';

export interface ToolMeta {
  id: string;
  name: string;
  slug: string;
  externalUrl: string;
  site: ToolSite;
  category: ToolCategory;
  description: string;
  iconName: string;
  badge?: string;
  popular?: boolean;
  features?: string[];
  useCases?: string[];
  faqs?: { q: string; a: string }[];
}

