import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "Blogs | Arpit Kumar Singh",
  description: "Technical blogs and learnings by Arpit Kumar Singh.",
};

export default function BlogsPage() {
  return (
    <main
      className="min-h-screen selection:bg-cyan-500/30 flex flex-col"
      style={{ backgroundColor: "#0a0a0a" }}
    >
      <Navbar />
      <div className="flex-1 w-full flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white mb-3">Blogs</h1>
          <p className="text-white/50">Coming soon. Stay tuned.</p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
