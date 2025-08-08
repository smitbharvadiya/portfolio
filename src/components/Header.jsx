import { NavLink } from "react-router-dom";

const Navbar = () => {
  const baseClass =
    "h-full px-5 flex items-center border border-gray-700 transition";
  const activeClass = "text-white border-b-2 border-b-yellow-400";
  const inactiveClass = "text-[#90a1b9]";

  return (
    <header className="bg-[#020817] border-b border-gray-700 font-mono">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-10">
        <nav className="flex h-full">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `h-full pr-14 pl-4 font-bold flex items-center border border-gray-700 transition ${
                isActive ? activeClass : inactiveClass
              }`
            }
          >
            Smit.dev
          </NavLink>

          <NavLink
            to="/about-me"
            className={({ isActive }) =>
              `${baseClass} ${isActive ? activeClass : inactiveClass}`
            }
          >
            _about-me
          </NavLink>

          <NavLink
            to="/projects"
            className={({ isActive }) =>
              `${baseClass} ${isActive ? activeClass : inactiveClass}`
            }
          >
            _projects
          </NavLink>

          <NavLink
            to="/tech-stack"
            className={({ isActive }) =>
              `${baseClass} ${isActive ? activeClass : inactiveClass}`
            }
          >
            _technology
          </NavLink>
        </nav>

        <div className="h-full">
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `${baseClass} ${isActive ? activeClass : inactiveClass}`
            }
          >
            _contact-me
          </NavLink>
        </div>
        
      </div>
    </header>
  );
};

export default Navbar;
