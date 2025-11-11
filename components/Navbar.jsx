"use client";

import Link from "next/link";
import { useState } from "react";
import { useTheme } from "next-themes";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();


  return (
    <nav className="fixed top-0 left-0 w-full bg-red/40 dark:bg-black/40 backdrop-blur-md border-b border-white/20 shadow-lg z-50 transition-all duration-300">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo / Brand Name */}
        <h1 className="text-2xl font-bold tracking-wide text-white drop-shadow-md">
          <a href={'#hero'}
             onClick={(e) => {
              e.preventDefault();
              const el = document.getElementById("hero");
              if (el) el.scrollIntoView({ behavior: "smooth" });
              setMenuOpen(false); // close mobile menu if open
            }}
          >
          The Spice Table
          </a>
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-lg">
          {["about", "menu", "gallery", "contact"].map((section) => (
            <a
              key={section}
              href={`#${section}`}
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById(section);
                if (el) el.scrollIntoView({ behavior: "smooth" });
                setMenuOpen(false); // close mobile menu if open
              }}
              className="relative group"
            >
              <span className="text-white/90 hover:text-red-400 transition duration-300">
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </span>
              <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-red-500 group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
        </div>


        {/* Dark Mode Toggle */}
        <button
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          className="hidden md:block bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/20 text-sm hover:bg-white/20 transition"
        >
          {theme === "light" ? "🌙 Dark" : "☀️ Light"}
        </button>


        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-3xl text-white focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-lg border-t border-white/20 text-center py-4 space-y-4 animate-fadeIn">
          {["about", "menu", "gallery", "contact"].map((section) => (
            <a
              key={section}
              href={`#${section}`}
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById(section);
                if (el) el.scrollIntoView({ behavior: "smooth" });
                setMenuOpen(false); // close mobile menu if open
              }}
              className="block text-white/90 text-lg hover:text-red-400 transition"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
