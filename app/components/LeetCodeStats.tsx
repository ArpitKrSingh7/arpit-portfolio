import { fetchLeetCodeStats } from "../lib/leetcode";
import { socialLinks } from "../lib/data";

export default async function LeetCodeStats() {
  const stats = await fetchLeetCodeStats();

  return (
    <section className="max-w-4xl w-full mx-auto px-4 py-10">
      <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
        <div>
          <h2 className="text-xl font-semibold text-white">LeetCode</h2>
          <p className="text-sm mt-1 text-white/40">
            Competitive programming stats
          </p>
        </div>
        <a
          href={socialLinks.leetcode}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-white/35 hover:text-white/70 transition-colors duration-150"
        >
          @{stats?.username || "Arpitkrsingh"} on LeetCode →
        </a>
      </div>

      <div
        className="w-full rounded-xl p-5 border border-white/[0.08] bg-white/[0.02]"
      >
        {stats ? (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="rounded-lg p-4 bg-white/[0.03] border border-white/[0.06]">
              <p className="text-xs text-white/40 mb-1">Problems Solved</p>
              <p className="text-2xl font-semibold text-white">
                {stats.solved}
              </p>
            </div>
            <div className="rounded-lg p-4 bg-white/[0.03] border border-white/[0.06]">
              <p className="text-xs text-white/40 mb-1">Easy / Medium / Hard</p>
              <p className="text-lg font-semibold text-white">
                <span className="text-green-400">{stats.easy}</span>
                <span className="text-white/30 mx-1">/</span>
                <span className="text-yellow-400">{stats.medium}</span>
                <span className="text-white/30 mx-1">/</span>
                <span className="text-red-400">{stats.hard}</span>
              </p>
            </div>
            <div className="rounded-lg p-4 bg-white/[0.03] border border-white/[0.06]">
              <p className="text-xs text-white/40 mb-1">Global Ranking</p>
              <p className="text-2xl font-semibold text-white">
                {stats.ranking.toLocaleString()}
              </p>
            </div>
            <div className="rounded-lg p-4 bg-white/[0.03] border border-white/[0.06]">
              <p className="text-xs text-white/40 mb-1">Contest Rating</p>
              <p className="text-2xl font-semibold text-white">
                {stats.contestRating || "—"}
              </p>
              {stats.contestTopPercentage > 0 && (
                <p className="text-[10px] text-white/40 mt-1">
                  Top {stats.contestTopPercentage}%
                </p>
              )}
            </div>
          </div>
        ) : (
          <p className="text-sm text-white/50">
            Could not load LeetCode stats right now.
          </p>
        )}
      </div>
    </section>
  );
}
