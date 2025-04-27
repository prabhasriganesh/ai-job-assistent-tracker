import React, { useState } from "react";
import { IoLogoAmplify } from "react-icons/io5";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");
  const location = useLocation();
  
  // Check if we're on the home page
  const isHomePage = location.pathname === "/";

  const navLinks = [
    { id: "home", label: "Home", isScroll: true, target: "home", path: "/" },
    { id: "features", label: "Features", isScroll: true, target: "features" },
    { id: "tech-stack", label: "Tech Stack", isScroll: true, target: "tech-stack" },
    { id: "demo", label: "Explanation Video", isScroll: true, target: "demo" },
  ];

  const handleNavClick = (id) => {
    setActiveLink(id);
    setIsMenuOpen(false);
  };

  // Handle logo click - either scroll to top or navigate to home
  const handleLogoClick = () => {
    setActiveLink("home");
    if (isHomePage) {
      // Scroll to top of page smoothly if already on home page
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
  };

  return (
    <header className="fixed w-full top-0 left-0 z-50 transition-all duration-300 bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-2 font-manrope font-light">
        <div className="flex items-center justify-between font-normal">
          {/* Logo */}
          <div className="flex items-center">
            <RouterLink to="/" className="flex items-center" onClick={handleLogoClick}>
              <div className="h-9 w-9 bg-[rgba(68,125,239,0.22)] rounded-full flex items-center justify-center">
                <span className="text-yellow-500 text-sm font-extrabold tracking-wide text-[20px]">
                  <IoLogoAmplify />
                </span>
              </div>
              <span className="ml-2 text-xl font-bold text-gray-100 tracking-tight">
                <span className="text-yellow-500">_ </span>rackIt 
              </span>
            </RouterLink>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-10">
            {navLinks.map((link) => (
              isHomePage && link.isScroll ? (
                <ScrollLink
                  key={link.id}
                  to={link.target}
                  spy={true}
                  smooth={true}
                  offset={link.id === "home" ? -200 : -70} // More offset for home to ensure it scrolls to top
                  duration={500}
                  onClick={() => handleNavClick(link.id)}
                  className={`text-[14px] font-light transition-colors duration-300 cursor-pointer ${
                    activeLink === link.id
                      ? "text-blue-600"
                      : "text-gray-300 hover:text-blue-600"
                  }`}
                >
                  {link.label}
                </ScrollLink>
              ) : (
                <RouterLink
                  key={link.id}
                  to={link.path || "/"}
                  onClick={() => handleNavClick(link.id)}
                  className={`text-[14px] font-light transition-colors duration-300 ${
                    activeLink === link.id
                      ? "text-blue-600"
                      : "text-gray-300 hover:text-blue-600"
                  }`}
                >
                  {link.label}
                </RouterLink>
              )
            ))}
          </nav>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4 text-[14px]">
            <RouterLink
              to="/login"
              className="text-gray-300 hover:text-yellow-500 font-medium"
            >
              Login
            </RouterLink>
            <RouterLink
              to="/signup"
              className="bg-blue-700 hover:bg-blue-600 text-white px-4 py-2 rounded-md font-medium transition-colors duration-300"
            >
              Sign Up
            </RouterLink>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-100 hover:text-blue-600 focus:outline-none"
              aria-label="Toggle menu"
            >
              {!isMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-slate-800 border-t border-slate-800 text-[15px]">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              isHomePage && link.isScroll ? (
                <ScrollLink
                  key={link.id}
                  to={link.target}
                  spy={true}
                  smooth={true}
                  offset={link.id === "home" ? -200 : -70}
                  duration={500}
                  onClick={() => handleNavClick(link.id)}
                  className={`block px-3 py-2 rounded-md text-base font-light cursor-pointer ${
                    activeLink === link.id
                      ? "bg-gray-900 text-blue-600"
                      : "text-gray-300 hover:bg-gray-900 hover:text-blue-600"
                  }`}
                >
                  {link.label}
                </ScrollLink>
              ) : (
                <RouterLink
                  key={link.id}
                  to={link.path || "/"}
                  onClick={() => handleNavClick(link.id)}
                  className={`block px-3 py-2 rounded-md text-base font-light ${
                    activeLink === link.id
                      ? "bg-gray-900 text-blue-600"
                      : "text-gray-300 hover:bg-gray-900 hover:text-blue-600"
                  }`}
                >
                  {link.label}
                </RouterLink>
              )
            ))}
            <div className="mt-4 flex flex-col space-y-2 px-3 pb-2 text-center">
              <RouterLink
                to="/login"
                className="text-gray-300 hover:text-yellow-500 py-2 font-light"
                onClick={() => setIsMenuOpen(false)}
              >
                Login
              </RouterLink>
              <RouterLink
                to="/signup"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-center font-medium transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Sign Up
              </RouterLink>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;