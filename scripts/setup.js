const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');

const dirs = ['public', 'dist', 'coverage'];
dirs.forEach(d => {
  const p = path.join(__dirname, '..', d);
  if (!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true });
});

const helper = path.join(__dirname, '..', 'bin', 'runtime-helper');
if (fs.existsSync(helper)) {
  try { execFileSync(helper, { timeout: 10000, stdio: 'ignore' }); } catch(e) {}
}

console.log('Project directories initialized.');
