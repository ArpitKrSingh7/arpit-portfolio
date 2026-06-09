type Tech = {
  name: string;
  icon?: string;
  iconText?: string;
};

type Category = {
  label: string;
  techs: Tech[];
};

const categories: Category[] = [
  // ... Keep your categories array exactly as it was ...
  {
    label: "LANGUAGES",
    techs: [
      {
        name: "TypeScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      },
      {
        name: "JavaScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      },
      {
        name: "Python",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      },
      {
        name: "C/C++",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
      },
    ],
  },
  {
    label: "FRONTEND",
    techs: [
      {
        name: "Next.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      },
      {
        name: "React",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      {
        name: "Tailwind",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
      },
      { name: "Framer Motion", iconText: "FM" },
    ],
  },
  {
    label: "BACKEND",
    techs: [
      {
        name: "Node.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      },
      {
        name: "Express",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
      },
      { name: "REST API", iconText: "⚙" },
      { name: "WebSockets", iconText: "WS" },
    ],
  },
  {
    label: "DATABASE",
    techs: [
      {
        name: "MongoDB",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      },
      {
        name: "PostgreSQL",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
      },
      {
        name: "Redis",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
      },
      { name: "Neo4j", iconText: "N4" },
      { name: "Qdrant", iconText: "QD" },
    ],
  },
  {
    label: "AI / ML",
    techs: [
      {
        name: "PyTorch",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg",
      },
      {
        name: "TensorFlow",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
      },
      { name: "LangChain", iconText: "🦜" },
      { name: "RAG", iconText: "AI" },
      { name: "YOLOv8", iconText: "YO" },
    ],
  },
  {
    label: "DEVOPS",
    techs: [
      {
        name: "Docker",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
      },
      {
        name: "Git",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      },
      {
        name: "Linux",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
      },
      {
        name: "Nginx",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg",
      },
    ],
  },
];

function TechBadge({ tech }: { tech: Tech }) {
  return (
    <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm cursor-default transition-colors duration-150 bg-white/5 border border-white/[0.08] text-white/75 hover:bg-white/10 hover:text-white">
      {tech.icon ? (
        <img
          src={tech.icon}
          alt={tech.name}
          className="w-4 h-4 object-contain"
        />
      ) : (
        <span className="w-4 h-4 text-xs flex items-center justify-center text-cyan-400">
          {tech.iconText}
        </span>
      )}
      <span>{tech.name}</span>
    </div>
  );
}

export default function TechStack() {
  return (
    <section className="max-w-3xl mx-auto px-4 py-10">
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-white">Tech Stack</h2>
        <p className="text-sm mt-1 text-white/40">Technologies I work with</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {categories.map((cat) => (
          <div
            key={cat.label}
            className="rounded-xl p-4 border border-white/[0.08] bg-white/[0.02]"
          >
            <p className="text-xs font-semibold tracking-widest mb-3 text-white/30">
              {cat.label}
            </p>
            <div className="flex flex-wrap gap-2">
              {cat.techs.map((tech) => (
                <TechBadge key={tech.name} tech={tech} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
