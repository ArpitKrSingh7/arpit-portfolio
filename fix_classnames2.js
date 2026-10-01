const fs = require('fs');

const files = [
  'app/components/QuickCall.tsx',
  'app/components/Footer.tsx',
  'app/components/GithubActivityClient.tsx',
  'app/components/Intro.tsx',
  'app/components/TechStack.tsx',
  'app/components/LeetCodeStats.tsx'
];

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let before = '';
  while (before !== content) {
    before = content;
    content = content.replace(/className="([^"]+)"\s*className="([^"]+)"/g, 'className="$1 $2"');
  }
  fs.writeFileSync(file, content, 'utf8');
});
