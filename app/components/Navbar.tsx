"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [time, setTime] = useState("");
  const pathname = usePathname();

  useEffect(() => {
    const update = () => {
      const now = new Date();
      const hh = String(now.getHours()).padStart(2, "0");
      const mm = String(now.getMinutes()).padStart(2, "0");
      const ss = String(now.getSeconds()).padStart(2, "0");
      setTime(`${hh}:${mm}:${ss}`);
    };
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Projects", href: "/projects" },
    { label: "Blogs", href: "/blogs" },
  ];

  return (
    <header
      className="w-full sticky top-0 z-50"
      style={{ backgroundColor: "#0a0a0a" }}
    >
      {/* Top bar: clock + location */}
      <div className="px-6 py-2">
        <span className="text-xs font-mono" style={{ color: "#22d3ee" }}>
          {time} (GMT+5:30) Bihar Sharif, India
        </span>
      </div>

      {/* Nav links */}
      <nav className="flex justify-center pb-3">
        <div
          className="flex items-center gap-1 rounded-full px-2 py-1"
          style={{
            border: "1px solid rgba(255,255,255,0.1)",
            backgroundColor: "rgba(255,255,255,0.04)",
          }}
        >
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-1.5 rounded-full text-sm transition-colors duration-150"
                style={{
                  backgroundColor: isActive
                    ? "rgba(255,255,255,0.1)"
                    : "transparent",
                  color: isActive ? "#ffffff" : "rgba(255,255,255,0.55)",
                }}
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
