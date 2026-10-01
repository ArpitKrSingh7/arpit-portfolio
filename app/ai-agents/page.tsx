import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { aiAgentProfile, socialLinks } from "../lib/data";

export const metadata = {
  title: "AI Agent Profile | Arpit Kumar Singh",
  description:
    "Machine-readable profile for AI recruiters and agents. Experience, projects, skills, and contact information for Arpit Kumar Singh.",
};

export default function AIAgentsPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: aiAgentProfile.name,
    jobTitle: aiAgentProfile.title,
    email: aiAgentProfile.email,
    telephone: aiAgentProfile.phone,
    url: "https://arpit.dev",
    sameAs: [
      socialLinks.github,
      socialLinks.linkedin,
      socialLinks.x,
      socialLinks.leetcode,
    ],
    alumniOf: {
      "@type": "EducationalOrganization",
      name: aiAgentProfile.education.school,
    },
    knowsAbout: [
      ...aiAgentProfile.skills.languages,
      ...aiAgentProfile.skills.frontend,
      ...aiAgentProfile.skills.backend,
      ...aiAgentProfile.skills.databases,
      ...aiAgentProfile.skills.cloudDevops,
      ...aiAgentProfile.skills.ai,
    ],
  };

  return (
    <main
      className="min-h-screen selection:bg-cyan-500/30 flex flex-col"
      
    >
      <Navbar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="flex-1 w-full">
        <section className="max-w-4xl w-full mx-auto px-4 py-12 md:py-16">
          <div className="mb-10">
            <h1 className="text-3xl font-bold text-white mb-2">
              AI Agent / Recruiter Profile
            </h1>
            <p className="text-base text-white/50">
              Structured, machine-readable summary of Arpit Kumar Singh. If you
              are an AI parser or recruiter using automated tooling, this page
              is for you.
            </p>
          </div>

          <div className="space-y-8">
            {/* Identity */}
            <div className="rounded-xl p-6 border border-white/[0.08] bg-white/[0.02]">
              <h2 className="text-lg font-semibold text-white mb-4">Identity</h2>
              <pre className="text-sm text-white/70 whitespace-pre-wrap font-mono leading-relaxed">
{`Name: ${aiAgentProfile.name}
Title: ${aiAgentProfile.title}
Email: ${aiAgentProfile.email}
Phone: ${aiAgentProfile.phone}
Location: ${aiAgentProfile.location} (${aiAgentProfile.timezone})
GitHub: ${socialLinks.github}
LinkedIn: ${socialLinks.linkedin}
X / Twitter: ${socialLinks.x}
LeetCode: ${socialLinks.leetcode}
Resume: ${socialLinks.resume}`}
              </pre>
            </div>

            {/* Summary */}
            <div className="rounded-xl p-6 border border-white/[0.08] bg-white/[0.02]">
              <h2 className="text-lg font-semibold text-white mb-4">Summary</h2>
              <p className="text-sm text-white/70 leading-relaxed">
                {aiAgentProfile.summary}
              </p>
            </div>

            {/* Education */}
            <div className="rounded-xl p-6 border border-white/[0.08] bg-white/[0.02]">
              <h2 className="text-lg font-semibold text-white mb-4">Education</h2>
              <div className="text-sm text-white/70">
                <p className="font-medium text-white">{aiAgentProfile.education.degree}</p>
                <p>{aiAgentProfile.education.school}</p>
                <p>Expected: {aiAgentProfile.education.graduation}</p>
                <p>CGPA: {aiAgentProfile.education.cgpa}</p>
              </div>
            </div>

            {/* Experience */}
            <div className="rounded-xl p-6 border border-white/[0.08] bg-white/[0.02]">
              <h2 className="text-lg font-semibold text-white mb-4">Experience</h2>
              <div className="space-y-6">
                {aiAgentProfile.experience.map((exp) => (
                  <div key={exp.company} className="text-sm text-white/70">
                    <p className="font-medium text-white">{exp.role}</p>
                    <p>
                      {exp.company} · {exp.period} · {exp.location}
                    </p>
                    <ul className="list-disc list-inside mt-2 space-y-1">
                      {exp.bullets.map((bullet, i) => (
                        <li key={i}>{bullet}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills */}
            <div className="rounded-xl p-6 border border-white/[0.08] bg-white/[0.02]">
              <h2 className="text-lg font-semibold text-white mb-4">Skills</h2>
              <pre className="text-sm text-white/70 whitespace-pre-wrap font-mono leading-relaxed">
{`Languages: ${aiAgentProfile.skills.languages.join(", ")}
Frontend: ${aiAgentProfile.skills.frontend.join(", ")}
Backend: ${aiAgentProfile.skills.backend.join(", ")}
Databases: ${aiAgentProfile.skills.databases.join(", ")}
Cloud & DevOps: ${aiAgentProfile.skills.cloudDevops.join(", ")}
AI / ML: ${aiAgentProfile.skills.ai.join(", ")}`}
              </pre>
            </div>

            {/* Projects */}
            <div className="rounded-xl p-6 border border-white/[0.08] bg-white/[0.02]">
              <h2 className="text-lg font-semibold text-white mb-4">Projects</h2>
              <div className="space-y-6">
                {aiAgentProfile.projects.map((project) => (
                  <div key={project.id} className="text-sm text-white/70">
                    <p className="font-medium text-white">{project.title}</p>
                    <p className="leading-relaxed">{project.description}</p>
                    <p className="mt-1 text-white/50">
                      Tags: {project.tags.join(", ")}
                    </p>
                    {project.githubUrl && (
                      <p className="text-cyan-400/80">GitHub: {project.githubUrl}</p>
                    )}
                    {project.liveUrl && (
                      <p className="text-cyan-400/80">Live: {project.liveUrl}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div className="rounded-xl p-6 border border-white/[0.08] bg-white/[0.02]">
              <h2 className="text-lg font-semibold text-white mb-4">Achievements</h2>
              <ul className="list-disc list-inside text-sm text-white/70 space-y-1">
                {aiAgentProfile.achievements.map((achievement, i) => (
                  <li key={i}>{achievement}</li>
                ))}
              </ul>
            </div>

            {/* Raw JSON */}
            <div className="rounded-xl p-6 border border-white/[0.08] bg-white/[0.02]">
              <h2 className="text-lg font-semibold text-white mb-4">Raw JSON</h2>
              <pre className="text-xs text-white/60 whitespace-pre-wrap font-mono leading-relaxed overflow-x-auto">
                {JSON.stringify(aiAgentProfile, null, 2)}
              </pre>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
