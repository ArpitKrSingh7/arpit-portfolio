"use client";

import { useEffect, useState } from "react";

type ContributionDay = {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
};

const GITHUB_USERNAME = "ArpitKrSingh7";

// Color levels matching GitHub's contribution graph style (dark theme)
const levelColors: Record<number, string> = {
  0: "rgba(255,255,255,0.06)",
  1: "#0e4429",
  2: "#006d32",
  3: "#26a641",
  4: "#39d353",
};

// Generate placeholder contribution data (replace with real API call if needed)
function generatePlaceholderData(): {
  weeks: ContributionDay[][];
  total: number;
} {
  const weeks: ContributionDay[][] = [];
  const today = new Date();
  let total = 0;

  for (let w = 51; w >= 0; w--) {
    const week: ContributionDay[] = [];
    for (let d = 0; d < 7; d++) {
      const date = new Date(today);
      date.setDate(date.getDate() - (w * 7 + (6 - d)));
      const count = Math.random() > 0.3 ? Math.floor(Math.random() * 12) : 0;
      total += count;
      week.push({
        date: date.toISOString().split("T")[0],
        count,
        level: (count === 0
          ? 0
          : count < 3
            ? 1
            : count < 6
              ? 2
              : count < 9
                ? 3
                : 4) as 0 | 1 | 2 | 3 | 4,
      });
    }
    weeks.push(week);
  }

  return { weeks, total };
}

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

export default function GithubActivity() {
  const [data, setData] = useState<{
    weeks: ContributionDay[][];
    total: number;
  } | null>(null);
  const [tooltip, setTooltip] = useState<{
    text: string;
    x: number;
    y: number;
  } | null>(null);

  useEffect(() => {
    // In production, replace with real GitHub contribution API or a proxy
    setData(generatePlaceholderData());
  }, []);

  if (!data) return null;

  // Get month labels: find first week of each month
  const monthLabels: { label: string; index: number }[] = [];
  data.weeks.forEach((week, wi) => {
    const firstDay = week.find((d) => d.date);
    if (firstDay) {
      const month = new Date(firstDay.date).getMonth();
      const prev =
        wi > 0 ? new Date(data.weeks[wi - 1][0].date).getMonth() : -1;
      if (month !== prev) {
        monthLabels.push({ label: MONTHS[month], index: wi });
      }
    }
  });

  return (
    <section className="max-w-3xl mx-auto px-4 py-10">
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-white">GitHub Activity</h2>
        <p className="text-sm mt-1" style={{ color: "rgba(255,255,255,0.4)" }}>
          My contribution graph
        </p>
      </div>

      <div
        className="rounded-xl p-5 overflow-x-auto"
        style={{
          border: "1px solid rgba(255,255,255,0.08)",
          backgroundColor: "rgba(255,255,255,0.02)",
        }}
      >
        {/* Month labels */}
        <div className="flex mb-1 ml-0" style={{ gap: "3px" }}>
          {data.weeks.map((_, wi) => {
            const label = monthLabels.find((m) => m.index === wi);
            return (
              <div key={wi} className="flex-shrink-0" style={{ width: "11px" }}>
                {label && (
                  <span
                    className="text-xs whitespace-nowrap"
                    style={{ color: "rgba(255,255,255,0.3)", fontSize: "10px" }}
                  >
                    {label.label}
                  </span>
                )}
              </div>
            );
          })}
        </div>

        {/* Grid */}
        <div className="flex" style={{ gap: "3px" }}>
          {data.weeks.map((week, wi) => (
            <div
              key={wi}
              className="flex flex-col flex-shrink-0"
              style={{ gap: "3px" }}
            >
              {week.map((day, di) => (
                <div
                  key={di}
                  className="rounded-sm cursor-pointer transition-opacity duration-100"
                  style={{
                    width: "11px",
                    height: "11px",
                    backgroundColor: levelColors[day.level],
                  }}
                  onMouseEnter={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    setTooltip({
                      text: `${day.count} contributions on ${day.date}`,
                      x: rect.left,
                      y: rect.top - 28,
                    });
                  }}
                  onMouseLeave={() => setTooltip(null)}
                />
              ))}
            </div>
          ))}
        </div>

        {/* Total */}
        <p className="mt-3 text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>
          {data.total.toLocaleString()} contributions in the last year
        </p>
      </div>

      {/* Tooltip */}
      {tooltip && (
        <div
          className="fixed z-50 px-2 py-1 rounded text-xs pointer-events-none"
          style={{
            left: tooltip.x,
            top: tooltip.y,
            backgroundColor: "#1a1a1a",
            border: "1px solid rgba(255,255,255,0.15)",
            color: "rgba(255,255,255,0.85)",
            transform: "translateX(-50%)",
          }}
        >
          {tooltip.text}
        </div>
      )}

      {/* Link to GitHub */}
      <div className="mt-3 text-right">
        <a
          href={`https://github.com/${GITHUB_USERNAME}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs transition-colors duration-150"
          style={{ color: "rgba(255,255,255,0.35)" }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.color = "rgba(255,255,255,0.7)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.color = "rgba(255,255,255,0.35)")
          }
        >
          @{GITHUB_USERNAME} on GitHub →
        </a>
      </div>
    </section>
  );
}
