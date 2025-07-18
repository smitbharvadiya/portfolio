import { TabManager } from "../components/TabManager"; 
import Navbar from "../components/Header"
import TabBar from "../components/tabs";
import FileExplorer from "../components/Projects/fileExplorer"
import Main from "../components/Projects/Main"
import Footer from "../components/Footer"

export default function Project() {
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
                <FileExplorer openTab={openTab} />
                <Main />
            </div>
            <Footer />
        </div>
    )
}