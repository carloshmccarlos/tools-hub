import https from 'https';
import fs from 'fs';
import path from 'path';

// The base URL for the Tool Hub
const HUB_URL = 'https://317713.xyz';

// All the external domains where tools are hosted
const domains = [
  'https://names.317713.xyz',
  'https://calculators.317713.xyz',
  'https://generators.317713.xyz',
  'https://formatter.317713.xyz',
  'https://ai-morse-code-translator.loveyouall.qzz.io',
  'https://phone-number.loveyouall.qzz.io',
  'https://ai-images-description.loveyouall.qzz.io',
  'https://text-sync.loveyouall.qzz.io'
];

/**
 * Fetch the sitemap.xml of a given domain
 */
async function fetchSitemap(domain) {
  const url = `${domain}/sitemap.xml`;
  return new Promise((resolve) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        if (res.statusCode === 200) {
          resolve({ domain, success: true, data });
        } else {
          console.warn(`[WARN] Failed to fetch sitemap for ${domain} - Status: ${res.statusCode}`);
          resolve({ domain, success: false, data: '' });
        }
      });
    }).on('error', err => {
      console.warn(`[WARN] Error fetching ${domain}: ${err.message}`);
      resolve({ domain, success: false, data: '' });
    });
  });
}

/**
 * Extract all <url>...</url> blocks from an XML string
 */
function extractUrls(xmlData) {
  const urls = [];
  // Using a regex to match the inner content of <url> tags
  // The [\s\S]*? makes it non-greedy across newlines
  const regex = /<url>([\s\S]*?)<\/url>/g;
  let match;
  while ((match = regex.exec(xmlData)) !== null) {
    urls.push(`<url>\n    ${match[1].trim()}\n  </url>`);
  }
  return urls;
}

async function run() {
  console.log('Fetching external sitemaps...');
  const results = await Promise.all(domains.map(fetchSitemap));
  
  let allUrlBlocks = [];
  
  // Add the Tool Hub home page itself
  const today = new Date().toISOString().split('T')[0];
  allUrlBlocks.push(`<url>
    <loc>${HUB_URL}/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>`);

  // Parse external sitemaps
  for (const r of results) {
    if (r.success) {
      const urls = extractUrls(r.data);
      console.log(`[${r.domain}] - Extracted ${urls.length} URLs`);
      allUrlBlocks = allUrlBlocks.concat(urls);
    }
  }

  // Construct the final massive sitemap
  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
  ${allUrlBlocks.join('\n  ')}
</urlset>`;

  // Write to public/sitemap.xml
  const outPath = path.resolve(process.cwd(), 'public', 'sitemap.xml');
  fs.writeFileSync(outPath, sitemapXml, 'utf-8');
  
  console.log(`\nSuccess! Wrote ${allUrlBlocks.length} URLs to ${outPath}`);
}

run();
