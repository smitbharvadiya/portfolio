import { IoIosArrowDown, IoIosCode } from "react-icons/io";
import { TbDatabase } from "react-icons/tb";
import { MdStorage, MdBuild } from "react-icons/md";
import folder from "../../assets/images/folder.png";
import { useState } from "react";

const files = [
  { name: "frontend.json", icon: <IoIosCode size={18} className="text-[#8c64bd]" /> },
  { name: "backend.json", icon: <MdStorage size={18} className="text-[#60a5fa]" /> },
  { name: "database.json", icon: <TbDatabase size={18} className="text-[#34d399]" /> },
  { name: "tools.json", icon: <MdBuild size={18} className="text-[#facc15]" /> },
];

const TechFileExplorer = ({ selectedFile, setSelectedFile }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="w-1/5 h-full bg-[#020817] text-white overflow-auto">
      <div className="text-[#94a3b8] text-sm px-4 py-2">FILE EXPLORER</div>
      <div className="h-[1px] rounded-full bg-[#1e293b] mx-2 mb-2"></div>

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
        <span className="text-sm font-semibold">skills / tech stack</span>
      </div>

      {isOpen && (
        <div className="ml-6">
          {files.map((file) => (
            <div
              key={file.name}
              onClick={() => setSelectedFile(file.name)}
              className={`flex items-center cursor-pointer px-2 py-1 hover:bg-[#1e293b] ${
                selectedFile === file.name ? "bg-[#1e293b]" : ""
              }`}
            >
              {file.icon}
              <span className="text-sm ml-2">{file.name}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TechFileExplorer;
