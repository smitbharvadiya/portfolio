import { HiOutlineArrowRight } from "react-icons/hi";

const projects = [
  {
    title: "DevHub",
    description: "A GitHub dashboard with language usage, repo insights, and smart bookmarks.",
    tech: ["React", "Tailwind", "Firebase", "GitHub API"],
    link: "https://dev-hub-blond.vercel.app/",
    accent: "#3B82F6"
  },
  {
    title: "Stayzy",
    description: "Airbnb-like full-stack app with authentication and MongoDB listings.",
    tech: ["Node.js", "MongoDB", "Express", "EJS"],
    link: "https://stayzy-cj60.onrender.com/",
    accent: "#EC4899"
  },
  {
    title: "Blood Donor AI",
    description: "Voice-powered blood donation eligibility assistant for rural areas.",
    tech: ["Python", "Flask", "Speech Recognition", "TTS"],
    link: "https://github.com/your-username/blood-donation-ai",
    accent: "#EF4444"
  },
];

export default function Main() {
  return (
    <div className="flex-grow w-4/5 bg-gradient-to-br from-[#0f172a] to-[#1a2b50] px-6 py-6 text-white">
 
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-xl bg-[#1e293b]/50 backdrop-blur-sm border border-gray-700 hover:border-gray-600 transition-all duration-500 hover:shadow-2xl"
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `linear-gradient(135deg, ${project.accent}20, transparent 70%)`,
                }}
              />

              <div className="relative z-10 p-6 h-full flex flex-col">
                <div className="flex-1">
                  <h2 className="text-2xl font-bold mb-3">{project.title}</h2>
                  <p className="text-gray-300 mb-2 leading-relaxed">{project.description}</p>
                </div>

                <div className="mb-6 flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 rounded-full backdrop-blur-sm border border-gray-700 text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg font-medium transition-all duration-300 transform group-hover:translate-x-1"
                  style={{
                    backgroundColor: project.accent,
                  }}
                >
                  View Project
                  <HiOutlineArrowRight className="ml-2"/>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
  );
}
