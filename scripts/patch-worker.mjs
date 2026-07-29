import fs from 'fs';
import path from 'path';

const file = path.resolve(process.cwd(), 'dist/server/server.js');
if (fs.existsSync(file)) {
  let content = fs.readFileSync(file, 'utf-8');
  // Inject a lightweight process polyfill at the top of the file
  if (!content.includes('globalThis.process = { env: {} }')) {
    content = `globalThis.process = { env: { TSS_PRERENDERING: "false", TSS_SHELL: "false" } };\n` + content;
    fs.writeFileSync(file, content, 'utf-8');
    console.log('[Patch] Injected process polyfill into dist/server/server.js');
  }
}
