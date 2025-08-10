import { IoIosArrowDown, IoIosArrowForward, IoIosClose } from "react-icons/io";
import { RxPerson } from "react-icons/rx";
import { FiFolder } from "react-icons/fi";
import { useState } from "react";
import folder from "../../assets/images/folder.png";

const AboutFileExplorer = ({ isCollapsed, setIsCollapsed, openTab, activeTab }) => {
    const [isAboutOpen, setIsAboutOpen] = useState(true);

    return (
        <div className={`h-full bg-[#020817] text-white border-r border-gray-800 transition-all duration-300
      ${isCollapsed ? "hidden md:block md:w-64" : "w-full md:w-64"}`}>

            {/* Mobile header */}
            <div className="md:hidden flex items-center justify-between p-3 border-b border-gray-800">
                <div className="text-[#94a3b8] text-sm px-4 py-2">FILE EXPLORER</div>
                <div className="h-[1px] rounded-full bg-[#1e293b] mx-2 mb-2"></div>

                <button
                    onClick={() => setIsCollapsed(true)}
                    className="text-gray-400 hover:text-white"
                >
                    <IoIosClose size={20} />
                </button>
            </div>

            {/* File structure */}
            <div className="pl-2">

                {/* about-me folder */}
                <div
                    className="flex items-center cursor-pointer hover:bg-gray-800 p-2 rounded"
                    onClick={() => setIsAboutOpen(!isAboutOpen)}
                >
                    <IoIosArrowDown
                        size={14}
                        className={`text-gray-500 mr-2 transition-transform ${isAboutOpen ? "rotate-0" : "-rotate-90"}`}
                    />
                    <img src={folder} alt="folder" className="h-4 mr-2" />
                    <span className="text-sm font-semibold">about-me</span>
                </div>

                {/* bio.json file */}
                {isAboutOpen && (
                    <div className="ml-6">
                        <div
                            className={`flex items-center px-2 rounded cursor-pointer ${activeTab === 'bio.json' ? 'bg-gray-800' : 'hover:bg-gray-800'}`}
                            onClick={() => {
                                openTab('bio.json');
                                setIsCollapsed(true); // Auto-collapse on mobile
                            }}
                        >
                            <RxPerson className="text-purple-400 mr-2" size={16} />
                            <span className="text-sm">bio.json</span>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AboutFileExplorer;