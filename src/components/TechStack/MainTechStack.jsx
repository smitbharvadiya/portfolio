import {
  SiHtml5, SiCss3, SiJavascript, SiReact, SiTailwindcss, SiBootstrap,
  SiNodedotjs, SiExpress, SiFirebase,
  SiMongodb,
  SiGit, SiGithub
} from "react-icons/si";
import { IoIosArrowForward } from "react-icons/io";
import { useState, useEffect } from "react";

const techStacks = {
  "frontend.json": {
    title: "Frontend Arsenal",
    stack: [
      { name: "HTML", icon: <SiHtml5 className="text-[#E34F26]" /> },
      { name: "CSS", icon: <SiCss3 className="text-[#1572B6]" /> },
      { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E]" /> },
      { name: "React", icon: <SiReact className="text-[#61DBFB]" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#38BDF8]" /> },
      { name: "Bootstrap", icon: <SiBootstrap className="text-[#7952B3]" /> },
    ]
  },
  "backend.json": {
    title: "Backend Toolkit",
    stack: [
      { name: "Node", icon: <SiNodedotjs className="text-[#3C873A]" /> },
      { name: "Express", icon: <SiExpress className="text-white" /> },
      { name: "Firebase", icon: <SiFirebase className="text-[#FFCA28]" /> },
    ]
  },
  "database.json": {
    title: "Data Engines",
    stack: [
      { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },
    ]
  },
  "tools.json": {
    title: "Dev Essentials",
    stack: [
      { name: "Git", icon: <SiGit className="text-[#F1502F]" /> },
      { name: "GitHub", icon: <SiGithub className="text-white" /> }
    ]
  }
};

export default function MainTechStack({ selectedFile, setIsCollapsed }) {
  const [isMobile, setIsMobile] = useState(false);
  const { title, stack } = techStacks[selectedFile] || techStacks["frontend.json"];

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className="flex-grow bg-[#0f172a] text-white overflow-auto">
      {/* Mobile header */}
      {isMobile && (
        <div className="md:hidden flex items-center p-3 border-b border-gray-800 bg-[#0f172a] sticky top-0 z-10">
          <button
            onClick={() => setIsCollapsed(false)}
            className="mr-3 text-gray-400 hover:text-white transition"
          >
            <IoIosArrowForward size={18} />
          </button>
          <span className="text-xs text-gray-400 font-mono">tech-stack/{selectedFile}</span>
        </div>
      )}

      {/* Main content */}
      <div className="p-4 md:p-6">
        <div className="w-full">
          <h2 className="text-2xl font-semibold mb-6 md:mb-8">{title}</h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4">
            {stack.map(({ name, icon }, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center gap-2 p-3 md:p-4 rounded-xl border border-white/10
                  bg-white/5 backdrop-blur-sm hover:scale-[1.03] hover:border-white/20 hover:shadow-lg
                  transition-all duration-300"
              >
                <div className="text-3xl md:text-4xl">{icon}</div>
                <span className="text-sm md:text-base font-medium text-center">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}