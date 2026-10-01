export const tagColors: Record<string, { bgClass: string; textClass: string }> = {
  default: { bgClass: "bg-black/5 dark:bg-white/5", textClass: "text-black/70 dark:text-white/70" },
  "Next.js": { bgClass: "bg-black/5 dark:bg-white/10", textClass: "text-black/80 dark:text-white/80" },
  TypeScript: { bgClass: "bg-blue-500/10 dark:bg-blue-500/15", textClass: "text-blue-700 dark:text-blue-300" },
  JavaScript: { bgClass: "bg-yellow-500/10 dark:bg-yellow-500/15", textClass: "text-yellow-700 dark:text-yellow-300" },
  Python: { bgClass: "bg-yellow-500/10 dark:bg-yellow-500/15", textClass: "text-yellow-700 dark:text-yellow-300" },
  "Node.js": { bgClass: "bg-green-500/10 dark:bg-green-500/15", textClass: "text-green-700 dark:text-green-300" },
  Express: { bgClass: "bg-green-500/10 dark:bg-green-500/15", textClass: "text-green-700 dark:text-green-300" },
  "Express.js": { bgClass: "bg-green-500/10 dark:bg-green-500/15", textClass: "text-green-700 dark:text-green-300" },
  "C/C++": { bgClass: "bg-blue-500/10 dark:bg-blue-500/15", textClass: "text-blue-700 dark:text-blue-300" },
  RAG: { bgClass: "bg-cyan-500/10 dark:bg-cyan-500/15", textClass: "text-cyan-700 dark:text-cyan-300" },
  MongoDB: { bgClass: "bg-green-500/10 dark:bg-green-500/15", textClass: "text-green-700 dark:text-green-300" },
  PostgreSQL: { bgClass: "bg-blue-500/10 dark:bg-blue-500/15", textClass: "text-blue-700 dark:text-blue-300" },
  Redis: { bgClass: "bg-red-500/10 dark:bg-red-500/15", textClass: "text-red-700 dark:text-red-300" },
  Docker: { bgClass: "bg-blue-500/10 dark:bg-blue-500/15", textClass: "text-blue-700 dark:text-blue-300" },
  AWS: { bgClass: "bg-amber-500/10 dark:bg-amber-500/15", textClass: "text-amber-700 dark:text-amber-300" },
  Stripe: { bgClass: "bg-purple-500/10 dark:bg-purple-500/15", textClass: "text-purple-700 dark:text-purple-300" },
  FastAPI: { bgClass: "bg-green-500/10 dark:bg-green-500/15", textClass: "text-green-700 dark:text-green-300" },
  TensorFlow: { bgClass: "bg-yellow-500/10 dark:bg-yellow-500/15", textClass: "text-yellow-700 dark:text-yellow-300" },
  WebSockets: { bgClass: "bg-cyan-500/10 dark:bg-cyan-500/15", textClass: "text-cyan-700 dark:text-cyan-300" },
  WebSocket: { bgClass: "bg-cyan-500/10 dark:bg-cyan-500/15", textClass: "text-cyan-700 dark:text-cyan-300" },
  Neo4j: { bgClass: "bg-green-500/10 dark:bg-green-500/15", textClass: "text-green-700 dark:text-green-300" },
  Qdrant: { bgClass: "bg-orange-500/10 dark:bg-orange-500/15", textClass: "text-orange-700 dark:text-orange-300" },
  LangChain: { bgClass: "bg-cyan-500/10 dark:bg-cyan-500/15", textClass: "text-cyan-700 dark:text-cyan-300" },
  LangGraph: { bgClass: "bg-cyan-500/10 dark:bg-cyan-500/15", textClass: "text-cyan-700 dark:text-cyan-300" },
  OpenAI: { bgClass: "bg-black/5 dark:bg-white/10", textClass: "text-black/80 dark:text-white/80" },
  Gemini: { bgClass: "bg-blue-500/10 dark:bg-blue-500/15", textClass: "text-blue-700 dark:text-blue-300" },
  React: { bgClass: "bg-cyan-500/10 dark:bg-cyan-500/15", textClass: "text-cyan-700 dark:text-cyan-300" },
  "Tailwind CSS": { bgClass: "bg-sky-500/10 dark:bg-sky-500/15", textClass: "text-sky-700 dark:text-sky-300" },
};

export function getTagStyle(tag: string) {
  return tagColors[tag] || tagColors.default;
}
