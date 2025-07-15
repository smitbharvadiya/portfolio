import Navbar from "../components/Header"
import Tabs from "../components/tabs"
import Form from "../components/ContactMe/form"
import TerminalFooter from "../components/Footer"

export default function Contact() {

    return (
        <div className="flex flex-col h-screen">
            <Navbar />
            <Tabs />
            <div className="flex flex-1">
                <Form />
            </div>
            <TerminalFooter />
        </div>
    )
}