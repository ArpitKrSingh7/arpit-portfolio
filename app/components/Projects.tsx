import Link from "next/link";
import Image from "next/image";
import { featuredProjects } from "../lib/data";
import { fetchRepoStats } from "../lib/github";
import ProjectCard, { type ProjectWithStats } from "./ProjectCard";

async function getProjectsWithStats(): Promise<ProjectWithStats[]> {
  return Promise.all(
    featuredProjects.map(async (project) => {
      if (!project.githubRepo) return { ...project, stars: 0, forks: 0 };
      const stats = await fetchRepoStats(project.githubRepo);
      return { ...project, stars: stats.stars, forks: stats.forks };
    })
  );
}

export default async function Projects() {
  const projects = await getProjectsWithStats();

  return (
    <section className="max-w-4xl w-full mx-auto px-4 py-10">
      <div className="flex items-end justify-between mb-6">
        <div>
          <h2 className="text-xl font-semibold text-black dark:text-white transition-colors duration-500">Projects</h2>
          <p className="text-sm mt-1 text-black/40 dark:text-white/40 transition-colors duration-500">Things I&apos;ve built</p>
        </div>
        <Link
          href="/projects"
          className="flex items-center gap-1 text-sm px-3 py-1.5 rounded-lg transition-colors duration-500 border border-black/10 dark:border-white/10 text-black/55 dark:text-white/55 bg-black/[0.03] dark:bg-white/[0.03] hover:text-black dark:hover:text-white hover:bg-black/[0.07] dark:hover:bg-white/[0.07]"
        >
          View All
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="w-3.5 h-3.5"
            aria-hidden="true"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} compact />
        ))}
      </div>
    </section>
  );
}
