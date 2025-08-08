import { TabManager } from "../components/TabManager"; 
import Navbar from "../components/Header"
import TabBar from "../components/tabs";
import FileExplorer from "../components/Projects/fileExplorer"
import Main from "../components/Projects/Main"
import Footer from "../components/Footer"
import { useState } from "react";

export default function Project() {
    const { tabs, activeTab, openTab, closeTab, setActiveTab } = TabManager();
    const [selectedProject, setSelectedProject] = useState(null);

    const handleOpenTab = (fileName) => {
    const map = {
      "devhub.json": "DevHub",
      "stayzy.json": "Stayzy",
    };
    setSelectedProject(map[fileName] || null);
  };

    return (
        <div className="flex flex-col h-screen">
            <Navbar />
            <TabBar
          tabs={tabs}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          closeTab={closeTab}
        />
            <div className="flex flex-1">
                <FileExplorer openTab={handleOpenTab} />
                <Main selectedProject={selectedProject}/>
            </div>
            <Footer />
        </div>
    )
}