import { Suspense } from "react";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import GithubActivity from "./components/GithubActivity";
import LeetCodeStats from "./components/LeetCodeStats";
import RecentBlogs from "./components/RecentBlogs";
import QuickCall from "./components/QuickCall";
import Footer from "./components/Footer";

function SectionSkeleton() {
  return (
    <div className="max-w-4xl w-full mx-auto px-4 py-10">
      <div className="h-6 w-32 bg-white/5 rounded mb-4 animate-pulse" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {[1, 2].map((i) => (
          <div key={i} className="h-48 bg-white/[0.02] rounded-xl border border-white/[0.06] animate-pulse" />
        ))}
      </div>
    </div>
  );
}

function GithubSkeleton() {
  return (
    <div className="max-w-4xl w-full mx-auto px-4 py-10">
      <div className="h-6 w-40 bg-white/5 rounded mb-4 animate-pulse" />
      <div className="w-full h-48 rounded-xl border border-white/[0.08] bg-white/[0.02] animate-pulse" />
    </div>
  );
}

function LeetCodeSkeleton() {
  return (
    <div className="max-w-4xl w-full mx-auto px-4 py-10">
      <div className="h-6 w-32 bg-white/5 rounded mb-4 animate-pulse" />
      <div className="w-full h-32 rounded-xl border border-white/[0.08] bg-white/[0.02] animate-pulse" />
    </div>
  );
}

export default function Home() {
  return (
    <main
      className="min-h-screen selection:bg-cyan-500/30"
      
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfilePage",
            mainEntity: {
              "@type": "Person",
              name: "Arpit Kumar Singh",
              jobTitle: "Full-Stack & GenAI Engineer",
              url: "https://arpitdev.blog",
              email: "arpitkumarsingh9470@gmail.com",
              sameAs: [
                "https://github.com/ArpitKrSingh7",
                "https://x.com/ArpitKrSingh7",
                "https://www.linkedin.com/in/arpit-kumar-singh-aks100606",
                "https://leetcode.com/u/Arpitkrsingh/",
              ],
              alumniOf: {
                "@type": "CollegeOrUniversity",
                name: "IIITDM Kancheepuram",
              },
              knowsAbout: [
                "Full-Stack Development",
                "GenAI",
                "RAG",
                "Next.js",
                "Node.js",
                "TypeScript",
                "Python",
              ],
            },
          }).replace(/</g, "\\u003c"),
        }}
      />
      <Navbar />
      <div className="flex flex-col gap-4 pb-10">
        <Intro />
        <TechStack />
        <Suspense fallback={<SectionSkeleton />}>
          <Projects />
        </Suspense>
        <Suspense fallback={<GithubSkeleton />}>
          <GithubActivity />
        </Suspense>
        <Suspense fallback={<LeetCodeSkeleton />}>
          <LeetCodeStats />
        </Suspense>
        <RecentBlogs />
        <QuickCall />
      </div>

      <Footer />
    </main>
  );
}
