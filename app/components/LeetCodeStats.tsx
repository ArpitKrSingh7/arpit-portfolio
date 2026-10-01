import { fetchLeetCodeStats } from "../lib/leetcode";
import { socialLinks } from "../lib/data";

export default async function LeetCodeStats() {
  const stats = await fetchLeetCodeStats();

  return (
    <section className="max-w-4xl w-full mx-auto px-4 py-10">
      <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
        <div>
          <h2 className="text-xl font-semibold text-black dark:text-white">LeetCode</h2>
          <p className="text-sm mt-1 text-black/40 dark:text-white/40">
            Competitive programming stats
          </p>
        </div>
        <a
          href={socialLinks.leetcode}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-black/35 dark:text-white/35 hover:text-black/70 dark:hover:text-white/70 transition-colors duration-150"
        >
          @{stats?.username || "Arpitkrsingh"} on LeetCode →
        </a>
      </div>

      <div
        className="w-full rounded-xl p-5 border border-black/[0.08] dark:border-white/[0.08] bg-black/[0.02] dark:bg-white/[0.02] transition-colors duration-500"
      >
        {stats ? (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="rounded-lg p-4 bg-black/[0.03] dark:bg-white/[0.03] border border-black/[0.06] dark:border-white/[0.06] transition-colors duration-500">
              <p className="text-xs text-black/40 dark:text-white/40 mb-1">Problems Solved</p>
              <p className="text-2xl font-semibold text-black dark:text-white">
                {stats.solved}
              </p>
            </div>
            <div className="rounded-lg p-4 bg-black/[0.03] dark:bg-white/[0.03] border border-black/[0.06] dark:border-white/[0.06] flex flex-col justify-center transition-colors duration-500">
              <p className="text-xs text-black/40 dark:text-white/40 mb-1">Easy / Medium / Hard</p>
              <div className="w-full h-2 flex rounded-full overflow-hidden mb-3 bg-black/10 dark:bg-white/10 mt-2">
                <div style={{ width: `${(stats.easy / stats.solved) * 100}%` }} className="bg-emerald-500 dark:bg-emerald-400" />
                <div style={{ width: `${(stats.medium / stats.solved) * 100}%` }} className="bg-amber-500 dark:bg-amber-400" />
                <div style={{ width: `${(stats.hard / stats.solved) * 100}%` }} className="bg-rose-500 dark:bg-rose-400" />
              </div>
              
              <div className="flex justify-between text-[11px] font-medium">
                <div className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-emerald-400"></span>
                  <span className="text-neutral-700 dark:text-neutral-300">{stats.easy}</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-amber-500 dark:bg-amber-400"></span>
                  <span className="text-neutral-700 dark:text-neutral-300">{stats.medium}</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-rose-500 dark:bg-rose-400"></span>
                  <span className="text-neutral-700 dark:text-neutral-300">{stats.hard}</span>
                </div>
              </div>
            </div>
            <div className="rounded-lg p-4 bg-black/[0.03] dark:bg-white/[0.03] border border-black/[0.06] dark:border-white/[0.06] transition-colors duration-500">
              <p className="text-xs text-black/40 dark:text-white/40 mb-1">Global Ranking</p>
              <p className="text-2xl font-semibold text-black dark:text-white">
                {stats.ranking.toLocaleString()}
              </p>
            </div>
            <div className="rounded-lg p-4 bg-black/[0.03] dark:bg-white/[0.03] border border-black/[0.06] dark:border-white/[0.06] transition-colors duration-500">
              <p className="text-xs text-black/40 dark:text-white/40 mb-1">Contest Rating</p>
              <p className="text-2xl font-semibold text-black dark:text-white">
                {stats.contestRating || "—"}
              </p>
              {stats.contestTopPercentage > 0 && (
                <p className="text-[10px] text-black/40 dark:text-white/40 mt-1">
                  Top {stats.contestTopPercentage}%
                </p>
              )}
            </div>
          </div>
        ) : (
          <p className="text-sm text-black/50 dark:text-white/50">
            Could not load LeetCode stats right now.
          </p>
        )}
      </div>
    </section>
  );
}
