import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import TerminalIntro from './TerminalIntro';
import VSCodeLoader from './VSCodeLoader';
import MainTerminal from './MainTerminal';

export default function TerminalBox() {
  const [stage, setStage] = useState(0);
  const terminalRef = useRef(null);

  // Auto-scroll to bottom when content changes
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [stage]);

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
        ref={terminalRef}
        className="bg-[#1e1e1e] text-[#e0e0e0] font-mono p-4 h-55 overflow-y-auto"
      >
        {stage === 0 && <TerminalIntro onDone={() => setStage(1)} />}
        {stage === 1 && <VSCodeLoader onDone={() => setStage(2)} />}
        {stage === 2 && <MainTerminal />}
      </div>
    </div>
  );
}