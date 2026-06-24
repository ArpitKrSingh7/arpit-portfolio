export type GitHubProfile = {
  login: string;
  avatar_url: string;
  html_url: string;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  created_at: string;
  bio: string | null;
};

export type GitHubRepoStats = {
  stars: number;
  forks: number;
  watchers: number;
};

export type GitHubContribution = {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
};

const GITHUB_USERNAME = "ArpitKrSingh7";

export async function fetchGitHubProfile(): Promise<GitHubProfile | null> {
  try {
    const res = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}`, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) return null;
    return res.json();
  } catch {
    return null;
  }
}

export async function fetchRepoStats(repo: string): Promise<GitHubRepoStats> {
  try {
    const res = await fetch(`https://api.github.com/repos/${repo}`, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) return { stars: 0, forks: 0, watchers: 0 };
    const data = await res.json();
    return {
      stars: data.stargazers_count || 0,
      forks: data.forks_count || 0,
      watchers: data.watchers_count || 0,
    };
  } catch {
    return { stars: 0, forks: 0, watchers: 0 };
  }
}

export async function fetchContributions(): Promise<GitHubContribution[]> {
  try {
    const res = await fetch(
      `https://github-contributions-api.jogruber.de/v4/${GITHUB_USERNAME}`,
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) return [];
    const data = await res.json();
    const contributions: GitHubContribution[] = data.contributions || [];
    return contributions.sort(
      (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
    );
  } catch {
    return [];
  }
}
