import { useEffect, useState } from 'react';
import { GoDash } from "react-icons/go";

const TerminalBox = () => {
  const [typedText, setTypedText] = useState('');
  const [currentLine, setCurrentLine] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  const terminalLines = [
    { prefix: 'smit@portfolio:~$', text: ' npm init portfolio' },
    { prefix: '', text: 'Creating a new portfolio in /users/smit/portfolio...' },
    { prefix: '', text: '' }, // Empty line
    { prefix: 'smit@portfolio:~$', text: ' cat about.txt' },
    { prefix: '', text: 'Frontend developer passionate about crafting' },
    { prefix: '', text: 'intuitive interfaces with React, Next.js,' },
    { prefix: '', text: 'and modern web technologies.' },
    { prefix: '', text: '' }, // Empty line
    { prefix: 'smit@portfolio:~$', text: ' _' } // Cursor line
  ];

  useEffect(() => {
    // Cursor blink effect
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  useEffect(() => {
    // Typing animation
    if (currentLine < terminalLines.length) {
      const line = terminalLines[currentLine];
      const fullText = line.prefix ? `${line.prefix} ${line.text}` : line.text;
      
      if (typedText.length < fullText.length) {
        const timeout = setTimeout(() => {
          setTypedText(fullText.substring(0, typedText.length + 1));
        }, currentLine === 0 ? 100 : 30);

        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setCurrentLine(currentLine + 1);
          setTypedText('');
        }, currentLine === terminalLines.length - 2 ? 1000 : 500);

        return () => clearTimeout(timeout);
      }
    } else {
      // Reset animation
      const timeout = setTimeout(() => {
        setCurrentLine(0);
        setTypedText('');
      }, 2000);

      return () => clearTimeout(timeout);
    }
  }, [typedText, currentLine]);

  return (
    <div className="w-full max-w-xl">
      {/* Terminal window header */}
      <div className="relative bg-[#e0e0e0] rounded-t-xl flex items-center px-4 py-1">
        <div className="absolute left-4 flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="mx-auto font-semibold flex justify-center items-center text-[#334155] text-xs font-inter gap-x-1">
          Terminal <GoDash /> smit@portfolio: ~
        </div>
      </div>

      {/* Terminal content */}
      <div className='bg-[#181c23] border border-gray-700 rounded-b-xl p-2'>
        <div className="bg-gray-900/90 border border-gray-700 rounded-xl p-6 text-gray-300 h-55 overflow-auto">
        <div className="space-y-2 font-mono">
          {terminalLines.slice(0, currentLine).map((line, index) => (
            <div key={index} className="flex">
              {line.prefix && (
                <span className="text-purple-400 mr-2">{line.prefix}</span>
              )}
              <span>{line.text}</span>
            </div>
          ))}
          
          {currentLine < terminalLines.length && (
            <div className="flex">
              {terminalLines[currentLine].prefix && (
                <span className="text-purple-400 mr-2">
                  {terminalLines[currentLine].prefix}
                </span>
              )}
              <span>{typedText}</span>
              {showCursor && <span className="animate-pulse">_</span>}
            </div>
          )}
        </div>
      </div>
      </div>
      
    </div>
  );
};

export default TerminalBox