import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import GithubActivity from "./components/GithubActivity";
import LeetCodeStats from "./components/LeetCodeStats";
import RecentBlogs from "./components/RecentBlogs";
import QuickCall from "./components/QuickCall";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main
      className="min-h-screen selection:bg-cyan-500/30"
      style={{ backgroundColor: "#0a0a0a" }}
    >
      <Navbar />
      <div className="flex flex-col gap-4 pb-10">
        <Intro />
        <TechStack />
        <Projects />
        <GithubActivity />
        <LeetCodeStats />
        <RecentBlogs />
        <QuickCall />
      </div>

      <Footer />
    </main>
  );
}
