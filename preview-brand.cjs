const fs = require('node:fs');
const path = require('node:path');
const { pathToFileURL } = require('node:url');
fs.mkdirSync('outputs/brand-review', { recursive: true });
const template = fs.readFileSync('dist/index.html', 'utf8');
const base = pathToFileURL(path.resolve('dist') + path.sep).href;
for (let i = 0; i < 8; i++) {
  fs.writeFileSync(`outputs/brand-review/screen-${i + 1}.html`, template.replace('<head>', `<head><base href="${base}">`).replace('</body>', `<script>go(${i});</script></body>`));
}
