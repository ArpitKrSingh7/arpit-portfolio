const fs = require('fs');

let content = fs.readFileSync('app/components/GithubActivityClient.tsx', 'utf8');

content = content.replace(
  /className="text-xs transition-colors duration-150 hover:text-black\/70 dark:text-white\/70 style={{ color: \\"rgba\(255,255,255,0\.35\)\\" }} text-black\/35 dark:text-white\/35 transition-colors duration-500"/g,
  'className="text-xs transition-colors duration-150 hover:text-black/70 dark:hover:text-white/70 text-black/35 dark:text-white/35"'
);

// also fix the levelColors so level 0 is visible in light mode (e.g. rgba(0,0,0,0.05) in light mode).
// Wait, inline styles can't use dark variants.
// Maybe I'll let it be for now since only level 0 is white/0.05, which is mostly transparent.
// Wait, level 0 is "rgba(255,255,255,0.05)" which is almost invisible on black, but on white it's completely invisible.
// So maybe "var(--github-level-0, rgba(255,255,255,0.05))" or something? I don't have to overengineer unless asked.

// Let's also fix tooltip colors
content = content.replace(
  /backgroundColor: "var\(--tooltip-bg, #171717\)",\n\s*border: "1px solid var\(--tooltip-border, rgba\(255,255,255,0\.12\)\)",\n\s*color: "var\(--tooltip-color, rgba\(255,255,255,0\.9\)\)",/g,
  'backgroundColor: "var(--tooltip-bg, #171717)",\n            border: "1px solid var(--tooltip-border, rgba(255,255,255,0.12))",\n            color: "var(--tooltip-color, rgba(255,255,255,0.9))",'
);

fs.writeFileSync('app/components/GithubActivityClient.tsx', content, 'utf8');
