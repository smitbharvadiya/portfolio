import Navbar from "../components/Header"
import Tabs from "../components/tabs"
import Form from "../components/ContactMe/form"
import TerminalFooter from "../components/Footer"
import ContactTerminal from "../components/ContactMe/contactTerminal"
import { useState } from "react"

export default function Contact() {
      const [name, setName] = useState("");
      const [email, setEmail] = useState("");
      const [message, setMessage] = useState("");

    return (
        <div className="flex flex-col h-screen">
            <Navbar />
            <Tabs />
            <div className="flex flex-1">
                <Form name={name} setName={setName} email={email} setEmail={setEmail} message={message} setMessage={setMessage}/>
                <ContactTerminal name={name} email={email} message={message} />
            </div>
            <TerminalFooter />
        </div>
    )
}