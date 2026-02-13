import React, { useState, useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-scroll";

function Navbar() {
  const [menu, setMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { id: 1, text: "Home" },
    { id: 2, text: "About" },
    { id: 3, text: "Portfolio" },
    { id: 4, text: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        scrolled
          ? "bg-white shadow-sm h-16"
          : "bg-white/80 backdrop-blur-md h-20"
      }`}
    >
      <div className="max-w-350 mx-auto px-6 md:px-16 h-full flex justify-between items-center">

        {/* Logo */}
        <div className="cursor-pointer">
          <h1 className="text-2xl md:text-3xl font-bold leading-none">
            <span className="bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Dhruv
            </span>
          </h1>
          {!scrolled && (
            <p className="text-xs text-gray-500">Full Stack Developer</p>
          )}
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-12 font-medium text-gray-700">
          {navItems.map(({ id, text }) => (
            <li key={id} className="relative group cursor-pointer">
              <Link
                to={text}
                smooth={true}
                duration={500}
                offset={-80}
                spy={true}
                activeClass="text-indigo-600"
                className="transition-colors duration-300 group-hover:text-indigo-600"
              >
                {text}
              </Link>

              {/* Active + Hover Underline */}
              <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-indigo-600 transition-all duration-300 group-hover:w-full group-[.active]:w-full"></span>
            </li>
          ))}
        </ul>

        {/* Mobile Icon */}
        <div
          className="md:hidden text-gray-800 cursor-pointer"
          onClick={() => setMenu(!menu)}
        >
          {menu ? <IoCloseSharp size={24} /> : <AiOutlineMenu size={24} />}
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menu ? "max-h-96 border-t" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col px-6 py-6 space-y-6 font-medium text-gray-700 bg-white">
          {navItems.map(({ id, text }) => (
            <li key={id} className="relative group">
              <Link
                onClick={() => setMenu(false)}
                to={text}
                smooth={true}
                duration={500}
                offset={-80}
                className="block transition-colors duration-300 group-hover:text-indigo-600"
              >
                {text}
              </Link>
              <span className="block w-0 h-0.5 bg-indigo-600 transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
