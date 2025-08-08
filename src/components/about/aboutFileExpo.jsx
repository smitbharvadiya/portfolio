import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { RxPerson } from "react-icons/rx";
import folder from "../../assets/images/folder.png";

const AboutFileExplorer = ({ openTab }) => {
    const [isProjectsOpen, setIsProjectsOpen] = useState(true);
    const [isReactOpen, setIsReactOpen] = useState(true);

    return (
        <div className="w-1/5 h-full bg-[#020817] text-white overflow-auto">

            <div className="text-[#94a3b8] text-sm px-4 py-2">FILE EXPLORER</div>
            <div className="h-[1px] rounded-full bg-[#1e293b] mx-2 mb-2"></div>

            <div
                className="flex items-center cursor-pointer hover:bg-[#1e293b] px-4 py-1"
                onClick={() => setIsProjectsOpen(!isProjectsOpen)}
            >
                <IoIosArrowDown
                    size={14}
                    className={`text-[#94a3b8] mr-2 transition-transform duration-300 ${isProjectsOpen ? "rotate-0" : "-rotate-90"
                        }`}
                />
                <img src={folder} alt="folder" className="h-4 mr-2" />
                <span className="text-sm font-semibold">about-me</span>
            </div>

            {isProjectsOpen && (
                <div className="ml-6">
                    <div
                        className="flex items-center cursor-pointer hover:bg-[#1e293b] px-2 py-1"
                        onClick={() => setIsReactOpen(!isReactOpen)}
                    >
                        <IoIosArrowDown
                            size={14}
                            className={`text-[#94a3b8] mr-2 transition-transform duration-300 ${isReactOpen ? "rotate-0" : "-rotate-90"
                                }`}
                        />

                        <RxPerson size={16} className="text-[#c084fc] mr-2" />

                        <span className="text-sm font-light">bio.json</span>
                    </div>

                </div>

            )}

        </div>
    );
};

export default AboutFileExplorer;
