import { useEffect, useRef, useState } from "react";
import { color, motion } from "framer-motion";

const content = [
    {
        tokens: [
            { text: "[", isOperator: true },
            { text: "HttpGet", isKeyword: true },
            { text: '("', isOperator: true },
            { text: "hello", isString: true },
            { text: '")', isOperator: true },
            { text: "]", isOperator: true },
        ],
        delay: 300,
        typeDelay: 20
    },
    {
        tokens: [
            { text: "  public", isKeyword: true },
            { text: " IActionResult"},
            { text: ' GetHello', isKeyword: true },
            { text: "()", isOperator: true },
        ],
        delay: 80,
        typeDelay: 20
    },
    { tokens: [{ text: "    {", isOperator: true },], delay: 80, typeDelay: 20 },
    {
        tokens: [
            { text: "      return Ok", isKeyword: true },
            { text: "(", isOperator: true },
            { text: "new", isKeyword: true },
        ],
        delay: 80,
        typeDelay: 20
    },
    { tokens: [{ text: "        {", isOperator: true },], delay: 80, typeDelay: 20 },
    { tokens: [{ text: '           message = "Hello! Welcome. ' }], delay: 80, typeDelay: 20 },
    { tokens: [{ text: "           I am Smit, a software developer." }], delay: 80, typeDelay: 20 },
    { tokens: [{ text: "           This website is my portfolio site." }], delay: 80, typeDelay: 20 },
    { tokens: [{ text: "           It contains the technologies I use, the projects I develop, " }], delay: 80, typeDelay: 20 },
    { tokens: [{ text: '           and information about me." ' }], delay: 80, typeDelay: 20 },
    { tokens: [{ text: "    });", isOperator: true }], delay: 80, typeDelay: 20 },
    { tokens: [{ text: "}", isOperator: true }], delay: 80, typeDelay: 20 },
];

export default function MainTerminal({ onDone }) {
    const [visibleLines, setVisibleLines] = useState([]);
    const [showCursor, setShowCursor] = useState(true);
    const containerRef = useRef(null);

    // Cursor blinking
    useEffect(() => {
        const cursorInterval = setInterval(() => {
            setShowCursor(prev => !prev);
        }, 500);
        return () => clearInterval(cursorInterval);
    }, []);

    // Scroll to bottom when new lines are added
    useEffect(() => {
        if (!containerRef.current) return;
        const container = containerRef.current;
        const shouldScroll = container.scrollHeight > container.clientHeight;

        if (shouldScroll) {
            container.scrollTop = container.scrollHeight;
        }
    }, [visibleLines]);

    // Typing animation logic
    useEffect(() => {
        let timeoutIds = [];
        let cumulativeDelay = 0;

        content.forEach((item, idx) => {
            const { tokens, delay, typeDelay } = item;
            const fullText = tokens.map(t => t.text).join("");

            cumulativeDelay += delay;

            // Add empty line object first
            timeoutIds.push(setTimeout(() => {
                setVisibleLines(prev => [...prev, { index: idx, text: "", fullText, tokens, isTyping: true }]);
            }, cumulativeDelay));

            // Animate character-by-character
            for (let i = 0; i < fullText.length; i++) {
                cumulativeDelay += typeDelay;
                timeoutIds.push(setTimeout(() => {
                    setVisibleLines(prev => {
                        const updated = [...prev];
                        const lastLine = updated[updated.length - 1];

                        if (lastLine?.isTyping) {
                            updated[updated.length - 1] = {
                                ...lastLine,
                                text: fullText.slice(0, i + 1),
                                isTyping: i < fullText.length - 1
                            };
                        }

                        return updated;
                    });
                }, cumulativeDelay));
            }
        });

        timeoutIds.push(setTimeout(onDone, cumulativeDelay + 1000));
        return () => timeoutIds.forEach(clearTimeout);
    }, [onDone]);

    return (
        <div
            ref={containerRef}
            className="h-55 overflow-y-auto scroll-smooth font-mono text-sm sm:text-base pt-6 rounded-md"
            style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
            }}
        >
            {visibleLines.map((line, idx) => (
                <div key={idx} className="flex items-baseline text-white">
                    <span className="text-gray-500 pr-2">{line.index}&nbsp;</span>

                    <span className="whitespace-pre font-mono text-sm/1">
                        {(() => {
                            let remaining = line.text.length;
                            return line.tokens?.map((token, i) => {
                                if (remaining <= 0) return null;

                                const tokenText = token.text;
                                const toShow = tokenText.slice(0, remaining);
                                remaining -= toShow.length;

                                const colorClass =
                                    token.isOperator
                                        ? "text-blue-400"
                                        : token.isKeyword
                                            ? "text-purple-400"
                                            : token.isString
                                                ? "text-green-400"
                                                : "text-white";

                                return (
                                    <span key={i} className={colorClass}>
                                        {toShow}
                                    </span>
                                );
                            });
                        })()}
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
