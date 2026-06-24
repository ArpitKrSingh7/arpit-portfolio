import Link from "next/link";

export default function RecentBlogs() {
  return (
    <section className="max-w-4xl w-full mx-auto px-4 py-10">
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

      <div className="rounded-xl p-8 border border-white/[0.08] bg-white/[0.02] text-center">
        <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-4">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="w-6 h-6 text-white/40"
          >
            <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        </div>
        <h3 className="text-white font-medium mb-1">Blogs are on the way</h3>
        <p className="text-sm text-white/50">
          I&apos;m writing up some system design and GenAI breakdowns. Check back soon.
        </p>
      </div>
    </section>
  );
}
