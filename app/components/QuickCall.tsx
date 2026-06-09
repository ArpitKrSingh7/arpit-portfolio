export default function QuickCall() {
  return (
    <section className="max-w-4xl w-full mx-auto px-4 py-10">
      <div
        className="rounded-xl overflow-hidden flex flex-col md:flex-row w-full"
        style={{ border: "1px solid rgba(255,255,255,0.08)" }}
      >
        <div className="flex-1 p-8" style={{ backgroundColor: "#111111" }}>
          <span
            className="text-xs font-semibold tracking-widest"
            style={{ color: "rgba(255,255,255,0.4)" }}
          >
            START HERE
          </span>
          <h2 className="text-2xl font-semibold text-white mt-2 mb-6 leading-tight">
            Let&apos;s hop on a quick call and see if we&apos;ve got the{" "}
            <em className="text-gray-300">right chemistry.</em>
          </h2>
          <div className="space-y-5">
            <div>
              <h3
                className="text-sm font-medium mb-1"
                style={{ color: "#2dd4bf" }}
              >
                Want to bounce ideas?
              </h3>
              <p className="text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>
                Let&apos;s jump on a quick call and explore what&apos;s
                possible.
              </p>
            </div>
            <div>
              <h3
                className="text-sm font-medium mb-1"
                style={{ color: "#38bdf8" }}
              >
                Looking to build something bigger?
              </h3>
              <p className="text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>
                I can connect you with the right team and resources.
              </p>
            </div>
            <div>
              <h3
                className="text-sm font-medium mb-1"
                style={{ color: "#fb923c" }}
              >
                In Kancheepuram?
              </h3>
              <p className="text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>
                Perfect! Let&apos;s grab a coffee and brainstorm in person.
              </p>
            </div>
          </div>
        </div>

        <div
          className="flex-1 p-8 flex flex-col items-center justify-center text-center"
          style={{ backgroundColor: "#0b1120" }}
        >
          <div
            className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
            style={{
              border: "1px dashed rgba(45, 212, 191, 0.4)",
              backgroundColor: "rgba(45, 212, 191, 0.05)",
            }}
          >
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
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.896-1.596-5.48-4.18-7.076-7.076l1.293-.97c.362-.271.527-.733.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
              />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-white mb-2">
            Ready to chat?
          </h3>
          <p
            className="text-sm px-4 mb-6"
            style={{ color: "rgba(255,255,255,0.6)" }}
          >
            Schedule a free 30-minute strategy call to refine your idea and
            initiate our collaboration.
          </p>
          <div className="flex gap-1.5 mb-6">
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ backgroundColor: "#2dd4bf" }}
            ></span>
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ backgroundColor: "#38bdf8" }}
            ></span>
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ backgroundColor: "#fb923c" }}
            ></span>
          </div>
          <a
            href="https://cal.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 hover:scale-105"
            style={{
              backgroundColor: "rgba(255,255,255,0.05)",
              color: "#fff",
              border: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            Book a Free Call
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="#2dd4bf"
              strokeWidth="2"
              className="w-4 h-4"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
          </a>
          <div
            className="w-full mt-8 pt-6"
            style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
          >
            <p
              className="text-xs italic font-serif"
              style={{ color: "rgba(255,255,255,0.4)" }}
            >
              "Turning your vision into digital reality is just one conversation
              away"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
