"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm"
          : "bg-white/90 backdrop-blur-md"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center">
              <Image
                src="/logo.png"
                alt="SwiftFi Logo"
                width={40}
                height={40}
                className="mr-3"
              />
              <span className="text-xl font-bold text-gray-900">SwiftBank</span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#personal"
              className="text-gray-600 hover:text-purple-600 font-medium transition-colors"
            >
              Personal
            </a>
            <a
              href="#business"
              className="text-gray-600 hover:text-purple-600 font-medium transition-colors"
            >
              Business
            </a>
            <a
              href="#enterprise"
              className="text-gray-600 hover:text-purple-600 font-medium transition-colors"
            >
              Enterprise
            </a>
            <a
              href="#developer"
              className="text-gray-600 hover:text-purple-600 font-medium transition-colors"
            >
              Developer
            </a>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileOpen((open) => !open)}
              className="text-gray-700 hover:text-purple-600 focus:outline-none"
              aria-label="Open menu"
            >
              {mobileOpen ? (
                <X className="w-7 h-7" />
              ) : (
                <Menu className="w-7 h-7" />
              )}
            </button>
          </div>

          {/* Action Buttons (Desktop) */}
          <div className="hidden md:flex items-center space-x-4">
            <motion.button
              className="text-purple-600 hover:text-purple-700 font-medium transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Login
            </motion.button>
            <motion.button
              className="bg-purple-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-purple-700 transition-colors"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 25px -5px rgba(147, 51, 234, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              Sign Up
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md shadow-lg px-4 pt-2 pb-4">
          <div className="flex flex-col space-y-3">
            <a
              href="#personal"
              className="text-gray-700 hover:text-purple-600 font-medium transition-colors py-2"
              onClick={() => setMobileOpen(false)}
            >
              Personal
            </a>
            <a
              href="#business"
              className="text-gray-700 hover:text-purple-600 font-medium transition-colors py-2"
              onClick={() => setMobileOpen(false)}
            >
              Business
            </a>
            <a
              href="#enterprise"
              className="text-gray-700 hover:text-purple-600 font-medium transition-colors py-2"
              onClick={() => setMobileOpen(false)}
            >
              Enterprise
            </a>
            <a
              href="#developer"
              className="text-gray-700 hover:text-purple-600 font-medium transition-colors py-2"
              onClick={() => setMobileOpen(false)}
            >
              Developer
            </a>
            <div className="flex space-x-2 mt-2">
              <button
                className="flex-1 text-purple-600 border border-purple-600 rounded-lg py-2 font-medium hover:bg-purple-50 transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                Login
              </button>
              <button
                className="flex-1 bg-purple-600 text-white rounded-lg py-2 font-medium hover:bg-purple-700 transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      )}
    </motion.nav>
  );
};

export default Navigation;
