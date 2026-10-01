const fs = require('fs');

const files = [
  'app/components/QuickCall.tsx',
  'app/components/Footer.tsx',
  'app/components/GithubActivityClient.tsx'
];

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(/className="([^"]+)"\s*\n\s*className="([^"]+)"/g, 'className="$1 $2"');
  fs.writeFileSync(file, content, 'utf8');
});
