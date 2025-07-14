import {
  SiHtml5, SiCss3, SiJavascript, SiReact, SiTailwindcss, SiBootstrap,
  SiNodedotjs, SiExpress, SiFirebase,
  SiMongodb,
  SiGit, SiGithub
} from "react-icons/si";

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

export default function MainTechStack({ selectedFile }) {
  const { title, stack } = techStacks[selectedFile] || techStacks["frontend.json"];

  return (
     <section className="w-full bg-[#111826] py-12 px-6 text-white">
      <div className="w-full">
        <h2 className="text-2xl font-semibold mb-8">{title}</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {stack.map(({ name, icon }, index) => (
            <div
              key={index}
              className="flex items-center justify-evenly gap-2 px-3 py-2 rounded-full border border-white/10
                bg-white/5 backdrop-blur-sm hover:scale-[1.04] hover:border-white/20 hover:shadow-md
                transition-all duration-300"
            >
              <div className="text-2xl">{icon}</div>
              <span className="text-sm font-medium">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
