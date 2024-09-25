"use client";

import React, { useState, useEffect } from "react";
import UnstyledLink from "@/components/links/UnstyledLink";

export default function NavbarUser() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrollingUp, setIsScrollingUp] = useState(true);
  const [lastScrollPos, setLastScrollPos] = useState(0);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false); // Optional: Close the menu if it's open (on mobile)
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      if (currentScrollPos > lastScrollPos) {
        setIsScrollingUp(false);
      } else {
        setIsScrollingUp(true);
      }
      setLastScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollPos]);

  return (
    <nav
      className={`fixed w-full z-50 bg-transparent transition-transform duration-300 ${isScrollingUp ? "translate-y-0" : "-translate-y-full"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <p className="text-2xl font-bold text-white">Yosa</p>
          </div>

          <div className="hidden md:flex space-x-8 items-center">
            {/* Link to about-me section */}
            <button
              onClick={() => handleScrollToSection("about-me")}
              className="text-white font-medium hover:text-gray-300"
            >
              About Me
            </button>

            {/* Link to skills section */}
            <button
              onClick={() => handleScrollToSection("skills")}
              className="text-white font-medium hover:text-gray-300"
            >
              Skills
            </button>

            {/* Link to work-experience section */}
            <button
              onClick={() => handleScrollToSection("work-experience")}
              className="text-white font-medium hover:text-gray-300"
            >
              Work Experience
            </button>

            <UnstyledLink
              href="/project"
              className="text-white font-medium hover:text-gray-300"
            >
              Project
            </UnstyledLink>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
              aria-label="Menu"
            >
              {isMenuOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-gray-900">
          <div className="space-y-4 px-2 pt-2 pb-3 sm:px-3">
            <button
              onClick={() => handleScrollToSection("about-me")}
              className="block text-white hover:bg-gray-700 rounded-md text-base font-medium"
            >
              About Me
            </button>
            <button
              onClick={() => handleScrollToSection("skills")}
              className="block text-white hover:bg-gray-700 rounded-md text-base font-medium"
            >
              Skills
            </button>
            <button
              onClick={() => handleScrollToSection("work-experience")}
              className="block text-white hover:bg-gray-700 rounded-md text-base font-medium"
            >
              Work Experience
            </button>
            <UnstyledLink
              href="/project"
              className="block text-white hover:bg-gray-700 rounded-md text-base font-medium"
            >
              Project
            </UnstyledLink>
          </div>
        </div>
      )}
    </nav>
  );
}
