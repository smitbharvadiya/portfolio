import { TabManager } from "../components/TabManager";
import Navbar from "../components/Header"
import TabBar from "../components/tabs";
import Footer from "../components/Footer"
import AboutFileExplorer from "../components/about/aboutFileExpo";
import Bio from "../components/about/content";

export default function About(){
    const { tabs, activeTab, openTab, closeTab, setActiveTab } = TabManager();

    return(
        <div className="flex flex-col h-screen">
        <Navbar />
        <TabBar
                tabs={tabs}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                closeTab={closeTab}
            />
            <div className="flex flex-1">
                <AboutFileExplorer openTab={openTab}/>
                <Bio />
            </div>
            <Footer />
        </div>
    )
}