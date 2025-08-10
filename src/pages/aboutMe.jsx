import { TabManager } from "../components/TabManager";
import Navbar from "../components/Header";
import TabBar from "../components/tabs";
import Footer from "../components/Footer";
import AboutFileExplorer from "../components/about/aboutFileExpo";
import Bio from "../components/about/content";
import { useState, useEffect } from "react";

export default function About() {
  const { tabs, activeTab, openTab, closeTab, setActiveTab } = TabManager();
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (!mobile) {
        setIsCollapsed(false); // always open on desktop
      } else {
        setIsCollapsed(true); // start collapsed on mobile
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex flex-col h-screen bg-[#0f172a] relative">
      <Navbar />
      <TabBar
        tabs={tabs}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        closeTab={closeTab}
      />

      <div className="flex flex-1 overflow-hidden">
        {/* File Explorer - different behavior based on screen size */}
        {isMobile ? (
          /* Mobile version - absolute positioning */
          <div
            className={`transition-transform duration-300 h-full absolute top-0 left-0 w-64 bg-[#020817] z-20 border-r border-gray-800 ${
              isCollapsed ? "-translate-x-full" : "translate-x-0"
            }`}
          >
            <AboutFileExplorer
              isCollapsed={isCollapsed}
              setIsCollapsed={setIsCollapsed}
              openTab={openTab}
              activeTab={activeTab}
              isMobile={isMobile}
            />
          </div>
        ) : (
          /* Desktop version - normal flow */
          <AboutFileExplorer
            isCollapsed={isCollapsed}
            setIsCollapsed={setIsCollapsed}
            openTab={openTab}
            activeTab={activeTab}
            isMobile={isMobile}
          />
        )}

        {/* Bio content - full width with conditional opacity on mobile */}
        <div
          className={`flex-1 transition-opacity duration-300 ${
            !isCollapsed && isMobile ? "opacity-50" : "opacity-100"
          }`}
        >
          <Bio setIsCollapsed={setIsCollapsed} isMobile={isMobile} />
        </div>
      </div>

      <Footer />
    </div>
  );
}