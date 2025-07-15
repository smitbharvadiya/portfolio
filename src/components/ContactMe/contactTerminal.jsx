

const ContactTerminal = () => {

    return (
        <div className="w-full max-w-2xl overflow-hidden rounded-xl shadow-2xl">
          
          <div className="relative bg-[#e0e0e0] px-4 py-2 flex items-center">
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
              <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
            </div>
            <div className="absolute left-0 right-0 flex justify-center">
              <span className="text-xs text-[#334155] font-inter font-semibold">
                Terminal — smit@portfolio
              </span>
            </div>
          </div>
    
          {/* Terminal content */}
          <div 
            className="bg-[#1e1e1e] text-[#e0e0e0] font-mono p-4 h-55 overflow-y-auto"
          >
          </div>
        </div>
      );
}

export default ContactTerminal;