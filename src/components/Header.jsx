import React, { useState } from "react";

const navLinks = [
  { href: "#experiences", label: "Experiences" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#certificates", label: "Certificates" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full flex justify-center items-center py-6 bg-transparent">
      <div className="relative w-full flex justify-center">
        {/* Glassmorphism container */}
        <div className="backdrop-blur-xl bg-white/70 shadow-xl rounded-full px-4 sm:px-8 py-3 flex items-center justify-between max-w-5xl w-full mx-2 ring-1 ring-gray-200 transition-all duration-300">
          {/* Desktop Nav */}
          <nav className="hidden md:flex flex-1 items-center justify-between">
            <div className="flex items-center gap-8">
              {navLinks.slice(0, 3).map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="group text-lg font-semibold text-gray-500 hover:text-gray-900 transition-all duration-300 tracking-wide transform hover:scale-110 hover:shadow-lg px-2 py-1 rounded-full"
                >
                  {link.label.split(" ").map((word, i) => (
                    <span key={i} className="block leading-tight">
                      {word}
                    </span>
                  ))}
                  <span className="block h-0.5 w-0 bg-gradient-to-r from-indigo-400 to-pink-400 group-hover:w-full transition-all duration-300 rounded-full"></span>
                </a>
              ))}
            </div>
            {/* Logo */}
            <div className="flex-shrink-0 px-4">
              <span className="text-3xl font-extrabold text-gray-900 tracking-widest drop-shadow-sm select-none cursor-pointer transition-transform duration-300 hover:animate-bounce">
                NITHISH 
              </span>
            </div>
            <div className="flex items-center gap-8">
              {navLinks.slice(3).map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="group text-lg font-semibold text-gray-500 hover:text-gray-900 transition-all duration-300 tracking-wide transform hover:scale-110 hover:shadow-lg px-2 py-1 rounded-full"
                >
                  {link.label}
                  <span className="block h-0.5 w-0 bg-gradient-to-r from-indigo-400 to-pink-400 group-hover:w-full transition-all duration-300 rounded-full"></span>
                </a>
              ))}
              <button className="ml-4 bg-black text-white font-bold px-7 py-2 rounded-full shadow-lg hover:bg-gray-900 transition-all duration-300 text-lg tracking-wide transform hover:scale-105 hover:shadow-[0_0_20px_0_rgba(99,102,241,0.5)] hover:ring-2 hover:ring-indigo-400">
                Connect
              </button>
            </div>
          </nav>

          {/* Mobile Nav Toggle */}
          <div className="flex md:hidden flex-1 justify-between items-center w-full">
            <span className="text-2xl font-extrabold text-gray-900 tracking-widest select-none cursor-pointer transition-transform duration-300 hover:animate-bounce">
              Nithish S
            </span>
            <button
              onClick={() => setIsMenuOpen((v) => !v)}
              className="p-2 rounded-full bg-white/80 hover:bg-white/100 shadow transition"
              aria-label="Open menu"
            >
              <svg
                className="h-7 w-7 text-gray-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full flex justify-center z-50">
            <div className="mt-3 w-[95vw] max-w-md bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl py-6 px-6 flex flex-col items-center gap-3 border border-gray-100 animate-fade-in-down">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="w-full text-center text-lg font-semibold text-gray-700 hover:text-black py-2 rounded transition-all duration-300 transform hover:scale-105 hover:bg-gray-100"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <button
                className="mt-2 w-full bg-black text-white font-bold px-7 py-2 rounded-full shadow-lg hover:bg-gray-900 transition-all duration-300 text-lg tracking-wide transform hover:scale-105 hover:shadow-[0_0_20px_0_rgba(99,102,241,0.5)] hover:ring-2 hover:ring-indigo-400"
                onClick={() => setIsMenuOpen(false)}
              >
                Connect
              </button>
            </div>
          </div>
        )}
      </div>
      {/* Custom animation for mobile menu */}
      <style>
        {`
          @keyframes fade-in-down {
            0% { opacity: 0; transform: translateY(-20px);}
            100% { opacity: 1; transform: translateY(0);}
          }
          .animate-fade-in-down {
            animation: fade-in-down 0.4s cubic-bezier(0.4,0,0.2,1) both;
          }
        `}
      </style>
    </header>
  );
};

export default Header;
