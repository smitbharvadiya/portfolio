import { IoIosArrowForward } from "react-icons/io";

const Bio = ({ setIsCollapsed, isMobile }) => {
  const bioContent = [
    '"I am a Computer Science student specializing in AI and software development."',
    '"Passionate about building innovative solutions and learning new technologies."',
    '"Strong believer in clean code, best practices, and continuous learning."',
    '"Enjoy collaborating on projects that solve real-world problems."'
  ];

  return (
    <div className="flex-1 bg-[#0f172a] text-gray-300 overflow-auto font-mono text-sm">
      {/* Mobile header */}
      {isMobile && (
        <div className="md:hidden flex items-center p-3 border-b border-gray-800 bg-[#0f172a] sticky top-0 z-10">
          <button
            onClick={() => setIsCollapsed(false)}
            className="mr-3 text-gray-400 hover:text-white transition"
          >
            <IoIosArrowForward size={18} />
          </button>
          <span className="text-xs text-gray-400">about-me / bio.json</span>
        </div>
      )}

      {/* Code content */}
      <div className="p-4 md:p-6">
        <div className="flex">
          {/* Line numbers */}
          <div className="select-none pr-4 text-right text-gray-500 border-r border-gray-800">
            {[...Array(bioContent.length + 2)].map((_, i) => (
              <div key={i}>{i + 1}</div>
            ))}
          </div>

          {/* Code body */}
          <div className="pl-4 text-amber-200">
            <div>
              <span className="text-purple-400">const </span>
              <span className="text-green-400">bio</span>
              <span className="text-white"> = [</span>
            </div>
            {bioContent.map((line, i) => (
              <div key={i} className="ml-4">
                {line}
                {i < bioContent.length - 1 && <span className="text-white">,</span>}
              </div>
            ))}
            <div className="text-white">];</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bio;