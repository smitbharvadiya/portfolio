import { HiOutlineArrowRight } from "react-icons/hi";
import { IoIosArrowForward } from "react-icons/io";
import { useState, useEffect } from "react";

const projects = [
  {
    title: "DevHub",
    description: "A GitHub dashboard with language usage, repo insights, and smart bookmarks.",
    tech: ["React", "Tailwind", "Firebase", "GitHub API"],
    link: "https://dev-hub-blond.vercel.app/",
    accent: "#3B82F6",
    filePath: "projects / devhub.json"
  },
  {
    title: "Stayzy",
    description: "Airbnb-like full-stack app with authentication and MongoDB listings.",
    tech: ["Node.js", "MongoDB", "Express", "EJS"],
    link: "https://stayzy-cj60.onrender.com/",
    accent: "#EC4899",
    filePath: "projects / stayzy.json"
  }
];

export default function Main({ selectedProject, setIsCollapsed }) {
  const [isMobile, setIsMobile] = useState(false);

  // Track screen size
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const filteredProjects = selectedProject
    ? projects.filter((p) => p.title === selectedProject)
    : projects;

  // Figure out file path for header
  const currentPath =
    filteredProjects.length === 1
      ? filteredProjects[0].filePath
      : "projects";

  return (
    <div className="flex-grow bg-[#0f172a] text-white overflow-auto">
      
      {/* Mobile header (like bio.json one) */}
      {isMobile && (
        <div className="md:hidden flex items-center p-3 border-b border-gray-800 bg-[#0f172a] sticky top-0 z-10">
          <button
            onClick={() => setIsCollapsed(false)}
            className="mr-3 text-gray-400 hover:text-white transition"
          >
            <IoIosArrowForward size={18} />
          </button>
          <span className="text-xs text-gray-400">{currentPath}</span>
        </div>
      )}

      {/* Projects grid */}
      <div className="p-4 md:p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {filteredProjects.map((project, index) => (
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

              <div className="relative z-10 p-4 md:p-6 h-full flex flex-col">
                <div className="flex-1">
                  <h2 className="text-xl md:text-2xl font-bold mb-2 md:mb-3">{project.title}</h2>
                  <p className="text-gray-300 text-sm md:text-base mb-2 leading-relaxed">{project.description}</p>
                </div>

                <div className="mb-4 md:mb-6 flex flex-wrap gap-1 md:gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 md:px-3 py-1 rounded-full backdrop-blur-sm border border-gray-700 text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-4 md:px-5 py-1.5 md:py-2.5 rounded-lg font-medium transition-all duration-300 transform group-hover:translate-x-1 text-sm md:text-base"
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
    </div>
  );
}
