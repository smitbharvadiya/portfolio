import { FaInstagram, FaTerminal } from "react-icons/fa";
import { LuLinkedin, LuGithub, LuGitFork } from "react-icons/lu";
import { FaArrowDownLong, FaArrowUpLong } from "react-icons/fa6";

const TerminalFooter = () => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 w-full">
      {/* Status bar */}
      <div className="h-6 flex justify-between items-center text-xs border border-gray-800 bg-[#10182a] text-[#94a3a1]">
        <div className="flex h-full font-semibold">
          <span className="h-full px-2 sm:px-3 border border-gray-800 flex items-center gap-x-1 sm:gap-x-2">
            <LuGitFork className="text-xs sm:text-sm" /> 
            <span className="sm:inline">main</span>
          </span>
          <span className="h-full px-2 sm:px-3 border border-gray-800 flex items-center gap-x-1">
            <span className="hidden sm:inline">0</span>
            <FaArrowDownLong className="text-xs" /> 
            <span className="hidden sm:inline">0</span>
            <FaArrowUpLong className="text-xs" />
          </span>
          <span className="h-full px-2 sm:px-3 border border-gray-800 flex items-center gap-x-1 sm:gap-x-2">
            <FaTerminal className="text-xs sm:text-sm" /> 
            <span className="hidden sm:inline">Terminal</span>
          </span>
        </div>
        <div className="flex h-full font-semibold">
          <span className="h-full px-2 sm:px-3 flex items-center text-xs sm:text-sm">TypeScript</span>
          <span className="h-full px-2 sm:px-3 border border-gray-800 flex items-center text-xs sm:text-sm">UTF-8</span>
          <span className="h-full px-2 sm:px-3 flex items-center text-xs sm:text-sm">LF</span>
        </div>
      </div>

      {/* Social links */}
      <div className="h-10 flex justify-between items-center text-sm bg-[#020817] text-[#94a3a1]">
        <div className="flex h-full">
          <span className="h-full font-mono px-2 sm:px-3 border border-t-0 border-gray-800 flex items-center text-xs sm:text-sm">
            <span className="hidden sm:inline">find me in</span>
            <span className="sm:hidden">find me:</span>
          </span>
          <a href="https://www.instagram.com/smit._ahir/" target="_blank" rel="noopener noreferrer">
            <span className="h-full px-3 border border-t-0 border-gray-800 flex items-center hover:text-white cursor-pointer">
              <FaInstagram size={16} />
            </span>
          </a>
          <a href="https://www.linkedin.com/in/smit-bharvadiya" target="_blank" rel="noopener noreferrer">
            <span className="h-full px-3 border border-t-0 border-gray-800 flex items-center hover:text-white cursor-pointer">
              <LuLinkedin size={16} />
            </span>
          </a>
        </div>
        <a 
          href="https://github.com/smitbharvadiya" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex h-full px-2 sm:px-3 gap-x-1 sm:gap-x-2 hover:text-white cursor-pointer items-center"
        >
          <span className="text-xs sm:text-sm hidden sm:inline">@smitbharvadiya</span>
          <span className="text-xs sm:text-sm sm:hidden">github</span>
          <LuGithub size={16} />
        </a>
      </div>
    </footer>
  );
};

export default TerminalFooter;