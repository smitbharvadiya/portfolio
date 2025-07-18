import { TabManager } from "../components/TabManager"; 
import Navbar from "../components/Header"
import TabBar from "../components/tabs";
import TechFileExplorer from "../components/TechStack/techFileExplorer"
import MainTechStack from "../components/TechStack/MainTechStack"
import Footer from "../components/Footer"
import { useState } from "react"

export default function TechStack() {
    const [selectedFile, setSelectedFile] = useState("frontend");
    const { tabs, activeTab, openTab, closeTab, setActiveTab } = TabManager();
    

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
                <TechFileExplorer selectedFile={selectedFile} setSelectedFile={setSelectedFile} openTab={openTab} />
                <MainTechStack selectedFile={selectedFile}/>
            </div>
            <Footer />
        </div>
    )
}