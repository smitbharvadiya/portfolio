import Navbar from "../components/Header"
import Tabs from "../components/tabs"
import TechFileExplorer from "../components/TechStack/techFileExplorer"
import MainTechStack from "../components/TechStack/MainTechStack"
import Footer from "../components/Footer"
import { useState } from "react"

export default function TechStack() {
    const [selectedFile, setSelectedFile] = useState("frontend");

    return (
        <div className="flex flex-col h-screen">
            <Navbar />
            <Tabs />
            <div className="flex flex-1">
                <TechFileExplorer selectedFile={selectedFile} setSelectedFile={setSelectedFile}/>
                <MainTechStack selectedFile={selectedFile}/>
            </div>
            <Footer />
        </div>
    )
}