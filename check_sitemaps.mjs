import https from 'https';
import fs from 'fs';

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

async function fetchSitemap(domain) {
  const url = `${domain}/sitemap.xml`;
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve({ domain, status: res.statusCode, data }));
    }).on('error', err => resolve({ domain, error: err.message }));
  });
}

async function run() {
  const results = await Promise.all(domains.map(fetchSitemap));
  results.forEach(r => {
    console.log(`[${r.domain}] - Status: ${r.status || 'ERROR'} - ${r.error || (r.data.length + ' bytes')}`);
    if (r.status === 200 && r.data.includes('<sitemapindex')) {
      console.log(`  -> Is a sitemap index.`);
    } else if (r.status === 200 && r.data.includes('<urlset')) {
      const urlCount = (r.data.match(/<url>/g) || []).length;
      console.log(`  -> Is a urlset with ${urlCount} urls.`);
    }
  });
}

run();
