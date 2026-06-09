import Image from "next/image";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import GithubActivity from "./components/GithubActivity";
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

      {/* 
        The pb-10 adds a bit of padding at the bottom before the footer.
        You can adjust the order of these sections if you want to switch things up!
      */}
      <div className="flex flex-col gap-4 pb-10">
        <Intro />
        <TechStack />
        <Projects />
        <GithubActivity />
        <RecentBlogs />
        <QuickCall />
      </div>

      <Footer />
    </main>
  );
}
