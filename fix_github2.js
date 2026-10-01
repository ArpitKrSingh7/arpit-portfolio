const fs = require('fs');

let content = fs.readFileSync('app/components/GithubActivityClient.tsx', 'utf8');

content = content.replace(
  'className="text-xs transition-colors duration-150 hover:text-black/70 dark:text-white/70 style={{ color: "rgba(255,255,255,0.35)" }} text-black/35 dark:text-white/35 transition-colors duration-500"',
  'className="text-xs transition-colors duration-150 hover:text-black/70 dark:hover:text-white/70 text-black/35 dark:text-white/35"'
);

fs.writeFileSync('app/components/GithubActivityClient.tsx', content, 'utf8');
