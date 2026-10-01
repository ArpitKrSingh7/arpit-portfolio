import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { projects } from "../lib/data";
import { fetchRepoStats } from "../lib/github";
import ProjectCard, { type ProjectWithStats } from "../components/ProjectCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore projects built by Arpit Kumar Singh — from full-stack web applications and RAG-powered AI tools to microservices and real-time systems.",
  openGraph: {
    title: "Projects | Arpit Kumar Singh",
    description:
      "Explore projects built by Arpit Kumar Singh — full-stack apps, AI tools, and more.",
  },
};

async function getProjectsWithStats(): Promise<ProjectWithStats[]> {
  return Promise.all(
    projects.map(async (project) => {
      if (!project.githubRepo) return { ...project, stars: 0, forks: 0 };
      const stats = await fetchRepoStats(project.githubRepo);
      return { ...project, stars: stats.stars, forks: stats.forks };
    })
  );
}

export default async function ProjectsPage() {
  const projectsWithStats = await getProjectsWithStats();

  return (
    <main
      className="min-h-screen selection:bg-cyan-500/30 flex flex-col"
      
    >
      <Navbar />

      <div className="flex-1 w-full">
        <section className="max-w-4xl w-full mx-auto px-4 py-12 md:py-16">
          <div className="mb-10">
            <h1 className="text-3xl font-bold text-white mb-2">Projects</h1>
            <p className="text-base text-white/50">
              A comprehensive list of things I&apos;ve built, hacked together, and
              shipped.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {projectsWithStats.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
