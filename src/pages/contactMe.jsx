import { TabManager } from "../components/TabManager";
import Navbar from "../components/Header"
import TabBar from "../components/tabs";
import Form from "../components/ContactMe/form"
import TerminalFooter from "../components/Footer"
import ContactTerminal from "../components/ContactMe/contactTerminal"
import { useState } from "react"

export default function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
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
                <Form name={name} setName={setName} email={email} setEmail={setEmail} message={message} setMessage={setMessage} />
                <ContactTerminal name={name} email={email} message={message} />
            </div>
            <TerminalFooter />
        </div>
    )
}