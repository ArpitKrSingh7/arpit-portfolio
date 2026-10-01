import Image from "next/image";
import { type Project } from "../lib/data";
import { getTagStyle } from "../lib/tag-colors";

export type ProjectWithStats = Project & { stars: number; forks: number };

export default function ProjectCard({
  project,
  compact = false,
}: {
  project: ProjectWithStats;
  compact?: boolean;
}) {
  return (
    <div className="rounded-xl overflow-hidden flex flex-col border border-black/[0.08] dark:border-white/[0.08] bg-black/[0.02] dark:bg-white/[0.02] transition-colors duration-500">
      <div
        className={`w-full overflow-hidden bg-neutral-100 dark:bg-[#111] border-b border-black/[0.06] dark:border-white/[0.06] relative transition-colors duration-500 ${
          compact ? "h-44" : "h-48"
        }`}
      >
        <Image
          src={project.thumbnail}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
        />
      </div>

      <div className={`flex flex-col flex-1 gap-3 ${compact ? "p-4" : "p-5"}`}>
        <div className="flex items-start justify-between gap-2">
          <div className="flex items-center gap-2">
            <span
              className={`text-black/35 dark:text-white/35 transition-colors duration-500 ${
                compact ? "text-[12px]" : "text-[12px] font-mono"
              }`}
            >
              {"</>"}
            </span>
            <h3 className="text-sm font-semibold text-black dark:text-white transition-colors duration-500">
              {project.title}
            </h3>
          </div>
          <div
            className={`flex items-center flex-shrink-0 ${
              compact ? "gap-1.5" : "gap-2"
            }`}
          >
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View live demo of ${project.title}`}
                className="text-black/40 dark:text-white/40 hover:text-black dark:hover:text-white transition-colors duration-500"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="w-4 h-4"
                  aria-hidden="true"
                >
                  <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.title} on GitHub`}
                className="text-black/40 dark:text-white/40 hover:text-black dark:hover:text-white transition-colors duration-500"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4"
                  aria-hidden="true"
                >
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              </a>
            )}
          </div>
        </div>

        <div
          className={`flex items-center text-black/40 dark:text-white/40 transition-colors duration-500 ${
            compact ? "gap-3 text-xs" : "gap-4 text-xs"
          }`}
        >
          {project.githubRepo && (
            <>
              <span className="flex items-center gap-1.5">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className={`text-yellow-500 ${
                    compact ? "w-3 h-3" : "w-3.5 h-3.5"
                  }`}
                  aria-hidden="true"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                {project.stars}
              </span>
              <span className="flex items-center gap-1.5">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className={compact ? "w-3 h-3" : "w-3.5 h-3.5"}
                  aria-hidden="true"
                >
                  <circle cx="12" cy="18" r="3" />
                  <circle cx="6" cy="6" r="3" />
                  <circle cx="18" cy="6" r="3" />
                  <path d="M18 9a9 9 0 01-9 9M6 9a9 9 0 009 9" />
                </svg>
                {project.forks}
              </span>
            </>
          )}
        </div>

        <p
          className={`leading-relaxed flex-1 ${
            compact ? "text-xs text-black/55 dark:text-white/55 transition-colors duration-500" : "text-sm text-black/60 dark:text-white/60 transition-colors duration-500"
          }`}
        >
          {project.description}
        </p>

        <div
          className={`flex flex-wrap mt-auto ${
            compact ? "gap-1.5 pt-1" : "gap-2 mt-4 pt-2 border-t border-black/[0.04] dark:border-white/[0.04] transition-colors duration-500"
          }`}
        >
          {project.tags.map((tag) => {
            const style = getTagStyle(tag);
            return (
              <span
                key={tag}
                className={`font-medium rounded-md whitespace-nowrap transition-colors duration-500 ${style.bgClass} ${style.textClass} ${
                  compact ? "text-xs px-2 py-0.5" : "text-[11px] px-2.5 py-1"
                }`}
              >
                {tag}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}
