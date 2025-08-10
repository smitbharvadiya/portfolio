import { useState, useEffect } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { TabManager } from "../components/TabManager";
import Navbar from "../components/Header";
import TabBar from "../components/tabs";
import FileExplorer from "../components/Projects/fileExplorer";
import Main from "../components/Projects/Main";
import Footer from "../components/Footer";

export default function Project() {
    const { tabs, activeTab, closeTab, setActiveTab } = TabManager();

    const [selectedProject, setSelectedProject] = useState(null);
    const [isCollapsed, setIsCollapsed] = useState(true);
    const [isMobile, setIsMobile] = useState(false);

    const mobileBreakpoint = 768;

    useEffect(() => {
        const handleResize = () => {
            const mobile = window.innerWidth < mobileBreakpoint;
            setIsMobile(mobile);
            if (!mobile) setIsCollapsed(false);
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const handleOpenTab = (fileName) => {
        const projectMap = {
            "devhub.json": "DevHub",
            "stayzy.json": "Stayzy",
        };
        setSelectedProject(projectMap[fileName] || null);
        if (isMobile) setIsCollapsed(true);
    };

    return (
        <div className="flex flex-col h-screen bg-[#0f172a]">
            <Navbar />
            <TabBar
                tabs={tabs}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                closeTab={closeTab}
            />

            <div className="flex flex-1 overflow-hidden relative">
                {/* Sidebar */}
                <div
                    className={`h-full bg-[#020817] text-white transition-all duration-300 z-20 ${
                        isMobile
                            ? `fixed top-0 left-0 w-64 ${isCollapsed ? "-translate-x-full" : "translate-x-0"}`
                            : "relative w-1/5"
                    }`}
                >
                    <FileExplorer openTab={handleOpenTab} setIsCollapsed={setIsCollapsed} />
                </div>

                {/* Main content */}
                <div
                    className={`flex-1 transition-opacity duration-300 ${
                        !isCollapsed && isMobile ? "opacity-50" : "opacity-100"
                    }`}
                >
                    {isMobile && !isCollapsed && (
                        <div
                            className="fixed inset-0 bg-[#0f172a] bg-opacity-50 z-10"
                            onClick={() => setIsCollapsed(true)}
                        />
                    )}

                    <Main selectedProject={selectedProject} setIsCollapsed={setIsCollapsed} />
                </div>
            </div>

            <Footer />
        </div>
    );
}
