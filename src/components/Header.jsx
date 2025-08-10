import { NavLink } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const baseClass =
    "h-full px-5 flex items-center border border-gray-700 transition";
  const activeClass = "text-white border-b-2 border-b-yellow-400";
  const inactiveClass = "text-[#90a1b9]";

  const navItems = [
    { to: "/about-me", label: "_about-me" },
    { to: "/projects", label: "_projects" },
    { to: "/tech-stack", label: "_technology" },
    { to: "/contact", label: "_contact-me" },
  ];

  return (
    <header className="bg-[#020817] border-b border-gray-700 font-mono">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-10 px-4">
        {/* Logo */}
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

        {/* Desktop Nav */}
        <nav className="hidden md:flex h-full">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `${baseClass} ${isActive ? activeClass : inactiveClass}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[#90a1b9] focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>
      </div>

      {/* Mobile Dropdown with Animation */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col border-t border-gray-700">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `px-4 py-3 border-b border-gray-700 transition-colors duration-300 ${
                  isActive ? activeClass : inactiveClass
                }`
              }
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
