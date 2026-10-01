"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-9 h-9 p-2 rounded-full bg-neutral-200 dark:bg-neutral-800 transition-colors duration-500" />
    );
  }

  const currentTheme = theme === "system" ? resolvedTheme : theme;

  return (
    <button
      onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
      className="relative z-10 flex-shrink-0 p-2 rounded-full bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 transition-colors duration-500 hover:bg-neutral-300 dark:hover:bg-neutral-700 focus:outline-none focus:ring-2 focus:ring-neutral-500"
      aria-label="Toggle Theme"
    >
      <div className="relative w-5 h-5">
        <Sun className="absolute inset-0 w-5 h-5 transition-all duration-500 rotate-0 scale-100 dark:-rotate-90 dark:scale-0" />
        <Moon className="absolute inset-0 w-5 h-5 transition-all duration-500 rotate-90 scale-0 dark:rotate-0 dark:scale-100" />
      </div>
    </button>
  );
}
