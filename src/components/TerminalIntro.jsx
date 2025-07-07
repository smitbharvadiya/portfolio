import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const introContent = [
  { text: "cd Developer/smit", delay: 300, typeDelay: 40, isCommand: true },
  { text: "npm i", delay: 800, typeDelay: 80, isCommand: true },
  {
    packages: [
      "react@latest",
      "react-dom@latest",
      "next@latest",
      "typescript@latest",
      "tailwindcss@latest",
      "eslint@latest",
      "prettier@latest",
      "framer-motion@latest",
      "react-syntax-highlighter@latest"
    ],
    delay: 100,
    isPackageList: true
  },
  { text: "code .", delay: 100, typeDelay: 40, isCommand: true, keepWhite: true },
];

export default function TerminalIntro({ onDone }) {
  const [visibleLines, setVisibleLines] = useState([]);
  const [showCursor, setShowCursor] = useState(true);
  const containerRef = useRef(null);

  // Blink cursor
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  // Scroll to bottom every time visibleLines update
  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const shouldScroll = container.scrollHeight > container.clientHeight;

    if (shouldScroll) {
      container.scrollTop = container.scrollHeight;
    }
  }, [visibleLines]);

  // Main animation logic
  useEffect(() => {
    let timeoutIds = [];
    let cumulativeDelay = 0;

    const addLine = (text, options = {}) => {
      timeoutIds.push(setTimeout(() => {
        setVisibleLines(prev => [...prev, {
          text,
          ...options
        }]);
      }, cumulativeDelay));
    };

    introContent.forEach((item) => {
      cumulativeDelay += item.delay;

      if (item.isPackageList) {
        // Add package lines one by one
        item.packages.forEach(pkg => {
          addLine(`+ ${pkg}`, { isPackage: true });
          cumulativeDelay += 200;
        });
      } else {
        // Add empty line first (will type into it)
        timeoutIds.push(setTimeout(() => {
          setVisibleLines(prev => [...prev, {
            text: "",
            fullText: item.text,
            isCommand: item.isCommand,
            keepWhite: item.keepWhite || false,
            isPackage: false,
            isTyping: true
          }]);
        }, cumulativeDelay));

        for (let i = 0; i < item.text.length; i++) {
          cumulativeDelay += item.typeDelay;
          timeoutIds.push(setTimeout(() => {
            setVisibleLines(prev => {
              const updated = [...prev];
              const lastLine = updated[updated.length - 1];
              if (lastLine?.isTyping) {
                updated[updated.length - 1] = {
                  ...lastLine,
                  text: item.text.substring(0, i + 1),
                  isTyping: i < item.text.length - 1
                };
              }
              return updated;
            });
          }, cumulativeDelay));
        }
      }
    });

    // Trigger onDone when animation is complete
    timeoutIds.push(setTimeout(onDone, cumulativeDelay + 1000));

    return () => timeoutIds.forEach(clearTimeout);
  }, [onDone]);

  return (
    <div
      ref={containerRef}
      className="h-55 overflow-y-auto scroll-smooth font-mono text-sm sm:text-base pt-8 rounded-md"
      style={{
        scrollbarWidth: 'none',
        msOverflowStyle: 'none',
      }}
    >
      {visibleLines.map((line, index) => (
        <div key={index} className="flex items-baseline">
          {line.isCommand && <span className="text-blue-400">$&nbsp;</span>}
          <span className={
            line.isTyping
              ? "text-white"
              : line.isPackage
                ? "text-gray-400"
                : line.isCommand && !line.keepWhite
                  ? "text-green-400"
                  : "text-white"
          }>
            {line.text}
          </span>
          {line.isTyping && showCursor && (
            <motion.span
              className="inline-block w-2 h-5 bg-blue-400 ml-1"
              animate={{ opacity: [0, 1, 0] }}
              transition={{ repeat: Infinity, duration: 0.8 }}
            />
          )}
        </div>
      ))}
    </div>
  );
}
