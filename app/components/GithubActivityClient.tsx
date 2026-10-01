"use client";

import { useState } from "react";

export type ContributionDay = {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
};

const levelClasses: Record<number, string> = {
  0: "bg-black/5 dark:bg-white/5",
  1: "bg-emerald-500/35 dark:bg-emerald-500/35",
  2: "bg-emerald-500/55 dark:bg-emerald-500/55",
  3: "bg-emerald-500/75 dark:bg-emerald-500/75",
  4: "bg-emerald-500/95 dark:bg-emerald-500/95",
};

const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export default function GithubActivityClient({
  weeks,
  total,
  longestStreak,
  currentStreak,
  username,
  profileUrl,
  publicRepos,
  followers,
}: {
  weeks: ContributionDay[][];
  total: number;
  longestStreak: number;
  currentStreak: number;
  username: string;
  profileUrl: string;
  publicRepos: number;
  followers: number;
}) {
  const [tooltip, setTooltip] = useState<{
    text: string;
    x: number;
    y: number;
  } | null>(null);

  const monthLabels: { label: string; index: number }[] = [];
  weeks.forEach((week, wi) => {
    const firstDay = week.find((d) => d.date);
    if (firstDay) {
      const month = new Date(firstDay.date).getMonth();
      const prev = wi > 0 ? new Date(weeks[wi - 1][0].date).getMonth() : -1;
      if (month !== prev) monthLabels.push({ label: MONTHS[month], index: wi });
    }
  });

  return (
    <section className="max-w-4xl w-full mx-auto px-4 py-10">
      <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
        <div>
          <h2 className="text-xl font-semibold text-black dark:text-white">GitHub Activity</h2>
          <p className="text-sm mt-1 text-black/40 dark:text-white/40">
            {total.toLocaleString()} contributions in the last year
          </p>
        </div>
        <a
          href={profileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs transition-colors duration-150 hover:text-black/70 dark:hover:text-white/70 text-black/35 dark:text-white/35"
        >
          @{username} on GitHub →
        </a>
      </div>

      <div className="w-full rounded-xl p-5 border border-black/[0.08] dark:border-white/[0.08] bg-black/[0.02] dark:bg-white/[0.02] transition-colors duration-500">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-5">
          <div className="rounded-lg p-3 bg-black/[0.03] dark:bg-white/[0.03] border border-black/[0.06] dark:border-white/[0.06] transition-colors duration-500">
            <p className="text-xs text-black/40 dark:text-white/40 mb-1">Contributions</p>
            <p className="text-xl font-semibold text-black dark:text-white">
              {total.toLocaleString()}
            </p>
          </div>
          <div className="rounded-lg p-3 bg-black/[0.03] dark:bg-white/[0.03] border border-black/[0.06] dark:border-white/[0.06] transition-colors duration-500">
            <p className="text-xs text-black/40 dark:text-white/40 mb-1">Current Streak</p>
            <p className="text-xl font-semibold text-black dark:text-white">{currentStreak}d</p>
          </div>
          <div className="rounded-lg p-3 bg-black/[0.03] dark:bg-white/[0.03] border border-black/[0.06] dark:border-white/[0.06] transition-colors duration-500">
            <p className="text-xs text-black/40 dark:text-white/40 mb-1">Longest Streak</p>
            <p className="text-xl font-semibold text-black dark:text-white">{longestStreak}d</p>
          </div>
          <div className="rounded-lg p-3 bg-black/[0.03] dark:bg-white/[0.03] border border-black/[0.06] dark:border-white/[0.06] transition-colors duration-500">
            <p className="text-xs text-black/40 dark:text-white/40 mb-1">Repos · Followers</p>
            <p className="text-xl font-semibold text-black dark:text-white">
              {publicRepos} · {followers}
            </p>
          </div>
        </div>

        <div className="overflow-x-auto custom-scrollbar pb-2">
          <div className="min-w-max">
            <div
              className="flex mb-1"
              style={{ gap: "4.85px", paddingLeft: "0px" }}
            >
              {weeks.map((_, wi) => {
                const label = monthLabels.find((m) => m.index === wi);
                return (
                  <div
                    key={wi}
                    className="flex-shrink-0"
                    style={{ width: "11px" }}
                  >
                    {label && (
                      <span className="text-[10px] whitespace-nowrap text-black/30 dark:text-white/30">
                        {label.label}
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
            <div className="flex" style={{ gap: "4.85px" }}>
              {weeks.map((week, wi) => (
                <div
                  key={wi}
                  className="flex flex-col flex-shrink-0"
                  style={{ gap: "3px" }}
                >
                  {week.map((day, di) => (
                    <div
                      key={di}
                      className={`rounded-sm cursor-pointer transition-all duration-100 hover:ring-1 hover:ring-black/30 dark:hover:ring-white/30 ${levelClasses[day.level]}`}
                      style={{
                        width: "11px",
                        height: "11px",
                      }}
                      onMouseEnter={(e) => {
                        setTooltip({
                          text: `${day.count} contribution${day.count === 1 ? "" : "s"} on ${day.date}`,
                          x: e.clientX,
                          y: e.clientY - 36,
                        });
                      }}
                      onMouseMove={(e) => {
                        setTooltip((prev) =>
                          prev
                            ? { ...prev, x: e.clientX, y: e.clientY - 36 }
                            : prev,
                        );
                      }}
                      onMouseLeave={() => setTooltip(null)}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-4 flex items-center gap-3 text-xs text-black/40 dark:text-white/40">
          <span>Less</span>
          {[0, 1, 2, 3, 4].map((level) => (
            <div
              key={level}
              className={`rounded-sm ${levelClasses[level]}`}
              style={{
                width: "11px",
                height: "11px",
              }}
            />
          ))}
          <span>More</span>
        </div>
      </div>

      {tooltip && (
        <div
          className="fixed z-50 px-2 py-1 rounded text-xs pointer-events-none"
          style={{
            left: typeof window !== 'undefined' ? Math.max(80, Math.min(window.innerWidth - 80, tooltip.x)) : tooltip.x,
            top: tooltip.y,
            backgroundColor: "var(--tooltip-bg, #171717)",
            border: "1px solid var(--tooltip-border, rgba(255,255,255,0.12))",
            color: "var(--tooltip-color, rgba(255,255,255,0.9))",
            transform: "translateX(-50%)",
          }}
        >
          {tooltip.text}
        </div>
      )}
    </section>
  );
}
