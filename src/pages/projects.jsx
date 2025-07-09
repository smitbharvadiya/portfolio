import Navbar from "../components/Header"
import Tabs from "../components/tabs"
import FileExplorer from "../components/fileExplorer"
import Footer from "../components/Footer"

export default function Project() {

    return (
        <div className="flex flex-col h-screen">
            <Navbar />
            <Tabs />
            <div className="flex flex-1">
                <FileExplorer />
            </div>
            <Footer />
        </div>
    )
}