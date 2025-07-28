import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logoImg from '../assets/image/pp_logo.png';
import { FaUserCircle, FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';

const menuList = [
  { menuName: "Home", path: "/" },
  { menuName: "About Us", path: "/about" },
  { menuName: "Contact Us", path: "/contact" },
  { menuName: "Our Team", path: "/team" },
];

function Navbar({ theme, setTheme }) {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    const root = document.documentElement;
    if (newTheme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  };

  return (
    <nav className="w-full fixed top-0 z-50 bg-gray-200 dark:bg-gray-900 shadow-md shadow-sky-700 px-6 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={logoImg} alt="Logo" className="h-10 w-auto" />
          <span className="text-xl font-bold text-gray-800 dark:text-white">Pawan Sharma</span>
        </div>

        {/* Hamburger Icon - Mobile */}
        <button
          className="text-2xl md:hidden text-gray-700 dark:text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Menu Items - Desktop */}
        <ul className="hidden md:flex items-center gap-6 text-gray-800 dark:text-white">
          {menuList.map((menu, index) => (
            <li key={index}>
              <Link
                to={menu.path}
                className={`hover:text-blue-600 transition ${
                  location.pathname === menu.path
                    ? "font-semibold underline text-blue-600"
                    : ""
                }`}
              >
                {menu.menuName}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right Section - Theme + Profile */}
        <div className="hidden md:flex items-center gap-4">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="text-xl text-gray-700 dark:text-white hover:text-blue-500 transition"
            title="Toggle Theme"
          >
            {theme === "dark" ? <FaSun /> : <FaMoon />}
          </button>

          {/* Profile Icon */}
          <button
            className="text-2xl text-gray-700 dark:text-white hover:text-blue-500 transition"
            title="Profile"
          >
            <FaUserCircle />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-100 dark:bg-gray-800 px-6 py-4 shadow-md">
          <ul className="flex flex-col gap-4 text-gray-800 dark:text-white">
            {menuList.map((menu, index) => (
              <li key={index}>
                <Link
                  to={menu.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block hover:text-blue-600 transition ${
                    location.pathname === menu.path
                      ? "font-semibold underline text-blue-600"
                      : ""
                  }`}
                >
                  {menu.menuName}
                </Link>
              </li>
            ))}
            <li className="flex items-center gap-4 mt-4">
              <button
                onClick={toggleTheme}
                className="text-xl text-gray-700 dark:text-white hover:text-blue-500 transition"
                title="Toggle Theme"
              >
                {theme === "dark" ? <FaSun /> : <FaMoon />}
              </button>
              <button
                className="text-2xl text-gray-700 dark:text-white hover:text-blue-500 transition"
                title="Profile"
              >
                <FaUserCircle />
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
