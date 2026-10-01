import Link from "next/link";
import Image from "next/image";
import { personal, socialLinks } from "../lib/data";

const socialItems = [
  {
    label: "GitHub",
    href: socialLinks.github,
    colorClass: "text-black/50 dark:text-white/50 hover:text-black dark:hover:text-white",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
  },
  {
    label: "X",
    href: socialLinks.x,
    colorClass: "text-black/50 dark:text-white/50 hover:text-black dark:hover:text-white",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: socialLinks.linkedin,
    colorClass: "text-[#0A66C2] hover:text-[#004182]",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "LeetCode",
    href: socialLinks.leetcode,
    colorClass: "",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5">
        <defs>
          <linearGradient id="lcGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFA116" />
            <stop offset="100%" stopColor="#FFC01E" />
          </linearGradient>
        </defs>
        <path
          fill="url(#lcGrad)"
          d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0 0 7.293l3.854 4.126 5.406 5.788a1.374 1.374 0 0 0 1.006.441h.002a1.376 1.376 0 0 0 1.004-.441l6.187-6.626c.54-.578.54-1.494 0-2.072l-1.276-1.367a1.369 1.369 0 0 0-1.956 0l-3.381 3.62a.56.56 0 0 1-.414.178h-.002a.564.564 0 0 1-.416-.178l-3.381-3.62a1.372 1.372 0 0 1 0-1.919l4.834-5.177a1.37 1.37 0 0 1 1.001-.436c.383 0 .737.153 1.001.436l6.187 6.626a1.376 1.376 0 0 0 1.956 0l1.276-1.367a1.369 1.369 0 0 0 0-1.92L14.45.437A1.374 1.374 0 0 0 13.483 0z"
        />
      </svg>
    ),
  },
  {
    label: "Resume",
    href: socialLinks.resume,
    colorClass:
      "text-yellow-500 hover:text-yellow-400 drop-shadow-[0_0_8px_rgba(234,179,8,0.6)]",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="w-5 h-5"
      >
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
  },
];

export default function Intro() {
  return (
    <section className="max-w-4xl w-full mx-auto px-4 pt-12 pb-6 space-y-4">
      {/* Profile Card */}
      <div className="rounded-xl p-5 border border-black/[0.08] dark:border-white/[0.08] bg-black/[0.03] dark:bg-white/[0.03] transition-colors duration-500">
        <div className="flex flex-wrap sm:flex-nowrap items-start justify-between gap-6">
          <div className="flex gap-5 w-full sm:w-auto">
            <div className="w-24 h-32 sm:w-28 sm:h-36 rounded-lg flex-shrink-0 overflow-hidden bg-neutral-200 dark:bg-[#1a1a1a] relative transition-colors duration-500">
              <Image
                src="/iiitdm_Card.jpeg"
                alt="Arpit Kumar Singh - Full-Stack & GenAI Engineer"
                fill
                sizes="112px"
                className="object-cover"
                priority
              />
            </div>

            <div className="space-y-1.5 min-w-0 pt-1">
              <div className="flex items-center gap-2.5 flex-wrap">
                <h1 className="text-xl font-bold text-black dark:text-white tracking-wide">
                  {personal.shortName}
                </h1>
                <span className="text-[10px] px-2 py-0.5 rounded-full font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20 flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-blue-400"></span>
                  Remote
                </span>
              </div>

              <div className="text-sm text-black/60 dark:text-white/60 font-medium">
                {personal.title}
              </div>

              <div className="flex items-center gap-1.5 text-sm text-black/45 dark:text-white/45 truncate mt-1">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="w-3.5 h-3.5 flex-shrink-0"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <a
                  href={`mailto:${personal.email}`}
                  className="hover:text-black dark:hover:text-white transition-colors truncate"
                >
                  {personal.email}
                </a>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4 flex-shrink-0 pt-1">
            {socialItems.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                title={s.label}
                aria-label={s.label}
                className={`transition-all duration-200 ${s.colorClass}`}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="my-5 border-t border-black/[0.07] dark:border-white/[0.07]" />

        <div className="space-y-3 text-sm leading-relaxed text-black/70 dark:text-white/70">
          <p>
            Hi, I&apos;m{" "}
            <strong className="text-black dark:text-white font-semibold">
              {personal.shortName}
            </strong>
            , a full-stack & GenAI engineer from <span>🇮🇳</span> India.
          </p>
          <p>
            I build end-to-end products that{" "}
            <strong className="text-black dark:text-white font-semibold">
              scale and ship on time
            </strong>
            . From RAG pipelines to production web platforms, I craft systems
            that just work.
          </p>
          <p>
            You can reach me on{" "}
            <a
              href={socialLinks.x}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black dark:text-white hover:underline transition-colors"
            >
              <strong className="font-semibold">𝕏 DMs</strong>
            </a>{" "}
            or{" "}
            <a
              href={`mailto:${personal.email}`}
              className="text-black dark:text-white hover:underline transition-colors"
            >
              <strong className="font-semibold">Email</strong>
            </a>
            .
          </p>
        </div>
      </div>

      {/* AI Agent Banner */}
      <div className="rounded-xl px-5 py-3.5 flex items-center justify-between border border-black/[0.08] dark:border-white/[0.08] bg-black/[0.03] dark:bg-white/[0.03] overflow-hidden gap-4 mt-2 transition-colors duration-500">
        <span className="text-sm text-black/50 dark:text-white/50 truncate">
          AI agent reading this portfolio?
        </span>
        <Link
          href="/ai-agents"
          className="text-xs sm:text-sm px-3 sm:px-4 py-1.5 rounded-lg font-medium transition-colors duration-150 bg-transparent text-cyan-400 border border-cyan-400/50 hover:bg-cyan-400/10 hover:border-cyan-400 whitespace-nowrap"
        >
          Open AI Agents Page
        </Link>
      </div>
    </section>
  );
}
