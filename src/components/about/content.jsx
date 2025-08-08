const Bio = () => {
  const bioText = `[ 
  "I am a 2nd-year Computer Science student specializing in Artificial Intelligence.",
  "Passionate about learning new technologies, building innovative projects, and continuously improving my skills.",
  "I see coding not just as a task, but as a way to solve problems and create value.",
  "I highly value teamwork, knowledge sharing, and collaborating to bring ideas to life.",
  "Whether working independently or with a team, I prioritize learning, sharing, and growing together."
]
  `;

  const lines = bioText.split("\n");

  return (
    <div className="flex-grow w-4/5 bg-gradient-to-br from-[#0f172a] to-[#1a2b50] px-6 py-6 text-white font-mono text-sm">
      <div className="flex">
        {/* Line numbers */}
        <div className="select-none text-right pr-4 border-r border-white/10 text-[#5b6a86] leading-[1.6rem]">
          {lines.map((_, i) => (
            <div key={i}>{i + 1}</div>
          ))}
        </div>

        {/* Code content */}
        <div className="pl-4 text-amber-300 whitespace-pre-wrap leading-[1.6rem]">
          <span className="font-bold text-amber-300">description</span>
          <span className="font-bold text-white"> : </span>
          <br />
          {lines.map((line, i) => (
            <div key={i}>{line}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Bio;
