import { useState } from "react";
import { IoIosArrowDown, IoIosClose } from "react-icons/io";
import { FaReact, FaNodeJs } from "react-icons/fa";
import folder from "../../assets/images/folder.png";

const FileExplorer = ({ openTab, setIsCollapsed }) => {
  const [isProjectsOpen, setIsProjectsOpen] = useState(true);
  const [isReactOpen, setIsReactOpen] = useState(true);
  const [isFullOpen, setIsFullOpen] = useState(true);

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

      {/* Projects folder */}
      <div
        className="flex items-center cursor-pointer hover:bg-[#1e293b] px-4 py-1"
        onClick={() => setIsProjectsOpen(!isProjectsOpen)}
      >
        <IoIosArrowDown
          size={14}
          className={`text-[#94a3b8] mr-2 transition-transform duration-300 ${
            isProjectsOpen ? "rotate-0" : "-rotate-90"
          }`}
        />
        <img src={folder} alt="folder" className="h-4 mr-2" />
        <span className="text-sm font-semibold">projects</span>
      </div>

      {isProjectsOpen && (
        <div className="ml-6">
          {/* React folder */}
          <div
            className="flex items-center cursor-pointer hover:bg-[#1e293b] px-2 py-1"
            onClick={() => setIsReactOpen(!isReactOpen)}
          >
            <IoIosArrowDown
              size={14}
              className={`text-[#94a3b8] mr-2 transition-transform duration-300 ${
                isReactOpen ? "rotate-0" : "-rotate-90"
              }`}
            />
            <img src={folder} alt="folder" className="h-4 mr-2" />
            <span className="text-sm font-semibold">React</span>
          </div>

          {isReactOpen && (
            <div className="ml-6">
              <div
                className="flex items-center cursor-pointer hover:bg-[#1e293b] px-2 py-1"
                onClick={() => openTab("devhub.json")}
              >
                <FaReact className="text-blue-400 mr-2" />
                <span className="text-sm font-light">devhub</span>
              </div>
            </div>
          )}

          {/* Full Stack folder */}
          <div
            className="flex items-center cursor-pointer hover:bg-[#1e293b] px-2 py-1"
            onClick={() => setIsFullOpen(!isFullOpen)}
          >
            <IoIosArrowDown
              size={14}
              className={`text-[#94a3b8] mr-2 transition-transform duration-300 ${
                isFullOpen ? "rotate-0" : "-rotate-90"
              }`}
            />
            <img src={folder} alt="folder" className="h-4 mr-2" />
            <span className="text-sm font-semibold">Full Stack</span>
          </div>

          {isFullOpen && (
            <div className="ml-6">
              <div
                className="flex items-center cursor-pointer hover:bg-[#1e293b] px-2 py-1"
                onClick={() => openTab("stayzy.json")}
              >
                <FaNodeJs className="text-green-400 mr-2" />
                <span className="text-sm font-light">Stayzy</span>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default FileExplorer;
