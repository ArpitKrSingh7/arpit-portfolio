export const personal = {
  name: "Arpit Kumar Singh",
  shortName: "Arpit Kr. Singh",
  title: "Full-Stack & GenAI Engineer",
  email: "arpitkumarsingh9470@gmail.com",
  phone: "+91-7004943067",
  location: "Bihar Sharif, India",
  timezone: "GMT+5:30",
  summary:
    "Full-Stack Developer with hands-on experience building scalable web applications, RESTful APIs, and microservices. Passionate about backend architecture, database design, and integrating AI into production systems.",
  education: {
    degree: "Dual Degree – B.Tech + M.Tech, Computer Science and Engineering",
    school: "IIITDM Kancheepuram, Chennai, Tamil Nadu",
    graduation: "Expected 2028",
    cgpa: "8.67 / 10",
  },
  achievements: [
    "European Rover Challenge 2025 (Remote): 4th rank globally among 100+ international teams",
    "International Rover Challenge 2025: 16th rank in global robotics competition",
    "Competitive Programming: Solved 600+ DSA problems on LeetCode, Codeforces, and CodeChef",
  ],
};

export const socialLinks = {
  github: "https://github.com/ArpitKrSingh7",
  x: "https://x.com/ArpitKrSingh7",
  linkedin: "https://www.linkedin.com/in/arpit-kumar-singh-aks100606",
  leetcode: "https://leetcode.com/u/Arpitkrsingh/",
  resume: "/MyResume.pdf",
  cal: "https://cal.com/",
};

export const experience = [
  {
    role: "Freelance Full-Stack Developer",
    company: "Pod Gear (E-Commerce & Coach Booking Platform)",
    period: "Jan 2025 – Present",
    location: "Remote",
    bullets: [
      "Architected an end-to-end e-commerce platform with a coach booking system using Next.js, TypeScript, and Tailwind CSS; served 10,000–15,000 users.",
      "Engineered backend with Node.js, MongoDB, and Redis caching; implemented OAuth 2.0 and role-based access control.",
      "Integrated Stripe for secure transactions and built an automated admin panel, reducing manual overhead by 80%.",
      "Deployed on AWS EC2 with Supabase for image storage; configured auto-scaling and monitoring.",
    ],
  },
  {
    role: "Software Team Member – Simulation",
    company: "MaRS Research Station, IIITDM Kancheepuram",
    period: "Aug 2024 – Present",
    location: "Kancheepuram, India",
    bullets: [
      "Collaborated with cross-functional teams to develop Gazebo simulation environments for rover testing under tight competition deadlines.",
      "Integrated SLAM and sensor fusion modules for localization and navigation, improving simulation reliability.",
      "Contributed to code reviews, sprint planning, and documentation to ensure scalable software architecture.",
    ],
  },
];

export type Project = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  githubRepo?: string;
  githubUrl?: string;
  liveUrl?: string;
  thumbnail: string;
  featured: boolean;
};

export const projects: Project[] = [
  {
    id: "podgear",
    title: "Pod Gear Platform",
    description:
      "Freelance e-commerce and coach booking platform serving 10k–15k users. Built with Next.js, Node.js, MongoDB, Redis, Stripe, and AWS EC2.",
    tags: ["Next.js", "TypeScript", "MongoDB", "Redis", "Stripe", "AWS"],
    thumbnail: "/thumbnails/podgear.svg",
    featured: true,
  },
  {
    id: "repoexplainer",
    title: "RepoExplainer",
    description:
      "AI-powered codebase assistant. Paste a GitHub repo URL and ask natural-language questions. Uses Gemini to intelligently select relevant files instead of embedding the entire codebase.",
    tags: ["Next.js", "TypeScript", "Node.js", "MongoDB", "Gemini", "RAG"],
    githubRepo: "ArpitKrSingh7/tamboBackend",
    githubUrl: "https://github.com/ArpitKrSingh7/tamboBackend",
    liveUrl: "https://repoexplainer-app.vercel.app/",
    thumbnail: "/thumbnails/repoexplainer.svg",
    featured: true,
  },
  {
    id: "tubetalkai",
    title: "TubeTalkAI",
    description:
      "CLI RAG assistant that lets you chat with YouTube videos. Fetches transcripts, builds a Neo4j knowledge graph and Qdrant vector store, and answers with timestamped responses via Gemini.",
    tags: ["Python", "Neo4j", "Qdrant", "RAG", "Gemini", "LangChain"],
    githubRepo: "ArpitKrSingh7/TubeTalkAI",
    githubUrl: "https://github.com/ArpitKrSingh7/TubeTalkAI",
    thumbnail: "/thumbnails/tubetalkai.svg",
    featured: true,
  },
  {
    id: "pothole",
    title: "Pothole Detection Backend",
    description:
      "Microservices backend for an AI-powered pothole detection system. Express API gateway proxies sensor data to a Python FastAPI ML service running a Keras LSTM model, with PostgreSQL/Prisma storage.",
    tags: [
      "Node.js",
      "Express",
      "TypeScript",
      "FastAPI",
      "PostgreSQL",
      "TensorFlow",
    ],
    githubRepo: "ArpitKrSingh7/potholeBackend",
    githubUrl: "https://github.com/ArpitKrSingh7/potholeBackend",
    thumbnail: "/thumbnails/pothole.svg",
    featured: true,
  },
  {
    id: "voicecursor",
    title: "VoiceBasedCursor",
    description:
      "AI voice assistant that executes shell commands and manages files using natural language. GPT-4 powered with speech-to-text, text-to-speech, MongoDB persistence, and human-in-the-loop safety.",
    tags: ["Python", "LangChain", "LangGraph", "OpenAI", "MongoDB"],
    githubRepo: "ArpitKrSingh7/VoiceBasedCursor",
    githubUrl: "https://github.com/ArpitKrSingh7/VoiceBasedCursor",
    thumbnail: "/thumbnails/voicecursor.svg",
    featured: false,
  },
  {
    id: "chatapp",
    title: "Real-Time Chat App",
    description:
      "Terminal-themed room-based chat application. Next.js 16 frontend with a native WebSocket backend, live user counts, and instant message delivery.",
    tags: ["Next.js", "React", "TypeScript", "WebSocket", "Node.js"],
    liveUrl: "https://chatappfrontend-rho-six.vercel.app/",
    thumbnail: "/thumbnails/chatapp.svg",
    featured: false,
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

export const skills = {
  languages: ["TypeScript", "JavaScript", "Python", "C/C++", "SQL"],
  frontend: ["React", "Next.js", "Tailwind CSS"],
  backend: [
    "Node.js",
    "Express.js",
    "FastAPI",
    "REST APIs",
    "WebSockets",
    "Microservices",
  ],
  databases: ["PostgreSQL", "MongoDB", "Redis", "Supabase", "Neo4j", "Qdrant"],
  cloudDevops: ["AWS (EC2, S3)", "Docker", "Git", "Linux"],
  ai: ["LangChain", "LangGraph", "OpenAI API", "Gemini", "RAG"],
};

export const aiAgentProfile = {
  ...personal,
  social: socialLinks,
  experience,
  projects,
  skills,
};
