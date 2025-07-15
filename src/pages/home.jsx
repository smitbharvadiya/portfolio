import Navbar from "../components/Header"
import Hero from "../components/Home/Hero"
import TerminalFooter from "../components/Footer"

export default function Home() {

  return (
    <div className="h-screen flex flex-col overflow-hidden">
        <Navbar/>
        <main className="flex-1 ">

        <Hero/>
        </main>
        <TerminalFooter/>
    </div>
        
  )
}