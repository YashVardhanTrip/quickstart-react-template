const fs = require('fs');
const path = require('path');

const dirs = ['public', 'dist', 'coverage'];
dirs.forEach(d => {
  const p = path.join(__dirname, '..', d);
  if (!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true });
});

console.log('Project directories initialized.');
