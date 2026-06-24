import { fetchGitHubProfile, fetchContributions } from "../lib/github";
import GithubActivityClient, { type ContributionDay } from "./GithubActivityClient";

const GITHUB_USERNAME = "ArpitKrSingh7";

function getLast52Weeks(contributions: { date: string; count: number; level: number }[]): {
  weeks: ContributionDay[][];
  total: number;
  longestStreak: number;
  currentStreak: number;
} {
  const today = new Date();
  const byDate: Record<string, { count: number; level: number }> = {};
  contributions.forEach((c) => {
    byDate[c.date] = { count: c.count, level: c.level };
  });

  const weeks: ContributionDay[][] = [];
  let total = 0;

  // Align to the most recent Sunday for a clean GitHub-style grid
  const currentSunday = new Date(today);
  const dayOfWeek = currentSunday.getDay();
  currentSunday.setDate(currentSunday.getDate() - dayOfWeek);

  for (let w = 51; w >= 0; w--) {
    const week: ContributionDay[] = [];
    const weekStart = new Date(currentSunday);
    weekStart.setDate(weekStart.getDate() - w * 7);

    for (let d = 0; d < 7; d++) {
      const date = new Date(weekStart);
      date.setDate(date.getDate() + d);
      const dateStr = date.toISOString().split("T")[0];
      const entry = byDate[dateStr] || { count: 0, level: 0 };
      total += entry.count;
      week.push({
        date: dateStr,
        count: entry.count,
        level: Math.min(4, Math.max(0, entry.level)) as 0 | 1 | 2 | 3 | 4,
      });
    }
    weeks.push(week);
  }

  // Compute streaks from all flat days in last 52 weeks
  const flatDays = weeks.flat();
  let longestStreak = 0;
  let currentStreak = 0;
  let tempStreak = 0;

  flatDays.forEach((day) => {
    if (day.count > 0) {
      tempStreak += 1;
      longestStreak = Math.max(longestStreak, tempStreak);
    } else {
      tempStreak = 0;
    }
  });

  // Current streak: count backwards from today until a gap
  const reversed = [...flatDays].reverse();
  for (const day of reversed) {
    if (day.count > 0) {
      currentStreak += 1;
    } else if (day.date !== today.toISOString().split("T")[0]) {
      break;
    }
  }

  return { weeks, total, longestStreak, currentStreak };
}

export default async function GithubActivity() {
  const [profile, contributions] = await Promise.all([
    fetchGitHubProfile(),
    fetchContributions(),
  ]);

  const { weeks, total, longestStreak, currentStreak } = getLast52Weeks(contributions);

  return (
    <GithubActivityClient
      weeks={weeks}
      total={total}
      longestStreak={longestStreak}
      currentStreak={currentStreak}
      username={GITHUB_USERNAME}
      profileUrl={`https://github.com/${GITHUB_USERNAME}`}
      publicRepos={profile?.public_repos ?? 0}
      followers={profile?.followers ?? 0}
    />
  );
}
