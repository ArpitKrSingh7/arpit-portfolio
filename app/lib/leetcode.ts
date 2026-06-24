export type LeetCodeStats = {
  username: string;
  ranking: number;
  solved: number;
  easy: number;
  medium: number;
  hard: number;
  contestsAttended: number;
  contestRating: number;
  contestTopPercentage: number;
};

const LEETCODE_USERNAME = "Arpitkrsingh";

export async function fetchLeetCodeStats(): Promise<LeetCodeStats | null> {
  try {
    const [profileRes, solvedRes, contestRes] = await Promise.all([
      fetch(`https://alfa-leetcode-api.onrender.com/${LEETCODE_USERNAME}`, {
        next: { revalidate: 3600 },
      }),
      fetch(
        `https://alfa-leetcode-api.onrender.com/${LEETCODE_USERNAME}/solved`,
        { next: { revalidate: 3600 } }
      ),
      fetch(
        `https://alfa-leetcode-api.onrender.com/${LEETCODE_USERNAME}/contest`,
        { next: { revalidate: 3600 } }
      ),
    ]);

    if (!profileRes.ok || !solvedRes.ok) return null;

    const profile = await profileRes.json();
    const solved = await solvedRes.json();
    const contest = contestRes.ok ? await contestRes.json() : null;

    return {
      username: profile.username || LEETCODE_USERNAME,
      ranking: profile.ranking || 0,
      solved: solved.solvedProblem || 0,
      easy: solved.easySolved || 0,
      medium: solved.mediumSolved || 0,
      hard: solved.hardSolved || 0,
      contestsAttended: contest?.contestAttend || 0,
      contestRating: contest?.contestRating
        ? Math.round(contest.contestRating)
        : 0,
      contestTopPercentage: contest?.contestTopPercentage || 0,
    };
  } catch {
    return null;
  }
}
