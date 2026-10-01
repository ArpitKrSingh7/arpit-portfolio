const fs = require('fs');

// QuickCall.tsx
let qc = fs.readFileSync('app/components/QuickCall.tsx', 'utf8');
qc = qc.replace(
  'className="rounded-xl overflow-hidden flex flex-col md:flex-row w-full"\n        style={{ border: "1px solid rgba(255,255,255,0.08)" }}',
  'className="rounded-xl overflow-hidden flex flex-col md:flex-row w-full border border-black/[0.08] dark:border-white/[0.08] transition-colors duration-500"'
);
qc = qc.replace(
  /style={{\n\s*backgroundColor: "rgba\(255,255,255,0\.05\)",\n\s*color: "#fff",\n\s*border: "1px solid rgba\(255,255,255,0\.1\)",\n\s*}}/g,
  'className="$& bg-black/[0.05] dark:bg-white/[0.05] text-black dark:text-white border border-black/[0.1] dark:border-white/[0.1] transition-colors duration-500"'
);
qc = qc.replace(
  /style={{ borderTop: "1px solid rgba\(255,255,255,0\.06\)" }}/g,
  'className="$& border-t border-black/[0.06] dark:border-white/[0.06] transition-colors duration-500"'
);
// Clean up className="$& ..."
qc = qc.replace(/className="className="([^"]+)"\s*([^"]+)"/g, 'className="$1 $2"');
// Need to just remove the style attributes now
qc = qc.replace(/\s*style={{[^}]+}}\s*/g, ' ');
fs.writeFileSync('app/components/QuickCall.tsx', qc);

// Footer.tsx
let ft = fs.readFileSync('app/components/Footer.tsx', 'utf8');
ft = ft.replace(
  /style={{\n\s*borderTop: "1px solid rgba\(255,255,255,0\.08\)",\n\s*backgroundColor: "#0a0a0a",\n\s*}}/g,
  'className="$& border-t border-black/[0.08] dark:border-white/[0.08] bg-neutral-100 dark:bg-[#0a0a0a] transition-colors duration-500"'
);
ft = ft.replace(/style={{ color: "rgba\(255,255,255,0\.5\)" }}/g, 'className="$& text-black/50 dark:text-white/50 transition-colors duration-500"');
ft = ft.replace(/style={{ color: "rgba\(255,255,255,0\.3\)" }}/g, 'className="$& text-black/30 dark:text-white/30 transition-colors duration-500"');
ft = ft.replace(/style={{ borderTop: "1px solid rgba\(255,255,255,0\.04\)" }}/g, 'className="$& border-t border-black/[0.04] dark:border-white/[0.04] transition-colors duration-500"');
ft = ft.replace(/className="className="([^"]+)"\s*([^"]+)"/g, 'className="$1 $2"');
ft = ft.replace(/\s*style={{[^}]+}}\s*/g, ' ');
fs.writeFileSync('app/components/Footer.tsx', ft);

// GithubActivityClient.tsx
let gh = fs.readFileSync('app/components/GithubActivityClient.tsx', 'utf8');
gh = gh.replace(/style={{ color: "rgba\(255,255,255,0\.35\)" }}/g, 'className="$& text-black/35 dark:text-white/35 transition-colors duration-500"');
gh = gh.replace(
  /backgroundColor: "#171717",\n\s*border: "1px solid rgba\(255,255,255,0\.12\)",\n\s*color: "rgba\(255,255,255,0\.9\)",/g,
  'backgroundColor: "var(--tooltip-bg, #171717)",\n            border: "1px solid var(--tooltip-border, rgba(255,255,255,0.12))",\n            color: "var(--tooltip-color, rgba(255,255,255,0.9))",'
);
gh = gh.replace(/className="className="([^"]+)"\s*([^"]+)"/g, 'className="$1 $2"');
fs.writeFileSync('app/components/GithubActivityClient.tsx', gh);
