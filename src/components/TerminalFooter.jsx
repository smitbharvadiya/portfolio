import { FaTwitter, FaTerminal } from "react-icons/fa";
import { LuLinkedin, LuGithub, LuGitFork } from "react-icons/lu";
import { FaArrowDownLong, FaArrowUpLong } from "react-icons/fa6";

const TerminalFooter = () => {
  return (

    <footer>
      <div className="h-6 flex justify-between items-center text-xs border border-gray-800 bg-[#10182a] text-[#94a3a1]">
        <div className="flex h-full font-semibold">
          <span className="h-full px-3 border border-gray-800 flex items-center gap-x-2"><LuGitFork size={14}/> main</span>
          <span className="h-full px-3 border border-gray-800 flex items-center gap-x-1">0 <FaArrowDownLong /> 0 <FaArrowUpLong /></span>
          <span className="h-full px-3 border border-gray-800 flex items-center gap-x-2"><FaTerminal /> Terminal</span>
        </div>
        <div className="flex h-full font-semibold">
          <span className="h-full px-3 flex items-center">TypeScript</span>
          <span className="h-full px-3 border border-gray-800 flex items-center">UTF-8</span>
          <span className="h-full px-3 flex items-center">LF</span>
        </div>
      </div>

      <div className="h-10 flex justify-between items-center text-sm bg-[#020817] text-[#94a3a1]">
        <div className="flex h-full">
          <span className="h-full font-mono px-3 border border-t-0 border-gray-800 flex items-center">find me in</span>
          <span className="h-full px-3 border border-t-0 border-gray-800 flex items-center hover:text-white cursor-pointer"><FaTwitter/></span>
          <span className="h-full px-3 border border-t-0 border-gray-800 flex items-center hover:text-white cursor-pointer"><LuLinkedin size={18}/></span>
        </div>
        <a href="https://github.com/smitbharvadiya" className="flex h-full px-2 text-sm  gap-x-2 hover:text-white cursor-pointer">
          <span className="h-full flex items-center">@smitbharvadiya</span>
          <span className="h-full flex items-center"><LuGithub size={18}/></span>
        </a>
      </div>
    </footer>
  
)};

export default TerminalFooter;
