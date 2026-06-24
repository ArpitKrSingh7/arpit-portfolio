import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { projects, type Project } from "../lib/data";
import { fetchRepoStats } from "../lib/github";

const tagColors: Record<string, { bg: string; text: string }> = {
  default: { bg: "rgba(255,255,255,0.06)", text: "rgba(255,255,255,0.65)" },
  "Next.js": { bg: "rgba(255,255,255,0.08)", text: "rgba(255,255,255,0.75)" },
  TypeScript: { bg: "rgba(59,130,246,0.15)", text: "#93c5fd" },
  JavaScript: { bg: "rgba(234,179,8,0.12)", text: "#fde047" },
  Python: { bg: "rgba(234,179,8,0.12)", text: "#fde047" },
  "Node.js": { bg: "rgba(34,197,94,0.12)", text: "#86efac" },
  Express: { bg: "rgba(34,197,94,0.12)", text: "#86efac" },
  "Express.js": { bg: "rgba(34,197,94,0.12)", text: "#86efac" },
  "C/C++": { bg: "rgba(59,130,246,0.12)", text: "#93c5fd" },
  RAG: { bg: "rgba(34,211,238,0.12)", text: "#67e8f9" },
  MongoDB: { bg: "rgba(34,197,94,0.12)", text: "#86efac" },
  PostgreSQL: { bg: "rgba(59,130,246,0.12)", text: "#93c5fd" },
  Redis: { bg: "rgba(239,68,68,0.12)", text: "#fca5a5" },
  Docker: { bg: "rgba(59,130,246,0.12)", text: "#93c5fd" },
  AWS: { bg: "rgba(245,158,11,0.12)", text: "#fcd34d" },
  Stripe: { bg: "rgba(168,85,247,0.12)", text: "#c084fc" },
  FastAPI: { bg: "rgba(34,197,94,0.12)", text: "#86efac" },
  TensorFlow: { bg: "rgba(234,179,8,0.12)", text: "#fde047" },
  "WebSockets": { bg: "rgba(34,211,238,0.12)", text: "#67e8f9" },
  Neo4j: { bg: "rgba(34,197,94,0.12)", text: "#86efac" },
  Qdrant: { bg: "rgba(249,115,22,0.12)", text: "#fdba74" },
  LangChain: { bg: "rgba(34,211,238,0.12)", text: "#67e8f9" },
  LangGraph: { bg: "rgba(34,211,238,0.12)", text: "#67e8f9" },
  "OpenAI": { bg: "rgba(255,255,255,0.08)", text: "rgba(255,255,255,0.75)" },
  Gemini: { bg: "rgba(59,130,246,0.15)", text: "#93c5fd" },
  React: { bg: "rgba(34,211,238,0.12)", text: "#67e8f9" },
  "Tailwind CSS": { bg: "rgba(56,189,248,0.12)", text: "#7dd3fc" },
};

function getTagStyle(tag: string) {
  return tagColors[tag] || tagColors.default;
}

type ProjectWithStats = Project & { stars: number; forks: number };

function ProjectCard({ project }: { project: ProjectWithStats }) {
  return (
    <div className="rounded-xl overflow-hidden flex flex-col border border-white/[0.08] bg-white/[0.02]">
      <div className="w-full h-48 overflow-hidden bg-[#111] border-b border-white/[0.06]">
        <img
          src={project.thumbnail}
          alt={project.title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-5 flex flex-col flex-1 gap-3">
        <div className="flex items-start justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="text-[12px] font-mono text-white/35">{"</>"}</span>
            <h3 className="text-sm font-semibold text-white">
              {project.title}
            </h3>
          </div>
          <div className="flex items-center gap-2 flex-shrink-0">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                title="Live Website"
                className="text-white/40 hover:text-white transition-colors"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="w-4 h-4"
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
                title="GitHub Repository"
                className="text-white/40 hover:text-white transition-colors"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              </a>
            )}
          </div>
        </div>

        <div className="flex items-center gap-4 text-xs text-white/40">
          {project.githubRepo && (
            <>
              <span className="flex items-center gap-1.5">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-3.5 h-3.5 text-yellow-500"
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
                  className="w-3.5 h-3.5"
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

        <p className="text-sm leading-relaxed flex-1 text-white/60">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-4 pt-2 border-t border-white/[0.04]">
          {project.tags.map((tag) => {
            const style = getTagStyle(tag);
            return (
              <span
                key={tag}
                className="text-[11px] font-medium px-2.5 py-1 rounded-md whitespace-nowrap"
                style={{ backgroundColor: style.bg, color: style.text }}
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
      style={{ backgroundColor: "#0a0a0a" }}
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
