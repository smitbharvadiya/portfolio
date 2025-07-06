import TerminalBox from "./TerminalBox";
import AnimatedTitles from "./AnimatedTitles";

const Hero = () => {
  return (
<section className="h-full bg-[#020817] text-white flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-6 gap-6">
      {/* Left Content */}
      <div className="max-w-xl mb-10 md:mb-0">
        <p className="text-gray-400 mb-2 font-mono">Hello, I am</p>
        <h1 className="text-4xl md:text-5xl font-extrabold mb-2">Smit Bharvadiya</h1>
        <AnimatedTitles/>

        <div className="text-sm text-gray-400 leading-relaxed mb-6 font-mono">
          <p className="text-gray-500">// Todo: Add more projects</p>
          <p className="text-gray-500">// My Github account:</p>
          <p>
            <span className="text-purple-400">const </span>
            <span className="text-green-400">githubLink </span>
            <span className="text-pink-400">= </span>
            <a href="https://github.com/smitbharvadiya" className="text-[#f58b12] cursor-pointer hover:underline">"https://github.com/smit-bharvadiya"</a>
          </p>
        </div>
      </div>

      {/* Terminal Box */}
      <div className="w-full md:w-1/2 flex justify-center md:justify-end">
        <TerminalBox />
      </div>
    </section>
  );
};

export default Hero;