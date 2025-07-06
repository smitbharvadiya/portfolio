const Navbar = () => {
  return (
    <header className="bg-[#020817] text-[#90a1b9] border-b border-gray-700 font-mono">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-10">
        
        
        <nav className="flex h-full">
          <a
            href="#"
            className="h-full pr-14 pl-4 font-bold flex items-center border border-gray-700 hover:text-white transition"
          >
            Smit.dev
          </a>
          <a
            href="#hello"
            className="h-full px-5 flex items-center border border-gray-700 hover:text-white border-b-2 border-b-yellow-400"
          >
            _about-me
          </a>
          <a
            href="#about"
            className="h-full px-5 flex items-center border border-gray-700 hover:text-white transition"
          >
            _projects
          </a>
          <a
            href="#projects"
            className="h-full px-5 flex items-center border border-gray-700 hover:text-white transition"
          >
            _technology
          </a>
        </nav>

        <div className="h-full">
          <a
            href="#contact"
            className="h-full px-5 flex items-center border border-gray-700 hover:text-white transition"
          >
            _contact-me
          </a>
        </div>

      </div>
    </header>
  );
};

export default Navbar;
