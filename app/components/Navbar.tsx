"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Clock from "./Clock";

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Projects", href: "/projects" },
    { label: "Blogs", href: "/blogs" },
  ];

  return (
    <header className="w-full sticky top-0 z-50 flex flex-col items-center bg-white dark:bg-[#0a0a0a] transition-colors duration-500">
      {/* Top bar: clock + location + theme toggle */}
      <div className="w-full px-4 py-4 flex justify-between items-center max-w-4xl mx-auto">
        <div className="w-9" /> {/* Spacer for centering */}
        <span className="text-xs font-mono truncate text-center text-cyan-600 dark:text-cyan-400">
          <Clock /> (GMT+5:30) IIITDM Kancheepuram, Chennai, India
        </span>
        <div className="w-9" /> {/* Spacer for centering */}
      </div>

      {/* Nav links */}
      <nav className="flex justify-center pb-3 w-full px-4">
        <div className="flex items-center gap-1 rounded-full px-2 py-1 max-w-full overflow-x-auto custom-scrollbar border border-neutral-200 dark:border-white/10 bg-neutral-100 dark:bg-white/5 transition-colors duration-500">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-1.5 rounded-full text-sm transition-colors duration-150 whitespace-nowrap ${
                  isActive
                    ? "bg-white dark:bg-white/10 text-neutral-900 dark:text-white shadow-sm dark:shadow-none"
                    : "text-neutral-500 dark:text-white/55 hover:text-neutral-900 dark:hover:text-white"
                }`}
                aria-current={isActive ? "page" : undefined}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
