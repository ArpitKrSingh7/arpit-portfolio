import Link from "next/link";

type Blog = {
  title: string;
  description: string;
  date: string;
  readTime: string;
  tags: string[];
  image: string;
  url: string;
};

// ... keep your `blogs`, `tagColors`, and `getTagStyle` exactly as they were ...
const blogs: Blog[] = [
  {
    title: "Why Delivery Apps Stop Trusting Google Maps (And Build Their Own)",
    description:
      "Why delivery companies eventually build a routing intelligence layer on top of map data, using fleet GPS, delivery outcomes, manual corrections, and vehicle-...",
    date: "June 7, 2026",
    readTime: "10 min read",
    tags: ["System Design", "Maps", "Routing", "Logistics", "Go"],
    image: "/zomato-cover.jpg",
    url: "#",
  },
  {
    title:
      "How PhonePe Built Clockwork: A Distributed Scheduler for Billions of Delayed Jobs",
    description:
      "A system design breakdown of PhonePe Clockwork: durable delayed jobs, HBase scanning, ZooKeeper partition ownership, RabbitMQ buffering, retries, DLQs,...",
    date: "May 30, 2026",
    readTime: "13 min read",
    tags: [
      "System Design",
      "Distributed Systems",
      "Backend",
      "Schedulers",
      "PhonePe",
    ],
    image: "/phonepe-cover.jpg",
    url: "#",
  },
];

const tagColors: Record<string, { bg: string; text: string }> = {
  default: { bg: "rgba(255,255,255,0.06)", text: "rgba(255,255,255,0.65)" },
  "System Design": { bg: "rgba(20, 184, 166, 0.15)", text: "#2dd4bf" },
  Maps: { bg: "rgba(168, 85, 247, 0.15)", text: "#c084fc" },
  Routing: { bg: "rgba(59, 130, 246, 0.15)", text: "#60a5fa" },
  Logistics: { bg: "rgba(236, 72, 153, 0.15)", text: "#f472b6" },
  Go: { bg: "rgba(52, 211, 153, 0.15)", text: "#34d399" },
};

function getTagStyle(tag: string) {
  return tagColors[tag] || tagColors.default;
}

export default function RecentBlogs() {
  return (
    <section className="max-w-3xl mx-auto px-4 py-10">
      <div className="flex items-end justify-between mb-6">
        <div>
          <h2 className="text-xl font-semibold text-white">Recent Blogs</h2>
          <p className="text-sm mt-1 text-white/40">Thoughts & learnings</p>
        </div>
        <Link
          href="/blogs"
          className="flex items-center gap-1 text-sm px-3 py-1.5 rounded-lg transition-colors duration-150 border border-white/10 text-white/55 bg-white/[0.03] hover:text-white hover:bg-white/[0.07]"
        >
          View All
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="w-3.5 h-3.5"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {blogs.map((blog) => (
          <div
            key={blog.title}
            className="rounded-xl overflow-hidden flex flex-col transition-transform duration-200 hover:-translate-y-1 border border-white/[0.08] bg-white/[0.02]"
          >
            <div className="w-full h-40 relative bg-[#111]">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-2 left-2 flex flex-wrap gap-1.5">
                {blog.tags.map((tag) => {
                  const style = getTagStyle(tag);
                  return (
                    <span
                      key={tag}
                      className="text-[10px] px-2 py-0.5 rounded backdrop-blur-sm"
                      style={{ backgroundColor: style.bg, color: style.text }}
                    >
                      {tag}
                    </span>
                  );
                })}
              </div>
            </div>

            <div className="p-4 flex flex-col flex-1 gap-2">
              <h3 className="text-sm font-semibold leading-snug text-white hover:text-blue-400 transition-colors cursor-pointer">
                {blog.title}
              </h3>
              <p className="text-xs leading-relaxed flex-1 text-white/55">
                {blog.description}
              </p>

              <div className="flex items-center gap-3 mt-2 text-[11px] text-white/40">
                <span className="flex items-center gap-1.5">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="w-3 h-3"
                  >
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                  {blog.date}
                </span>
                <span className="flex items-center gap-1.5">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="w-3 h-3"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  {blog.readTime}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
