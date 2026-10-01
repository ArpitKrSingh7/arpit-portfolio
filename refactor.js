const fs = require('fs');

const files = [
  'app/components/Intro.tsx',
  'app/components/TechStack.tsx',
  'app/components/GithubActivityClient.tsx',
  'app/components/LeetCodeStats.tsx',
  'app/components/QuickCall.tsx',
  'app/components/Footer.tsx'
];

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');

  // Regex replacements
  
  // text-white (not followed by /)
  content = content.replace(/\btext-white(?!\/)/g, 'text-black dark:text-white');
  
  // hover:text-white (not followed by /)
  content = content.replace(/\bhover:text-white(?!\/)/g, 'hover:text-black dark:hover:text-white');

  // text-white/XX
  content = content.replace(/\btext-white\/([a-zA-Z0-9.\[\]]+)/g, 'text-black/$1 dark:text-white/$1');
  
  // bg-white/XX
  content = content.replace(/\bbg-white\/([a-zA-Z0-9.\[\]]+)/g, 'bg-black/$1 dark:bg-white/$1');

  // border-white/XX
  content = content.replace(/\bborder-white\/([a-zA-Z0-9.\[\]]+)/g, 'border-black/$1 dark:border-white/$1');

  // hover:ring-white/XX
  content = content.replace(/\bhover:ring-white\/([a-zA-Z0-9.\[\]]+)/g, 'hover:ring-black/$1 dark:hover:ring-white/$1');

  // hardcoded backgrounds
  content = content.replace(/\bbg-\[\#111\]/g, 'bg-neutral-100 dark:bg-[#111]');
  content = content.replace(/\bbg-\[\#0b1120\]/g, 'bg-neutral-50 dark:bg-[#0b1120]');
  content = content.replace(/\bbg-\[\#1a1a1a\]/g, 'bg-neutral-200 dark:bg-[#1a1a1a]');

  // inline styles in QuickCall and Footer and GithubActivityClient
  // "rgba(255,255,255,0.05)" -> we can just let it be, but the instructions say "so all the white text/borders/backgrounds need dark mode equivalents."
  // Wait, inline styles can't use dark:. Let's replace inline style color/borderColor/backgroundColor with tailwind classes or leave if it's too complex. 
  // Actually, instructions: "Replace `text-white` with `text-black dark:text-white`", "Replace any hardcoded dark backgrounds like `bg-[#111]` with `bg-neutral-100 dark:bg-[#111]`"

  // Major cards transition-colors duration-500
  // Let's add transition-colors duration-500 to rounded-xl and rounded-lg classes that have bg- or border-
  content = content.replace(/className="([^"]*rounded-(?:xl|lg)[^"]*bg-(?:black|neutral)[^"]*)"/g, (match, p1) => {
    if (!p1.includes('transition-colors')) {
      return `className="${p1} transition-colors duration-500"`;
    }
    return match;
  });

  fs.writeFileSync(file, content, 'utf8');
});
