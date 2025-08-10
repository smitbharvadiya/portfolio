import { useState } from "react";
import { IoIosArrowDown, IoIosClose } from "react-icons/io";
import { IoIosCode } from "react-icons/io";
import { TbDatabase } from "react-icons/tb";
import { MdStorage, MdBuild } from "react-icons/md";
import folder from "../../assets/images/folder.png";

const TechFileExplorer = ({ openTab, setIsCollapsed, selectedFile, setSelectedFile }) => {
  const [isOpen, setIsOpen] = useState(true);

  const files = [
    { name: "frontend.json", icon: <IoIosCode size={18} className="text-[#8c64bd]" /> },
    { name: "backend.json", icon: <MdStorage size={18} className="text-[#60a5fa]" /> },
    { name: "database.json", icon: <TbDatabase size={18} className="text-[#34d399]" /> },
    { name: "tools.json", icon: <MdBuild size={18} className="text-[#facc15]" /> },
  ];

  return (
    <div className="h-full overflow-auto">
      {/* Mobile header */}
      <div className="md:hidden flex items-center justify-between p-3 border-b border-gray-800 bg-[#0f172a] sticky top-0 z-10">
        <span className="text-xs text-gray-400">FILE EXPLORER</span>
        <button
          onClick={() => setIsCollapsed(true)}
          className="text-gray-400 hover:text-white transition"
        >
          <IoIosClose size={20} />
        </button>
      </div>

      {/* Tech stack folder */}
      <div
        className="flex items-center cursor-pointer hover:bg-[#1e293b] px-4 py-1"
        onClick={() => setIsOpen(!isOpen)}
      >
        <IoIosArrowDown
          size={14}
          className={`text-[#94a3b8] mr-2 transition-transform duration-300 ${
            isOpen ? "rotate-0" : "-rotate-90"
          }`}
        />
        <img src={folder} alt="folder" className="h-4 mr-2" />
        <span className="text-sm font-semibold">tech-stack</span>
      </div>

      {isOpen && (
        <div className="ml-6">
          {files.map((file) => (
            <div
              key={file.name}
              onClick={() => {
                setSelectedFile(file.name);
                openTab(file.name);
              }}
              className={`flex items-center cursor-pointer px-2 py-1 hover:bg-[#1e293b] ${
                selectedFile === file.name ? "bg-[#1e293b]" : ""
              }`}
            >
              {file.icon}
              <span className="text-sm font-light ml-2">{file.name}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TechFileExplorer;