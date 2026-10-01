import { personal, socialLinks } from "../lib/data";

export default function QuickCall() {
  return (
    <section className="max-w-4xl w-full mx-auto px-4 py-10">
      <div
        className="rounded-xl overflow-hidden flex flex-col md:flex-row w-full border border-black/[0.08] dark:border-white/[0.08] transition-colors duration-500"
      >
        <div className="flex-1 p-8 bg-neutral-100 dark:bg-[#111]">
          <span
            className="text-xs font-semibold tracking-widest text-black/40 dark:text-white/40"
          >
            START HERE
          </span>
          <h2 className="text-2xl font-semibold text-black dark:text-white mt-2 mb-6 leading-tight">
            Let&apos;s hop on a quick call and see if we&apos;ve got the{" "}
            <em className="text-gray-300">right chemistry.</em>
          </h2>
          <div className="space-y-5">
            <div>
              <h3 className="text-sm font-medium mb-1 text-teal-400">
                Want to bounce ideas?
              </h3>
              <p className="text-sm text-black/60 dark:text-white/60">
                Drop me an email or DM on X and let&apos;s explore what&apos;s
                possible.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-medium mb-1 text-sky-400">
                Looking to build something bigger?
              </h3>
              <p className="text-sm text-black/60 dark:text-white/60">
                I can connect you with the right team and resources.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-medium mb-1 text-orange-400">
                In Kancheepuram?
              </h3>
              <p className="text-sm text-black/60 dark:text-white/60">
                Perfect! Let&apos;s grab a coffee and brainstorm in person.
              </p>
            </div>
          </div>
        </div>

        <div className="flex-1 p-8 flex flex-col items-center justify-center text-center bg-neutral-50 dark:bg-[#0b1120]">
          <div
            className="w-16 h-16 rounded-full flex items-center justify-center mb-4" >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="#2dd4bf"
              strokeWidth="1.5"
              className="w-7 h-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
              />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-black dark:text-white mb-2">
            Ready to chat?
          </h3>
          <p className="text-sm px-4 mb-6 text-black/60 dark:text-white/60">
            Send me an email or reach out on X. I usually respond within a day.
          </p>
          <div className="flex gap-1.5 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-400"></span>
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
            <span className="w-1.5 h-1.5 rounded-full bg-orange-400"></span>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={`mailto:${personal.email}`}
              className="flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 hover:scale-105  bg-black/[0.05] dark:bg-white/[0.05] text-black dark:text-white border border-black/[0.1] dark:border-white/[0.1] transition-colors duration-500"
            >
              Email Me
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="#2dd4bf"
                strokeWidth="2"
                className="w-4 h-4"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </a>
            <a
              href={socialLinks.x}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 hover:scale-105  bg-black/[0.05] dark:bg-white/[0.05] text-black dark:text-white border border-black/[0.1] dark:border-white/[0.1] transition-colors duration-500"
            >
              Message on X
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4 text-sky-400"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </div>
          <div
            className="w-full mt-8 pt-6  border-t border-black/[0.06] dark:border-white/[0.06] transition-colors duration-500"
          >
            <p
              className="text-xs italic font-serif text-black/40 dark:text-white/40"
            >
              &ldquo;Turning your vision into digital reality is just one conversation
              away&rdquo;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
