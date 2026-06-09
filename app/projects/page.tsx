import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

type Project = {
  title: string;
  description: string;
  stars: number;
  forks: number;
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
  image?: string;
};

const projects: Project[] = [
  {
    title: "Pod Gear Platform",
    description:
      "Full-stack e-commerce and coach booking platform serving 10k–15k users. Built with Next.js, MongoDB, and Cal.com integration.",
    stars: 5,
    forks: 0,
    tags: ["Next.js", "TypeScript", "MongoDB", "Cal.com", "Express"],
    githubUrl: "https://github.com/ArpitKrSingh7",
    liveUrl: "https://podgear.in",
  },
  {
    title: "RepoExplainer",
    description:
      "RAG-based GitHub repository Q&A tool. Ask natural language questions about any codebase and get context-aware answers powered by vector search.",
    stars: 12,
    forks: 3,
    tags: ["Next.js", "TypeScript", "RAG", "Qdrant", "LangChain"],
    githubUrl: "https://github.com/ArpitKrSingh7",
  },
  {
    title: "TubeTalkAI",
    description:
      "Hybrid Neo4j/Qdrant RAG system for YouTube. Extracts transcripts, builds a knowledge graph, and answers questions about video content.",
    stars: 8,
    forks: 1,
    tags: ["Python", "Neo4j", "Qdrant", "RAG", "YouTube API"],
    githubUrl: "https://github.com/ArpitKrSingh7",
  },

  {
    title: "Pothole Detection API",
    description:
      "Microservices backend for an AI-powered pothole detection system using LSTM models and YOLO for real-time road defect identification.",
    stars: 4,
    forks: 2,
    tags: ["Python", "FastAPI", "YOLOv8", "LSTM", "Docker"],
    githubUrl: "https://github.com/ArpitKrSingh7",
  },
];

const tagColors: Record<string, { bg: string; text: string }> = {
  default: { bg: "rgba(255,255,255,0.06)", text: "rgba(255,255,255,0.65)" },
  "Next.js": { bg: "rgba(255,255,255,0.08)", text: "rgba(255,255,255,0.75)" },
  TypeScript: { bg: "rgba(59,130,246,0.15)", text: "#93c5fd" },
  Python: { bg: "rgba(234,179,8,0.12)", text: "#fde047" },
  RAG: { bg: "rgba(34,211,238,0.12)", text: "#67e8f9" },
  MongoDB: { bg: "rgba(34,197,94,0.12)", text: "#86efac" },
  Docker: { bg: "rgba(59,130,246,0.12)", text: "#93c5fd" },
};

function getTagStyle(tag: string) {
  return tagColors[tag] || tagColors.default;
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="rounded-xl overflow-hidden flex flex-col border border-white/[0.08] bg-white/[0.02]">
      {project.image ? (
        <div className="w-full h-48 overflow-hidden bg-[#111]">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>
      ) : (
        <div className="w-full h-48 flex items-center justify-center bg-[#111] border-b border-white/[0.06]">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="1.5"
            className="w-12 h-12"
          >
            <path d="M9 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V9l-6-6z" />
            <polyline points="9 3 9 9 15 9" />
          </svg>
        </div>
      )}

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
          </div>
        </div>

        <div className="flex items-center gap-4 text-xs text-white/40">
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
                className="text-[11px] font-medium px-2.5 py-1 rounded-md"
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

export default function Projects() {
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
              A comprehensive list of things I've built, hacked together, and
              shipped.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
